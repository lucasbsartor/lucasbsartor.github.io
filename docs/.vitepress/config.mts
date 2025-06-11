import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Lucas Sartor",
  description: "Just A Silly Guy Writing Silly Code",
  cleanUrls: true,
  lang: "en",
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lucasbsartor/lucasbsartor.github.io",
      },
    ],
    search: {
      provider: "local",
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "About", link: "/about" },
        ],
        footer: {
          message:
            "Made with ❤️ using <a href='https://vitepress.dev' target='_blank'>VitePress</a> and <a href='https://pages.github.com' target='_blank'>Github Pages</a>",
          copyright:
            "Copyright © 2025-present <a href='https://github.com/lucasbsartor' target='_blank'>Lucas de Bona Sartor</a>",
        },
      },
    },
    pt: {
      label: "Português",
      lang: "pt-BR",
      link: "/pt/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/pt/" },
          { text: "Guias", link: "/pt/guides" },
          { text: "Sobre", link: "/pt/about" },
        ],
        sidebar: {
          "/pt/guides/": [
            {
              text: "Guias",
              items: [
                {
                  text: "Manual de Sobrevivência do Tech Lead",
                  link: "/pt/guides/tech-lead-survival-guide",
                },
                {
                  text: "Code Review",
                  collapsed: false,
                  items: [
                    {
                      text: "Guia Básico de Code Review",
                      link: "/pt/guides/code-review/basic-guide",
                    },
                    {
                      text: "Checklist de Code Review",
                      link: "/pt/guides/code-review/checklist",
                    },
                  ],
                },
              ],
            },
          ],
        },
        footer: {
          message:
            "Feito com ❤️ usando <a href='https://vitepress.dev' target='_blank'>VitePress</a> e <a href='https://pages.github.com' target='_blank'>Github Pages</a>",
          copyright:
            "Copyright © 2025-presente <a href='https://github.com/lucasbsartor' target='_blank'>Lucas de Bona Sartor</a>",
        },
      },
    },
  },
  ignoreDeadLinks: ["/pt/guides", "/pt/blog"],
});
