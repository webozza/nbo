import { useEffect } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import Image1 from "../../../public/assets/imgs/awards/audi.jpg";
import Image2 from "../../../public/assets/imgs/awards/image-22.png";
import Image3 from "../../../public/assets/imgs/awards/film.jpg";
import Image4 from "../../../public/assets/imgs/awards/qudex-in-game.jpg";
import Image5 from "../../../public/assets/imgs/awards/forsale.jpg";
import Image6 from "../../../public/assets/imgs/awards/esports.jpg";
import Image7 from "../../../public/assets/imgs/awards/image-25.png";

gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const DigitalAgencyWorkflow = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_left", { x: -20, opacity: 0 });
        gsap.to(".fade_left", {
          scrollTrigger: {
            trigger: ".fade_left",
            start: "top center+=300",
          },
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          stagger: {
            each: 0.2,
          },
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="workflow__area">
        <div className="container g-0 line pt-140 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                {/* <h2 className="sec-sub-title title-anim">Workflow</h2> */}
                <h3 className="sec-title title-anim">Your business + QUDE™ = ECO</h3>
              </div>
            </div>

            <div className="col-xxl-12 workflow__slider">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={0}
                slidesPerView={1}
                freemode="true"
                loop={true}
                speed={2000}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                <div className="swiper-wrapper swiper-wrapper-2">
                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step"></h4>
                      <h5 className="workflow__number">01</h5>
                      <Image
                        priority
                        width={200}
                        style={{ height: "auto" }}
                        src={Image1}
                        alt=""
                      />
                      <p className="pt-3">Clean Energy</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="workflow__slide fade_left">
                      <h4 className="workflow__step"></h4>
                      <h5 className="workflow__number">02</h5>
                      <Image
                        priority
                        width={200}
                        style={{ height: "auto" }}
                        src={Image2}
                        alt=""
                      />
                      <p className="pt-3">Hair, Beauty Salons and Health  Wealness</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="workflow__slide fade_left">
                      <h4 className="workflow__step"></h4>
                      <h5 className="workflow__number">03</h5>
                      <Image
                        priority
                        width={200}
                        style={{ height: "auto" }}
                        src={Image3}
                        alt=""
                      />
                      <p className="pt-3">TV & Film production</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="workflow__slide fade_left">
                      <h4 className="workflow__step"></h4>
                      <h5 className="workflow__number">04</h5>
                      <Image
                        priority
                        width={200}
                        style={{ height: "auto" }}
                        src={Image4}
                        alt=""
                      />
                      <p className="pt-3">Online Rewards & Gaming</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="workflow__slide fade_left">
                      <h4 className="workflow__step"></h4>
                      <h5 className="workflow__number">05</h5>
                      <Image
                        priority
                        width={200}
                        style={{ height: "auto" }}
                        src={Image5}
                        alt=""
                      />
                      <p className="pt-3">Real Estate </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="workflow__slide fade_left">
                      <h4 className="workflow__step"></h4>
                      <h5 className="workflow__number">06</h5>
                      <Image
                        priority
                        width={200}
                        style={{ height: "auto" }}
                        src={Image6}
                        alt=""
                      />
                      <p className="pt-3">E sports</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="workflow__slide fade_left">
                      <h4 className="workflow__step"></h4>
                      <h5 className="workflow__number">07</h5>
                      <Image
                        priority
                        width={200}
                        style={{ height: "auto" }}
                        src={Image7}
                        alt=""
                      />
                      <p className="pt-3">Marketing Agency </p>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyWorkflow;
