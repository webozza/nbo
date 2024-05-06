import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.png";
import Detail1 from "../../../public/assets/imgs/blog/detail/q-blog-detail-5.jpg";
import Detail2 from "../../../public/assets/imgs/blog/detail/q-blog-detail-5-2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetail5 = () => {
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
                  Decoding Bio Assets: The New Paradigm in Biodiversity Conservation and Business Strategy
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
                <h2>Business Strategy</h2>
                <p>
                  Welcome to the brave new world of Bio Assets, a groundbreaking concept that merges technology, biodiversity conservation, and business strategy in a way never seen before. Powered by QUDEX, Bio Assets are revolutionizing how we value and protect the Earth’s most precious natural resources. In this blog post, we demystify the concept of Bio Assets and explain their transformative impact on businesses and conservation efforts alike.{" "}
                </p>
                <p>Defining Bio Assets: At its core, a Bio Asset is a unique digital representation of a real-life species or habitat. Using cutting-edge artificial intelligence (AI) technology, QUDEX meticulously documents and preserves these species and habitats in a digital format. Each Bio Asset is a digital masterpiece that connects businesses, individuals, and conservation efforts in a dynamic and engaging way.</p>
                <p>The lion, scientifically known as Panthera leo, is one of the four big cats in the genus Panthera and is widely recognized as the “King of the Jungle.” Lions are majestic creatures and are known for their impressive manes and powerful roars. They are social animals, living in groups called prides, and are found in various parts of Africa. Corporate Social Responsibility (CSR): Qudex has incorporated lion conservation into its CSR initiatives. This can involve financial support, sponsoring conservation projects, or partnering with established wildlife conservation organizations that work to protect lions.</p>
                <p><i>QBOT</i></p>
                <p>The Role of AI in Bio Assets: AI technology is at the heart of Bio Assets. QUDEX utilizes advanced AI algorithms to create rich, interactive content for each Bio Asset, including high-resolution photos, engaging narratives, and data-driven extinction timelines. This AI-generated content transforms biodiversity conservation from an abstract concept into an immersive experience, merging scientific data with emotional storytelling.</p>
                <p>Bio Assets as a Business Strategy: But Bio Assets aren’t just about breathtaking photos and captivating stories. These digital tokens are a tangible symbol of a company’s commitment to sustainability and conservation efforts. When businesses invest in QUDEX, they acquire Bio Assets that align with their brand image and values. By doing so, they send a powerful message to their stakeholders, customers, and the public about their dedication to safeguarding the Earth’s biodiversity.</p>
                <p>Driving Customer Engagement and Retention: Bio Assets are also potent tools for customer engagement and retention. Businesses can weave captivating narratives around the species or habitats they support, forging a deep emotional connection with their customers. With Bio Assets, businesses can make conservation personal for their customers, inspiring them to be part of the brand’s journey towards a more sustainable future.</p>
                <p>The Impact on Conservation Efforts: Bio Assets also provide tangible support for conservation efforts. Each Bio Asset corresponds to real-world initiatives aimed at protecting and preserving the species or habitat it represents. By investing in Bio Assets, businesses and individuals are directly contributing to these conservation initiatives, making a genuine difference in protecting the Earth’s biodiversity.</p>
                <p>Bio Assets represent a powerful new approach to biodiversity conservation and business strategy. By merging AI technology with real-world conservation efforts, QUDEX has created a platform where businesses can demonstrate their commitment to sustainability, engage their customers in meaningful ways, and contribute to the protection of our planet’s most precious resources.</p>
                <p>Join us in this transformative journey. Invest in Bio Assets and be part of the movement to safeguard our planet’s precious biodiversity for generations to come. Together, let’s create a greener, more sustainable future.</p>
                <div className="blog__detail-thumb">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Detail2}
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

export default BlogDetail5;
