import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../../../data';
import './Skills.css';

export default function Skills() {
     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

     return (
          <section id="skills" className="skills" ref={ref}>
               <div className="container">
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         animate={inView ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.6 }}
                    >
                         <span className="section-label">Skills</span>
                         <h2 className="section-title">Technologies & Tools</h2>
                         <p className="section-description">
                              My technical toolkit — from backend APIs to responsive frontends and everything in between.
                         </p>
                    </motion.div>

                    <div className="skills__grid">
                         {skillCategories.map((category, catIdx) => (
                              <motion.div
                                   key={category.title}
                                   className="skills__category glass-card"
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={inView ? { opacity: 1, y: 0 } : {}}
                                   transition={{ delay: 0.2 + catIdx * 0.1 }}
                              >
                                   <h3 className="skills__category-title" style={{ color: category.color }}>
                                        <span className="skills__category-dot" style={{ background: category.color }} />
                                        {category.title}
                                   </h3>
                                   <div className="skills__list">
                                        {category.skills.map((skill, skillIdx) => {
                                             const Icon = skill.icon;
                                             return (
                                                  <motion.div
                                                       key={skill.name}
                                                       className="skills__item"
                                                       initial={{ opacity: 0, x: -20 }}
                                                       animate={inView ? { opacity: 1, x: 0 } : {}}
                                                       transition={{ delay: 0.3 + catIdx * 0.1 + skillIdx * 0.05 }}
                                                  >
                                                       <div className="skills__item-header">
                                                            <span className="skills__item-icon" style={{ color: category.color }}>
                                                                 <Icon />
                                                            </span>
                                                            <span className="skills__item-name">{skill.name}</span>
                                                            <span className="skills__item-level">{skill.level}%</span>
                                                       </div>
                                                       <div className="skills__item-bar">
                                                            <motion.div
                                                                 className="skills__item-fill"
                                                                 style={{ background: category.color }}
                                                                 initial={{ width: 0 }}
                                                                 animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                                                 transition={{ duration: 1, delay: 0.5 + catIdx * 0.1 + skillIdx * 0.05, ease: [0.4, 0, 0.2, 1] }}
                                                            />
                                                       </div>
                                                  </motion.div>
                                             );
                                        })}
                                   </div>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
