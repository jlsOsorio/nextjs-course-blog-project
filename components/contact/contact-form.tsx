import React from 'react';
import { ReqBody } from '@/pages/api/contact';

import styles from './contact-form.module.css';
import Notification from '../ui/notification';
import { INotification } from '@/interfaces/notification';

async function sendContactData(contactDetails: ReqBody) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = React.useState('');
  const [enteredName, setEnteredName] = React.useState('');
  const [enteredMessage, setEnteredMessage] = React.useState('');
  const [requestStatus, setRequestStatus] = React.useState<
    'pending' | 'success' | 'error' | null
  >(null);
  const [requestError, setRequestError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body: ReqBody = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    setRequestStatus('pending');

    try {
      await sendContactData(body);
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (error) {
      if (error instanceof Error) {
        setRequestError(error.message);
        setRequestStatus('error');
      }
    }
  }

  let notification: INotification | undefined;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError as string,
    };
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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
