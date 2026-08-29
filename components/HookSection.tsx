"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    number: "01",
    type: "intro",
    title: "Why isn't your Brand Growing?",
    subtitle: "",
    description: "",
    image: "/hook/hook.png",
  },
  {
   number: "02",
    type: "problem",
    title: "People see you.",
    subtitle: "But don't remember you.",
    description:
      "Your brand gets attention, but it doesn't stay in people's minds.",
    image: "/hook/hook1.png",
  },
  {
    number: "03",
    type: "problem",
    title: "People visit you.",
    subtitle: "But don't convert.",
    description:
      "People land on your website, explore your brand, and then disappear.",
    image: "/hook/hook2.png",
  },
  {
   number: "04",
    type: "problem",
    title: "You post content.",
    subtitle: "But nothing really happens.",
    description:
      "You keep posting, but the content isn't creating the attention or momentum you expected.",
    image: "/hook/hook3.png",
  },
  {
   number: "05",
    type: "problem",
    title: "You spend on ads.",
    subtitle: "But the numbers don't make sense.",
    description:
      "You're spending money, getting clicks, and still wondering where the real growth is.",
    image: "/hook/hook4.png",
  },
];

export default function HookSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  /* =========================================================
     REDUCED MOTION
  ========================================================= */

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      setReducedMotion(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();

      const scrollable =
        section.offsetHeight - window.innerHeight;

      if (scrollable <= 0) return;

      const distance = Math.max(
        0,
        Math.min(-rect.top, scrollable)
      );

      const value = distance / scrollable;

      setProgress(value);

      const introEnd = 0.14;
      const finalStart = 0.88;

      let nextIndex = 0;

      if (value <= introEnd) {
        nextIndex = 0;
      } else if (value >= finalStart) {
        nextIndex = 4;
      } else {
        const problemProgress =
          (value - introEnd) /
          (finalStart - introEnd);

        nextIndex = Math.min(
          4,
          1 + Math.floor(problemProgress * 4)
        );
      }

      setActiveIndex(nextIndex);

      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;

      frame = requestAnimationFrame(update);
    };

    update();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      onScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );

      window.removeEventListener(
        "resize",
        onScroll
      );

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  const isIntro = activeIndex === 0;
  const isFinal = progress >= 0.88;

  return (
    <section
      ref={sectionRef}
      id="hook"
      className="
        relative
        z-0
        h-[620vh]
        bg-white
        isolate
      "
    >
      {/* =====================================================
          STICKY VIEWPORT
      ====================================================== */}

      <div
        className="
          sticky
          top-0
          h-screen
          w-full
          overflow-hidden
          bg-white
        "
      >
        {/* ===================================================
            SOFT BACKGROUND
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          <div
            className="
              absolute
              -right-[12vw]
              top-[12vh]
              h-[46vw]
              w-[46vw]
              max-h-[700px]
              max-w-[700px]
              rounded-full
              bg-[#D6E3F2]
            "
          />
        </div>

        {/* ===================================================
            TOP META
        ==================================================== */}

        <header
          className="
            absolute
            left-6
            right-6
            top-5
            z-40
            flex
            items-center
            justify-between
            md:left-[6vw]
            md:right-[6vw]
            md:top-7
          "
        >
          
            

          

           

            
      

          <div
            className="
              hidden
              items-center
              gap-3
              md:flex
            "
          >
           

           
              <div
                className="
                  h-full
                  bg-[#0B2A52]
                  transition-all
                  duration-300
                "
                style={{
                  width: `${progress * 100}%`,
                }}
              />
            </div>
          
        </header>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <main
          className="
            absolute
            inset-0
            mx-auto
            max-w-[1900px]
            px-6
            pb-20
            pt-24
            md:px-[6vw]
            md:pb-24
            md:pt-24
          "
        >
          <div
            className="
              grid
              h-full
              grid-cols-1
              md:grid-cols-[48%_52%]
            "
          >
            {/* =================================================
                LEFT SIDE
                IMPORTANT:
                NO absolute positioning for intro.
            ================================================== */}

            <div
              className="
                relative
                flex
                h-full
                min-h-0
                items-center
                md:pr-8
              "
            >
              {/* =================================================
                  INTRO — NORMAL FLEX POSITION
              ================================================== */}

              <div
                className="
                  w-full
                  max-w-[820px]
                "
                style={{
                  opacity: isIntro ? 1 : 0,

                  transform: isIntro
                    ? "translateY(0)"
                    : "translateY(-35px)",

                  filter: isIntro
                    ? "blur(0)"
                    : "blur(6px)",

                  pointerEvents: isIntro
                    ? "auto"
                    : "none",

                  transition: reducedMotion
                    ? "none"
                    : "opacity 650ms ease, transform 850ms cubic-bezier(.22,1,.36,1), filter 650ms ease",
                }}
              >
                {/* Small intro word */}

                <div
                  className="
                    mb-2
                    font-[var(--font-editorial)]
                    text-3xl
                    leading-none
                    text-[#5cafeb]
                    sm:text-4xl
                    md:mb-3
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  So…
                </div>

                {/* Main heading */}

                <h2
                  className="
                    max-w-[760px]
                    font-[var(--font-editorial)]
                    text-[clamp(3rem,5vw,5.8rem)]
                    font-normal
                    leading-[0.9]
                    tracking-[-0.055em]
                    text-[#101a36]
                  "
                >
                  Why isn't your
                  <br />
                  brand growing?
                </h2>

                {/* Description */}

                <div
                  className="
                    mt-6
                    flex
                    items-start
                    gap-3
                    md:mt-8
                    md:gap-4
                  "
                >
                  <span
                    className="
                      mt-2.5
                      h-px
                      w-10
                      shrink-0
                      bg-[#0B2A52]
                      md:w-14
                    "
                  />

                  <p
                    className="
                      max-w-[430px]
                      text-xs
                      leading-5
                      text-[#69717f]
                      sm:text-sm
                      md:text-base
                      md:leading-6
                    "
                  >
                    You're not alone.
                    <br />
                    Here's what most businesses
                    are struggling with.
                  </p>
                </div>

                {/* Scroll CTA */}

                

                 
                
              </div>

              {/* =================================================
                  PROBLEM SLIDES
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  flex
                  items-center
                "
              >
                {slides
                  .slice(1)
                  .map((slide, index) => {
                    const slideIndex =
                      index + 1;

                    const active =
                      slideIndex ===
                      activeIndex;

                    const previous =
                      slideIndex <
                      activeIndex;

                    return (
                      <div
                      
                        className="
                          absolute
                          left-0
                          w-full
                        "
                        style={{
                          opacity: active
                            ? 1
                            : 0,

                          transform: active
                            ? "translateY(0)"
                            : previous
                            ? "translateY(-45px)"
                            : "translateY(45px)",

                          filter: active
                            ? "blur(0)"
                            : "blur(6px)",

                          transition:
                            reducedMotion
                              ? "none"
                              : "opacity 600ms ease, transform 800ms cubic-bezier(.22,1,.36,1), filter 600ms ease",
                        }}
                      >
                        {/* Number */}

                      
                        {/* Title */}

                        <h3
                          className="
                            max-w-[780px]
                            font-[var(--font-new-york)]
                            text-[clamp(2.6rem,4.2vw,5rem)]
                            font-normal
                            leading-[0.92]
                            tracking-[-0.05em]
                            text-[#101a36]
                          "
                        >
                          {slide.title}
                        </h3>

                        {/* Subtitle */}

                        <p
                          className="
                            mt-4
                            font-[var(--font-editorial)]
                            text-[clamp(1.3rem,2vw,2rem)]
                            leading-tight
                            text-[#596272]
                          "
                        >
                          {slide.subtitle}
                        </p>

                        {/* Description */}

                        <p
                          className="
                            mt-5
                            max-w-[500px]
                            text-xs
                            leading-5
                            text-[#747c88]
                            sm:text-sm
                            md:mt-6
                            md:text-base
                            md:leading-6
                          "
                        >
                          {slide.description}
                        </p>

                        {/* Label */}

                        <div
                          className="
                            mt-6
                            flex
                            items-center
                            gap-2
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-[#0B2A52]
                            "
                          />

                          <span
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.2em]
                              text-[#9ba1aa]
                            "
                          >
                            Reality check
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE — IMAGE
            ================================================== */}

            <div
              className="
                relative
                hidden
                h-full
                min-h-0
                items-center
                justify-center
                md:flex
              "
            >
              {slides.map(
                (slide, index) => {
                  const active =
                    index ===
                    activeIndex;

                  const previous =
                    index <
                    activeIndex;

                  return (
                    <div
                      key={slide.image}
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                      "
                      style={{
                        opacity: active
                          ? 1
                          : 0,

                        transform: active
                          ? "translateY(0) scale(1)"
                          : previous
                          ? "translateY(-25px) scale(1.03)"
                          : "translateY(25px) scale(.96)",

                        filter: active
                          ? "blur(0)"
                          : "blur(6px)",

                        transition:
                          reducedMotion
                            ? "none"
                            : "opacity 700ms ease, transform 900ms cubic-bezier(.22,1,.36,1), filter 700ms ease",
                      }}
                    >
                      {/* 
                        IMPORTANT:
                        No card.
                        No border.
                        No background.
                      */}

                      <div
                        className="
                          relative
                          h-[min(64vh,600px)]
                          w-[min(46vw,800px)]
                        "
                      >
                        <Image
                        key={slide.image}
                          src={
                            slide.image
                          }
                          alt={
                            slide.title
                          }
                          fill
                          priority={
                            index === 0
                          }
                          sizes="
                            (max-width: 768px) 90vw,
                            46vw
                          "
                          className="
                            object-contain
                          "
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* =================================================
              MOBILE IMAGE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[8vh]
              left-1/2
              z-10
              block
              h-[24vh]
              w-[88vw]
              -translate-x-1/2
              md:hidden
            "
          >
            {slides.map(
              (slide, index) => {
                const active =
                  index ===
                  activeIndex;

                return (
                  <div
                    key={slide.image}
                    className="
                      absolute
                      inset-0
                    "
                    style={{
                      opacity: active
                        ? 1
                        : 0,

                      transform: active
                        ? "scale(1)"
                        : "scale(.94)",

                      filter: active
                        ? "blur(0)"
                        : "blur(5px)",

                      transition:
                        reducedMotion
                          ? "none"
                          : "opacity 650ms ease, transform 800ms cubic-bezier(.22,1,.36,1), filter 650ms ease",
                    }}
                  >
                    <Image
                      src={
                        slide.image
                      }
                      alt={
                        slide.title
                      }
                      fill
                      sizes="88vw"
                      className="
                        object-contain
                      "
                    />
                  </div>
                );
              }
            )}
          </div>
        </main>

        {/* ===================================================
            BOTTOM PROGRESS
        ==================================================== */}

        <div
          className="
            absolute
            bottom-5
            left-6
            right-6
            z-50
            md:bottom-7
            md:left-[6vw]
            md:right-[6vw]
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div
              className="
                flex
                items-center
              "
            >
              {slides.map(
                (slide, index) => {
                  const active =
                    index ===
                    activeIndex;

                  const completed =
                    index <
                    activeIndex;

                  return (
                    <div
                    
                      className="
                        flex
                        items-center
                      "
                    >
                      

                      {index <
                        slides.length -
                          1 && (
                        <span
                          className={`
                            mx-2
                            h-px
                            w-4
                            md:mx-3
                            md:w-7
                            ${
                              completed
                                ? "bg-[#0B2A52]"
                                : "bg-[#e1e5eb]"
                            }
                          `}
                        />
                      )}
                    </div>
                  );
                }
              )}
            </div>

            <span
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[#999fa8]
                md:block
              "
            >
              Keep scrolling ↓
            </span>
          </div>
        </div>

        {/* ===================================================
            FINAL REVEAL
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-white
          "
          style={{
            opacity: isFinal
              ? Math.min(
                  1,
                  (progress -
                    0.88) /
                    0.07
                )
              : 0,

            transition:
              reducedMotion
                ? "none"
                : "opacity 600ms ease",
          }}
        >
          <div
            className="
              px-6
              text-center
            "
          >
            <p
              className="
                mb-4
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-[#0B2A52]
                md:text-xs
              "
            >
              Enough of the problems.
            </p>

            <h3
              className="
                font-[var(--font-editorial)]
                text-[clamp(3rem,6.5vw,7.5rem)]
                font-normal
                leading-[0.88]
                tracking-[-0.055em]
                text-[#101a36]
              "
            >
              That's where
              <br />
              <span className="text-[#0B2A52]">
                we come in.
              </span>
            </h3>

            <div
              className="
                mx-auto
                mt-7
                h-px
                w-16
                bg-[#0B2A52]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}