import { useEffect, useState } from "react";
import { TableStyle, ButtonSearchMore } from "./styled";

const MovementTable = (props) => {
  const { data } = props;
  const [rowsToshow, setRowsToShow] = useState(10);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (data.length > 10) {
      setShowMore(true);
    }
  }, [data]);

  const generateTemporalId = () => {
    return Math.random().toString(24);
  };

  const handleShowMore = () => {
    if (rowsToshow >= data.length) {
      setShowMore(false);
      return;
    }
    setRowsToShow((prevRows) => prevRows + 10);
  };

  return (
    <>
      <div
        style={{
          overflowX: "auto",
        }}
      >
        <TableStyle>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Rubro</th>
              <th>Sub rubro</th>
              <th>Detalle</th>
              <th>Monto</th>
              <th>Mneda</th>
              <th>Banco</th>
              <th>Fecha</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {[...data]
              .reverse()
              .slice(0, rowsToshow)
              .map((movement) => (
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
                  <td>
                    {movement?._id !== undefined ? (
                      <button
                        onClick={() => {
                          console.log(movement._id);
                        }}
                      >
                        Eliminar
                      </button>
                    ) : (
                      <span>Pending</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </TableStyle>
      </div>
      <ButtonSearchMore showMore={showMore} onClick={handleShowMore}>
        Ver más
      </ButtonSearchMore>
    </>
  );
};

export default MovementTable;
