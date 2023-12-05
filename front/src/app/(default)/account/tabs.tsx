'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Products } from '@/types/product';
import { User } from '@/types/user';

import Form from './form';
import AccountProducts from './products';

type TabProps = 'parameters' | 'products';

interface AccountTabsProps {
  products: Products;
  user: User;
}

const AccountTabs = ({ products, user }: AccountTabsProps) => {
  const { status } = useSession();
  const router = useRouter();

  const searchParams = useSearchParams();
  const defaultTab = searchParams.get('tab');

  const [tab, setTab] = useState<TabProps>(defaultTab === 'products' ? 'products' : 'parameters');

  const getButtonClasses = (newTab: TabProps) => {
    if (tab === newTab) {
      return 'font-medium whitespace-nowrap text-blue-600';
    }

    return 'font-medium whitespace-nowrap text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out';
  };

  const handleClick = (newTab: TabProps) => {
    setTab(newTab);
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

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
                  className={getButtonClasses('products')}
                  onClick={() => handleClick('products')}
                >
                  Les produits
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8">
          {tab === 'parameters' && <Form user={user} />}
          {tab === 'products' && <AccountProducts products={products} />}
        </div>
      </div>
    </section>
  );
};

export default AccountTabs;
