import {
     SiReact, SiJavascript, SiHtml5, SiCss3,
     SiSpringboot, SiMysql,
     SiGit, SiGithub,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiDatabase, FiShield, FiServer } from 'react-icons/fi';

export const skillCategories = [
     {
          title: 'Frontend',
          color: '#6c5ce7',
          skills: [
               { name: 'HTML5', icon: SiHtml5, level: 90 },
               { name: 'CSS3', icon: SiCss3, level: 85 },
               { name: 'JavaScript', icon: SiJavascript, level: 82 },
               { name: 'ReactJS', icon: SiReact, level: 78 },
          ],
     },
     {
          title: 'Backend',
          color: '#00cec9',
          skills: [
               { name: 'Java', icon: FaJava, level: 88 },
               { name: 'Spring Boot', icon: SiSpringboot, level: 85 },
               { name: 'Spring Data JPA', icon: FiServer, level: 80 },
               { name: 'REST API', icon: FiServer, level: 85 },
               { name: 'JWT Auth', icon: FiShield, level: 75 },
          ],
     },
     {
          title: 'Database',
          color: '#fd79a8',
          skills: [
               { name: 'MySQL', icon: SiMysql, level: 85 },
               { name: 'Database Design', icon: FiDatabase, level: 80 },
          ],
     },
     {
          title: 'Tools & DevOps',
          color: '#fdcb6e',
          skills: [
               { name: 'Git', icon: SiGit, level: 85 },
               { name: 'GitHub', icon: SiGithub, level: 88 },
          ],
     },
];
