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
  Select,
  Filter,
} from "./styled";

import { getAmountAllMovements } from "../../../utils/getMoney";

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState("all");

  const { movements } = useAppSelector((state) => state.movement);
  const { cajas } = useAppSelector((state) => state.caja);
  const { acc } = getAmountAllMovements(movements);

  const movementsFiltered = movements.filter((movement) => {
    if (filter === "all") {
      return movement;
    } else {
      return movement.caja === filter;
    }
  });

  const toggleModal = () => setOpenModal(!openModal);

  const onChangeFilter = (e) => {
    setFilter(e.target.value);
  };

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
          <CardMetric
            color="purple"
            titulo="total"
            value={acc.totalUYU}
            moneda="UYU"
          />

          <CardMetric
            color="red"
            titulo="total"
            value={acc.totalUSD}
            moneda="USD"
          />
          <CardMetric
            color="violet"
            titulo="total"
            value={acc.totalR$}
            moneda="R$"
          />
        </CardContainer>
      </MainContainer>

      <Filter>
        <Select onChange={onChangeFilter}>
          <option value="all">Todas las cajas</option>
          {cajas.map((caja) => (
            <option
              onClick={() => console.log(caja._id)}
              key={caja._id}
              value={caja._id}
            >
              {caja.alias}
            </option>
          ))}
        </Select>
      </Filter>

      <MovementTable data={movementsFiltered} />
      <ScrollToUp />

      <Modal title="Nuevo movimiento" open={openModal} toggle={toggleModal}>
        <FormNewMovement onClose={toggleModal} />
      </Modal>

      <ToastContainer draggablePercent={60} autoClose={4000} />
    </>
  );
}
