import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/lake.webp";
import Service12 from "../../../public/assets/imgs/service/windmill.webp";
import Service13 from "../../../public/assets/imgs/service/eco-score.webp";
import Service14 from "../../../public/assets/imgs/service/optimize.webp";
import Image from "next/image";
import ReadMore from "../readMore/readMore";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  const initialContent = "The world is demanding accountability, transparency, and more eco-responsible businesses. Simply log in to the QUDEX Eco-Platform fill out your ECO SCORECARD...";
  const expandedContent = "The world is demanding accountability, transparency, and more eco-responsible businesses. Simply log in to the QUDEX Eco-Platform fill out your ECO SCORECARD, and Choose a Power-Up solution to match your needs. In today's rapidly changing world, businesses face increasing demands for environmental responsibility and sustainability. Consumers, investors, and stakeholders are calling for greater transparency and a commitment to eco-friendly practices. The QUDEX Eco-Platform offers an innovative solution to meet these expectations and help businesses automate their eco-efforts while powerfully enhancing your brand.";

  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <a href="#service_1">
                        Power <br />
                        Ups
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        AI ESG <br />
                        Automation
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                        Eco Score <br />
                        Card
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                        Optimize & <br />
                        Customize
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={Service11} alt="Service Image" />
                  </div>
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={Service12} alt="Service Image" />
                  </div>
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={Service13} alt="Service Image" />
                  </div>
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={Service14} alt="Service Image" />
                  </div>
                  {/* <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service15}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div> */}
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div className="service__item-6 has__service_animation" id="service_1" data-secid="1">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={Service11} alt="Service Image" />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">Connecting real world impact</h2>
                        <p>Digital worlds need a new standard to showcase the goodness and giveback of each business. QUDE helps implement this.</p>
                        <h2 className="service__title-6">QUDE™ ECO data</h2>
                        <p>Verified data to ensure transparency</p>
                        <div className="btn_wrapper">
                          <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover">
                            <span></span>Powered by
                            <br />
                            QUDE <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="service__item-6" id="service_2" data-secid="2">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={Service12} alt="Service Image" />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">Automate your ECO + Power-up your brand</h2>
                        <ReadMore initialContent={initialContent} expandedContent={expandedContent} />
                        <div className="btn_wrapper">
                          <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover">
                            <span></span>Powered by
                            <br />
                            QUDE <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="service__item-6" id="service_3" data-secid="3">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={Service13} alt="Service Image" />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">Customize ECO SCORE CARD & Send to customers</h2>
                        <p>The world is demanding more eco-responsible businesses and we help businesses become that. Simply log in to the QUDEX Eco-Platform and access a library of thousands of BIO ASSETS and free eco calculators, customize and go live!</p>
                        <div className="btn_wrapper">
                          <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover">
                            <span></span>Powered by
                            <br />
                            QUDE <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="service__item-6" id="service_4" data-secid="4">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={Service14} alt="Service Image" />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">Nature offsets that Do the work</h2>
                        <p>We are ever-evolving and building out solutions that meet the needs of regenerating our earth. and we want to give you the tools to save it, so let us join you and we will combine efforts to help our planet and all the critters that need your help!</p>
                        <div className="btn_wrapper">
                          <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover">
                            <span></span>Powered by
                            <br />
                            QUDE <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
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

export default Service1;
