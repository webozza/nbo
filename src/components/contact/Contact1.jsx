import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useEffect, useRef, useState } from "react";
import Map from "../LandManamement/Map";
import axios from "axios";

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("api/sendEmail", formData);
      console.log("Email sent successfully");
      // Optionally, show a success message to the user
    } catch (error) {
      console.error("Error sending email:", error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Let’s get in touch
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact__text">
                {/* <p>We’re here to help you navigate your sustainability journey. Contact us for more information about NatureBasedOffsets.com, QUDE™ technology, or how we can assist you in achieving your ecological and business goals.</p> */}
                <div className="contact__info">
                  <h3 ref={wordAnim}>
                    Don’t be afraid man! <br />
                    Say Hello
                  </h3>
                  <ul>
                    <li>
                      <a href="tel:+(2)578365379">Contact: +(2) 578 - 365 - 379</a>
                    </li>
                    <li>
                      <a href="mailto:hello@qudex.ai">Email address: hello@qudex.ai</a>
                    </li>
                    <li>
                      <span>
                        example address here, <br /> QC (USA) H8R 1A1
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <Map />
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="text" name="name" placeholder="Name *" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="text" name="subject" placeholder="Subject *" value={formData.subject} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <textarea name="message" placeholder="Messages *" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button type="submit" className="wc-btn-primary btn-hover btn-item">
                          <span></span> Send <br />
                          Messages <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
