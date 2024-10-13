"use client";

import { AMatrixItem, d } from "@/lib/constants";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui";
import { cn } from "@/lib/utils";
import { calcFastBackward } from "@/lib";
import { useEffect } from "react";

interface Props {
  mainDiagonal: AMatrixItem[];
  bottomSideDiagonal: AMatrixItem[];
  alfa: number[];
  beta: number[];
  className?: string;
  onRootsHandler: (root: number[]) => void;
}

export const FastBackward: React.FC<Props> = ({
  mainDiagonal,
  bottomSideDiagonal,
  alfa,
  beta,
  className,
  onRootsHandler,
}) => {
  const { x } = calcFastBackward(
    mainDiagonal,
    bottomSideDiagonal,
    d,
    alfa,
    beta
  );

  useEffect(() => {
    onRootsHandler(x);
  }, []);

  return (
    <>
      <h2 className="text-xl mt-7">Прогонка назад</h2>
      <Table className={cn("mt-1", className)}>
        <TableBody>
          {x.map((el, index) => {
            return (
              <TableRow key={index} className="text-nowrap">
                <TableCell>
                  {"x"}
                  <span className="text-[10px]">{index + 1}</span>
                  {` = ${el}`}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
