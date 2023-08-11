import { toast } from "react-toastify";
import { useAppSelector } from "../../../hooks/store";
import { useCajaActions } from "../../../hooks/useCajaActions";

import { Input } from "../../Input";
import { Button } from "../../button";
import { InputGroup } from "../../inputGroup";
import { Option } from "../../option";
import { Select } from "../../select";

const FormNewCaja = ({ onClose }) => {
  const { _id } = useAppSelector((state) => state.user);
  const { cajas } = useAppSelector((state) => state.caja);

  const { addNewCaja } = useCajaActions();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const alias = form.get("nombre");
    const saldo = form.get("saldo");
    const moneda = form.get("moneda");
    const banco = form.get("banco");

    const check = () => {
      if (caja.alias === "") {
        toast.warn("El nombre no puede estar vació");
        return false;
      }

      if (caja.moneda === "") {
        toast.warn("El nombre no puede estar vació");
        return false;
      }

      if (caja.banco === "") {
        toast.warn("El nombre no puede estar vació");
        return false;
      }

      if (isNaN(caja.saldo)) {
        toast.warn("El monto debe ser un numero");
        return false;
      }

      if (caja.saldo < 0) {
        toast.warn("El monto debe ser mayor a 0");
        return false;
      }

      const exist = cajas.some((caja) => caja.alias === alias);

      if (exist) {
        toast.warn("Ya se registro una caja con ese nombre");
        return false;
      }

      return true;
    };

    const caja = {
      alias,
      saldo: Number(saldo),
      moneda,
      banco,
      user: _id,
    };

    const isValid = check();

    if (isValid) {
      addNewCaja(caja);
      onClose();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <InputGroup label="Nombre">
        <Input type="text" name="nombre" required />
      </InputGroup>

      <InputGroup label="Monto">
        <Input type="number" name="saldo" defaultValue="0" required />
      </InputGroup>

      <InputGroup label="Moneda">
        <Select name="moneda">
          <Option value="UYU">UYU</Option>
          <Option value="USD">USD</Option>
          <Option value="R$">R$</Option>
        </Select>
      </InputGroup>

      <InputGroup label="Banco">
        <Select name="banco">
          <Option value="BANRISUL">BANRISUL</Option>
          <Option value="BROU">BROU</Option>
          <Option value="EFECTIVO">EFECTIVO</Option>
          <Option value="JUBILACION">JUBILACIÓN</Option>
          <Option value="ITAU">ITAU</Option>
          <Option value="MIDINERO">MI DINERO</Option>
          <Option value="PREX">PREX</Option>
        </Select>
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

export default FormNewCaja;
