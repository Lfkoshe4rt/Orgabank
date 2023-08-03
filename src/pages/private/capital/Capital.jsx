import styled from "styled-components";
import { CardMetric } from "../../../components/cardMetric";
import { MovementGraph } from "../../../components/graphics/MovementGraph";
import { ScrollToUp } from "../../../components/scrollToUp";
import { MovementTable } from "../../../components/tables/MovementTable";
import { useAppSelector } from "../../../hooks/store";
import { Modal } from "../../../components/modal";
import { useState } from "react";
import { FormNewMovement } from "../../../components/resource-form/formNewMovement";
import { ToastContainer } from "react-toastify";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 731px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 731px) {
    margin: 20px 0;
    gap: 20px;
    padding: 0;
  }
`;

const ButtonAddMovement = styled.button`
  padding: 6px 40px;
  border: 1px solid rgb(76, 155, 80);
  border-radius: 5px;
  background-color: rgb(76, 175, 80);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(76, 155, 80);
  }

  @media (max-width: 320px) {
    width: 100%;
    padding: 3px;
  }
`;

const ButtonAddContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const { _id } = useAppSelector((state) => state.user);
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
