"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className="cursor-pointer inline-block"
      role="button"
      aria-label="Scroll to top"
    >
      <Image
        src={getImgPath("/images/logo/logo.svg")}
        alt="logo"
        width={70}
        height={70}
      />
    </div>
  );
};

export default Logo;
