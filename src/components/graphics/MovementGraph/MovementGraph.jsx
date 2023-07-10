import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer } from "./styled";

const MovementGraph = (props) => {
  const { data } = props;
  let totalMovement = 0;

  const formatYAxis = (value) => {
    if (value > 999999999 || value < -999999999) {
      return `${value / 1000000000}B`;
    }

    if (value > 999999 || value < -999999) {
      return `${value / 1000000}M`;
    }

    if (value > 999 || value < -999) {
      return `${value / 1000}k`;
    }

    return value;
  };

  const reversedMovements = [...data].reverse();

  const dataGraph = reversedMovements.map((movement, indice) => {
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

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={dataGraph.slice(-10)}>
          <Line
            type="monotone"
            dataKey="monto"
            stroke="#00910c"
            strokeWidth="1.2px"
          />
          <CartesianGrid stroke="#bdbdbd" strokeDasharray="10 10" />
          <XAxis dataKey="cantidad" />
          <YAxis width={40} tickFormatter={formatYAxis} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default MovementGraph;
