import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';
import { experiences, education } from '../../../data';
import './Experience.css';

export default function Experience() {
     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

     return (
          <section id="experience" className="experience" ref={ref}>
               <div className="container">
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         animate={inView ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.6 }}
                    >
                         <span className="section-label">Experience & Education</span>
                         <h2 className="section-title">My Journey</h2>
                         <p className="section-description">
                              Training and education that shaped my skills as a developer.
                         </p>
                    </motion.div>

                    <div className="experience__layout">
                         <div className="experience__timeline">
                              {experiences.map((exp, i) => (
                                   <motion.div
                                        key={exp.id}
                                        className={`experience__item glass-card ${exp.current ? 'experience__item--current' : ''}`}
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.15 }}
                                   >
                                        <div className="experience__item-dot">
                                             {exp.current && <span className="experience__item-pulse" />}
                                        </div>

                                        <div className="experience__item-header">
                                             <div>
                                                  <h3 className="experience__item-role">{exp.role}</h3>
                                                  <div className="experience__item-meta">
                                                       <span><FiBriefcase /> {exp.company}</span>
                                                       <span><FiMapPin /> {exp.location}</span>
                                                       <span><FiCalendar /> {exp.period}</span>
                                                  </div>
                                             </div>
                                             {exp.current && <span className="experience__item-badge">Current</span>}
                                        </div>

                                        <ul className="experience__item-list">
                                             {exp.description.map((item, j) => (
                                                  <li key={j}>{item}</li>
                                             ))}
                                        </ul>

                                        <div className="experience__item-tags">
                                             {exp.tags.map((tag) => (
                                                  <span key={tag} className="experience__item-tag">{tag}</span>
                                             ))}
                                        </div>
                                   </motion.div>
                              ))}
                         </div>

                         <motion.div
                              className="experience__education glass-card"
                              initial={{ opacity: 0, x: -40 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.5 }}
                         >
                              <h3 className="experience__section-heading">
                                   <FiAward /> Education
                              </h3>
                              <div className="experience__edu-content">
                                   <h4 className="experience__edu-degree">{education.degree}</h4>
                                   <p className="experience__edu-field">{education.field}</p>
                                   <p className="experience__edu-uni">{education.university}</p>
                                   <span className="experience__edu-status">Present: {education.status}</span>
                              </div>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
