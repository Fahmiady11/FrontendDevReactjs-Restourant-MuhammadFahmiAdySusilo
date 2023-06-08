"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "use-breakpoint";
import "swiper/css";
import { IconMap } from "@tabler/icons-react";
import { BREAKPOINTS } from "@component/Breakpoints";
import Wrapper from "@component/Wrapper";
import Navbar from "@component/Navbar";
import BreadCrumbs from "@component/BreadCrumbs";
import Container from "@component/Container";
import Rating from "@component/Rating";
import TabDesc from "@component/TabDesc";
import ReviewVisitor from "@component/ReviewVisitor";
import QuickCard from "@component/Quickcard";
import Footer from "@component/Footer";
import MainContent from "@component/MainContent";
import Heading from "@component/Heading";
import { usePathname } from "next/navigation";
import Image from "next/image";
import axios from "axios";

export default function DetailPage() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "xs");
  const [openReview, setOpenReview] = useState(false);
  const [state, setState] = useState([]);
  const router = usePathname();
  const id = router.match(/\/(\d+)$/)[1];

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

  const data = state?.filter((item) => item?.id == id)[0];

  return (
    <Wrapper>
      <Navbar />
      <MainContent>
        <div className="flex flex-row md:flex-col items-center justify-between md:items-stretch w-full">
          <BreadCrumbs
            breads={[
              { name: "Kuliner", link: "/" },
              { name: data?.nameResto, link: "" },
            ]}
          />
        </div>

        <div
          className="flex flex-col w-full h-full"
          style={{
            gridTemplateColumns: "1fr auto",
          }}
        >
          {/* Description */}
          <div className="flex flex-col w-full h-full">
            {/* <GalleryImage
              images={[
                "https://source.unsplash.com/random/?food&1",
                "https://source.unsplash.com/random/?food&2",
                "https://source.unsplash.com/random/?food&3",
                "https://source.unsplash.com/random/?food&4",
              ]}
            /> */}
            <div className="w-full h-[500px]">
              <Image
                src={data?.image}
                alt=""
                height={1000}
                width={1000}
                className=" w-full h-full object-cover rounded-md shadow-lg object-center"
                quality={100}
              />
            </div>
            <Container className="mt-4">
              <Rating.Descripted count={data?.star} rate={data?.rate} />
              <Heading.H2>{data?.nameResto}</Heading.H2>
              <div className="flex flex-row gap-1 items-center">
                <IconMap size={18} strokeWidth={2} color={"#615A56"} />
                <p className="md:text-[0.75rem] text-[0.5rem] font-normal">
                  {data?.location}
                </p>
              </div>
              <br />
              <TabDesc page="kuliner" desk={data?.deskripsi} map={data?.map} />
            </Container>
          </div>
        </div>
        {/* Ulasan */}
        <div className="w-full mt-8 flex flex-col gap-3">
          <Heading.H2>Ulasan Pengunjung</Heading.H2>
          <ReviewVisitor
            openReview={openReview}
            setOpenReview={setOpenReview}
            count={data?.star}
            rate={data?.rate}
            review={data?.reviewItem}
          />
        </div>
        {/* Restoran Serupa */}
        <div className="w-full mt-8">
          <Heading.H2>Restoran Serupa</Heading.H2>
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
            {state &&
              state?.map((v, i) => {
                return (
                  <SwiperSlide key={i.toString()}>
                    <QuickCard
                      imageUrl={v?.image}
                      title={v?.nameResto}
                      kategori={v?.location}
                      opeclos={v?.status}
                      review_count={v?.star}
                      link="/kuliner/1"
                      price={v?.price}
                      rate={v?.rate}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </MainContent>
      <Footer />
    </Wrapper>
  );
}
