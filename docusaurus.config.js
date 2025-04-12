// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Robert Colley",
  tagline:
    "Robert Colley is a Boston-based software engineer. Robert specializes in web applications and web technology in the Medical Device industry.",
  url: "https://robertjcolley.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/robert-colley-icon-circle.png",
  organizationName: "robertjcolley", // Usually your GitHub org/user name.
  projectName: "robertjcolley-com", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        // },
        blog: {
          blogTitle: "My Personal Blog",
          blogDescription:
            "Robert Colley's personal blog. Robert discusses software, business, running, chess, lifting, and anything else he finds interesting!",
          showReadingTime: true,
          postsPerPage: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-5RJ4SEDBKY",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "robert, colley, bobby, software, somerville, boston",
        },
        {
          name: "og:image",
          content: "/img/robert-colley.jpeg",
        },
      ],
      navbar: {
        title: "Robert Colley",
        logo: {
          alt: "Picture of Robert Colley",
          src: "img/robert-colley-icon.png",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/robertjcolley",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More Robert Colley",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/robertjcolley",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Archive",
                to: "blog/archive",
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} Robert Colley. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash", "diff"],
      },
    }),
};

module.exports = config;
