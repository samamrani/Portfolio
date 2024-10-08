import React, { useState } from 'react';
import '../styles/main.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/xzzpnkrq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('Message envoyé avec succès!');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setStatus('Une erreur est survenue. Veuillez réessayer.');
        }
      })
      .catch(() => setStatus('Une erreur est survenue. Veuillez réessayer.'));
  };

  return (
    <section className="container info" id="contact">
      <h1>Contactez-moi</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
      {status && <p>{status}</p>} 
    </section>
  );
};

export default Contact;
