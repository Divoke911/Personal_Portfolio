import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiArrowDownRight } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../../../data';
import './Hero.css';

export default function Hero() {
     const heroSocials = socialLinks.slice(0, 3); // GitHub, SO, LinkedIn

     return (
          <section id="home" className="hero">
               <div className="hero__bg">
                    <div className="hero__orb hero__orb--1" />
                    <div className="hero__orb hero__orb--2" />
                    <div className="hero__orb hero__orb--3" />
                    <div className="hero__grid" />
               </div>

               <div className="hero__container container">
                    <div className="hero__content">
                         <motion.div
                              className="hero__badge"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.6 }}
                         >
                              <span className="hero__badge-dot" />
                              Open to Opportunities
                         </motion.div>

                         <motion.h1
                              className="hero__title"
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.7 }}
                         >
                              Hi, I'm <span className="hero__title-accent">{personalInfo.name}</span>
                              <br />
                              <span className="hero__title-role">
                                   <TypeAnimation
                                        sequence={[
                                             'Full Stack Developer',
                                             2000,
                                             'Java & Spring Boot Dev',
                                             2000,
                                             'React Developer',
                                             2000,
                                             'Backend Engineer',
                                             2000,
                                        ]}
                                        wrapper="span"
                                        speed={40}
                                        repeat={Infinity}
                                   />
                              </span>
                         </motion.h1>

                         <motion.p
                              className="hero__description"
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5, duration: 0.7 }}
                         >
                              {personalInfo.heroDescription}
                         </motion.p>

                         <motion.div
                              className="hero__actions"
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7, duration: 0.7 }}
                         >
                              <a href="#projects" className="hero__btn hero__btn--primary">
                                   View My Work <FiArrowDownRight />
                              </a>
                              <a href="/resume.pdf" className="hero__btn hero__btn--secondary" target="_blank" rel="noopener noreferrer">
                                   <FiDownload /> Resume
                              </a>
                         </motion.div>

                         <motion.div
                              className="hero__socials"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.9, duration: 0.7 }}
                         >
                              {heroSocials.map((link) => {
                                   const Icon = link.icon;
                                   return (
                                        <a key={link.label} href={link.href} className="hero__social-link" target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                                             <Icon />
                                        </a>
                                   );
                              })}
                         </motion.div>
                    </div>

                    <motion.div
                         className="hero__visual"
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                         <div className="hero__code-window">
                              <div className="hero__code-header">
                                   <div className="hero__code-dots">
                                        <span style={{ background: '#ff5f57' }} />
                                        <span style={{ background: '#febc2e' }} />
                                        <span style={{ background: '#28c840' }} />
                                   </div>
                                   <span className="hero__code-filename">developer.java</span>
                              </div>
                              <pre className="hero__code-body">
                                   <code>
                                        <span className="code-keyword">public class</span>{' '}
                                        <span className="code-fn">Developer</span> {'{\n'}
                                        {'  '}<span className="code-prop">name</span> = <span className="code-string">"{personalInfo.name}"</span>;{'\n'}
                                        {'  '}<span className="code-prop">role</span> = <span className="code-string">"Full Stack Dev"</span>;{'\n'}
                                        {'  '}<span className="code-prop">stack</span> = {'{\n'}
                                        {'    '}<span className="code-string">"Java"</span>,{' '}
                                        <span className="code-string">"Spring Boot"</span>,{'\n'}
                                        {'    '}<span className="code-string">"React"</span>,{' '}
                                        <span className="code-string">"MySQL"</span>{'\n'}
                                        {'  }'};{'\n'}
                                        {'  '}<span className="code-prop">location</span> = <span className="code-string">"Mumbai, IN"</span>;{'\n'}
                                        {'  '}<span className="code-prop">coffee</span> = <span className="code-keyword">Integer.MAX_VALUE</span>{'\n'}
                                        {'}'};
                                   </code>
                              </pre>
                         </div>

                         <motion.div className="hero__float-badge hero__float-badge--1" animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                              🍃 Spring Boot
                         </motion.div>
                         <motion.div className="hero__float-badge hero__float-badge--2" animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                              ⚛️ React
                         </motion.div>
                         <motion.div className="hero__float-badge hero__float-badge--3" animate={{ y: [-8, 12, -8] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
                              ☕ Java
                         </motion.div>
                    </motion.div>
               </div>

               <motion.div className="hero__scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                    <div className="hero__scroll-line" />
                    <span>Scroll</span>
               </motion.div>
          </section>
     );
}
