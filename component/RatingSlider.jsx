import { IconStar } from "@tabler/icons-react";

export default function RatingSlider({ children }) {
  return (
    <div>
      {[...Array(5)].map((v, i) => {
        return (
          <div className="flex items-center justify-center gap-1" key={i}>
            <IconStar className="text-custom-secondary_yellow fill-custom-secondary_yellow w-5" />
            <p className="!text-sm">{5 - i}</p>
            <div className="w-full h-2 bg-gray-300 rounded-xl">
              <div
                className={`h-2 bg-blue-500 rounded-xl w-[${20 * (5 - i)}%]`}
              ></div>
            </div>
            <p className="!text-xs w-10">{20 * (5 - i)}</p>
          </div>
        );
      })}
    </div>
  );
}
