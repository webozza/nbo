import Image from "next/image";
import Brand1 from "../../../public/assets/imgs/brand/shield.png";
import Brand2 from "../../../public/assets/imgs/brand/shield-2.png";
import Brand3 from "../../../public/assets/imgs/brand/shield-3.png";
import Brand4 from "../../../public/assets/imgs/brand/shield-4.png";
import { useEffect, useRef } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";
const QudexDetailsWorkflow = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="workflow__area-6">
        <div className="container-q g-0 pb-130">
          <h2 className="sec-title animation__char_come pb-5" ref={charAnim}>
          QUDE™ <br />
          ATTRIBUTES
          </h2>
          <div className="line-3"></div>
          {/* <div className="workflow__wrapper-6">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="pb-5">
                  <Image width={60} height={60} src={Brand1} alt="Image" />
                </div>
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">Offset Carbon</h6>
                  <p>
                    QUDE™ lets you offset your carbon and nature based offsets
                  </p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="pb-5">
                  <Image width={60} height={60} src={Brand2} alt="Image" />
                </div>
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    Automatic offset systems
                  </h6>
                  <p>Connect Nature based offsets seamlessly your business</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="pb-5">
                  <Image width={60} height={60} src={Brand3} alt="Image" />
                </div>
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">Industry specific</h6>
                  <p>We are always growing our tools to fit your needs.</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="pb-5">
                  <Image width={60} height={60} src={Brand4} alt="Image" />
                </div>
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    Add Legacy to your business
                  </h6>
                  <p>
                    Take your business to a level of being remembered and save
                    the planet.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default QudexDetailsWorkflow;
