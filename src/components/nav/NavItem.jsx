import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NavItem({ nav, navStyle = "" }) {
  const menuAnim = useRef();

  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    } else {
      setTimeout(() => {
        menuAnimation();
      }, 1000);
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

  const handleMouseEnter = (index) => {
    const dropdown = document.querySelector(`#dropdown-${index}`);
    if (dropdown) {
      dropdown.style.visibility = "visible";
    }
  };

  const handleMouseLeave = (index) => {
    const dropdown = document.querySelector(`#dropdown-${index}`);
    if (dropdown) {
      dropdown.style.visibility = "hidden";
    }
  };

  return (
    <>
      <div className="header__nav-2">
        <ul className={navStyle ? `main-menu-${navStyle} menu-anim` : `main-menu menu-anim`} ref={menuAnim}>
          {nav.map((el, i) => {
            return (
              <li key={i} style={{ position: "relative" }} onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => handleMouseLeave(i)}>
                <Link href={el.link}>{el.nav_name}</Link>
                {el.sub_nav && el.sub_nav.length > 0 && (
                  <ul
                    className="dropdown"
                    id={`dropdown-${i}`}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "20%",
                      backgroundColor: "black",
                      padding: "10px 10%",
                      width: "100%",
                      textAlign: "left",
                      animationDuration: "3s",
                      visibility: "hidden",
                      zIndex: "999",
                      color: "white",
                    }}
                  >
                    {el.sub_nav.map((subEl, index) => (
                      <li key={index} style={{ padding: "10px 0" }}>
                        <Link href={subEl.link} style={{ color: "white" }}>
                          {subEl.nav_name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
