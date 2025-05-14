import { IconProps } from "@/constants/CONST";
import Image from "next/image";

  export default function IconProfile <T extends string>({
      options,
      selected,
    }: IconProps<T>) {
      const selectedOption = options.find((o) => o.code === selected);
    return (
      <div className="flex items-center cursor-pointer w-[20px] h-[20px] rounded-full overflow-hidden">
        {selectedOption?.img && <Image src={selectedOption?.img} alt={selectedOption?.code} width={20} height={20} className="object-cover" />}
      </div>
    );
  }
