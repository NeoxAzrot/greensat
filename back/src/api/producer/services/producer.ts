/**
 * producer service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::producer.producer",
  ({ strapi }) => ({
    findOneBySlug: async ({ params }) => {
      const { slug } = params;

      const producer = await strapi.query("api::producer.producer").findOne({
        where: { slug },
        populate: true,
      });

      return producer;
    },
    findPopular: async () => {
      const producers = await strapi.query("api::producer.producer").findMany({
        populate: true,
      });

      const filteredProducers = producers.filter(
        (producer) => producer.usersLikes.length > 0
      );

      const sortedProducers = filteredProducers.sort(
        (a, b) => b.usersLikes.length - a.usersLikes.length
      );

      return sortedProducers.slice(0, 3);
    },
  })
);
