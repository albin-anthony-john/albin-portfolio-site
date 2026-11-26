/// <reference types="vite/client" />

/**
 * Types for `import.meta.env`.
 * Only variables read by client code are declared here. VITE_SITE_URL is
 * read by the build (vite.config.ts) only.
 */
interface ImportMetaEnv {
  /** EmailJS public key (Account → API keys). */
  readonly VITE_EMAILJS_USER_PUBLIC_KEY?: string;
  /** EmailJS email service id. */
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  /** EmailJS template id; the template must use the params sent in services/contact.ts. */
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
}
