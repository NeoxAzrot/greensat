'use client';

import { Transition } from '@headlessui/react';
import { ReactNode, useState } from 'react';

interface TooltipProps {
  children: ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  content: string;
}

const Tooltip = ({ children, position = 'top', content }: TooltipProps) => {
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);

  const positionOuterClasses = () => {
    switch (position) {
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2';
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2';
    }
  };

  const positionInnerClasses = () => {
    switch (position) {
      case 'right':
        return 'ml-2';
      case 'left':
        return 'mr-2';
      case 'bottom':
        return 'mt-2';
      default:
        return 'mb-2';
    }
  };

  const handleOpen = () => {
    setTooltipOpen(true);
  };

  const handleClose = () => {
    setTooltipOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      <div
        className="block"
        aria-haspopup="true"
        aria-expanded={tooltipOpen}
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </div>

      <div className={`z-10 absolute ${positionOuterClasses()}`}>
        <Transition
          show={tooltipOpen}
          as="div"
          className={`min-w-[12rem] bg-slate-800 p-2 rounded overflow-hidden text-xs text-slate-100 text-center ${positionInnerClasses()}`}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {content}
        </Transition>
      </div>
    </div>
  );
};

export default Tooltip;
