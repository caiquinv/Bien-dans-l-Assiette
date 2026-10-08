import React from 'react';
import { XCircle, CheckCircle2, Sparkles, Scale } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="bg-[#F4F6F0] py-16 md:py-24 border-b border-[#E1E5DA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B683C] tracking-widest uppercase mb-3">
            <Scale className="w-3.5 h-3.5" />
            Le Mécanisme Caché
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug font-serif-display mb-3 text-balance">
            {SALES_CONFIG.comparison.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {SALES_CONFIG.comparison.subtitle}
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Culprits (Left Column - Red tone) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-rose-100">
                <span className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                  <XCircle className="w-5 h-5 stroke-[2.2]" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Ce qui surcharge l'organisme
                  </h3>
                  <p className="text-xs text-rose-600 font-medium">Aliments pro-inflammatoires fréquents</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {SALES_CONFIG.comparison.badHabits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="text-rose-500 mt-0.5 shrink-0">✕</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-50 text-[11px] sm:text-xs text-slate-500 bg-rose-50/50 p-3 rounded-lg">
              Résultat : digestion lente, pic d'insuline rapide et coups de pompe réguliers.
            </div>
          </div>

          {/* Solution (Right Column - Emerald/Olive tone) */}
          <div className="bg-[#2D4325] text-white rounded-2xl p-6 sm:p-8 border border-[#3E5C33] shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#3E5C33]">
                <span className="w-8 h-8 rounded-full bg-[#3B5731] flex items-center justify-center text-[#BEE28A] shrink-0">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Ce que le guide met dans votre assiette
                  </h3>
                  <p className="text-xs text-[#BFE38C] font-medium">Aliments protecteurs et savoureux</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {SALES_CONFIG.comparison.goodHabits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E2EED4]">
                    <span className="text-[#A2D368] font-bold mt-0.5 shrink-0">✓</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3E5C33] text-[11px] sm:text-xs text-[#C8DCB8] bg-[#22351C] p-3 rounded-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A2D368] shrink-0" />
              <span>Chaque recette associe ces ingrédients pour allier saveur et digestion légère.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
