import React, { useState } from 'react';
import { SIX_SAMPLE_RECIPES, FULL_EXTRACT_RECIPE } from '../data/sampleRecipes';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';
import squashSoupImg from '../assets/images/turmeric_squash_soup_1791431086146.webp';

export const RecipeShowcaseSection: React.FC = () => {
  const [showSteps, setShowSteps] = useState(false);

  return (
    <section className="bg-white text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl sm:max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-5 text-balance">
          Un aperçu de ce que vous allez cuisiner
        </h2>

        {/* Horizontal Carousel with 4:5 large cards, showing part of next card on mobile */}
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory mb-10">
          {SIX_SAMPLE_RECIPES.map((r) => (
            <div
              key={r.id}
              className="min-w-[210px] sm:min-w-[230px] max-w-[240px] shrink-0 snap-start bg-[#FAFBF8] rounded-2xl border border-[#DCE4D4] overflow-hidden shadow-xs flex flex-col"
            >
              <div className="aspect-4/5 overflow-hidden bg-slate-100 relative">
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  width={400}
                  height={500}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex flex-col justify-between flex-1">
                <h3 className="text-sm font-bold text-slate-900 leading-snug font-serif-display line-clamp-2 mb-2">
                  {r.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 pt-2 border-t border-[#EAEFE4]">
                  <Clock className="w-3.5 h-3.5 text-[#2D3E1E] shrink-0" />
                  <span>{r.prepTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extrait du guide — Phone mockup frame with velouté photo, ingredients visible, steps behind toggle */}
        <div className="max-w-sm mx-auto bg-slate-900 rounded-[32px] p-3 shadow-xl border-4 border-slate-800">
          <div className="bg-[#FAFBF8] rounded-[24px] overflow-hidden border border-[#DCE4D4]">
            {/* Phone header */}
            <div className="bg-[#2D3E1E] text-white px-4 py-2 text-center text-xs font-bold tracking-wider uppercase">
              Extrait du guide
            </div>

            {/* Velouté photo */}
            <div className="aspect-16/9 w-full overflow-hidden bg-slate-100">
              <img
                src={squashSoupImg}
                alt="Velouté de potimarron au curcuma"
                width={500}
                height={280}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Recipe content */}
            <div className="p-4">
              <h3 className="text-base font-bold font-serif-display text-slate-900 mb-0.5 leading-snug">
                {FULL_EXTRACT_RECIPE.title}
              </h3>
              <p className="text-sm text-[#3E582E] font-medium mb-3">
                {FULL_EXTRACT_RECIPE.portions} · {FULL_EXTRACT_RECIPE.timing}
              </p>

              {/* Ingrédients visibles */}
              <div className="mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 pb-1 border-b border-[#E1E7D8]">
                  Ingrédients
                </h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  {FULL_EXTRACT_RECIPE.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#3E582E] font-bold">•</span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Étapes recolhidas com botão toggle */}
              <button
                type="button"
                onClick={() => setShowSteps(!showSteps)}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#F0F4EC] hover:bg-[#E5EDDC] text-[#2D3E1E] text-sm font-bold transition-colors border border-[#D4DFCC] cursor-pointer"
              >
                <span>{showSteps ? 'Masquer les étapes' : 'Voir les étapes'}</span>
                {showSteps ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showSteps && (
                <ol className="mt-3 space-y-2 text-sm text-slate-700 pt-2 border-t border-[#E1E7D8]">
                  {FULL_EXTRACT_RECIPE.steps.map((st, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#2D3E1E] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{st}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
