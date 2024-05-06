import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText, chroma } from "@/plugins";
import Link from "next/link.js";
import SiteLogoWhite from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Image from "next/image.js";
import toast from "react-hot-toast";
// import { sendEmail } from "../../../public/utils/sendEmail";

gsap.registerPlugin(ScrollTrigger);

export default function Footer1() {
  const menuAnim = useRef();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);

  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("");
      let spanData = "";
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == " ") {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + "</div>";
      firstParent[0].innerHTML = result;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let endTl = gsap.timeline({
          repeat: -1,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".end",
            start: "bottom 100%-=50px",
          },
        });
        gsap.set(".end", {
          opacity: 0,
        });
        gsap.to(".end", {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".end",
            start: "bottom 100%-=50px",
            once: true,
          },
        });
        let mySplitText = new SplitText(".end", { type: "words,chars" });
        let chars = mySplitText.chars;
        let endGradient = chroma.scale(["#F9D371", "#F47340", "#EF2F88", "#8843F2"]);
        endTl.to(chars, {
          duration: 0.5,
          scaleY: 0.6,
          ease: "power3.out",
          stagger: 0.04,
          transformOrigin: "center bottom",
        });
        endTl.to(
          chars,
          {
            yPercent: -20,
            ease: "elastic",
            stagger: 0.03,
            duration: 0.8,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            stagger: 0.03,
            duration: 1.5,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            color: (i, el, arr) => {
              return endGradient(i / arr.length).hex();
            },
            ease: "power2.out",
            stagger: 0.03,
            duration: 0.3,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            yPercent: 0,
            ease: "back",
            stagger: 0.03,
            duration: 0.8,
          },
          0.7
        );
        endTl.to(chars, {
          color: "#c9f31d",
          duration: 1.4,
          stagger: 0.05,
        });
      });
      return () => tHero.revert();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await sendEmail(email);
    if (success) {
      setEmail("");
      toast("Thank you for subscribing to our newsletter!");
    } else {
      toast("Oops! Something went wrong. Please try again later.");
    }
  };

  const subscribeNewsletter = () => toast.success("Successfully subscribe newsletter!");

  return (
    <>
      <footer className="footer__area-3 qudex-footer">
        <div className="footer__top-3">
          <div className="footer__top-wrapper-3">
            <div className="footer__logo-3 pt-5">
              <Link href="/">
                <Image priority src={SiteLogoWhite} alt="Footer Logo" />
              </Link>
              <p>
                {`Empowering a Sustainable Tomorrow | Innovating for Nature's
                Harmony`}
              </p>
            </div>
            <div className="footer__social-3">
              <ul>
                <li>
                  <a href="https://www.facebook.com/sharer.php?u=https://linktr.ee/qudex?utm_source=linktree_profile_share&ltsid=f49bb28d-c298-4ce2-97fa-cc0bb57d67a7">facebook</a>
                </li>
                <li>
                  <a href="https://x.com/intent/tweet?text=Check%20out%20this%20Linktree! - https://linktr.ee/qudex?utm_source=linktree_profile_share&ltsid=f49bb28d-c298-4ce2-97fa-cc0bb57d67a7">Twitter</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/sharer.php?u=https://linktr.ee/qudex?utm_source=linktree_profile_share&ltsid=f49bb28d-c298-4ce2-97fa-cc0bb57d67a7">Linkedin</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/qudexai/">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="footer__contact-3">
              <Link className="end" href="/contact">
                Let’s talk
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__btm-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-2 col-xl-2 col-lg-2 qudex-copyright">
                <div className="footer__copyright-3">
                  <p>© 2022 - 2025 | Alrights reserved by {"Qudex"}</p>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 qudex-newslater">
                <div className="footer__subscribe">
                  <p className="pb-4 text-white">Newsletter Signup</p>

                  <form /* onSubmit={handleSubmit} */>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter your email" />
                    <button type="submit" className="subs-btn" onClick={subscribeNewsletter}>
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="footer__nav-2">
                  <ul className="footer-menu-2 menu-anim" ref={menuAnim}>
                    <li>
                      <Link href="/register">Register</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/blog">Q BLOG</Link>
                    </li>
                    <li>
                      <Link href="/impact-directory">Impact Directory</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/qudex-faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
