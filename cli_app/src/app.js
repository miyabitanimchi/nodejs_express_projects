const process = require('process');

// export const cli = (args) => {
//   console.log(args);
// }

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
})

const test = (arg) => {
  if (arg === "miyabi") {
    console.log(`${arg} lives in Vancouver`);
  }
}

const calculator = (num1, num2, operator) => {
  const numRegex = /[1234567890]/g;

  if (num1.match(numRegex) !== null && num2.match(numRegex) !== null) {
    switch (operator) {
      case "+":
        console.log(Number(num1) + Number(num2));
        break;
      case "-":
        console.log(Number(num1) - Number(num2));
        break;
      case "*":
        console.log(Number(num1) * Number(num2));
        break;
      case "/":
        console.log(Number(num1) / Number(num2));
        break;
      default:
        console.log("set an operator");
    }
  } else {
    console.log("put numbers");
  }
}

test(process.argv[2]);
calculator(process.argv[2], process.argv[3], process.argv[4]);

// How to launch 
// In the src folder,
// node app.js arg1, arg2, arg3 ...