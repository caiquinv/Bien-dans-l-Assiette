import React from 'react';
import { ShieldCheck, Check, Sparkles } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="bg-[#FAFBF7] py-16 md:py-24 border-b border-[#E3E8DC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-7 sm:p-10 border-2 border-[#D3E0C8] shadow-md flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          {/* Guarantee Badge Seal */}
          <div className="shrink-0 text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#EBF4E3] via-[#DCEDCE] to-[#C9E4B4] border-4 border-[#52743E] flex flex-col items-center justify-center p-2 shadow-inner relative">
              <div className="absolute -top-1 bg-[#4E683C] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                Zéro Risque
              </div>
              <ShieldCheck className="w-8 h-8 text-[#3A532B] mb-0.5 stroke-[2.2]" />
              <span className="text-xl sm:text-2xl font-black text-[#263A1B] leading-none font-serif-display">
                {SALES_CONFIG.guarantee.durationDays} JOURS
              </span>
              <span className="text-[10px] font-bold text-[#476336] uppercase tracking-tighter">
                Garantie 100%
              </span>
            </div>
          </div>

          {/* Guarantee Text */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-serif-display">
              {SALES_CONFIG.guarantee.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {SALES_CONFIG.guarantee.text}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs font-semibold text-[#3C572D]">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#5B8344]" />
                Un simple e-mail suffit
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#5B8344]" />
                Remboursement rapide
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#5B8344]" />
                Zéro tracas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
