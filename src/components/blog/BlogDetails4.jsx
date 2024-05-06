import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.png";
import Detail1 from "../../../public/assets/imgs/blog/detail/q-blog-details-4.jpg";
import Detail2 from "../../../public/assets/imgs/blog/detail/q-blog-detail-3-2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetail4 = () => {
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
              <div className="blog__detail-top detail-top">
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
                  Embracing QUDEX: Unveiling a New Approach to Sustainable Investments
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
                <h4>Greetings QUDEX Enthusiasts,</h4>
                <p>
                It’s our pleasure to introduce QUDE™, our breakthrough technology designed to pave the way for informed, sustainable investment decisions.{" "}
                </p>
                <p>QUDE™ stands for Quantitative Environmental Data Evaluation, a technology at the heart of QUDEX, propelling our mission to streamline sustainability for businesses and investors alike. QUDE™, with its ability to quantify intricate environmental data, represents a significant leap forward in ESG-focused investing.</p>
                <p>QUDE™ underpins our new tool, the ECO-INVESTMENT RATING (EIR), a product specifically tailored to provide investors with a comprehensive understanding of a company’s environmental impact and commitment to sustainability.</p>
                <p>Here’s how QUDE™ transforms sustainable investing through the EIR:</p>
                <ul>
                  <li>Unprecedented Data Clarity: QUDE™ converts complex environmental data into easily interpretable metrics. This empowers investors to understand the full range of a company’s environmental impact, making informed investment decisions easier than ever before.</li>
                  <li>Objective Sustainability Evaluation: QUDE™ uses BioAssets and data tokens to objectively evaluate a company’s sustainable practices. This level of transparency provides a clearer picture of how a company’s practices align with sustainability goals.</li>
                  <li>Enhanced Investment Choices: QUDE™ enhances the EIR by providing a comprehensive understanding of a company’s environmental footprint, enabling investors to align their investment strategies with sustainability objectives.</li>
                </ul>
                <p>The unveiling of QUDE™ and the EIR marks a significant milestone in our journey towards a more sustainable future. We believe that QUDEX, powered by QUDE™ technology, will democratize the ESG investing landscape by making it more transparent, accessible, and effective. QUDE™ represents the evolution in ecology reporting and conservation funding, offering unprecedented clarity and objectivity in sustainable investing.</p>
                <p>We eagerly anticipate your valuable feedback as we continue to enhance our offerings. Join us as we advance in our mission to foster sustainability, one QUDE™ at a time.</p>
                <p>Sincerely,</p>
                <p>The QUDEX Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail4;
