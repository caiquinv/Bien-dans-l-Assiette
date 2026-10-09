import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';
import { HelpCircle, RefreshCw, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-[#FAFBF8] text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-5 text-balance">
          {SALES_CONFIG.problem.title}
        </h2>

        {/* 16:9 warm photo of evening fridge hesitation */}
        <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#DCE4D4] aspect-video mb-5 bg-[#E8EDE2]">
          <img
            src="/src/assets/images/fridge_evening_1791511758928.webp"
            alt="Cuisine au crépuscule devant le frigo ouvert"
            width={720}
            height={405}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3 icons in a row with concise labels (<= 4 words each) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
          <div className="bg-white p-3 rounded-xl border border-[#DCE4D4] shadow-xs flex flex-col items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-[#F4F7EF] text-[#2D3E1E] flex items-center justify-center mb-1.5">
              <HelpCircle className="w-5 h-5 text-[#2D3E1E]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
              La même question
            </span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-[#DCE4D4] shadow-xs flex flex-col items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-[#F4F7EF] text-[#2D3E1E] flex items-center justify-center mb-1.5">
              <RefreshCw className="w-5 h-5 text-[#2D3E1E]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
              Les mêmes plats
            </span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-[#DCE4D4] shadow-xs flex flex-col items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-[#F4F7EF] text-[#2D3E1E] flex items-center justify-center mb-1.5">
              <AlertCircle className="w-5 h-5 text-[#2D3E1E]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
              Trop compliqué
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
