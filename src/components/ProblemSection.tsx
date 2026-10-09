import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-[#FAFBF8] text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-3 text-balance">
          {SALES_CONFIG.problem.title}
        </h2>
        <p className="text-base text-slate-700 leading-relaxed mb-6">
          {SALES_CONFIG.problem.text}
        </p>

        <div className="space-y-3">
          {SALES_CONFIG.problem.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-[#DCE4D4] shadow-xs"
            >
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
