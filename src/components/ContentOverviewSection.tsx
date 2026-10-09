import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';
import { Users, Clock, ShoppingBasket, CheckCircle2 } from 'lucide-react';
import catBreakfastImg from '../assets/images/cat_breakfast_1791511823205.webp';
import catLunchImg from '../assets/images/cat_lunch_1791511832870.webp';
import catDinnerImg from '../assets/images/cat_dinner_1791511843395.webp';
import catDessertImg from '../assets/images/cat_dessert_1791511857598.webp';
import catSnacksImg from '../assets/images/cat_snacks_1791511882488.webp';

export const ContentOverviewSection: React.FC = () => {
  const categories = [
    {
      count: '50',
      title: 'Petits-déjeuners',
      img: catBreakfastImg,
      alt: 'Petits-déjeuners sains',
    },
    {
      count: '50',
      title: 'Déjeuners',
      img: catLunchImg,
      alt: 'Déjeuners équilibrés',
    },
    {
      count: '50',
      title: 'Dîners',
      img: catDinnerImg,
      alt: 'Dîners réconfortants',
    },
    {
      count: '50',
      title: 'Desserts',
      img: catDessertImg,
      alt: 'Desserts légers',
    },
    {
      count: '50',
      title: 'Snacks & Boissons',
      img: catSnacksImg,
      alt: 'Collations et boissons douces',
      fullWidth: true,
    },
  ];

  return (
    <section className="bg-[#FAFBF8] text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-5 text-balance">
          {SALES_CONFIG.content.title}
        </h2>

        {/* 5-photo grid: 2 columns on mobile, last full width */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden shadow-xs border border-[#DCE4D4] bg-[#E8EDE2] ${
                cat.fullWidth ? 'col-span-2 aspect-21/9 sm:aspect-16/7' : 'aspect-square'
              }`}
            >
              <img
                src={cat.img}
                alt={cat.alt}
                width={500}
                height={500}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* HTML overlay: large 50 + category name */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex flex-col justify-end p-3.5 sm:p-4 text-white">
                <span className="text-2xl sm:text-3xl font-black font-serif-display leading-none text-[#E8F5D8] drop-shadow-sm">
                  {cat.count}
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-wide uppercase mt-1 text-white/95">
                  {cat.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 1 single line with 4 icons: portions, temps, ingrédients, étapes */}
        <div className="bg-white rounded-xl p-3 border border-[#DCE4D4] shadow-2xs">
          <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center text-xs font-semibold text-slate-700">
            <div className="flex flex-col items-center justify-center p-1">
              <Users className="w-4 h-4 text-[#2D3E1E] mb-1" />
              <span className="text-xs sm:text-sm">Portions</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1">
              <Clock className="w-4 h-4 text-[#2D3E1E] mb-1" />
              <span className="text-xs sm:text-sm">Temps</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1">
              <ShoppingBasket className="w-4 h-4 text-[#2D3E1E] mb-1" />
              <span className="text-xs sm:text-sm">Ingrédients</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1">
              <CheckCircle2 className="w-4 h-4 text-[#2D3E1E] mb-1" />
              <span className="text-xs sm:text-sm">Étapes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
