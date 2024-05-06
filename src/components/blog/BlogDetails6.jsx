import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.png";
import Detail1 from "../../../public/assets/imgs/blog/detail/qudex_eco.png";
import Detail2 from "../../../public/assets/imgs/blog/detail/qudex_eco_bottle.png";
import Detail3 from "../../../public/assets/imgs/blog/detail/qudex_eco_car.png";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetail6 = () => {
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
                  QUDEX AI = Automated Eco-Retention: Transforming Marketing and Boosting Customer Loyalty
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
                <h2>Customer Loyalty</h2>
                <p>
                In today’s business landscape, sustainability and conservation aren’t just buzzwords – they are vital aspects of any successful business strategy. Aligning with these values, QUDEX presents a pioneering platform that merges cutting-edge technology with tangible conservation efforts. Let’s delve deeper into how QUDEX’s AI-driven solutions can enhance your marketing approach, amplify your brand’s image, and boost customer loyalty.{" "}
                </p>
                <p>Unleashing QUDEX’s Power in Marketing: QUDEX provides businesses an opportunity to integrate sustainability into their core marketing strategy effortlessly. By investing in QUDEX’s Bio Assets, your business can become an emblem of environmental responsibility. This aligns your brand with the preferences of the 66% of global consumers who, according to a 2020 Nielsen study, are willing to pay more for sustainable goods and services.</p>
                <p>Storytelling with Bio Assets: Bio Assets, the unique AI-generated digital representations of real-world species and habitats, play a central role in QUDEX’s ecosystem. These Bio Assets enable your business to craft compelling narratives around your commitment to conservation. A Headstream study reveals that an engaging brand story can persuade 55% of consumers to make a purchase – QUDEX provides you with the tools to tell these impactful stories.</p>
                <p>Enhancing Brand Image: QUDEX allows your business to showcase your conservation efforts in a transparent and credible manner, thereby improving your brand image in today’s competitive market. According to the Reputation Institute, purpose and citizenship account for 40% of a company’s reputation – by using QUDEX, your business can excel in these crucial areas.</p>
                <div className="blog__detail-thumb">
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    src={Detail2}
                    alt="Blog Thumbnail"
                    data-speed="0.5"
                  />
                </div>
                <p>AI-driven Customer Retention: QUDEX’s advanced AI tools provide a unique approach to customer retention. By incorporating Bio Assets into your loyalty programs, your business can offer customers a unique opportunity – the chance to contribute directly to global conservation efforts. A Bond Brand Loyalty study indicates that customers enrolled in loyalty programs are 70% more likely to recommend the brand, making QUDEX a valuable asset for customer retention.</p>
                <p>Fostering Customer Participation: QUDEX’s platform also allows businesses to directly involve their customers in their conservation initiatives. Whether it’s choosing which Bio Assets to support or tracking the progress of conservation efforts, QUDEX enables businesses to foster customer engagement on an unprecedented level. Research from SuperOffice suggests that companies with strong customer engagement strategies retain an average of 89% of their customers.</p>
                <p>QUDEX offers an innovative platform that can revolutionize your marketing and customer retention efforts, creating a unique market position for your business. By harnessing the power of AI and leveraging tangible conservation efforts, QUDEX provides businesses with a path to create compelling brand narratives and foster customer loyalty.</p>
                <p>Embrace the future of marketing and customer retention with QUDEX. Connect with us today and let our AI guide your eco-retention strategy, driving your business towards a brighter, more sustainable future. After all, a win for nature is a win for us all – including your business.</p>
                <div className="blog__detail-thumb">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Detail3}
                  alt="Blog Thumbnail"
                  data-speed="0.5"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail6;
