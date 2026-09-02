"use client";

import { useEffect, useRef, useState } from "react";

export default function BigIdeaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="big-idea"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-white      "
    >
      {/* =====================================================
          BACKGROUND SHAPES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top right circle */}

        <div
          className="
            absolute
            -right-[25vw]
            -top-[15vw]
            h-[58vw]
            w-[58vw]
            rounded-full
            bg-[#6285AD]/10
            md:-right-[12vw]
            md:-top-[12vw]
            md:h-[42vw]
            md:w-[42vw]
          "
        />

        {/* Bottom left circle */}

        <div
          className="
            absolute
            -bottom-[25vw]
            -left-[25vw]
            h-[55vw]
            w-[55vw]
            rounded-full
            bg-[#C6A77A]/10
            md:-bottom-[18vw]
            md:-left-[12vw]
            md:h-[38vw]
            md:w-[38vw]
          "
        />

        </div>
      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1500px]
          flex-col
          justify-center
          px-6
          py-24
          sm:px-8
          md:px-[7vw]
          md:py-28
        "
      >
     
          

         
         
     
        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <div className="max-w-[1050px]">
          {/* =================================================
              SMALL INTRO
          ================================================== */}

          <p
            className={`
              mb-3
              font-[var(--font-editorial)]
              text-[clamp(1.45rem,3.5vw,2.5rem)]
              leading-[1.05]
              tracking-[-0.025em]
              text-[#C6A77A]
              transition-all
              duration-1000
              sm:mb-4
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
            style={{
              transitionDelay: "100ms",
            }}
          >
            Marketing Isn't About Being Everywhere.
          </p>

          {/* =================================================
              MAIN STATEMENT
          ================================================== */}

          <h2
            className={`
              max-w-[900px]
              font-[var(--font-editorial)]
              text-[clamp(2.25rem,5.5vw,4.8rem)]
              font-normal
              leading-[0.96]
              tracking-[-0.045em]
              text-[#0B2A52]
              transition-all
              duration-[1200ms]
              sm:text-[clamp(2.7rem,5vw,4.8rem)]
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
            style={{
              transitionDelay: "200ms",
            }}
          >
            It’s about being{" "}
            <span className="text-[#6285AD]">
              impossible to ignore
            </span>{" "}
            in the right place.
          </h2>

          {/* =================================================
              PHILOSOPHY
          ================================================== */}

          <div
            className={`
              mt-8
              max-w-[560px]
              transition-all
              duration-1000
              sm:mt-10
              md:mt-12
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }
            `}
            style={{
              transitionDelay: "400ms",
            }}
          >
            <div className="flex items-start gap-4">
              {/* Gold line */}

              <span
                className="
                  mt-2.5
                  h-px
                  w-8
                  shrink-0
                  bg-[#C6A77A]
                  sm:w-10
                "
              />

              <p
                className="
                  text-[11px]
                  leading-[1.65]
                  text-[#344054]/80
                  sm:text-xs
                  sm:leading-6
                  md:text-sm
                  md:leading-6
                "
              >
                We don't believe in doing more just
                to look busy. We believe in finding
                the right audience, the right message,
                and the right moment — then making
                your brand impossible to overlook.
              </p>
            </div>
          </div>
        </div>

       
             
           
       
        
         
      
      </div>
    </section>
  );
}