# Docusaurus

It is a React in-repo site generator used for docs and dynamic knowledge bases.

Example app: https://gregmcmillan.github.io/kb/

See also https://docusaurus.io/

## Installation

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

## Build

```
$ yarn build
```

## Local deployment

```
$ yarn run start
```

Good for previewing and debugging the changes on my mac before pushing them to production.

Press `Ctrl+c` (^C) to stop the process.

## Prod deployment

Use Yarn (not npm) because it scales better and LinkedIn's Docusaurus implementation uses it.

Article: https://docusaurus.io/docs/deployment

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


## Image links

```
![](./images/g1.png)
```

![](./images/g1.png)

## Create a page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

### Create your first react page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at 'http://localhost:3000/my-react-page'

### Create your first markdown page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at 'http://localhost:3000/my-markdown-page'


## Create a document

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

### Create your first doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
### Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

### Configure the sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

### Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```

## Create a blog post

Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much as you like.
```

A new blog post is now available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).

## Deploy your site

Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**).

It builds your site as simple **static HTML, JavaScript and CSS files**.

### Build your site

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder.

### Deploy your site

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/).

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).

## Markdown features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

### Front matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)
```

### Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](/create-a-page).
```

```md
Let's see how to [Create a page](./create-a-page.md).
```

### Images

Regular Markdown images are supported.

You can use absolute paths to reference images in the static directory (`static/img/docusaurus.png`):

```md
![Docusaurus logo](/img/docusaurus.png)
```

![Docusaurus logo](/img/docusaurus.png)

You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:

```md
![Docusaurus logo](./img/docusaurus.png)
```

### Code blocks

Markdown code blocks are supported with Syntax highlighting.

````md
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```
````

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

### Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

```md
:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::
```

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

### MDX and react components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !

## Manage docs versions

Docusaurus can manage multiple versions of your docs.

### Create a docs version

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

### Add a version dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./images/docsVersionDropdown.png)

### Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`

## Translate your site

Let's translate `docs/intro.md` to French.

### Configure i18n

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

### Translate a doc

Copy the `docs/intro.md` file to the `i18n/fr` folder:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

### Start your localized site

Start your site on the French locale:

```bash
npm run start -- --locale fr
```

Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a time.

:::

### Add a locale dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./images/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```

## Algolia DocSearch

Docusaurus uses [Algolia](https://www.algolia.com/) for its free search plugin.

To set it up, follow the article at https://docusaurus.io/docs/search. Here are some gotchas I hit while trying to get things to work.

My implementation:

* The KB's crawler is named `Rabbit Crawler`. It crawls the GitHub source repo every Saturday. 

* Algolia Rabbit Crawler dashboard, https://dashboard.algolia.com/apps/S180XL6C47/crawler/crawler/f2c2f88a-ed01-465f-ac35-6349dd04523d/overview

* Algolia data sources crawler, https://dashboard.algolia.com/apps/S180XL6C47/crawler/crawlers

* API keys, https://dashboard.algolia.com/account/api-keys/all?applicationId=S180XL6C47

### Use the v3 template configuration

Nothing works without this template.

1. Copy template at https://docsearch.algolia.com/docs/templates/#docusaurus-v3-template

```
new Crawler({
  appId: '<MY-ID>>',
  apiKey: 'MY-KEY',
  rateLimit: 8,
  maxDepth: 10,
  startUrls: ['https://gregmcmillan.github.io/kb/'],
  sitemaps: ['https://gregmcmillan.github.io/kb/sitemap.xml'],
  ignoreCanonicalTo: true,
  discoveryPatterns: ['https://gregmcmillan.github.io/kb/**'],
  actions: [
    {
      indexName: 'Rabbit Crawler',
      pathsToMatch: ['https://gregmcmillan.github.io/kb/**'],
      recordExtractor: ({ $, helpers }) => {
        // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
        const lvl0 =
          $(
            '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'
          )
            .last()
            .text() || 'Documentation';

        return helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: '',
              defaultValue: lvl0,
            },
            lvl1: ['header h1', 'article h1'],
            lvl2: 'article h2',
            lvl3: 'article h3',
            lvl4: 'article h4',
            lvl5: 'article h5, article td:first-child',
            lvl6: 'article h6',
            content: 'article p, article li, article td:last-child',
          },
          indexHeadings: true,
          aggregateContent: true,
          recordVersion: 'v3',
        });
      },
    },
  ],
  initialIndexSettings: {
    "Rabbit Crawler": {
      attributesForFaceting: [
        'type',
        'lang',
        'language',
        'version',
        'docusaurus_tag',
      ],
      attributesToRetrieve: [
        'hierarchy',
        'content',
        'anchor',
        'url',
        'url_without_anchor',
        'type',
      ],
      attributesToHighlight: ['hierarchy', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'content'],
      searchableAttributes: [
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy.lvl6)',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom',
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional',
      separatorsToIndex: '_',
    },
  },
});
```

2. Enter it into the Algolia configuration edit and save it, 
https://dashboard.algolia.com/apps/S180XL6C47/crawler/crawler/f2c2f88a-ed01-465f-ac35-6349dd04523d/editor?tab=url-tester


### Search box

Edit `docusaurus.config.js`

Add this under `themeConfig`:

```
algolia: {
      // The application ID provided by Algolia
      appId: 'MY-ID',

      // Public API key: it is safe to commit it
      apiKey: 'MY-KEY',

      indexName: 'Rabbit Crawler',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      // Optional: whether you want to use the new Ask AI feature (undefined by default)
      askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

      //... other Algolia params
    },
```
### Meta tag authorization in /head

To crawl the code base, Algolia required that I prove that I own the domain (gregmcmillan.github.io) and its github code. I had to prove authorization by adding a meta tag to the Head of at least one HTML page

```
vi docusaurus.config.js
```

Then add this `headTags` with a specific `name` and `content` code:

```
      headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '6FEDC3C98D343683',
      },
    },
  ],
```

This code added the tag globally to every exported HTML page on the app.

For example in prod, the tag was added to this file:

```
https://gregmcmillan.github.io/kb/index.html
```

See https://docusaurus.io/docs/seo

### Sitemap required

By default, the Docusaurus preset generates a sitemap.xml that the Algolia crawler can use:

```
https://gregmcmillan.github.io/kb/sitemap.xml
```

Add this URL to Algolia's crawler configuration:

```
sitemaps: ["https://gregmcmillan.github.io/kb/sitemap.xml"],
```

by using the Algolia web editor:

```
https://dashboard.algolia.com/apps/S180XL6C47/crawler/crawler/f2c2f88a-ed01-465f-ac35-6349dd04523d/editor?tab=url-tester
```

### Broken link path in search results

Problem. Pages were resolving to `kb` instead of `kb/docs`. 

Solution was to edit `docusaurus.confg.js` and comment out this code block:

```
/*Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
  replaceSearchResultPathname: {
    from: '/docs/', // or as RegExp: /\/docs\//
    to: '/',
  },
  */
```

## Ask AI

An advanced feature to implement when I have more time ...

Claude Sonnet account, https://platform.claude.com/dashboard

Docs, https://docusaurus.io/docs/search#ask-ai, https://docsearch.algolia.com/docs/v4/askai

Algolia Ask AI dashboard, https://dashboard.algolia.com/apps/S180XL6C47/ask-ai

Claude assistant, https://dashboard.algolia.com/apps/S180XL6C47/ask-ai/stats/14473349-bdfc-4cbb-ab89-13c73cb573cb?

### Yank the Ask AI option from the search box

Delete this from `docusaurus.config.js`:

```
askAi: 'uUbv00OCBZqI',
```


## References

- Read the [official documentation](https://docusaurus.io/)
- Modify your site configuration with [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config)
- Add navbar and footer items with [`themeConfig`](https://docusaurus.io/docs/api/themes/configuration)
- Add a custom [Design and Layout](https://docusaurus.io/docs/styling-layout)
- Add a [search bar](https://docusaurus.io/docs/search)
- Find inspirations in the [Docusaurus showcase](https://docusaurus.io/showcase)
- Get involved in the [Docusaurus Community](https://docusaurus.io/community/support)