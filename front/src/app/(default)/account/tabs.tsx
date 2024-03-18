'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Producers } from '@/types/producer';
import { Reservations } from '@/types/reservation';
import { User } from '@/types/user';

import Form from './form';
import AccountProducers from './producers';
import AccountReservations from './reservations';

type TabProps = 'parameters' | 'reservations' | 'producers';

interface AccountTabsProps {
  reservations: Reservations;
  producers: Producers;
  user: User;
}

const AccountTabs = ({ reservations, producers, user }: AccountTabsProps) => {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get('tab');

  const [tab, setTab] = useState<TabProps>(
    defaultTab === 'reservations' ? 'reservations' : 'parameters',
  );

  const getButtonClasses = (newTab: TabProps) => {
    if (tab === newTab) {
      return 'font-medium whitespace-nowrap text-blue-600';
    }

    return 'font-medium whitespace-nowrap text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out';
  };

  const handleClick = (newTab: TabProps) => {
    setTab(newTab);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full flex items-center justify-between space-x-10 overflow-x-scroll no-scrollbar py-5 border-b border-slate-100">
          <div className="w-full flex items-center justify-between space-x-10">
            <ul className="flex md:flex-wrap -mx-5 -my-2">
              <li className="mx-5 my-2">
                <button
                  className={getButtonClasses('parameters')}
                  onClick={() => handleClick('parameters')}
                >
                  Paramètres du compte
                </button>
              </li>

              <li className="mx-5 my-2">
                <button
                  className={getButtonClasses('reservations')}
                  onClick={() => handleClick('reservations')}
                >
                  Mes réservations
                </button>
              </li>

              <li className="mx-5 my-2">
                <button
                  className={getButtonClasses('producers')}
                  onClick={() => handleClick('producers')}
                >
                  Mes producteurs préférés
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8">
          {tab === 'parameters' && <Form user={user} />}
          {tab === 'reservations' && <AccountReservations reservations={reservations} />}
          {tab === 'producers' && <AccountProducers producers={producers} />}
        </div>
      </div>
    </section>
  );
};

export default AccountTabs;
