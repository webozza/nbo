import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Award1 from "../../../public/assets/imgs/awards/film.jpg";
import Award2 from "../../../public/assets/imgs/awards/forsale.jpg";
import Award3 from "../../../public/assets/imgs/awards/qudex-in-game.jpg";
import Award4 from "../../../public/assets/imgs/awards/esports.jpg";
import Award5 from "../../../public/assets/imgs/awards/image-22.png";
import Award6 from "../../../public/assets/imgs/awards/image-25.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ModernAgencyWork2 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <div className="awards__area-8 pb-130 sp-x">
        <h6 className="text-end about-sub-right"></h6>
        <div className="section_wrapper b-100">
          <h4 className="react_border">
            <span></span>
          </h4>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="awards__content">
              <h2 className="awards__content__title fade_bottom">
                 Your <br />
                  business + QUDE™ = ECO
              </h2>
              {/* <p>
                {
                  "We are a medical company and wanted to help give back to nature the same way we do for people , so QUDE helped us save multiple animals simply from buying QUDE"
                }
              </p> */}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="awards__wrapper">
              <div className="awards__border">
                <div className="awards__items fade_bottom">
                  <span className="number"></span>
                  <h4 className="title">
                      Clean Energy
                  </h4>
                  <Image
                    priority
                    width={200}
                    style={{ height: "auto" }}
                    src={Award2}
                    alt=""
                  />
                  <h5 className="date"></h5>
                </div>
                <div className="awards__items fade_bottom">
                <span className="number"></span>
                  <h4 className="title">
                      Hair, Beauty Salons and <br/> Health  Wealness
                  </h4>
                  <Image
                    priority
                    width={200}
                    style={{ height: "auto" }}
                    src={Award5}
                    alt=""
                  />
                  <h5 className="date"></h5>
                </div>
                <div className="awards__items fade_bottom">
                  <span className="number"></span>
                  <h4 className="title">
                  TV & Film production
                  </h4>
                  <Image
                    priority
                    width={200}
                    style={{ height: "auto" }}
                    src={Award1}
                    alt=""
                  />
                  <h5 className="date"></h5>
                </div>
                <div className="awards__items fade_bottom">
                  <span className="number"></span>
                  <h4 className="title">
                    Online Rewards & Gaming
                  </h4>
                  <Image
                    priority
                    width={200}
                    style={{ height: "auto" }}
                    src={Award3}
                    alt=""
                  />
                  <h5 className="date"></h5>
                </div>
                <div className="awards__items fade_bottom">
                  <span className="number"></span>
                  <h4 className="title">
                    Real Estate 
                  </h4>
                  <Image
                    priority
                    width={200}
                    style={{ height: "auto" }}
                    src={Award2}
                    alt=""
                  />
                  <h5 className="date"></h5>
                </div>
                <div className="awards__items fade_bottom">
                  <span className="number"></span>
                  <h4 className="title">
                      E sports
                  </h4>
                  <Image
                    priority
                    width={200}
                    style={{ height: "auto" }}
                    src={Award4}
                    alt=""
                  />
                  <h5 className="date"></h5>
                </div>
                <div className="awards__items fade_bottom">
                  <span className="number"></span>
                  <h4 className="title">
                      Marketing Agency 
                  </h4>
                  <Image
                    priority
                    width={200}
                    style={{ height: "auto" }}
                    src={Award6}
                    alt=""
                  />
                  <h5 className="date"></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernAgencyWork2;
