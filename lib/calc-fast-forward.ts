import { AMatrixItem } from "./constants";
interface ReturnProps {
  alfa: number[];
  beta: number[];
}
export const calcFastForward = (
  b: AMatrixItem[],
  c: AMatrixItem[],
  a: AMatrixItem[],
  d: number[]
): ReturnProps => {
  const alfa: number[] = [];
  const beta: number[] = [];
  b.forEach((el, index) => {
    const calcValue =
      index === 0
        ? (c[index].value / el.value) * -1
        : (c[index].value /
            (a[index].value * alfa[index - 1] + b[index].value)) *
          -1;
    alfa[index] = Math.abs(calcValue) === 0 ? Math.abs(calcValue) : calcValue;
  });
  b.forEach((el, index) => {
    const calcValue =
      index === 0
        ? (beta[index] = d[index] / el.value)
        : (beta[index] =
            (d[index] - a[index].value * beta[index - 1]) /
            (a[index].value * alfa[index - 1] + b[index].value));

    beta[index] = Math.abs(calcValue) === 0 ? Math.abs(calcValue) : calcValue;
  });
  return { alfa, beta };
};
