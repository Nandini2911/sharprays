"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  MousePointerClick,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

/* =========================================================
   FINAL PERFORMANCE MARKETING SECTIONS
========================================================= */

export default function PerformanceMarketingFinalSections() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      {/* =====================================================
          SECTION 14 — FINAL ANSWER BLOCK
      ===================================================== */}

      <section
        id="performance-marketing-partner"
        aria-labelledby="performance-partner-heading"
        className="
          relative
          isolate
          overflow-hidden
          bg-white
          py-20
          sm:py-24
          lg:py-28
          xl:py-32
        "
      >
        {/* ===================================================
            BACKGROUND
        =================================================== */}

        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(135deg,#FFFFFF_0%,#FBFDFE_34%,#F1F7FC_72%,#FFFFFF_100%)]
            "
          />

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    backgroundPosition: [
                      "0% 40%",
                      "100% 54%",
                      "68% 100%",
                      "0% 40%",
                    ],
                  }
            }
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `
                radial-gradient(
                  ellipse at 20% 45%,
                  rgba(210,232,248,0.42) 0%,
                  transparent 64%
                ),
                radial-gradient(
                  ellipse at 82% 32%,
                  rgba(198,225,244,0.32) 0%,
                  transparent 62%
                )
              `,
              backgroundSize: "160% 160%",
            }}
            className="absolute inset-0"
          />
        </div>

        {/* ===================================================
            CONTAINER
        =================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            sm:px-8
            lg:px-10
            xl:px-14
          "
        >
          {/* =================================================
              ANSWER PANEL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 32,
              scale: reduceMotion ? 1 : 0.99,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              relative
              mx-auto
              max-w-[1180px]
              overflow-hidden
              rounded-[2rem]
              border
              border-[#B8CDDC]
              bg-white/82
              shadow-[0_28px_85px_rgba(11,42,82,0.07)]
              backdrop-blur-xl
            "
          >
            {/* TOP ACCENT */}

            <div
              className="
                h-[4px]
                w-full
                bg-gradient-to-r
                from-[#0B2A52]
                via-[#3F87BC]
                to-[#8CC4E8]
              "
            />

            <div
              className="
                px-6
                py-10
                sm:px-8
                sm:py-12
                lg:px-12
                lg:py-14
              "
            >
              {/* EYEBROW */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.7,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  ease,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >
                <span className="h-px w-9 bg-[#6D9EC1]" />

                <span
                  className="
                    text-[0.64rem]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#4B789B]
                    sm:text-[0.7rem]
                  "
                >
                  Performance Marketing With Sharp Rays
                </span>

                <span className="h-px w-9 bg-[#6D9EC1]" />
              </motion.div>

              {/* HEADING */}

              <motion.h2
                id="performance-partner-heading"
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 26,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.55,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.05,
                  ease,
                }}
                className="
                  mx-auto
                  mt-6
                  max-w-[900px]
                  text-center
                  text-[2.3rem]
                  font-medium
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B2A52]

                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Looking for a Performance Marketing{" "}
                <span
                  className="
                    font-serif
                    font-normal
                    italic
                    text-[#4D82AE]
                  "
                >
                  Partner?
                </span>
              </motion.h2>

              {/* COPY */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.55,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.12,
                  ease,
                }}
                className="
                  mx-auto
                  mt-7
                  max-w-[760px]
                  space-y-4
                  text-center
                  text-[0.98rem]
                  leading-[1.75]
                  text-[#506981]
                  sm:text-[1rem]
                "
              >
                <p>
                  Sharp Rays helps businesses plan, launch and optimize paid
                  advertising around measurable objectives.
                </p>

                <p>
                  From Google Ads and paid social to creative, conversion
                  tracking and ongoing optimization, we build campaigns around
                  what happens after the impression and after the click.
                </p>
              </motion.div>

              {/* =================================================
                  PROCESS SIGNAL
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.55,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.72,
                  delay: reduceMotion ? 0 : 0.18,
                  ease,
                }}
                className="
                  mx-auto
                  mt-10
                  grid
                  max-w-[820px]
                  gap-3

                  sm:grid-cols-3
                "
              >
                <AnswerSignal
                  number="01"
                  label="PLAN"
                  text="Connect media decisions to the business objective."
                  icon={Target}
                />

                <AnswerSignal
                  number="02"
                  label="LAUNCH"
                  text="Put campaigns into market with clear measurement."
                  icon={MousePointerClick}
                />

                <AnswerSignal
                  number="03"
                  label="OPTIMIZE"
                  text="Use performance data to improve what happens next."
                  icon={TrendingUp}
                />
              </motion.div>

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.24,
                  ease,
                }}
                className="
                  mt-10
                  flex
                  justify-center
                "
              >
                <motion.a
                  href="/contact"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -3,
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-[#0B2A52]
                    via-[#0E4D84]
                    to-[#176EA8]
                    px-6
                    py-3.5
                    text-[0.72rem]
                    font-semibold
                    text-white
                    shadow-[0_14px_35px_rgba(11,42,82,0.18)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_18px_42px_rgba(11,42,82,0.24)]
                  "
                >
                  Talk to a Performance Marketer

                  <ArrowRight
                    size={15}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 15 — FINAL CTA
      ===================================================== */}

      <section
        id="performance-final-cta"
        aria-labelledby="performance-final-cta-heading"
        className="
          relative
          isolate
          overflow-hidden
          bg-white
          py-20
          sm:py-24
          lg:py-28
          xl:py-32
        "
      >
        {/* ===================================================
            CTA BACKGROUND
        =================================================== */}

        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(145deg,#FFFFFF_0%,#F9FCFE_32%,#EAF4FB_68%,#F8FCFE_100%)]
            "
          />

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    backgroundPosition: [
                      "0% 30%",
                      "100% 50%",
                      "55% 100%",
                      "0% 30%",
                    ],
                  }
            }
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `
                radial-gradient(
                  ellipse at 50% 50%,
                  rgba(123,181,220,0.18) 0%,
                  rgba(206,230,247,0.12) 38%,
                  transparent 68%
                ),
                radial-gradient(
                  ellipse at 18% 70%,
                  rgba(218,237,249,0.32) 0%,
                  transparent 62%
                ),
                radial-gradient(
                  ellipse at 88% 24%,
                  rgba(185,220,243,0.28) 0%,
                  transparent 60%
                )
              `,
              backgroundSize: "160% 160%",
            }}
            className="absolute inset-0"
          />
        </div>

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1240px]
            px-5
            sm:px-8
            lg:px-10
            xl:px-14
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 34,
              scale: reduceMotion ? 1 : 0.99,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              relative
              mx-auto
              max-w-[1120px]
              overflow-hidden
              rounded-[2.2rem]
              border
              border-[#AFC9DB]
              bg-white/74
              px-6
              py-12
              text-center
              shadow-[0_30px_95px_rgba(11,42,82,0.085)]
              backdrop-blur-xl

              sm:px-8
              sm:py-14

              lg:px-14
              lg:py-16
            "
          >
            {/* =================================================
                SOFT INTERNAL LIGHT
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[360px]
                w-[720px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#DDEFFA]/45
                blur-[90px]
              "
            />

            <div className="relative z-10">
              {/* EYEBROW */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  ease,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >
                <span className="h-px w-9 bg-[#6B9DC1]" />

                <span
                  className="
                    text-[0.65rem]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#487698]
                  "
                >
                  Your Next Move
                </span>

                <span className="h-px w-9 bg-[#6B9DC1]" />
              </motion.div>

              {/* HEADING */}

              <motion.h2
                id="performance-final-cta-heading"
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.05,
                  ease,
                }}
                className="
                  mx-auto
                  mt-6
                  max-w-[900px]
                  text-[2.3rem]
                  font-medium
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B2A52]

                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Ready to Turn Reach Into{" "}
                <span
                  className="
                    font-serif
                    font-normal
                    italic
                    text-[#4D82AE]
                  "
                >
                  Growth?
                </span>
              </motion.h2>

              {/* COPY */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.55,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.72,
                  delay: reduceMotion ? 0 : 0.12,
                  ease,
                }}
                className="
                  mx-auto
                  mt-7
                  max-w-[740px]
                  space-y-4
                  text-[0.98rem]
                  leading-[1.75]
                  text-[#506981]
                  sm:text-[1rem]
                "
              >
                <p className="font-medium text-[#234B6C]">
                  Getting seen is only the first step.
                </p>

                <p>
                  The opportunity is to turn that attention into clicks,
                  conversions and meaningful business outcomes.
                </p>

                <p>
                  Let’s build a performance marketing strategy around the
                  audiences, campaigns and opportunities that matter most to
                  your growth.
                </p>
              </motion.div>

              {/* =================================================
                  GROWTH PATH
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.18,
                  ease,
                }}
                className="
                  mx-auto
                  mt-9
                  flex
                  max-w-[720px]
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-3
                  gap-y-3
                "
              >
                <GrowthStep
                  icon={Target}
                  label="Reach"
                />

                <ArrowRight
                  size={12}
                  strokeWidth={1.8}
                  className="text-[#8BA5B8]"
                />

                <GrowthStep
                  icon={MousePointerClick}
                  label="Convert"
                />

                <ArrowRight
                  size={12}
                  strokeWidth={1.8}
                  className="text-[#8BA5B8]"
                />

                <GrowthStep
                  icon={BarChart3}
                  label="Optimize"
                />

                <ArrowRight
                  size={12}
                  strokeWidth={1.8}
                  className="text-[#8BA5B8]"
                />

                <GrowthStep
                  icon={TrendingUp}
                  label="Scale"
                />
              </motion.div>

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.22,
                  ease,
                }}
                className="
                  mt-10
                  flex
                  justify-center
                "
              >
                <motion.a
                  href="/contact"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -3,
                          scale: 1.01,
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-[#0B2A52]
                    via-[#0E4F86]
                    to-[#1B75AD]
                    px-7
                    py-4
                    text-[0.73rem]
                    font-semibold
                    text-white
                    shadow-[0_16px_38px_rgba(11,42,82,0.2)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_21px_48px_rgba(11,42,82,0.26)]
                  "
                >
                  Start Growing With Paid Media

                  <ArrowRight
                    size={15}
                    strokeWidth={1.9}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </motion.a>
              </motion.div>

              {/* SUPPORTING LINE */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.3,
                }}
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >
                <span
                  className="
                    hidden
                    h-px
                    w-9
                    bg-[#B4C9D8]
                    sm:block
                  "
                />

                <span
                  className="
                    text-[0.56rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#66849B]
                  "
                >
                  Reach · Convert · Optimize · Scale
                </span>

                <span
                  className="
                    hidden
                    h-px
                    w-9
                    bg-[#B4C9D8]
                    sm:block
                  "
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   SECTION 14 SIGNAL
========================================================= */

function AnswerSignal({
  number,
  label,
  text,
  icon: Icon,
}: {
  number: string;
  label: string;
  text: string;
  icon: typeof Target;
}) {
  return (
    <div
      className="
        group
        rounded-[1rem]
        border
        border-[#C2D7E6]
        bg-gradient-to-br
        from-white
        to-[#EFF7FC]
        px-5
        py-5
        text-left
        shadow-[0_9px_25px_rgba(11,42,82,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#8EB9D7]
        hover:shadow-[0_15px_35px_rgba(11,42,82,0.08)]
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-[0.7rem]
            bg-[#E4F1FA]
            text-[#1763A0]
          "
        >
          <Icon
            size={16}
            strokeWidth={1.7}
          />
        </span>

        <span
          className="
            font-serif
            text-[0.7rem]
            italic
            text-[#7893A9]
          "
        >
          {number}
        </span>
      </div>

      <p
        className="
          mt-5
          text-[0.55rem]
          font-bold
          uppercase
          tracking-[0.18em]
          text-[#315F82]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2
          text-[0.72rem]
          leading-[1.55]
          text-[#5B7288]
        "
      >
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   CTA GROWTH STEP
========================================================= */

function GrowthStep({
  icon: Icon,
  label,
}: {
  icon: typeof Target;
  label: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-[#C7DAE7]
        bg-white/78
        px-4
        py-2.5
        shadow-[0_6px_18px_rgba(11,42,82,0.04)]
        backdrop-blur-md
      "
    >
      <Icon
        size={13}
        strokeWidth={1.7}
        className="text-[#1763A0]"
      />

      <span
        className="
          text-[0.52rem]
          font-semibold
          uppercase
          tracking-[0.16em]
          text-[#476A85]
        "
      >
        {label}
      </span>
    </div>
  );
}