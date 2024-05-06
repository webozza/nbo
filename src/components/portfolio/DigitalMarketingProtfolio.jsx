import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio31 from "../../../public/assets/imgs/portfolio/3/1.jpg";
import Portfilio32 from "../../../public/assets/imgs/portfolio/3/2.jpg";
import Portfilio33 from "../../../public/assets/imgs/portfolio/3/3.jpg";
import Portfilio34 from "../../../public/assets/imgs/portfolio/3/4.jpg";
import Image from "next/image";
import sliderImage1 from "../../../public/assets/imgs/slider/1.jpg";
import sliderImage2 from "../../../public/assets/imgs/slider/2.png";
import sliderImage3 from "../../../public/assets/imgs/slider/3.png";
import sliderImage4 from "../../../public/assets/imgs/slider/4.jpg";
import sliderImage5 from "../../../public/assets/imgs/slider/5.jpg";
import sliderImage6 from "../../../public/assets/imgs/slider/6.jpg";
import sliderImage7 from "../../../public/assets/imgs/slider/7.jpg";
import sliderImage8 from "../../../public/assets/imgs/slider/8.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const sliderData = [
  {
    id: 1,
    title: "Lion",
    image: sliderImage1,
  },
  {
    id: 2,
    title: "Bee",
    image: sliderImage2,
  },
  {
    id: 3,
    title: "Tiger",
    image: sliderImage3,
  },
  {
    id: 4,
    title: "Bear",
    image: sliderImage4,
  },
  {
    id: 5,
    title: "Koala",
    image: sliderImage5,
  },
  {
    id: 6,
    title: "Great Grey Owl",
    image: sliderImage6,
  },
  {
    id: 7,
    title: "Elephant",
    image: sliderImage7,
  },
  {
    id: 8,
    title: "Killer Whale",
    image: sliderImage8,
  },
  // {
  //   id: 9,
  //   title: "Website",
  //   image: Portfilio31,
  // },
  // {
  //   id: 10,
  //   title: "Website",
  //   image: Portfilio33,
  // },
  // {
  //   id: 11,
  //   title: "Website",
  //   image: Portfilio34,
  // },
];

const DigitalMarketingProtfolio = () => {
  return (
    <>
      <section className="portfolio__area-3">
        <div className="container pt-100 pb-150">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">
                  INTRODUCING <br />
                  BIO-ASSETS
                </h2>
                <p className="slider-section-sub-title">Nature’s Treasury: Beyond Tangible Assets</p>
                <p className="slider-section-bio">Bio-Assets signify the vast wealth nature bestows upon us. With Qudex, we recognize, value, and promote the preservation of these living treasures. Explore a dimension where nature is not just seen but valued and protected.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12 portfolio__slider-3">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effectfade="true"
                loop={true}
                speed={1500}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".pp-prev",
                  nextEl: ".pp-next",
                }}
                pagination={{ el: ".swiper-pagination", type: "fraction" }}
              >
                <div className="swiper-wrapper">
                  {sliderData.map((data) => (
                    <SwiperSlide key={data.id}>
                      <div className="portfolio__slide-3">
                        <Link href="/service-details">
                          <h3 className="portfolio__title-3">
                            +<span>{data.title}</span>
                          </h3>
                          <Image priority width={550} style={{ height: "auto" }} src={data.image} alt="Portfolio Image" />
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>

                <div className="swiper-pagination"></div>

                <div className="swiper-btn">
                  <div style={{ cursor: "pointer" }} className="pp-prev">
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </div>
                  <div style={{ cursor: "pointer" }} className="pp-next">
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingProtfolio;
