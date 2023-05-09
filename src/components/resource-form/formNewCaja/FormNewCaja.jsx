import { toast } from "react-toastify";
import { useAppSelector } from "../../../hooks/store";
import { useCajaActions } from "../../../hooks/useCajaActions";

import { Input } from "../../Input";
import { InputGroup } from "../../inputGroup";
import { Select } from "../../select";
import { Option } from "../../option";
import { Button } from "../../button";
import { FooterForm } from "../../footerForm";

const FormNewCaja = ({ onClose }) => {
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
      onClose();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <InputGroup label="Nombre">
        <Input type="text" name="nombre" required />
      </InputGroup>

      <InputGroup label="Monto">
        <Input type="number" name="saldo" required />
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
          <Option value="ITAU">ITAU</Option>
          <Option value="BROU">BROU</Option>
          <Option value="BBVA">BBVA</Option>
          <Option value="SCOTIABANK">SCOTIABANK</Option>
          <Option value="SANTANDER">SANTANDER</Option>
        </Select>
      </InputGroup>

      <FooterForm>
        <Button type="button" color="#ff8080" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit" color="#80ff80" className="mr-2">
          Guardar
        </Button>
      </FooterForm>
    </form>
  );
};

export default FormNewCaja;
