import getSymbolFromCurrency from "currency-symbol-map";

export const moneyConverter = (amount, country) => {
  const formatterAmountInThousand = amount / 1000;

  if (country === "ph") {
    const currencySymbol = getSymbolFromCurrency("PHP");
    return `${currencySymbol}${formatterAmountInThousand}k`;
  }
};
