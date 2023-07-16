import { useRef } from "react";
import {
  Animation,
  Background,
  BodyModal,
  HeaderModal,
  IconClose,
  ModalWrapper,
  Title,
} from "./styled";

const Modal = ({ open, togle, title, children }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      togle();
    }
  };

  return (
    <>
      {open && (
        <>
          <Background ref={modalRef} onClick={closeModal}>
            <Animation>
              <ModalWrapper>
                <HeaderModal>
                  <Title>{title}</Title>
                  <IconClose onClick={togle} />
                </HeaderModal>
                <BodyModal>{children}</BodyModal>
              </ModalWrapper>
            </Animation>
          </Background>
        </>
      )}
    </>
  );
};

export default Modal;
