import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import { projects, projectFilters } from '../../../data';
import './Projects.css';

export default function Projects() {
     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
     const [activeFilter, setActiveFilter] = useState('All');
     const [hoveredId, setHoveredId] = useState(null);

     const filtered =
          activeFilter === 'All'
               ? projects
               : projects.filter((p) => p.tags.includes(activeFilter));

     return (
          <section id="projects" className="projects" ref={ref}>
               <div className="container">
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         animate={inView ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.6 }}
                    >
                         <span className="section-label">Projects</span>
                         <h2 className="section-title">Featured Work</h2>
                         <p className="section-description">
                              Production-style projects demonstrating backend architecture, API design, and full-stack development.
                         </p>
                    </motion.div>

                    <motion.div
                         className="projects__filters"
                         initial={{ opacity: 0, y: 20 }}
                         animate={inView ? { opacity: 1, y: 0 } : {}}
                         transition={{ delay: 0.2 }}
                    >
                         {projectFilters.map((filter) => (
                              <button
                                   key={filter}
                                   className={`projects__filter ${activeFilter === filter ? 'projects__filter--active' : ''}`}
                                   onClick={() => setActiveFilter(filter)}
                              >
                                   {filter}
                              </button>
                         ))}
                    </motion.div>

                    <div className="projects__grid">
                         <AnimatePresence mode="wait">
                              {filtered.map((project, i) => (
                                   <motion.div
                                        key={project.id}
                                        className="projects__card glass-card"
                                        layout
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: i * 0.1 }}
                                        onMouseEnter={() => setHoveredId(project.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                   >
                                        <div className="projects__card-image">
                                             <img src={project.image} alt={project.title} loading="lazy" />
                                             <div className={`projects__card-overlay ${hoveredId === project.id ? 'projects__card-overlay--visible' : ''}`}>
                                                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__card-link">
                                                       <FiGithub />
                                                  </a>
                                             </div>
                                             <div className="projects__card-accent" style={{ background: project.color }} />
                                        </div>
                                        <div className="projects__card-body">
                                             <span className="projects__card-subtitle">{project.subtitle}</span>
                                             <h3 className="projects__card-title">{project.title}</h3>
                                             <p className="projects__card-description">{project.description}</p>

                                             <ul className="projects__card-highlights">
                                                  {project.highlights.map((h, j) => (
                                                       <li key={j}>{h}</li>
                                                  ))}
                                             </ul>

                                             <div className="projects__card-tags">
                                                  {project.tags.map((tag) => (
                                                       <span key={tag} className="projects__card-tag">{tag}</span>
                                                  ))}
                                             </div>
                                             <a href={project.github} className="projects__card-cta" target="_blank" rel="noopener noreferrer">
                                                  View on GitHub <FiArrowRight />
                                             </a>
                                        </div>
                                   </motion.div>
                              ))}
                         </AnimatePresence>
                    </div>
               </div>
          </section>
     );
}
