import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { CardMetric } from "../../../components/cardMetric";
import { MovementGraph } from "../../../components/graphics/MovementGraph";
import { Modal } from "../../../components/modal";
import { FormNewMovement } from "../../../components/resource-form/formNewMovement";
import { ScrollToUp } from "../../../components/scrollToUp";
import { MovementTable } from "../../../components/tables/MovementTable";
import { useAppSelector } from "../../../hooks/store";
import {
  ButtonAddContainer,
  ButtonAddMovement,
  CardContainer,
  MainContainer,
} from "./styled";

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const { movements } = useAppSelector((state) => state.movement);
  const toggleModal = () => setOpenModal(!openModal);

  const total = movements.reduce((acc, movement) => {
    if (movement.tipo === "entrada") {
      return acc + movement.monto;
    } else {
      return acc - movement.monto;
    }
  }, 0);

  return (
    <>
      <ButtonAddContainer>
        <ButtonAddMovement onClick={toggleModal}>
          Nuevo movimiento
        </ButtonAddMovement>
      </ButtonAddContainer>
      <MainContainer>
        <MovementGraph data={movements} />
        <CardContainer>
          <CardMetric color="green" titulo="total" value={total} moneda="UYU" />
          <CardMetric color="green" titulo="total" value={total} moneda="UYU" />
          <CardMetric color="green" titulo="total" value={total} moneda="UYU" />
        </CardContainer>
      </MainContainer>

      <MovementTable data={movements} />
      <ScrollToUp />

      <Modal title="Nuevo movimiento" open={openModal} toggle={toggleModal}>
        <FormNewMovement onClose={toggleModal} />
      </Modal>

      <ToastContainer draggablePercent={60} autoClose={4000} />
    </>
  );
}
