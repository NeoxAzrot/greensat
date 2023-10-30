/**
 * producer service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::producer.producer",
  ({ strapi }) => ({
    findOneBySlug: async ({ params }) => {
      const { slug } = params;

      const producer = strapi.query("api::producer.producer").findOne({
        where: { slug },
        populate: true,
      });

      return producer;
    },
  })
);
