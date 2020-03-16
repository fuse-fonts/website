# Fuse Fonts Website

This is the Fuse Fonts website built using Firebase, Sapper, and Svelte.


## Resources

- [Svelte](https://svelte.dev/docs)
- [Sapper](https://sapper.svelte.dev/docs)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Firebase Analytics](https://firebase.google.com/docs/analytics)

## Up and Running

```
npm install
```

### Development

Refer to sapper docs.

To perform local development:
```
npm run dev
```

This site utilizes _refererURLs_, so Firebase Analytics scripts don't load when performaing local dev. See `[src/client/analytics.js](src/client/analytics.js)` for details. Enable the `debug` flag to log to the events to the console.

### Deployment

You'll need firebase:

```
npm i -g firebase-tools@latest
```


With firebase, you will need multiple hosting targets to map the deployment commands in [`package.json`](package.json).

The three targets consist of: `production`, `cdn`, `staging`, and `demo`. The item needing most explaining is `demo`: it is a production hosting target which contains the fuse fonts demo.

Run this to add a hosting target—replacing `[resource]` with your firebase hosting resource name. [Learn More](https://firebase.google.com/docs/hosting/multisites)
```
firebase target:apply hosting production [resource]
firebase target:apply hosting cdn [resource]
firebase target:apply hosting staging [resource]
firebase target:apply hosting demo [resource]
```


#### Deploying `demo` target


1.  If you want to deploy the fusefonts demo, you will need to clone the  [Fuse Fonts Plugin](https://github.com/fuse-fonts/plugin) submodule first:

  ```
  git submodule init
  git submodule update
  ```

  Learn more about [git submodules here](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

2.  Install the Fuse Font plugin dependencies

  ```
  npm run init:demo
  ```

3.  Build and Deploy

  You can work within the plugin folder, if you so wish, and utilize those `npm` commands.
  But to perform a build from `@fusefonts/website`, run:
  ```
  npm run build:demo
  ```
  and when you're ready to deploy:

  ```
  npm run deploy:demo
  ```



