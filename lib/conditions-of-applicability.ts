import { AMatrixItem } from "./constants";

interface ReturnProps {
  arraySums: number[];
}

export const conditionsOfApplicability = (
  b: AMatrixItem[],
  a: AMatrixItem[],
  c: AMatrixItem[]
): ReturnProps => {
  const arraySums = a.map(
    (_, index) => Math.abs(a[index].value) + Math.abs(c[index].value)
  );

  return { arraySums };
};
