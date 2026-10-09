import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';

export const BonusesSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-6 text-balance">
          4 compléments inclus avec le guide
        </h2>

        <div className="space-y-4">
          {SALES_CONFIG.bonuses.map((b) => (
            <div
              key={b.id}
              className="bg-[#FAFBF8] rounded-xl border border-[#DCE4D4] p-4 sm:p-5"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-slate-900 font-serif-display">
                  {b.id}. {b.title}
                </h3>
                <span className="px-2 py-0.5 rounded bg-[#2D4225] text-[#D8ECA8] text-[11px] font-extrabold uppercase tracking-wider shrink-0">
                  Inclus
                </span>
              </div>

              <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                {b.description}
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700">
                {b.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#3E582E] font-bold shrink-0">•</span>
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
