// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Cheat Sheets",
    tagline: "Dinosaurs are cool",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://your-docusaurus-site.example.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "fr",
        locales: ["fr"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/Graphandco/docusaurus-cheat-sheets",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/Graphandco/docusaurus-cheat-sheets",
                },
                theme: {
                    customCss: [
                        "./src/css/custom.css",
                        "./src/css/homepage.css",
                    ],
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Cheat Sheets",
                logo: {
                    alt: "My Site Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Tutorial",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    // {
                    //     href: "https://github.com/facebook/docusaurus",
                    //     label: "GitHub",
                    //     position: "right",
                    // },
                ],
            },
            footer: {
                style: "dark",
                // links: [
                //     {
                //         title: "Docs",
                //         items: [
                //             {
                //                 label: "Tutorial",
                //                 to: "/docs/intro",
                //             },
                //         ],
                //     },
                //     {
                //         title: "Community",
                //         items: [
                //             {
                //                 label: "Stack Overflow",
                //                 href: "https://stackoverflow.com/questions/tagged/docusaurus",
                //             },
                //             {
                //                 label: "Discord",
                //                 href: "https://discordapp.com/invite/docusaurus",
                //             },
                //             {
                //                 label: "Twitter",
                //                 href: "https://twitter.com/docusaurus",
                //             },
                //         ],
                //     },
                //     {
                //         title: "More",
                //         items: [
                //             {
                //                 label: "Blog",
                //                 to: "/blog",
                //             },
                //             {
                //                 label: "GitHub",
                //                 href: "https://github.com/facebook/docusaurus",
                //             },
                //         ],
                //     },
                // ],
                copyright: `© ${new Date().getFullYear()} Graph and Co`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            algolia: {
                // L'ID de l'application fourni par Algolia
                appId: "0WLFWXNYJ6",

                // Clé d'API publique : il est possible de la committer en toute sécurité
                apiKey: "1ad9f5cbe66a522bc49d54a69f8b0df3",

                indexName: "graphandco",

                // Facultatif : voir la section doc ci-dessous
                contextualSearch: true,

                // Facultatif : Spécifiez les domaines où la navigation doit se faire par window.location au lieu de history.push. Utile lorsque notre configuration Algolia explore plusieurs sites de documentation et que nous voulons naviguer vers eux avec window.location.href.
                // externalUrlRegex: "external\\.com|domain\\.com",

                // // Facultatif : Remplace certaines parties des URL des éléments d'Algolia. Utile lorsque vous utilisez le même index de recherche pour de multiples déploiements en utilisant une Url de base différente. Vous pouvez utiliser regexp ou string dans le paramètre `from`. Par exemple : localhost:3000 vs myCompany.com/docs
                replaceSearchResultPathname: {
                    from: "/docs/", // or as RegExp: /\/docs\//
                    to: "/",
                },

                // Facultatif : paramètres de recherche de Algolia
                searchParameters: {},

                // Facultatif : chemin pour la page de recherche qui est activée par défaut (`false` pour le désactiver)
                // searchPagePath: "search",

                //... autres paramètres de Algolia
            },
        }),
};

export default config;
