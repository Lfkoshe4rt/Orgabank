import { useSelector } from "react-redux";
import { Caja } from "./components/Caja";
import { Item, List, LetrasChicas, Moneda, Titulo, Header } from "./styled";

export default function Home() {
  const { username, token, cajas } = useSelector((state) => state.user);

  const getTotals = () => {
    let conversionUSD = 38;
    let conversionR$ = 9.1;
    let totalUSD = 0;
    let totalUYU = 0;
    let totalR$ = 0;
    let total = 200;
    let total1 = 0;

    cajas.forEach((caja) => {
      if (caja.moneda === "USD") {
        totalUSD += caja.saldo;
      } else if (caja.moneda === "R$") {
        totalR$ += caja.saldo;
      } else {
        totalUYU += caja.saldo;
      }
    });

    total = totalUYU + totalR$ * conversionR$ + totalUSD * conversionUSD;
    total1 = total / conversionUSD;

    const result = {
      totalUYU,
      totalUSD,
      totalR$,
      total: total.toFixed(2),
      total1: total1.toFixed(2),
    };

    localStorage.setItem("total", JSON.stringify(result));
    return result;
  };

  const resultTotal = getTotals();

  return (
    <>
      <Header>
        <List>
          <Item color="purple">
            <div className="ml-3">
              <Titulo>
                <LetrasChicas>CAPITAL TOTAL</LetrasChicas>
              </Titulo>
              <Moneda>
                $ {resultTotal.total} <LetrasChicas>UYU</LetrasChicas>
              </Moneda>
            </div>
          </Item>
          <Item color="red">
            <div className="ml-3">
              <Titulo>
                <LetrasChicas>CAPITAL TOTAL</LetrasChicas>
              </Titulo>
              <Moneda>
                $ {resultTotal.total1} <LetrasChicas>USD</LetrasChicas>
              </Moneda>
            </div>
          </Item>
        </List>

        <List>

          <Item color="purple">
            <div className="ml-3">
              <Titulo>
                <LetrasChicas>TOTAL</LetrasChicas>
              </Titulo>
              <Moneda>
                $ {resultTotal.totalUYU} <LetrasChicas>UYU</LetrasChicas>
              </Moneda>
            </div>
          </Item>

          <Item color="red">
            <div className="ml-3">
              <Titulo>
                <LetrasChicas>TOTAL</LetrasChicas>
              </Titulo>
              <Moneda>
                $ {resultTotal.totalUSD} <LetrasChicas>USD</LetrasChicas>
              </Moneda>
            </div>
          </Item>

          <Item color="violet">
            <div className="ml-3">
              <Titulo>
                <LetrasChicas>TOTAL</LetrasChicas>
              </Titulo>
              <Moneda>
                $ {resultTotal.totalR$} <LetrasChicas>R$</LetrasChicas>
              </Moneda>
            </div>
          </Item>

        </List>
      </Header>


      {cajas.map((caja, index) => {
        return <Caja key={index} caja={caja} />;
      })}


    </>
  );
}
