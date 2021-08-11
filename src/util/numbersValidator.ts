const numbersValidator = (str: string): string => {
  const lastSymbol = str[str.length - 1];
  if (!Number.isInteger(+lastSymbol) || lastSymbol === ' ' || +str === 0) {
    return str.slice(0, -1);
  }
  return str;
};

export default numbersValidator;
