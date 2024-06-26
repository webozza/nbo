import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import Link from "next/link.js";
import ArrowIcon from "../../../public/assets/imgs/hero/4/arrow-icon.png";
import Hero4 from "../../../public/assets/imgs/hero/1/hero-bg-q.png";
import HeroShape from "../../../public/assets/imgs/hero/4/hero-shape.png";
import HeroShape2 from "../../../public/assets/imgs/hero/4/hero-shape-2.png";
import HeroShape3 from "../../../public/assets/imgs/hero/4/hero-shape-3.png";
import Shape20 from "../../../public/assets/imgs/shape/20.png";
import Image from "next/image.js";

const QudexHomeHero = () => {
  const heroTitle = useRef();
  const heroText = useRef();
  const heroAnchor = useRef();
  const heroAnchor1 = useRef();
  const heroImg = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(heroTitle.current, {
          opacity: 0,
          y: 50,
        });
        gsap.set(heroText.current, {
          opacity: 0,
          y: 50,
        });
        gsap.set(heroImg.current, {
          opacity: 0,
          y: 50,
        });
        gsap.set(heroAnchor.current, {
          opacity: 0,
          y: 50,
        });
        gsap.set(heroAnchor1.current, {
          opacity: 0,
          y: 50,
        });

        // let split_hero6_title = new SplitText(heroTitle.current, {
        //   type: "chars",
        // });
        // let split_hero6_desc = new SplitText(heroText.current, {
        //   type: "chars words",
        // });

        // gsap.from(split_hero6_title.chars, {
        //   duration: 0.5,
        //   x: 70,
        //   autoAlpha: 0,
        //   stagger: 0.1,
        // });
        // gsap.from(split_hero6_desc.words, { duration: 0.5, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=0.5");
        gsap.to(heroTitle.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1");
        gsap.to(heroText.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1");
        gsap.to(heroAnchor.current, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=2");
        gsap.to(heroAnchor1.current, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=2");
        gsap.to(heroImg.current, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=2");
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="qudex-hero hero__area-6">
        <div className="container g-0 line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="hero__content-6 hero__six_anim">
                <Image priority style={{ width: "auto", height: "auto" }} className="hero__arrow-icon" src={ArrowIcon} alt="Arrow Icon" />
                <h1 className="hero__title-6 " ref={heroTitle}>
                  Eco-Revolution: <br /> BeyondCarbon+ with <br />
                  QUDE™, EcoScoreCard+, QBOT AI.
                </h1>
                <p ref={heroText}>Dive into a world where business and sustainability merge seamlessly. From enhancing carbon footprints going Beyond Carbon to unrivaled ecological analysis with QUDE™, elevate your corporate responsibility. Discover intuitive tools like EcoScoreCard+, NatureOffsets+, and QBOT+ tailored for impactful land management and funding.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link className="btn-started btn-hover" href="#" ref={heroAnchor}>
                    Explore Power Ups & Eco Score Card
                  </Link>
                  <Link className="btn-started btn-hover" href="#" ref={heroAnchor1}>
                    Discover Land Management Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="hero__right-6">
                <Image priority src={Hero4} alt="Hero Image" ref={heroImg} />
              </div>
            </div>
          </div>
        </div>
        <Image priority width={80} height={158} className="hero__shape" src={HeroShape} alt="Shape Image" />
        <Image priority width={48} height={48} className="hero__shape-2" src={HeroShape2} alt="Layout" />
        <Image priority width={38} height={49} className="hero__shape-3" src={HeroShape3} alt="Star Icon" />
        <Image priority width={489} height={382} className="shape-4" src={Shape20} alt="Star Icon" />
      </section>
    </>
  );
};

export default QudexHomeHero;
