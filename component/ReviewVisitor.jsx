import { BREAKPOINTS } from "./Breakpoints";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Rating from "./Rating";
import { useBreakpoint } from "use-breakpoint";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import Container from "./Container";
import RatingSlider from "./RatingSlider";

export default function ReviewVisitor({
  openReview,
  setOpenReview,
  count,
  rate,
  review,
}) {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "xs");
  return (
    <div>
      {openReview ? (
        <Container className="!flex !flex-col md:!flex-row !gap-6 ">
          <div className="flex flex-col w-full gap-3">
            <div
              className="flex flex-row text-black text-sm font-semibold gap-2 cursor-pointer items-center"
              onClick={() => setOpenReview(false)}
            >
              <div className="p-1  rounded-full shadow-md border-[0.5px] border-black/10">
                <IconArrowLeft className="w-4 h-4 font-bold text-gray-600" />
              </div>
              Kembali
            </div>
            <div className="flex flex-col gap-6 md:flex-row w-full">
              <div className="w-full md:w-[20%]">
                <p className="flex gap-2 cursor-pointer">Ulasan Pengguna</p>
                <Rating.Descripted count={count} rate={rate} />
              </div>
              <div className="w-full flex flex-col gap-6">
                <RatingSlider />
                <div className="flex flex-col gap-5 w-full h-full max-h-96 overflow-y-auto scrollbar pr-2">
                  {review &&
                    review?.map((item) => (
                      <ReviewCard
                        open={true}
                        key={item?.idUser}
                        image={item?.imageUser}
                        name={item?.nameUser}
                        rating={item?.ratingUser}
                        text={item?.text}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container className="!flex !flex-col md:!flex-row !gap-6">
          <div className="flex flex-col gap-2 w-full md:w-[20%]">
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => setOpenReview(true)}
            >
              <p>Ulasan Pengguna</p>
              <div className="p-1  rounded-full shadow-md border-[0.5px] border-black/10">
                <IconArrowRight className="w-4 h-4 font-bold text-gray-600" />
              </div>
            </div>
            <Rating.Descripted count={count} rate={rate} />
            <RatingSlider />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-[80%]">
            <p>Ulasan yang mungkin membantumu</p>
            <div className="flex flex-row gap-4 scrollbar-hide cursor-pointer w-full h-fit md:h-full">
              <Swiper
                spaceBetween={20}
                slidesPerView={
                  breakpoint === "xs"
                    ? 1.3
                    : breakpoint === "sm"
                    ? 2.3
                    : breakpoint === "md"
                    ? 2.3
                    : breakpoint === "lg"
                    ? 2.8
                    : breakpoint === "xl"
                    ? 3.6
                    : breakpoint === "2xl"
                    ? 3.6
                    : 1.6
                }
                // loop={loopUlasan}
              >
                {review &&
                  review?.map((item, i) => {
                    return (
                      <SwiperSlide key={i.toString()}>
                        <ReviewCard
                          open={true}
                          key={item?.idUser}
                          image={item?.imageUser}
                          name={item?.nameUser}
                          rating={item?.ratingUser}
                          text={item?.text}
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}
