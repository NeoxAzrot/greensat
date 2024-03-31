import { usePathname, useRouter } from 'next/navigation';

const AccountTabs = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tab = pathname.split('/').pop();

  const getButtonClasses = (path: string) => {
    return `font-medium whitespace-nowrap ${tab === path ? 'text-blue-600' : 'text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out'}`;
  };

  const handleClick = (path: string) => {
    router.push(`/account/${path}`);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full flex items-center justify-between space-x-10 overflow-x-scroll no-scrollbar py-5 border-b border-slate-100">
          <div className="w-full flex items-center justify-between space-x-10">
            <ul className="flex md:flex-wrap -mx-5 -my-2">
              <li className="mx-5 my-2">
                <button
                  className={getButtonClasses('settings')}
                  onClick={() => handleClick('settings')}
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
                <button className={getButtonClasses('likes')} onClick={() => handleClick('likes')}>
                  Mes producteurs préférés
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountTabs;
