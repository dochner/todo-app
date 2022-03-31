# Mytodo

That's a to-do list tool builtin for studies purposes.

----

<br>

> requires Node >=14

<br>

## Backend

### Technologies

- ⚙️ [NodeJs](https://nodejs.org/en/docs/)
- ⚡️ [Expess](https://expressjs.com/pt-br/4x/api.html)
- 💾 [SQLite3](https://www.sqlite.org/)

<br>

### Start server

#### Development (only by now)

- Install dependencies:

  ```bash
  npm i
  ```

- Run server:

  ```bash
  npm run dev
  ```

## Frontend

### Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild)
- 🗂 [File based routing](./src/pages)
- 📦 [Components auto importing](./src/components)
- 📑 [Layout system](./src/layouts)
- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine
- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly
- 🦾 TypeScript
- 🖨 Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)
- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

<br>

### Usage

#### Install

```bash
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

#### Development

Just run and visit http://localhost:8080

```bash
pnpm dev
```

#### Build

```bash
pnpm build
```