import ServiceDetail from "../../../public/assets/imgs/thumb/fund.png";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.png";
import Qlogo from "../../../public/assets/imgs/thumb/q-logo.png";
import Image from "next/image";

const Funding = () => {
  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">Funding DEGRADED LAND</h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span></span>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="service__detail-img">
                <Image priority width={500} style={{ height: "auto" }} src={ServiceDetail} alt="Service detail image" />
                <Image priority width={51} style={{ height: "auto" }} src={Shape6} alt="Service shape image" className="sd-shape" />
              </div>
              <div className="service__detail-content">
                <p>{"QUDEX can also help you obtain funding and support from businesses that are looking to sponsor QUDEs, which can directly fund the implementation of your land’s regeneration roadmap."}</p>
                <p>This can provide you with the resources you need to maintain and improve your land in a sustainable way, while also contributing to the larger effort to regenerate degraded lands and habitats around the world.</p>
              </div>
            </div>
          </div>
          <div className="row pt-100">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">{/* <span></span> */}</div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                  <Image priority width={200} style={{ height: "auto" }} src={Qlogo} alt="Service detail image" />
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                  <p>The QUDEX PLATFORM can also be a valuable resource for conservation organizations and researchers, allowing them to track and monitor land regeneration efforts and the impact on biodiversity and ecosystem health. It will leverage your networks and provide user engagement . SIGN UP TODAY.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Funding;
