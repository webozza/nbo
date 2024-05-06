import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import work1 from "../../../public/assets/imgs/qudex/what-is-qude-4.png";
import attribute1 from "../../../public/assets/imgs/qudex/attribute-land.png";
import attribute2 from "../../../public/assets/imgs/qudex/attribute-tree.png";
import attribute3 from "../../../public/assets/imgs/qudex/attribute-carbone.png";
import attribute4 from "../../../public/assets/imgs/qudex/attribute-water.png";
import attribute5 from "../../../public/assets/imgs/qudex/attribute-habitat.png";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Image from "next/image";

const QudexCarbonValue = () => {

  return (
    <>
      <div className="about__area-8 sp-x">
        <h6 className="text-end about-sub-right">AI CSR & ESG</h6>
        <div className="section_wrapper b-100">
          <h4 className="react_border">
            <span>04</span>
          </h4>
        </div>
        <div className="row justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="about8">
              <h2 className="about8__title fade_bottom_2">
              Carbon value + Ecological value
              </h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="carbon-value">
                  <Image 
                    width={250}
                    src={work1}
                    alt="Qudex"
                  />
                  <div className="text-center">
                      <h1>1 QUDE <br />
                          = <br />
                          AUTOMATIC
                      </h1>
                      <h1>BUSINESS CSR</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QudexCarbonValue;
