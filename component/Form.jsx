import { useState } from "react";

export default function Form({
  open,
  setOpen,
  price,
  setPrice,
  kategori,
  setKategori,
}) {
  const [dropdown, setDropdown] = useState(0);
  const [dropdown2, setDropdown2] = useState(0);
  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const dropdownHandle = (e) => {
    const data = e.target.value;
    setDropdown(data);
    setPrice(parseInt(data));
  };

  const dropdownHandle2 = (e) => {
    const data = e.target.value;
    setDropdown2(data);
    setKategori(data);
  };

  const handleClear = () => {
    setPrice(0);
    setKategori("");
    setOpen(false);
  };

  return (
    <div className="flex flex-row items-center p-1 gap-2">
      <div className="flex flex-row gap-2">
        <div
          className={`flex flex-row hover:border-gray-600 hover:border-2 justify-center items-center gap-2 py-2 px-8 cursor-pointer border-gray-200 text-sm p-2 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 rounded-full ${
            open
              ? "bg-green-600 hover:bg-green-700"
              : "bg-white hover:bg-slate-200"
          }`}
          onClick={handleOpen}
        >
          Open Now
        </div>
        <div className="">
          <select
            value={dropdown}
            onChange={dropdownHandle}
            className="py-3 px-3 hover:bg-slate-200 hover:border-gray-600 hover:border-2 cursor-pointer text-center pr-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          >
            <option selected value={0}>
              Price
            </option>
            <option value={29999}>&lt; 30000</option>
            <option value={30001}>&gt; 30000</option>
          </select>
        </div>
        <div className="">
          <select
            value={dropdown2}
            onChange={dropdownHandle2}
            className="py-3 cursor-pointer hover:bg-slate-200 hover:border-gray-600 hover:border-2 px-8 pr-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          >
            <option selected value="">
              Kategori
            </option>
            <option value="Madura">Madura</option>
            <option value="Lamongan">Lamongan</option>
            <option value="Surabaya">Surabaya</option>
          </select>
        </div>
        <p
          onClick={handleClear}
          className="flex py-2 px-8 cursor-pointer hover:bg-slate-200 hover:border-gray-600 hover:border-2 flex-row justify-center items-center border-gray-200 bg-white text-sm p-2 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 rounded-full"
        >
          Clear All
        </p>
      </div>
    </div>
  );
}
