import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import Image1 from "../../../public/assets/imgs/qudex/savequdex.png";


gsap.registerPlugin(ScrollTrigger);

const ImpactDirectoryHero = () => {
  return (
    <>
      <section className="service__area-3 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-150 text-anim">
                {/* <h2 className="sec-sub-title title-anim">Services</h2> */}
                <h3 className="sec-title title-anim pt-5">
                IMPACT <br /> SCORE CARD
                </h3>
                <p>
                Explore a growing network of today’s business leaders on a mission to save the planet from over consumption. Search, interact and engage with your favorite brands. Unlock your scorecard on. <a href="https://www.natureoffset.com/" target="_blank">NATUREOFFSET.COM</a>
                </p>
              </div>
            </div>
            <div className="col-xxl-8 ms-auto impact-img">
              <Image
                className="img-fluid" 
                src={Image1} 
                alt="Image" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactDirectoryHero;
