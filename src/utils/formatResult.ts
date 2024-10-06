import { MAX_DISPLAY_LENGTH } from "./constants";

const formatResult = (result: number | string): string => {
  const resultString = typeof result === 'number' ? result.toString() : result;

  if (resultString.length > MAX_DISPLAY_LENGTH) {
    return Number(resultString).toExponential(6); 
  }

  return resultString; 
};

export default formatResult;