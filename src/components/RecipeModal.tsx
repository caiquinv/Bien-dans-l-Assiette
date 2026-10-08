import React from 'react';
import { X, Clock, Flame, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SALES_CONFIG, type RecipeItem } from '../config/salesConfig';

interface RecipeModalProps {
  recipe: RecipeItem | null;
  onClose: () => void;
  onSelectOffer: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose, onSelectOffer }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
          aria-label="Fermer l'aperçu"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-56 sm:h-64 bg-slate-100 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#506D3E] text-white px-2.5 py-0.5 rounded-full mb-1.5">
              {recipe.categoryLabel}
            </span>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold font-serif-display leading-tight">
              {recipe.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7 max-h-[60vh] overflow-y-auto space-y-6 text-slate-800 text-sm">
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 bg-[#F6F8F3] p-3 rounded-xl border border-[#E3E8DC] text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-slate-500 text-xs mb-0.5">
                <Clock className="w-3.5 h-3.5 text-[#506D3E]" /> Préparation
              </div>
              <span className="font-bold text-slate-900">{recipe.prepTime}</span>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-slate-500 text-xs mb-0.5">
                <Flame className="w-3.5 h-3.5 text-[#506D3E]" /> Cuisson
              </div>
              <span className="font-bold text-slate-900">{recipe.cookTime}</span>
            </div>
            <div>
              <div className="text-slate-500 text-xs mb-0.5">Difficulté</div>
              <span className="font-bold text-slate-900">{recipe.difficulty}</span>
            </div>
          </div>

          {/* Benefits Callout */}
          <div className="flex items-start gap-2.5 bg-emerald-50 border border-emerald-200/60 p-3.5 rounded-xl text-xs sm:text-sm text-emerald-900">
            <Sparkles className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <strong>Bénéfice digestif & vitalité : </strong>
              <span>{recipe.benefits}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
            {recipe.description}
          </p>

          {/* Ingredients list */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 pb-1 border-b border-slate-100 flex items-center gap-2">
              <span>Ingrédients nécessaires</span>
              <span className="text-xs text-slate-500 font-normal">({recipe.ingredients.length} ingrédients)</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#506D3E] mt-0.5 shrink-0 stroke-[2.5]" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation steps */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 pb-1 border-b border-slate-100">
              Étapes de préparation
            </h4>
            <ol className="space-y-2.5 text-xs text-slate-700">
              {recipe.steps.map((st, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EBF2E4] text-[#3D562E] font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{st}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Chef's tip */}
          <div className="bg-amber-50/70 border border-amber-200/80 p-3.5 rounded-xl text-xs text-amber-900">
            <span className="font-bold text-amber-800">L'astuce anti-inflammatoire du guide : </span>
            <span>{recipe.chefTip}</span>
          </div>
        </div>

        {/* Modal Footer with Offer Action */}
        <div className="bg-[#FAFBF7] border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Cette fiche est un aperçu extrait des <strong>{SALES_CONFIG.product.totalRecipes} recettes</strong> du guide complet.
          </div>
          <button
            onClick={() => {
              onClose();
              onSelectOffer();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#4E683C] hover:bg-[#5E7D49] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <span>Découvrir l'offre complète à {SALES_CONFIG.product.priceCurrentFormatted} €</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
