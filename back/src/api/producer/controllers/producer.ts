/**
 * producer controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::producer.producer",
  ({ strapi }) => ({
    findOneBySlug: async (ctx) => {
      try {
        const producer = await strapi
          .service("api::producer.producer")
          .findOneBySlug({ params: ctx.params });

        if (!producer) {
          ctx.status = 404;
          ctx.body = {
            data: null,
            error: {
              status: 404,
              name: "NotFoundError",
              message: "Not found",
              details: {},
            },
          };
          return;
        }

        // To delete properties from the object
        const { id, createdBy, updatedBy, ...newProducer } = producer;

        ctx.body = {
          data: {
            id: producer.id,
            attributes: {
              ...newProducer,
            },
          },
          meta: {},
        };
      } catch (err) {
        ctx.status = 500;
        ctx.body = {
          data: null,
          error: {
            status: 500,
            name: "InternalServerError",
            message: "Internal server error",
            details: {},
          },
        };
      }
    },
  })
);
