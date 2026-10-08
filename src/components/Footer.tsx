import React, { useState } from 'react';
import { SALES_CONFIG } from '../config/salesConfig';
import { Shield, Mail, FileText, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'mentions' | 'cgv' | 'privacy' | null>(null);

  return (
    <footer className="bg-[#10170E] text-[#8E9F88] py-12 px-4 sm:px-6 text-xs border-t border-[#1F2B1C]">
      <div className="max-w-5xl mx-auto space-y-6 text-center">
        {/* Brand */}
        <div>
          <span className="text-sm font-bold text-[#D0DEC9] tracking-wider uppercase">
            {SALES_CONFIG.product.name}
          </span>
          <p className="text-[#788A72] text-[11px] mt-1">
            Produit numérique téléchargeable immédiatement au format PDF HD.
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#9EAF97]">
          <button
            onClick={() => setActiveModal('mentions')}
            className="hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
          >
            Mentions Légales
          </button>
          <span>·</span>
          <button
            onClick={() => setActiveModal('cgv')}
            className="hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
          >
            Conditions Générales de Vente (CGV)
          </button>
          <span>·</span>
          <button
            onClick={() => setActiveModal('privacy')}
            className="hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
          >
            Politique de Confidentialité
          </button>
          <span>·</span>
          <a
            href={`mailto:${SALES_CONFIG.product.supportEmail}`}
            className="hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <Mail className="w-3 h-3" />
            <span>Support Client : {SALES_CONFIG.product.supportEmail}</span>
          </a>
        </div>

        {/* Responsible Medical Disclaimer as requested */}
        <div className="max-w-2xl mx-auto text-[11px] text-[#6E8069] leading-relaxed bg-[#151F13] p-4 rounded-xl border border-[#212E1D]">
          <p className="font-semibold text-[#8C9F87] mb-1">Avertissement de responsabilité & bien-être :</p>
          <p>
            Ce recueil de recettes est un ouvrage pratique d'accompagnement culinaire et d'art de vivre. Il ne prétend en aucun cas diagnostiquer, traiter, guérir ou prévenir une quelconque pathologie médicale. Les conseils partagés s'inscrivent dans une démarche de cuisine maison équilibrée. Pour tout problème de santé ou régime thérapeutique particulier, veuillez solliciter l'avis de votre médecin traitant ou d'un diététicien qualifié.
          </p>
        </div>

        <p className="text-[11px] text-[#5D6F59]">
          © {new Date().getFullYear()} {SALES_CONFIG.product.name}. Tous droits réservés.
        </p>
      </div>

      {/* Legal Popups */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 max-w-lg w-full rounded-2xl p-6 shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-4 text-[#4E683C] font-bold text-sm">
              <FileText className="w-4 h-4" />
              <span>
                {activeModal === 'mentions' && 'Mentions Légales'}
                {activeModal === 'cgv' && 'Conditions Générales de Vente (CGV)'}
                {activeModal === 'privacy' && 'Politique de Confidentialité & RGPD'}
              </span>
            </div>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              {activeModal === 'mentions' && (
                <>
                  <p><strong>Éditeur du site :</strong> Assiette Vitalité Éditions Numériques.</p>
                  <p><strong>Contact électronique :</strong> {SALES_CONFIG.product.supportEmail}</p>
                  <p><strong>Hébergement :</strong> Serveurs sécurisés Cloud conformes aux normes européennes.</p>
                  <p><strong>Propriété intellectuelle :</strong> L'ensemble des textes, recettes et photographies contenus dans cet ouvrage sont protégés par le droit d'auteur.</p>
                </>
              )}
              {activeModal === 'cgv' && (
                <>
                  <p><strong>Nature du produit :</strong> Guide numérique (livre électronique + bonus téléchargeables au format PDF).</p>
                  <p><strong>Livraison :</strong> Accès instantané et automatisé par voie électronique dès la validation du paiement.</p>
                  <p><strong>Garantie légale et commerciale :</strong> Garantie « Satisfait ou Remboursé » de 15 jours sur simple demande écrite à {SALES_CONFIG.product.supportEmail}.</p>
                  <p><strong>Prix :</strong> Facturation en Euros TTC, paiement unique sans aucun abonnement périodique.</p>
                </>
              )}
              {activeModal === 'privacy' && (
                <>
                  <p><strong>Protection des données :</strong> Nous respectons scrupuleusement la réglementation européenne (RGPD).</p>
                  <p>Vos coordonnées (adresse e-mail et prénom) sont exclusivement utilisées pour l'acheminement de votre commande numérique et de ses mises à jour.</p>
                  <p>Aucune donnée personnelle n'est transmise, louée ou cédée à des tiers à des fins publicitaires.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
