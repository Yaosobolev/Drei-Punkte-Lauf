import { AMatrixItem } from "./constants";
interface ReturnProps {
  x: number[];
}
export const calcFastBackward = (
  b: AMatrixItem[],
  a: AMatrixItem[],
  d: number[],
  alfa: number[],
  beta: number[]
): ReturnProps => {
  const x1 = d[b.length - 1] - a[b.length - 1].value * beta[b.length - 2];
  const x2 = a[b.length - 1].value * alfa[b.length - 2] + b[b.length - 1].value;

  const x: number[] = [];
  b.forEach((_, index) => {
    const calcValue =
      index === 0
        ? x1 / x2
        : alfa[b.length - index - 1] * x[b.length - index] +
          beta[b.length - index - 1];

    x[b.length - index - 1] =
      Math.abs(calcValue) === 0 ? Math.abs(calcValue) : calcValue;
  });

  return { x };
};
