# Project: Minimalist Personal Blog

## Goal
Build a high-performance, minimalist personal blog.
- **Architecture**: Static Site Generation (SSG) / Content-driven.
- **Database**: None (Use Markdown/MDX files for content).
- **Style**: Ultra-minimalist (Black, White, Gray).

## Technical Stack
1. **Framework**: Next.js 15+ (App Router).
2. **Styling**: TailwindCSS + shadcn/ui.
3. **Runtime/Package Manager**: Bun (Local development).
4. **Deployment**: Cloudflare Pages (via @opennextjs/cloudflare).
5. **Version Control**: Git (GitHub).

## AI Constraints & Rules
- **No Traditional Backend**: All articles must be read from the `content/` directory as .md or .mdx files.
- **Edge Compatibility**: Avoid using Node.js native APIs (like `fs` in runtime). Use Next.js `generateStaticParams` for pre-rendering.
- **Style Guidelines**: 
  - Use a clean, typography-focused design.
  - Prioritize accessibility and system fonts.
  - Use `lucide-react` for icons.
- **Code Style**: 
  - Use TypeScript (Strict mode).
  - Use Functional Components and Server Components by default.
  - Follow shadcn/ui component patterns.
  - supply necessary comment when coding.

## Deployment Target
- Deploy to **Cloudflare Pages**.
- Ensure `wrangler.toml` is configured for Next.js compatibility.