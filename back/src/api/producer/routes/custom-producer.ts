export default {
  routes: [
    {
      method: "GET",
      path: "/producers/slug/:slug",
      handler: "producer.findOneBySlug",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/producers/popular",
      handler: "producer.findPopular",
      config: {
        auth: false,
      },
    },
  ],
};
