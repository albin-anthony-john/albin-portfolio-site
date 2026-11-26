/**
 * Contact section: a validated form that sends a message through EmailJS
 * (see src/services/contact.ts) and shows the result inline.
 */
import { useState, type FormEvent } from "react";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { sections } from "../config/portfolio";
import { sendContactMessage, type SendResult } from "../services/contact";
import "../styles/contact.scss";
import Section from "./Section";

/** Keys of the form fields; also the keys of the form state. */
type FieldName = "name" | "contact" | "subject" | "message";

/** Current text of every field. */
type FormValues = Record<FieldName, string>;

/** Describes one form field; the form is rendered from a list of these. */
interface FieldConfig {
  name: FieldName;
  label: string;
  placeholder: string;
  /** Maximum characters; also shown as the "n/max" counter. */
  maxLength: number;
  /** Message shown when the field is left empty. */
  errorText: string;
  /** Spans both columns on wide screens. */
  fullWidth?: boolean;
  /** When set, the field is a multi-line textarea with this many rows. */
  rows?: number;
}

/** The form's fields, in display order. Every field is required. */
const FIELDS: readonly FieldConfig[] = [
  {
    name: "name",
    label: "Your Name",
    placeholder: "What's your name?",
    maxLength: 100,
    errorText: "Please enter your name",
  },
  {
    name: "contact",
    label: "Email / Phone",
    placeholder: "How can I reach you?",
    maxLength: 100,
    errorText: "Please enter your email or phone number",
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "What is this about?",
    maxLength: 100,
    errorText: "Please enter a subject",
    fullWidth: true,
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Send me any inquiries or questions",
    maxLength: 500,
    errorText: "Please enter the message",
    fullWidth: true,
    rows: 10,
  },
];

/** Initial form state, also used to reset the form after a successful send. */
const EMPTY_VALUES: FormValues = { name: "", contact: "", subject: "", message: "" };

/** Alert shown to the user for each possible send result. */
const RESULT_MESSAGES: Record<SendResult, { severity: "success" | "error"; text: string }> = {
  sent: { severity: "success", text: "Message sent!" },
  failed: { severity: "error", text: "Failed to send message. Try again." },
  "not-configured": {
    severity: "error",
    text: "Contact form is not configured. Please try again later.",
  },
};

/** True when the value is empty or whitespace only. */
const isBlank = (value: string) => value.trim().length === 0;

/**
 * Contact form section. A field shows its error after it loses focus while
 * empty; the Send button stays disabled until every field has a value.
 */
export default function Contact() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<Partial<Record<FieldName, boolean>>>({});
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState<SendResult | null>(null);

  const isComplete = FIELDS.every(({ name }) => !isBlank(values[name]));

  /** Sends the trimmed values; clears the form only if the send succeeded. */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isComplete || isSending) {
      return;
    }

    setIsSending(true);
    setResult(null);
    const outcome = await sendContactMessage({
      fromName: values.name.trim(),
      contactInfo: values.contact.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    });
    setIsSending(false);
    setResult(outcome);
    if (outcome === "sent") {
      setValues(EMPTY_VALUES);
      setErrors({});
    }
  };

  return (
    <Section
      id={sections.contact.id}
      title="Contact Me"
      lede="Got a project waiting to be realized? Let's collaborate and make it happen!"
    >
      <form className="contact-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        {FIELDS.map(({ name, label, placeholder, maxLength, errorText, fullWidth, rows }) => {
          const value = values[name];
          const hasError = Boolean(errors[name]);
          return (
            <TextField
              key={name}
              name={name}
              required
              label={label}
              placeholder={placeholder}
              className={fullWidth ? "contact-form__full" : undefined}
              multiline={rows !== undefined}
              rows={rows}
              value={value}
              inputProps={{ maxLength }}
              onChange={(event) => {
                const next = event.target.value.slice(0, maxLength);
                setValues((prev) => ({ ...prev, [name]: next }));
                if (hasError && !isBlank(next)) {
                  setErrors((prev) => ({ ...prev, [name]: false }));
                }
              }}
              onBlur={() => {
                if (isBlank(value)) {
                  setErrors((prev) => ({ ...prev, [name]: true }));
                }
              }}
              error={hasError}
              helperText={hasError ? errorText : `${value.length}/${maxLength}`}
            />
          );
        })}

        {result && (
          <Alert
            className="contact-form__full"
            severity={RESULT_MESSAGES[result].severity}
            role={result === "sent" ? "status" : "alert"}
            onClose={() => setResult(null)}
          >
            {RESULT_MESSAGES[result].text}
          </Alert>
        )}

        <Button
          className="contact-form__submit"
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          disabled={!isComplete || isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </Button>
      </form>
    </Section>
  );
}
