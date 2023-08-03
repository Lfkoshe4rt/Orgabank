import { useEffect, useState } from "react";
import { TableStyle, ButtonSearchMore } from "./styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useMovementActions } from "../../../hooks/useMovementActions";

import { formatDate } from "../../../utils/formatDate";

const MovementTable = (props) => {
  const { data } = props;
  const [rowsToshow, setRowsToShow] = useState(10);
  const [showMore, setShowMore] = useState(false);
  const { removeOneMovement } = useMovementActions();
  const { shortDate, getHour } = formatDate();

  useEffect(() => {
    if (data.length > 10) {
      setShowMore(true);
    }
  }, [data]);

  const handleShowMore = () => {
    if (rowsToshow >= data.length) {
      setShowMore(false);
      return;
    }
    setRowsToShow((prevRows) => prevRows + 10);
  };

  const handleDelete = (id) => {
    let exec = confirm("Desea eliminar el movimiento?");

    if (exec) {
      removeOneMovement(id);
    }
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
              <th>id</th>
              <th>Tipo</th>
              <th>Rubro</th>
              <th>Sub rubro</th>
              <th>Detalle</th>
              <th>Monto</th>
              <th>Moneda</th>
              <th>Banco</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th
                style={{
                  textAlign: "center",
                }}
              >
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {[...data]
              .reverse()
              .slice(0, rowsToshow)
              .map((movement) => (
                <tr key={"tr-" + movement._id}>
                  <td>{movement._id}</td>
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
                  <td>{shortDate(movement.createdAt)}</td>
                  <td>{getHour(movement.createdAt)}</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {movement?._id !== undefined ? (
                      <RiDeleteBin6Line
                        style={{ cursor: "pointer" }}
                        color="red"
                        onClick={() => handleDelete(movement._id)}
                      ></RiDeleteBin6Line>
                    ) : (
                      <span>Loading...</span>
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
