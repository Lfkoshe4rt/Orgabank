export const getAmountAllBoxes = (items) => {
  let acc = {
    totalUYU: 0,
    totalUSD: 0,
    totalR$: 0,
  };

  items.forEach((item) => {
    if (item.moneda === "UYU") {
      acc.totalUYU += item.saldo;
    }

    if (item.moneda === "USD") {
      acc.totalUSD += item.saldo;
    }

    if (item.moneda === "R$") {
      acc.totalR$ += item.saldo;
    }
  });

  return { acc };
};

export const getAmountAllMovements = (items) => {
  let acc = {
    totalUYU: 0,
    totalUSD: 0,
    totalR$: 0,
  };

  items.forEach((item) => {
    if (item.moneda === "UYU" && item.tipo === "entrada") {
      acc.totalUYU += item.monto;
    }

    if (item.moneda === "USD" && item.tipo === "entrada") {
      acc.totalUSD += item.monto;
    }

    if (item.moneda === "R$" && item.tipo === "entrada") {
      acc.totalR$ += item.monto;
    }

    if (item.moneda === "UYU" && item.tipo === "salida") {
      acc.totalUYU -= item.monto;
    }

    if (item.moneda === "USD" && item.tipo === "salida") {
      acc.totalUSD -= item.monto;
    }

    if (item.moneda === "R$" && item.tipo === "salida") {
      acc.totalR$ -= item.monto;
    }
  });

  return { acc };
};
