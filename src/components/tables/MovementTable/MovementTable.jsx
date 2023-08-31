import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/store";
import { useCajaActions } from "../../../hooks/useCajaActions";
import { useMovementActions } from "../../../hooks/useMovementActions";
import {
  ButtonSearchMore,
  IconTrash,
  TableStyle,
  Type,
  TableContainer,
} from "./styled";

import { formatDate } from "../../../utils/formatDate";

const MovementTable = (props) => {
  const { data } = props;
  const { cajas } = useAppSelector((state) => state.caja);
  const [rowsToshow, setRowsToShow] = useState(10);
  const [showMore, setShowMore] = useState(false);
  const { removeOneMovement } = useMovementActions();
  const { shortDate, getHour } = formatDate();
  const { updateMovementCaja } = useCajaActions();
  const orderData = [...data].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  useEffect(() => {
    if (orderData.length > 10) {
      setShowMore(true);
    }
  }, [orderData]);

  const handleShowMore = () => {
    if (rowsToshow >= orderData.length) {
      setShowMore(false);
      return;
    }
    setRowsToShow((prevRows) => prevRows + 10);
  };

  const handleDelete = (id) => {
    const movement = orderData.find((movement) => movement._id === id);
    const { tipo, monto, caja: caja_id } = movement;
    const caja = cajas.find((caja) => caja._id === caja_id);
    const cajaSeleccionada = { ...caja };

    const confirmMessage = `Desea eliminar el movimiento? \n\nATENCIÓN: Este movimiento es de tipo ${tipo}, por lo tanto se eliminará el monto de la cuenta seleccionada.`;
    const shouldMessage = confirm(confirmMessage);

    if (tipo === "entrada") {
      cajaSeleccionada.saldo -= monto;
    } else if (tipo === "salida") {
      cajaSeleccionada.saldo += monto;
    }

    if (shouldMessage) {
      removeOneMovement(id);
      updateMovementCaja(cajaSeleccionada);
    }
  };

  return (
    <>
      <TableContainer>
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
              <th className="text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {orderData.slice(0, rowsToshow).map((movement) => (
              <tr key={"tr-" + movement._id}>
                <Type type={movement.tipo}>{movement.tipo}</Type>
                <td>{movement.rubro}</td>
                <td>{movement.subRubro}</td>
                <td>{movement.detalle}</td>
                <td>{movement.monto}</td>
                <td>{movement.moneda}</td>
                <td>{movement.banco}</td>
                <td>{shortDate(movement.createdAt)}</td>
                <td>{getHour(movement.createdAt)}</td>
                <td className="d-flex justify-center">
                  {movement?._id !== undefined ? (
                    <IconTrash onClick={() => handleDelete(movement._id)} />
                  ) : (
                    <span>Loading...</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </TableStyle>
      </TableContainer>
      <ButtonSearchMore showMore={showMore} onClick={handleShowMore}>
        Ver más
      </ButtonSearchMore>
    </>
  );
};

export default MovementTable;
