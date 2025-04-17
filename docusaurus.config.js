module.exports = {
  title: 'Engenharia de Dados Corretora',
  tagline: 'Documentação da plataforma de dados',
  url: 'https://razy-corretora-de-seguros.github.io',
  baseUrl: '/docs-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Razy-Corretora-de-Seguros',
  projectName: 'docs-site',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Razy-Corretora-de-Seguros/docs-site/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
