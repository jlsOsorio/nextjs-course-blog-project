import React from 'react';
import styles from './contact-form.module.css';
import { ReqBody } from '@/pages/api/contact';

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = React.useState('');
  const [enteredName, setEnteredName] = React.useState('');
  const [enteredMessage, setEnteredMessage] = React.useState('');

  function sendMessageHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body: ReqBody = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEnteredEmail(event.target.value)
              }
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEnteredName(event.target.value)
              }
              required
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows={5}
            value={enteredMessage}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setEnteredMessage(event.target.value)
            }
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
