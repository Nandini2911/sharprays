"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function SocialMediaMarketingHero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  /* =========================================================
     SECTION VISIBILITY
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     FALLBACK INITIAL REVEAL
  ========================================================= */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        text-[#0B2A52]

        min-h-[100svh]

        lg:min-h-screen
      "
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0

          transition-opacity
          duration-[1800ms]

          ${
            isVisible
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <img
          src="/services/socialmedia_bg.png"
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full

            object-cover

            object-[50%_center]

            sm:object-center
          "
        />
      </div>

      {/* VERY LIGHT OVERLAY */}

    

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          flex
          min-h-[100svh]
          w-full
          max-w-[1500px]

          items-center

          px-4
          pb-14
          pt-[100px]

          min-[375px]:px-5

          sm:px-6
          sm:pb-16
          sm:pt-[115px]

          md:px-8
          md:pb-20
          md:pt-[125px]

          lg:min-h-screen
          lg:px-10
          lg:pb-20
          lg:pt-[130px]

          xl:px-14
          xl:pb-24
          xl:pt-[140px]

          2xl:px-16
      "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center

            gap-8

            sm:gap-10

            md:gap-12

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-4

            xl:grid-cols-[0.88fr_1.12fr]
            xl:gap-6
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div
            className="
              relative
              z-20

              w-full
              max-w-[600px]

              lg:max-w-[570px]
            "
          >
            {/* =====================================================
                EYEBROW
            ====================================================== */}

            <div
              className={`
                flex
                max-w-full
                items-center

                gap-2.5

                transition-all
                duration-[900ms]

                sm:gap-3

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              <span
            className="
              h-px
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />
              <span
                className="
                  whitespace-nowrap

                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-[#B79A72]

                  min-[360px]:text-[8px]

                  sm:text-[9px]
                  sm:tracking-[0.24em]

                  md:text-[10px]
                  md:tracking-[0.28em]
                "
              >
                Social Media Marketing Agency
              </span>
               <span
            className="
              h-px
              w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />
            </div>

            {/* =====================================================
                HEADING
            ====================================================== */}

            <h1
              className={`
                mt-5

                max-w-[570px]

                font-[var(--font-new-york)]

                text-[2.15rem]
                font-medium

                leading-[1.02]

                tracking-[-0.04em]

                text-[#0B2A52]

                transition-all
                duration-[1100ms]

                min-[375px]:text-[2.3rem]

                sm:mt-6
                sm:text-[2.6rem]

                md:text-[2.95rem]

                lg:text-[3.1rem]

                xl:text-[3.35rem]

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              Social Media Marketing That Makes Your Brand

              <span
                className="
                  mt-1.5
                  block

                  text-[1.65rem]
                  font-normal

                  leading-[1.08]

                  tracking-[-0.03em]

                  text-[#B79A72]

                  min-[375px]:text-[1.8rem]

                  sm:mt-2
                  sm:text-[2rem]

                  md:text-[2.2rem]

                  lg:text-[2.35rem]

                  xl:text-[2.55rem]
                "
              >
                Worth Remembering.
              </span>
            </h1>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <p
              className={`
                mt-5
                max-w-[510px]

                text-[12px]
                leading-[1.7]

                text-[#0B2A52]/60

                transition-all
                delay-150
                duration-[1100ms]

                min-[375px]:text-[13px]

                sm:mt-6
                sm:text-sm
                sm:leading-7

                md:text-[15px]

                lg:max-w-[490px]

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-7 opacity-0"
                }
              `}
            >
              Sharp Rays is a social media marketing agency helping businesses
              build a clearer, more consistent and more engaging presence
              across social media.

              <span
                className="
                  mt-3
                  block

                  sm:mt-4
                "
              >
                From strategy and content creation to publishing, community
                management and performance reporting, we bring every part of
                your social presence together around one clear direction.
              </span>
            </p>

            {/* =====================================================
                CTA BUTTONS
            ====================================================== */}

            <div
              className={`
                mt-6

                flex
                flex-wrap
                items-center

                gap-3

                transition-all
                delay-300
                duration-[1100ms]

                sm:mt-7
                sm:gap-4

                lg:mt-8

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-7 opacity-0"
                }
              `}
            >
              {/* =================================================
                  PRIMARY BUTTON
              ================================================== */}

              <Link
                href="/contact"
                className="
                  group
                  relative

                  inline-flex

                  min-h-[44px]

                  items-center
                  justify-center

                  overflow-hidden

                  rounded-[16px]

                  border
                  border-[#6285AD]/30

                  bg-white/80

                  px-4
                  py-[10px]

                  text-[12px]
                  font-medium

                  tracking-[-0.01em]

                  text-[#0B2A52]

                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]

                  backdrop-blur-[8px]

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:border-[#6285AD]/40
                  hover:bg-white
                  hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

                  active:translate-y-0

                  min-[375px]:min-h-[46px]
                  min-[375px]:px-5
                  min-[375px]:py-[11px]
                  min-[375px]:text-[13px]

                  sm:min-h-[48px]
                  sm:px-6
                  sm:py-3
                  sm:text-[14px]

                  md:text-[15px]
                "
              >
                {/* STATIC SOFT INNER BORDER */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[2px]

                    rounded-[13px]

                    border
                    border-white/60
                  "
                />

                {/* SUBTLE TOP LIGHT */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute

                    inset-x-4
                    top-0

                    h-px

                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                  "
                />

                {/* TEXT */}

                <span
                  className="
                    relative
                    z-10

                    whitespace-nowrap

                    text-[#0B2A52]
                  "
                >
                  Build My Social Presence
                </span>
              </Link>

              {/* =================================================
                  SECONDARY BUTTON
              ================================================== */}

              <a
                href="#approach"
                className="
                  group
                  relative

                  inline-flex

                  min-h-[44px]

                  items-center
                  justify-center

                  overflow-hidden

                  rounded-[16px]

                  border
                  border-[#6285AD]/30

                  bg-white/80

                  px-4
                  py-[10px]

                  text-[12px]
                  font-medium

                  tracking-[-0.01em]

                  text-[#0B2A52]

                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]

                  backdrop-blur-[8px]

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:border-[#6285AD]/40
                  hover:bg-white
                  hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

                  active:translate-y-0

                  min-[375px]:min-h-[46px]
                  min-[375px]:px-5
                  min-[375px]:py-[11px]
                  min-[375px]:text-[13px]

                  sm:min-h-[48px]
                  sm:px-6
                  sm:py-3
                  sm:text-[14px]

                  md:text-[15px]
                "
              >
                {/* STATIC SOFT INNER BORDER */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[2px]

                    rounded-[13px]

                    border
                    border-white/60
                  "
                />

                {/* SUBTLE TOP LIGHT */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute

                    inset-x-4
                    top-0

                    h-px

                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                  "
                />

                {/* TEXT */}

                <span
                  className="
                    relative
                    z-10

                    whitespace-nowrap

                    text-[#0B2A52]
                  "
                >
                  Explore Our Approach
                </span>
              </a>
            </div>

            {/* =====================================================
                MICROCOPY
            ====================================================== */}

            <div
              className={`
                mt-7

                flex
                max-w-full
                items-center

                gap-3

                transition-all
                delay-500
                duration-[1100ms]

                sm:mt-8
                sm:gap-4

                lg:mt-10

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
              `}
            >
              <div
                className="
                  h-px
                  w-7
                  shrink-0

                  bg-[#0B2A52]/15

                  sm:w-9

                  md:w-12
                "
              />

              <p
                className="
                  text-[6.5px]
                  font-medium

                  tracking-[0.12em]

                  text-[#0B2A52]/40

                  min-[360px]:text-[7px]

                  sm:text-[8px]
                  sm:tracking-[0.16em]

                  md:tracking-[0.19em]
                "
              >
                STRATEGY · CONTENT · COMMUNITY · GROWTH
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}

          <div
            className={`
              relative

              mt-4

              flex

              min-h-[260px]
              w-full

              items-center
              justify-center

              transition-all
              duration-[1400ms]

              min-[375px]:min-h-[300px]

              sm:mt-6
              sm:min-h-[360px]

              md:min-h-[420px]

              lg:mt-0
              lg:min-h-[520px]
              lg:justify-end

              xl:min-h-[600px]

              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0 lg:translate-x-10"
              }
            `}
          >
            {/* =================================================
                MAIN RIGHT IMAGE
            ================================================== */}

            <div
              className={`
                relative

                w-full

                max-w-[340px]

                transition-all
                duration-[1600ms]

                min-[375px]:max-w-[390px]

                sm:max-w-[500px]

                md:max-w-[600px]

                lg:max-w-[650px]

                xl:max-w-[720px]

                ${
                  imageVisible
                    ? "scale-100 opacity-100"
                    : "scale-[0.94] opacity-0"
                }
              `}
            >
              <img
                src="/services/so.png"
                alt="Social media marketing visual"
                onLoad={() => {
                  setImageVisible(true);
                }}
                className="
                  relative
                  z-10

                  mx-auto

                  block
                  h-auto
                  w-full

                  object-contain
                  object-center

                  drop-shadow-[0_35px_65px_rgba(11,42,82,0.10)]

                  transition-transform
                  duration-[1400ms]

                  lg:ml-auto
                  lg:mr-0

                  lg:hover:scale-[1.015]
                "
              />
            </div>

            {/* =================================================
                SMALL GOLD DETAILS
            ================================================== */}

            <div
              className={`
                pointer-events-none
                absolute

                right-[15%]
                top-[12%]

                h-1.5
                w-1.5

                rounded-full

                bg-[#B79A72]

                shadow-[0_0_25px_rgba(183,154,114,0.65)]

                transition-all
                delay-700
                duration-1000

                sm:h-2
                sm:w-2

                ${
                  isVisible
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }
              `}
            />

            <div
              className={`
                pointer-events-none
                absolute

                bottom-[15%]
                left-[18%]

                h-1
                w-1

                rounded-full

                bg-[#B79A72]/70

                transition-all
                delay-1000
                duration-1000

                sm:h-1.5
                sm:w-1.5

                ${
                  isVisible
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }
              `}
            />
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM SCROLL INDICATOR
      ========================================================== */}

      <div
        className={`
          absolute

          bottom-6
          left-1/2
          z-20

          hidden
          -translate-x-1/2

          items-center

          gap-3

          transition-all
          delay-700
          duration-1000

          md:flex

          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }
        `}
      >
        

        <ArrowDown
          size={11}
          className="
            animate-bounce
            text-[#B79A72]
          "
        />
      </div>
    </section>
  );
}