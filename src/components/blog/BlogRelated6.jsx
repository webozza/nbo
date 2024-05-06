import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Blog11 from "../../../public/assets/imgs/blog/q-blog-1.jpg";
import Blog22 from "../../../public/assets/imgs/blog/q-blog-2.jpg";
import Blog33 from "../../../public/assets/imgs/blog/q-blog-3.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const BlogRelated6 = () => {
  useEffect(() => {
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
      <section className="blog__related blog__animation">
        <div className="container g-0 line pt-130 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">Related Aricles</h2>
              </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogRelated6;
