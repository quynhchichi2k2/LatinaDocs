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
        text: "Log",
        link: "/log"
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
                  {
                    text: "BFM",
                    items: [
                      {
                        text: "Persiapan",
                        link: "/guide/mobile/how/bfm/prepare",
                      },
                      {
                        text: "Clash",
                        link: "/guide/mobile/how/bfm/clash",
                      },
                    ],
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
      {
        text: "Lainnya",
        items: [
          {
            text: "Bantuan",
            link: "/support",
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
