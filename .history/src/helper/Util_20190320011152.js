import getSymbolFromCurrency from "currency-symbol-map";

export const moneyConverter = (amount, country) => {
  const formatterAmountInThousand = amount / 1000;

  const currencySymbol = getSymbolFromCurrency("PHP");
  return `${currencySymbol}${formatterAmountInThousand} K`;
};
