import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ListToolsRequestSchema,
  CallToolRequestSchema,
  ErrorCode,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import { ALL_RESOURCES, CDN_LINK } from "./data.js";
import type { PaperCssItem } from "./data.js";

class PaperCssServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: "papercss-server",
        version: "1.1.0",
      },
      {
        capabilities: {
          resources: {},
          tools: {},
        },
      }
    );

    this.setupResourceHandlers();
    this.setupToolHandlers();

    this.server.onerror = (error) => console.error("[MCP Error]", error);
  }

  private setupResourceHandlers() {
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      const resources = [];

      for (const [category, items] of Object.entries(ALL_RESOURCES)) {
        for (const item of items) {
          resources.push({
            uri: `papercss://${category}/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
            name: `${item.name} (${category})`,
            mimeType: "text/markdown",
            description: item.description,
          });
        }
      }

      return { resources };
    });

    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const url = new URL(request.params.uri);
      const category = url.host as keyof typeof ALL_RESOURCES;
      const itemName = url.pathname.split("/").pop()?.replace(/-/g, ' ');

      const items = ALL_RESOURCES[category];
      if (!items) {
        throw new McpError(
          ErrorCode.InvalidRequest,
          `Unknown category: ${category}`
        );
      }

      const item = items.find(
        (i) => i.name.toLowerCase() === itemName?.toLowerCase()
      );

      if (!item) {
        throw new McpError(
          ErrorCode.InvalidRequest,
          `Item not found: ${itemName} in ${category}`
        );
      }

      const markdown = `# ${item.name} - ${category.toUpperCase()}\n\n${item.description}\n\nDocumentation: ${item.docsUrl}\n\n### HTML Snippet:\n\n\`\`\`html\n${item.snippet}\n\`\`\``;

      return {
        contents: [
          {
            uri: request.params.uri,
            mimeType: "text/markdown",
            text: markdown,
          },
        ],
      };
    });
  }

  private setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: "list_items",
          description: "List PaperCSS documentation items by category or all",
          inputSchema: {
            type: "object",
            properties: {
              category: {
                type: "string",
                enum: ["components", "content", "layout", "utilities"],
                description: "The category of items to list",
              },
            },
          },
        },
        {
          name: "get_snippet",
          description: "Get the HTML snippet for a specific PaperCSS item",
          inputSchema: {
            type: "object",
            properties: {
              itemName: {
                type: "string",
                description: "The name of the item (e.g., Buttons, Flexbox, Typography)",
              },
              category: {
                type: "string",
                enum: ["components", "content", "layout", "utilities"],
                description: "Optional category to narrow down the search",
              },
            },
            required: ["itemName"],
          },
        },
        {
          name: "get_cdn_link",
          description: "Get the CDN link for PaperCSS",
          inputSchema: {
            type: "object",
            properties: {},
          },
        },
        // Backward compatibility
        {
          name: "list_components",
          description: "List all available PaperCSS components (Deprecated: use list_items)",
          inputSchema: {
            type: "object",
            properties: {},
          },
        },
        {
          name: "get_component_snippet",
          description: "Get the HTML snippet for a specific PaperCSS component (Deprecated: use get_snippet)",
          inputSchema: {
            type: "object",
            properties: {
              componentName: {
                type: "string",
                description: "The name of the component",
              },
            },
            required: ["componentName"],
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      switch (request.params.name) {
        case "list_items": {
          const args = request.params.arguments as { category?: keyof typeof ALL_RESOURCES };
          let items: string[] = [];

          if (args.category) {
            items = ALL_RESOURCES[args.category].map(i => i.name);
          } else {
            for (const catItems of Object.values(ALL_RESOURCES)) {
              items.push(...catItems.map(i => i.name));
            }
          }

          return {
            content: [{ type: "text", text: items.join(", ") }],
          };
        }

        case "get_snippet": {
          const args = request.params.arguments as { itemName: string; category?: keyof typeof ALL_RESOURCES };
          let item: PaperCssItem | undefined;

          if (args.category) {
            item = ALL_RESOURCES[args.category].find(i => i.name.toLowerCase() === args.itemName.toLowerCase());
          } else {
            for (const catItems of Object.values(ALL_RESOURCES)) {
              item = catItems.find(i => i.name.toLowerCase() === args.itemName.toLowerCase());
              if (item) break;
            }
          }

          if (!item) {
            throw new McpError(ErrorCode.InvalidRequest, `Item not found: ${args.itemName}`);
          }

          return {
            content: [{ type: "text", text: item.snippet }],
          };
        }

        case "get_cdn_link":
          return {
            content: [{ type: "text", text: CDN_LINK }],
          };

        case "list_components":
          return {
            content: [{ type: "text", text: ALL_RESOURCES.components.map(c => c.name).join(", ") }],
          };

        case "get_component_snippet": {
          const args = request.params.arguments as { componentName: string };
          const component = ALL_RESOURCES.components.find(
            (c) => c.name.toLowerCase() === args.componentName.toLowerCase()
          );

          if (!component) {
            throw new McpError(ErrorCode.InvalidRequest, `Component not found: ${args.componentName}`);
          }

          return {
            content: [{ type: "text", text: component.snippet }],
          };
        }

        default:
          throw new McpError(
            ErrorCode.MethodNotFound,
            `Unknown tool: ${request.params.name}`
          );
      }
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("PaperCSS MCP server running on stdio");
  }
}

const server = new PaperCssServer();
server.run().catch(console.error);
