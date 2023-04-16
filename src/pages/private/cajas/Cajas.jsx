import { RiAddCircleLine } from "react-icons/ri";
import { CardMetric } from "../../../components/cardMetric";
import { getAmountAllBoxes } from "../../../hooks/getMoney";
import { useAppSelector } from "../../../hooks/store";
import { useUserActions } from "../../../hooks/useUserActions";
import { Caja } from "./components/Caja";
import { Header, InvisibleButton, Item, Lista, ListaCajas } from "./styled";

export default function Home() {
  const { cajas } = useAppSelector((state) => state.user);
  const { acc } = getAmountAllBoxes({ cajas });
  const { modifyUser } = useUserActions();

  const onSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const alias = form.get("nombre");
    const saldo = form.get("saldo");
    const moneda = form.get("moneda");
    const banco = form.get("banco");

    modifyUser({
      cajas: [
        ...cajas,
        {
          alias,
          saldo: Number(saldo),
          moneda,
          banco,
        },
      ],
    });
  };

  return (
    <>
      <Header className="mt-3">
        <Lista>
          <Item>
            <CardMetric
              color="purple"
              titulo="capital total"
              value={acc.totalUYU.toFixed(2)}
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
              <Caja caja={caja} />
            </Item>
          );
        })}
      </ListaCajas>

      <form onSubmit={onSubmit}>
        <input type="text" name="nombre" />
        <input type="text" name="saldo" />
        <input type="text" name="moneda" />
        <input type="text" name="banco" />

        <InvisibleButton
          className="m-auto pt-3 pb-3"
          onClick={() => console.log("aa")}
        >
          <RiAddCircleLine color="green" size={40} />
        </InvisibleButton>
      </form>
    </>
  );
}
