import { useEffect, useState } from "react";
import { TableStyle, ButtonSearchMore } from "./styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useMovementActions } from "../../../hooks/useMovementActions";
import { useCajaActions } from "../../../hooks/useCajaActions";
import { useAppSelector } from "../../../hooks/store";

import { formatDate } from "../../../utils/formatDate";

const MovementTable = (props) => {
  const { data } = props;
  const { cajas } = useAppSelector((state) => state.caja);
  const [rowsToshow, setRowsToShow] = useState(10);
  const [showMore, setShowMore] = useState(false);
  const { removeOneMovement } = useMovementActions();
  const { shortDate, getHour } = formatDate();
  const { updateMovementCaja } = useCajaActions();

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
    const movement = data.find((movement) => movement._id === id);
    const cajaSelected = cajas.find((caja) => caja._id === movement.caja);
    const cajaSeleccionada = { ...cajaSelected };

    if (movement.tipo === "entrada") {
      let exec = confirm(
        "Desea eliminar el movimiento? \n\nATENCIÓN: Este movimiento es de tipo entrada, por lo tanto se eliminará el monto de la cuenta seleccionada."
      );

      cajaSeleccionada.saldo = cajaSeleccionada.saldo - movement.monto;

      if (exec) {
        updateMovementCaja(cajaSeleccionada);
        removeOneMovement(id);
      }
      return;
    } else {
      let exec = confirm(
        "Desea eliminar el movimiento? \n\nATENCIÓN: Este movimiento es de tipo salida, por lo tanto se agregará el monto a la cuenta seleccionada."
      );
      cajaSeleccionada.saldo = cajaSeleccionada.saldo + movement.monto;
      if (exec) {
        removeOneMovement(id);
        updateMovementCaja(cajaSeleccionada);
      }
      return;
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
