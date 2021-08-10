const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*](?=.*[0-9]{6,})$/;

  if (password.match(regex)) {
    console.log("valid password");
  } else {

    console.log("invalid password");
  }
}

console.log(validatePassword("Aa@3331333"));