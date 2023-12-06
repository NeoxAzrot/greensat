export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // "strapi::cors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      origin: [
        "http://localhost:3000",
        "greensatable.fr",
        "http://greensatable.fr",
        "https://greensatable.fr",
        "www.greensatable.fr",
        "http://www.greensatable.fr",
        "https://www.greensatable.fr",
        "api.greensatable.fr",
        "http://api.greensatable.fr",
        "https://api.greensatable.fr",
        "www.api.greensatable.fr",
        "http://www.api.greensatable.fr",
        "https://www.api.greensatable.fr",
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      keepHeaderOnError: true,
    },
  },
  "strapi::poweredBy",
  // {
  //   name: "strapi::cors",
  //   config: {
  //     enabled: true,
  //     headers: "*",
  //     origin: ["greensatable.fr"],
  //   },
  // },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
