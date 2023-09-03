import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/store";
import { useCajaActions } from "../../../hooks/useCajaActions";
import { useMovementActions } from "../../../hooks/useMovementActions";
import { formatDate } from "../../../utils/formatDate";
import { sortMovements } from "../../../utils/sortMovements";
import {
  ButtonSearchMore,
  IconTrash,
  Pending,
  TableContainer,
  TableStyle,
  Type,
} from "./styled";

const MovementTable = (props) => {
  const { data } = props;

  const { cajas } = useAppSelector((state) => state.caja);

  const [rowsToshow, setRowsToShow] = useState(10);
  const [showMore, setShowMore] = useState(false);

  const { removeOneMovement } = useMovementActions();
  const { updateMovementCaja } = useCajaActions();

  const { shortDate, getHour } = formatDate();

  const orderData = sortMovements(data);

  useEffect(() => {
    if (orderData.length > 10) {
      setShowMore(true);
    }
  }, [orderData]);

  const handleShowMore = () => {
    if (rowsToshow >= orderData.length) {
      setShowMore(false);
    }
    setRowsToShow((prevRows) => prevRows + 10);
  };

  const handleDelete = (movement) => {
    const { _id, tipo, monto, caja: cajaId } = movement;

    const exist = cajas.find((caja) => caja._id === cajaId);

    const cajaSelected = { ...exist };

    const confirmMessage = `Desea eliminar el movimiento? \n\nATENCIÓN: Este movimiento es de tipo ${tipo}, por lo tanto se ${
      tipo === "entrada" ? "restará" : "sumará"
    } el monto de la cuenta seleccionada.`;

    const shouldDelete = confirm(confirmMessage);

    if (tipo === "entrada") {
      cajaSelected.saldo -= monto;
    } else if (tipo === "salida") {
      cajaSelected.saldo += monto;
    }

    if (shouldDelete) {
      removeOneMovement(_id);
      updateMovementCaja(cajaSelected);
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
            {orderData.slice(0, rowsToshow).map((movement) => {
              const {
                _id,
                tipo,
                rubro,
                subRubro,
                detalle,
                moneda,
                banco,
                createdAt,
                monto,
              } = movement;

              return (
                <tr key={`tr-${_id}`}>
                  <Type type={tipo}>{tipo}</Type>
                  <td>{rubro}</td>
                  <td>{subRubro}</td>
                  <td>{detalle}</td>
                  <td>{monto}</td>
                  <td>{moneda}</td>
                  <td>{banco}</td>
                  <td>{shortDate(createdAt)}</td>
                  <td>{getHour(createdAt)}</td>
                  <td className="d-flex justify-center">
                    {_id ? (
                      <IconTrash onClick={() => handleDelete(movement)} />
                    ) : (
                      <Pending>Pending...</Pending>
                    )}
                  </td>
                </tr>
              );
            })}
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
