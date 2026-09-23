import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "emailjs-com";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const isFormComplete =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0;

  const validateFields = () => {
    const nextNameError = name.trim().length === 0;
    const nextEmailError = email.trim().length === 0;
    const nextMessageError = message.trim().length === 0;

    setNameError(nextNameError);
    setEmailError(nextEmailError);
    setMessageError(nextMessageError);

    return !(nextNameError || nextEmailError || nextMessageError);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_USER_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Contact form is not configured. Please try again later.");
      setIsSending(false);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name.trim(),
          contact_info: email.trim(),
          message: message.trim(),
          title: "New Contact Form Submission - From Portfolio Website",
          name: "Albin Antony",
        },
        publicKey
      )
      .then(() => {
        alert("Message sent!");
        setName("");
        setEmail("");
        setMessage("");
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
      })
      .catch(() => {
        alert("Failed to send message. Try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="items-container">
        <div className="contact_wrapper">
          <h2 id="contact-heading">Contact Me</h2>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError && e.target.value.trim()) {
                    setNameError(false);
                  }
                }}
                onBlur={() => {
                  if (!name.trim()) {
                    setNameError(true);
                  }
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : " "}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError && e.target.value.trim()) {
                    setEmailError(false);
                  }
                }}
                onBlur={() => {
                  if (!email.trim()) {
                    setEmailError(true);
                  }
                }}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : " "
                }
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (messageError && e.target.value.trim()) {
                  setMessageError(false);
                }
              }}
              onBlur={() => {
                if (!message.trim()) {
                  setMessageError(true);
                }
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : " "}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={!isFormComplete || isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </Button>
          </Box>
        </div>
      </div>
    </section>
  );
}

export default Contact;
