"use client";

import useBreakpoint from "use-breakpoint";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import Navbar from "@component/Navbar";
import Form from "@component/Form";
import Title from "@component/Title";
import QuickCard from "@component/Quickcard";
import Footer from "@component/Footer";
import { BREAKPOINTS } from "@component/Breakpoints";
import axios from "axios";

export default function Home() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "xs");
  const [state, setState] = useState([]);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [kategori, setKategori] = useState("");

  useEffect(() => {
    axios
      .get("https://fahmiady11.github.io/API_Restourant/data.json")
      .then((res) => {
        setState(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //filter utama
  const filterOpen = state.filter((item) => item.status === true);
  //filter lebih kurang
  const filterLebih = state.filter((item) => item.price >= price);
  const filterKurang = state.filter((item) => item.price <= price);
  //filter lebih kurang open
  const filterLebihOpen = state
    .filter((item) => item.price >= price)
    .filter((item) => item.status === true);
  const filterKurangOpen = state
    .filter((item) => item.price <= price)
    .filter((item) => item.status === true);
  //filter daerah
  const filterMadura = state.filter((item) => item.location === "Madura");
  const filterLamongan = state.filter((item) => item.location === "Lamongan");
  const filterSurabaya = state.filter((item) => item.location === "Surabaya");
  //filter daerah Open
  const filterMaduraOpen = state
    .filter((item) => item.location === "Madura")
    .filter((item) => item.status === true);
  const filterLamonganOpen = state
    .filter((item) => item.location === "Lamongan")
    .filter((item) => item.status === true);
  const filterSurabayaOpen = state
    .filter((item) => item.location === "Surabaya")
    .filter((item) => item.status === true);
  //filter daerah Lebih
  const filterLebihMadura = state
    .filter((item) => item.price >= price)
    .filter((item) => item.location === "Madura");
  const filterLebihLamongan = state
    .filter((item) => item.price >= price)
    .filter((item) => item.location === "Lamongan");
  const filterLebihSurabaya = state
    .filter((item) => item.price >= price)
    .filter((item) => item.location === "Surabaya");
  //filter daerah Open Lebih
  const filterLebihMaduraOpen = state
    .filter((item) => item.price >= price)
    .filter((item) => item.location === "Madura")
    .filter((item) => item.status === true);
  const filterLebihLamonganOpen = state
    .filter((item) => item.price >= price)
    .filter((item) => item.location === "Lamongan")
    .filter((item) => item.status === true);
  const filterLebihSurabayaOpen = state
    .filter((item) => item.price >= price)
    .filter((item) => item.location === "Surabaya")
    .filter((item) => item.status === true);
  //filter daerah Kurang
  const filterKurangMadura = state
    .filter((item) => item.price <= price)
    .filter((item) => item.location === "Madura");
  const filterKurangLamongan = state
    .filter((item) => item.price <= price)
    .filter((item) => item.location === "Lamongan");
  const filterKurangSurabaya = state
    .filter((item) => item.price <= price)
    .filter((item) => item.location === "Surabaya");
  //filter daerah Open Kurang
  const filterKurangMaduraOpen = state
    .filter((item) => item.price <= price)
    .filter((item) => item.location === "Madura")
    .filter((item) => item.status === true);
  const filterKurangLamonganOpen = state
    .filter((item) => item.price <= price)
    .filter((item) => item.location === "Lamongan")
    .filter((item) => item.status === true);
  const filterKurangSurabayaOpen = state
    .filter((item) => item.price <= price)
    .filter((item) => item.location === "Surabaya")
    .filter((item) => item.status === true);
  ////////////////////////

  let temp;
  if (open) {
    if (price === 0 && kategori === "") {
      temp = filterOpen;
    } else if (parseInt(price) >= 30000) {
      if (kategori === "") {
        temp = filterLebihOpen;
      } else if (kategori === "Madura") {
        temp = filterLebihMaduraOpen;
      } else if (kategori === "Lamongan") {
        temp = filterLebihLamonganOpen;
      } else if (kategori === "Surabaya") {
        temp = filterLebihSurabayaOpen;
      }
    } else if (parseInt(price) <= 30000 && parseInt(price) !== 0) {
      if (kategori === "") {
        temp = filterKurangOpen;
      } else if (kategori === "Madura") {
        temp = filterKurangMaduraOpen;
      } else if (kategori === "Lamongan") {
        temp = filterKurangLamonganOpen;
      } else if (kategori === "Surabaya") {
        temp = filterKurangSurabayaOpen;
      }
    } else if (price === 0) {
      if (kategori === "Madura") {
        temp = filterMaduraOpen;
      } else if (kategori === "Lamongan") {
        temp = filterLamonganOpen;
      } else if (kategori === "Surabaya") {
        temp = filterSurabayaOpen;
      }
    }
  } else if (!open) {
    if (price === 0 && kategori === "") {
      temp = state;
    } else if (parseInt(price) >= 30000) {
      if (kategori === "") {
        temp = filterLebih;
      } else if (kategori === "Madura") {
        temp = filterLebihMadura;
      } else if (kategori === "Lamongan") {
        temp = filterLebihLamongan;
      } else if (kategori === "Surabaya") {
        temp = filterLebihSurabaya;
      }
    } else if (parseInt(price) <= 30000 && parseInt(price) !== 0) {
      if (kategori === "") {
        temp = filterKurang;
      } else if (kategori === "Madura") {
        temp = filterKurangMadura;
      } else if (kategori === "Lamongan") {
        temp = filterKurangLamongan;
      } else if (kategori === "Surabaya") {
        temp = filterKurangSurabaya;
      }
    } else if (price === 0) {
      if (kategori === "Madura") {
        temp = filterMadura;
      } else if (kategori === "Lamongan") {
        temp = filterLamongan;
      } else if (kategori === "Surabaya") {
        temp = filterSurabaya;
      }
    }
  }

  return (
    <div className="font-inter min-h-screen min-w-screen max-w-screen">
      <Navbar />
      <div
        style={{
          backgroundImage: "url('/assets/image/bg.jpg')",
        }}
        className="pt-24 pb-12 bg-cover bg-center h-full text-center co"
      >
        <div className="px-4 sm:px-12 text-custom-white mx-auto text-center w-full h-full">
          <p className="font-bold text-4xl lg:text-title drop-shadow-md">
            Daftar Rekomendasi Restoran
          </p>
          <div className="sm:mt-4 text-xs sm:text-base font-semibold drop-shadow-md w-full flex justify-center">
            <p className="md:w-1/2 w-10/12">
              Selamat datang di website Kumpulan Restoran! Kami adalah destinasi
              online yang menyediakan informasi lengkap dan terkini tentang
              berbagai restoran di berbagai kota.
            </p>
          </div>
        </div>
        <div className="px-4 my-2 sm:my-8">
          <div className="font-medium max-w-fit mx-auto">
            <div className="scrollbar-custom text-xs sm:text-base bg-neutral-200 rounded-full border-2 border-neutral-200">
              <Form
                setOpen={setOpen}
                open={open}
                price={price}
                setPrice={setPrice}
                kategori={kategori}
                setKategori={setKategori}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 py-4 md:py-8">
          <Title className="text-center">
            Restoran <span className="text-custom-primary_red">Populer</span>
          </Title>
          <p className="text-center">
            Kami menawarkan rekomendasi populer untuk menemani untuk memanjakan
            lidah
          </p>

          <div className="max-w-7xl mx-auto">
            <Swiper
              spaceBetween={0}
              slidesPerView={
                breakpoint === "xs"
                  ? 1.5
                  : breakpoint === "sm"
                  ? 2.2
                  : breakpoint === "md"
                  ? 2.5
                  : breakpoint === "lg"
                  ? 3.2
                  : breakpoint === "xl"
                  ? 3.5
                  : breakpoint === "2xl"
                  ? 4.2
                  : 4.5
              }
            >
              {temp &&
                temp?.map((v, i) => (
                  <SwiperSlide key={i.toString()}>
                    <QuickCard
                      imageUrl={v?.image}
                      title={v?.nameResto}
                      kategori={v?.location}
                      opeclos={v?.status}
                      review_count={v?.star}
                      link={`/kuliner/${v?.id}`}
                      price={v?.price}
                      rate={v?.rate}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div className="px-4 py-4 md:py-8">
          <Title className="text-center">
            Restoran <span className="text-custom-primary_red">Terbaru</span>
          </Title>
          <p className="text-center">
            Kami menawarkan Restoran terbaru untuk memanjakan lidah
          </p>

          <div className="max-w-7xl mx-auto">
            <Swiper
              spaceBetween={0}
              slidesPerView={
                breakpoint === "xs"
                  ? 1.5
                  : breakpoint === "sm"
                  ? 2.2
                  : breakpoint === "md"
                  ? 2.5
                  : breakpoint === "lg"
                  ? 3.2
                  : breakpoint === "xl"
                  ? 3.5
                  : breakpoint === "2xl"
                  ? 4.2
                  : 4.5
              }
            >
              {temp &&
                temp?.map((v, i) => (
                  <SwiperSlide key={i.toString()}>
                    <QuickCard
                      imageUrl={v?.image}
                      title={v?.nameResto}
                      kategori={v?.location}
                      opeclos={v?.status}
                      review_count={v?.star}
                      link={`/kuliner/${v?.id}`}
                      price={v?.price}
                      rate={v?.rate}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
