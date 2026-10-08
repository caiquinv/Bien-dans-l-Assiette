import React from 'react';
import { CalendarDays, BookOpenCheck, Clock, Sparkles, Gift, Check } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';

export const BonusesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    CalendarDays: <CalendarDays className="w-5 h-5 text-[#4E683C]" />,
    BookOpenCheck: <BookOpenCheck className="w-5 h-5 text-[#4E683C]" />,
    ClockAlert: <Clock className="w-5 h-5 text-[#4E683C]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#4E683C]" />
  };

  return (
    <section className="bg-[#FAFBF7] py-16 md:py-24 border-b border-[#E3E8DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B683B] tracking-widest uppercase mb-2">
            <Gift className="w-3.5 h-3.5" />
            ET CE N'EST PAS TOUT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-display mb-3">
            AUJOURD'HUI, VOUS RECEVEZ 4 BONUS EXCLUSIFS
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Un pack complet pour simplifier durablement votre quotidien en cuisine — tout est inclus sans aucun supplément.
          </p>
        </div>

        {/* 4 Stacked Bonus Cards */}
        <div className="space-y-5">
          {SALES_CONFIG.bonuses.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D9E1D2] shadow-sm hover:border-[#6C9251] transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF4E8] flex items-center justify-center shrink-0 border border-[#D6E3CB]">
                    {iconMap[b.iconName] || <Gift className="w-5 h-5 text-[#4E683C]" />}
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wider bg-[#E5EED9] text-[#344C26] mb-1.5">
                      {b.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-serif-display">
                      {b.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mb-3">
                      {b.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {b.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                      {b.highlights.map((h, i) => (
                        <span key={i} className="inline-flex items-center gap-1 bg-[#F5F8F1] px-2.5 py-1 rounded-md border border-[#E3EBD9]">
                          <Check className="w-3 h-3 text-[#4E683C]" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price tag */}
                <div className="sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex sm:flex-col items-center sm:items-end justify-between">
                  <span className="text-xs text-slate-500 line-through">
                    Valeur : {b.estimatedValue.toFixed(2).replace('.', ',')} €
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#3E582F] uppercase bg-[#E9F3DC] px-2.5 py-1 rounded">
                    Offert aujourd'hui
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
