import { useAppSelector } from "../../../hooks/store";
import { useCajaActions } from "../../../hooks/useCajaActions";

import { toast } from "react-toastify";
import { Input } from "../../Input";
import { Button } from "../../button";
import { InputGroup } from "../../inputGroup";
import { Option } from "../../option";
import { Select } from "../../select";

const FormUpdateCaja = (props) => {
  const { box, onClose } = props;
  const { updateCaja } = useCajaActions();
  const { cajas } = useAppSelector((state) => state.caja);

  const onSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const alias = form.get("nombre");
    const saldo = form.get("saldo");
    const moneda = form.get("moneda");
    const banco = form.get("banco");

    const caja = {
      _id: box._id,
      alias,
      saldo: Number(saldo),
      moneda,
      banco,
      user: box.user,
    };

    const exist = cajas.some((c) => c.alias === alias && c._id !== box._id);

    if (exist) {
      toast.warn("Ya existe una caja con ese nombre");
    } else {
      updateCaja(caja);
      onClose();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <InputGroup label="Nombre">
        <Input type="text" name="nombre" required value={box.alias} />
      </InputGroup>

      <InputGroup label="Monto">
        <Input type="number" name="saldo" required value={box.saldo} />
      </InputGroup>

      <InputGroup label="Moneda">
        <Select name="moneda" value={box.moneda}>
          <Option value="UYU">UYU</Option>
          <Option value="USD">USD</Option>
          <Option value="R$">R$</Option>
        </Select>
      </InputGroup>

      <InputGroup label="Banco">
        <Select name="banco" value={box.banco}>
          <Option value="ITAU">ITAU</Option>
          <Option value="BROU">BROU</Option>
          <Option value="BBVA">BBVA</Option>
          <Option value="SCOTIABANK">SCOTIABANK</Option>
          <Option value="SANTANDER">SANTANDER</Option>
        </Select>
      </InputGroup>

      <div className="d-flex justify-between">
        <Button type="button" color="#f75050">
          Eliminar
        </Button>

        <div>
          <Button type="submit" color="#80ff80" className="mr-2">
            Guardar
          </Button>

          <Button type="button" color="#ff8080" onClick={onClose}>
            Cancelar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormUpdateCaja;
