import styled from "styled-components";

const Card = styled.div`
background: rgba(255, 255, 255, 0);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10.2px);
-webkit-backdrop-filter: blur(10.2px);
`

const Caja = (props) => {
  const { caja, index } = props;

  return (
    <Card key={index}>
      <div>
        <h3>{caja.alias}</h3>
        <p>Saldo: {caja.saldo} {caja.moneda}</p>
        <p>Banco: {caja.banco}</p>
        <p>Moneda: {caja.moneda}</p>
        <h3>ahahah</h3>
      </div>
      <div>
        <button>Gestionar</button>
      </div>
    </Card>
  )
}

export default Caja;