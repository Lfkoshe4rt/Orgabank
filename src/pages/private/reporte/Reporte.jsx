import { ReporteTable } from "../../../components/tables/ReporteTable";
import { useAppSelector } from "../../../hooks/store";
import { useState } from "react";
import styled from "styled-components";

const RadioContainer = styled.div`
  padding: 1rem 0;
  background-color: #d3d3d3;
  margin: 5px 0;
  border-radius: 5px;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid rgb(76, 155, 80);
  float: right;
  border-radius: 5px;
  margin: 10px 0;
  width: 220px;

  @media (max-width: 731px) {
    width: 100%;
  }
`;

const Reporte = () => {
  const [filter, setFilter] = useState("pesos");

  const { movements } = useAppSelector((state) => state.movement);
  const { cajas } = useAppSelector((state) => state.caja);

  const movementsFiltered = movements.filter((movement) => {
    if (filter === "all") {
      return movement;
    } else {
      return movement.caja === filter;
    }
  });

  const onChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Filter>
        <Select onChange={onChangeFilter}>
          <option value="all">Todas las cajas</option>
          {cajas.map((caja) => (
            <option key={caja._id} value={caja._id}>
              {`${caja.alias} - ${caja.banco}`}
            </option>
          ))}
        </Select>
      </Filter>

      <ReporteTable movements={movementsFiltered} />
    </>
  );
};

export default Reporte;
