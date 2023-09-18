import { ReporteTable } from "../../../components/tables/ReporteTable";
import { useAppSelector } from "../../../hooks/store";
import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const Input = styled.input`
  margin-left: 0.5rem;
`;

const RadioContainer = styled.div`
  padding: 1rem 0;
  background-color: #d3d3d3;
  margin: 5px 0;
  border-radius: 5px;
`;

const Reporte = () => {
  const [filterAllMovements, setFilterAllMovements] = useState("pesos");

  const { movements } = useAppSelector((state) => state.movement);

  const filteredMovements = movements?.filter((movement) => {
    if (filterAllMovements === "pesos") {
      return movement.moneda === "UYU";
    } else if (filterAllMovements === "reales") {
      return movement.moneda === "R$";
    }
  });

  const onChangeRadio = (e) => {
    setFilterAllMovements(e.target.value);
  };

  return (
    <>
      <RadioContainer>
        <Label htmlFor="pesos">
          Pesos
          <Input
            id="pesos"
            type="radio"
            name="moneda"
            value={"pesos"}
            onChange={onChangeRadio}
            checked={filterAllMovements === "pesos"}
          />
        </Label>

        <Label htmlFor="reales">
          Reales
          <Input
            id="reales"
            type="radio"
            name="moneda"
            value="reales"
            onChange={onChangeRadio}
            checked={filterAllMovements === "reales"}
          />
        </Label>
      </RadioContainer>

      <ReporteTable movements={filteredMovements} />
    </>
  );
};

export default Reporte;
