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
        items: [{ text: "WIP", link: "/wip" }],
      },
      {
        text: "API",
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
  },
};
