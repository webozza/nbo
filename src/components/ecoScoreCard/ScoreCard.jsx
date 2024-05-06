import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import Link from "next/link";
import LangManagement1 from "../../../public/assets/imgs/land-management/lang-management1.png";
import LangManagement2 from "../../../public/assets/imgs/land-management/lang-management2.png";
import LangManagement3 from "../../../public/assets/imgs/land-management/lang-management3.jpeg";
import ReadMore from "@/components/readMore/readMore";

gsap.registerPlugin(ScrollTrigger);

const ScoreCard = () => {
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
          navItems.forEach((nav) => {
            nav.addEventListener("click", (e) => {
              e.preventDefault();
              const ids = nav.getAttribute("href");
              const scrollToOptions = {
                top: document.querySelector(ids).offsetTop, // Get the offsetTop of the target element
                behavior: "smooth", // Optional: scroll behavior
              };
              window.scrollTo(scrollToOptions);
            });
          });
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
                        Nature Based <br />
                        OFFSETS
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        ECO-Impact <br />
                        BUSINESS
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                        Ecological <br />
                        PROJECTS
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "50%" }} src={LangManagement1} alt="Service Image" />
                  </div>
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={LangManagement2} alt="Service Image" />
                  </div>
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={LangManagement3} alt="Service Image" />
                  </div>
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div className="service__item-6 has__service_animation" id="service_1" data-secid="1">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={LangManagement1} alt="Service Image" />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">Nature Based Offsets</h2>
                        <h2 style={{ color: "gray", marginBottom: "20px" }}>BeyondCarbon+. QUDE™. + EcoScoreCard+ NatureOffsets+ QBOT AI+ </h2>
                        <p>Dive into a world where business and sustainability merge seamlessly. From enhancing carbon footprints going Beyond Carbon to unrivaled ecological analysis with QUDE™, elevate your corporate responsibility. Discover intuitive tools like EcoScoreCard+, NatureOffsets+, and QBOT+ tailored for impactful land management and funding.</p>
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
                        <Image priority style={{ width: "auto", height: "auto" }} src={LangManagement2} alt="Service Image" />
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">ECO-IMPACT</h2>
                        <h2 className="service__title-6" style={{ color: "gray" }}>
                          BUSINESS PLATFORM
                        </h2>
                        <h6 style={{ color: "#FAF9F6", marginBottom: "20px" }}>Lead with Qudex: Comprehensive offset reports + offset tools.</h6>
                        <p>Unlock the power of environmental stewardship without compromising on business growth. With Qudex, witness an evolution in how companies can harmonize profits with the planet.</p>
                        <ReadMore initialContent={initialContent} expandedContent={expandedContent} />
                        <div className="btn_wrapper">
                          <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover">
                            <span>Powered by</span>
                            <br />
                            QUDE <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="service__item-6" id="service_3" data-secid="3">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={LangManagement3} alt="Service Image" />
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">Nature Based Offsets</h2>
                        <h2 className="service__title-6" style={{ textTransform: "uppercase" }}>
                          Ecological <span style={{ color: "gray" }}>PROJECTS VERIFIED BY QUDE™</span>
                        </h2>
                        <p>Dive into a world where business and sustainability merge seamlessly. From enhancing carbon footprints going Beyond Carbon to unrivaled ecological analysis with QUDE™, elevate your corporate responsibility. Discover intuitive tools like EcoScoreCard+, NatureOffsets+, and QBOT+ tailored for impactful land management and funding.</p>
                        <div className="btn_wrapper">
                          {/* <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover">
                            <span>Powered by</span>
                            <br />
                            QUDE <i className="fa-solid fa-arrow-right"></i>
                          </Link> */}
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

export default ScoreCard;
