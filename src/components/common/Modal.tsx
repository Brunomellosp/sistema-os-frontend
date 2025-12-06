// src/components/common/Modal.jsx
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}


const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay"
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.45)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 40,
            }}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="modal-content"
                style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    maxWidth: '640px',
                    width: '100%',
                    margin: '0 16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    maxHeight: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    className="modal-header"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #eee',
                        padding: '10px 16px',
                    }}
                >
                    <h2 style={{ fontSize: '16px', fontWeight: 600 }}>{title}</h2>
                    <button
                        onClick={onClose}
                        aria-label="Fechar"
                        style={{
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: '#777',
                        }}
                    >
                        ✕
                    </button>
                </div>

                <div
                    className="modal-body"
                    style={{
                        padding: '10px 16px',
                        fontSize: '14px',
                        color: '#444',
                        overflowY: 'auto',
                    }}
                >
                    {children}
                </div>

                <div
                    className="modal-footer"
                    style={{
                        borderTop: '1px solid #eee',
                        padding: '10px 16px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            border: '1px solid #ccc',
                            backgroundColor: '#f8f8f8',
                            borderRadius: '4px',
                            padding: '6px 14px',
                            fontSize: '13px',
                            cursor: 'pointer',
                        }}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
