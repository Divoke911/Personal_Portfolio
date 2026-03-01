import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiArrowUpRight } from 'react-icons/fi';
import { contactInfo, socialLinks } from '../../../data';
import './Contact.css';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || '336a64b3-9632-4170-b74a-81d8b42d1616';
const SUBMISSION_COOLDOWN_MS = 30_000;
const REQUEST_TIMEOUT_MS = 15_000;

function isValidEmail(email) {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
     const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' });
     const [sending, setSending] = useState(false);
     const [submitted, setSubmitted] = useState(false);
     const [error, setError] = useState('');

     const handleSubmit = async (e) => {
          e.preventDefault();
          if (sending) return;

          setSending(true);
          setSubmitted(false);
          setError('');

          try {
               if (formData.website.trim() !== '') {
                    setSubmitted(true);
                    setFormData({ name: '', email: '', message: '', website: '' });
                    return;
               }

               const name = formData.name.trim();
               const email = formData.email.trim().toLowerCase();
               const message = formData.message.trim();

               if (name.length < 2 || name.length > 100) {
                    throw new Error('Please enter a valid name');
               }
               if (!isValidEmail(email) || email.length > 254) {
                    throw new Error('Please enter a valid email');
               }
               if (message.length < 10 || message.length > 2000) {
                    throw new Error('Message must be between 10 and 2000 characters');
               }

               const lastSubmitted = Number(localStorage.getItem('contact_form_last_submitted_ms') || 0);
               if (Date.now() - lastSubmitted < SUBMISSION_COOLDOWN_MS) {
                    throw new Error('Please wait 30 seconds before sending another message');
               }

               const controller = new AbortController();
               const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

               const response = await fetch(WEB3FORMS_ENDPOINT, {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                         Accept: 'application/json',
                    },
                    body: JSON.stringify({
                         access_key: WEB3FORMS_ACCESS_KEY,
                         name,
                         email,
                         message,
                         botcheck: '',
                         replyto: email,
                         subject: `New portfolio contact from ${name}`,
                         from_name: 'Portfolio Contact Form',
                    }),
                    signal: controller.signal,
               });
               clearTimeout(timeoutId);

               const result = await response.json();
               if (!response.ok || !result.success) {
                    throw new Error(result.message || 'Message failed');
               }

               localStorage.setItem('contact_form_last_submitted_ms', String(Date.now()));
               setSubmitted(true);
               setFormData({ name: '', email: '', message: '', website: '' });
               setTimeout(() => setSubmitted(false), 4000);
          } catch (submitError) {
               if (submitError.name === 'AbortError') {
                    setError('Request timed out. Please try again.');
                    return;
               }
               setError(submitError.message || 'Could not send your message. Please try again.');
          } finally {
               setSending(false);
          }
     };

     return (
          <section id="contact" className="contact" ref={ref}>
               <div className="container">
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         animate={inView ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.6 }}
                    >
                         <span className="section-label">Contact</span>
                         <h2 className="section-title">Let's work together</h2>
                         <p className="section-description">
                              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                         </p>
                    </motion.div>

                    <div className="contact__content">
                         <motion.div
                              className="contact__info"
                              initial={{ opacity: 0, x: -40 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.2 }}
                         >
                              <div className="contact__info-items">
                                   {contactInfo.map((info) => {
                                        const Icon = info.icon;
                                        return (
                                             <div key={info.label} className="contact__info-item">
                                                  <div className="contact__info-icon"><Icon /></div>
                                                  <div>
                                                       <span className="contact__info-label">{info.label}</span>
                                                       {info.href ? (
                                                            <a href={info.href} className="contact__info-value">{info.value}</a>
                                                       ) : (
                                                            <span className="contact__info-value">{info.value}</span>
                                                       )}
                                                  </div>
                                             </div>
                                        );
                                   })}
                              </div>

                              <div className="contact__socials">
                                   <h4 className="contact__socials-title">Find me online</h4>
                                   <div className="contact__socials-links">
                                        {socialLinks.map((link) => {
                                             const Icon = link.icon;
                                             return (
                                                  <a key={link.label} href={link.href} className="contact__social-link glass-card" target="_blank" rel="noopener noreferrer">
                                                       <span className="contact__social-icon"><Icon /></span>
                                                       <div className="contact__social-info">
                                                            <span className="contact__social-label">{link.label}</span>
                                                            <span className="contact__social-username">{link.username}</span>
                                                       </div>
                                                       <FiArrowUpRight className="contact__social-arrow" />
                                                  </a>
                                             );
                                        })}
                                   </div>
                              </div>
                         </motion.div>

                         <motion.form
                              className="contact__form glass-card"
                              onSubmit={handleSubmit}
                              initial={{ opacity: 0, x: 40 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.3 }}
                         >
                              <div className="contact__form-group">
                                   <label htmlFor="contact-name" className="contact__form-label">Name</label>
                                   <input
                                        id="contact-name"
                                        type="text"
                                        className="contact__form-input"
                                         placeholder="Your name"
                                         value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        maxLength={100}
                                        autoComplete="name"
                                        required
                                   />
                              </div>

                              <div className="contact__form-group">
                                   <label htmlFor="contact-email" className="contact__form-label">Email</label>
                                   <input
                                        id="contact-email"
                                        type="email"
                                        className="contact__form-input"
                                         placeholder="your@email.com"
                                         value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        maxLength={254}
                                        autoComplete="email"
                                        required
                                   />
                              </div>

                              <div className="contact__form-group">
                                   <label htmlFor="contact-message" className="contact__form-label">Message</label>
                                   <textarea
                                        id="contact-message"
                                        className="contact__form-input contact__form-textarea"
                                         placeholder="Tell me about your project..."
                                         rows={5}
                                         value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        maxLength={2000}
                                        required
                                   />
                              </div>

                              <div className="contact__honeypot" aria-hidden="true">
                                   <label htmlFor="contact-website">Website</label>
                                   <input
                                        id="contact-website"
                                        type="text"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                   />
                              </div>

                              {submitted && <p className="contact__form-message contact__form-message--success">Message sent successfully.</p>}
                              {error && <p className="contact__form-message contact__form-message--error">{error}</p>}

                              <button type="submit" className="contact__form-submit" disabled={sending}>
                                   {sending ? 'Sending...' : submitted ? 'Message Sent' : <><FiSend /> Send Message</>}
                              </button>
                         </motion.form>
                    </div>
               </div>
          </section>
     );
}
