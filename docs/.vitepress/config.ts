import { defineConfig } from "vitepress";

export default defineConfig({
  title: "LatinaDocs",
  description: "Dokumentasi untuk LalatinaHub",
  cleanUrls: true,
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/LalatinaHub" }],
    nav: [
      {
        text: "Get Subs",
        items: [
          {
            text: "API",
            link: "/api/index.html",
          },
        ],
      },
      {
        text: "Our Team",
        link: "/team.html",
      },
      {
        text: "Log",
        link: "/log",
      },
    ],
    sidebar: [
      {
        text: "Panduan",
        collapsed: true,
        items: [
          { text: "Pengenalan", link: "/guide/index.html" },
          {
            text: "Mobile",
            items: [
              {
                text: "Dasar",
                link: "/guide/mobile/index.html",
              },
              {
                text: "Aplikasi Populer",
                link: "/guide/mobile/apps.html",
              },
              {
                text: "How to",
                items: [
                  {
                    text: "Scan Bug",
                    link: "/guide/mobile/how/scan_bug.html",
                  },
                  {
                    text: "BFM",
                    items: [
                      {
                        text: "Persiapan",
                        link: "/guide/mobile/how/bfm/prepare.html",
                      },
                      {
                        text: "Clash",
                        link: "/guide/mobile/how/bfm/clash.html",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            text: "Desktop",
            link: "/guide/desktop/index.html",
          },
        ],
      },
      {
        text: "API",
        collapsed: true,
        items: [
          {
            text: "Pengenalan",
            link: "/api/index.html",
          },
          {
            text: "Dasar",
            link: "/api/basic.html",
          },
          {
            text: "Endpoint",
            items: [
              {
                text: "Get",
                link: "/api/get.html",
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
            link: "/support.html",
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
});
