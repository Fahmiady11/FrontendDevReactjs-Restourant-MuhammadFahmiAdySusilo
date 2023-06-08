import { IconBookmark, IconThumbUpFilled } from "@tabler/icons-react";
import Link from "next/link";
import Rating from "./Rating";

export default function QuickCard({
  imageUrl,
  title,
  review_count,
  price,
  opeclos,
  kategori,
  link,
  rate,
}) {
  return (
    <Link href={`${link}`}>
      <div className="m-4 whitespace-nowrap cursor-pointer">
        <div
          className="aspect-[9/10] bg-center bg-cover rounded-2xl flex justify-end p-4"
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}
        >
          <IconBookmark className="h-8 w-8 text-white fill-[#00000050]" />
        </div>
        <div className="p-4 flex flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 text-orange-400">
              {/* <IconThumbUpFilled className="h-4 w-4" />
              <p>{review_count} Ratings</p> */}
              <Rating.Descripted count={review_count} rate={rate} />
            </div>
            {price && (
              <p className="text-red-500 text-sm font-medium">Rp.{price}</p>
            )}
          </div>
          <p className="!font-bold tracking-tight truncate">{title}</p>
          <div className="text-xs flex flex-row justify-between">
            <p className="font-medium text-neutral-700">{kategori}</p>
            <p
              className={`font-bold  ${
                opeclos ? "text-green-600" : "text-red-600"
              }`}
            >
              {opeclos ? "Open Now" : "Close"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
