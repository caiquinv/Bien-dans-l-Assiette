import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';
import { trackInitiateCheckout } from '../utils/tracking';

interface FinalCTASectionProps {
  checkoutUrl: string;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ checkoutUrl }) => {
  const handleCtaClick = () => {
    trackInitiateCheckout(14.90, 'EUR');
  };

  return (
    <section className="bg-[#182315] text-white py-12 sm:py-16 px-4 border-b border-[#273821] text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FAFDF6] font-serif-display leading-tight mb-4 text-balance">
          {SALES_CONFIG.finalCta.title}
        </h2>

        <p className="text-sm sm:text-base text-[#D0DEC7] mb-6 max-w-lg mx-auto leading-relaxed">
          {SALES_CONFIG.product.totalRecipes} recettes simples, inspirées de l'alimentation anti-inflammatoire, avec 28 jours de menus et les listes de courses prêtes à l'emploi.
        </p>

        <div className="max-w-md mx-auto space-y-2.5">
          <a
            href={checkoutUrl}
            onClick={handleCtaClick}
            className="w-full min-h-[52px] px-4 py-3.5 bg-gradient-to-r from-[#A0D85E] to-[#82C341] hover:from-[#B1E572] hover:to-[#91D24E] text-[#13220E] font-black text-base sm:text-lg rounded-xl shadow-lg border-b-4 border-[#5E9727] flex items-center justify-center text-center transition-transform active:scale-[0.99]"
          >
            {SALES_CONFIG.finalCta.cta}
          </a>

          <p className="text-xs text-[#AFC2A3]">
            {SALES_CONFIG.hero.trustSubline}
          </p>
        </div>
      </div>
    </section>
  );
};

