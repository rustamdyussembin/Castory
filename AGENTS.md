# Project instructions

## Stack
- Expo / React Native
- Expo Router
- TypeScript
- Feature-Sliced Design
- Zustand for client/application state
- TanStack Query for remote/server state
- React Hook Form + Zod
- i18next
- Yarn only

## Architecture
- Follow FSD boundaries.
- Do not create parallel stores, APIs, or abstractions if an existing implementation can be extended.
- Audit the existing implementation before making architectural changes.
- Keep business logic independent from React where practical.
- Slice-wide types and constants live in the slice root as `<slice>.types.ts` and `<slice>.constants.ts`
  (e.g. `entities/rod/rod.types.ts`), next to `index.ts`. Do not move them into `model/` or `config/`.
- API-specific code (DTO types, endpoint constants, response parsing and mapping) lives in the `api/` segment.
- Expo Router routes live in `src/routes` (configured via the `root` option of the `expo-router` plugin in `app.json`).
  Route files stay thin: they only compose pages and `@/app`. Providers and initialization belong to the FSD `src/app` layer.

## UI structure
Each UI component lives in its own directory.

Example:

entities/
weather/
ui/
weather/
weather.tsx

Do not place components directly in `ui/`.

## State
- Zustand is the source of truth for application state.
- Do not duplicate Zustand state with local React state unless it is truly local UI state.
- TanStack Query is used for remote data and caching.

## Localization
- Do not hardcode user-facing strings.
- Use the existing i18next localization infrastructure.

## Packages
- Use Yarn only.
- Do not use npm or pnpm.

## Changes
- Prefer minimal changes.
- Do not modify unrelated code.
- Reuse existing components and infrastructure.
- Run TypeScript and ESLint checks after changes.