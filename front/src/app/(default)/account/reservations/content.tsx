import { Reservations } from '@/types/reservation';

import { JwtUserProps } from '@/utils/auth';

import List from './list';

interface AccountReservationsContentProps {
  pendingReservations: Reservations;
  confirmedReservations: Reservations;
  canceledReservations: Reservations;
  user: JwtUserProps;
}

const AccountReservationsContent = ({
  pendingReservations,
  confirmedReservations,
  canceledReservations,
  user,
}: AccountReservationsContentProps) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">
              Les produits que tu as réservés
            </h2>
          </div>

          <List
            reservations={pendingReservations}
            title="En attente"
            status="pending"
            user={user}
          />
          <List
            reservations={confirmedReservations}
            title="Confirmés"
            status="confirmed"
            user={user}
          />
          <List reservations={canceledReservations} title="Annulés" status="canceled" user={user} />

          {pendingReservations.length === 0 &&
            confirmedReservations.length === 0 &&
            canceledReservations.length === 0 && (
              <div className="w-full flex items-center justify-center">
                <p className="text-slate-500">Tu n&apos;as réservé aucun produit pour le moment.</p>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default AccountReservationsContent;
