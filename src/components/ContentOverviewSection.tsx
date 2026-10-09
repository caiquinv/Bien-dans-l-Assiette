import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';

export const ContentOverviewSection: React.FC = () => {
  return (
    <section className="bg-[#FAFBF8] text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-6 text-balance">
          {SALES_CONFIG.content.title}
        </h2>

        <div className="space-y-3 mb-6">
          {SALES_CONFIG.content.categories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#DCE4D4] flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
            >
              <h3 className="text-base font-bold text-[#20321A] shrink-0">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 sm:text-right">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-slate-600 leading-relaxed bg-[#F0F4EC] p-3.5 rounded-xl border border-[#D7E2CF]">
          {SALES_CONFIG.content.note}
        </p>
      </div>
    </section>
  );
};
