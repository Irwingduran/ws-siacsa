import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none transition-colors"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <div className="p-6">
          {title && <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>}
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;