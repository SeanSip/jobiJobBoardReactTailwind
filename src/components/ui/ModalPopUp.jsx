import React, { useEffect, useRef } from 'react';

const ModalPopUp = ({ show, children, onClose, buttons, tabIndex }) => {
  const buttonRefs = useRef(buttons.map(() => React.createRef()));
  const modalRef = useRef();
  const modalContentRef = useRef();

  useEffect(() => {
    if (show) {
      modalRef.current.focus();

      document.body.classList.add('overflowHidden');
    } else {
      document.body.classList.remove('overflowHidden');
    }

    const handleMouseDown = e => {
      if (!modalContentRef.current.contains(e.target)) {
        closeModal();
      }
    };

    if (show) {
      modalRef.current.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [show]);

  const handleKeyDownInput = e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const currentButtonIndex = buttonRefs.current.findIndex(
        ref => ref.current === e.target
      );
      if (currentButtonIndex !== tabIndex.length) {
        const nextButtonIndex =
          (currentButtonIndex + 1) % buttonRefs.current.length;

        buttonRefs.current[nextButtonIndex].current.focus();
      }
    }
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="bg-white relative ">
      {show && (
        <div
          ref={modalRef}
          tabIndex={tabIndex}
          onKeyDown={handleKeyDownInput}
          className=" fixed bg-black/30 z-50 w-full h-screen flex items-center justify-center top-0 backdrop-blur-lg "
        >
          <div
            ref={modalContentRef}
            className="flex flex-col items-center bg-white px-4 py-10 rounded-xl w-fit mx-4"
          >
            {children}
            <div className="flex mt-8 gap-x-4">
              {buttons.map((button, index) => (
                <button
                  className={button.className}
                  key={index}
                  ref={buttonRefs.current[index]}
                  onClick={button.onClick}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPopUp;
