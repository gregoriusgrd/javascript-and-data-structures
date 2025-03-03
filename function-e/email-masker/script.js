let email = "freecodecamp@example.com";

function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const localPart = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = localPart[0];
  const lastChar = localPart[localPart.length - 1];
  const maskedMiddle = "*".repeat(localPart.length - 2);

  return firstChar + maskedMiddle + lastChar + domain;
}

console.log(maskEmail(email));
