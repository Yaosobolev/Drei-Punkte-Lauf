"use client";

import { tridiagonalTransformation } from "@/lib";
import { Button } from "../ui/button";
import { A } from "@/lib/constants";
import { conditionsOfApplicability } from "@/lib";

interface Props {
  className?: string;
}

export const Result: React.FC<Props> = ({ className }) => {
  const { mainDiagonal, bottomSideDiagonal, upperDiagonal } =
    tridiagonalTransformation(A);

  const { arraySums } = conditionsOfApplicability(
    mainDiagonal,
    bottomSideDiagonal,
    upperDiagonal
  );
  console.log("arraySums: ", arraySums);

  return (
    <div className={className}>
      {" "}
      <Button className="text-base mt-4" onClick={() => console.log("hello")}>
        Вычислить
      </Button>
    </div>
  );
};
