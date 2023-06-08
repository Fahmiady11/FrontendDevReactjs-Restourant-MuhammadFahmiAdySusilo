import { IconStar } from "@tabler/icons-react";

const Rating = ({ count }) => {
  return (
    <div className="flex items-center">
      {[...Array(count)].map((v, i) => {
        return (
          <IconStar
            key={i}
            className="w-4 h-4 text-custom-secondary_yellow fill-custom-secondary_yellow"
          />
        );
      })}
      <p className="ml-2 font-caption_mobile text-caption_mobile sm:font-caption1 sm:text-caption1 text-[#615A56]">
        {count} Rating
      </p>
    </div>
  );
};

Rating.Descripted = ({ rate, count }) => {
  return (
    <div>
      <div className="flex items-center">
        {[...Array(count)].map((v, i) => {
          return (
            <IconStar
              key={i}
              className="w-4 h-4 text-custom-secondary_yellow fill-custom-secondary_yellow"
            />
          );
        })}
        <p className="ml-2 text-xs text-custom-primary_red">{rate}</p>
      </div>
    </div>
  );
};

export default Rating;
