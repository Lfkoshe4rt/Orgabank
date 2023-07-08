import { useState } from "react";
import styled from "styled-components";
import { ScrollToUp } from "../../../components/scrollToUp";
import { useAppSelector } from "../../../hooks/store";
import { CardMetric } from "../../../components/cardMetric";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect } from "react";

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 100%;
  margin: 0 auto;

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    white-space: nowrap;
  }
  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  tr:hover {
    background-color: #ddd;
  }
`;

const ButtonSearchMore = styled.button`
  display: ${({ showMore }) => (showMore ? "block" : "none")};
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ddd;
  }
`;

const ChartContainer = styled.div`
  width: 70%;
  height: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding-left: 20px;

  @media (max-width: 768px) {
    margin: 20px 0;
    gap: 20px;
    padding: 0;
  }
`;

export default function Dashboard() {
  const { _id } = useAppSelector((state) => state.user);
  const { movements } = useAppSelector((state) => state.movement);
  const [rowsToshow, setRowsToShow] = useState(10);
  const [showMore, setShowMore] = useState(false);

  const reversedMovements = [...movements].reverse();

  let totalMovement = 0;

  const data = reversedMovements.map((movement, indice) => {
    if (movement.tipo === "entrada") {
      totalMovement += movement.monto;
    } else {
      totalMovement -= movement.monto;
    }
    return {
      cantidad: movement.tipo === "entrada" ? movement.monto : -movement.monto,
      monto: totalMovement,
    };
  });

  useEffect(() => {
    if (movements.length > 10) {
      setShowMore(true);
    }
  }, [movements]);

  const handleShowMore = () => {
    if (rowsToshow >= movements.length) {
      setShowMore(false);
      return;
    }
    setRowsToShow((prevRows) => prevRows + 10);
  };

  const total = movements.reduce((acc, movement) => {
    if (movement.tipo === "entrada") {
      return acc + movement.monto;
    } else {
      return acc - movement.monto;
    }
  }, 0);

  return (
    <>
      <MainContainer>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data.slice(-10)}
              margin={{
                top: 5,
                right: 30,
                left: 30,
                bottom: 5,
              }}
            >
              <Line
                type="monotone"
                dataKey="monto"
                stroke="#00910c"
                strokeWidth="1px"
              />
              <CartesianGrid stroke="#bdbdbd" strokeDasharray="10 10" />
              <XAxis dataKey="cantidad" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <CardContainer>
          <CardMetric color="green" titulo="total" value={total} moneda="UYU" />
          <CardMetric color="green" titulo="total" value={total} moneda="UYU" />
          <CardMetric color="green" titulo="total" value={total} moneda="UYU" />
        </CardContainer>
      </MainContainer>

      <div
        style={{
          overflowX: "auto",
          padding: "30px 0",
        }}
      >
        <Table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Rubro</th>
              <th>Sub rubro</th>
              <th>Detalle</th>
              <th>Monto</th>
              <th>Moneda</th>
              <th>Banco</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {movements.slice(0, rowsToshow).map((movement) => (
              <tr key={movement._id}>
                <td
                  style={{
                    color: movement.tipo === "entrada" ? "green" : "red",
                  }}
                >
                  {movement.tipo}
                </td>
                <td>{movement.rubro}</td>
                <td>{movement.subRubro}</td>
                <td>{movement.detalle}</td>
                <td>{movement.monto}</td>
                <td>{movement.moneda}</td>
                <td>{movement.banco}</td>
                <td>{movement.createdAt.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonSearchMore showMore={showMore} onClick={handleShowMore}>
          Ver más
        </ButtonSearchMore>
      </div>

      <ScrollToUp />
    </>
  );
}
