import { LOWERCASE, NUMBERS, SYMBOLS, UPPERCASE } from "./constants";

type OptionsType = {
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
};

const getCharset = (options: OptionsType): string => {
  let charset = '';

  if (options.useUppercase) charset += UPPERCASE;
  if (options.useLowercase) charset += LOWERCASE;
  if (options.useNumbers) charset += NUMBERS;
  if (options.useSymbols) charset += SYMBOLS;

  return charset;
};

export default getCharset;