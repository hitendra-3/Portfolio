"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useRef } from "react";

const index = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Hitendra S</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>Aspiring Software Developer</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Software Developer with a strong foundation in data structures, algorithms, and object-oriented programming. Skilled in Python, Java, and JavaScript with experience developing, testing, and deploying scalable applications.
            </p>
          </div>
          <Image
            src={getImgPath("/images/home/banner/hero3.png")}
            alt="3D developer at desk illustration"
            width={1800}
            height={1080}
            className="block w-full mx-auto lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 hidden h-full w-1/2 lg:block pointer-events-none">
        <Image
          src={getImgPath("/images/home/banner/hero3.png")}
          alt="3D developer at desk illustration"
          width={2200}
          height={1320}
          className="absolute right-0 left-20 bottom-0 top-45 h-full w-auto z-1 object-contain transform translate-x-32 scale-150 origin-bottom-right"
        />
      </div>
    </section>
  );
};

export default index;
