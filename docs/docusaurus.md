---
layout: page
title: Docusaurus
permalink: /docusaurus/
resource: true
---

https://docusaurus.io/


# Installation

Article: https://docusaurus.io/docs/installation

```
$ npx create-docusaurus@latest rabbit-hole classic
```

Docusaurus version, as set in `package.json`:

```
$ npx docusaurus --version
3.7.0
```

Don't forget to install Yarn and auto-gen a `yarn.lock` file:

```
$ yarn install
```


# Build and Deploy

Article: https://docusaurus.io/docs/deployment

Use Yarn (not npm) because it scales better and LinkedIn's Docusaurus implementation uses it.

Local build:

```
$ yarn build
```

Local deploy (for previewing on my mac before pushing to production):

```
$ yarn run start
```

# Deployment

The published URL is https://gregmcmillan.github.io/kb/

In this setup, the source repo and deployment repo are the same repository. GitHub Pages is published from the main branch not the gh-pages branch (more difficult to set up via SSH keys, forget that...)

The deployment file is deploy.yml using Yarn.

See https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions

Troubleshooting

Problem:

```
docusaurus Branch "main" is not allowed to deploy to github-pages due to environment protection rules.
```

Solution: 

Update GitHub Environment Deployment Rules (Recommended)

You can configure the github-pages environment to explicitly allow deployments from the "main" branch. 

Navigate to your repository's Settings tab. https://github.com/gregmcmillan/kb/settings

In the left sidebar, click on Environments.

Select the github-pages environment from the list.

Next to "Deployment branches", click the dropdown menu and select Selected branches.

Click Add deployment branch rule and enter main (or a pattern like * to allow all branches).

Save the changes. 

The next time your Docusaurus GitHub Actions workflow runs, it should now have permission to deploy from the "main" branch.


