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

const Modal = ({ open, toggle, title, children }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      toggle();
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
                  <IconClose onClick={toggle} />
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
