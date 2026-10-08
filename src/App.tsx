/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { HeroSection } from './components/HeroSection';
import { ProblemAgitationSection } from './components/ProblemAgitationSection';
import { ComparisonSection } from './components/ComparisonSection';
import { WhyChangeSection } from './components/WhyChangeSection';
import { RecipePillarsSection } from './components/RecipePillarsSection';
import { RecipeShowcaseGrid } from './components/RecipeShowcaseGrid';
import { DailyRoutineMomentsSection } from './components/DailyRoutineMomentsSection';
import { ResultsBenefitsSection } from './components/ResultsBenefitsSection';
import { OfferStackSection } from './components/OfferStackSection';
import { BonusesSection } from './components/BonusesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const scrollToOffer = () => {
    const elem = document.getElementById('offre');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCheckoutOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9F5] text-slate-900 flex flex-col font-sans selection:bg-[#4E683C] selection:text-white">
      {/* 1. Urgency Announcement Bar */}
      <TopAnnouncementBar />

      <main className="flex-1">
        {/* 2. Hero Section with 3D Bundle Mockup */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* 3. Problem & Agitation Section (Dark slate/green contrast) */}
        <ProblemAgitationSection />

        {/* 4. Comparison Grid: Culprits vs Healing French foods */}
        <ComparisonSection />

        {/* 5. Why Change: Mieux manger sans sacrifier le goût */}
        <WhyChangeSection />

        {/* 6. Recipe Pillars (Petits-déjeuners, Déjeuners, Dîners, Desserts, Collations) */}
        <RecipePillarsSection />

        {/* 7. Interactive Recipe Showcase Gallery & Preview Modal */}
        <RecipeShowcaseGrid onSelectOffer={scrollToOffer} />

        {/* 8. Daily Routine Moments & Vitality Mindset */}
        <DailyRoutineMomentsSection />

        {/* 9. Transformation & Perceived Benefits */}
        <ResultsBenefitsSection />

        {/* 10. The Mega Offer Stack Box */}
        <OfferStackSection onOpenCheckout={handleOpenCheckout} />

        {/* 11. 4 Exclusive Free Bonuses */}
        <BonusesSection />

        {/* 12. Verified Social Proof & Customer Reviews */}
        <SocialProofSection onSelectOffer={scrollToOffer} />

        {/* 13. 15-Day Unconditional Money-Back Guarantee */}
        <GuaranteeSection />

        {/* 14. Comprehensive FAQ Accordion */}
        <FAQSection />

        {/* 15. Final High-Converting Call to Action */}
        <FinalCTASection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* 16. Floating Conversion Sticky Bar */}
      <StickyBottomBar onOpenCheckout={handleOpenCheckout} />

      {/* 17. Compliant French Footer with Legal Modals */}
      <Footer />

      {/* 18. Checkout & Order Flow Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
}
