import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import Blog11 from "../../../public/assets/imgs/blog/q-blog-1.jpg";
import Blog22 from "../../../public/assets/imgs/blog/q-blog-2.jpg";
import Blog33 from "../../../public/assets/imgs/blog/q-blog-3.jpg";
import Blog44 from "../../../public/assets/imgs/blog/q-blog-4.jpg";
import Blog55 from "../../../public/assets/imgs/blog/q-blog-5.jpg";
import Blog66 from "../../../public/assets/imgs/blog/q-blog-6.jpg";
import animationCharCome from "@/lib/utils/animationCharCome";

gsap.registerPlugin(ScrollTrigger);

const QudexBlog = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="blog__area-6 blog__animation">
        <div className="container g-0 line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="row pb-130">
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Q Blog
                </h2>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
              {/* <div className="blog__text">
                <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs. </p>
              </div> */}
            </div>
          </div>

          <div className="row reset-grid">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/revolutionizing-esg-management">
                    <div className="img-box">
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog11} alt="Blog Thumbnail" />
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog11} alt="BLog Thumbnail" />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                    August 2, 2023
                </h4>
                <h5>
                  <Link href="/revolutionizing-esg-management" className="blog__title">
                    Qudex: Revolutionizing ESG Management
                  </Link>
                </h5>
                <Link href="/revolutionizing-esg-management" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>
              
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/embrace-bio-assets-with-QUDEX">
                    <div className="img-box">
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog22} alt="Blog Thumbnail" />
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog22} alt="BLog Thumbnail" />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                     August 2, 2023
                </h4>
                <h5>
                  <Link href="/embrace-bio-assets-with-QUDEX" className="blog__title">
                      Embrace Bio Assets with QUDEX
                  </Link>
                </h5>
                <Link href="/embrace-bio-assets-with-QUDEX" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/QUDEX-alpha-launch">
                    <div className="img-box">
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog33} alt="Blog Thumbnail" />
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog33} alt="BLog Thumbnail" />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                    August 2, 2023
                </h4>
                <h5>
                  <Link href="/QUDEX-alpha-launch" className="blog__title">
                      QUDEX Alpha Launch: A Scientific Odyssey into AI-Driven Biodiversity Conservation
                  </Link>
                </h5>
                <Link href="/QUDEX-alpha-launch" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/embracing-QUDEX">
                    <div className="img-box">
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog44} alt="Blog Thumbnail" />
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog44} alt="BLog Thumbnail" />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                    August 2, 2023
                </h4>
                <h5>
                  <Link href="/embracing-QUDEX" className="blog__title">
                      Embracing QUDEX: Unveiling a New Approach to Sustainable Investments
                  </Link>
                </h5>
                <Link href="/embracing-QUDEX" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/decoding-bio-assets">
                    <div className="img-box">
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog55} alt="Blog Thumbnail" />
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog55} alt="BLog Thumbnail" />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                    August 2, 2023
                </h4>
                <h5>
                  <Link href="/decoding-bio-assets" className="blog__title">
                      Decoding Bio Assets: The New Paradigm in Biodiversity Conservation and Business Strategy
                  </Link>
                </h5>
                <Link href="/decoding-bio-assets" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/qudex-ai">
                    <div className="img-box">
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog66} alt="Blog Thumbnail" />
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog66} alt="BLog Thumbnail" />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                      August 2, 2023
                </h4>
                <h5>
                  <Link href="/qudex-ai" className="blog__title">
                      QUDEX AI = Automated Eco-Retention: Transforming Marketing and Boosting Customer Loyalty
                  </Link>
                </h5>
                <Link href="/qudex-ai" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QudexBlog;
