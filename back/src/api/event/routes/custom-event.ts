export default {
  routes: [
    {
      method: "GET",
      path: "/events/slug/:slug",
      handler: "event.findOneBySlug",
      config: {
        auth: false,
      },
    },
  ],
};
