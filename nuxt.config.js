export default {
  target: "static",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Animage A Wallpaper Site",
    meta: [
      {
        name: "google-site-verification",
        content: "7oSYu2Wy2R6yy7vjxfba2kxlKSNawBPL4hPFFZxHVVQ"
      },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Download anime wallpaper hd, There are tons of anime wallpaper collection are thereand any Hd anime wallpaper you want you can download"
      },
      {
        name: "keywords",
        content:
          "anime wallpaper hd, anime wallpaper in hd,anime wallpapers hd, anime hd wallpapers, animes picture,anime wallpaper 4k, pictures of anime"
      },
      {
        name: "og:description",
        content:
          "Download anime wallpaper hd, There are tons of anime wallpaper collection are thereand any Hd anime wallpaper you want you can download  "
      },
      {
        property: "og:image",
        content: "/animage.png"
      },
      {
        property: "og:url",
        content: "https://animage.site/"
      },
      {
        name: "theme-color",
        content: "#1f2937"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/animage.png" }]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  generate: {
    fallback: true
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/vue-stack-grid.js", mode: "client" },
    { src: "~plugins/ga.js", mode: "client" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
