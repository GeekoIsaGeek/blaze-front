# Blaze

Blaze is a swipe app, similar to Tinder, which includes every core feature of a typical swipe app, e.g., swipe-based interactions, matching algorithm, and 1-to-1 chat. Users can set preferences, update account settings (username, email) and profile. In case of unmatching with someone, the chat will be permanently deleted. However, unmatched users may show up on the feed and there will be a chance to match with them again.

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)

### Prerequisites

- <img src="readme/assets/node-js.svg" height="18" style="position: relative; margin-right:3px; top: 4px;" /> Node.js@20 and up
- <img src="readme/assets/npm.png" height="13" style="position: relative; top:4px; margin-right: 2px" /> npm@10.5 and up

### Tech Stack

- <img src="readme/assets/typescript.png" height="14" style="position: relative; top: 4px; margin-right: 5px" /> [Typescript](https://www.typescriptlang.org/) - strongly typed programming language that builds on JavaScript
- <img src="readme/assets/vue.png" height="14" style="position: relative; top: 4px; margin-right: 5px" /> [Vue-3 (vue-router)](https://vuejs.org/) - framework for building web user interfaces
- <img src="readme/assets/vee-validate.png" height="19" style="position: relative; top: 4px; margin-right: 3px" /> [VeeValidate, Yup](https://vee-validate.logaretm.com/v4) - takes care of value tracking, validation, errors, submissions and more.
- <img src="readme/assets/pinia.svg" height="19" style="position: relative; top: 4px; margin-right: 10px" /> [Pinia](https://pinia.vuejs.org/) - the intuitive store for Vue.js
- <img src="readme/assets/tailwind.png" height="19" style="position: relative; top: 4px; margin-right: 3px" /> [Tailwind](https://tailwindcss.com/) - utility-first css framework

### Getting Started

1\. First of all you need to clone blaze-front repository from github:

```sh
https://github.com/GeekoIsaGeek/blaze-front
```

2\. Next step requires you to run _npm install_ in order to install all dependencies.

```sh
npm install
```

3\. Now we need to set our env file. Go to the root of your project and execute this command.

```sh
cp .env.example .env
```

And now you should provide **.env** file all the necessary environment variables:

**API:**

> VITE_SERVER_URL=

**Reverb:**

> VITE_REVERB_APP_KEY=

> VITE_REVERB_HOST=

> VITE_REVERB_PORT=

> VITE_REVERB_SCHEME=

### Development

You can run development server by executing:

```sh
  npm run dev
```

### Project Structure

```bash
├─── public
├─── readme
├─── src
│   ├─── assets
│   ├─── components
│   ├─── composables
│   ├─── config
│   ├─── helpers
│   ├─── layouts
│   ├─── router
│   ├─── schemas
│   ├─── services
│   ├─── stores
│   ├─── types
│   ├───  utils
│   ├───  views
│   - App.vue
│   - main.ts
- .env
- env.d.ts
- index.html
- package.json
- postcss.config.js
- README.md
- tsconfig.app.json
- tsconfig.json
- tsconfig.node.json
- tailwind.config.js
- vite.config.ts
```
