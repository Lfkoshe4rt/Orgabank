import { AiOutlineClose } from "react-icons/ai";
import InvisibleButton from "../invisibleButton/InvisibleButton";

import {
  BodyModal,
  Button,
  Centrar,
  Container,
  Footer,
  HeaderModal,
  Input,
  InputGroup,
  Label,
  Line,
  Mdal,
  Option,
  Select,
  Title,
} from "./styled";

import { useCajaActions } from "../../hooks/useCajaActions";

const Modal = ({ open, onClose, title, user }) => {
  const { modifyCaja } = useCajaActions();
  if (!open) return null;

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const alias = form.get("nombre");
    const saldo = form.get("saldo");
    const moneda = form.get("moneda");
    const banco = form.get("banco");

    const caja = {
      alias,
      saldo: Number(saldo),
      moneda,
      banco,
      user,
    };

    modifyCaja(caja);
  };

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
            <form id="formCaja" onSubmit={onSubmit}>
              <InputGroup>
                <Label>Nombre</Label>
                <Input type="text" name="nombre" required />
              </InputGroup>

              <InputGroup>
                <Label>Monto</Label>
                <Input type="number" name="saldo" required />
              </InputGroup>

              <InputGroup>
                <Label>Moneda</Label>
                <Select name="moneda">
                  <Option value="UYU">UYU</Option>
                  <Option value="USD">USD</Option>
                  <Option value="R$">R$</Option>
                </Select>
              </InputGroup>

              <InputGroup>
                <Label>Banco</Label>
                <Select name="banco">
                  <Option value="ITAU">ITAU</Option>
                  <Option value="BROU">BROU</Option>
                  <Option value="BBVA">BBVA</Option>
                  <Option value="SCOTIABANK">SCOTIABANK</Option>
                  <Option value="SANTANDER">SANTANDER</Option>
                </Select>
              </InputGroup>
            </form>
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
