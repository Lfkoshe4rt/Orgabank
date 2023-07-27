export const formateUtils = () => {
  const formatNumber = (number) => {
    if (number > 999999999 || number < -999999999) {
      return `${number / 1000000000}B`;
    }

    if (number > 999999 || number < -999999) {
      return `${number / 1000000}M`;
    }

    if (number > 999 || number < -999) {
      return `${number / 1000}k`;
    }

    return number;
  };

  const formatPercentage = (number) => {
    return `${number}%`;
  };

  const formatCurrency = (number) => {
    return `$${number}`;
  };

  const formatCurrencyWithDecimals = (number) => {
    return `$${number.toFixed(2)}`;
  };

  return {
    formatNumber,
    formatPercentage,
    formatCurrency,
    formatCurrencyWithDecimals,
  };
};
