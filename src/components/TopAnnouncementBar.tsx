import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';

export const TopAnnouncementBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 9, minutes: 44, seconds: 28 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 9, minutes: 45, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('offre');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside aria-label="Offre promotionnelle" className="bg-[#1C2619] text-[#E5EADF] border-b border-[#2C3B27] py-2.5 px-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs md:text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#405A32] text-[#F1F6EC] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#D5E8B8]" />
            Lancement Spécial
          </span>
          <span className="text-[#C8D4C1] text-center sm:text-left">
            L'offre exclusive à <strong className="text-white font-bold">{SALES_CONFIG.product.priceCurrentFormatted} {SALES_CONFIG.product.currencySymbol}</strong> (au lieu de {SALES_CONFIG.product.priceOriginal} {SALES_CONFIG.product.currencySymbol}) expire bientôt :
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 font-mono text-xs md:text-sm bg-black/40 px-2.5 py-1 rounded border border-[#3E5334] text-[#E8F3DB] tabular-nums shadow-inner">
            <Clock className="w-3.5 h-3.5 text-[#A5C882]" />
            <span>{formatNum(timeLeft.hours)}</span>
            <span className="text-[#738C61]">:</span>
            <span>{formatNum(timeLeft.minutes)}</span>
            <span className="text-[#738C61]">:</span>
            <span>{formatNum(timeLeft.seconds)}</span>
          </div>

          <a
            href="#offre"
            onClick={scrollToOffer}
            className="hidden md:inline-flex items-center px-3 py-1 bg-[#4C6B3A] hover:bg-[#5C8047] text-white text-xs font-semibold rounded transition-colors"
          >
            Profiter de l'offre &rarr;
          </a>
        </div>
      </div>
    </aside>
  );
};
