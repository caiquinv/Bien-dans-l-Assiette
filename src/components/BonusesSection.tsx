import React from 'react';

export const BonusesSection: React.FC = () => {
  const bonuses = [
    {
      id: '1',
      title: '28 Jours de Menus',
      summary: '4 semaines de repas planifiés du petit-déjeuner au dîner.',
      cover: '/src/assets/images/bonus_menu_1791511908664.webp',
      alt: 'Couvercle 28 Jours de Menus',
    },
    {
      id: '2',
      title: 'Listes de Courses',
      summary: 'Courses prêtes par rayon pour chaque semaine.',
      cover: '/src/assets/images/bonus_courses_1791511919389.webp',
      alt: 'Couvercle Listes de Courses',
    },
    {
      id: '3',
      title: 'Fiches Ingrédients',
      summary: 'Les aliments clés décryptés et comment les utiliser.',
      cover: '/src/assets/images/bonus_fiches_1791511928957.webp',
      alt: 'Couvercle Fiches Ingrédients',
    },
    {
      id: '4',
      title: 'Organisation Cuisine',
      summary: 'Gagnez du temps chaque soir sans stress.',
      cover: '/src/assets/images/bonus_organisation_1791511938782.webp',
      alt: 'Couvercle Guide Organisation',
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-6 text-balance">
          4 compléments inclus avec le guide
        </h2>

        {/* 2x2 Grid with cover, name, "INCLUS" badge and 1 concise line (<=8 words) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {bonuses.map((b) => (
            <div
              key={b.id}
              className="bg-[#FAFBF8] rounded-2xl border border-[#DCE4D4] p-3 shadow-xs flex flex-col"
            >
              <div className="relative aspect-3/4 rounded-xl overflow-hidden mb-2.5 bg-[#EAEFE3] shadow-2xs">
                <img
                  src={b.cover}
                  alt={b.alt}
                  width={360}
                  height={480}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#2D3E1E] text-white text-[10px] font-extrabold tracking-wider uppercase shadow-xs">
                  INCLUS
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 font-serif-display leading-snug mb-1">
                {b.title}
              </h3>
              <p className="text-xs text-slate-600 leading-snug mt-auto">
                {b.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
