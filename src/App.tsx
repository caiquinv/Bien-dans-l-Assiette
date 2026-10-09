/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { SALES_CONFIG } from './config/salesConfig';
import { buildCheckoutUrl, initMetaPixel } from './utils/tracking';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionStepsSection } from './components/SolutionStepsSection';
import { ContentOverviewSection } from './components/ContentOverviewSection';
import { IngredientsSection } from './components/IngredientsSection';
import { RecipeShowcaseSection } from './components/RecipeShowcaseSection';
import { BonusesSection } from './components/BonusesSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';

export default function App() {
  const [checkoutUrl, setCheckoutUrl] = useState(SALES_CONFIG.checkoutUrl);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const heroCtaRef = useRef<HTMLElement | null>(null);
  const offerSectionRef = useRef<HTMLElement | null>(null);

  // Initialise l'URL de paiement avec les paramètres UTM / de tracking de l'URL courante
  useEffect(() => {
    setCheckoutUrl(buildCheckoutUrl(SALES_CONFIG.checkoutUrl));
    if (SALES_CONFIG.metaPixelId) {
      initMetaPixel(SALES_CONFIG.metaPixelId);
    }
  }, []);

  // Détection de visibilité pour la barre d'achat mobile :
  // Apparaît dès que le bouton de la première dobra est dépassé, et disparaît quand l'offre est visible
  useEffect(() => {
    let heroCtaPassed = false;
    let offerVisible = false;

    const updateStickyState = () => {
      setShowStickyBar(heroCtaPassed && !offerVisible);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        // Le bouton héro est dépassé si son sommet est au-dessus du haut de la fenêtre ou s'il n'est plus visible
        const rect = entry.target.getBoundingClientRect();
        heroCtaPassed = !entry.isIntersecting && rect.bottom < 0;
        updateStickyState();
      },
      { threshold: [0, 1] }
    );

    const offerObserver = new IntersectionObserver(
      ([entry]) => {
        offerVisible = entry.isIntersecting;
        updateStickyState();
      },
      { threshold: 0.1 }
    );

    const heroEl = heroCtaRef.current;
    const offerEl = offerSectionRef.current;

    if (heroEl) heroObserver.observe(heroEl);
    if (offerEl) offerObserver.observe(offerEl);

    const handleScroll = () => {
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        heroCtaPassed = rect.bottom < 0;
      }
      if (offerEl) {
        const rect = offerEl.getBoundingClientRect();
        offerVisible = rect.top < window.innerHeight && rect.bottom > 0;
      }
      updateStickyState();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (heroEl) heroObserver.unobserve(heroEl);
      if (offerEl) offerObserver.unobserve(offerEl);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9F5] text-slate-900 flex flex-col font-sans selection:bg-[#4E683C] selection:text-white pb-14 md:pb-0">
      <main className="flex-1">
        {/* 1. Dobra 1: Hero Section */}
        <HeroSection
          checkoutUrl={checkoutUrl}
          onHeroCtaRef={(el) => {
            heroCtaRef.current = el;
          }}
        />

        {/* 2. Dobra 2: Problem Section */}
        <ProblemSection />

        {/* 3. Dobra 3: Solution Steps Section */}
        <SolutionStepsSection />

        {/* 4. Dobra 4: Content Overview Section */}
        <ContentOverviewSection />

        {/* 5. Dobra 5: Ingredients Section */}
        <IngredientsSection />

        {/* 6. Dobra 6-7: Recipe Showcase & Extrait */}
        <RecipeShowcaseSection />

        {/* 7. Dobra 8: 4 Included Bonuses */}
        <BonusesSection />

        {/* 8. Dobra 9: Official Offer Box */}
        <OfferSection
          checkoutUrl={checkoutUrl}
          onOfferRef={(el) => {
            offerSectionRef.current = el;
          }}
        />

        {/* 9. Dobra 10: 15-Day Guarantee */}
        <GuaranteeSection />

        {/* 10. Dobra 11-12: FAQ Accordion */}
        <FAQSection />

        {/* 11. Dobra 13: Final Call to Action */}
        <FinalCTASection checkoutUrl={checkoutUrl} />
      </main>

      {/* 12. Sticky Bottom Bar on Mobile */}
      <StickyBottomBar checkoutUrl={checkoutUrl} isVisible={showStickyBar} />

      {/* 13. Compliant French Legal Footer */}
      <Footer />
    </div>
  );
}
