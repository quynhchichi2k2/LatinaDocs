/**
 * @type {import('vitepress').UserConfig}
 */

export default {
  title: "LatinaDocs",
  description: "A fine docs for LalatinaHub",
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/LalatinaHub" }],
    nav: [
      {
        text: "Get Subs",
        items: [
          {
            text: "Raw",
            link: "https://github.com/LalatinaHub/LatinaSub/tree/main/result",
          },
          {
            text: "API",
            link: "/api/",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "Guide",
        collapsible: true,
        items: [{ text: "WIP", link: "/wip" }],
      },
      {
        text: "API",
        collapsible: true,
        items: [
          {
            text: "Introduction",
            link: "/api/",
          },
          {
            text: "Basic",
            link: "/api/basic",
          },
          {
            text: "Endpoint",
            items: [
              {
                text: "Get",
                link: "/api/get",
              },
            ],
          },
        ],
      },
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/LalatinaHub/License/blob/main/LICENSE">MIT License</a>.',
      copyright: 'by <a href="https://github.com/dickymuliafiqri">Dicky Mulia Fiqri</a>',
    },
  },
};
