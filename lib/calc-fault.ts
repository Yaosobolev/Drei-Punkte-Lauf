import { AMatrixItem } from "./constants";

interface FaultReturn {
  disturbedRightSide: number[];
  vectorB: number[];
  euclideanNormOfVectorB: number;
  euclideanNormOfB: number;
  fault: number;
}

export const calcFault = (
  A: AMatrixItem[][],
  x: number[],
  d: number[]
): FaultReturn => {
  const disturbedRightSide = A.map((row) => {
    return row.reduce((acc, val, j) => acc + Number(val.value) * x[j], 0);
  });

  const vectorB = d.map((val, i) => val - disturbedRightSide[i]);

  const euclideanNormOfVectorB = Math.sqrt(
    vectorB.reduce((acc, val) => acc + val ** 2, 0)
  );
  const euclideanNormOfB = Math.sqrt(d.reduce((acc, val) => acc + val ** 2, 0));
  const fault = euclideanNormOfVectorB / euclideanNormOfB;

  return {
    disturbedRightSide,
    vectorB,
    euclideanNormOfVectorB,
    euclideanNormOfB,
    fault,
  };
};
