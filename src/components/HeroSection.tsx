import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';
import { trackInitiateCheckout } from '../utils/tracking';
import coverImg from '../assets/images/cover_bien_dans_assiette_1791510158174.jpg';

interface HeroSectionProps {
  checkoutUrl: string;
  onHeroCtaRef?: (el: HTMLElement | null) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ checkoutUrl, onHeroCtaRef }) => {
  const handleCtaClick = () => {
    trackInitiateCheckout(14.90, 'EUR');
  };

  return (
    <section className="bg-[#1F2E1A] text-white pt-5 pb-8 px-4 border-b border-[#2C3F26]">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        {/* 1. Selo */}
        <div className="inline-block px-3 py-1 rounded bg-[#2D4225] border border-[#3E5C33] text-[11px] sm:text-xs font-bold tracking-wider text-[#D5ECA8] uppercase mb-3">
          {SALES_CONFIG.hero.badge}
        </div>

        {/* 2. H1 (28-32px no mobile, max 4 linhas) */}
        <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold tracking-tight leading-[1.2] text-[#FAFDF6] font-serif-display mb-3 text-balance">
          {SALES_CONFIG.hero.h1}
        </h1>

        {/* 3. Subtítulo (max 3 linhas) */}
        <p className="text-base text-[#D4E3C6] leading-relaxed mb-4 max-w-lg">
          {SALES_CONFIG.hero.subtitle}
        </p>

        {/* 4. Imagem compacta da capa (altura máx 190px no mobile) */}
        <div className="w-full flex justify-center mb-4">
          <div className="relative max-w-[210px] sm:max-w-[240px]">
            <img
              src={coverImg}
              alt="Guide numérique Bien dans l'Assiette - 250 recettes"
              width={240}
              height={320}
              fetchPriority="high"
              className="w-auto h-[175px] sm:h-[190px] object-contain rounded-lg shadow-xl border border-[#3B5231]"
            />
          </div>
        </div>

        {/* Mensagem de prazo se LAUNCH_END_DATE configurada */}
        {SALES_CONFIG.launchEndDate && (
          <div className="text-xs font-semibold text-[#D5ECA8] mb-2">
            Prix de lancement jusqu'au {SALES_CONFIG.launchEndDate}
          </div>
        )}

        {/* 5. Botão de compra (min-h-[52px], full width no celular) */}
        <div ref={onHeroCtaRef} className="w-full max-w-md">
          <a
            href={checkoutUrl}
            onClick={handleCtaClick}
            className="w-full min-h-[52px] px-4 py-3.5 bg-gradient-to-r from-[#A0D85E] to-[#82C341] hover:from-[#B1E572] hover:to-[#91D24E] text-[#13220E] font-black text-base sm:text-lg rounded-xl shadow-lg border-b-4 border-[#5E9727] flex items-center justify-center text-center transition-transform active:scale-[0.99]"
          >
            {SALES_CONFIG.hero.cta}
          </a>

          {/* 6. Linha abaixo do botão (13px) */}
          <p className="text-[13px] text-[#BFD4AF] mt-2.5">
            {SALES_CONFIG.hero.trustSubline}
          </p>
        </div>

        {/* 3 selos em linha logo abaixo da dobra */}
        <div className="w-full mt-6 pt-5 border-t border-[#2F4426] flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-[#C6D8B8]">
          {SALES_CONFIG.hero.trustBullets.map((bullet, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5 bg-[#283C21] px-2.5 py-1 rounded-md border border-[#3B5431]">
              <span className="text-[#9FD85B] font-bold">✓</span>
              <span>{bullet}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
