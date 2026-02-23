# PaperCSS MCP Server

A Model Context Protocol (MCP) server that provides comprehensive access to [PaperCSS](https://www.getpapercss.com/) components, content styles, layout options, and utilities. PaperCSS is a "less formal" CSS framework with a charming hand-drawn look.

This server allows AI assistants to browse a wide range of PaperCSS resources, retrieve ready-to-use HTML snippets, and integrate its unique aesthetic into web projects seamlessly.

## Features

- **25+ Documentation Resources**: Access detailed documentation for Components, Content, Layout, and Utilities.
- **Categorized Resource URIs**: Resources are logically organized by category (e.g., `papercss://layout/flexbox`).
- **Flexible Toolset**: List and retrieve snippets for any documentation item.
- **HTML Snippets**: High-quality, ready-to-use code snippets for everything from Buttons to Flexbox grids.
- **CDN Integration**: Quickly retrieve the latest PaperCSS CDN link.

## Installation

1. Clone the repository (or navigate to the project directory):
   ```bash
   cd PaperCSS_MCP
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## Configuration with Claude Desktop

To use this MCP server with Claude Desktop, add it to your configuration file:

**File Path:** `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "papercss": {
      "command": "node",
      "args": ["/path/to/PaperCSS_MCP/dist/index.js"]
    }
  }
}
```

> [!IMPORTANT]
> Ensure the path to `dist/index.js` is an absolute path correct for your system.

## Usage

### Tools

- `list_items`: List documentation items. Optional `category` parameter (`components`, `content`, `layout`, `utilities`).
- `get_snippet`: Takes an `itemName` and returns the corresponding HTML snippet.
- `get_cdn_link`: Returns the PaperCSS CDN stylesheet link.

#### Legacy Support (Deprecated)
- `list_components`: List component category items.
- `get_component_snippet`: Get snippet for a component.

### Resources

Resources are exposed using a categorized URI scheme:
`papercss://{category}/{item-name}`

**Categories:**
- `components`: Alerts, Modals, Navbar, Tabs, etc.
- `content`: Code, Images, Tables, Typography, etc.
- `layout`: Container, Flexbox.
- `utilities`: Colors, Borders, Dark Mode, Spacing.

**Example:** `papercss://layout/flexbox` provides the description, documentation URL, and grid snippet.

## Supported Items

### 🧩 Components
Alerts, Articles, Badges, Breadcrumb, Buttons, Cards, Collapsibles, Forms, Modals, Navbar, Popovers, Progress, Tabs.

### 📝 Content
Code, Images, Lists, Tables, Typography.

### 🏗️ Layout
Container, Flexbox.

### 🛠️ Utilities
Borders, Colors, Dark Mode, Spacing.

## License

MIT
