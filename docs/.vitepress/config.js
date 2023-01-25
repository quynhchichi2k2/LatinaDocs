/**
 * @type {import('vitepress').UserConfig}
 */

export default {
  title: "LatinaDocs",
  description: "Dokumentasi untuk LalatinaHub",
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
      {
        text: "Our Team",
        link: "/team",
      },
    ],
    sidebar: [
      {
        text: "Panduan",
        collapsible: true,
        items: [
          { text: "Pengenalan", link: "/guide/" },
          {
            text: "Mobile",
            items: [
              {
                text: "Dasar",
                link: "/guide/mobile/",
              },
              {
                text: "Aplikasi Populer",
                link: "/guide/mobile/apps",
              },
              {
                text: "How to",
                items: [
                  {
                    text: "Scan Bug",
                    link: "/guide/mobile/how/scan_bug",
                  },
                ],
              },
            ],
          },
          {
            text: "Desktop",
            link: "/guide/desktop/",
          },
        ],
      },
      {
        text: "API",
        collapsible: true,
        items: [
          {
            text: "Pengenalan",
            link: "/api/",
          },
          {
            text: "Dasar",
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
    editLink: {
      pattern: "https://github.com/LalatinaHub/LatinaDocs/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    i18nRouting: true,
  },
  locales: {
    root: {
      label: "Bahasa",
      lang: "id",
    },
  },

  lastUpdated: true,
};
