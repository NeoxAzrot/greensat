/**
 * event service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::event.event",
  ({ strapi }) => ({
    findOneBySlug: async ({ params }) => {
      const { slug } = params;

      const event = await strapi.query("api::event.event").findOne({
        where: { slug },
        populate: true,
      });

      return event;
    },
  })
);
