import Image from "next/image";
import Brand1 from "../../../public/assets/imgs/brand/shield.png";
import Brand2 from "../../../public/assets/imgs/brand/shield-2.png";
import Brand3 from "../../../public/assets/imgs/brand/shield-3.png";
import Brand4 from "../../../public/assets/imgs/brand/shield-4.png";
import Manage1 from "../../../public/assets/imgs/brand/QLENS-scaled.jpeg";
import Tik from "../../../public/assets/imgs/brand/tik.png";
import { useEffect, useRef } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";

const ManagementFramwork = () => {
  const charAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  return (
    <>
      <section className="workflow__area-6">
        <div className="container g-0 line pt-100 pb-50">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pb-4">
              <Image width={648} src={Manage1} alt="manager Image" className="img-fluid" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pb-4">
              <h2 className="sec-title animation__char_come pb-5" ref={charAnim}>
                Management <br />
                Framework
              </h2>
              <p ref={charAnim}>
                Once the roadmap is developed and agreed upon, QUDEX can <br />
                help you implement the necessary steps to regenerate your land.
                <br /> This can include things like planting native species, restoring wetlands, <br />
                implementing sustainable farming practices, Forest fire mitigation, Clean energy.
              </p>
            </div>
          </div>
          <div className="line-3"></div>
          <div className="workflow__wrapper-9">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 text-center">
                <div className="pb-5">
                  <Image width={60} height={60} src={Brand1} alt="Image" />
                </div>
                <div className="workflow__slide-6">
                  <p>Land Attributes support better land use richness os soils</p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 text-center">
                <div className="pb-5">
                  <Image width={60} height={60} src={Brand2} alt="Image" />
                </div>
                <div className="workflow__slide-6">
                  <p>Tree Attributes plant trees and help regenerate forest</p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 text-center">
                <div className="pb-5">
                  <Image width={60} height={60} src={Brand3} alt="Image" />
                </div>
                <div className="workflow__slide-6">
                  <p>Water Attributes protect natural water sources and systems</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 text-center">
                <div className="pb-5">
                  <Image width={60} height={60} src={Brand4} alt="Image" />
                </div>
                <div className="workflow__slide-6">
                  <p>Carbon Attributes carbon equivalent offset and clean energy production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManagementFramwork;
