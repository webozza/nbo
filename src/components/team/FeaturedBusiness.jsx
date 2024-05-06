import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import SwiperCore, { FreeMode } from "swiper";
import Star from "../../../public/assets/imgs/qudex/star-color.png";
import Star2 from "../../../public/assets/imgs/qudex/star-without-color.png";
import Lock from "../../../public/assets/imgs/qudex/lock.png";
import Brand1 from "../../../public/assets/imgs/qudex/jjbean.png";
import Brand2 from "../../../public/assets/imgs/qudex/socailblack-Recovered.jpg";
import Brand3 from "../../../public/assets/imgs/qudex/myecodropplusapp.png";
import Brand4 from "../../../public/assets/imgs/qudex/YosemiteCleanEnergy.png";
import Brand5 from "../../../public/assets/imgs/qudex/biostewardswithtag.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link.js";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const FeaturedBusiness = () => {
  const charAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }

  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    const target = e.target;
    let tHero = gsap.context(() => {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Team Page Team Cursor
      if (target.closest(".team__slider")) {
        tl.to(
          team_cursor,
          {
            opacity: 1,
            ease: "power4.out",
          },
          "-=0.3"
        );
      } else {
        t2.to(
          team_cursor,
          {
            opacity: 0,
            ease: "power4.out",
          },
          "-=0.3"
        );
      }
    });
    return () => tHero.revert();
  }

  const [slides, setSlides] = useState([
    {
      id: 1,
      title: "JJBEAN",
      category: "Food & Beverage",
      action: 9,
      ecoInfluence: 90,
      favorited: 99,
      image: Brand1,
      star: Star,
    },
    {
      id: 2,
      title: "WE AIR",
      category: "MEDICAL",
      action: 8,
      ecoInfluence: 98,
      favorited: 99,
      image: Brand2,
      star: Star,
    },
    {
      id: 3,
      title: "Myecodrop",
      category: "Delivery",
      action: 7,
      ecoInfluence: 78,
      favorited: 88,
      image: Brand3,
      star: Star,
    },
    {
      id: 4,
      title: "Yosemite Clean energy",
      category: "Energy",
      action: 88,
      ecoInfluence: 99,
      favorited: 78,
      image: Brand4,
      star: Star,
    },
    {
      id: 5,
      title: "BioStewards",
      category: "Land management",
      action: null,
      ecoInfluence: null,
      favorited: null,
      image: Brand5,
      star: Star2,
      isLocked: true,
    },
  ]);

  SwiperCore.use([FreeMode]);

  return (
    <>
      <section className="team__area-6 pb-100">
        <div className="container line pt-100 pb-5">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 offset-xxl-4 offset-xl-4">
              <div>
                <h3 className="sec-title featured-business-title animation__char_come" ref={charAnim}>
                  FEATURE <br /> <span className="fea-business">BUSINESS</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={2000}
            breakpoints={{
              640: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="featured-business-item">
                  <div className="top-content">
                    <div className="star">
                      <Image className="img-fluid" src={slide.star} alt="Qudex" />
                    </div>
                    <div className="image">
                      <Image className="img-fluid" src={slide.image} alt="QUDEX platform" />
                    </div>
                    <div className="text text-center">
                      <h3>{slide.title}</h3>
                      <p>{slide.category}</p>
                    </div>
                  </div>
                  {slide.isLocked ? (
                    <div className="background-black background-black-lock">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text">
                          <h3>HELP UNLOCK</h3>
                        </div>
                        <div className="image">
                          <Image className="img-fluid" src={Lock} alt="Lock" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="background-black">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text">
                          <p>Action</p>
                          <h3>{slide.action}</h3>
                        </div>
                        <div className="text">
                          <p>ECO-Influence</p>
                          <h3>{slide.ecoInfluence}</h3>
                        </div>
                        <div className="text">
                          <p>Favorited</p>
                          <h3>{slide.favorited}</h3>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FeaturedBusiness;
