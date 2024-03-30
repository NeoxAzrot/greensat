'use client';

import { updateProduct } from '@/actions/product';
import { updateReservation } from '@/actions/reservation';

import { Reservation } from '@/types/reservation';

import { JwtUserProps } from '@/utils/auth';

interface AccountReservationsButtonProps {
  reservation: Reservation;
  user: JwtUserProps;
}

const AccountReservationsButton = ({ reservation, user }: AccountReservationsButtonProps) => {
  const handleConfirmReservation = async () => {
    await updateReservation({
      token: user.jwt,
      id: reservation.id,
      data: {
        confirmed: true,
        confirmationDate: new Date(),
      },
    });
  };

  const handleCancelReservation = async () => {
    await updateReservation({
      token: user.jwt,
      id: reservation.id,
      data: {
        canceled: true,
        cancelationDate: new Date(),
      },
    });

    await updateProduct({
      token: user.jwt,
      id: reservation.attributes.product.data.id,
      data: {
        count: reservation.attributes.product.data.attributes.count + 1,
      },
    });
  };

  return (
    <>
      <div className="p-3 rounded bg-slate-50">
        <button
          className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group"
          onClick={handleConfirmReservation}
        >
          Confirmer{' '}
          <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </button>
      </div>

      <div className="text-sm text-center font-medium mt-2">
        <button
          className="text-rose-600 hover:underline"
          onClick={handleCancelReservation}
          aria-label="Annuler la réservation"
        >
          Annuler la réservation
        </button>
      </div>
    </>
  );
};

export default AccountReservationsButton;
