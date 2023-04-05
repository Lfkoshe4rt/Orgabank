import { Card, Nombre, Button, List, Item } from "./styled";
import { RiSettings2Line } from "react-icons/ri";

const Caja = (props) => {
  const { caja, index } = props;

  return (
    <Card key={index}>
      <div>
        <Nombre>{caja.alias}</Nombre>
        <List>
          <Item>Saldo: {caja.saldo}</Item>
          <Item>Moneda: {caja.moneda}</Item>
          <Item>Banco: {caja.banco}</Item>
        </List>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Button className="mb-1" title="Gestionar">
          <RiSettings2Line size="1.5rem" />
        </Button>
      </div>
    </Card>
  );
};

export default Caja;
