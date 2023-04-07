import { Card, Nombre, Button, List, Item } from "./styled";
import { RiSettings2Line } from "react-icons/ri";

const Caja = (props) => {
  const { caja, index } = props;
  const { saldo, banco, alias, moneda } = caja;

  return (
    <Card key={index}>
      <div>
        <Nombre>{alias}</Nombre>
        <List>
          <Item>Saldo: {saldo}</Item>
          <Item>Moneda: {moneda}</Item>
          <Item>Banco: {banco}</Item>
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
