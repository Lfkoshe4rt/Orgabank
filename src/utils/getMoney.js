export const getAmountAllBoxes = ({ cajas }) => {
  let acc = {
    totalUYU: 0,
    totalUSD: 0,
    totalR$: 0,
    totalEnUYU: 0,
    totalEnUSD: 0,
  };

  cajas.forEach((caja) => {
    if (caja.moneda === "UYU") {
      acc.totalUYU += caja.saldo;
    }

    if (caja.moneda === "USD") {
      acc.totalUSD += caja.saldo;
    }

    if (caja.moneda === "R$") {
      acc.totalR$ += caja.saldo;
    }
  });

  acc.totalEnUYU = acc.totalUYU + acc.totalUSD * 38 + acc.totalR$ * 9;

  acc.totalEnUSD = acc.totalUYU / 38 + acc.totalUSD + acc.totalR$ * 0.2;

  return { acc };
};
