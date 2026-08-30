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

    const updateMotionPreference = () => {
      setReducedMotion(media.matches);
    };

    updateMotionPreference();

    media.addEventListener(
      "change",
      updateMotionPreference
    );

    return () => {
      media.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  /* =========================================================
     SCROLL ENGINE
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();

      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollDistance = Math.max(
        1,
        sectionHeight - viewportHeight
      );

      const distance = Math.max(
        0,
        Math.min(
          -rect.top,
          scrollDistance
        )
      );

      const value = Math.max(
        0,
        Math.min(
          1,
          distance / scrollDistance
        )
      );

      setProgress(value);

      /* =====================================================
         SLIDE TIMING
      ====================================================== */

      const introEnd = 0.12;
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
          1 +
            Math.floor(
              problemProgress * 4
            )
        );
      }

      setActiveIndex(nextIndex);

      frame = 0;
    };

    const requestUpdate = () => {
      if (frame) return;

      frame =
        requestAnimationFrame(update);
    };

    requestUpdate();

    window.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      requestUpdate
    );

    window.addEventListener(
      "orientationchange",
      requestUpdate
    );

    window.addEventListener(
      "load",
      requestUpdate
    );

    const resizeObserver =
      new ResizeObserver(() => {
        requestUpdate();
      });

    resizeObserver.observe(section);

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate
      );

      window.removeEventListener(
        "resize",
        requestUpdate
      );

      window.removeEventListener(
        "orientationchange",
        requestUpdate
      );

      window.removeEventListener(
        "load",
        requestUpdate
      );

      resizeObserver.disconnect();

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
        isolate
        min-h-[620vh]
     bg-white
      "
    >
      {/* =====================================================
          STICKY SCREEN
      ====================================================== */}

      <div
        className="
          sticky
          top-0
          h-[100dvh]
          min-h-0
          w-full
          overflow-hidden
          bg-white
          md:h-[100svh]
          md:min-h-[600px]
        "
      >
        {/* ===================================================
            BACKGROUND
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          {/* Top right circle */}

          <div
            className="
              absolute
              -right-[34vw]
              top-[5vh]
              h-[76vw]
              w-[76vw]
              rounded-full
              bg-[#6285AD]/10
              sm:-right-[30vw]
              sm:h-[70vw]
              sm:w-[70vw]
              md:-right-[12vw]
              md:top-[12vh]
              md:h-[46vw]
              md:w-[46vw]
              md:max-h-[700px]
              md:max-w-[700px]
              md:bg-[#6285AD]/15
            "
          />

          {/* Bottom left circle */}

          <div
            className="
              absolute
              -left-[35vw]
              bottom-[-18vw]
              h-[68vw]
              w-[68vw]
              rounded-full
              bg-[#C6A77A]/10
              md:-left-[12vw]
              md:bottom-[-18vw]
              md:h-[32vw]
              md:w-[32vw]
              md:max-h-[480px]
              md:max-w-[480px]
            "
          />

          {/* Center subtle glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[80vw]
              w-[80vw]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#6285AD]/[0.025]
              md:hidden
            "
          />
        </div>

        {/* ===================================================
            TOP PROGRESS
        ==================================================== */}

        <header
          className="
            absolute
            left-5
            right-5
            top-5
            z-40
            flex
            items-start
            justify-end
            sm:left-6
            sm:right-6
            sm:top-6
            md:left-[6vw]
            md:right-[6vw]
            md:top-7
          "
        >
          {/* Desktop progress */}

          <div
            className="
              hidden
              h-[2px]
              w-28
              overflow-hidden
              rounded-full
              bg-[#0B2A52]/10
              md:block
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-[#0B2A52]
                transition-[width]
                duration-300
              "
              style={{
                width: `${progress * 100}%`,
              }}
            />
          </div>

          {/* Mobile progress */}

          <div
            className="
              flex
              w-[120px]
              flex-col
              gap-1.5
              sm:w-[125px]
              md:hidden
            "
          >
            <div
              className="
                h-[2px]
                w-full
                overflow-hidden
                rounded-full
                bg-[#0B2A52]/10
              "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-[#0B2A52]
                  transition-[width]
                  duration-300
                "
                style={{
                  width: `${progress * 100}%`,
                }}
              />
            </div>

            <span
              className="
                self-end
                text-[7px]
                uppercase
                tracking-[0.18em]
                text-[#344054]/45
              "
            >
              {String(
                activeIndex + 1
              ).padStart(2, "0")}{" "}
              / 05
            </span>

            {/* Small menu lines */}

            <div
              className="
                mt-0.5
                flex
                flex-col
                items-end
                gap-[6px]
              "
            >
              <span
                className="
                  h-[2px]
                  w-8
                  bg-[#0B2A52]
                "
              />

              <span
                className="
                  h-[2px]
                  w-8
                  bg-[#0B2A52]
                "
              />
            </div>
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
            w-full
            max-w-[1900px]
            px-5
            pt-20
            sm:px-6
            sm:pt-24
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
                LEFT CONTENT
            ================================================== */}

            <div
              className="
                relative
                flex
                h-full
                min-h-0
                items-start
                pt-[10.5vh]
                sm:pt-[11vh]
                md:items-center
                md:pt-0
                md:pr-8
              "
            >
              {/* =================================================
                  INTRO
              ================================================== */}

              <div
                className="
                  w-full
                  max-w-[820px]
                "
                style={{
                  opacity:
                    isIntro
                      ? 1
                      : 0,

                  transform:
                    isIntro
                      ? "translateY(0)"
                      : "translateY(-35px)",

                  filter:
                    isIntro
                      ? "blur(0)"
                      : "blur(6px)",

                  pointerEvents:
                    isIntro
                      ? "auto"
                      : "none",

                  transition:
                    reducedMotion
                      ? "none"
                      : "opacity 650ms ease, transform 850ms cubic-bezier(.22,1,.36,1), filter 650ms ease",
                }}
              >
                {/* So */}

              <div
  className="
    mb-2
    font-[var(--font-editorial)]
    text-[clamp(1.6rem,6vw,3rem)]
    leading-none
    text-[#C6A77A]
    sm:mb-3
    sm:text-4xl
    md:text-5xl
  "
>
  So…
</div>

{/* Heading */}

<h2
  className="
    max-w-[700px]
    font-[var(--font-editorial)]
    text-[clamp(2.15rem,7vw,4.5rem)]
    font-normal
    leading-[0.92]
    tracking-[-0.045em]
    text-[#0B2A52]
    sm:text-[clamp(2.5rem,6vw,4.5rem)]
  "
>
  Why isn't your
  <br />
  brand growing?
</h2>

{/* Description */}

<div
  className="
    mt-3
    flex
    items-start
    gap-3
    sm:mt-5
    sm:gap-4
    md:mt-6
  "
>
  <span
    className="
      mt-2
      h-px
      w-7
      shrink-0
      bg-[#C6A77A]
      sm:w-9
      md:w-12
    "
  />

  <p
    className="
      max-w-[360px]
      text-[10px]
      leading-[1.45]
      text-[#344054]
      sm:text-xs
      md:text-sm
      md:leading-5
    "
  >
    You're not alone.
    <br />
    Here's what most businesses
    are struggling with.
  </p>
</div>
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
                  items-start
                  pt-[10.5vh]
                  sm:pt-[11vh]
                  md:items-center
                  md:pt-0
                "
              >
                {slides
                  .slice(1)
                  .map(
                    (
                      slide,
                      index
                    ) => {
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
                          key={
                            `problem-${slide.number}`
                          }
                          className="
                            absolute
                            left-0
                            w-full
                          "
                          style={{
                            opacity:
                              active
                                ? 1
                                : 0,

                            transform:
                              active
                                ? "translateY(0)"
                                : previous
                                ? "translateY(-35px)"
                                : "translateY(35px)",

                            filter:
                              active
                                ? "blur(0)"
                                : "blur(6px)",

                            transition:
                              reducedMotion
                                ? "none"
                                : "opacity 600ms ease, transform 800ms cubic-bezier(.22,1,.36,1), filter 600ms ease",
                          }}
                        >
                          {/* Number */}

                          <div
                            className="
                              mb-3
                              flex
                              items-center
                              gap-2.5
                              sm:mb-5
                              sm:gap-3
                            "
                          >
                            

                            <span
                              className="
                                h-px
                                w-6
                                bg-[#C6A77A]/60
                                sm:w-8
                                md:w-12
                              "
                            />
                          </div>

                          {/* Title */}

                          <h3
                            className="
                              max-w-[780px]
                              font-[var(--font-new-york)]
                              text-[clamp(2.2rem,8vw,5rem)]
                              font-normal
                              leading-[0.92]
                              tracking-[-0.05em]
                              text-[#0B2A52]
                              sm:text-[clamp(2.8rem,7vw,5rem)]
                            "
                          >
                            {
                              slide.title
                            }
                          </h3>

                          {/* Subtitle */}

                          <p
                            className="
                              mt-3
                              max-w-[500px]
                              font-[var(--font-editorial)]
                              text-[clamp(1.2rem,5vw,2rem)]
                              leading-[1.05]
                              text-[#6285AD]
                              sm:mt-4
                            "
                          >
                            {
                              slide.subtitle
                            }
                          </p>

                          {/* Description */}

                          <p
                            className="
                              mt-4
                              max-w-[440px]
                              text-[11px]
                              leading-[1.5]
                              text-[#344054]/80
                              sm:mt-5
                              sm:text-sm
                              md:mt-6
                              md:max-w-[500px]
                              md:text-base
                              md:leading-6
                            "
                          >
                            {
                              slide.description
                            }
                          </p>

                          {/* Reality Check */}

                          <div
                            className="
                              mt-4
                              flex
                              items-center
                              gap-2
                              sm:mt-6
                            "
                          >
                            <span
                              className="
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-[#C6A77A]
                              "
                            />

                            <span
                              className="
                                text-[8px]
                                uppercase
                                tracking-[0.2em]
                                text-[#344054]/55
                                sm:text-[9px]
                              "
                            >
                              Reality Check
                            </span>
                          </div>
                        </div>
                      );
                    }
                  )}
              </div>
            </div>

            {/* =================================================
                DESKTOP IMAGE
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
                (
                  slide,
                  index
                ) => {
                  const active =
                    index ===
                    activeIndex;

                  const previous =
                    index <
                    activeIndex;

                  return (
                    <div
                      key={
                        `desktop-${slide.number}`
                      }
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                      "
                      style={{
                        opacity:
                          active
                            ? 1
                            : 0,

                        transform:
                          active
                            ? "translateY(0) scale(1)"
                            : previous
                            ? "translateY(-25px) scale(1.03)"
                            : "translateY(25px) scale(.96)",

                        filter:
                          active
                            ? "blur(0)"
                            : "blur(6px)",

                        transition:
                          reducedMotion
                            ? "none"
                            : "opacity 700ms ease, transform 900ms cubic-bezier(.22,1,.36,1), filter 700ms ease",
                      }}
                    >
                      <div
                        className="
                          relative
                          h-[min(64vh,600px)]
                          w-[min(46vw,800px)]
                        "
                      >
                        <Image
  src={slide.image}
  alt={slide.title}
  fill
  priority={index === 0}
  sizes="(min-width: 1280px) 46vw, (min-width: 768px) 48vw"
  className="
    object-contain
    object-center
  "
/>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* ===================================================
              MOBILE IMAGE

              The image is given its own lower zone.
              This prevents it from covering the text.
          ==================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[7.5vh]
              left-1/2
              z-10
              block
              h-[23vh]
              max-h-[205px]
              w-[96vw]
              -translate-x-1/2
              sm:bottom-[7vh]
              sm:h-[25vh]
              sm:max-h-[235px]
              sm:w-[88vw]
              md:hidden
            "
          >
            {slides.map(
              (
                slide,
                index
              ) => {
                const active =
                  index ===
                  activeIndex;

                const previous =
                  index <
                  activeIndex;

                return (
                  <div
                    key={
                      `mobile-${slide.number}`
                    }
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      opacity:
                        active
                          ? 1
                          : 0,

                      transform:
                        active
                          ? "translateY(0) scale(1)"
                          : previous
                          ? "translateY(-15px) scale(1.02)"
                          : "translateY(15px) scale(.96)",

                      filter:
                        active
                          ? "blur(0)"
                          : "blur(5px)",

                      transition:
                        reducedMotion
                          ? "none"
                          : "opacity 600ms ease, transform 750ms cubic-bezier(.22,1,.36,1), filter 600ms ease",
                    }}
                  >
                    <div
                      className="
                        relative
                        h-full
                        w-full
                      "
                    >
                      <Image
  src={slide.image}
  alt={slide.title}
  fill
  sizes="(max-width: 480px) 96vw, (max-width: 640px) 88vw"
  className="
    object-contain
    object-center
  "
/>
                    </div>
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
            bottom-3
            left-5
            right-5
            z-50
            sm:bottom-4
            sm:left-6
            sm:right-6
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
            {/* Progress dots */}

            <div
              className="
                flex
                items-center
              "
            >
              {slides.map(
                (
                  slide,
                  index
                ) => {
                  const active =
                    index ===
                    activeIndex;

                  const completed =
                    index <
                    activeIndex;

                  return (
                    <div
                      key={
                        `progress-${slide.number}`
                      }
                      className="
                        flex
                        items-center
                      "
                    >
                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          transition-all
                          duration-300
                          sm:h-2
                          sm:w-2
                          ${
                            active
                              ? "scale-125 bg-[#0B2A52]"
                              : completed
                              ? "bg-[#C6A77A]"
                              : "bg-[#0B2A52]/20"
                          }
                        `}
                      />

                      {index <
                        slides.length -
                          1 && (
                        <span
                          className={`
                            mx-1.5
                            h-px
                            w-3
                            transition-colors
                            duration-300
                            sm:mx-2
                            sm:w-5
                            md:mx-3
                            md:w-7
                            ${
                              completed
                                ? "bg-[#C6A77A]"
                                : "bg-[#0B2A52]/10"
                            }
                          `}
                        />
                      )}
                    </div>
                  );
                }
              )}
            </div>

            {/* Desktop */}

            <span
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[#344054]/55
                md:block
              "
            >
              Keep scrolling ↓
            </span>

            {/* Mobile */}

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.15em]
                text-[#344054]/40
                sm:text-[8px]
                md:hidden
              "
            >
              Scroll
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
            px-5
            sm:px-6
          "
          style={{
            opacity:
              isFinal
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
              w-full
              max-w-[900px]
              text-center
            "
          >
            <p
              className="
                mb-3
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-[#C6A77A]
                sm:mb-4
                sm:text-[9px]
                md:text-xs
              "
            >
              Enough of the problems.
            </p>

            <h3
              className="
                font-[var(--font-editorial)]
                text-[clamp(3rem,14vw,7.5rem)]
                font-normal
                leading-[0.88]
                tracking-[-0.055em]
                text-[#0B2A52]
                sm:text-[clamp(2.5rem,8vw,5.5rem)]
              "
            >
              That's where
              <br />

              <span className="text-[#6285AD]">
                we come in.
              </span>
            </h3>

            <div
              className="
                mx-auto
                mt-5
                h-px
                w-12
                bg-[#C6A77A]
                sm:mt-7
                sm:w-16
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}