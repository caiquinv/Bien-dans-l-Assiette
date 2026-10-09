import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EBF4E3] text-[#2D4225] font-black text-sm mb-3 border border-[#D5E6C7]">
          15J
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-display leading-tight mb-3">
          {SALES_CONFIG.guarantee.title}
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
          {SALES_CONFIG.guarantee.text}
        </p>
      </div>
    </section>
  );
};
