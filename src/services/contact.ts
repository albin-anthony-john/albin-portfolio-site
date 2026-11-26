/**
 * Sends the contact form through EmailJS's public REST endpoint.
 * This is what the deprecated `emailjs-com` SDK did internally; calling it
 * with fetch removes that dependency. Only public client values are used.
 */
import { person } from "../config/portfolio";

/** EmailJS "send email" REST endpoint. */
const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

/** What the visitor entered in the contact form (already trimmed). */
export interface ContactMessage {
  /** Visitor's name. */
  fromName: string;
  /** Visitor's email address or phone number. */
  contactInfo: string;
  subject: string;
  message: string;
}

/**
 * Outcome of a send attempt:
 * - `sent`: EmailJS accepted the message.
 * - `not-configured`: one of the `VITE_EMAILJS_*` variables is missing at build time.
 * - `failed`: network error or a non-2xx response.
 */
export type SendResult = "sent" | "not-configured" | "failed";

/**
 * Sends a contact message via EmailJS. Never throws.
 * @param msg - The form values to send.
 * @returns The outcome, for the form to show to the visitor.
 */
export async function sendContactMessage(msg: ContactMessage): Promise<SendResult> {
  const {
    VITE_EMAILJS_SERVICE_ID: serviceId,
    VITE_EMAILJS_TEMPLATE_ID: templateId,
    VITE_EMAILJS_USER_PUBLIC_KEY: publicKey,
  } = import.meta.env;

  if (!serviceId || !templateId || !publicKey) {
    return "not-configured";
  }

  try {
    const response = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        // Keys must match the variables used in the EmailJS template.
        template_params: {
          from_name: msg.fromName,
          contact_info: msg.contactInfo,
          title: msg.subject,
          message: msg.message,
          name: person.name,
        },
      }),
    });
    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
