import { RiSettings2Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { Button, Card, Item, List, Nombre } from "./styled";

const Caja = (props) => {
  const { caja, index, setBoxSelected, openUpdateModal } = props;
  const { saldo, banco, alias, moneda, _id } = caja;

  const color = {
    USD: "red",
    R$: "violet",
    UYU: "purple",
  };

  return (
    <Card color={color[moneda]} key={index}>
      <div>
        <Nombre>{alias}</Nombre>
        <List>
          <Item>Saldo: {saldo}</Item>
          <Item>Moneda: {moneda}</Item>
          <Item>Banco: {banco}</Item>
        </List>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Button
          className="mb-1"
          title="Gestionar"
          onClick={() => {
            if (!_id) {
              toast.warn("Aún no se puede editar esta caja");
            } else {
              setBoxSelected(caja);
              openUpdateModal();
            }
          }}
        >
          <RiSettings2Line size="1.5rem" />
        </Button>
      </div>
    </Card>
  );
};

export default Caja;
