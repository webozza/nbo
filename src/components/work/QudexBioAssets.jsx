import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import soil from "../../../public/assets/imgs/qudex/Group-1176.png";
import tree from "../../../public/assets/imgs/qudex/bioa-tree.png";
import water from "../../../public/assets/imgs/qudex/bioa-oil-water.png";
import climate from "../../../public/assets/imgs/qudex/bioa-climate.png";
import wildlife from "../../../public/assets/imgs/qudex/bioa-wildlife.png";
import damage from "../../../public/assets/imgs/qudex/bioa-damage.png";
import img1 from "../../../public/assets/imgs/qudex/1.png";
import img2 from "../../../public/assets/imgs/qudex/2.png";
import img3 from "../../../public/assets/imgs/qudex/3.png";
import img4 from "../../../public/assets/imgs/qudex/4.png";
import img5 from "../../../public/assets/imgs/qudex/5.png";
import img6 from "../../../public/assets/imgs/qudex/6.png";
import img7 from "../../../public/assets/imgs/qudex/7.png";
import img8 from "../../../public/assets/imgs/qudex/8.png";
import img9 from "../../../public/assets/imgs/qudex/9.png";
import img10 from "../../../public/assets/imgs/qudex/10.png";
import img11 from "../../../public/assets/imgs/qudex/11.png";
import img12 from "../../../public/assets/imgs/qudex/12.png";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Image from "next/image";

const QudexBioAssets = () => {

  return (
    <>
      <div className="about__area-8 sp-x">
          <h6 className="text-end about-sub-right">Bio Assets</h6>
          <div className="section_wrapper b-100">
            <h4 className="react_border">
              <span>03</span>
            </h4>
          </div>
        <div className="row justify-content-between">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="about8">
                  <h2 className="about8__title fade_bottom_2">
                  QUDE™ <br /> BIO ASSETS
                  </h2>
                  <p className="sub-title-bio">Interact with nature.</p>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 pt-5">
              <div className="d-flex flex-column flex-xl-row justify-content-center  bio-assets mt-5">
                  <div className="item d-flex flex-row flex-xl-column">
                      <div className="polygon">
                          <div className="image"> 
                              <Image width={40} height={40} src={soil} alt="Bio" />
                            </div>
                          <h3>560</h3>
                          <p>Soil</p>
                        </div>      
                      <div className="line line-1">
                          <div className="dots-absolute">
                            <div className="dots-relative">
                            <div className="dots-2"></div>
                            <div className="dots-3"></div>
                            </div>
                          </div>
                      </div>
                      <div className="line line-2">
                        <div className="dots-absolute">
                            <div className="dots-relative">
                            <div className="dots-2"></div>
                            <div className="dots-3"></div>
                            </div>
                        </div>
                      </div>
                      <div className="d-flex flex-xl-column flex-row">
                          <div className="image-b image-b-1">
                              <Image width={70} height={70} src={img1} alt="Bio assets"/>
                          </div>
                          <div className="image-b image-b-2">
                              <Image width={70} height={70} src={img2} alt="Bio assets"/>  
                          </div>
                      </div>
                  </div>
                  <div className="item d-flex flex-row flex-xl-column">
                      <div className="polygon">
                        <div className="image">
                            <Image width={40} height={40} src={tree} alt="Bio assets" />
                        </div>
                        <h3>18</h3>
                        <p>Trees</p>
                      </div>
                      <div className="line line-1">
                        <div className="dots-absolute">
                            <div className="dots-relative">
                            <div className="dots-2"></div>
                            <div className="dots-3"></div>
                            </div>
                        </div>
                      </div>
                        <div className="line line-2">
                          <div className="dots-absolute">
                              <div className="dots-relative">
                              <div className="dots-2"></div>
                              <div className="dots-3"></div>
                              </div>
                          </div>
                        </div>
                        <div className="d-flex flex-xl-column flex-row">
                              <div className="image-b image-b-1">
                                  <Image width={70} height={70} src={img3} alt="Bio assets"/>
                              </div>
                              <div className="image-b image-b-2">
                                  <Image width={70} height={70} src={img4} alt="Bio assets"/>  
                              </div>
                          </div>
                  </div>
                  <div className="item d-flex flex-row flex-xl-column">
                    <div className="polygon">
                    <div className="image">
                        <Image width={40} height={40} src={water} alt="Bio" /> 
                    </div>
                    <h3>90</h3>
                    <p>Water</p> 
                    </div>       
                    <div className="line line-water">
                    <div className="dots-absolute">
                        <div className="dots-relative">
                        <div className="dots-2"></div>
                        <div className="dots-3"></div>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex flex-xl-column flex-row">
                      <div className="image-b image-b-water">
                          <Image width={70} height={70} src={img5} alt="Bio assets"/>
                      </div>
                    </div>
                  </div>
                  <div className="item d-flex flex-row flex-xl-column">
                    <div className="polygon">
                    <div className="image">
                        <Image width={40} height={40} src={climate} alt="Bio assets" />
                    </div>
                        <h3>590</h3>
                          <p>Climate</p>
                      </div>    
                      <div className="line line-1 line-climate-1">
                        <div className="dots-absolute">
                            <div className="dots-relative">
                            <div className="dots-2"></div>
                            <div className="dots-3"></div>
                            </div>
                        </div>
                      </div>
                      <div className="line line-2 line-climate-2">
                        <div className="dots-absolute">
                            <div className="dots-relative">
                            <div className="dots-2"></div>
                            <div className="dots-3"></div>
                            </div>
                        </div>
                      </div>
                      <div className="line line-3 line-climate-3">
                          <div className="dots-absolute">
                              <div className="dots-relative">
                              <div className="dots-2"></div>
                              <div className="dots-3"></div>
                              </div>
                          </div>
                      </div>
                      <div className="d-flex flex-xl-column flex-row">
                          <div className="image-b image-b-1 image-b-climate-1">
                                <Image width={70} height={70} src={img6} alt="Bio assets"/>
                          </div>
                          <div className="image-b image-b-2 image-b-climate-2">
                                <Image width={70} height={70} src={img7} alt="Bio assets"/>
                          </div>
                          <div className="image-b image-b-3 image-b-climate-3">
                                <Image width={70} height={70} src={img8} alt="Bio assets"/>
                          </div>
                      </div>
                  </div>    
                  <div className="item d-flex flex-row flex-xl-column">
                      <div className="polygon">
                          <div className="image">
                              <Image width={40} height={40} src={wildlife} alt="Bio assets" /> 
                          </div>
                          <h3>991,981</h3>
                          <p>Wildlife</p>
                      </div>
                      <div className="line line-1 line-wildlife-1">
                          <div className="dots-absolute">
                              <div className="dots-relative">
                              <div className="dots-2"></div>
                              <div className="dots-3"></div>
                              </div>
                          </div>
                      </div>
                      <div className="line line-2 line-wildlife-2">
                          <div className="dots-absolute">
                              <div className="dots-relative">
                              <div className="dots-2"></div>
                              <div className="dots-3"></div>
                              </div>
                          </div>
                      </div>
                      <div className="line line-3 line-wildlife-3">
                              <div className="dots-absolute">
                                  <div className="dots-relative">
                                  <div className="dots-2"></div>
                                  <div className="dots-3"></div>
                                  </div>
                              </div>
                      </div>
                      <div className="line line-4 line-wildlife-4">
                          <div className="dots-absolute">
                              <div className="dots-relative">
                              <div className="dots-2"></div>
                              <div className="dots-3"></div>
                              </div>
                          </div>
                      </div>
                      <div className="d-flex flex-xl-column flex-row">
                          <div className="image-b image-b-1 image-b-wildlife-1">
                              <Image width={70} height={70} src={img9} alt="Bio assets"/>
                          </div>
                          <div className="image-b image-b-2 image-b-wildlife-2">
                              <Image width={70} height={70} src={img10} alt="Bio assets"/>
                          </div>
                          <div className="image-b image-b-3 image-b-wildlife-3">
                              <Image width={70} height={70} src={img11} alt="Bio assets"/>
                          </div>
                          <div className="image-b image-b-4 image-b-wildlife-4">
                              <Image width={70} height={70} src={img12} alt="Bio assets"/>
                          </div>
                      </div>
                  </div>
                  <div className="item">
                      <div className="polygon">
                          <div className="image">
                              <Image width={40} height={40} src={damage} alt="Bio assets" /> 
                          </div>
                          <h3>990,000</h3>
                          <p>Damage</p>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default QudexBioAssets;
