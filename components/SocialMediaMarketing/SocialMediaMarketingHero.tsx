"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Play } from "lucide-react";

export default function SocialMediaMarketingHero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

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
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[720px] overflow-hidden text-[#0B2A52] sm:min-h-[760px] lg:min-h-screen"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-[1800ms] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/services/socialmedia_bg.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[720px]
          max-w-[1500px]
          items-center
          px-5
          py-24
          sm:min-h-[760px]
          sm:px-8
          md:py-28
          lg:min-h-screen
          lg:px-12
          lg:pb-16
          lg:pt-28
          xl:px-16
          xl:pb-20
          xl:pt-32
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-4
            xl:grid-cols-[0.88fr_1.12fr]
            xl:gap-6
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-20 max-w-[570px]">
            {/* EYEBROW */}

            <div
              className={`flex items-center gap-3 transition-all duration-[900ms] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <span className="h-px w-10 bg-[#B79A72]" />

              <span className="text-[9px] font-semibold tracking-[0.28em] text-[#B79A72] sm:text-[10px]">
                SOCIAL MEDIA MARKETING AGENCY
              </span>
            </div>

            {/* =====================================================
                HEADING
            ====================================================== */}

            <h1
              className={`mt-6 max-w-[540px] text-[2.2rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#0B2A52] transition-all duration-[1100ms] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Social Media Marketing That Makes Your Brand

              <br />

              <span
                className="
                  mt-2
                  block
                  whitespace-nowrap
                  text-[1.75rem]
                  font-normal
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-[#B79A72]
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
              className={`mt-6 max-w-[490px] text-[13px] leading-7 text-[#0B2A52]/58 transition-all delay-150 duration-[1100ms] sm:text-sm ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }`}
            >
              Sharp Rays is a social media marketing agency helping businesses
              build a clearer, more consistent and more engaging presence
              across social media.
              <br />
              <br />
              From strategy and content creation to publishing, community
              management and performance reporting, we bring every part of
              your social presence together around one clear direction.
            </p>

            {/* =====================================================
                CTA
            ====================================================== */}

            <div
              className={`mt-8 flex flex-col gap-3 transition-all delay-300 duration-[1100ms] sm:flex-row ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }`}
            >
              {/* PRIMARY BUTTON */}

              <button
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  border
                  border-[#0B2A52]/20
                  bg-[#0B2A52]/10
                  px-6
                  py-3.5
                  text-[11px]
                  font-medium
                  text-[#0B2A52]
                  shadow-[0_8px_30px_rgba(11,42,82,0.10)]
                  backdrop-blur-xl
                  backdrop-saturate-150
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#0B2A52]/30
                  hover:bg-[#0B2A52]/15
                  hover:shadow-[0_14px_40px_rgba(11,42,82,0.16)]
                "
              >
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10">
                  Build My Social Presence
                </span>

                <span
                  className="
                    relative
                    z-10
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0B2A52]/15
                    bg-[#0B2A52]/10
                    text-[#0B2A52]
                    backdrop-blur-md
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight size={12} />
                </span>
              </button>

              {/* SECONDARY BUTTON */}

              <button
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  border
                  border-[#0B2A52]/20
                  bg-[#0B2A52]/5
                  px-6
                  py-3.5
                  text-[11px]
                  font-medium
                  text-[#0B2A52]
                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]
                  backdrop-blur-xl
                  backdrop-saturate-150
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#0B2A52]/30
                  hover:bg-[#0B2A52]/10
                "
              >
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span
                  className="
                    relative
                    z-10
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                    shadow-[0_3px_10px_rgba(11,42,82,0.18)]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Play size={8} fill="currentColor" />
                </span>

                <span className="relative z-10">
                  Explore Our Approach
                </span>
              </button>
            </div>

            {/* =====================================================
                MICROCOPY
            ====================================================== */}

            <div
              className={`mt-10 flex items-center gap-4 transition-all delay-500 duration-[1100ms] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div className="h-px w-12 bg-[#0B2A52]/12" />

              <p className="text-[8px] font-medium tracking-[0.19em] text-[#0B2A52]/38">
                STRATEGY · CONTENT · COMMUNITY · GROWTH
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}

          <div
            className={`relative mt-12 flex min-h-[390px] w-full items-center justify-center transition-all duration-[1400ms] lg:mt-0 lg:min-h-[570px] lg:justify-end xl:min-h-[600px] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* MAIN RIGHT IMAGE */}

            <div
              className={`relative w-full max-w-[720px] transition-all duration-[1600ms] ${
                imageVisible
                  ? "scale-100 opacity-100"
                  : "scale-[0.94] opacity-0"
              }`}
            >
              <img
                src="/services/so.png"
                alt="Social media marketing visual"
                onLoad={() => setImageVisible(true)}
                className="
                  relative
                  z-10
                  mx-auto
                  h-auto
                  w-full
                  object-contain
                  object-center
                  drop-shadow-[0_35px_65px_rgba(11,42,82,0.10)]
                  transition-transform
                  duration-[1400ms]
                  hover:scale-[1.015]
                  lg:ml-auto
                  lg:mr-0
                "
              />
            </div>

            {/* SMALL GOLD DETAIL */}

            <div
              className={`pointer-events-none absolute right-[15%] top-[12%] h-2 w-2 rounded-full bg-[#B79A72] shadow-[0_0_25px_rgba(183,154,114,0.65)] transition-all delay-700 duration-1000 ${
                isVisible
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              }`}
            />

            <div
              className={`pointer-events-none absolute bottom-[15%] left-[18%] h-1.5 w-1.5 rounded-full bg-[#B79A72]/70 transition-all delay-1000 duration-1000 ${
                isVisible
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM SCROLL INDICATOR
      ========================================================== */}

      <div
        className={`absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 transition-all delay-700 duration-1000 sm:flex ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        <span className="text-[8px] font-medium tracking-[0.25em] text-[#0B2A52]/30">
          SCROLL TO EXPLORE
        </span>

        <ArrowDown size={11} className="animate-bounce text-[#B79A72]" />
      </div>
    </section>
  );
}