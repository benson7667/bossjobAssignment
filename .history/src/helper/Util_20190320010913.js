import getSymbolFromCurrency from "currency-symbol-map";

export const moneyConverter = (amount, country) => {
  const formatterAmountInThousand = amount / 1000;

  if (country === "PH") {
    const currencySymbol = getSymbolFromCurrency(country);
    return `${currencySymbol}${formatterAmountInThousand} K`;
  }
};
