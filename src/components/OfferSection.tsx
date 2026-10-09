import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';
import { trackInitiateCheckout } from '../utils/tracking';
import bundleAllImg from '../assets/images/bundle_all_new_1791513480205.webp';

interface OfferSectionProps {
  checkoutUrl: string;
  onOfferRef?: (el: HTMLElement | null) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ checkoutUrl, onOfferRef }) => {
  const handleCtaClick = () => {
    trackInitiateCheckout(14.90, 'EUR');
  };

  // 6 short lines with checkmarks - exactly aligned with the 4 original bonuses
  const includedItems = [
    'Le guide « Bien dans l’Assiette » (250 recettes, PDF)',
    'Bonus 1 : 28 jours de menus clé-en-main avec listes de courses par rayon',
    'Bonus 2 : Guide du batch cooking express',
    'Bonus 3 : Guide du placard sain + 60 substitutions',
    'Bonus 4 : 30 sauces, vinaigrettes & dips',
    'Accès immédiat par e-mail sur téléphone, tablette et ordinateur',
  ];

  return (
    <section
      id="offre"
      ref={onOfferRef}
      className="bg-[#1F2E1A] text-white py-12 sm:py-16 px-4 border-b border-[#2C3F26]"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FAFDF6] font-serif-display leading-tight mb-6 text-center text-balance">
          Tout ce que vous recevez aujourd'hui
        </h2>

        {/* Card da Oferta */}
        <div className="bg-[#FAFBF8] text-slate-900 rounded-2xl p-5 sm:p-7 border-2 border-[#3D5532] shadow-xl">
          {/* Top bundle image showing the guide and bonuses together */}
          <div className="relative rounded-xl overflow-hidden mb-6 bg-[#E8EDE2] border border-[#DCE4D4] shadow-xs aspect-4/3">
            <img
              src={bundleAllImg}
              alt="Guide Bien dans l'Assiette et ses 4 compléments numériques"
              width={720}
              height={540}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 6 short lines with ✓ */}
          <ul className="space-y-2.5 mb-6 pb-6 border-b border-slate-200 text-sm text-slate-800">
            {includedItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#E5F0D9] text-[#2D4225] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-snug font-medium">{item}</span>
              </li>
            ))}
          </ul>

          {/* Price display: 14,90 € unique */}
          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl font-black text-[#1F2E1A] font-serif-display">
                14,90
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#1F2E1A]">
                €
              </span>
            </div>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              Paiement unique · Aucun abonnement
            </p>
          </div>

          {/* Checkout button */}
          <a
            href={checkoutUrl}
            onClick={handleCtaClick}
            className="w-full min-h-[52px] px-6 py-4 bg-gradient-to-r from-[#A0D85E] to-[#82C341] hover:from-[#92CB50] hover:to-[#74B533] text-[#13220E] font-black text-base sm:text-lg rounded-xl shadow-lg border-b-4 border-[#5E9727] flex items-center justify-center text-center transition-transform active:scale-[0.99] tracking-wide"
          >
            {SALES_CONFIG.offer.cta}
          </a>

          {/* Reassurance text */}
          <p className="text-sm text-slate-600 text-center mt-3 font-medium">
            Téléchargement immédiat · Format PDF universel
          </p>
        </div>
      </div>
    </section>
  );
};
