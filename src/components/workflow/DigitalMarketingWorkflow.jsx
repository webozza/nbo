import { useEffect, useRef } from "react";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import Counter3 from "../../../public/assets/imgs/thumb/counter-3.png";
import Image from "next/image.js";
import serviceImage1 from "../../../public/assets/imgs/service/3/1.jpg";
import serviceImage2 from "../../../public/assets/imgs/service/3/serviceImage2.jpg";
import serviceImage3 from "../../../public/assets/imgs/service/3/serviceImage3.png";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingWorkflow = () => {
  const workflowWrapper = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          var workflow_section_3 = workflowWrapper.current;
          if (workflow_section_3) {
            let duration = 1,
              sections = gsap.utils.toArray(".wf_panel"),
              sectionIncrement = duration / (sections.length - 1),
              tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ".workflow__wrapper-3",
                  pin: true,
                  scrub: 1,
                  start: "top top",
                  end: "+=5000",
                },
              });

            tl.to(sections, {
              xPercent: -100 * (sections.length - 1),
              duration: duration,
              ease: "none",
            });

            sections.forEach((section, index) => {
              let tween = gsap.from(section, {
                opacity: 0,
                scale: 0.6,
                duration: 0.5,
                force3D: true,
                paused: true,
              });
              addSectionCallbacks(tl, {
                start: sectionIncrement * (index - 0.99),
                end: sectionIncrement * (index + 0.99),
                onEnter: () => tween.play(),
                onLeave: () => tween.reverse(),
                onEnterBack: () => tween.play(),
                onLeaveBack: () => tween.reverse(),
              });
              index || tween.progress(1);
            });

            function addSectionCallbacks(timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
              let trackDirection = (animation) => {
                  let onUpdate = animation.eventCallback("onUpdate"),
                    prevTime = animation.time();
                  animation.direction = animation.reversed() ? -1 : 1;
                  animation.eventCallback("onUpdate", () => {
                    let time = animation.time();
                    if (prevTime !== time) {
                      animation.direction = time < prevTime ? -1 : 1;
                      prevTime = time;
                    }
                    onUpdate && onUpdate.call(animation);
                  });
                },
                empty = (v) => v;
              timeline.direction || trackDirection(timeline);
              start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
              end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
            }
          }
          for (let i = 1; i < 5; i++) {
            gsap.from(gsap.utils.toArray(`.count${i}`), {
              textContent: 0,
              duration: 1,
              delay: 3,
              ease: Power1.easeIn,
              snap: { textContent: 1 },
              stagger: 1,
              scrollTrigger: {
                trigger: ".counter__number",
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
      <section className="workflow__area-3">
        <div className="workflow__wrapper-3" ref={workflowWrapper}>
          <div className="choose-wrapper wf_panel">
            <div className="container">
              <div className="row">
                <div className="col-xxl-">
                  <div className="choose-title-wrapper">
                    <h2 className="choose-title title-anim">
                      OUR <br /> Services
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*~~~~~~~~~~    FIrst slide    ~~~~~~~~~~*/}

          <div className="research__area area-bg-white wf_panel pt-150">
            <div className="container inner_content">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-sub-title">
                      Lead with Qudex: <br />
                      Comprehensive offset reports + offset tools.
                    </h2>
                    <h3 className="sec-title">ECO-IMPACT BUSINESS PLATFORM</h3>
                    <p>Unlock the power of environmental stewardship without compromising on business growth. With Qudex, witness an evolution in how companies can harmonize profits with the planet.</p>
                  </div>
                  {/* <ul className="research__tools">
                    <li>
                      <a href="#">Google</a>
                    </li>
                    <li>
                      <a href="#">pinterest</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                  </ul> */}
                </div>

                {/* <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="research__list">

                    <div className="research__item">
                      <div className="research__number">
                        <span>60%</span>
                      </div>
                      <div className="research__info">
                        <h4 className="research__title">Strategy</h4>
                        <p>
                          Your marketing strategy optimizing performances
                          doesn’t have to be a guessing game.
                        </p>
                      </div>
                    </div>

                    <div className="research__item">
                      <div className="research__number">
                        <span>95%</span>
                      </div>
                      <div className="research__info">
                        <h4 className="research__title">Audience</h4>
                        <p>
                          Your marketing strategy optimizing performances
                          doesn’t have to be a guessing game.
                        </p>
                      </div>
                    </div>

                    <div className="research__item">
                      <div className="research__number">
                        <span>70%</span>
                      </div>
                      <div className="research__info">
                        <h4 className="research__title">Keyword</h4>
                        <p>
                          Your marketing strategy optimizing performances
                          doesn’t have to be a guessing game.
                        </p>
                      </div>
                    </div>


                  </div>
                </div> */}

                <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-6">
                  <div className="counter__img-3">
                    <Image priority style={{ width: "100%", height: "auto" }} src={serviceImage1} alt="Counter Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*~~~~~~~~~~    Second slide    ~~~~~~~~~~*/}
          <div className="research__area wf_panel pt-150 no-bg">
            <div className="container inner_content">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-sub-title">We are here to ensure it is easy for businesses to take eco action with social responsibility, QUDE™ funds, and verify global impacts.</h2>
                    <h3 className="sec-title">
                      pical PROJECTS VERIFIED BY QUDE <sup>tm</sup>
                    </h3>
                    <p>
                      Ecological Projects Verified by QUDE™ Connecting Vital Ecosystems with Cutting-Edge Verification.
                      <a href="http://Natureoffsets.com"> Natureoffsets.com </a>
                    </p>
                  </div>
                  <p>{`At Qudex, we're not just stewards of our planet's vast oceans and expansive lands - we're innovators. Using the latest satellite, drone, and sensor technology, we ensure real-time updates and robust verification for every project. Our commitment is unwavering: to safeguard nature's sanctuaries, one verified QUDE™ at a time.`}</p>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-6">
                  <div className="counter__img-3">
                    <Image priority style={{ width: "100%", height: "auto" }} src={serviceImage2} alt="Counter Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*
           ~~~~~~~~~~    Third slide    ~~~~~~~~~~
*/}

          <div className="research__area area-bg-white wf_panel pt-150">
            <div className="container inner_content">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-sub-title">Pioneering Next-Gen Eco Solutions</h2>
                    <h3 className="sec-title">PLANET TECHNOLOGIES: beyond carbon.</h3>
                    <p>
                      {`Venture beyond traditional carbon metrics. Embrace Planet
                      Technologies that offer holistic ecological insights,
                      pushing the boundaries of what's possible in environmental
                      preservation.`}
                    </p>
                  </div>
                </div>

                <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-6">
                  <div className="counter__img-3">
                    <Image priority style={{ width: "100%", height: "auto" }} src={serviceImage3} alt="Counter Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*
           ~~~~~~~~~~    Forth slide    ~~~~~~~~~~
*/}

          {/* <div className="counter__area-3 wf_panel">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-sub-title">
                      Why <br />
                      Choose Us
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <div className="counter__wrapper-3">
                    <div className="counter__item-3">
                      <h2 className="counter__number count1">25k</h2>
                      <p>
                        Project <br />
                        completed
                      </p>
                    </div>
                    <div className="counter__item-3">
                      <h2 className="counter__number count2">8k</h2>
                      <p>
                        Happy <br />
                        customers
                      </p>
                    </div>
                    <div className="counter__item-3">
                      <h2 className="counter__number count3">15</h2>
                      <p>
                        Years <br />
                        experiences
                      </p>
                    </div>
                    <div className="counter__item-3">
                      <h2 className="counter__number count4">98</h2>
                      <p>
                        Awards <br />
                        achievement
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="counter__img-3">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Counter3}
                      alt="Counter Image"
                    />
                  </div>
                </div>



              </div>
            </div>
          </div> */}

          {/* CTA area start */}
          <div className="cta__area-3 wf_panel">
            <div className="container pt-150 pb-150">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content-3">
                    <p className="cta__sub-title-2">Have you project in mind?</p>
                    <h2 className="cta__title-2">Let’s make something great together!</h2>
                    <div className="btn_wrapper">
                      <Link href="/contact" className="wc-btn-black btn-hover btn-item">
                        <span></span>Contact <br />
                        with us <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CTA area end */}
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingWorkflow;
