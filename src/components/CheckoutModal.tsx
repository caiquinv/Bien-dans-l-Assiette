import React, { useState } from 'react';
import { X, Lock, CheckCircle2, ShieldCheck, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';
import ebookCover from '../assets/images/ebook_bundle_cover_1791431064879.jpg';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleTestOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsCompleted(true);
    }, 800);
  };

  const handleDirectExternal = () => {
    if (SALES_CONFIG.product.checkoutUrl && !SALES_CONFIG.product.checkoutUrl.includes('EXEMPLE_CHECKOUT')) {
      window.location.href = SALES_CONFIG.product.checkoutUrl;
    } else {
      // If it's the placeholder link, alert softly or keep in modal
      const proceed = confirm(
        "Vous utilisez actuellement le lien de démonstration.\n\nSouhaitez-vous ouvrir l'URL configurée ou tester le flux d'accès immédiat ici même ?"
      );
      if (proceed) {
        window.open(SALES_CONFIG.product.checkoutUrl, '_blank');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header banner */}
            <div className="bg-[#2D4225] text-white p-6 sm:p-7">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C8E79B] bg-[#3E5C33] px-2.5 py-0.5 rounded-full inline-block mb-2">
                Paiement Sécurisé 256 bits
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-white">
                Finaliser votre accès au guide complet
              </h3>
              <p className="text-xs text-[#D1E4C2] mt-1">
                Accès immédiat par e-mail au guide principal et aux 4 bonus offerts.
              </p>
            </div>

            {/* Product recap */}
            <div className="p-6 sm:p-7 space-y-5">
              <div className="flex items-center gap-4 bg-[#F8FAF5] p-3.5 rounded-2xl border border-[#E1E8DA]">
                <img
                  src={ebookCover}
                  alt={`Pack ${SALES_CONFIG.product.name}`}
                  className="w-16 h-20 object-cover rounded-lg shadow-xs"
                />
                <div className="flex-1 text-xs">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {SALES_CONFIG.product.fullName}
                  </h4>
                  <p className="text-slate-500 mt-0.5">Guide Numérique HD + 4 Bonus Inclus</p>
                  <div className="flex items-center gap-2 mt-1.5 font-mono">
                    <span className="text-base font-extrabold text-[#385429]">
                      {SALES_CONFIG.product.priceCurrentFormatted} {SALES_CONFIG.product.currencySymbol}
                    </span>
                    <span className="line-through text-slate-400 text-xs">
                      {SALES_CONFIG.product.priceOriginal},00 {SALES_CONFIG.product.currencySymbol}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action: Direct checkout gateway */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleDirectExternal}
                  className="w-full py-3.5 px-4 bg-[#4E683C] hover:bg-[#5C7C47] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>Accéder à la Passerelle de Paiement</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  Lien de paiement configurable dans <code>salesConfig.ts</code> ({SALES_CONFIG.product.checkoutUrl.slice(0, 35)}...)
                </p>
              </div>

              {/* Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-4 text-xs text-slate-400 uppercase font-semibold">
                  ou simuler un accès immédiat
                </span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              {/* Simulation test form */}
              <form onSubmit={handleTestOrder} className="space-y-3">
                <div>
                  <label htmlFor="checkout-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Adresse e-mail pour recevoir le guide (simulation) :
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@exemple.fr"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4E683C] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {isLoading ? (
                    <span>Validation de la commande en cours...</span>
                  ) : (
                    <>
                      <span>Tester le téléchargement immédiat</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Security reassure */}
              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4E683C]" /> Garantie 15 jours
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#4E683C]" /> Chiffrement SSL
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Success confirmation screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF4E3] text-[#3D562E] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-bold font-serif-display text-slate-900">
              Félicitations pour votre achat !
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Votre accès au guide <strong>{SALES_CONFIG.product.name}</strong> ainsi qu'à vos 4 bonus a été généré avec succès pour <strong className="text-slate-900">{email}</strong>.
            </p>

            <div className="bg-[#F8FAF5] p-4 rounded-2xl border border-[#DFE7D4] text-xs text-left space-y-2 text-slate-700">
              <div className="flex items-center gap-2 font-bold text-[#3B542A]">
                <Download className="w-4 h-4" />
                <span>Téléchargement direct de votre commande :</span>
              </div>
              <ul className="space-y-1.5 pl-6 list-disc text-slate-600">
                <li>Guide principal : {SALES_CONFIG.product.name} (PDF HD)</li>
                <li>Bonus 1 : 28 Jours de Menus & Calendrier Clé-en-Main</li>
                <li>Bonus 2 : Placard Intelligent & 60 Substitutions Saines</li>
                <li>Bonus 3 : Guide Batch Cooking Express du Dimanche</li>
                <li>Bonus 4 : 30 Sauces, Vinaigrettes & Dips Bienfaisants</li>
              </ul>
            </div>

            <button
              onClick={() => {
                alert("Dans l'environnement de production, vos fichiers PDF sont automatiquement envoyés par e-mail et téléchargeables sur votre espace sécurisé.");
                onClose();
                setIsCompleted(false);
              }}
              className="w-full py-3.5 px-4 bg-[#4E683C] hover:bg-[#5C7C47] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer"
            >
              Télécharger mes guides (PDF)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
