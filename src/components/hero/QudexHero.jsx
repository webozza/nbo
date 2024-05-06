import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/plugins";
import Shape23 from "../../../public/assets/imgs/shape/23.png";
import Earth from "../../../public/assets/imgs/shape/earth.png";
import ScrollDown from "../../../public/assets/imgs/essential-img/scrolldown.svg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

gsap.registerPlugin(ScrollTrigger);

const QudexHero = () => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  const heroTextAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
    if (typeof window !== "undefined") {
      let hero__text_animation = heroTextAnim.current;
      let tHero = gsap.context(() => {
        let split_text_animation = new SplitText(hero__text_animation, {
          type: "chars words",
        });
        gsap.from(split_text_animation.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");
        let imageTl_8 = gsap.timeline({
          scrollTrigger: {
            trigger: ".portfolio__big",
            start: "top top+=90",
            pin: true,
            markers: false,
            scrub: 1,
            pinSpacing: false,
            end: "bottom bottom+=150",
          },
        });
        imageTl_8.to(".portfolio__big-inner", {
          width: "100%",
        });
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="hero__area-4 sp-x">
        <div className="hero__content-8">
          <h2 className="sec-title-4 sec-title-5 animation__char_come" ref={charAnim}>
            WHAT IS <span>QUDE™</span>{" "}
            {/* <Image
              priority
              width={108}
              style={{ height: "auto" }}
              src={Shape23}
              alt="shape"
            /> */}
          </h2>
          <h2 className="sec-title-4 animation__char_come" ref={charAnim2}></h2>
          <div className="scroll-wrapper">
            <div className="scroll-down">
              {/* <span>scroll</span> */}
              {/* <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={ScrollDown}
                alt="Scroll Down"
              /> */}
            </div>
            <p className="discription hero__text-animation" ref={heroTextAnim}>
              QUDE, “Quantitative Environmental Data Evaluation”, is the core technology behind QUDEX’s offering. It represents a sophisticated method of collecting, analyzing, and presenting environmental data to provide actionable insights.
            </p>
            {/* <div className="row pt-5">
              <div className="col-lg-6">
                <p className="hero__text-animation" ref={heroTextAnim} style={{maxWidth: '480px'}}>
                    QUDE, “Quantitative Environmental Data Evaluation”, is the core technology behind QUDEX’s offering. It represents a sophisticated method of collecting, analyzing, and presenting environmental data to provide actionable insights. QUDE technology transforms raw data into a valuable digital asset that can be used to assess environmental impact and provide meaningful, quantifiable metrics for sustainability.
                </p>
              </div>
              <div className="col-lg-6">
                <p className="hero__text-animation" ref={heroTextAnim}>
                    Gathering data from multiple tech sources
                </p>
                <div className="row pt-3">
                  <div className="col-lg-4">
                    <ul>
                      <li>+ Satellites</li>
                      <li>+ Field data entry </li>
                      <li>+ Lidar </li>
                      <li>+ Drones </li>
                    </ul>
                  </div>
                    <div className="col-lg-4">
                      <ul>
                        <li>+ AI </li>
                        <li>+ Metaverse </li>
                        <li>+ Qlens augmented reality  </li>
                      </ul>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <p className="hero__text-animation pt-3" ref={heroTextAnim} style={{maxWidth: '480px'}}>
                  QUDE™ Is a global standard to open the world to planet technologies that create positive change. Opening the door for innovation for generations to come.
                </p>
              </div>
            </div> */}
          </div>
          <div className="hero-earth">
            <Image width={300} src={Earth} alt="Earth" />
          </div>
        </div>
      </section>
      <div className="portfolio__big">
        <div className="portfolio__big-inner" style={{ backgroundImage: "url(assets/imgs/portfolio/detail/eco.png)" }}>
          {" "}
        </div>
      </div>
    </>
  );
};

export default QudexHero;
