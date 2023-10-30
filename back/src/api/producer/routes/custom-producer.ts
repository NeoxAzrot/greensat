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
  ],
};
