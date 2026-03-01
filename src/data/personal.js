import { FiGithub, FiLinkedin, FiGlobe, FiMail, FiMapPin } from 'react-icons/fi';
import { SiStackoverflow } from 'react-icons/si';

export const personalInfo = {
     name: 'Sahil Kawale',
     role: 'Full Stack Developer',
     email: 'sahil.kawale911@gmail.com',
     location: 'Mumbai, India',
     tagline: 'Full Stack Developer specializing in Java & Spring Boot.',
     heroDescription:
          'Full Stack Developer specializing in Java and Spring Boot, with hands-on experience building production-style projects like e-commerce platforms, food delivery backends, and task management tools. Passionate about clean architecture and reliable software.',
};

export const navLinks = [
     { name: 'Home', href: '#home' },
     { name: 'About', href: '#about' },
     { name: 'Skills', href: '#skills' },
     { name: 'Projects', href: '#projects' },
     { name: 'Experience', href: '#experience' },
     { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
     { icon: FiGithub, label: 'GitHub', username: 'Divoke911', href: 'https://github.com/Divoke911' },
     { icon: SiStackoverflow, label: 'Stack Overflow', username: 'Sahil Kawale', href: 'https://stackoverflow.com/users/sahil-kawale' },
     { icon: FiLinkedin, label: 'LinkedIn', username: 'Sahil Kawale', href: 'https://linkedin.com/in/sahil-kawale' },
];

export const contactInfo = [
     { icon: FiMail, label: 'Email', value: 'sahil.kawale911@gmail.com', href: 'mailto:sahil.kawale911@gmail.com' },
     { icon: FiMapPin, label: 'Location', value: 'Mumbai, India', href: null },
];
