let email = "freecodecamp@example.com";

const maskEmail = (email) => {
  const atIndex = email.indexOf("@");
  const localPart = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
};
