let email = "freecodecamp@example.com";

const maskEmail = (email) => {
  const atIndex = email.indexOf("@");
  const localPart = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = localPart[0];
  const lastChar = localPart[localPart.length - 1];
  const maskedMiddle = "*".repeat(localPart.length - 1);

  return firstChar + maskedMiddle + lastChar + domain;
};

console.log(maskEmail("apple.pie@example.com"));

console.log(maskEmail("freecodecamp@example.com"));
