//Type your code here
function formatValue(value) {
  if (value.length > 3) {
    value = value.substring(0, value.length - 3) + "," + value.substring(value.length - 3, value.length);
  }
  if (value.length > 7) {
    value = value.substring(0, value.length - 7) + "," + value.substring(value.length - 7, value.length);
  }
  if (value.length > 11) {
    value = value.substring(0, value.length - 11) + "," + value.substring(value.length - 11, value.length);
  }
  return value;
}
  
function parseValue(value) {
  if (value.length > 3) {
    value = value.replace(/,/g, '');
  }
  return value;
}