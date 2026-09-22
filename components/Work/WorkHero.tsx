"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   YOUR RIGHT-SIDE IMAGE
========================================================= */

const RIGHT_HERO_IMAGE = "/work/workhero.png";

/* =========================================================
   WORK HERO
========================================================= */

export default function WorkHero() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="work-hero"
      className="
        relative
        isolate
        overflow-hidden
        bg-white

        pt-24
        pb-16

        sm:pt-28
        sm:pb-20

        lg:pt-[128px]
        lg:pb-12

        xl:pt-[132px]
        xl:pb-14
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {/* WHITE BASE */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFDFE_54%,#FFFFFF_100%)]
          "
        />

        {/* SOFT LEFT NAVY LIGHT */}

        <div
          className="
            absolute
            -left-[280px]
            top-[12%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#0B2A52]/[0.028]

            blur-[120px]
          "
        />

        {/* VERY SOFT GOLD LIGHT */}

        <div
          className="
            absolute
            left-[25%]
            bottom-[-260px]

            h-[480px]
            w-[650px]

            rounded-full

            bg-[#B79A72]/[0.045]

            blur-[130px]
          "
        />

        {/* TOP LEFT DECORATIVE CURVES */}

        <svg
          viewBox="0 0 500 300"
          fill="none"
          aria-hidden="true"
          className="
            absolute
            -left-[135px]
            -top-[70px]

            hidden
            h-[320px]
            w-[550px]

            opacity-65

            lg:block
          "
        >
          <path
            d="M0 220C100 205 150 150 195 80C240 13 295 -9 430 -18"
            stroke="#D7E4ED"
            strokeWidth="1"
          />

          <path
            d="M0 265C110 240 178 190 230 118C280 48 340 22 470 15"
            stroke="#E6D8C3"
            strokeWidth="1"
          />

          <circle
            cx="175"
            cy="126"
            r="4"
            fill="#B79A72"
          />
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1500px]

          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            TRUE 50 / 50 LAYOUT
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12

            lg:grid-cols-2
            lg:items-start
            lg:gap-10

            xl:gap-14
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="
              relative
              z-20

              w-full
              max-w-[650px]
            "
          >
            {/* =================================================
                EYEBROW
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  text-[0.58rem]
                  font-semibold
                  uppercase
                  tracking-[0.3em]

                  text-[#A07850]
                "
              >
                Selected Work
              </span>

              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : {
                        scaleX: 0,
                      }
                }
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                  ease,
                }}
                style={{
                  transformOrigin: "left",
                }}
                className="
                  h-px
                  w-16

                  bg-[linear-gradient(90deg,#B79A72,transparent)]
                "
              />
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              className="
                mt-6
                max-w-[640px]

          
                text-[2.3rem]
         
                leading-[1.01]
                tracking-[-0.045em]

                text-[#0B2A52]

                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Work Built Around
              <br />

              What Needed to{" "}
              <span
                className="
                  font-normal
                  italic

                  text-[#B18458]
                "
              >
                Change.
              </span>
            </h1>

            {/* =================================================
                INTRO
            ================================================= */}

            <p
              className="
                mt-6
                max-w-[590px]

                text-[0.94rem]
                leading-[1.7]

                text-[#526A80]

                sm:text-[0.99rem]
              "
            >
              Explore how Sharp Rays approaches growth across search, social
              media, paid advertising, content, websites and AI-powered
              creative.
            </p>

            {/* =================================================
                CONTEXT
            ================================================= */}

            <div
              className="
                mt-6
                max-w-[550px]

                space-y-[3px]

                text-[0.86rem]
                leading-[1.52]

                text-[#617588]

                sm:text-[0.91rem]
              "
            >
              <p>Every project starts differently.</p>

              <p>
                Some businesses need to be easier to find.
              </p>

              <p>
                Some need a clearer story.
              </p>

              <p>
                Some need better conversion.
              </p>

              <p>
                Some need a stronger digital experience.
              </p>

              <p
                className="
                  pt-1.5
                  font-medium
                  text-[#0B2A52]
                "
              >
                The work changes because the problem changes.
              </p>
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div
              className="
                mt-7

                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >
              <motion.a
                href="#portfolio"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group

                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-4

                  rounded-[10px]

                  border
                  border-[#0B2A52]

                  bg-[linear-gradient(110deg,#0B2A52_0%,#143E69_100%)]

                  px-7

                  text-[0.8rem]
                  font-semibold

                  text-white

                  shadow-[0_11px_26px_rgba(11,42,82,0.16)]

                  transition-all
                  duration-300

                  hover:shadow-[0_16px_34px_rgba(11,42,82,0.21)]
                "
              >
                Explore Our Work

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center

                  rounded-[10px]

                  border
                  border-[#B79A72]

                  bg-white

                  px-8

                  text-[0.8rem]
                  font-semibold

                  text-[#0B2A52]

                  shadow-[0_5px_18px_rgba(11,42,82,0.035)]

                  transition-all
                  duration-300

                  hover:bg-[#FBF7F1]
                "
              >
                Start a Project
              </motion.a>
            </div>

            {/* =================================================
                SUPPORTING LINE
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 7,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.18,
                ease,
              }}
              className="
                mt-7

                flex
                flex-wrap
                items-center
                gap-x-2
                gap-y-1

                text-[0.47rem]
                font-semibold
                uppercase
                tracking-[0.24em]

                text-[#7991A6]
              "
            >
              <span>Strategy</span>

              <span className="text-[#B79A72]">
                ·
              </span>

              <span>Creative</span>

              <span className="text-[#B79A72]">
                ·
              </span>

              <span>Technology</span>

              <span className="text-[#B79A72]">
                ·
              </span>

              <span>Growth</span>
            </motion.div>

            {/* =================================================
                BOTTOM NOTE
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -12,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.23,
                ease,
              }}
              className="
                mt-8

                flex
                items-start
                gap-4
              "
            >
              <span
                className="
                  mt-[6px]

                  h-px
                  w-10
                  shrink-0

                  bg-[#B79A72]
                "
              />

              <p
                className="
                  text-[0.43rem]
                  font-semibold
                  uppercase
                  leading-[1.75]
                  tracking-[0.22em]

                  text-[#8499AB]
                "
              >
                Real Challenges. Measurable Progress.
                <br />
                A Brighter Tomorrow.
              </p>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE — IMAGE ONLY
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 32,
                    scale: 0.985,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              duration: 0.78,
              delay: 0.05,
              ease,
            }}
            className="
              relative

              flex
              w-full

              items-start
              justify-center

              lg:pt-8
              lg:justify-end

              xl:pt-5
            "
          >
            {/* =================================================
                IMAGE WRAPPER

                Main improvement:
                - no giant aspect box
                - viewport-limited height
                - full object-contain
                - moved UP
            ================================================= */}

            <div
              className="
                relative

                h-[380px]
                w-full
                max-w-[760px]

                sm:h-[460px]
                md:h-[520px]

                lg:h-[clamp(470px,60vh,560px)]

                xl:h-[clamp(500px,62vh,590px)]
                xl:max-w-[780px]
              "
            >
              <Image
                src={RIGHT_HERO_IMAGE}
                alt="Sharp Rays selected work"
                fill
                priority
                sizes="
                  (max-width: 1024px) 100vw,
                  50vw
                "
                className="
                  object-contain
                  object-center
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}