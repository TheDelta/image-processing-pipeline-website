module.exports = {
  title: "Image Processing Pipeline",
  tagline: "An image build orchestrator for the modern web",
  url: "https://ipp.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "MarcusCemes", // Usually your GitHub org/user name.
  projectName: "image-processing-pipeline", // Usually your repo name.
  themeConfig: {
    image: "img/social_preview.jpg",
    navbar: {
      title: "Image Processing Pipeline",
      hideOnScroll: true,
      logo: {
        alt: "Project logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          to: "blog/",
          activeBasePath: "blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/MarcusCemes/image-processing-pipeline",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    algolia: {
      apiKey: "912e77f3afa7a4189802586da8f1922e",
      indexName: "marcuscemes_image-processing-pipeline",
    },
    footer: {
      style: "light",
      logo: {
        alt: "Image Processing Pipeline Logo",
        src: "img/logo_footer.svg",
        href: "https://ipp.vercel.app",
      },
      links: [
        {
          title: "Navigation",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Guide",
              to: "docs/guide",
            },
            {
              label: "Privacy",
              to: "privacy",
            },
          ],
        },
        {
          title: "Documentation",
          items: [
            {
              label: "CLI",
              to: "docs/cli",
            },
            {
              label: "Webpack",
              to: "docs/webpack",
            },
            {
              label: "Reference",
              to: "docs/reference/cli",
            },
          ],
        },
        {
          title: "GitHub",
          items: [
            {
              label: "Repository",
              to: "https://github.com/MarcusCemes/image-processing-pipeline",
            },
            {
              label: "Issues",
              to: "https://github.com/MarcusCemes/image-processing-pipeline/issues",
            },
            {
              label: "Contributing",
              to: "docs/contributing",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Marcus Cemes - MIT License`,
    },
  },
  plugins: ["plugin-analytics", "plugin-demo"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/MarcusCemes/image-processing-pipeline-website/edit/master/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve("./src/css/global.css"),
        },
      },
    ],
  ],
};
