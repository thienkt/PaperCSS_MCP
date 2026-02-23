export interface PaperCssItem {
  name: string;
  description: string;
  snippet: string;
  docsUrl: string;
}

export const COMPONENTS: PaperCssItem[] = [
  {
    name: "Alerts",
    description: "Pop-up messages to grab attention.",
    snippet: `<div class="alert alert-primary">This is a primary alert!</div>\n<div class="alert alert-secondary">This is a secondary alert!</div>\n<div class="alert alert-success">This is a success alert!</div>\n<div class="alert alert-warning">This is a warning alert!</div>\n<div class="alert alert-danger">This is a danger alert!</div>`,
    docsUrl: "https://www.getpapercss.com/docs/components/alerts/",
  },
  {
    name: "Articles",
    description: "Styling for blog-like article content.",
    snippet: `<article class="article">\n  <h1 class="article-title"><a href="">Article Title</a></h1>\n  <p class="article-meta">Written by <a href="#">Super User</a></p>\n  <p class="text-lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n  <p>Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente...</p>\n  <div class="row">\n    <button>Read More</button>\n    <button>5 Comments</button>\n  </div>\n</article>`,
    docsUrl: "https://www.getpapercss.com/docs/components/articles/",
  },
  {
    name: "Badges",
    description: "Small status indicators.",
    snippet: `<span class="badge">Default</span>\n<span class="badge primary">Primary</span>\n<span class="badge secondary">Secondary</span>\n<span class="badge success">Success</span>\n<span class="badge warning">Warning</span>\n<span class="badge danger">Danger</span>`,
    docsUrl: "https://www.getpapercss.com/docs/components/badges/",
  },
  {
    name: "Breadcrumb",
    description: "Navigation trails for deep site structures.",
    snippet: `<ul class="breadcrumb border">\n  <li><a href="#">Documentation</a></li>\n  <li><a href="#">Components</a></li>\n  <li>Breadcrumb</li>\n</ul>`,
    docsUrl: "https://www.getpapercss.com/docs/components/breadcrumb/",
  },
  {
    name: "Buttons",
    description: "Hand-drawn style buttons.",
    snippet: `<button>Default Button</button>\n<button class="btn-primary">Primary Button</button>\n<button class="btn-secondary">Secondary Button</button>\n<button class="btn-success">Success Button</button>\n<button class="btn-warning">Warning Button</button>\n<button class="btn-danger">Danger Button</button>\n<button class="btn-large">Large Button</button>\n<button class="btn-small">Small Button</button>\n<button class="btn-block">Block Button</button>\n<button class="disabled">Disabled Button</button>`,
    docsUrl: "https://www.getpapercss.com/docs/components/buttons/",
  },
  {
    name: "Cards",
    description: "Container for content with a paper-like appearance.",
    snippet: `<div class="card" style="width: 20rem;">\n  <div class="card-body">\n    <h4 class="card-title">Card Title</h4>\n    <h5 class="card-subtitle">Card Subtitle</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <button>Go somewhere</button>\n  </div>\n</div>`,
    docsUrl: "https://www.getpapercss.com/docs/components/cards/",
  },
  {
    name: "Collapsibles",
    description: "Accordion-style expandable sections.",
    snippet: `<div class="collapsible">\n  <input id="collapsible1" type="checkbox" name="collapsible">\n  <label for="collapsible1">First</label>\n  <div class="collapsible-body">\n    <span>Bacon ipsum dolor sit amet landjaeger sausage brisket...</span>\n  </div>\n</div>`,
    docsUrl: "https://www.getpapercss.com/docs/components/collapsible/",
  },
  {
    name: "Forms",
    description: "Input fields, checkboxes, and radio buttons.",
    snippet: `<div class="form-group">\n  <label for="paperInputs1">Input</label>\n  <input type="text" placeholder="Enter text here..." id="paperInputs1">\n</div>\n<div class="form-group">\n  <label for="paperSelects1">Select</label>\n  <select id="paperSelects1">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n  </select>\n</div>\n<fieldset class="form-group">\n  <label for="paperChecks1" class="paper-check">\n    <input type="checkbox" name="paperChecks" id="paperChecks1" value="option 1"> <span>Checkbox 1</span>\n  </label>\n</fieldset>`,
    docsUrl: "https://www.getpapercss.com/docs/components/forms/",
  },
  {
    name: "Modals",
    description: "Dialog overlays for focused interactions.",
    snippet: `<label class="paper-btn margin" for="modal-1">Open Modal!</label>\n<input class="modal-state" id="modal-1" type="checkbox">\n<div class="modal">\n  <label class="modal-bg" for="modal-1"></label>\n  <div class="modal-body">\n    <label class="btn-close" for="modal-1">X</label>\n    <h4 class="modal-title">Modal Title</h4>\n    <h5 class="modal-subtitle">Modal Subtitle</h5>\n    <p class="modal-text">This is an example of modal which is implemented with pure CSS! :D</p>\n    <label for="modal-1">Nice!</label>\n  </div>\n</div>`,
    docsUrl: "https://www.getpapercss.com/docs/components/modals/",
  },
  {
    name: "Navbar",
    description: "A simple responsive navigation bar.",
    snippet: `<nav class="border fixed split-nav">\n  <div class="nav-brand">\n    <h3><a href="#">PaperCSS</a></h3>\n  </div>\n  <div class="collapsible">\n    <input id="collapsible1" type="checkbox" name="collapsible1">\n    <button><label for="collapsible1">Menu</label></button>\n    <div class="collapsible-body">\n      <ul class="inline">\n        <li><a href="#">Documentation</a></li>\n        <li><a href="#">About</a></li>\n        <li><a href="#">Github</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>`,
    docsUrl: "https://www.getpapercss.com/docs/components/navbar/",
  },
  {
    name: "Popovers",
    description: "Contextual information bubbles.",
    snippet: `<p popover-left="Popover on left">Popover left position</p>\n<p popover-top="Popover on top">Popover top position</p>\n<p popover-bottom="Popover on bottom">Popover bottom position</p>\n<p popover-right="Popover on right">Popover right position</p>`,
    docsUrl: "https://www.getpapercss.com/docs/components/popovers/",
  },
  {
    name: "Progress",
    description: "Simple progress bars.",
    snippet: `<div class="progress margin-bottom">\n  <div class="bar bar-success w-75">75%</div>\n</div>\n<div class="progress margin-bottom">\n  <div class="bar bar-warning w-50">50%</div>\n</div>\n<div class="progress margin-bottom">\n  <div class="bar bar-danger w-25">25%</div>\n</div>`,
    docsUrl: "https://www.getpapercss.com/docs/components/progress/",
  },
  {
    name: "Tabs",
    description: "Tabbed navigation interfaces.",
    snippet: `<div class="row flex-spaces tabs">\n  <input id="tab1" type="radio" name="tabs" checked>\n  <label for="tab1">Tab 1</label>\n  <input id="tab2" type="radio" name="tabs">\n  <label for="tab2">Tab 2</label>\n  <div class="content" id="content1">\n    <p>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa...</p>\n  </div>\n  <div class="content" id="content2">\n    <p>Bacon ipsum dolor sit amet landjaeger sausage brisket...</p>\n  </div>\n</div>`,
    docsUrl: "https://www.getpapercss.com/docs/components/tabs/",
  },
];

export const CONTENT: PaperCssItem[] = [
  {
    name: "Code",
    description: "Inline and block-level code styling.",
    snippet: `<p>Let's make some pretty <code><code></code></p>\n<p>Print files backwards using <kbd>tac</kbd></p>\n<pre><code>function add(x, y) { return x + y; }</code></pre>`,
    docsUrl: "https://www.getpapercss.com/docs/content/code/",
  },
  {
    name: "Images",
    description: "Responsive and styled image containers.",
    snippet: `<img src="https://unsplash.it/900" alt="Random Unsplash" class="border">`,
    docsUrl: "https://www.getpapercss.com/docs/content/images/",
  },
  {
    name: "Lists",
    description: "Ordered and unordered list styling.",
    snippet: `<ol>\n  <li>Do this</li>\n  <li>Then this\n    <ol>\n      <li>Nested item</li>\n    </ol>\n  </li>\n</ol>\n<ul class="inline">\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>`,
    docsUrl: "https://www.getpapercss.com/docs/content/lists/",
  },
  {
    name: "Tables",
    description: "Clean, 'paper-style' table layouts.",
    snippet: `<table class="table-hover table-alternating">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Position</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>Bob Dylan</td>\n      <td>Musician</td>\n    </tr>\n  </tbody>\n</table>`,
    docsUrl: "https://www.getpapercss.com/docs/content/tables/",
  },
  {
    name: "Typography",
    description: "Default headers, paragraphs, and text formatting.",
    snippet: `<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>`,
    docsUrl: "https://www.getpapercss.com/docs/content/typography/",
  },
];

export const LAYOUT: PaperCssItem[] = [
  {
    name: "Container",
    description: "Centralized wrapper for site content.",
    snippet: `<div class="paper container container-md">\n  <!-- Your content here -->\n</div>`,
    docsUrl: "https://www.getpapercss.com/docs/layout/container/",
  },
  {
    name: "Flexbox",
    description: "A simple flex-based grid system.",
    snippet: `<div class="row flex-center">\n  <div class="col-4 col">col-4</div>\n  <div class="col-4 col">col-4</div>\n</div>`,
    docsUrl: "https://www.getpapercss.com/docs/layout/flexbox/",
  },
];

export const UTILITIES: PaperCssItem[] = [
  {
    name: "Borders",
    description: "Hand-drawn border styles and thicknesses.",
    snippet: `<div class="border border-primary">Default Border</div>\n<div class="border border-2">Border-2</div>\n<div class="border border-dotted">Dotted</div>`,
    docsUrl: "https://www.getpapercss.com/docs/utilities/borders/",
  },
  {
    name: "Colors",
    description: "Text and background color utilities.",
    snippet: `<p class="text-primary">Text primary</p>\n<div class="background-secondary">Background secondary</div>`,
    docsUrl: "https://www.getpapercss.com/docs/utilities/colors/",
  },
  {
    name: "Dark Mode",
    description: "Documentation on dark mode implementation.",
    snippet: `<html class='dark'>\n  <!-- Dark mode is applied with the .dark class on the html tag -->\n</html>`,
    docsUrl: "https://www.getpapercss.com/docs/utilities/dark-mode/",
  },
  {
    name: "Spacing",
    description: "Margin and padding utility classes.",
    snippet: `<div class="margin-top-large padding-small">Spacing utilities</div>`,
    docsUrl: "https://www.getpapercss.com/docs/utilities/spacing/",
  },
];

export const CDN_LINK = "https://unpkg.com/papercss@1.9.2/dist/paper.min.css";

export const ALL_RESOURCES = {
  components: COMPONENTS,
  content: CONTENT,
  layout: LAYOUT,
  utilities: UTILITIES,
};
