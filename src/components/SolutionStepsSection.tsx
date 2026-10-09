import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';

export const SolutionStepsSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-6 text-balance">
          {SALES_CONFIG.solutionSteps.title}
        </h2>

        <div className="space-y-4">
          {SALES_CONFIG.solutionSteps.steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-3.5 bg-[#F8FAF5] p-4 rounded-xl border border-[#E2EAD9]"
            >
              <div className="w-8 h-8 rounded-full bg-[#2D4225] text-[#D8ECA8] font-bold text-sm flex items-center justify-center shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-0.5">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
