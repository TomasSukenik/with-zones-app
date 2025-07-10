# Next.js 15 Multi-Zone Monorepo Micro-Frontends

This repository implements a scalable, maintainable micro-frontend architecture using Next.js 15, TypeScript (strict mode), and Atomic Design principles. The project is organized as a monorepo (but in future we count on using different repo per micro-app) with five independently deployable Next.js zones:

- **first/**: Contains a Header component and an About page.
- **second/**: Implements post functionality.
- **third/**: Includes a Header component and an About page.
- **fourth/**: Provides an About page.
- **host/**: Serves as the main application, aggregating the micro-frontends.

Each zone has its own `next.config.js`, `package.json`, and `app/` directory, following the Next.js 15 app router pattern. The root directory manages dependencies using [pnpm](https://pnpm.io/). And concurrently package to install, build and serve apps in parallel.

# Getting started

## Single app development

`cd second` (cd into specific app's folder)
`pnpm install`

run localhost (localhost:3000)
`pnpm run dev`

run production build (localhost:3000)
`pnpm run build`
`pnpm run start`

## All apps

(at root level)
`pnpm install` (install concurrently package)

run localhost
`pnpm run dev:all`

run production build
`pnpm run build:all`
`pnpm run start:all`

## Note on Next.js Behavior: Development vs Production

When running a Next.js app using the `dev` script (`pnpm run dev`), the application operates in **development mode**. In this mode:

- Hot reloading and fast refresh are enabled for rapid feedback during development.
- Error overlays and detailed debugging information are available.
- Performance optimizations (such as code minification and image optimization) are not fully applied.
- links are not prefetched, pages are not cached

When running a production build (`pnpm run build` followed by `pnpm run start`):

- The app is compiled and optimized for performance, including minification, tree-shaking, and static asset optimization.
- Error messages are less verbose, and debugging overlays are disabled.
- The routing, data fetching, and rendering logic are executed as they will be in a real production environment.
- links within the zone are prefetched, and resources are mostly cached
