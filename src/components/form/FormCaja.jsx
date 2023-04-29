import { toast } from "react-toastify";
import { useAppSelector } from "../../hooks/store";
import { useCajaActions } from "../../hooks/useCajaActions";
import { Input, InputGroup, Label, Option, Select } from "./styled/styled";

const FormCaja = (props) => {
  const { _id } = useAppSelector((state) => state.user);
  const { cajas } = useAppSelector((state) => state.caja);

  const { modifyCaja } = useCajaActions();
  const onSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const alias = form.get("nombre");
    const saldo = form.get("saldo");
    const moneda = form.get("moneda");
    const banco = form.get("banco");

    const caja = {
      alias,
      saldo: Number(saldo),
      moneda,
      banco,
      user: _id,
    };

    const exist = cajas.some((c) => c.alias === alias);

    if (exist) {
      toast.warn("Ya se registro una caja con ese nombre");
    } else {
      modifyCaja(caja);
      e.target.reset();
    }
  };

  return (
    <form id="formCaja" onSubmit={onSubmit}>
      <InputGroup>
        <Label>Nombre</Label>
        <Input type="text" name="nombre" required />
      </InputGroup>

      <InputGroup>
        <Label>Monto</Label>
        <Input type="number" name="saldo" required />
      </InputGroup>

      <InputGroup>
        <Label>Moneda</Label>
        <Select name="moneda">
          <Option value="UYU">UYU</Option>
          <Option value="USD">USD</Option>
          <Option value="R$">R$</Option>
        </Select>
      </InputGroup>

      <InputGroup>
        <Label>Banco</Label>
        <Select name="banco">
          <Option value="ITAU">ITAU</Option>
          <Option value="BROU">BROU</Option>
          <Option value="BBVA">BBVA</Option>
          <Option value="SCOTIABANK">SCOTIABANK</Option>
          <Option value="SANTANDER">SANTANDER</Option>
        </Select>
      </InputGroup>
      <button>Registrar test</button>
    </form>
  );
};

export default FormCaja;
