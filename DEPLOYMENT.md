# GitHub Pages deployment

The site is deployed by `.github/workflows/deploy-pages.yml` from the current Angular source on `main`.

## One-time setup

1. Open [Settings → Pages](https://github.com/stevenagle/stevenagle.github.io/settings/pages).
2. Under **Build and deployment → Source**, select **GitHub Actions** instead of **Deploy from a branch**.
3. Push the workflow and build script to `main`.
4. Watch **Deploy personal site to GitHub Pages** in the repository's [Actions tab](https://github.com/stevenagle/stevenagle.github.io/actions).

Once deployed, the site is available at https://stevenagle.github.io/.

## How it works

Every push to `main` builds and deploys the site. The workflow also supports **Run workflow** from the Actions tab.

- The build job uses Node.js 22, installs the locked dependencies with `npm ci`, and runs `npm run build:pages`.
- The build command generates the production browser files in `dist/pages/browser`, with `/` as the base URL for this user-site repository.
- Only that browser directory is uploaded as the Pages artifact.
- The deploy job publishes the artifact through GitHub's Pages actions using the `github-pages` environment and the built-in workflow token. No personal access token is needed.
- Deployments run sequentially to avoid interrupting an in-progress publication.

The checked-in `docs/` directory is a legacy snapshot. The Actions workflow builds from `src/` and does not use `docs/` or the root-level `index.html`.

## Local build check

```sh
npm ci
npm run build:pages
```

The output directory must contain `index.html`, the generated JavaScript and CSS bundles, `assets/images/me.jpg`, and both favicon files.

If the workflow reports that Pages is not configured for Actions, check the publishing source in Settings → Pages. If deployment waits for approval, check the protection rules on the `github-pages` environment.
