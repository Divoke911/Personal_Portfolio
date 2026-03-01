import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiServer, FiDatabase, FiLayout } from 'react-icons/fi';
import { aboutStats } from '../../../data';
import './About.css';

const services = [
     {
          icon: <FiServer />,
          title: 'Backend Development',
          description: 'Building robust REST APIs and microservices with Java, Spring Boot, Spring Data JPA, and JWT authentication.',
     },
     {
          icon: <FiDatabase />,
          title: 'Database Design',
          description: 'Designing normalized relational schemas, writing optimized queries, and managing data with MySQL.',
     },
     {
          icon: <FiLayout />,
          title: 'Frontend Development',
          description: 'Creating responsive, interactive user interfaces with React, JavaScript, HTML5, and CSS3.',
     },
     {
          icon: <FiCode />,
          title: 'Full Stack Solutions',
          description: 'End-to-end application development from API architecture to UI, with Git-based version control and CI/CD workflows.',
     },
];

export default function About() {
     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

     return (
          <section id="about" className="about" ref={ref}>
               <div className="container">
                    <motion.div
                         className="about__header"
                         initial={{ opacity: 0, y: 40 }}
                         animate={inView ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.6 }}
                    >
                         <span className="section-label">About Me</span>
                         <h2 className="section-title">Passionate about building<br />reliable software</h2>
                    </motion.div>

                    <div className="about__content">
                         <motion.div
                              className="about__text"
                              initial={{ opacity: 0, x: -40 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.6, delay: 0.2 }}
                         >
                              <p>
                                   I'm a Full Stack Developer based in Mumbai, currently pursuing my
                                   Bachelor of Engineering in Computer Engineering from the University
                                   of Mumbai. I specialize in <strong>Java and Spring Boot</strong>, with
                                   a strong foundation in backend architecture, relational databases,
                                   and API-driven development.
                              </p>
                              <p>
                                   During my training at Techpaathshala, I gained hands-on experience
                                   building production-style applications — from e-commerce platforms
                                   and food delivery backends to task management tools. I'm comfortable
                                   working across the full stack, from designing database schemas and
                                   REST APIs to crafting responsive React frontends.
                              </p>
                              <p>
                                   I'm committed to writing efficient, maintainable code and delivering
                                   reliable software solutions. I'm always eager to learn new
                                   technologies and collaborate on challenging projects.
                              </p>

                              <div className="about__stats">
                                   {aboutStats.map((stat, i) => (
                                        <motion.div
                                             key={stat.label}
                                             className="about__stat"
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={inView ? { opacity: 1, y: 0 } : {}}
                                             transition={{ delay: 0.4 + i * 0.1 }}
                                        >
                                             <span className="about__stat-number">{stat.number}</span>
                                             <span className="about__stat-label">{stat.label}</span>
                                        </motion.div>
                                   ))}
                              </div>
                         </motion.div>

                         <motion.div
                              className="about__services"
                              initial={{ opacity: 0, x: 40 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.6, delay: 0.3 }}
                         >
                              {services.map((service, i) => (
                                   <motion.div
                                        key={service.title}
                                        className="about__service glass-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                   >
                                        <div className="about__service-icon">{service.icon}</div>
                                        <div>
                                             <h3 className="about__service-title">{service.title}</h3>
                                             <p className="about__service-desc">{service.description}</p>
                                        </div>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
