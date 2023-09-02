import { useState } from "react";

import { RiAddCircleLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";

import { CardMetric } from "../../../components/cardMetric";
import { Modal } from "../../../components/modal";
import { FormNewCaja, FormUpdateCaja } from "../../../components/resource-form";
import { ScrollToUp } from "../../../components/scrollToUp";

import { useAppSelector } from "../../../hooks/store";

import { getAmountAllBoxes } from "../../../utils/getMoney";

import { Caja } from "./components/Caja";
import { Filter } from "./components/Filter";
import { Message } from "./components/message";

import { Header, InvisibleButton, Item, Lista, ListaCajas } from "./styled";

export default function Cajas() {
  const { cajas } = useAppSelector((state) => state.caja);
  const { acc } = getAmountAllBoxes(cajas);

  const [openModalNew, setOpenModalNew] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [boxSelected, setBoxSelected] = useState({});
  const [filter, setFilter] = useState("ALL");

  const reverseCajas = [...cajas].reverse();

  const toggleModalNew = () => setOpenModalNew(!openModalNew);
  const toggleModalUpdate = () => setOpenModalUpdate(!openModalUpdate);

  const filteredList = reverseCajas.filter(
    (caja) => caja.moneda.includes(filter) || filter === "ALL"
  );

  return (
    <>
      <Header className="mt-3">
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

      {reverseCajas.length === 0 && (
        <Message>
          Aún no hay cajas registradas click en el botón para registrar una
        </Message>
      )}

      <div>
        {reverseCajas.length > 0 && (
          <Filter setFilter={setFilter} filter={filter} />
        )}

        <ListaCajas>
          {filteredList.map((caja, index) => {
            return (
              <Item key={index}>
                <Caja
                  caja={caja}
                  setBoxSelected={setBoxSelected}
                  openUpdateModal={toggleModalUpdate}
                />
              </Item>
            );
          })}
        </ListaCajas>
      </div>

      <InvisibleButton onClick={toggleModalNew} className="m-auto pt-3 pb-3">
        <RiAddCircleLine size={40} />
      </InvisibleButton>

      <Modal title="Agregar caja" open={openModalNew} toggle={toggleModalNew}>
        <FormNewCaja onClose={toggleModalNew} />
      </Modal>

      <Modal
        title="Modificar caja"
        open={openModalUpdate}
        toggle={toggleModalUpdate}
      >
        <FormUpdateCaja box={boxSelected} onClose={toggleModalUpdate} />
      </Modal>

      <ScrollToUp />
      <ToastContainer draggablePercent={60} autoClose={4000} />
    </>
  );
}
