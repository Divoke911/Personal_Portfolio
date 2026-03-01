import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiArrowUpRight } from 'react-icons/fi';
import { contactInfo, socialLinks } from '../../../data';
import './Contact.css';

export default function Contact() {
     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
     const [submitted, setSubmitted] = useState(false);

     const handleSubmit = (e) => {
          e.preventDefault();
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 4000);
          setFormData({ name: '', email: '', message: '' });
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
                                   <input id="contact-name" type="text" className="contact__form-input" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                              </div>

                              <div className="contact__form-group">
                                   <label htmlFor="contact-email" className="contact__form-label">Email</label>
                                   <input id="contact-email" type="email" className="contact__form-input" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                              </div>

                              <div className="contact__form-group">
                                   <label htmlFor="contact-message" className="contact__form-label">Message</label>
                                   <textarea id="contact-message" className="contact__form-input contact__form-textarea" placeholder="Tell me about your project..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                              </div>

                              <button type="submit" className="contact__form-submit">
                                   {submitted ? <>✓ Message Sent!</> : <><FiSend /> Send Message</>}
                              </button>
                         </motion.form>
                    </div>
               </div>
          </section>
     );
}
