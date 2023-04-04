import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const defaultBolsa = {
    descripcion: "",
    porcentaje: 0,
    cantidad: 0,
    moneda: "",
    banco: ""
  }

  const { username, token } = useSelector((state) => state.user);
  const [bolsa, setBolsa] = useState(defaultBolsa);
  const [data, setData] = useState([]);
  const total = localStorage.getItem("total");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setBolsa({
      ...bolsa,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    setBolsa({
      ...bolsa,
      cantidad: total * Number(bolsa.porcentaje) / 1000
    })
  }, [bolsa.porcentaje])

  useEffect(() => {
    const bolsas = JSON.parse(localStorage.getItem("bolsas"));
    if (bolsas) {
      setData(bolsas);
    }
  }, [])


  const getInvertido = () => {
    let invertido = 0;
    data.forEach((bolsa) => {
      invertido += bolsa.cantidad;
    })
    return invertido;
  }

  const totalInvertido = getInvertido();

  const onSubmit = (e) => {
    e.preventDefault();
    setData([...data, bolsa]);
    console.log(data)
    setBolsa(defaultBolsa);

    e.target.reset();
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Username: {username} / Token: {token}
      </p>

      <h2>Capital total: {total} UYU</h2>
      <h2>Total invertido: {totalInvertido} UYU</h2>


      <form style={{ marginTop: 20, textAlign: "center", border: "1px solid black" }} onSubmit={onSubmit}>
        <div>
          <label htmlFor="descripcion">Descripcion: </label>
          <input type="text" name="descripcion" id="descripcion" onChange={handleOnChange} maxLength={60} minLength={0} required placeholder="Investimientos..." />
        </div>
        <div>
          <label htmlFor="porcentaje">Porcentaje: </label>
          <input type="number" name="porcentaje" id="porcentaje" onChange={handleOnChange} placeholder="0" />
        </div>
        <div>
          <label htmlFor="cantidad">Cantidad: </label>
          <input type="number" name="cantidad" defaultValue={bolsa.cantidad > 0 ? bolsa.cantidad : null} id="cantidad" onChange={handleOnChange} placeholder="0" />
        </div>
        <div>
          <label htmlFor="moneda">Moneda: </label>
          <input type="text" name="moneda" id="moneda" onChange={handleOnChange} placeholder="USD" />
        </div>
        <div>
          <label htmlFor="banco">Banco: </label>
          <input type="text" name="banco" id="banco" onChange={handleOnChange} placeholder="BBVA" />
        </div>
        <button>Registrar bolsa</button>
      </form>
      <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
        {
          data.map((bolsa, index) => {
            return (
              <div key={index} style={{ border: "solid 2px red", padding: 5, margin: 5, width: "30%" }}>
                <h3>{bolsa.descripcion}</h3>
                <p>Porcentaje: {bolsa.porcentaje}</p>
                <p>Cantidad: {bolsa.cantidad}</p>
                <p>Moneda: {bolsa.moneda}</p>
                <p>Banco: {bolsa.banco}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}
