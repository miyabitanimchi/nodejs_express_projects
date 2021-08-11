const convertStrIntoUnicode = (str) => {
  let asciiArr = [];

  for (i = 0; i < str.length; i++) {
    asciiArr.push(str.charCodeAt(i));
  }
  return asciiArr.join(",");
}

const convertUnicodeIntoStr = (...args) => {
  let strArr = [];

  for (i = 0; i < args.length; i++) {
    if (args[i] > 1112064) {
      console.log("The unicode should be less or equal to 1112064");
      return
    } else {
      strArr.push(String.fromCharCode(args[i]));
    }
  }
  return strArr.join(",")
}

module.exports = {
  convertStrIntoUnicode: convertStrIntoUnicode,
  convertUnicodeIntoStr: convertUnicodeIntoStr
}