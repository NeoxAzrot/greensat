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
        const {
          id,
          createdBy,
          updatedBy,
          image,
          products,
          usersLikes,
          labels,
          ...newProducer
        } = producer;
        const { id: imageId, ...newImage } = image;

        const newProducts = products.map((product) => {
          const { id, ...newProduct } = product;

          return {
            id: product.id,
            attributes: {
              ...newProduct,
            },
          };
        });

        const newUsersLikes = usersLikes.map((usersLike) => {
          const {
            id,
            password,
            resetPasswordToken,
            confirmationToken,
            ...newUsersLike
          } = usersLike;

          return {
            id: usersLike.id,
            attributes: {
              ...newUsersLike,
            },
          };
        });

        const newLabels = labels?.map((label) => {
          const { id, ...newLabel } = label;

          return {
            id: label.id,
            attributes: {
              ...newLabel,
            },
          };
        });

        ctx.body = {
          data: {
            id: producer.id,
            attributes: {
              ...newProducer,
              image: {
                data: {
                  id: producer.image.id,
                  attributes: {
                    ...newImage,
                  },
                },
              },
              products: {
                data: newProducts,
              },
              usersLikes: {
                data: newUsersLikes,
              },
              labels: {
                data: newLabels || [],
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
    findPopular: async (ctx) => {
      try {
        const producers = await strapi
          .service("api::producer.producer")
          .findPopular();

        if (!producers || producers.length === 0) {
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

        const newProducers = producers.map((producer) => {
          // To delete properties from the object
          const {
            id,
            createdBy,
            updatedBy,
            image,
            products,
            usersLikes,
            labels,
            ...newProducer
          } = producer;
          const { id: imageId, ...newImage } = image;

          const newProducts = products.map((product) => {
            const { id, ...newProduct } = product;

            return {
              id: product.id,
              attributes: {
                ...newProduct,
              },
            };
          });

          const newUsersLikes = usersLikes.map((usersLike) => {
            const {
              id,
              password,
              resetPasswordToken,
              confirmationToken,
              ...newUsersLike
            } = usersLike;

            return {
              id: usersLike.id,
              attributes: {
                ...newUsersLike,
              },
            };
          });

          const newLabels = labels?.map((label) => {
            const { id, ...newLabel } = label;

            return {
              id: label.id,
              attributes: {
                ...newLabel,
              },
            };
          });

          return {
            id: producer.id,
            attributes: {
              ...newProducer,
              image: {
                data: {
                  id: producer.image.id,
                  attributes: {
                    ...newImage,
                  },
                },
              },
              products: {
                data: newProducts,
              },
              usersLikes: {
                data: newUsersLikes,
              },
              labels: {
                data: newLabels || [],
              },
            },
          };
        });

        ctx.body = {
          data: newProducers,
          meta: {
            pagination: {
              page: 1,
              pageSize: producers.length,
              pageCount: 1,
              total: producers.length,
            },
          },
        };
      } catch (err) {
        console.log(err);
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
