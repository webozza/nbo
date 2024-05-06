import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.png";
import Detail1 from "../../../public/assets/imgs/blog/detail/q-blog-detail-1.jpg";
import Detail2 from "../../../public/assets/imgs/blog/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails1 = () => {
  const wordAnim = useRef();
  const wordAnim2 = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
    animationWordCome(wordAnim2.current);
  }, []);
  return (
    <>
      <section className="blog__detail">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-top">
                <h2
                  className="blog__detail-date animation__word_come"
                  ref={wordAnim}
                >
                  Qdex <span>2 Aug 2023</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  Introduction to Qudex: Revolutionizing ESG Management
                </h3>
                {/* <div className="blog__detail-metalist">
                  <div className="blog__detail-meta">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Author}
                      alt="Author Picture"
                    />
                    <p>
                      Writen by <span>Codexpand</span>
                    </p>
                  </div>
                  <div className="blog__detail-meta">
                    <p>
                      Viewed <span>3 min read</span>
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__detail-thumb">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Detail1}
                  alt="Blog Thumbnail"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <h2>Introduction:</h2>
                <p>
                Welcome to the future of sustainable business! Today, we’re thrilled to introduce you to Qudex, the game-changer in Environmental, Social, and Governance (ESG) management. In a world where responsible business practices are more critical than ever, Qudex is here to simplify and elevate the way companies approach ESG.{" "}
                </p>
                <h2>The Challenge of Managing ESG: </h2>
                <p>
                Traditionally, managing ESG has been a complex and time-consuming endeavor for businesses. Gathering data, analyzing it, and ensuring compliance with various regulations can be overwhelming. Not to mention, communicating ESG efforts effectively to stakeholders is no walk in the park. Many businesses struggle to keep up with the demands of sustainable reporting while juggling their core operations.{" "}
                </p>
                <h2>The Qudex Solution:  </h2>
                <p>
                But fear not, because Qudex is here to save the day! Our revolutionary platform streamlines ESG management, making it accessible and efficient for businesses of all sizes. With cutting-edge AI technology and user-friendly interfaces, we’ve simplified the entire process. Gone are the days of drowning in spreadsheets and struggling to make sense of vast amounts of data.{" "}
                </p>
                <p>With Qudex, businesses can easily track their environmental impact, monitor social initiatives, and optimize governance practices. Our platform centralizes all the necessary information and automates data collection, allowing you to focus on what matters most – driving positive change.</p>
                <p>We’ve packed Qudex with powerful features, including real-time reporting, predictive analytics, and custom dashboards. This means you can make informed decisions on the fly and communicate your sustainability efforts confidently to investors, customers, and other stakeholders.</p>
                <h2>Conclusion: </h2>
                <p>
                At Qudex, we firmly believe that sustainable practices are not only good for the planet but also essential for long-term business success. Our mission is to empower businesses like yours to thrive in the new era of ESG consciousness.{" "}
                </p>
                <p>Qudex is not just a platform – it’s your partner in making a meaningful contribution to a sustainable future. Our goal is to streamline ESG management so that every business, big or small, can commit to responsible practices without getting overwhelmed.</p>
                <p>Ready to revolutionize your ESG approach? Join the growing number of businesses switching to Qudex today. Let’s make sustainability not just a goal, but an achievable reality. Start your journey with Qudex now!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails1;
