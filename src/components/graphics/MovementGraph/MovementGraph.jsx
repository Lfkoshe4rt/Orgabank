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

import { formateUtils } from "../../../utils/formateUtils";

const MovementGraph = (props) => {
  const { data } = props;
  const { formatNumber } = formateUtils();
  let totalMovement = 0;

  const dataGraph = data.map((movement) => {
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
          <YAxis width={40} tickFormatter={formatNumber} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default MovementGraph;
