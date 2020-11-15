# cyberia-event-site

## Project setup

```
npm install

set up dot env file [See here](./secret.txt)
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
# Workflow

1. Design layout and fill in props with default value.
2. Integrate graphql API using hasura. [Here](https://cyberia-2020.hasura.app/console/api-explorer).
3. Get the correct query, mutation or subscription.
4. Copy and paste the graphql into the corresponding .graphql file [Here](./src/graphql).
5. Finally npm run generate to use the graphql API. [Documentation](https://v4.apollo.vuejs.org/guide-composable/query.html)
