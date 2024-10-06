type OptionsType = {
  prev: number;
  next: number;
  operator: string;
};

type BinaryOperators = {
  [key: string]: (prev: number, next: number) => number;
};

type UnaryOperators = {
  [key: string]: (prev: number) => number;
};

const calculate = (options: OptionsType): number => {
  const binaryOperators: BinaryOperators = {
    "+": (prev: number, next: number) => prev + next,
    "-": (prev: number, next: number) => prev - next,
    "*": (prev: number, next: number) => prev * next,
    "/": (prev: number, next: number) => prev / next,
  };

  const unaryOperators: UnaryOperators = {
    "+": (prev: number) => prev,
    "-": (prev: number) => -prev,
  };

  if (options.operator === "%" || options.operator === "+/-") {
    return unaryOperators[options.operator](options.prev);
  }

  return options.next !== undefined
    ? binaryOperators[options.operator](options.prev, options.next)
    : options.prev;
};

export default calculate;
