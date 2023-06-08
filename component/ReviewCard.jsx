import { IconStar } from "@tabler/icons-react";
import Image from "next/image";

export default function ReviewCard({ name, rating, text, image }) {
  return (
    <div className="flex min-w-[200px] md:min-w-[250px] w-full  h-full flex-col border-[0.5px] p-3 border-[#ABACAC]/30 shadow-md rounded-md">
      <div className="flex flex-row items-center justify-between w-full h-full">
        <div className="flex flex-row items-center justify-start gap-2 w-full h-full">
          <div className="w-8 h-8">
            <Image src={image} alt="" className="rounded-full w-full h-full object-cover object-center" width={1000} height={1000} />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[0.75rem] font-medium">{name}</p>
            <p className="text-[0.625rem] font-normal text-[#ABACAC]">
              17 Nov 2022
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center bg-[#F6F0E1] p-1 gap-1 rounded-md">
          <IconStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <p className="text-[0.75rem] text-[#D2001A] font-medium">{rating}</p>
        </div>
      </div>
      <hr className="border-[0.5px]/30 border-[#ABACAC] my-4" />
      <p className="text-[10px] md:text-[0.75rem] font-medium">{text}</p>
    </div>
  );
}
