import { AiOutlineClose } from "react-icons/ai";
import InvisibleButton from "../invisibleButton/InvisibleButton";

import { FormCaja } from "../form";
import {
  BodyModal,
  Button,
  Centrar,
  Container,
  Footer,
  HeaderModal,
  Line,
  Mdal,
  Title,
} from "./styled";

const Modal = ({ open, onClose, title }) => {
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

          <BodyModal>
            <FormCaja />
          </BodyModal>
          <Line />
          <Footer>
            <Button color="#ff8080" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              type="submit"
              form="formCaja"
              color="#80ff80"
              className="mr-2"
            >
              Guardar
            </Button>
          </Footer>
        </Mdal>
      </Centrar>
    </>
  );
};

export default Modal;
