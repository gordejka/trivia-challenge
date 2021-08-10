const stringToHtmlDecode = (str: string): string => {
  const e = document.createElement('textarea');
  e.innerHTML = str;
  if (e.childNodes[0].nodeValue) {
    return e.childNodes[0].nodeValue;
  }
  return '';
};
export default stringToHtmlDecode;
