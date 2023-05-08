import { AiOutlineClose } from "react-icons/ai";
import InvisibleButton from "../invisibleButton/InvisibleButton";

import {
  BodyModal,
  Centrar,
  Container,
  HeaderModal,
  Mdal,
  Title,
} from "./styled";

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <>
      <Container onClick={onClose} />
      <Centrar>
        <Mdal>
          <HeaderModal>
            <Title>{title}</Title>
            <InvisibleButton onClick={onClose}>
              <AiOutlineClose color="black" size={26} />
            </InvisibleButton>
          </HeaderModal>
          <BodyModal>{children}</BodyModal>
          {/* <Line /> */}
        </Mdal>
      </Centrar>
    </>
  );
};

export default Modal;
