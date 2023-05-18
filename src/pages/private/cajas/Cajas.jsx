import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";

import { CardMetric } from "../../../components/cardMetric";
import { Modal } from "../../../components/modal";
import { FormNewCaja, FormUpdateCaja } from "../../../components/resource-form";
import { ScrollToUp } from "../../../components/scrollToUp";
import { Caja } from "./components/Caja";
import { Message } from "./components/message";

import { useAppSelector } from "../../../hooks/store";

import { getAmountAllBoxes } from "../../../utilities/getMoney";

import { Header, InvisibleButton, Item, Lista, ListaCajas } from "./styled";

export default function Cajas() {
  const [openModalNew, setOpenModalNew] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [boxSelected, setBoxSelected] = useState({});
  const { cajas } = useAppSelector((state) => state.caja);

  const { acc } = getAmountAllBoxes({ cajas });

  const reverseCajas = [...cajas].reverse();

  const handleCloseModalNew = () => setOpenModalNew(false);
  const handleOpenModalNew = () => setOpenModalNew(true);

  const handleCloseModalUpdate = () => setOpenModalUpdate(false);
  const handleOpenModalUpdate = () => setOpenModalUpdate(true);

  return (
    <>
      <Header className="mt-3">
        <Lista>
          <Item>
            <CardMetric
              color="purple"
              titulo="capital total"
              value={acc.totalEnUYU.toFixed(2)}
              moneda="UYU"
            />
          </Item>
          <Item>
            <CardMetric
              color="red"
              titulo="capital total"
              value={acc.totalEnUSD.toFixed(2)}
              moneda="USD"
            />
          </Item>
        </Lista>

        <Lista>
          <Item>
            <CardMetric
              color="purple"
              titulo="total"
              value={acc.totalUYU.toFixed(2)}
              moneda="UYU"
            />
          </Item>
          <Item>
            <CardMetric
              color="red"
              titulo="total"
              value={acc.totalUSD.toFixed(2)}
              moneda="USD"
            />
          </Item>
          <Item>
            <CardMetric
              color="violet"
              titulo="total"
              value={acc.totalR$.toFixed(2)}
              moneda="R$"
            />
          </Item>
        </Lista>
      </Header>

      <ListaCajas>
        {reverseCajas.length === 0 && (
          <Message>
            Aún no hay cajas registradas click en el boton para agregar una
          </Message>
        )}
        {reverseCajas.map((caja, index) => {
          return (
            <Item key={index}>
              <Caja
                caja={caja}
                setBoxSelected={setBoxSelected}
                openUpdateModal={handleOpenModalUpdate}
              />
            </Item>
          );
        })}
      </ListaCajas>

      <InvisibleButton
        onClick={handleOpenModalNew}
        className="m-auto pt-3 pb-3"
      >
        <RiAddCircleLine size={40} />
      </InvisibleButton>

      <Modal
        title="Agregar caja"
        open={openModalNew}
        onClose={handleCloseModalNew}
      >
        <FormNewCaja onClose={handleCloseModalNew} />
      </Modal>

      <Modal
        title="Modificar caja"
        open={openModalUpdate}
        onClose={handleCloseModalUpdate}
      >
        <FormUpdateCaja box={boxSelected} onClose={handleCloseModalUpdate} />
      </Modal>

      <ScrollToUp />
      <ToastContainer draggablePercent={60} autoClose={4000} />
    </>
  );
}
