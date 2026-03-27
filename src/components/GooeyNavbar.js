import React, { useEffect, useState } from 'react';
import GooeyNav from './GooeyNav/GooeyNav';

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

function GooeyNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = sections.map((section) => ({
    label: section.label,
    href: `#${section.id}`,
  }));

  return (
    <div style={{ height: '80px', position: 'relative' }}>
      <GooeyNav
        key={activeIndex}
        items={items}
        particleCount={8}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={activeIndex}
        animationTime={500}
        timeVariance={250}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}

export default GooeyNavbar;
