import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Team1 from "../../../public/assets/imgs/team/lion-1.jpg";
import Team2 from "../../../public/assets/imgs/team/owl.jpg";
import Team3 from "../../../public/assets/imgs/team/wolf.jpg";
import Team4 from "../../../public/assets/imgs/team/4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";

const AboutTeam = () => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }
  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    try {
      const target = e.target;
      let tHero = gsap.context(() => {
        let tl = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });
        let t2 = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });

        // Team Page Team Cursor
        if (target.closest(".team__slider")) {
          tl.to(
            team_cursor,
            {
              opacity: 1,
              ease: "power4.out",
            },
            "-=0.3"
          );
        } else {
          t2.to(
            team_cursor,
            {
              opacity: 0,
              ease: "power4.out",
            },
            "-=0.3"
          );
        }
      });
      return () => tHero.revert();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="team__area pt-140 pb-140">
        <div className="sec-title-wrapper">
          <h3 className="sec-title title-anim">One Team One Vision</h3>
          {/* <h2 className="sec-sub-title title-anim">Qudex</h2> */}
          <h2 className="sec-sub-title title-anim" style={{ marginTop: "20px", width: "40%", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            Meet the passionate individuals behind NatureBasedOffsets.com, each dedicated to making a significant impact in the field of ecological conservation.
          </h2>
        </div>

        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="team__slide">
                <Image priority style={{ width: "100%", height: "auto" }} src={Team1} alt="Team Member" />
                <div className="team__info">
                  <h4 className="team__member-name">Jesse Harris</h4>
                  <h5 className="team__member-role"> Qude vision </h5>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Image priority style={{ width: "100%", height: "auto" }} src={Team2} alt="Team Member" />
                <div className="team__info">
                  <h4 className="team__member-name">Tom Hobby </h4>
                  <h5 className="team__member-role"> The lorex </h5>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Image priority style={{ width: "100%", height: "auto" }} src={Team3} alt="Team Member" />
                <div className="team__info">
                  <h4 className="team__member-name">Vinh </h4>
                  <h5 className="team__member-role"> Planet tech Master </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team__slide">
                <Image priority style={{ width: "100%", height: "auto" }} src={Team1} alt="Team Member" />
                <div className="team__info">
                  <h4 className="team__member-name">Jesse Harris</h4>
                  <h5 className="team__member-role"> Qude vision </h5>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Image priority style={{ width: "100%", height: "auto" }} src={Team2} alt="Team Member" />
                <div className="team__info">
                  <h4 className="team__member-name">Tom Hobby </h4>
                  <h5 className="team__member-role"> The lorex </h5>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Image priority style={{ width: "100%", height: "auto" }} src={Team3} alt="Team Member" />
                <div className="team__info">
                  <h4 className="team__member-name">Vinh </h4>
                  <h5 className="team__member-role"> Planet tech Master </h5>
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team4}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Hardiya Kethrine</h4>
                    <h5 className="team__member-role">Lead Designer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team2}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Saymon D. Halk</h4>
                    <h5 className="team__member-role">Researcher</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team3}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Jassica Oliver</h4>
                    <h5 className="team__member-role">Lead Designer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team1}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Saymon D. Halk</h4>
                    <h5 className="team__member-role">Founder & CEO</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team2}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Jassica Oliver</h4>
                    <h5 className="team__member-role">Researcher</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team3}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Daniyel Adamson</h4>
                    <h5 className="team__member-role">Digital Marketer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team4}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Hardiya Kethrine</h4>
                    <h5 className="team__member-role">Lead Designer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team2}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Saymon D. Halk</h4>
                    <h5 className="team__member-role">Researcher</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team3}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Jassica Oliver</h4>
                    <h5 className="team__member-role">Lead Designer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
