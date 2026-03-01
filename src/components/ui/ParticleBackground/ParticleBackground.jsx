import { useState, useEffect } from 'react';
import './ParticleBackground.css';

export default function ParticleBackground() {
     return (
          <div className="particles" aria-hidden="true">
               {Array.from({ length: 40 }).map((_, i) => (
                    <div
                         key={i}
                         className="particle"
                         style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              width: `${Math.random() * 3 + 1}px`,
                              height: `${Math.random() * 3 + 1}px`,
                              animationDelay: `${Math.random() * 8}s`,
                              animationDuration: `${Math.random() * 10 + 10}s`,
                         }}
                    />
               ))}
          </div>
     );
}

export function ScrollProgress() {
     const [progress, setProgress] = useState(0);

     useEffect(() => {
          const handleScroll = () => {
               const total = document.documentElement.scrollHeight - window.innerHeight;
               setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}
