# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `pnpm build` (runs `astro check && astro build && pagefind --site dist && cp -r dist/pagefind public/`)
- Dev server: `pnpm dev`
- Preview: `pnpm preview`
- Lint: `pnpm lint`
- Format check: `pnpm format:check`
- Format fix: `pnpm format`

## Code Style Guidelines
- **TypeScript**: Use strict typing. Import paths use `@/` alias for `./src/`
- **Formatting**: 2 spaces, 80 char width, double quotes, trailing commas
- **Components**: Astro components in `/src/components/`
- **Error handling**: Avoid console.log (ESLint error)
- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Imports**: Group by external/internal, alphabetize
- **Content**: Blog posts in `/src/data/blog/` as markdown files

## Project Notes
- Astro-based blog/documentation site with Tailwind CSS styling
- Uses pagefind for search functionality