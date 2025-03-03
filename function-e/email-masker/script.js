let email = "freecodecamp@example.com";

const maskEmail = (email) => {
  const theMask = email.indexOf("@");
  const firstChar = email.slice(0, theMask);
  const secondChar = email.slice(-1);
  let replace = firstChar.replace("*");
};
