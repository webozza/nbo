import React from "react";
import Link from "next/link";

const ButtonCTA = ({ href, children }) => {
  return (
    <>
      <div className="btn_wrapper">
        <Link href={href} className="wc-btn-primary btn-hover btn-item">
          <span></span> {children} <br />
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
};

export default ButtonCTA;

/* Use Case
<ButtonCTA href="/contact">Join as Partner</ButtonCTA> */
