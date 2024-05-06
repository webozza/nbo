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

const QudexAttributes = () => {

  return (
    <>
      <div className="about__area-8 sp-x">
        <h6 className="text-end about-sub-right">Attributes</h6>
        <div className="section_wrapper b-100">
          <h4 className="react_border">
            <span>02</span>
          </h4>
        </div>
        <div className="row justify-content-between">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="about8">
              <h2 className="about8__title fade_bottom_2">
              QUDE™ <br /> ATTRIBUTES
              </h2>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 main-img">
                  <Image 
                    width={250}
                    src={work1}
                    alt="Qudex"
                  />
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                <div class="d-flex image-tr attribute-imgs">
                          <div class="image-tr-image">
                                <div class="item item-1">
                                  <Image width={80} src={attribute1} alt="qudex attribute" />
                                </div>
                                <div class="item item-2">
                                  <Image width={80} src={attribute2} alt="qudex attribute" />
                                </div>
                                  <div class="item item-3">
                                    <Image width={80} src={attribute3} alt="qudex attribute" />
                                </div>
                                  <div class="item item-4">
                                    <Image width={80} src={attribute4} alt="qudex attribute" />
                                </div>
                                <div class="item item-5">
                                  <Image width={80} src={attribute5} alt="qudex attribute" />
                                </div>
                          </div>
                          <ul className="attribute-li">
                                <li>Land Attributes support better land use richness of soils</li>
                            
                                <li>Tree Attributes plant trees and help regenerate forests</li>

                                <li>Water Attributes protect natural water sources and eco systems</li>

                                <li>Carbon Attributes carbon equivalent offset and clean energy production</li>

                                <li>Habitat Attributes protect the homes and biodiversity of wildlife</li> 
                          </ul>
                        </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QudexAttributes;
