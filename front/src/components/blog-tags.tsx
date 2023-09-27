const BlogTags = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full flex items-center justify-between space-x-10 overflow-x-scroll no-scrollbar py-5 border-b border-slate-100">
          <div className="w-full flex items-center justify-between space-x-10">
            <ul className="flex md:flex-wrap -mx-5 -my-2">
              <li className="mx-5 my-2">
                <button className="font-medium whitespace-nowrap text-blue-600">
                  Produits animaux
                </button>
              </li>
              <li className="mx-5 my-2">
                <button className="font-medium whitespace-nowrap text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">
                  Produits végétaux
                </button>
              </li>
              <li className="mx-5 my-2">
                <button className="font-medium whitespace-nowrap text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">
                  Produits transformés
                </button>
              </li>
              <li className="mx-5 my-2">
                <button className="font-medium whitespace-nowrap text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out">
                  Épicerie
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTags;
