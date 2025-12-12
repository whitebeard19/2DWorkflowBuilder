export function toCamelCase(str) {
  // Split the string by spaces
  const words = str.split(' ');

  // Convert the first word to lowercase
  let camelCaseStr = words[0].toLowerCase();

  // Capitalize the first letter of subsequent words and append them
  for (let i = 1; i < words.length; i++) {
    camelCaseStr += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  return camelCaseStr;
}