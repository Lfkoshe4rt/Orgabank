import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import { CardMetric } from "../../../components/cardMetric";
import { FormCaja } from "../../../components/form";
import { Modal } from "../../../components/modal";
import { useAppSelector } from "../../../hooks/store";
import { getAmountAllBoxes } from "../../../utilities/getMoney";
import { Caja } from "./components/Caja";
import { Header, InvisibleButton, Item, Lista, ListaCajas } from "./styled";
import { ScrollToUp } from "../../../components/scrollToUp";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [boxSelected, setBoxSelected] = useState({});
  const { cajas } = useAppSelector((state) => state.caja);

  const { acc } = getAmountAllBoxes({ cajas });

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

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
        {cajas.map((caja, index) => {
          return (
            <Item key={index}>
              <Caja caja={caja} setBoxSelected={setBoxSelected} />
            </Item>
          );
        })}
      </ListaCajas>

      <InvisibleButton onClick={handleOpenModal} className="m-auto pt-3 pb-3">
        <RiAddCircleLine color="green" size={40} />
      </InvisibleButton>

      <Modal title="Agregar caja" open={openModal} onClose={handleCloseModal}>
        <FormCaja onClose={handleCloseModal} />
      </Modal>

      <ScrollToUp />
      <ToastContainer draggablePercent={60} autoClose={4000} />
    </>
  );
}
