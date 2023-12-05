'use client';

import { Transition } from '@headlessui/react';
import { ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  children: ReactNode;
  id: string;
  ariaLabel: string;
  show: boolean;
  handleClose: () => void;
}

const Modal = ({ children, id, ariaLabel, show, handleClose }: ModalProps) => {
  const modalContent = useRef<HTMLDivElement>(null);

  // Close the modal on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!show || modalContent.current?.contains(target as Node)) return;
      handleClose();
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [show, handleClose, modalContent]);

  // Close the modal if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (keyCode !== 27) return;
      handleClose();
    };
    document.addEventListener('keydown', keyHandler);

    return () => document.removeEventListener('keydown', keyHandler);
  }, [handleClose]);

  return (
    <>
      <Transition
        show={show}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />

      <Transition
        show={show}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ttransition ease-out duration-200"
        leaveFrom="oopacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabel}
      >
        <div className="bg-white overflow-auto max-w-6xl w-full max-h-full" ref={modalContent}>
          {children}
        </div>
      </Transition>
    </>
  );
};

export default Modal;
