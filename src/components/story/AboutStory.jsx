import Story1 from "../../../public/assets/imgs/story/profit.jpg";
import Story2 from "../../../public/assets/imgs/story/peoples.jpg";
import Story3 from "../../../public/assets/imgs/story/earth.png";
import Story4 from "../../../public/assets/imgs/story/the-platform.jpg";
import Icon from "../../../public/assets/imgs/story/icon-take-5.png";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            {/* <div className="from-text">
              from <span>1990</span>
            </div> */}

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Qudex</h2>
                <h3 className="sec-title title-anim">Our Mission</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p style={{ margin: "0 0 40px 0" }}>At NatureBasedOffsets.com, we strive to revolutionize the way ecological assets are valued and conserved. Our mission is to connect landowners and businesses, leveraging the power of QUDE™ technology to create a sustainable future for all.</p>
                  {/* <p>
                    QUDEX provides businesses the means to actively contribute
                    to the restoration and preservation of our natural
                    environment. By sponsoring QUDEs, which represent
                    quantifiable, verifiable environmental data on the platform,
                    companies can directly aid in the revitalization of degraded
                    landscapes and habitats. This groundbreaking approach to
                    corporate responsibility allows businesses to make a
                    tangible and lasting impact, benefiting not just the
                    environment, but also their reputation and relationships
                    with customers and investors.
                  </p> */}
                  {/* <p>Moreover, QUDEX’s innovative approach to utilizing advanced technology and extensive field data transforms environmental conservation into a viable, quantifiable business strategy. Businesses can now view their contributions to environmental sustainability not as an intangible, unquantifiable effort, but as a real investment in bioassets that have both environmental and economic value.</p>
                  <p>Through their engagement with QUDEX, companies also gain a powerful means of customer engagement. As consumer focus shifts increasingly towards supporting businesses that prioritize sustainability, the transparent and measurable efforts facilitated by QUDEX can provide a compelling narrative for companies to share with their customers. This not only enhances their brand image but also fosters a deeper connection with their audience based on shared values and objectives.</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image priority width={300} style={{ height: "auto" }} src={Story1} alt="Story Thumbnail" className="w-100" />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image priority width={520} style={{ height: "auto" }} src={Story2} alt="Story Thumbnail" data-speed="auto" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image priority width={230} style={{ height: "auto" }} src={Story3} alt="Story Thumbnail" />
                <Image priority width={410} style={{ height: "auto" }} src={Story4} alt="Story Thumbnail" />
              </div>
            </div>
          </div>
          <div className="row pt-100 pb-5">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <h3 className="pb-3 sec-title title-anim">The VISION</h3>
              <p className="pb-5">We envision a world where every piece of land is recognized for its true ecological value, contributing to a global economy that prioritizes environmental health and sustainability.</p>
              {/* <p className="pb-5">The Vision of QUDEX is to offer a straightforward and transparent solution to address the environmental impact of our past and ongoing commercial activities. Through QUDEX, we hand businesses, investors, and individuals the proverbial shovel, providing them with an accessible and effective means to help fill in the ecological deficit we have created over the years.</p> */}
              <Image src={Icon} alt="Icon" className="img-fluid" />
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 pt-lg-0 pt-5">
              <h3 className="pb-3">The Mission Is to Regenerate the earth using QUDE™</h3>
              <p>
                {`More than 75 percent of Earth's land areas are substantially
                degraded, undermining the well-being of 3.2 billion people,
                according to the world's first comprehensive, evidence-based
                assessment. These lands that have either become deserts, are
                polluted, or have been deforested and converted to agricultural
                production are also the main causes of species extinctions. We
                cannot reverse the damage overnight, but with a dedicated,
                systemic approach using QUDEX, we can begin to turn the tide. By
                making it simple and transparent for businesses and investors to
                contribute to land restoration, we are on the right path towards
                healing our planet and building a sustainable future for all.
                QUDEX provides landowners with a novel, profitable, and
                sustainable solution to land degradation and the loss of
                biodiversity. At the core of QUDEX's approach is a concept known
                as BioAssets. BioAssets are nature-based offsets that landowners
                can create by implementing sustainable land-use practices and
                restoring the natural ecosystems on their properties.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
