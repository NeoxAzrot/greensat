/**
 * event controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::event.event",
  ({ strapi }) => ({
    findOneBySlug: async (ctx) => {
      try {
        const event = await strapi
          .service("api::event.event")
          .findOneBySlug({ params: ctx.params });

        if (!event) {
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
        const { id, createdBy, updatedBy, image, ...newEvent } = event;
        const { id: imageId, ...newImage } = image;

        ctx.body = {
          data: {
            id: event.id,
            attributes: {
              ...newEvent,
              image: {
                data: {
                  id: event.image.id,
                  attributes: {
                    ...newImage,
                  },
                },
              },
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
