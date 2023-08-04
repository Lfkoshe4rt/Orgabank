import { useAppSelector } from "../../../hooks/store";
import { useMovementActions } from "../../../hooks/useMovementActions";
import { Input } from "../../Input";
import { Button } from "../../button";
import { InputGroup } from "../../inputGroup";
import { Option } from "../../option";
import { Select } from "../../select";
import { useState } from "react";

const FormNewMovement = ({ onClose }) => {
  const { _id } = useAppSelector((state) => state.user);
  const { addOneMovement } = useMovementActions();
  const { cajas } = useAppSelector((state) => state.caja);

  const prototypeCaja = {
    moneda: "",
    banco: "",
  };

  const [cajaSelected, setCajaSelected] = useState(cajas[0] || prototypeCaja);

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const tipo = form.get("tipo");
    const rubro = form.get("rubro");
    const subRubro = form.get("subRubro");
    const detalle = form.get("detalle");
    const moneda = form.get("moneda");
    const banco = form.get("banco");
    const monto = form.get("monto");

    const movement = {
      tipo: tipo.toLowerCase(),
      rubro,
      subRubro,
      detalle,
      monto: Number(monto),
      moneda,
      banco,
      user: _id,
      createdAt: new Date().toISOString(),
    };

    addOneMovement(movement);

    onClose();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleChange(e) {
    const selected = cajas.find((caja) => caja._id === e.target.value);
    setCajaSelected(selected);
  }

  return (
    <form onSubmit={onSubmit}>
      <InputGroup label="Tipo">
        <Select name="tipo">
          <Option value="Entrada">Entrada</Option>
          <Option value="Salida">Salida</Option>
        </Select>
      </InputGroup>

      <InputGroup label="Rubro">
        <Input type="text" name="rubro" required />
      </InputGroup>

      <InputGroup label="Sub rubro">
        <Input type="text" name="subRubro" required />
      </InputGroup>

      <InputGroup label="Detalle">
        <Input type="text" name="detalle" required />
      </InputGroup>

      <InputGroup label="Monto">
        <Input type="number" name="monto" required />
      </InputGroup>

      <InputGroup label="Caja">
        <Select name="caja" onChange={handleChange}>
          {cajas.map((caja) => (
            <Option key={caja._id} value={caja._id}>
              {caja.alias}
            </Option>
          ))}
        </Select>
      </InputGroup>

      <InputGroup label="Moneda">
        <Input
          type="text"
          name="moneda"
          value={cajaSelected.moneda}
          readOnly={true}
        ></Input>
      </InputGroup>

      <InputGroup label="Banco">
        <Input
          type="text"
          name="banco"
          value={cajaSelected.banco}
          readOnly={true}
        ></Input>
      </InputGroup>
      <div className="d-flex justify-end">
        <Button
          type="submit"
          colorText="white"
          color="#39853c"
          colorHover="#2a6f2a"
          className="mr-2"
        >
          Guardar
        </Button>

        <Button
          type="button"
          colorText="white"
          color="#f02f2f"
          colorHover="#b90909"
          onClick={onClose}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default FormNewMovement;
