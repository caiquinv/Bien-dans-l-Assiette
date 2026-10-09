import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';
import antiInflamImg from '../assets/images/anti_inflam_table_1791511803378.webp';

export const IngredientsSection: React.FC = () => {
  return (
    <section className="bg-[#FAFBF8] text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-4 text-balance">
          {SALES_CONFIG.ingredientsSection.title}
        </h2>

        {/* Flat lay overhead photo with 6 HTML tag overlays */}
        <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#DCE4D4] bg-[#E8EDE2] aspect-square mb-4">
          <img
            src={antiInflamImg}
            alt="Ingrédients bruts et colorés disposés sur table en bois"
            width={720}
            height={720}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />

          {/* HTML Badges pointing to groups */}
          <div className="absolute inset-0 p-3 pointer-events-none">
            {/* 6 responsive pill tags with soft backdrop */}
            <div className="flex flex-wrap gap-1.5 justify-center absolute bottom-3 inset-x-3">
              <span className="bg-white/95 backdrop-blur-xs text-[#20321A] text-xs sm:text-sm font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#2D3E1E]/20">
                Huile d'olive
              </span>
              <span className="bg-white/95 backdrop-blur-xs text-[#20321A] text-xs sm:text-sm font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#2D3E1E]/20">
                Légumes de saison
              </span>
              <span className="bg-white/95 backdrop-blur-xs text-[#20321A] text-xs sm:text-sm font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#2D3E1E]/20">
                Curcuma & gingembre
              </span>
              <span className="bg-white/95 backdrop-blur-xs text-[#20321A] text-xs sm:text-sm font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#2D3E1E]/20">
                Poisson
              </span>
              <span className="bg-white/95 backdrop-blur-xs text-[#20321A] text-xs sm:text-sm font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#2D3E1E]/20">
                Légumineuses
              </span>
              <span className="bg-white/95 backdrop-blur-xs text-[#20321A] text-xs sm:text-sm font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#2D3E1E]/20">
                Fruits & noix
              </span>
            </div>
          </div>
        </div>

        {/* Allowed phrasing note */}
        <p className="text-sm text-slate-600 leading-snug bg-white p-3 rounded-xl border border-[#DCE4D4] text-center">
          Des produits bruts, de saison, faciles à trouver au supermarché.
        </p>
      </div>
    </section>
  );
};
