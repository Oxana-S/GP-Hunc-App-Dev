'use client';

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { MouseEventHandler, useMemo } from "react";
import classnames from "classnames";

import Portal from "../Portal/Portal";
import Icon from '@/components/Icon';

import styles from "./Modal.module.scss";
import { useGetModalContainer } from "@/hooks/useGetModalContainer";

interface IProps {
  onClose?: () => void;
  isOpen?: boolean;
  title?: string;
}

const Modal: React.FC<React.PropsWithChildren<IProps>> = ({
  onClose,
  title,
  isOpen = true,
  children,
}) => {
  const modalContainer = useGetModalContainer();
  const handleCloseOnOverlay: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  const show = useMemo(() => {
    return isOpen && !!modalContainer
  }, [isOpen, modalContainer])

  // useEffect(() => {
  //   if(show) {
  //     blockScroll()
  //   } else {
  //     allowScroll()
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [show])

  // useEffect(() => {
  //   return () => {
  //     allowScroll()
  //   }
  // })

  if (!show) {
    return null;
  }

  return (
    <Portal parent={modalContainer || undefined}>
      <div
        className={classnames(
          styles.overlay__animated,
          "w-full h-full bg-black bg-opacity-20 backdrop-blur z-40 flex justify-center items-center pointer-events-auto"
        )}
        onClick={handleCloseOnOverlay as any}
      >
        <div
          className={classnames(
            styles.modal__animated,
            "bg-white p-6 container border shadow-xl overflow-hidden w-fit h-fit rounded-3xl min-w-[380px]"
          )}
        >
          <div className="flex justify-between">
            <div className="text-black text-[16px] mb-6 font-semibold">
              {title}
            </div>

            <div onClick={onClose} className="cursor-pointer">
              <Icon
                src="/images/icon-cross.svg"
                className="w-4 h-4"
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
