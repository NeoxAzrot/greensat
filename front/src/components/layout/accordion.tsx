'use client';

import cn from 'classnames';
import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';

interface AccordionProps {
  children: ReactNode;
  tag?: string;
  title: string;
  active?: boolean;
}

const Accordion = ({ children, tag = 'li', title, active = false }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  const accordion = useRef<HTMLDivElement>(null);
  const Component = tag as keyof JSX.IntrinsicElements;

  useEffect(() => {
    setAccordionOpen(active);
  }, [accordion, active]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAccordionOpen(!accordionOpen);
  };

  return (
    <Component>
      <button
        className="h4 font-playfair-display flex items-center justify-between w-full text-left py-5"
        onClick={handleClick}
        aria-expanded={accordionOpen}
      >
        <span>{title}</span>

        <svg
          className={cn('w-4 h-4 fill-current text-blue-600 shrink-0 ml-8', {
            'rotate-180': accordionOpen,
          })}
          viewBox="0 0 16 16"
        >
          <path d="m3 5 5 6 5-6z" />
        </svg>
      </button>

      <div
        ref={accordion}
        className="text-slate-500 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          accordionOpen
            ? { maxHeight: accordion.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <p className="pb-5">{children}</p>
      </div>
    </Component>
  );
};

export default Accordion;
