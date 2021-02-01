# vue-github

Application to displays a user’s GitHub projects and lets you view the project’s README. This project developed using Vue Js. You can see the demo application at [VueGithub](https://vue-github.netlify.app/)

## Build Setup

``` bash
# install Node Module dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Dependencies
This project uses several third parties :

- **Axios** is dependencies for Apis Consuming, you can check documentatin at [Axios](https://github.com/axios/axios)
- **Vue Material** is a Material Design component framework for Vue.js you can check documentatin at [Vue Materia (https://vuematerial.io/getting-started)
- **Vue Router** is the official router for Vue.js, you can check documentatin [Vue Router](https://router.vuejs.org/)
- **Vue simple markdown** is a Simple and Highspeed Markdown Parser for Vue, you can check documentatin [Vue simple markdown](https://www.npmjs.com/package/vue-simple-markdown)
  
## Source Code Folder
```
src   
└─── components
│    │   Homepage.vue
│    │   ...
└─── router
│    │   index.js
└─── services
│    │   config.js
└─── style
│    App.vue
│    main.js
```
A few details about each of these folders:
- **components** ── All the components of the projects that are not the main views
- **router** ── All the routes of your projects
- **services** ── All the url for apis consuming
- **style** ── are the parts of css code that is reused in different components
