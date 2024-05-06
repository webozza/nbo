import React from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { SplitText } from "@/plugins";
import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../public/assets/imgs/bg/map.jpg";
import ThumbDev2 from "../../../public/assets/imgs/bg/road-map.jpg";
import animationCharCome from "@/lib/utils/animationCharCome";

const LandManagement = () => {
  const titleLeft = useRef();
  const titleRight = useRef();
  const charAnim = useRef();
  const heroTextAnim = useRef();
  const heroAnchor = useRef();
  const heroAnchor1 = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let split_creatives = new SplitText(titleLeft.current, { type: "chars" });
      let split_solutions = new SplitText(titleRight.current, {
        type: "chars",
      });
      let split_text_animation = new SplitText(heroTextAnim.current, {
        type: "chars words",
      });
      gsap.set(heroAnchor.current, {
        opacity: 0,
        y: 50,
      });
      gsap.set(heroAnchor1.current, {
        opacity: 0,
        y: 50,
      });
      gsap.to(heroAnchor.current, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=2");
      gsap.to(heroAnchor1.current, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=2");
      let tHero = gsap.context(() => {
        let HomeDigital = gsap.timeline();

        HomeDigital.from(split_creatives.chars, {
          duration: 2,
          x: 100,
          autoAlpha: 0,
          stagger: 0.2,
        });
        HomeDigital.from(split_solutions.chars, { duration: 1, x: 100, autoAlpha: 0, stagger: 0.1 }, "-=1");
        HomeDigital.from(split_text_animation.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <section className="development__area">
      <div className="container g-0 line pt-130 pb-150">
        <div className="line-3"></div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="sec-title-wrapper">
              <h2 className="sec-title animation__char_come pb-5" ref={charAnim}>
                Nature Based Offsets BeyondCarbon+. QUDE™. + spanEcoScoreCard+ NatureOffsets+ QBOT AI+
              </h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pb-5">
            <div className="development__wrapper">
              <p className="pb-5">As a landowner or organization , QUDEX can provide you with valuable resources and support to help you maintain and regenerate your land in a sustainable way.</p>
              <p className="pb-5">Firstly, QUDEX can conduct a pre-assessment of your land and develop a regeneration roadmap, which outlines the steps needed to restore and maintain the land’s ecological balance. This roadmap is based on advanced technology such as satellite imagery, lidar, AI apps, as well as field data collected by experts.</p>
              <p>Overall, QUDEX can be a valuable partner for landowners or Organizations looking to maintain and regenerate their land in a sustainable way, while also contributing to larger conservation efforts.</p>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
            <div className="development__img">
              <Image priority style={{ width: "800", height: "auto" }} src={ThumbDev1} alt="Development Image" data-speed="auto" />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            <div className="development__img">
              <Image priority style={{ width: "100%", height: "auto" }} src={ThumbDev2} alt="Development Image" data-speed="auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandManagement;
