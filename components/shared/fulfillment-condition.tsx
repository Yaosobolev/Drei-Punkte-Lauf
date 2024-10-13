import { AMatrixItem } from "@/lib/constants";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Props {
  mainDiagonal: AMatrixItem[];
  bottomSideDiagonal: AMatrixItem[];
  upperDiagonal: AMatrixItem[];
  arraySums: number[];
  className?: string;
}

export const FulfillmentCondition: React.FC<Props> = ({
  mainDiagonal,
  bottomSideDiagonal,
  upperDiagonal,
  arraySums,
  className,
}) => {
  const isConditionsMet = () => {
    return mainDiagonal.find((a, i) => Math.abs(a.value) < arraySums[i])
      ? false
      : true;
  };

  const conclusion = isConditionsMet()
    ? "В каждой строке матрицы А модуль элемента, стоящего на главной диагонали, не меньше суммы модулей элементов верхних и нижних побочных диагоналей. Таким образом, условие наличия в матрице коэффициентов диагонального преобладания выполняется.  А следовательно,  для рассматриваемой системы выполняется достаточное условие применимости метода."
    : "НЕ в каждой строке матрицы А модуль элемента, стоящего на главной диагонали, не меньше суммы модулей элементов верхних и нижних побочных диагоналей. Таким образом, условие наличия в матрице коэффициентов диагонального преобладания НЕ выполняется.  А следовательно,  для рассматриваемой системы выполняется НЕ достаточное условие применимости метода.";

  return (
    <>
      <h2 className="text-xl mt-7">Проверка выполнения условия</h2>
      <Table className={cn("mt-1 ", className)}>
        <TableBody>
          {arraySums.map((el, index) => {
            return (
              <TableRow className="text-nowrap" key={index}>
                <TableCell className="font-medium">i = {index + 1}</TableCell>
                <TableCell>
                  {"|b"}
                  <i className="text-[10px]">{index + 1}</i>
                  {`|=${Math.abs(mainDiagonal[index].value)},`}
                </TableCell>
                <TableCell>
                  {"|a"}
                  <i className="text-[10px]">{index + 1}</i>
                  {`|=${Math.abs(bottomSideDiagonal[index].value)},`}
                </TableCell>
                <TableCell>
                  {"|c"}
                  <i className="text-[10px]">{index + 1}</i>
                  {`|=${Math.abs(upperDiagonal[index].value)},`}
                </TableCell>
                <TableCell>
                  {Math.abs(mainDiagonal[index].value)}
                  {Math.abs(mainDiagonal[index].value) >= el
                    ? " \u2265 "
                    : " \u2264 "}
                  {`${el}(${Math.abs(
                    bottomSideDiagonal[index].value
                  )} + ${Math.abs(upperDiagonal[index].value)})${
                    index === arraySums.length - 1 ? "." : ","
                  }`}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <p className="mt-2 text-sm text-muted-foreground">{conclusion}</p>
    </>
  );
};
