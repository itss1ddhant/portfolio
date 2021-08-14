import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>Huge Annoucement!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <h3>C++ Master Course is LIVE!</h3>
                    <p>Do you wish to learn C++, DSA, Competitive Programming from Scratch?</p>
                    <p>
                        I've published a completely FREE tutorial, check
                        it out today!
                    </p>
                    <p>
                        I bring to you this mega course where each month I will
                        help you learn about various Data Strucutres, Algorithms, CP Problems, 
                        Optimizations and much more.
                    </p>
                </div>
                <div className='lower-section'>
                    <a onClick={closeModal} className='modal-btn btn-red'>
                        Close
                    </a>
                    <a
                        href='https://www.youtube.com/channel/UCxyC_OIee4WvJ1xy30AVj_A'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        Start tutorial
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;