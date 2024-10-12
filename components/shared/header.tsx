import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className={cn("flex items-center gap-2 flex-wrap", className)}>
        <h1 className="text-2xl font-bold">Уравнение:</h1>
        <Image alt="Уравнение" src="/equation.png" height={400} width={400} />
      </div>
    </>
  );
};
