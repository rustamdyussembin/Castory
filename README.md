# Castory

Мобильное приложение для рыбалки: ведение рыболовной сессии (удилища, споды, поклёвки, итоги), текущая погода и ветер, чек-лист подготовки к выезду.

## Стек

Expo / React Native, Expo Router, TypeScript, Zustand, TanStack Query, React Hook Form + Zod, i18next, React Native Paper.

## Требования

- Node.js 24 (как в CI)
- Yarn 4 — используется только Yarn, без npm и pnpm

## Запуск

```bash
yarn install
yarn start      # dev-сервер Expo
yarn ios        # сборка и запуск на iOS
yarn android    # сборка и запуск на Android
yarn web        # запуск в браузере
```

## Проверки

```bash
yarn typecheck    # TypeScript
yarn lint         # ESLint
yarn lint:fsd     # архитектура Feature-Sliced Design (Steiger)
yarn build:check  # production-сборка (expo export)
```

Те же проверки запускаются в CI для каждого pull request в `main`.

## Структура

Проект построен по [Feature-Sliced Design](https://fsd.how/):

```
src/
  routes/     # роуты Expo Router (тонкие файлы, root задан в app.json)
  app/        # инициализация приложения и провайдеры
  pages/      # экраны
  widgets/    # крупные блоки экранов
  features/   # пользовательские действия
  entities/   # бизнес-сущности
  shared/     # переиспользуемый код без бизнес-логики: UI-кит, lib, i18n, тема
```

Соглашения по коду и архитектуре описаны в [AGENTS.md](./AGENTS.md).
