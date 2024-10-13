"use client";

import { tridiagonalTransformation } from "@/lib";
import { Button } from "@/components/ui";
import { A } from "@/lib/constants";
import { conditionsOfApplicability } from "@/lib";
import {
  FulfillmentCondition,
  FastForward,
  FastBackward,
  Fault,
} from "@/components/shared";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Result: React.FC<Props> = ({ className }) => {
  const [coefficients, setCoefficients] = useState<{
    alfa: number[];
    beta: number[];
  }>();

  const [roots, setRoots] = useState<number[]>();
  const [isOpenSolution, setIsOpenSolution] = useState<boolean>(false);

  const { mainDiagonal, bottomSideDiagonal, upperDiagonal } =
    tridiagonalTransformation(A);

  const { arraySums } = conditionsOfApplicability(
    mainDiagonal,
    bottomSideDiagonal,
    upperDiagonal
  );

  const onCoefficientsHandler = (alfa: number[], beta: number[]) => {
    setCoefficients({ alfa, beta });
  };
  const onRootsHandler = (roots: number[]) => {
    setRoots(roots);
  };

  const onClickToggleSolution = () => {
    setIsOpenSolution(!isOpenSolution);
  };

  return (
    <div className={cn("max-w-[800px]", className)}>
      {" "}
      <Button className="text-base mt-4" onClick={onClickToggleSolution}>
        {isOpenSolution ? "Отменить" : "Вычислить"}
      </Button>
      {isOpenSolution && (
        <>
          <FulfillmentCondition
            mainDiagonal={mainDiagonal}
            arraySums={arraySums}
            bottomSideDiagonal={bottomSideDiagonal}
            upperDiagonal={upperDiagonal}
          />

          <FastForward
            mainDiagonal={mainDiagonal}
            bottomSideDiagonal={bottomSideDiagonal}
            upperDiagonal={upperDiagonal}
            onCoefficientsHandler={onCoefficientsHandler}
          />

          {coefficients && (
            <FastBackward
              mainDiagonal={mainDiagonal}
              bottomSideDiagonal={bottomSideDiagonal}
              alfa={coefficients.alfa}
              beta={coefficients.beta}
              onRootsHandler={onRootsHandler}
            />
          )}

          {roots && <Fault roots={roots} />}
        </>
      )}
    </div>
  );
};
