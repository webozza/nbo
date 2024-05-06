import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/casefile.jpg";
import Image from "next/image";

const QudexSolutions = () => {
  return (
    <>
      <section className="faq__area pt-150">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image priority style={{ width: "auto", height: "auto" }} src={ThumbFaq} alt="FAQ Image" data-speed="auto" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">QUDE X Solutions</h2>

                <div className="faq__list">
                  <ul>
                    <li className="pb-4">
                      <span style={{ fontWeight: "500", fontSize: "32px" }}>+ </span>Tell your users how eco you are and show them your Eco Score Card
                    </li>
                    <li className="pb-4">
                      <span style={{ fontWeight: "500", fontSize: "32px" }}>+ </span>Incentivize your marketing by pairing a local do-good promise for the communities you serve and fulfill your eco-promises
                    </li>
                    <li className="pb-4">
                      <span style={{ fontWeight: "500", fontSize: "32px" }}>+ </span>Automate saving the planet so you can focus more on your business
                    </li>
                    <li className="pb-5">
                      <span style={{ fontWeight: "500", fontSize: "32px" }}>+ </span>Read our blog and try to see everything from every perspective. Our passion lies in making everything accessible and aesthetic for everyone.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QudexSolutions;
