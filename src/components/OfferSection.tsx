import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';
import { trackInitiateCheckout } from '../utils/tracking';

interface OfferSectionProps {
  checkoutUrl: string;
  onOfferRef?: (el: HTMLElement | null) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ checkoutUrl, onOfferRef }) => {
  const handleCtaClick = () => {
    trackInitiateCheckout(14.90, 'EUR');
  };

  return (
    <section
      id="offre"
      ref={onOfferRef}
      className="bg-[#1F2E1A] text-white py-12 sm:py-16 px-4 border-b border-[#2C3F26]"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FAFDF6] font-serif-display leading-tight mb-6 text-center text-balance">
          {SALES_CONFIG.offer.title}
        </h2>

        {/* Card da Oferta */}
        <div className="bg-[#FAFBF8] text-slate-900 rounded-2xl p-5 sm:p-7 border-2 border-[#3D5532] shadow-xl">
          {/* Lista com ✓ */}
          <ul className="space-y-3 mb-6 pb-6 border-b border-slate-200 text-sm text-slate-800">
            {SALES_CONFIG.offer.included.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#E5F0D9] text-[#2D4225] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-snug font-medium">{item}</span>
              </li>
            ))}
          </ul>

          {/* Preço grande: 14,90 € */}
          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl sm:text-6xl font-black text-[#1F2E1A] font-serif-display tracking-tight">
                {SALES_CONFIG.offer.price}
              </span>
              <span className="text-3xl font-extrabold text-[#1F2E1A]">
                {SALES_CONFIG.product.currencySymbol}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-1">
              {SALES_CONFIG.offer.priceSubline}
            </p>

            {SALES_CONFIG.launchEndDate && (
              <p className="text-xs font-semibold text-[#2D4225] mt-2">
                Prix de lancement jusqu'au {SALES_CONFIG.launchEndDate}
              </p>
            )}
          </div>

          {/* Botão de Compra */}
          <div className="space-y-2.5">
            <a
              href={checkoutUrl}
              onClick={handleCtaClick}
              className="w-full min-h-[52px] px-4 py-3.5 bg-gradient-to-r from-[#A0D85E] to-[#82C341] hover:from-[#B1E572] hover:to-[#91D24E] text-[#13220E] font-black text-base sm:text-lg rounded-xl shadow-md border-b-4 border-[#5E9727] flex items-center justify-center text-center transition-transform active:scale-[0.99]"
            >
              {SALES_CONFIG.offer.cta}
            </a>

            {/* Linha de confiança */}
            <p className="text-center text-[12px] sm:text-xs text-slate-500 font-medium">
              {SALES_CONFIG.offer.trustLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
