import Image from "next/image";
import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../public/assets/imgs/bg/map.jpg";
import ThumbDev2 from "../../../public/assets/imgs/bg/road-map.jpg";
import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import Thumb41 from "../../../public/assets/imgs/thumb/4/1.png";
import Shape21 from "../../../public/assets/imgs/shape/21.png";
import Shape22 from "../../../public/assets/imgs/shape/22.png";

const LandPartnerOne = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come pb-5" ref={charAnim}>
                  QUDEX mapping and Land Management tools can bring maximum potential .
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pb-5">
              <div className="development__wrapper">
                <p className="pb-3">As a landowner or organization , QUDEX can provide you with valuable resources and support to help you maintain and regenerate your land in a sustainable way.</p>
                <p className="pb-3">Firstly, QUDEX can conduct a pre-assessment of your land and develop a regeneration roadmap, which outlines the steps needed to restore and maintain the land’s ecological balance. This roadmap is based on advanced technology such as satellite imagery, lidar, AI apps, as well as field data collected by experts.</p>
                <p>Overall, QUDEX can be a valuable partner for landowners or Organizations looking to maintain and regenerate their land in a sustainable way, while also contributing to larger conservation efforts.</p>
              </div>
            </div>
            <div className="cta__area-4">
              <div className="container g-0 line_4 pb-150">
                <div className="line-col-4">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div className="cta__inner-4">
                  <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div className="cta__content-4">
                        <Image priority width={270} height={264} src={Thumb41} alt="Cta Image" />
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div className="cta__content-4">
                        <h2 className="cta__title-4 title-anim">Lat’s make someting great together</h2>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div className="cta__content-4 text-anim">
                        <p>Using year-over-year most design approaches and latest techs website will be lightly.</p>
                        <Link className="btn-started" href="/contact">
                          Join as Partner
                          <span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Image priority width={150} style={{ height: "auto" }} src={Shape21} alt="shape Image" className="cta-shape" />
                  <Image priority width={60} height={38} src={Shape22} alt="shape Image" className="cta-shape-2" />
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image priority style={{ width: "800", height: "auto" }} src={ThumbDev1} alt="Development Image" data-speed="auto" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="development__img">
                <Image priority style={{ width: "100%", height: "auto" }} src={ThumbDev2} alt="Development Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandPartnerOne;
