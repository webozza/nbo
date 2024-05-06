import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import work1 from "../../../public/assets/imgs/qudex/what-is-qude-4.png";
import arrow from "../../../public/assets/imgs/qudex/long-arrow.png";
import earth from "../../../public/assets/imgs/qudex/m-ofearth.png";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";

const QudexBusiness = () => {

  return (
    <>
      <div className="about__area-8 sp-x">
        <h6 className="text-end about-sub-right">Add QUDE™ to your business</h6>
        <div className="section_wrapper b-100">
          <h4 className="react_border">
            <span>05</span>
          </h4>
        </div>
        <div className="row justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="about8">
              <h2 className="about8__title fade_bottom_2">
                    ADD QUDE™ <br /> +TO YOUR BUSINESS
              </h2>
              <p className="about-business">+ ADD QUDE™ to any technology to add verifiable eco impact it&apos;s like sponsoring parts of nature</p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="business-box">
              <div className="business-img">
                  <div className="text-center">
                    <p className="fw-semi-bold mb-4">1 QUDE</p>
                    <Image 
                      width={200}
                      src={work1}
                      alt="Qudex"
                    />
                  </div>
                  <div className="regenerate">
                    <div className="d-flex flex-column">
                        <p className="text-center fw-bold">Sponsored </p>                            
                        <div class="image-arrow"> 
                          <Image src={arrow} alt="Qudex" />
                        </div>
                    </div>
                  </div>
                  <div className="text-center">
                  <p className="fw-semi-bold mb-4">1 QUDE</p>
                  <Image 
                    width={200}
                    src={earth}
                    alt="Qudex"
                  />
                </div>
              </div>
              <div className="cursor-btn btn-wrapper">
                    <Link
                      className="btn-item wc-btn-primary btn-hover"
                      href="/"
                    >
                      <span></span> Click Here To  add QUDE{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QudexBusiness;
