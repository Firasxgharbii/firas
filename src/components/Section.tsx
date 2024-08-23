import { useScroll } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

const Section: React.FC<{
  theme: string;
  setTheme: (value: string) => void;
  children: ReactNode;
}> = ({ theme, setTheme, children }) => {
  let container = useRef(null);

  let { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"]
  });

  return (
    <section
      className="bg-white dark:bg-black p-8 min-h-screen flex flex-col"
      ref={container}
    >
      {children}
    </section>
  );
};

export default Section;
