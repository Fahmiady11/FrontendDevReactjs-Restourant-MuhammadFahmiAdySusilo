/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from "react";
import Tab from "./Tab";

export default function TabDesc({ desk, map }) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Tab
        className="px-4 !text-xs !grid-cols-2"
        options={["DESKRIPSI", "LOKASI"]}
        index={index}
        setIndex={setIndex}
      />
      <br />
      {index === 0 ? (
        <div>
          <p className="text-justify font-normal text-[1rem]">{desk}</p>
          <br />
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-5">
            <iframe
              src={map}
              className="w-full h-72 border-[1px] border-[#ABACAC] shadow-md rounded-md"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
