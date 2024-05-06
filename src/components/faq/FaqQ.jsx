import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";

const FaqQ = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  FAQ
                </h2>
                <p className="">
                  Frequently asked question (FAQ) <br /> pages to find answars.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__list-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="accordionExample"
                >
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      What is QUDE™
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        QUDE, “Quantitative Environmental Data
                        Evaluation”, is the core technology behind
                        QUDEX’s offering. It represents a sophisticated
                        method of collecting, analyzing, and presenting
                        environmental data to provide actionable insights.
                        QUDE technology transforms raw data into a
                        valuable digital asset that can be used to assess
                        environmental impact and provide meaningful,
                        quantifiable metrics for sustainability.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      What is QUDE™
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        QUDE, “Quantitative Environmental Data
                        Evaluation”, is the core technology behind
                        QUDEX’s offering. It represents a sophisticated
                        method of collecting, analyzing, and presenting
                        environmental data to provide actionable insights.
                        QUDE technology transforms raw data into a
                        valuable digital asset that can be used to assess
                        environmental impact and provide meaningful,
                        quantifiable metrics for sustainability.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      What is QUDE™
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        QUDE, “Quantitative Environmental Data
                        Evaluation”, is the core technology behind
                        QUDEX’s offering. It represents a sophisticated
                        method of collecting, analyzing, and presenting
                        environmental data to provide actionable insights.
                        QUDE technology transforms raw data into a
                        valuable digital asset that can be used to assess
                        environmental impact and provide meaningful,
                        quantifiable metrics for sustainability.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      What is QUDE™
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        QUDE, “Quantitative Environmental Data
                        Evaluation”, is the core technology behind
                        QUDEX’s offering. It represents a sophisticated
                        method of collecting, analyzing, and presenting
                        environmental data to provide actionable insights.
                        QUDE technology transforms raw data into a
                        valuable digital asset that can be used to assess
                        environmental impact and provide meaningful,
                        quantifiable metrics for sustainability.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      What is QUDE™
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        QUDE, “Quantitative Environmental Data
                        Evaluation”, is the core technology behind
                        QUDEX’s offering. It represents a sophisticated
                        method of collecting, analyzing, and presenting
                        environmental data to provide actionable insights.
                        QUDE technology transforms raw data into a
                        valuable digital asset that can be used to assess
                        environmental impact and provide meaningful,
                        quantifiable metrics for sustainability.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqQ;
