// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Chat Elements',
  tagline: 'React Chat Elements',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-ico.ico',
  organizationName: 'detaysoft', // Usually your GitHub org/user name.
  projectName: 'react-chat-elements', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Detaysoft/react-chat-elements',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'React Chat Elements',
        logo: {
          alt: 'react-chat-elements',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/demo', label: 'Live Demo', position: 'left'},
          {
            href: 'https://github.com/Detaysoft/react-chat-elements',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Detaysoft',
          src: 'img/detay-logo.png',
          href: 'https://detaysoft.com',
        },
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'ReadMe',
                href: 'https://github.com/Detaysoft/react-chat-elements#readme',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/detaysoft',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Detaysoft/react-chat-elements',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Detaysoft',
                href: 'https://detaysoft.com',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/react-chat-elements',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} React Chat Elements`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
