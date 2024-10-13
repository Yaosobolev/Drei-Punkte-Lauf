"use client";

import { AMatrixItem, d } from "@/lib/constants";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui";
import { cn } from "@/lib/utils";
import { calcFastForward } from "@/lib";
import { useEffect } from "react";

interface Props {
  mainDiagonal: AMatrixItem[];
  upperDiagonal: AMatrixItem[];
  bottomSideDiagonal: AMatrixItem[];
  className?: string;
  onCoefficientsHandler: (alfa: number[], beta: number[]) => void;
}

export const FastForward: React.FC<Props> = ({
  mainDiagonal,
  upperDiagonal,
  bottomSideDiagonal,
  className,
  onCoefficientsHandler,
}) => {
  const { alfa, beta } = calcFastForward(
    mainDiagonal,
    upperDiagonal,
    bottomSideDiagonal,
    d
  );

  useEffect(() => {
    onCoefficientsHandler(alfa, beta);
  }, []);

  return (
    <>
      <h2 className="text-xl mt-7">Прогонка вперед</h2>
      <Table className={cn("mt-1", className)}>
        <TableBody>
          {alfa.map((el, index) => {
            return (
              <TableRow key={index} className="text-nowrap">
                <TableCell>
                  {"\u03b1"}
                  <i className="text-[10px]">{index + 1}</i>
                  {` = ${el}`}
                </TableCell>
                <TableCell>
                  {"\u03b2"}
                  <i className="text-[10px]">{index + 1}</i>
                  {` = ${beta[index]}`}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
