'use client';
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from '@fortawesome/free-solid-svg-icons' 
import tw from 'tailwind-styled-components'

function BasicModal() {
    const [isModalOpened, setIsModalOpened] = useState<Boolean>(false)

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const closeModal = (e: MouseEvent) => {
            if (isModalOpened && modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setIsModalOpened(false);
            }
        };

        document.addEventListener('mousedown', closeModal);

        return () => {
            document.removeEventListener('mousedown', closeModal);
        };
    }, [isModalOpened]);

    const ModalOpenButtonHander = () => {
        setIsModalOpened(true)
    }

    const ModalCloseButtonHander = () => {
        setIsModalOpened(false)
    }

    return (
        <>
            <button onClick={ModalOpenButtonHander}>
                모달 열기
            </button>

            {isModalOpened &&
                createPortal(
                    <>
                        <div className="absolute flex justify-center items-center w-screen h-screen p-4" >
                            <div className="absolute w-screen h-screen bg-black opacity-50 "></div>
                            <div className="relative z-50 h-[30rem] w-full lg:w-8/12 bg-white rounded-lg" ref={modalRef}>
                                <FontAwesomeIcon icon={faClose} className="absolute top-0 right-0 h-8 aspect-square p-2 cursor-pointer" onClick={ModalCloseButtonHander}/>

                                <div className="">

                                </div>
                            </div>
                        </div>
                    </>,
                    document.body,
                )}
        </>
    )
}

export default BasicModal;