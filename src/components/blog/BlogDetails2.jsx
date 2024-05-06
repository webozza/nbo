import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.png";
import Detail1 from "../../../public/assets/imgs/blog/detail/q-blog-details-2.jpg";
import Detail2 from "../../../public/assets/imgs/blog/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetail2 = () => {
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
                  Embrace Bio Assets with QUDEX: Pioneer a New Era of Biodiversity Conservation and Value
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
                In a world where our planet’s biodiversity faces unprecedented threats, each one of us holds the potential to make a difference. This difference is made possible by embracing Bio Assets, a groundbreaking concept by QUDEX that merges digital innovation with ecological preservation. Today, we invite you on an unforgettable journey into the heart of biodiversity conservation, exploring how Bio Assets are reshaping our approach to safeguarding Earth’s most precious treasures.{" "}
                </p>
                <h2>Discovering Bio Assets:</h2>
                <p>
                Imagine making a tangible difference by preserving a significant fragment of the Amazon rainforest that would otherwise face deforestation. That’s the power of Bio Assets! These are unique digital representations of real-life species and habitats, meticulously documented and preserved within QUDEX’s virtual ecosystem. Every Bio Asset captures the essence of a species, creating an unprecedented bond between us and the natural world.{" "}
                </p>
                <h2>The Power of AI-Generated Content:</h2>
                <p>
                Artificial intelligence (AI) sits at the core of Bio Assets, bringing each asset to life with striking visuals, compelling narratives, and sobering extinction timelines. This fusion of ecological data and creativity provides an immersive, interactive experience, connecting us with the species we are striving to protect in ways never before possible.{" "}
                </p>
                <h2>Valuing Rarity and Conservation Efforts:</h2>
                <p>Every Bio Asset symbolizes not just the species it represents but also the rarity and conservation urgency of that species. The more endangered the species, the higher the value of the corresponding Bio Asset. This unique valuation mechanism allows businesses and individuals to display their commitment to supporting endangered species and habitats in a very tangible way, driving real-world conservation impact.</p>
                <h2>Engaging Customers and Making a Difference: </h2>
                <p>Bio Assets serve as much more than digital collectibles. They are a powerful medium for storytelling, helping businesses engage customers on a deeper, more personal level. For instance, a coffee company investing in Bio Assets of bird species found in coffee forests can weave a narrative around this, sparking customer interest and fostering a culture of environmental stewardship.</p>
                <h2>Building a Greener Tomorrow: </h2>
                <p>Our journey into the world of Bio Assets reveals a unique path to a greener, more sustainable tomorrow. By supporting conservation projects through QUDEX and unlocking these digital assets, businesses and individuals can contribute directly to preserving biodiversity and restoring habitats. Ready to start your journey with QUDEX? Together, we can make every species count and celebrate the incredible diversity that makes our Earth so extraordinary.</p>
                <h2>Conclusion: </h2>
                <p>
                Step into the transformative realm of Bio Assets, where innovation meets conservation to secure a brighter future for our planet. At QUDEX, we invite you to be part of this vital cause. So, why wait? Join our community today, engage with nature’s wonders, and take your first step towards leaving a lasting legacy for generations to come. Remember, the time to act is now. Are you ready to safeguard our planet’s biodiversity with us? Let’s embark on this unforgettable adventure together!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail2;
