const process = require('process');
const os = require('os');
const hddserial = require('hddserial');

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

// show architecture
const showArch = (arg) => {
  if (arg === "-arch") {
    console.log(`This processor architecture is ${process.arch}`);
  }
}

// show CPU
const showCPU = (arg) => {
  if (arg === "-cpu") console.log(os.cpus());
}

// show RAM (Random Access Memory)
const showRAM = (arg) => {
  if (arg === "-ram") console.log(process.memoryUsage());
}

// show HDD
const showHDD = (arg) => {
  if (arg === "-hdd") hddserial.all((err, serial) => console.log(`HDD serial serial is ${serial}`))
}

// show hostname
const showHostname = (arg) => {
  if (arg === "-hostname") console.log(os.hostname());
}

// show ip address
const showIPAddress = (arg) => {
  if (arg === "-ip") console.log(os.networkInterfaces().en0[3].address);
}

// showArch(process.argv[2]);
// showCPU(process.argv[2]);
// showRAM(process.argv[2]);
showHDD(process.argv[2]);
showHostname(process.argv[2]);
showIPAddress(process.argv[2]);
test(process.argv[2]);

// calculator(process.argv[2], process.argv[3], process.argv[4]);

// How to launch 
// In the src folder,
// node app.js arg1, arg2, arg3 ...