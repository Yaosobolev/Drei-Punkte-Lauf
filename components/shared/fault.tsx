import { calcFault } from "@/lib";
import { A, d } from "@/lib/constants";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Props {
  roots: number[];
  className?: string;
}

export const Fault: React.FC<Props> = ({ roots, className }) => {
  const {
    disturbedRightSide,
    euclideanNormOfB,
    euclideanNormOfVectorB,
    fault,
    vectorB,
  } = calcFault(A, roots, d);

  return (
    <>
      <h2 className="text-xl mt-7">
        Оценка погрешности метода по правой части
      </h2>
      <Table className={cn("mt-1", className)}>
        <TableBody className="text-nowrap">
          <TableRow className="flex items-center">
            <TableCell className="font-medium">
              <i className="text-sm">{"b\u0303"} (Возмущенная правая часть)</i>
            </TableCell>
            <i className="text-sm">=</i>
            <TableCell className="font-medium flex gap-2">
              {disturbedRightSide.map((el, index) => {
                return (
                  <i key={index}>
                    {el}
                    {index === disturbedRightSide.length - 1 ? "" : ","}
                  </i>
                );
              })}
            </TableCell>
          </TableRow>
          <TableRow className="flex items-center">
            <TableCell className="font-medium">
              <i className="text-sm text-nowrap">{"\u03B4"}b (Вектор b)</i>
            </TableCell>
            <i className="text-sm">=</i>
            <TableCell className="font-medium flex gap-2">
              {vectorB.map((el, index) => {
                return (
                  <i key={index}>
                    {el}
                    {index === vectorB.length - 1 ? "" : ","}
                  </i>
                );
              })}
            </TableCell>
          </TableRow>
          <TableRow className="flex items-center">
            <TableCell className="font-medium">
              <i className="text-sm">
                ||{"\u03B4"}b|| (Eвклидовая норма вектор b)
              </i>
            </TableCell>
            <i className="text-sm">=</i>
            <TableCell className="font-medium">
              {euclideanNormOfVectorB}
            </TableCell>
          </TableRow>
          <TableRow className="flex items-center">
            <TableCell className="font-medium">
              <i className="text-sm">||b|| (Eвклидовая норма правой части)</i>
            </TableCell>
            <i className="text-sm">=</i>
            <TableCell className="font-medium">{euclideanNormOfB}</TableCell>
          </TableRow>
          <TableRow className="flex items-center">
            <TableCell className="font-medium">
              <i className="text-sm">Погрешности полученного решения</i>
            </TableCell>
            <i className="text-sm">=</i>
            <TableCell className="font-medium">{fault}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
