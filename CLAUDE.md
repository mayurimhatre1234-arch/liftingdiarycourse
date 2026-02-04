# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## IMPORTANT: Documentation First

**ALWAYS refer to the relevant documentation files in the `/docs` directory BEFORE generating any code.**

The `/docs` directory contains coding standards and guidelines that MUST be followed:

- `docs/ui.md` - UI component standards and date formatting rules

Read and adhere to these documents to ensure all generated code follows project conventions.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Database (Drizzle + Neon PostgreSQL)

```bash
npx drizzle-kit generate   # Generate migrations from schema changes
npx drizzle-kit migrate    # Run migrations
npx drizzle-kit push       # Push schema directly to database (dev)
npx drizzle-kit studio     # Open Drizzle Studio GUI
```

## Architecture

This is a Next.js 16 application using the App Router with:

- **Authentication**: Clerk (`@clerk/nextjs`) - ClerkProvider wraps the app in `src/app/layout.tsx`, middleware in `src/middleware.ts` protects routes
- **Database**: Drizzle ORM with Neon PostgreSQL serverless - connection in `src/db/index.ts`, schema in `src/db/schema.ts`
- **UI**: Tailwind CSS v4 with shadcn/ui (new-york style) - uses `cn()` utility from `src/lib/utils.ts` for class merging

### Path Aliases

- `@/*` maps to `./src/*`

### Environment Variables

Required in `.env`:
- `DATABASE_URL` - Neon PostgreSQL connection string
- Clerk keys (see Clerk documentation)
