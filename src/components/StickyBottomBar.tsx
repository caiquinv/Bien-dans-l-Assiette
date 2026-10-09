import React from 'react';
import { trackInitiateCheckout } from '../utils/tracking';

interface StickyBottomBarProps {
  checkoutUrl: string;
  isVisible: boolean;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ checkoutUrl, isVisible }) => {
  if (!isVisible) return null;

  const handleCtaClick = () => {
    trackInitiateCheckout(14.90, 'EUR');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#162114]/95 backdrop-blur-md border-t border-[#374C30] p-3 shadow-2xl md:hidden">
      <a
        href={checkoutUrl}
        onClick={handleCtaClick}
        className="w-full min-h-[52px] px-4 py-3 bg-gradient-to-r from-[#A0D85E] to-[#82C341] text-[#13220E] font-black text-base rounded-xl shadow-md border-b-4 border-[#5E9727] flex items-center justify-center text-center transition-transform active:scale-[0.99]"
      >
        14,90 € · ACCÉDER AU GUIDE
      </a>
    </div>
  );
};
