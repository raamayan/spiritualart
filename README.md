# Spiritual Art - Mystical Shopify Theme

A stunning, ethereal Shopify theme customized for spiritual art, built on Dawn with mystical design elements, divine color palettes, and AI-generated artwork.

## ✨ Features

### Mystical Design System
- **Divine Color Palette**: Warm creams, deep cosmic purples, and metallic gold accents
- **Ethereal Typography**: Elegant serif fonts (Cormorant Garamond) for headings, clean sans-serif for body text
- **Smooth Animations**: Fade-in effects, hover glows, and gentle transitions
- **Gallery-Focused Layout**: Wide 1600px page width with generous spacing for art showcase
- **Custom Scrollbar**: Gold and purple themed scrollbar matching the mystical aesthetic

### AI Image Generation
- **Automated Art Creation**: Generate mystical spiritual art using Google's Gemini 2.5 Flash Image model
- **5 Pre-configured Prompts**: Ready-to-use prompts for Radha-Krishna art, cosmic meditations, lotus landscapes, mandalas, and divine figures
- **Easy Integration**: Generated images automatically saved to `assets/` folder

### Enhanced User Experience
- **Parallax Hero Sections**: Immersive full-width banners with mystical artwork
- **Slideshow Gallery**: Auto-rotating slideshow showcasing multiple art pieces
- **Smooth Scrolling**: Enhanced navigation with elegant transitions
- **Responsive Design**: Mobile-first approach with mystical styling across all devices

## 🚀 Getting Started

### Prerequisites
- Node.js v24+ installed
- Shopify CLI installed (`npm install -g @shopify/cli`)
- Google API key for image generation (optional)

### Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   Create a `.env` file:
   ```
   SHOPIFY_FLAG_STORE=your-store.myshopify.com
   GOOGLE_API_KEY=your-api-key-here
   ```

3. **Generate Mystical Art Images** (Optional)
   ```bash
   npm run generate
   ```
   This will create 5 mystical art images in the `assets/` folder using AI.

4. **Start Development Server**
   ```bash
   shopify theme dev --store=your-store.myshopify.com
   ```

## 🎨 Customization

### Color Schemes
The theme includes 5 mystical color schemes:
- **Scheme 1**: Light ethereal (warm cream background, gold accents)
- **Scheme 2**: Dark mystical (deep purple cosmic background)
- **Scheme 3**: Indigo power (deep indigo with gold)
- **Scheme 4**: Charcoal elegance (dark with light text)
- **Scheme 5**: Rose gold (soft pink with gold)

### Typography
- **Headings**: Cormorant Garamond (serif, elegant)
- **Body**: Lato (clean, readable)

### Custom CSS
Additional mystical styling is in `assets/mystical.css`:
- Fade-in animations
- Hover effects with gold glows
- Custom scrollbar
- Image zoom effects

## 📁 Project Structure

```
spiritualart/
├── assets/
│   ├── mystical.css          # Custom mystical styling
│   └── mystical-art-*.png    # AI-generated art images
├── config/
│   ├── settings_data.json    # Theme settings with mystical colors
│   └── settings_schema.json  # Theme settings schema
├── layout/
│   ├── theme.liquid          # Main theme layout (includes Google Fonts)
│   └── password.liquid       # Password page layout
├── sections/                 # Shopify sections (image-banner, slideshow, etc.)
├── templates/
│   └── index.json           # Homepage with hero & slideshow
├── snippets/                # Reusable Liquid snippets
├── locales/                 # Translation files
├── .shopifyignore          # Files excluded from Shopify sync
├── .gitignore              # Files excluded from Git
├── generate-images.js      # AI image generation script
└── package.json            # Dependencies
```

### Important Notes
- **Image References**: Template JSON files use empty strings for images - upload via theme editor
- **Font Handles**: Uses valid Shopify font handles (e.g., `assistant_n4`)
- **Section Order**: All sections in templates must be listed in the `order` array

## 🛠️ Developer Tools

### Shopify CLI
```bash
shopify theme dev          # Start development server with hot reload
shopify theme dev --theme-editor-sync  # Two-way sync with theme editor
shopify theme push         # Push changes to store
shopify theme pull         # Pull latest from store
shopify theme check        # Run theme validation
```

### Image Generation
```bash
npm run generate           # Generate 5 mystical art images
```

### File Management
- **`.shopifyignore`**: Excludes development files (node_modules, scripts, docs) from Shopify sync
- **`.gitignore`**: Excludes sensitive and generated files from version control
- Development files are automatically excluded when syncing to Shopify

### Theme Editor Sync
When using `--theme-editor-sync`, changes made in the Shopify theme editor will sync back to your local files. This enables two-way synchronization between your local development environment and the Shopify admin.

### Image Assets
- Images in `assets/` folder are automatically synced to Shopify
- For template JSON files, set image fields to empty strings (`""`) - images should be uploaded via the theme editor
- Generated mystical art images can be assigned in the theme editor after sync

## 📝 Based on Dawn

This theme is built on [Dawn](https://github.com/Shopify/dawn), Shopify's reference theme, with extensive customization for spiritual art.

* **Web-native in its purest form:** Themes run on the [evergreen web](https://www.w3.org/2001/tag/doc/evergreen-web/). We leverage the latest web browsers to their fullest, while maintaining support for the older ones through progressive enhancement—not polyfills.
* **Lean, fast, and reliable:** Functionality and design defaults to “no” until it meets this requirement. Code ships on quality. Themes must be built with purpose. They shouldn’t support each and every feature in Shopify.
* **Server-rendered:** HTML must be rendered by Shopify servers using Liquid. Business logic and platform primitives such as translations and money formatting don’t belong on the client. Async and on-demand rendering of parts of the page is OK, but we do it sparingly as a progressive enhancement.
* **Functional, not pixel-perfect:** The Web doesn’t require each page to be rendered pixel-perfect by each browser engine. Using semantic markup, progressive enhancement, and clever design, we ensure that themes remain functional regardless of the browser.

You can find a more detailed version of our theme code principles in the [contribution guide](https://github.com/Shopify/dawn/blob/main/.github/CONTRIBUTING.md#theme-code-principles).

## Getting started
We recommend using Dawn as a starting point for theme development. [Learn more on Shopify.dev](https://shopify.dev/themes/getting-started/create).

> If you're building a theme for the Shopify Theme Store, then you can use Dawn as a starting point. However, the theme that you submit needs to be [substantively different from Dawn](https://shopify.dev/themes/store/requirements#uniqueness) so that it provides added value for merchants. Learn about the [ways that you can use Dawn](https://shopify.dev/themes/tools/dawn#ways-to-use-dawn).

Please note that the main branch may include code for features not yet released. The "stable" version of Dawn is available in the theme store.

## Staying up to date with Dawn changes

Say you're building a new theme off Dawn but you still want to be able to pull in the latest changes, you can add a remote `upstream` pointing to this Dawn repository.

1. Navigate to your local theme folder.
2. Verify the list of remotes and validate that you have both an `origin` and `upstream`:
```sh
git remote -v
```
3. If you don't see an `upstream`, you can add one that points to Shopify's Dawn repository:
```sh
git remote add upstream https://github.com/Shopify/dawn.git
```
4. Pull in the latest Dawn changes into your repository:
```sh
git fetch upstream
git pull upstream main
```

## Developer tools

There are a number of really useful tools that the Shopify Themes team uses during development. Dawn is already set up to work with these tools.

### Shopify CLI

[Shopify CLI](https://github.com/Shopify/shopify-cli) helps you build Shopify themes faster and is used to automate and enhance your local development workflow. It comes bundled with a suite of commands for developing Shopify themes—everything from working with themes on a Shopify store (e.g. creating, publishing, deleting themes) or launching a development server for local theme development.

You can follow this [quick start guide for theme developers](https://shopify.dev/docs/themes/tools/cli) to get started.

### Theme Check

We recommend using [Theme Check](https://github.com/shopify/theme-check) as a way to validate and lint your Shopify themes.

We've added Theme Check to Dawn's [list of VS Code extensions](/.vscode/extensions.json) so if you're using Visual Studio Code as your code editor of choice, you'll be prompted to install the [Theme Check VS Code](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode) extension upon opening VS Code after you've forked and cloned Dawn.

You can also run it from a terminal with the following Shopify CLI command:

```bash
shopify theme check
```

### Continuous Integration

Dawn uses [GitHub Actions](https://github.com/features/actions) to maintain the quality of the theme. [This is a starting point](https://github.com/Shopify/dawn/blob/main/.github/workflows/ci.yml) and what we suggest to use in order to ensure you're building better themes. Feel free to build off of it!

#### Shopify/lighthouse-ci-action

We love fast websites! Which is why we created [Shopify/lighthouse-ci-action](https://github.com/Shopify/lighthouse-ci-action). This runs a series of [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) audits for the home, product and collections pages on a store to ensure code that gets added doesn't degrade storefront performance over time.

#### Shopify/theme-check-action

Dawn runs [Theme Check](#Theme-Check) on every commit via [Shopify/theme-check-action](https://github.com/Shopify/theme-check-action).

## Contributing

Want to make commerce better for everyone by contributing to Dawn? We'd love your help! Please read our [contributing guide](https://github.com/Shopify/dawn/blob/main/.github/CONTRIBUTING.md) to learn about our development process, how to propose bug fixes and improvements, and how to build for Dawn.

## Code of conduct

All developers who wish to contribute through code or issues, please first read our [Code of Conduct](https://github.com/Shopify/dawn/blob/main/.github/CODE_OF_CONDUCT.md).

## Theme Store submission

The [Shopify Theme Store](https://themes.shopify.com/) is the place where Shopify merchants find the themes that they'll use to showcase and support their business. As a theme partner, you can create themes for the Shopify Theme Store and reach an international audience of an ever-growing number of entrepreneurs.

Ensure that you follow the list of [theme store requirements](https://shopify.dev/themes/store/requirements) if you're interested in becoming a [Shopify Theme Partner](https://themes.shopify.com/services/themes/guidelines) and building themes for the Shopify platform.

## License

Copyright (c) 2021-present Shopify Inc. See [LICENSE](/LICENSE.md) for further details.
