const Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const CheckEmail = (email) => {
  console.log("emailVerification", email);
  Regex.test(email) ? console.log('Email Validated',true) : false;
  
};

export const CheckPassword = (password) => {
  passwordRegex.test(password) ? console.log("Password Validated", true) : false;
  
};
