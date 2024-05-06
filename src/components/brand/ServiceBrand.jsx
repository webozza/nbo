import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Brand1 from "../../../public/assets/imgs/brand/icon-take-2.png";
import Brand2 from "../../../public/assets/imgs/brand/icon-take-soil.png";
import Brand3 from "../../../public/assets/imgs/brand/icon-take-whale.png";
import Brand4 from "../../../public/assets/imgs/brand/icon-take-elephant.png";
import Brand5 from "../../../public/assets/imgs/brand/icon-take-3.png";
import Brand6 from "../../../public/assets/imgs/brand/icon-take-bear.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServiceBrand = () => {
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
      <section className="brand__area">
        <div
          className="container line pt-140 pb-100"
          style={{ paddingBottom: "140px" }}
        >
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <h2 className="brand__title-3 title-anim">
                {`Buying QUDE™ does all the work instantly saving 1000's Of BIO ASSETS`}
              </h2>
              <div className="brand__list brand-gap">
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={97}
                    height={97}
                    src={Brand1}
                    alt="Brand Logo"
                  />
                  <p className="pt-2 text-capitalize">Plant a Tree</p>
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={97}
                    height={97}
                    src={Brand2}
                    alt="Brand Logo"
                  />
                  <p className="pt-2 text-capitalize">Regenerate Soil</p>
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={97}
                    height={97}
                    src={Brand3}
                    alt="Brand Logo"
                  />
                  <p className="pt-2 text-capitalize">Save Whale</p>
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={97}
                    height={97}
                    src={Brand4}
                    alt="Brand Logo"
                  />
                  <p className="pt-2 text-capitalize">Fund a Elephant</p>
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={97}
                    height={97}
                    src={Brand5}
                    alt="Brand Logo"
                  />
                  <p className="pt-2 text-capitalize">Sponsor A bee Hive</p>
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={97}
                    height={97}
                    src={Brand6}
                    alt="Brand Logo"
                  />
                  <p className="pt-2 text-capitalize">Save bear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBrand;
