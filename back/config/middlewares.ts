export default ({ env }) => {
  const isProduction = env("NODE_ENV") === "production";

  const corsOrigin = isProduction
    ? ["https://greensatable.fr", "https://www.api.greensatable.fr"]
    : ["http://localhost:3000", "http://localhost:1337"];

  return [
    "strapi::errors",
    {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            "connect-src": ["'self'", "https:"],
            "img-src": [
              "'self'",
              "data:",
              "blob:",
              "res.cloudinary.com",
              "market-assets.strapi.io",
            ],
            "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
            "script-src": ["'self'", "unsafe-inline"],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    {
      name: "strapi::cors",
      config: {
        headers: "*",
        origin: corsOrigin,
      },
    },
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
  ];
};
