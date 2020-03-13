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

If you want to deploy the fusefonts demo, you will need to clone the  [Fuse Fonts Plugin](https://github.com/fuse-fonts/plugin) submodule:

```
git submodule init
git sobmodule update
```

Learn more about [git submodules here](https://git-scm.com/book/en/v2/Git-Tools-Submodules).


### Development

Refer to sapper docs.

To perform local development:
```
npm run dev
```

This site utilizes _refererURLs_, so Firebase Analytics scripts don't load when performaing local dev. See `[src/client/analytics.js](src/client/analytics.js) for details. Enable the `debug` flag to log to the events to the console.

### Deployment

With firebase, you will need multiple hosting targets to map the deployment commands in [`package.json`](package.json).

The three targets consist of: `production`, `staging`, and `demo`. The item needing most explaining is `demo`: it is a production hosting target which contains the fuse fonts demo.
