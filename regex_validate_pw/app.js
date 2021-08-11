const validatePassword = (password) => {
  const regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])/;

  const passwordArr = password.split("");
  // check if there are 6 or more numbers
  const numOfDigits = passwordArr.filter((str) => str.match(/[0-9]/));

  if (numOfDigits.length > 5) {
    if (password.match(regex)) {
      console.log("valid password");
    } else {
      console.log("invalid password");
    }
  } else {
    console.log("invalid password");
  }
};

console.log(validatePassword("0A2892a!9"));
console.log(validatePassword("qweasd"));
console.log(validatePassword("P12a8p%"));
console.log(validatePassword("*s55t4V289"));
