import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
//import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!name || !email || !message) {
    // set errors or show validation
    return;
  }

  const templateParams = {
    from_name : name,
    emailorphone : email,
    message : message,
  };

  emailjs
    .send(
      'service_1omvy3d',    // e.g., "service_xyz"
      'template_ywlcw8j',   // e.g., "template_abc"
      templateParams,
      'SualJnAOj6nb4oWcS'     // e.g., "user_123456"
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message sent!");
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      console.log('FAILED...', err);
      alert("Failed to send message. Try again.");
    });
};

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="items-container">
        <div className="contact_wrapper">
          <h2 id="contact-heading">Contact Me</h2>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail} // ✅ use form submission properly
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
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
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </section>
  );
}

export default Contact;
