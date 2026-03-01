import { FiGithub, FiLinkedin, FiHeart, FiGlobe } from 'react-icons/fi';
import { SiStackoverflow } from 'react-icons/si';
import { personalInfo, socialLinks } from '../../../data';
import './Footer.css';

export default function Footer() {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="footer">
               <div className="container">
                    <div className="footer__content">
                         <div className="footer__brand">
                              <a href="#home" className="footer__logo">
                                   <span className="footer__logo-bracket">&lt;</span>
                                   <span className="footer__logo-text">Sahil</span>
                                   <span className="footer__logo-bracket">/&gt;</span>
                              </a>
                              <p className="footer__tagline">
                                   {personalInfo.tagline}
                                   {' '}Building reliable software, one commit at a time.
                              </p>
                         </div>

                         <div className="footer__links">
                              <h4 className="footer__links-title">Quick Links</h4>
                              <nav>
                                   <a href="#home">Home</a>
                                   <a href="#about">About</a>
                                   <a href="#skills">Skills</a>
                                   <a href="#projects">Projects</a>
                                   <a href="#contact">Contact</a>
                              </nav>
                         </div>

                         <div className="footer__social">
                              <h4 className="footer__links-title">Connect</h4>
                              <div className="footer__social-links">
                                   {socialLinks.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                             <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                                                  <Icon />
                                             </a>
                                        );
                                   })}
                              </div>
                         </div>
                    </div>

                    <div className="footer__bottom">
                         <p>
                              © {currentYear} {personalInfo.name}. Crafted with <FiHeart className="footer__heart" /> and lots of ☕
                         </p>
                    </div>
               </div>
          </footer>
     );
}
