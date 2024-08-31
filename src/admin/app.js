

const config = {
  locales: [
    // "id",
  ],
  defaultLocale: "en",
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "KudaPacu",
      "app.components.LeftMenu.navbrand.workplace": "Dashboard",
      "global.content-manager": "Nav Content Manager",

      "content-manager.header.name": "Kuda",

      "app.components.LeftMenu.plugins": "nav-plugins",
      "content-type-builder.plugins.name": "type konten",
      "content-type-builder.header.name": "Content kuda",
      "cloud.plugins.name": "type konten",
      "upload.plugins.name": "type konten",
      "realease.plugins.name": "type konten",
      "app.components.LeftMenu.plugins.upload": "nav-media",
      "Media Library": "Media Kuda",
      "Content Type Builder": "Content-Types Builder11111",


      "global.plugins.content-type-builder": "Content Type Builder",
      "global.plugins.upload": "Media kuda",


      "app.components.LeftMenu.general": "nav-general",
      "global.plugins": "nav-plugins",
      "global.settings": "nav-settings",
      "global.marketplace": "nav-pasar",


    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
