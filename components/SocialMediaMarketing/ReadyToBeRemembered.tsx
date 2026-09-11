"use client";

import { useRef } from "react";
import {
  ArrowUpRight,
  BarChart3,
  MessageCircle,
  PenTool,
  Send,
  Sparkles,
  Target,
} from "lucide-react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const supportAreas = [
  {
    number: "01",
    label: "Strategy",
    icon: Target,
  },
  {
    number: "02",
    label: "Content",
    icon: PenTool,
  },
  {
    number: "03",
    label: "Publishing",
    icon: Send,
  },
  {
    number: "04",
    label: "Community",
    icon: MessageCircle,
  },
  {
    number: "05",
    label: "Reporting",
    icon: BarChart3,
  },
];

export default function SocialMediaClosingSections() {
  return (
    <>
      <FinalAnswerBlock />
      <FinalCTA />
    </>
  );
}

/* =========================================================
   SECTION 16 — FINAL ANSWER BLOCK
========================================================= */

function FinalAnswerBlock() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isVisible = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="social-media-final-answer"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
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
            -left-[390px]
            top-1/2
            h-[760px]
            w-[760px]
            -translate-y-1/2
            rounded-full
            border
            border-[#0B2A52]/[0.035]
          "
        />

        <div
          className="
            absolute
            -right-[390px]
            top-1/2
            h-[760px]
            w-[760px]
            -translate-y-1/2
            rounded-full
            border
            border-[#B79A72]/10
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1240px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* TOP META */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#B79A72]
              sm:text-[10px]
            "
          >
            Social Media Marketing With Sharp Rays
          </span>

          <span className="h-px flex-1 bg-[#0B2A52]/10" />

          <span
            className="
              hidden
              text-[8px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#0B2A52]/30
              sm:block
            "
          >
            Strategy Behind Every Post
          </span>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            items-center
            gap-14
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2
              className="
                max-w-[600px]
                text-[2.45rem]
                font-medium
                leading-[1.04]
                tracking-[-0.05em]
                text-[#0B2A52]
                sm:text-[3rem]
                md:text-[3.3rem]
                lg:text-[3.55rem]
              "
            >
              Need a Social Media{" "}
              <span
                className="
                  block
                  font-normal
                  text-[#B79A72]
                "
              >
                Marketing Partner?
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-[570px]
                text-[15px]
                leading-8
                text-[#0B2A52]/58
                sm:text-[16px]
              "
            >
              Sharp Rays helps businesses plan, create and manage social media
              with a clearer strategy behind every post.
            </p>

            <p
              className="
                mt-5
                max-w-[590px]
                text-[14px]
                leading-8
                text-[#0B2A52]/50
                sm:text-[15px]
              "
            >
              If you need support with social media strategy, content creation,
              publishing, community management or performance reporting, tell
              us where your brand is today and what you want social media to
              help you achieve.
            </p>

            {/* =================================================
                FIXED CTA BUTTON
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={
                isVisible
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: 0.32,
              }}
              className="mt-9"
            >
              <a
                href="/contact"
                className="
                  group
                  relative
                  inline-flex
                  min-h-[64px]
                  items-center
                  gap-5
                  overflow-hidden
                  rounded-full
                  bg-[#0B2A52]
                  py-2
                  pl-8
                  pr-2
                  shadow-[0_18px_45px_rgba(11,42,82,0.16)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_24px_55px_rgba(11,42,82,0.20)]
                "
              >
                {/* GOLD HOVER FILL */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-y-0
                    left-0
                    z-0
                    w-0
                    bg-[#B79A72]
                    transition-[width]
                    duration-500
                    ease-out
                    group-hover:w-full
                  "
                />

                {/* BUTTON TEXT — FIXED */}

                <span
                  className="
                    relative
                    z-20
                    whitespace-nowrap
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    !text-white
                  "
                >
                  Let&apos;s Talk About Your Brand
                </span>

                {/* ARROW */}

                <span
                  className="
                    relative
                    z-20
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B79A72]
                    text-white
                    transition-all
                    duration-500
                    group-hover:rotate-45
                    group-hover:bg-white
                    group-hover:text-[#0B2A52]
                  "
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — CONNECTED SUPPORT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              border-y
              border-[#0B2A52]/10
            "
          >
            {/* RIGHT HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-6
                py-8
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#B79A72]
                  "
                >
                  One Connected Direction
                </p>

                <p
                  className="
                    mt-3
                    text-[20px]
                    font-medium
                    tracking-[-0.025em]
                    text-[#0B2A52]
                    sm:text-[23px]
                  "
                >
                  The support your social presence needs.
                </p>
              </div>

              <span
                className="
                  hidden
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B79A72]/40
                  text-[#B79A72]
                  sm:flex
                "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                />
              </span>
            </div>

            {/* SUPPORT LIST */}

            <div
              className="
                border-t
                border-[#0B2A52]/10
              "
            >
              {supportAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={
                      isVisible
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.6,
                      delay: reduceMotion
                        ? 0
                        : 0.28 + index * 0.07,
                    }}
                    className="
                      group
                      flex
                      min-h-[82px]
                      items-center
                      gap-5
                      border-b
                      border-[#0B2A52]/10
                      py-4
                    "
                  >
                    <span
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#0B2A52]/12
                        bg-white
                        text-[#0B2A52]
                        transition-all
                        duration-400
                        group-hover:border-[#0B2A52]
                        group-hover:bg-[#0B2A52]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                      />
                    </span>

                    <span
                      className="
                        text-[17px]
                        font-medium
                        tracking-[-0.018em]
                        text-[#0B2A52]/65
                        transition-all
                        duration-400
                        group-hover:translate-x-1
                        group-hover:text-[#0B2A52]
                        sm:text-[18px]
                      "
                    >
                      {item.label}
                    </span>

                    <span
                      className="
                        ml-auto
                        text-[9px]
                        font-semibold
                        tracking-[0.16em]
                        text-[#B79A72]
                      "
                    >
                      {item.number}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SECTION 17 — FINAL CTA
========================================================= */

function FinalCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isVisible = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        text-[#0B2A52]
        sm:py-32
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND CIRCLES
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* LEFT HALF CIRCLES */}

        <div
          className="
            absolute
            -left-[360px]
            top-1/2
            h-[760px]
            w-[760px]
            -translate-y-1/2
            rounded-full
            border
            border-[#0B2A52]/[0.045]
          "
        />

        <div
          className="
            absolute
            -left-[290px]
            top-1/2
            h-[620px]
            w-[620px]
            -translate-y-1/2
            rounded-full
            border
            border-[#0B2A52]/[0.04]
          "
        />

        <div
          className="
            absolute
            -left-[220px]
            top-1/2
            h-[480px]
            w-[480px]
            -translate-y-1/2
            rounded-full
            border
            border-[#B79A72]/15
          "
        />

        {/* RIGHT HALF CIRCLES */}

        <div
          className="
            absolute
            -right-[360px]
            top-1/2
            h-[760px]
            w-[760px]
            -translate-y-1/2
            rounded-full
            border
            border-[#0B2A52]/[0.045]
          "
        />

        <div
          className="
            absolute
            -right-[290px]
            top-1/2
            h-[620px]
            w-[620px]
            -translate-y-1/2
            rounded-full
            border
            border-[#0B2A52]/[0.04]
          "
        />

        <div
          className="
            absolute
            -right-[220px]
            top-1/2
            h-[480px]
            w-[480px]
            -translate-y-1/2
            rounded-full
            border
            border-[#B79A72]/15
          "
        />

        {/* CENTER CIRCLE */}

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[570px]
            w-[570px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-dashed
            border-[#B79A72]/15
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[455px]
            w-[455px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white
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
          max-w-[1200px]
          px-5
          text-center
          sm:px-8
        "
      >
        {/* EYEBROW */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.7,
          }}
          className="
            mx-auto
            flex
            w-fit
            items-center
            gap-3
          "
        >
          <span className="h-px w-9 bg-[#B79A72]" />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#B79A72]
              sm:text-[10px]
            "
          >
            Your Next Move
          </span>

          <span className="h-px w-9 bg-[#B79A72]" />
        </motion.div>

        {/* =====================================================
            LARGE HEADING
        ====================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 45,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-8
            max-w-[1050px]
            text-[3rem]
            font-medium
            leading-[0.98]
            tracking-[-0.06em]
            text-[#0B2A52]
            sm:text-[4.1rem]
            md:text-[4.9rem]
            lg:text-[5.8rem]
            xl:text-[6.3rem]
          "
        >
          Ready to Be{" "}
          <span
            className="
              block
              font-serif
              font-normal
              text-[#B79A72]
            "
          >
            Remembered?
          </span>
        </motion.h2>

        {/* ACCENT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-8
            flex
            w-fit
            items-center
            gap-4
          "
        >
          <span className="h-px w-12 bg-[#B79A72]/55" />

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#B79A72]/40
              bg-white
              text-[#B79A72]
            "
          >
            <Sparkles
              size={13}
              strokeWidth={1.4}
            />
          </span>

          <span className="h-px w-12 bg-[#B79A72]/55" />
        </motion.div>

        {/* =====================================================
            COPY
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: 0.25,
          }}
          className="
            mx-auto
            mt-8
            max-w-[780px]
          "
        >
          <p
            className="
              text-[15px]
              leading-8
              text-[#0B2A52]/62
              sm:text-[16px]
            "
          >
            Build a social media presence that feels intentional,
            recognizable and connected to your business.
          </p>

          <p
            className="
              mx-auto
              mt-3
              max-w-[740px]
              text-[14px]
              leading-8
              text-[#0B2A52]/48
              sm:text-[15px]
            "
          >
            Let&apos;s create a clearer strategy for what your audience should
            see, understand, remember and do next.
          </p>
        </motion.div>

        {/* =====================================================
            PRIMARY CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: 0.36,
          }}
          className="
            mt-11
            flex
            justify-center
          "
        >
          <a
            href="/contact"
            className="
              group
              relative
              inline-flex
              min-h-[66px]
              items-center
              gap-5
              overflow-hidden
              rounded-full
              bg-[#0B2A52]
              py-2
              pl-8
              pr-2
              shadow-[0_20px_48px_rgba(11,42,82,0.18)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_26px_60px_rgba(11,42,82,0.20)]
            "
          >
            {/* GOLD HOVER */}

            <span
              aria-hidden="true"
              className="
                absolute
                inset-y-0
                left-0
                z-0
                w-0
                bg-[#B79A72]
                transition-[width]
                duration-500
                group-hover:w-full
              "
            />

            {/* TEXT */}

            <span
              className="
                relative
                z-20
                whitespace-nowrap
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                !text-white
              "
            >
              Let&apos;s Talk About Your Brand
            </span>

            {/* ARROW */}

            <span
              className="
                relative
                z-20
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#0B2A52]
                transition-all
                duration-500
                group-hover:rotate-45
              "
            >
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
              />
            </span>
          </a>
        </motion.div>

        {/* =====================================================
            SUPPORTING LINE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: 0.48,
          }}
          className="
            mx-auto
            mt-14
            flex
            max-w-[720px]
            items-center
            gap-4
          "
        >
          <span className="h-px flex-1 bg-[#0B2A52]/10" />

          <span
            className="
              shrink-0
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#0B2A52]/38
              sm:text-[9px]
            "
          >
            Strategy · Create · Connect · Grow
          </span>

          <span className="h-px flex-1 bg-[#0B2A52]/10" />
        </motion.div>
      </div>
    </section>
  );
}