'use client';

import { isSameMonth, parseISO } from 'date-fns';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import qs from 'qs';
import { useState } from 'react';

import { updateProduct } from '@/actions/product';
import { createReservation } from '@/actions/reservation';

import { getOneProductById } from '@/queries/product';
import { getAllReservations } from '@/queries/reservation';

import { Product, Products as ProductsType } from '@/types/product';
import { Reservations } from '@/types/reservation';

import { JwtUserProps } from '@/utils/auth';

interface ProductsProps {
  products: ProductsType;
  reservations: Reservations;
}

interface HandleClickProps {
  id: number;
}

const Products = ({ products, reservations }: ProductsProps) => {
  const [errorMessages, setErrorMessages] = useState<{ [key: number]: string }>({});

  const { data: session, status } = useSession();

  const user = session?.user as unknown as JwtUserProps;

  const router = useRouter();
  const pathname = usePathname();

  const organizeProducts = (newProducts: ProductsType): ProductsType => {
    const productsWithCount = newProducts.filter((product) => product.attributes.count > 0);
    const productsWithZeroCount = newProducts.filter((product) => product.attributes.count === 0);

    const organizedProducts: ProductsType = [];
    let currentLine: ProductsType = [];

    productsWithCount.forEach((product) => {
      currentLine.push(product);
      if (currentLine.length === 3) {
        organizedProducts.push(...currentLine);
        currentLine = [];
      }
    });

    while (currentLine.length >= 0 && currentLine.length < 3 && productsWithZeroCount.length > 0) {
      currentLine.push(productsWithZeroCount.shift() as Product);
    }

    if (currentLine.length > 0) {
      organizedProducts.push(...currentLine);
    }

    return organizedProducts;
  };

  const organizedProducts = organizeProducts(products);

  const handleClick = async ({ id }: HandleClickProps) => {
    if (status === 'unauthenticated') {
      router.push(`/login?callbackUrl=${pathname}`);

      return;
    }

    const query = qs.stringify(
      {
        fields: ['count', 'active'],
      },
      {
        encodeValuesOnly: true,
      },
    );

    const product = await getOneProductById({
      id,
      query,
    });

    if (product.data.attributes.count <= 0 || !product.data.attributes.active) {
      setErrorMessages({ ...errorMessages, [id]: 'Ce produit n’est plus disponible' });

      return;
    }

    if (user) {
      const queryReservations = qs.stringify(
        {
          filters: {
            product: {
              id: {
                $eq: id,
              },
            },
            user: {
              id: {
                $eq: user.id,
              },
            },
          },
        },
        {
          encodeValuesOnly: true,
        },
      );

      const reservationsCheck = await getAllReservations({
        query: queryReservations,
      });

      const alreadyBookedThisMonth = reservationsCheck.data.some((r) => {
        const reservationDate = r.attributes.reservationDate.toString();
        return isSameMonth(parseISO(reservationDate), new Date());
      });

      if (reservationsCheck.data.length > 0 && alreadyBookedThisMonth) {
        setErrorMessages({ ...errorMessages, [id]: 'Tu as déjà réservé ce produit' });

        return;
      }

      const result = await createReservation({
        token: user.jwt,
        data: {
          confirmed: false,
          canceled: false,
          confirmationDate: null,
          cancelationDate: null,
          reservationDate: new Date(),
          product: product.data.id,
          user: user.id,
        },
      });

      if (result) {
        const resultProduct = await updateProduct({
          token: user.jwt,
          id: product.data.id,
          data: {
            count: product.data.attributes.count - 1,
          },
        });

        if (resultProduct) {
          router.push('/account/reservations');
        }
      }
    }
  };

  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">Les produits prépayés</h2>
          </div>

          <div
            className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16"
            data-aos-id-products
          >
            {organizedProducts.map((product) => {
              const filteredReservations = reservations.filter(
                (r) =>
                  r.attributes.product.data.id === product.id &&
                  r.attributes.user.data.id === user?.id,
              );

              const alreadyBookedThisMonth = filteredReservations.some((r) => {
                const reservationDate = r.attributes.reservationDate.toString();
                return isSameMonth(parseISO(reservationDate), new Date());
              });

              return (
                <article
                  key={product.id}
                  className="h-full bg-white p-6 shadow-xl relative"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-products]"
                >
                  <div
                    className={`h-full flex flex-col 
                  ${product.attributes.count === 0 && 'opacity-30'}`}
                  >
                    <header>
                      {product.attributes.count > 0 ? (
                        <>
                          {alreadyBookedThisMonth && (
                            <div className="absolute top-0 right-0 mr-6 -mt-4">
                              <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">
                                Tu as déjà réservé ce produit
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="absolute top-0 right-0 mr-6 -mt-4">
                          <div className="inline-flex text-sm font-semibold py-1 px-3 text-rose-700 bg-rose-200 rounded-full">
                            Ce produit n&apos;est plus disponible
                          </div>
                        </div>
                      )}

                      <div className="flex items-center mb-4">
                        <div className="relative mr-5">
                          <div className="w-12 h-12 shrink-0">
                            <Image
                              className="rounded-full object-cover"
                              src={product.attributes.image.data.attributes.url}
                              fill
                              loading="lazy"
                              alt={
                                product.attributes.image.data.attributes.alternativeText ||
                                product.attributes.title
                              }
                            />
                          </div>

                          <div className="absolute top-0 right-0 -mr-2" aria-hidden="true">
                            <svg
                              className="fill-blue-600"
                              width="20"
                              height="16"
                              viewBox="0 0 20 16"
                            >
                              <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                            </svg>
                          </div>
                        </div>

                        <h4 className="h4 font-playfair-display">{product.attributes.title}</h4>
                      </div>
                    </header>

                    <div className="grow mb-3">
                      <p className="text-slate-500 italic">{product.attributes.summary}</p>
                    </div>

                    <footer>
                      {product.attributes.count > 0 && !alreadyBookedThisMonth && (
                        <div className="p-3 rounded bg-slate-50">
                          <button
                            className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group"
                            onClick={() =>
                              handleClick({
                                id: product.id,
                              })
                            }
                          >
                            Réserver{' '}
                            <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                              -&gt;
                            </span>
                          </button>
                        </div>
                      )}

                      <div className="text-xs font-medium mt-2">
                        {errorMessages[product.id] ? (
                          <span className="text-rose-500 mt-2">{errorMessages[product.id]}</span>
                        ) : (
                          <span className="text-slate-500">
                            {product.attributes.count} produit{product.attributes.count > 1 && 's'}{' '}
                            disponible{product.attributes.count > 1 && 's'}
                          </span>
                        )}
                      </div>
                    </footer>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
