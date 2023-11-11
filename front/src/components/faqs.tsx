import Accordion from '@/components/layout/accordion';

const Faqs = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-50">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">
              Questions fréquemment posées
            </h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
            <Accordion
              title="Que dois-je faire pour avoir une réduction lorsque je fais mes courses ?"
              active
            >
              Les réductions sont ajustées à chacun des commerçants, pour savoir ce que tu peux
              avoir regardé sur sa page sur le site. Ensuite, tu n&apos;as qu&apos;à demander
              lorsque tu passes en caisse, en précisant que tu es étudiant de l&apos;ENSAT. Il te
              faudra montrer ta carte étudiante ou bien ta connexion sur le site afin de le prouver.
              N&apos;oublie pas de liker la page du producteur sur le site après avoir effectué ton
              achat, ça nous permet de mieux gérer nos réductions ensuite !
            </Accordion>
            <Accordion title="Comment avoir un produit gratuit ?">
              Chaque début de mois, si notre budget nous le permet, nous allons pré-financer des
              produits chez les différents commerçants. Ils seront indiqués sur la page de ses
              commerçants. Il te suffit alors de te rendre là bas et récupérer le produit, puis de
              l&apos;indiquer sur le site.
            </Accordion>
            <Accordion title="Je connais un producteur ou un commerçant qui pourrait rejoindre le projet, est-ce possible ?">
              Bien sûr, plus on est de fous, plus on rit ! La map est amenée à évoluer au fil des
              rencontres, avec dans l&apos;objectif d&apos;agrandir ce réseau que nous formons. Si
              tu connais quelqu&apos;un d&apos;intéressé, contacte-nous sur insta ou par mail et
              nous ferons notre possible pour intégrer le nouveau candidat !
            </Accordion>
            <Accordion title="Comment puis-je aider ce projet ?">
              Consommer chez les producteurs du site est déjà une forme d&apos;engagement. Si tu
              souhaites aller plus loin, tu es le bienvenu dans l&apos;équipe, même pour des petites
              missions. Tu peux également en parler autour de toi, pour encourager d&apos;autres
              étudiants à faire comme toi, d&apos;autres producteurs à nous rejoindre où même des
              personnes extérieures à faire des dons !
            </Accordion>
            <Accordion title="Je n'ai pas internet sur mon téléphone, comment puis-je utiliser cette application ?">
              Tu peux simplement repérer les producteurs avant de partir faire tes courses et
              t&apos;y rendre avec ta carte ou l&apos;autocollant du projet !
            </Accordion>
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
