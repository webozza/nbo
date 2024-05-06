import { useEffect, useRef } from "react";
import Image from "next/image.js";
import Planet from "../../../public/assets/imgs/thumb/earth.png";
import HeroImg from "../../../public/assets/imgs/thumb/green.jpg";
import animationWordCome from "@/lib/utils/animationWordCome";

const AboutHero = () => {
  const wordAnim = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);

  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come" ref={wordAnim}>
                  QUDEX is a system approach to fixing the PLANET
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn"></div>
                  <div className="hero__about-text title-anim">
                    <p>{"QUDEX provides businesses the means to actively contribute to the restoration and preservation of our natural environment."}</p>
                  </div>
                  <div className="hero__about-award">
                    <Image className="img-fluid" priority width={100} height={100} src={Planet} alt="Best Studio Award" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row hero__about-row">
            <div className="col-xxl-12">
              <div className="hero__about-video">
                <Image className="img-fluid" priority style={{ width: "100%", objectFit: "fill" }} src={HeroImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
