import { AMatrixItem } from "@/lib/constants";

export interface ReturnProps {
  mainDiagonal: AMatrixItem[];
  bottomSideDiagonal: AMatrixItem[];
  upperDiagonal: AMatrixItem[];
}

export const tridiagonalTransformation = (A: AMatrixItem[][]): ReturnProps => {
  const mainDiagonal = A.map(
    (row, Iindex) => row.filter((el, Jindex) => Iindex === Jindex)[0]
  );

  const bottomSideDiagonal = A.map(
    (row, Iindex) => row.filter((el, Jindex) => Iindex === Jindex + 1)[0]
  ).map((el, index) => ({
    name: `x${index + 1}`,
    value: el !== undefined ? el.value : 0,
  }));

  const upperDiagonal = A.map(
    (row, Iindex) => row.filter((el, Jindex) => Iindex === Jindex - 1)[0]
  ).map((el, index) => ({
    name: `x${index + 1}`,
    value: el !== undefined ? el.value : 0,
  }));

  return {
    mainDiagonal,
    bottomSideDiagonal,
    upperDiagonal,
  };
};
