import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const InteractiveStories = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_services_7 = gsap.utils.toArray(".animation_service_7 .service__item-7");
        gsap.set(animation_services_7, {
          opacity: 0,
          x: -30,
        });

        if (animation_services_7) {
          if (device_width < 1023) {
            animation_services_7.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: -0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation_service_7 .service__item-7", {
              scrollTrigger: {
                trigger: ".animation_service_7",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="service__area-7 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__items-7 animation_service_7">
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Urban Development <span>Dilemma</span>
                  </h3>
                  <p>Dive into the challenges of balancing urban growth with environmental preservation.</p>
                  <ul>
                    <li>+ Prioritize Sustainability.</li>
                    <li>+ Implement green.</li>
                    <li>+ Foster mixed-use.</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Renewable Energy<span>Revolution</span>
                  </h3>
                  <p>Encounter scenarios where you must choose between solar, wind, hydro, or traditional fossil fuels.</p>
                  <ul>
                    <li>+ Enhance Policies.</li>
                    <li>+ Lnvest in energy storage.</li>
                    <li>+ Renewable energy projects.</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Waste Management<span> Odyssey</span>
                  </h3>
                  <p>Navigate through scenarios involving recycling, composting, waste reduction, and landfill diversion.</p>
                  <ul>
                    <li>+ Promote Recycling.</li>
                    <li>+ Adopt zero-waste practices.</li>
                    <li>+ Waste management programs.</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Sustainable Transportation<span> Voyage</span>
                  </h3>
                  <p>Explore scenarios featuring public transit, cycling, walking, electric vehicles, and shared mobility solutions.</p>
                  <ul>
                    <li>+ Prioritize Public Transit.</li>
                    <li>+ Expand bike lane networks.</li>
                    <li>+ Develop car-sharing.</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Green Purchasing<span>Expedition</span>
                  </h3>
                  <p>Navigate through scenarios involving eco-friendly products, sustainable packaging, and ethical sourcing.</p>
                  <ul>
                    <li>+ Choose eco-friendly.</li>
                    <li>+ Sustainable Packaging Standards.</li>
                    <li>+ Promote Minimalistic.</li>
                  </ul>
                </div>
                <div className="service__item-7">
                  <h3 className="service__title-7">
                    Conservation <span>Quest</span>
                  </h3>
                  <p>Explore scenarios featuring conservation initiatives, reforestation efforts, and wildlife preservation projects.</p>
                  <ul>
                    <li>+ Protect Habitats.</li>
                    <li>+ Establish Protected.</li>
                    <li>+ Implement Sustainable.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InteractiveStories;
