import React from 'react';
import bonusMenuImg from '../assets/images/bonus_menu_1791511908664.webp';
import bonusBatchImg from '../assets/images/bonus_batch_cooking_1791513422181.webp';
import bonusPlacardImg from '../assets/images/bonus_placard_1791513439634.webp';
import bonusSaucesImg from '../assets/images/bonus_sauces_1791513457795.webp';

export const BonusesSection: React.FC = () => {
  const bonuses = [
    {
      id: '1',
      title: '28 jours de menus clé-en-main',
      summary: '4 semaines organisées du lundi au dimanche.',
      bullets: ['Listes de courses par rayon', 'Du lundi au dimanche'],
      cover: bonusMenuImg,
      alt: 'Couvercle 28 Jours de Menus',
    },
    {
      id: '2',
      title: 'Batch cooking express',
      summary: 'Préparez vos bases et assemblez en 10 minutes.',
      bullets: ['Bases prêtes le week-end', 'Dîners en 10 minutes'],
      cover: bonusBatchImg,
      alt: 'Couvercle Batch Cooking Express',
    },
    {
      id: '3',
      title: 'Placard sain & 60 substitutions',
      summary: 'Adaptez facilement vos recettes du quotidien.',
      bullets: ['60 équivalences faciles', 'Les essentiels à garder'],
      cover: bonusPlacardImg,
      alt: 'Couvercle Placard sain et substitutions',
    },
    {
      id: '4',
      title: '30 sauces, vinaigrettes & dips',
      summary: 'Renouvelez vos plats en quelques minutes.',
      bullets: ['Prêtes en quelques minutes', 'Ingrédients du placard'],
      cover: bonusSaucesImg,
      alt: 'Couvercle 30 Sauces, Vinaigrettes et Dips',
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-6 text-balance">
          4 compléments inclus avec le guide
        </h2>

        {/* 2x2 Grid with cover, name, "INCLUS" badge, 1 line and 2 bullets */}
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
              <p className="text-sm text-slate-600 leading-snug mb-2">
                {b.summary}
              </p>
              <ul className="space-y-1 mt-auto pt-2 border-t border-[#EAEFE4] text-xs text-slate-700">
                {b.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3E582E] shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
