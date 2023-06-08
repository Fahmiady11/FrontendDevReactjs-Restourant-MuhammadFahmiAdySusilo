import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar({ isFixed = false }) {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [animateExpand, setAnimateExpand] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [expandOptions, setExpandOptions] = useState(false);
  const [animateExpandOptions, setAnimateExpandOptions] = useState(false);

  const doChangeKeyword = (e) => {
    setKeyword(e.currentTarget.value);
  };

  const doExpandNavbar = () => {
    setExpandNavbar(true);
  };

  const doCloseNavbar = () => {
    setAnimateExpand(false);
  };

  const doBlurNavbar = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setAnimateExpand(false);
    }
  };

  useEffect(() => {
    if (expandNavbar) {
      document.body.style.overflow = "hidden";
      setAnimateExpand(true);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [expandNavbar]);

  useEffect(() => {
    if (!animateExpand) {
      setTimeout(() => {
        setExpandNavbar(false);
      }, 500);
    }
  }, [animateExpand]);

  useEffect(() => {
    if (expandOptions) {
      setAnimateExpandOptions(true);
    }
  }, [expandOptions]);

  useEffect(() => {
    if (!animateExpandOptions) {
      setTimeout(() => {
        setExpandOptions(false);
      }, 500);
    }
  }, [animateExpandOptions]);

  return (
    <div
      className={
        isFixed ? "fixed w-full top-0 z-[1000]" : "sticky top-0 z-[1000]"
      }
    >
      <div onBlur={doBlurNavbar} className="relative">
        <TopNavBar
          doChangeKeyword={doChangeKeyword}
          doExpandNavbar={doExpandNavbar}
          expandNavbar={expandNavbar}
          doCloseNavbar={doCloseNavbar}
          keyword={keyword}
          animateExpand={animateExpand}
        />
        <div
          tabIndex={1}
          className={`${expandNavbar ? "block" : "hidden"} ${
            animateExpand ? "translate-y-0" : "-translate-y-full"
          } font-medium transition-transform duration-500 z-[999] absolute top-full w-full`}
        >
          <div className="relative">
            <div
              tabIndex={1}
              className={`${
                expandOptions && expandNavbar ? "block" : "hidden"
              } ${
                animateExpandOptions && animateExpand
                  ? "translate-y-0"
                  : "-translate-y-full"
              } transition-transform duration-500 fixed md:absolute z-[-1] left-0 right-0 -top-full md:top-auto max-w-3xl mx-auto bg-white md:rounded-b-3xl overflow-hidden pb-4 md:pb-0`}
            ></div>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={`${expandNavbar ? "block" : "hidden"} ${
          animateExpand ? "opacity-25" : "opacity-0"
        } transition-opacity duration-500 z-[997] absolute top-0 bg-black w-full h-screen`}
      />
    </div>
  );
}

const TopNavBar = ({
  expandNavbar,
  keyword,
  doChangeKeyword,
  doExpandNavbar,
}) => {
  return (
    <div
      tabIndex={1}
      className={`${
        expandNavbar ? "border-transparent shadow-none" : "shadow-sm"
      } border-b bg-white sticky top-0 z-[1000] w-full transition-all`}
    >
      <div className="z-[1000] max-w-7xl m-auto px-4 md:px-8 py-2 md:py-4 flex justify-between  items-center w-full gap-4 md:gap-8">
        <div className="flex">
          <Link href="/">
            <p className="text-lg font-bold font-jua">Foodie Haven😋</p>
          </Link>
        </div>
        <div>
          <NavbarMenu />
        </div>
      </div>
    </div>
  );
};

const NavbarMenu = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  const doFocus = () => {
    if (!show) {
      setShow(true);
    } else {
      setAnimate(false);
    }
  };

  const doBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setAnimate(false);
    }
  };

  useEffect(() => {
    if (show) {
      setAnimate(true);
    }
  }, [show]);

  useEffect(() => {
    if (!animate) {
      setTimeout(() => {
        setShow(false);
      }, 150);
    }
  }, [animate]);

  return (
    <div
      onBlur={doBlur}
      className="relative z-[1000] flex items-center justify-end "
    >
      <button
        onClick={doFocus}
        className="transition-all hover:bg-neutral-100 flex items-center gap-2 border px-4 py-2 rounded-full"
      >
        <p className="font-semibold font-inter text-gray-800">Menu</p>
        <IconMenu className="h-5 w-5" />
      </button>
      <div
        tabIndex={1}
        className={`${show ? "" : "hidden "}${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } transition-all origin-top-right text-sm font-medium absolute flex flex-col top-12 right-0 bg-white shadow-xl border rounded-xl w-64`}
      >
        <Link
        href="/"
          className="bg-white hover:bg-neutral-100 transition-all py-3 px-4"
        >
          Koleksi Kamu
        </Link>

        <Link
          href="/"
          className="bg-white hover:bg-neutral-100 transition-all py-3 px-4"
        >
          Profile
        </Link>
        <div className="grid grid-cols-2 p-2 gap-2">
          <Link
            className="text-center bg-gradient-to-br from-custom-gradient1 to-custom-gradient2 text-white rounded-md transition-all p-2"
            href="/"
          >
            Login
          </Link>
          <Link
            className="text-center bg-custom-gradient1 rounded-md transition-all p-2"
            href="/"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
