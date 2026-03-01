import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../../../data';
import './Navbar.css';

export default function Navbar() {
     const [scrolled, setScrolled] = useState(false);
     const [mobileOpen, setMobileOpen] = useState(false);
     const [activeSection, setActiveSection] = useState('home');

     useEffect(() => {
          const handleScroll = () => {
               setScrolled(window.scrollY > 50);

               const sections = navLinks.map((l) => l.href.slice(1));
               for (let i = sections.length - 1; i >= 0; i--) {
                    const el = document.getElementById(sections[i]);
                    if (el && el.getBoundingClientRect().top <= 150) {
                         setActiveSection(sections[i]);
                         break;
                    }
               }
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const handleClick = (href) => {
          setMobileOpen(false);
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
     };

     return (
          <>
               <motion.nav
                    className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
               >
                    <div className="navbar__container container">
                         <a href="#home" className="navbar__logo" onClick={() => handleClick('#home')}>
                              <span className="navbar__logo-bracket">&lt;</span>
                              <span className="navbar__logo-text">Sahil</span>
                              <span className="navbar__logo-bracket">/&gt;</span>
                         </a>

                         <ul className="navbar__links">
                              {navLinks.map((link) => (
                                   <li key={link.name}>
                                        <a
                                             href={link.href}
                                             className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                                             onClick={(e) => {
                                                  e.preventDefault();
                                                  handleClick(link.href);
                                             }}
                                        >
                                             {link.name}
                                             {activeSection === link.href.slice(1) && (
                                                  <motion.span className="navbar__link-indicator" layoutId="activeIndicator" />
                                             )}
                                        </a>
                                   </li>
                              ))}
                         </ul>

                         <a
                              href="#contact"
                              className="navbar__cta"
                              onClick={(e) => {
                                   e.preventDefault();
                                   handleClick('#contact');
                              }}
                         >
                              Let's Talk
                         </a>

                         <button
                              className="navbar__toggle"
                              onClick={() => setMobileOpen(!mobileOpen)}
                              aria-label="Toggle menu"
                         >
                              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                         </button>
                    </div>
               </motion.nav>

               <AnimatePresence>
                    {mobileOpen && (
                         <motion.div
                              className="mobile-menu"
                              initial={{ opacity: 0, x: '100%' }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: '100%' }}
                              transition={{ duration: 0.3 }}
                         >
                              <ul className="mobile-menu__links">
                                   {navLinks.map((link, i) => (
                                        <motion.li
                                             key={link.name}
                                             initial={{ opacity: 0, x: 50 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             transition={{ delay: i * 0.08 }}
                                        >
                                             <a
                                                  href={link.href}
                                                  className={`mobile-menu__link ${activeSection === link.href.slice(1) ? 'mobile-menu__link--active' : ''}`}
                                                  onClick={(e) => {
                                                       e.preventDefault();
                                                       handleClick(link.href);
                                                  }}
                                             >
                                                  <span className="mobile-menu__link-number">0{i + 1}.</span>
                                                  {link.name}
                                             </a>
                                        </motion.li>
                                   ))}
                              </ul>
                         </motion.div>
                    )}
               </AnimatePresence>
          </>
     );
}
