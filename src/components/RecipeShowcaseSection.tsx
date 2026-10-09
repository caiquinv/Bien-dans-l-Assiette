import React from 'react';
import { SIX_SAMPLE_RECIPES, FULL_EXTRACT_RECIPE } from '../data/sampleRecipes';

export const RecipeShowcaseSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-6 text-center text-balance">
          Un aperçu de ce que vous allez cuisiner
        </h2>

        {/* 6 Cartões com fotos únicas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {SIX_SAMPLE_RECIPES.map((r) => (
            <div
              key={r.id}
              className="bg-[#FAFBF8] rounded-xl border border-[#DCE4D4] overflow-hidden flex flex-col"
            >
              <div className="h-44 sm:h-40 overflow-hidden bg-slate-100">
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#354D28] block mb-1">
                    {r.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug font-serif-display mb-2">
                    {r.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 pt-2 border-t border-[#EAEFE4]">
                  {r.prepTime}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco "Extrait du guide" com 1 receita completa (Velouté de potimarron au curcuma & lait de coco) */}
        <div className="bg-[#F6F8F3] rounded-2xl border-2 border-[#D3E0C8] p-5 sm:p-7 max-w-2xl mx-auto shadow-xs">
          <div className="inline-block px-2.5 py-0.5 rounded bg-[#2D4225] text-[#D8ECA8] text-xs font-bold uppercase tracking-wider mb-2">
            Extrait du guide
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-slate-900 mb-1 leading-snug">
            {FULL_EXTRACT_RECIPE.title}
          </h3>

          <div className="text-xs sm:text-sm font-medium text-[#3E582E] mb-5">
            {FULL_EXTRACT_RECIPE.portions} · {FULL_EXTRACT_RECIPE.timing}
          </div>

          {/* Ingrédients avec quantités */}
          <div className="mb-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 pb-1 border-b border-slate-200">
              Ingrédients
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm text-slate-700">
              {FULL_EXTRACT_RECIPE.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#3E582E] font-bold shrink-0">•</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Étapes numérotées */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 pb-1 border-b border-slate-200">
              Étapes de préparation
            </h4>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
              {FULL_EXTRACT_RECIPE.steps.map((st, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#2D4225] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{st}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
