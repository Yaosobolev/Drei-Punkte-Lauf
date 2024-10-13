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
  console.log("fault: ", fault);

  return (
    <>
      <h2 className="text-xl mt-7">
        Оценка погрешности метода по правой части
      </h2>
      <Table className={cn("mt-1", className)}>
        <TableBody className="text-nowrap">
          <TableRow className="flex items-center">
            <TableCell className="font-medium">
              <span className="text-sm">
                {"b\u0303"} (Возмущенная правая часть)
              </span>
            </TableCell>
            <span className="text-sm">=</span>
            <TableCell className="font-medium flex gap-2">
              {disturbedRightSide.map((el, index) => {
                return (
                  <span key={index}>
                    {el}
                    {index === disturbedRightSide.length - 1 ? "" : ","}
                  </span>
                );
              })}
            </TableCell>
          </TableRow>
          <TableRow className="flex items-center">
            <TableCell className="font-medium">
              <span className="text-sm text-nowrap">
                {"\u03B4"}b (Вектор b)
              </span>
            </TableCell>
            <span className="text-sm">=</span>
            <TableCell className="font-medium flex gap-2">
              {vectorB.map((el, index) => {
                return (
                  <span key={index}>
                    {el}
                    {index === vectorB.length - 1 ? "" : ","}
                  </span>
                );
              })}
            </TableCell>
          </TableRow>
          <TableRow className="flex items-center">
            <TableCell className="font-medium">
              <span className="text-sm">
                ||{"\u03B4"}b|| (Eвклидовая норма вектор b)
              </span>
            </TableCell>
            <span className="text-sm">=</span>
            <TableCell className="font-medium">
              {euclideanNormOfVectorB}
            </TableCell>
          </TableRow>
          <TableRow className="flex items-center">
            <TableCell className="font-medium">
              <span className="text-sm">
                ||b|| (Eвклидовая норма правой части)
              </span>
            </TableCell>
            <span className="text-sm">=</span>
            <TableCell className="font-medium">{euclideanNormOfB}</TableCell>
          </TableRow>
          <TableRow className="flex items-center">
            <TableCell className="font-medium">
              <span className="text-sm">Погрешности полученного решения</span>
            </TableCell>
            <span className="text-sm">=</span>
            <TableCell className="font-medium">{fault}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
