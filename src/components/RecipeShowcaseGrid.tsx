import React, { useState } from 'react';
import { Clock, Eye, Sparkles } from 'lucide-react';
import { SAMPLE_RECIPES } from '../data/sampleRecipes';
import { SALES_CONFIG, type RecipeItem } from '../config/salesConfig';
import { RecipeModal } from './RecipeModal';

interface RecipeShowcaseGridProps {
  onSelectOffer: () => void;
}

export const RecipeShowcaseGrid: React.FC<RecipeShowcaseGridProps> = ({ onSelectOffer }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  const filteredRecipes = SAMPLE_RECIPES.filter(recipe => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'breakfast') return recipe.category === 'breakfast';
    if (activeFilter === 'lunch') return recipe.category === 'lunch';
    if (activeFilter === 'dinner') return recipe.category === 'dinner';
    if (activeFilter === 'dessert_snack') return recipe.category === 'dessert' || recipe.category === 'snack';
    return true;
  });

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#E3E8DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#4B683B] tracking-widest uppercase mb-2 block">
            UN APERÇU DU MENU
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-display mb-3 text-balance">
            DÉCOUVREZ CE QUE VOUS ALLEZ POUVOIR PRÉPARER
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Des soupes réconfortantes, des bowls vitaminés, des poissons aux herbes et des douceurs équilibrées.
          </p>
        </div>

        {/* Filter Tabs (Functional segmented buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#F2F5ED] rounded-xl max-w-2xl mx-auto mb-10 border border-[#E0E7D7]">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-[#4E683C] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Toutes les recettes
          </button>
          <button
            onClick={() => setActiveFilter('breakfast')}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === 'breakfast'
                ? 'bg-[#4E683C] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Petits-Déjeuners
          </button>
          <button
            onClick={() => setActiveFilter('lunch')}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === 'lunch'
                ? 'bg-[#4E683C] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Déjeuners
          </button>
          <button
            onClick={() => setActiveFilter('dinner')}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === 'dinner'
                ? 'bg-[#4E683C] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Dîners & Soupes
          </button>
          <button
            onClick={() => setActiveFilter('dessert_snack')}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === 'dessert_snack'
                ? 'bg-[#4E683C] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Desserts & Collations
          </button>
        </div>

        {/* 4x2 Grid of Recipe Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {filteredRecipes.map((r) => (
            <div
              key={r.id}
              onClick={() => setSelectedRecipe(r)}
              className="group cursor-pointer bg-[#FAFBF8] border border-[#E1E7D9] hover:border-[#6C9251] rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Image Container with subtle hover zoom */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#BDE483]" />
                    <span>{r.prepTime}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#4E683C]" /> Voir la recette
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4E683C] block mb-1">
                    {r.categoryLabel}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#3B542B] transition-colors line-clamp-2 mb-2 font-serif-display">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 pb-4 pt-2 border-t border-[#EDF2E8] flex items-center justify-between text-[11px] text-slate-500">
                <span className="truncate">{r.difficulty}</span>
                <span className="text-[#4E683C] font-semibold group-hover:underline">
                  Consulter &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note below grid */}
        <div className="text-center p-4 bg-[#F5F8F0] rounded-xl border border-[#DFE7D4] max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-[#384F2A]">
          <Sparkles className="w-4 h-4 text-[#7AA952] shrink-0" />
          <span>... et <strong>{SALES_CONFIG.product.totalRecipes - 8} autres recettes originales</strong> à explorer dans votre guide complet !</span>
        </div>
      </div>

      {/* Recipe Modal Preview */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        onSelectOffer={onSelectOffer}
      />
    </section>
  );
};
