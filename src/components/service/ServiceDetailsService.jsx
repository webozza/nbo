import ServiceDetail from "../../../public/assets/imgs/thumb/planet-group.png";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.png";
import Image from "next/image";

const ServiceDetailsService = () => {
  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Powered by QUDE™
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span></span>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="service__detail-img">
                <Image
                  priority
                  width={560}
                  style={{ height: "auto" }}
                  src={ServiceDetail}
                  alt="Service detail image"
                />
                <Image
                  priority
                  width={51}
                  style={{ height: "auto" }}
                  src={Shape6}
                  alt="Service shape image"
                  className="sd-shape"
                />
              </div>
              <div className="service__detail-content">
                <p>
                  {
                    "We find the problems and do the work you take the credit it’s like sponsoring your own giveback program.QUDE™ is verified proof of 1 square meter of Earth regenerated."
                  }
                </p>
                <p>
                   We quantify the data in every m2 and break down real work to help understand what where and why and serve it up for innovative solutions to keep on supporting nature. QUDE™ is the future of CSR and helping biodiversity, From soil, to water, to trees and all animals, QUDE™ mapping shows you exactly how your support impacts the natural world.


                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsService;
