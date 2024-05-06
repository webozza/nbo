import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.png";
import Detail1 from "../../../public/assets/imgs/blog/detail/q-blog-detail-3.jpg";
import Detail2 from "../../../public/assets/imgs/blog/detail/q-blog-detail-3-2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetail3 = () => {
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
                <h2 className="blog__detail-date animation__word_come" ref={wordAnim}>
                  Qdex <span>2 Aug 2023</span>
                </h2>
                <h3 className="blog__detail-title animation__word_come" ref={wordAnim2}>
                  QUDEX Alpha Launch: A Scientific Odyssey into AI-Driven Biodiversity Conservation
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
                <Image priority style={{ width: "auto", height: "auto" }} src={Detail1} alt="Blog Thumbnail" data-speed="0.5" />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <h2>Conservation</h2>
                <p>We are on the precipice of a revolutionary era in biodiversity conservation, ushered in by QUDEX. We are thrilled to announce the successful alpha test launch of QUDEX, a game-changing blend of artificial intelligence (AI), blockchain technology, and a deep-rooted commitment to preserving Earth’s rich biodiversity. In this blog, we explore the scientific wonders revealed during the alpha test, including our innovative QUDE – Quantitative Environmental Data Evaluation framework. </p>
                <p>The primary tools that will be under evaluation during our Alpha Test Launch include:</p>
                <ul>
                  <li>QUDE™ Data Token: This innovative data currency system encapsulates quantified and verified environmental data, fostering a transparent and precise accounting of environmental impact.</li>
                  <li>BioAssets: By identifying, quantifying, and enabling the effective management of the value inherent in biodiversity and ecosystems, we turn ecological responsibility into a tangible and manageable asset.</li>
                  <li>ECO SCORE CARD: An easy-to-use tool offering businesses the ability to measure, monitor, and enhance their environmental footprint, thus driving ecological responsibility and effective eco-marketing strategies.</li>
                  <li>QLENS APP: An application that delivers real-time satellite imagery and AI-powered insights, supporting comprehensive and effective land management strategies.</li>
                </ul>
                <p>The Science of QUDEX: QUDEX is founded on a profound scientific understanding and reverence for our planet’s biodiversity. Recognizing the unique challenges of preserving this irreplaceable wealth, QUDEX synergizes AI and blockchain technology to transform these challenges into promising opportunities. Through the creation of Bio Assets, QUDEX initiates a new paradigm in biodiversity conservation and value assessment.</p>
                <p>The Intrigue of Bio Assets: At the core of QUDEX are Bio Assets – AI-generated digital tokens representing real-life species and ecosystems. These digital assets encapsulate not just the aesthetic beauty of nature, but also assign value based on the rarity and conservation status of each species. Through Bio Assets, QUDEX offers a novel and engaging means to appreciate and safeguard our natural world.</p>
                <p>Unveiling QUDE: A Revolutionary Approach to Environmental Data: The alpha test launch of QUDEX spotlights our groundbreaking QUDE framework. QUDE is an exhaustive system designed to collect and process environmental data from a myriad of sources, including satellite imagery, aerial photography, and user-generated content. Leveraging advanced machine learning algorithms, QUDE ensures data accuracy and optimizes it for our mapping system, thereby enhancing the authenticity and integrity of each Bio Asset.</p>
                <p>The Quintessence of AI in QUDEX: The alpha test underscored the transformative power of AI in creating Bio Assets. Utilizing cutting-edge AI algorithms, QUDEX crafts detailed images and captivating narratives for each Bio Asset. It translates complex ecological data into compelling stories and establishes an extinction timeline for each represented species, adding an element of urgency to conservation efforts.</p>
                <p>Integrating Blockchain with Bio Assets: Our alpha launch also signifies a landmark integration of blockchain technology within QUDEX. Every Bio Asset exists as a unique non-fungible token (NFT) on the blockchain, ensuring its authenticity, exclusive ownership, and distinctness. This gives businesses and individuals the confidence to invest in Bio Assets, contributing to tangible and verifiable conservation initiatives.</p>
                <p>Actualizing Real-World Conservation: QUDEX is more than a digital representation of nature – it’s a tool for tangible change. Each Bio Asset correlates directly to real-world conservation efforts, establishing a meaningful link between the digital and natural world. Revenue from Bio Assets directly supports specific conservation projects, ensuring that every Bio Asset serves as a lifeline for the species it symbolizes.</p>
                <p>QUDE™ underpins our new tool, the ECO-INVESTMENT RATING (EIR), a product specifically tailored to provide investors with a comprehensive understanding of a company’s environmental impact and commitment to sustainability.</p>
                <p>The successful alpha test launch of QUDEX heralds a new epoch in conservation, demonstrating the potential to harmonize AI, blockchain, and biodiversity preservation in a meaningful and captivating way. As we celebrate this momentous milestone, we invite you to join us in our transformative journey. With QUDEX, we can redefine the narrative of conservation, and pave the way for a more sustainable future. Our actions today will shape the future of biodiversity – let’s make every action count.</p>
                <p>QBOT</p>
                <div className="blog__detail-thumb">
                  <Image priority style={{ width: "auto", height: "auto" }} src={Detail2} alt="Blog Thumbnail" data-speed="0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail3;
