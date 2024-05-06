import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "@/plugins";
import Link from "next/link.js";
import About31 from "../../../public/assets/imgs/about/3/1.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollSmoother);

const DigitalMarketingAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="about__area-3">
        <div className="container pt-140 pb-110">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="about__img-3">
                <Image priority style={{ width: "auto", height: "auto" }} src={About31} alt="About Thumbnail" data-speed="auto" className="smootherReset768" />
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim"></h2>
                <h3 className="sec-title title-anim">WHAT IS QUDE™</h3>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim">
                  <p>QUDE, “Quantitative Environmental Data Evaluation”, is the core technology behind QUDEX’s offering. It represents a sophisticated method of collecting, analyzing, and presenting environmental data to provide actionable insights. QUDE technology transforms raw data into a valuable digital asset that can be used to assess environmental impact and provide meaningful, quantifiable metrics for sustainability.</p>
                  <ul className="sec-text text-anim" style={{ color: "white" }}>
                    <li>1. Satellites</li>
                    <li>2. Field data entry</li>
                    <li>3. Lidar</li>
                    <li>4. Drones</li>
                    <li>5. AI</li>
                    <li>6. Metaverse</li>
                    <li>7. Qlens augmented reality</li>
                  </ul>
                  <br />
                  <p>QUDE™ Is a global standard to open the world to planet technologies that create positive change. Opening the door for innovation for generations to come.</p>
                  <div className="btn_wrapper">
                    <Link className="wc-btn-light btn-hover btn-item" href="/about">
                      <span></span> Explore Us
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingAbout;
