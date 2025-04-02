function maskEmail(email){

  let indexOfAt = email.indexOf("@");

  let domain = email.slice(indexOfAt-1);
  
  let firstLetter = email[0];

  let maskedPart = email.slice(1, indexOfAt-1);
  
  maskedPart = "*".repeat(maskedPart.length);

  email = firstLetter + maskedPart + domain;

  return email;


}


let email = "myEmail@email.com";

console.log(maskEmail(email));

