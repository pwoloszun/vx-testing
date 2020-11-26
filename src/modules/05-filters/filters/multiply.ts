type MultiplyArg = number | null;

export default function multiply(value1: MultiplyArg, value2: MultiplyArg): MultiplyArg {
  if (value1 === null || value2 === null) {
    return null;
  } else {
    return value1 * value2;
  }
}
