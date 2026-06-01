# Starter Template

Minimal Next.js starter with TypeScript, Tailwind CSS, and shadcn/ui.

## Scripts

```bash
npm run dev           # Start development server
npm run build         # Production build
npm run start         # Start production server
npm run lint          # ESLint check
npm run lint:fix      # ESLint with auto-fix
npm run format        # Prettier format
npm run format:check  # Prettier check (no writes)
npm run typecheck     # TypeScript check
npm run check         # Full check: typecheck + lint + format
```

## Structure

- `src/app/` — App Router pages and layouts
- `src/components/` — Shared components
- `src/components/ui/` — shadcn/ui components
- `src/lib/` — Utilities
- `src/hooks/` — Custom React hooks
- `src/styles/` — Global styles and theme tokens

Add shadcn components with:

```bash
npx shadcn@latest add <component>
```
