import { useSelector } from "react-redux";
import { Caja } from "./components/Caja";

export default function Home() {
  const { username, token, cajas } = useSelector((state) => state.user);

  const getTotals = () => {
    let total = 0;
    cajas.forEach((caja) => {
      total += caja.saldo;
    })
    localStorage.setItem("total", total);
    return total;
  }

  const total = getTotals();


  return (
    <>
      {/*    <h1>Bienvenido {username}</h1>

      <p>{token}</p>

      <h2>Capital total: {total} UYU</h2> */}
      {
        cajas.map((caja, index) => {
          return <Caja key={index} caja={caja} />
        })
      }

    </>
  );
}
