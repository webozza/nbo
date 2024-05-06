import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import Blog31 from "../../../public/assets/imgs/blog/3/01.jpg";
import Blog32 from "../../../public/assets/imgs/blog/3/02.jpg";
import Blog33 from "../../../public/assets/imgs/blog/3/03.jpg";
import Blog34 from "../../../public/assets/imgs/blog/3/04.jpg";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const BlogCase = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item-3", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item-3");
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
          gsap.to(".blog__animation .blog__item-3", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item-3",
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
      <section className="blog__area-3 blog-v3 blog__animation">
        <div className="container line">
          <div className="line-3"></div>
          <div className="row ">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim pt-130">
                <h3 className="sec-title title-anim">
                  Most popular <br />
                  Use-cases
                </h3>
                {/* <p>
                  Read our blog and try to see everything from every
                  perspective. Our passion lies in making everything accessible
                  and aesthetic for everyone.{" "}
                </p> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <article className="blog__item-3">
                <div className="blog__img-wrapper-3">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog31} alt="Blog Thumbnail" />
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog31} alt="Blog Thumbnail" />
                    </div>
                  </Link>
                </div>
                <div className="blog__info-3">
                  {/* <h4 className="blog__meta">
                    <Link href="/category">UI Design</Link> . 02 May 2019
                  </h4> */}
                  <h5>
                    <Link href="/#" className="blog__title-3">
                      Corporate Social Responsibility Sustainable business practices.
                    </Link>
                  </h5>
                  {/* <Link href="/blog-details" className="blog__btn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link> */}
                  <p> Get an edge over your competition by showing how you contribute positive impacts on society and the planet. </p>
                </div>
              </article>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <article className="blog__item-3">
                <div className="blog__img-wrapper-3">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog32} alt="Blog Thumbnail" />
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog32} alt="Blog Thumbnail" />
                    </div>
                  </Link>
                </div>
                <div className="blog__info-3">
                  {/* <h4 className="blog__meta">
                    <Link href="/category">UI Design</Link> . 02 May 2019
                  </h4> */}
                  <h5>
                    <Link href="/#" className="blog__title-3">
                      {`OFFSET's Plant a tree for every item sold.`}
                    </Link>
                  </h5>
                  {/* <Link href="/blog-details" className="blog__btn">
                    Read More{"lala"}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link> */}
                  <p>
                    {`Adding a tree to the cost of entry is an easy way to make
                    your products support the earth's largest issues.`}
                  </p>
                </div>
              </article>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <article className="blog__item-3">
                <div className="blog__img-wrapper-3">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog33} alt="Blog Thumbnail" />
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog33} alt="Blog Thumbnail" />
                    </div>
                  </Link>
                </div>
                <div className="blog__info-3">
                  {/* <h4 className="blog__meta">
                    <Link href="/category">UI Design</Link> . 02 May 2019
                  </h4> */}
                  <h5>
                    <Link href="/#" className="blog__title-3">
                      Email Marketing Power up with eco-impact data.
                    </Link>
                  </h5>
                  {/* <Link href="/blog-details" className="blog__btn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link> */}
                  <p> People love transparency. People love numbers. Now you can do both by adding living impact data to your email campaigns. </p>
                </div>
              </article>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <article className="blog__item-3">
                <div className="blog__img-wrapper-3">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog34} alt="Blog Thumbnail" />
                      <Image priority style={{ width: "auto", height: "auto" }} className="image-box__item" src={Blog34} alt="Blog Thumbnail" />
                    </div>
                  </Link>
                </div>
                <div className="blog__info-3">
                  {/* <h4 className="blog__meta">
                    <Link href="/category">UI Design</Link> . 02 May 2019
                  </h4> */}
                  <h5>
                    <Link href="/#" className="blog__title-3">
                      Users , customers , content creators
                    </Link>
                  </h5>
                  {/* <Link href="/blog-details" className="blog__btn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link> */}
                  <p> Take your digital content to another level by engaging directly with their values. </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCase;
