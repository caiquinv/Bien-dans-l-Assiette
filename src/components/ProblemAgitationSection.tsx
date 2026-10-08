import React from 'react';
import { ShieldAlert, BatteryLow, ChefHat, Flame, HelpCircle } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';

export const ProblemAgitationSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-amber-400" />,
    BatteryLow: <BatteryLow className="w-6 h-6 text-rose-400" />,
    ChefHat: <ChefHat className="w-6 h-6 text-emerald-400" />,
    Flame: <Flame className="w-6 h-6 text-orange-400" />
  };

  return (
    <section className="bg-[#151D14] text-white py-16 md:py-24 border-b border-[#253221]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A5C882] tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            {SALES_CONFIG.problemSection.kicker}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FAFDF7] leading-snug font-serif-display mb-4 text-balance">
            {SALES_CONFIG.problemSection.title}
          </h2>
          <p className="text-sm sm:text-base text-[#BFCCB6] leading-relaxed">
            {SALES_CONFIG.problemSection.description}
          </p>
        </div>

        {/* 4 Grievance / Symptom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {SALES_CONFIG.problemSection.symptoms.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1C261B] border border-[#2D3F2B] hover:border-[#4B6846] rounded-xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-lg bg-[#273625] flex items-center justify-center mb-4 border border-[#3A4E38]">
                {iconMap[item.icon] || <ShieldAlert className="w-6 h-6 text-amber-400" />}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#B6C4AD] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition statement */}
        <div className="bg-gradient-to-r from-[#243520] via-[#2D4228] to-[#243520] border border-[#44633B] rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-lg">
          <p className="text-base sm:text-lg md:text-xl font-medium text-[#E4F0D6] leading-relaxed">
            « {SALES_CONFIG.problemSection.transitionQuote} »
          </p>
        </div>
      </div>
    </section>
  );
};
