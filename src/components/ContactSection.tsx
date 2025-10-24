import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_qm394bd',      // Remplace par ton Service ID
      'template_opyt3in',     // Remplace par ton Template ID
      formData,               // Les données du formulaire
      'xsek-IMLxSSdlr5AL'       // Remplace par ton Public Key / User ID
    ).then(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }).catch((err) => {
      console.error(err);
      alert("Erreur lors de l'envoi de l'email");
    }).finally(() => setLoading(false));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* ... ton code pour header, contact info ... */}

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 sm:p-12">
          
          {submitted && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-green-900">Formulaire soumis avec succès!</h4>
                <p className="text-green-800 text-sm">Vous devriez recevoir votre message dans votre boîte Gmail.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom & Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Nom complet" value={formData.name} onChange={handleChange} required className="w-full ..." />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full ..." />
            </div>
            {/* Téléphone & Sujet */}
            <div className="grid sm:grid-cols-2 gap-6">
              <input type="tel" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} className="w-full ..." />
              <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full ...">
                <option value="">Sélectionnez un sujet</option>
                <option value="support">Support technique</option>
                <option value="partenariat">Partenariat</option>
                <option value="integration">Intégration API</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            {/* Message */}
            <textarea name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="Votre message..." className="w-full ..." required />
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r ...">
              {loading ? 'Envoi en cours...' : 'Envoyer le message'} <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
