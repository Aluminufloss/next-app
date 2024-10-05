type OptionsType = {
  length: number;
  charset: string;
  avoidRepetition: boolean;
};

const generateRandomPassword = (options: OptionsType): string => {
  const usedChars = new Set();
  let password = "";

  while (password.length < options.length) {
    const randomChar = options.charset.charAt(
      Math.floor(Math.random() * options.charset.length)
    );

    if (options.avoidRepetition && usedChars.has(randomChar)) continue;

    password += randomChar;
    usedChars.add(randomChar);
  }

  return password;
};

export default generateRandomPassword;
