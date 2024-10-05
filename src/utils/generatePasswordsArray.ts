import generateRandomPassword from "./generateRandomPassword";
import getCharset from "./getCharset";

type OptionsType = {
  flags: {
    useUppercase: boolean;
    useLowercase: boolean;
    useNumbers: boolean;
    useSymbols: boolean;
  };
  avoidRepetition: boolean;
  length: number;
};

const generatePasswordsArray = (options: OptionsType): string[] => {
  const charset = getCharset(options.flags);

  const passwordArray = Array(4)
    .fill(null)
    .map(() =>
      generateRandomPassword({
        length: options.length,
        charset,
        avoidRepetition: options.avoidRepetition,
      })
    );

  return passwordArray;
};

export default generatePasswordsArray;
