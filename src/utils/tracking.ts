/**
 * Utilitaires de tracking et transmission des paramètres d'attribution vers Hotmart.
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const COOKIE_CONSENT_KEY = 'bda_cookie_consent';

export function getCookieConsent(): 'accepted' | 'declined' | null {
  if (typeof window === 'undefined') return null;
  try {
    const val = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (val === 'accepted' || val === 'declined') return val;
  } catch (e) {
    // localStorage might be unavailable in private mode
  }
  return null;
}

export function setCookieConsent(status: 'accepted' | 'declined'): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, status);
  } catch (e) {
    // ignore
  }
}

/**
 * Charge le script Meta Pixel si le consentement est donné et si un ID est configuré.
 */
export function initMetaPixel(pixelId: string | null): void {
  if (typeof window === 'undefined' || !pixelId) return;
  if (getCookieConsent() !== 'accepted') return;
  if (window.fbq) return; // déjà initialisé

  /* eslint-disable */
  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  const w = window as any;
  if (w.fbq) {
    w.fbq('init', pixelId);
    w.fbq('track', 'PageView');
  }
}

export function trackInitiateCheckout(value: number = 14.90, currency: string = 'EUR'): void {
  const w = typeof window !== 'undefined' ? (window as any) : null;
  if (w && w.fbq && getCookieConsent() === 'accepted') {
    w.fbq('track', 'InitiateCheckout', {
      value,
      currency,
      content_name: "Bien dans l'Assiette",
    });
  }
}

/**
 * Reconstruit l'URL Hotmart en y injectant les paramètres d'attribution de la page courante
 * (utm_source, utm_medium, utm_campaign, utm_content, utm_term, fbclid, src, sck, etc.)
 */
export function buildCheckoutUrl(baseUrl: string): string {
  if (typeof window === 'undefined') return baseUrl;
  try {
    const currentParams = new URLSearchParams(window.location.search);
    if (!currentParams.toString()) return baseUrl;

    const url = new URL(baseUrl);
    currentParams.forEach((val, key) => {
      // Priorité aux paramètres UTM, Facebook et Hotmart
      if (
        key.startsWith('utm_') ||
        key === 'fbclid' ||
        key === 'src' ||
        key === 'sck' ||
        key === 'ref'
      ) {
        url.searchParams.set(key, val);
      }
    });
    return url.toString();
  } catch (err) {
    return baseUrl;
  }
}
