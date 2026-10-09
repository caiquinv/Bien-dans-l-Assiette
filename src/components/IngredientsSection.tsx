import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';

export const IngredientsSection: React.FC = () => {
  return (
    <section className="bg-[#FAFBF8] text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-3 text-balance">
          {SALES_CONFIG.ingredientsSection.title}
        </h2>
        <p className="text-base text-slate-700 leading-relaxed mb-6">
          {SALES_CONFIG.ingredientsSection.text}
        </p>

        <div className="bg-white rounded-xl border border-[#DCE4D4] p-5 shadow-xs">
          <ul className="space-y-3 text-sm text-slate-800">
            {SALES_CONFIG.ingredientsSection.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#EBF4E3] text-[#2D4225] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
