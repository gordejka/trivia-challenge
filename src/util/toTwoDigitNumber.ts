const toTwoDigitNumber = (number: number): string | number => {
  return number.toString().length === 1 ? `0${number}` : number;
};
export default toTwoDigitNumber;
