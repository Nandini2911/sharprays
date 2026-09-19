"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  Eye,
  Heart,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const NAVY = "#0B2A52";
const GOLD = "#C6A77A";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type JourneyStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  micro: string;
};

/* =========================================================
   DATA
========================================================= */

const steps: JourneyStep[] = [
  {
    number: "01",
    title: "Attention",
    description:
      "We create content that makes people stop scrolling.",
    icon: Eye,
    micro: "Get noticed",
  },
  {
    number: "02",
    title: "Interest",
    description:
      "We spark curiosity and keep your audience engaged.",
    icon: Heart,
    micro: "Create relevance",
  },
  {
    number: "03",
    title: "Trust",
    description:
      "We build credibility through value, consistency and real connection.",
    icon: ShieldCheck,
    micro: "Build confidence",
  },
  {
    number: "04",
    title: "Action",
    description:
      "We guide your audience to take the right step at the right time.",
    icon: MousePointer2,
    micro: "Move forward",
  },
  {
    number: "05",
    title: "Growth",
    description:
      "We turn actions into measurable growth for your business.",
    icon: TrendingUp,
    micro: "Create impact",
  },
];

/* =========================================================
   MOBILE JOURNEY STEP
========================================================= */

function MobileJourneyStep({
  step,
  index,
  reduceMotion,
}: {
  step: JourneyStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const isGrowth = index === steps.length - 1;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : -18,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.58,
        delay: reduceMotion ? 0 : index * 0.07,
        ease,
      }}
      className="
        relative
        grid
        grid-cols-[54px_1fr]
        gap-4
        pb-8
        last:pb-0
        sm:grid-cols-[62px_1fr]
        sm:gap-5
      "
    >
      {/* ===============================================
          LEFT TRACK
      =============================================== */}

      <div className="relative flex justify-center">
        {/* vertical line */}

        {index !== steps.length - 1 && (
          <span
            className="
              absolute
              left-1/2
              top-[48px]
              h-[calc(100%-28px)]
              w-px
              -translate-x-1/2
              bg-white
            "
          />
        )}

        {/* node */}

        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.06,
                  rotate: 5,
                }
          }
          className={`
            relative
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border-[5px]
            border-white
            shadow-[0_0_0_1px_#D5E0E7,0_8px_20px_rgba(11,42,82,0.06)]

            ${
              isGrowth
                ? "bg-[#0B2A52] text-white"
                : "bg-[#EEF4F8] text-[#0B2A52]"
            }
          `}
        >
          <Icon
            size={16}
            strokeWidth={1.7}
          />
        </motion.div>
      </div>

      {/* ===============================================
          CONTENT
      =============================================== */}

      <div
        className={`
          relative
          min-w-0
          border-b
          pb-7

          ${
            isGrowth
              ? "border-[#C6A77A]/40"
              : "border-[#E0E8ED]"
          }
        `}
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-1
          "
        >
          <span
            className="
              text-[0.42rem]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#B08A62]
            "
          >
            {step.number}
          </span>

          <span className="h-px w-5 bg-[#D4DEE5]" />

          <span
            className="
              text-[0.4rem]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#8E9DAA]
            "
          >
            {step.micro}
          </span>
        </div>

        <h3
          className={`
            mt-2
            font-[var(--font-new-york)]
            text-[1.4rem]
            font-semibold
            leading-[1.08]
            tracking-[-0.03em]

            ${
              isGrowth
                ? "text-[#0B2A52]"
                : "text-[#0B2A52]"
            }
          `}
        >
          {step.title}
        </h3>

        <p
          className="
            mt-2.5
            max-w-[470px]
            text-[0.8rem]
            leading-[1.65]
            text-[#66758A]
          "
        >
          {step.description}
        </p>

        {isGrowth && (
          <div
            className="
              mt-4
              flex
              items-center
              gap-2
            "
          >
            <span className="h-[2px] w-7 bg-[#C6A77A]" />

            <span
              className="
                text-[0.42rem]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#A17B55]
              "
            >
              The outcome
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DifferenceSection() {
  const reduceMotion = Boolean(useReducedMotion());

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  return (
    <section
      id="difference"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {/* blue glow */}

       
        {/* left glow */}

        <div
          className="
            absolute
            -left-[260px]
            top-[42%]
            h-[440px]
            w-[440px]
            rounded-full
            bg-[#F3F7FA]
            blur-[120px]
          "
        />

        {/* gold glow */}

        <div
          className="
            absolute
            -right-[230px]
            bottom-[-100px]
            h-[470px]
            w-[480px]
            rounded-full
            bg-[#FBF5EC]
            blur-[125px]
          "
        />
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
          max-w-[1440px]
          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            TOP EDITORIAL HEADER
        ===================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-[1220px]
            gap-10
            lg:grid-cols-[0.88fr_1.12fr]
            lg:items-end
            lg:gap-16
          "
        >
          {/* ===============================================
              LEFT
          =============================================== */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <motion.div
              variants={fadeUp}
              className="
                flex
                items-center
                gap-4
              "
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
                  text-[0.55rem]
                
                  uppercase
                  tracking-[0.3em]
                  text-[#B79A72]
                  sm:text-[0.61rem]
                "
              >
                The Difference
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
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="
                mt-5
                max-w-[650px]
                font-[var(--font-new-york)]
                text-[2.1rem]
                font-medium
                leading-[1.02]
                tracking-[-0.05em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Pretty Marketing{" "}
              <span className="text-[#B79A72]">
                Isn&apos;t
              </span>{" "}
              Enough.
            </motion.h2>
          </motion.div>

          {/* ===============================================
              RIGHT
          =============================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 28,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.75,
              ease,
            }}
            className="
              relative
              max-w-[600px]
              lg:justify-self-end
            "
          >
            <div
              className="
                absolute
                -left-6
                top-0
                hidden
                h-full
                w-px
                bg-[linear-gradient(180deg,#C6A77A,transparent)]
                lg:block
              "
            />

            <p
              className="
                font-[var(--font-new-york)]
                text-[1.15rem]
                leading-[1.55]
                tracking-[-0.02em]
                text-[#344054]
                sm:text-[1.28rem]
              "
            >
              Beautiful content gets{" "}
              <span className="font-semibold text-[#0B2A52]">
                attention.
              </span>
            </p>

            <p
              className="
                mt-2
                font-[var(--font-new-york)]
                text-[1.15rem]
                leading-[1.55]
                tracking-[-0.02em]
                text-[#344054]
                sm:text-[1.28rem]
              "
            >
              Smart strategy turns that attention into{" "}
              <span className="font-semibold text-[#0B2A52]">
                action.
              </span>
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
              "
            >
              

              
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

       
        {/* =====================================================
            DESKTOP JOURNEY
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-14
            hidden
            max-w-[1220px]
            lg:block
          "
        >
          {/* journey title */}

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
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="
              mb-12
              flex
              items-center
              justify-between
              gap-5
            "
          >
           
       

           
          </motion.div>

          {/* ===============================================
              TRACK
          =============================================== */}

          <div
            className="
              relative
              pb-12
              pt-4
            "
          >
            {/* base line */}

            <div
              className="
                absolute
                left-[8%]
                right-[8%]
                top-[55px]
                h-px
                bg-[#D7E2E8]
              "
            />

            {/* animated line */}

            <motion.div
              initial={{
                scaleX: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 1.3,
                ease,
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                absolute
                left-[8%]
                right-[8%]
                top-[55px]
                h-[2px]
                bg-[linear-gradient(90deg,#0B2A52_0%,#6E8BA3_55%,#C6A77A_100%)]
              "
            />

            <div
              className="
                relative
                grid
                grid-cols-5
              "
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isGrowth = index === 4;

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: reduceMotion
                        ? 0
                        : 0.12 + index * 0.09,
                      ease,
                    }}
                    className="
                      group
                      relative
                      px-4
                      text-center
                      xl:px-6
                    "
                  >
                    {/* NODE */}

                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -4,
                              scale: 1.05,
                            }
                      }
                      className={`
                        relative
                        z-10
                        mx-auto
                        flex
                        h-[78px]
                        w-[78px]
                        items-center
                        justify-center
                        rounded-full
                        border-[8px]
                        border-white
                        shadow-[0_0_0_1px_#D5E0E7,0_12px_30px_rgba(11,42,82,0.07)]

                        ${
                          isGrowth
                            ? "bg-[#0B2A52] text-white"
                            : "bg-[#EEF4F8] text-[#0B2A52]"
                        }
                      `}
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.65}
                      />

                      {/* growth ring */}

                      {isGrowth && (
                        <motion.span
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  scale: [1, 1.12, 1],
                                  opacity: [0.4, 0, 0.4],
                                }
                          }
                          transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            inset-[-10px]
                            rounded-full
                            border
                            border-[#C6A77A]
                          "
                        />
                      )}
                    </motion.div>

                    {/* number */}

                    <span
                      className="
                        mt-7
                        block
                        text-[0.4rem]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#B08A62]
                      "
                    >
                      {step.number}
                    </span>

                    {/* title */}

                    <h3
                      className="
                        mt-2
                        font-[var(--font-new-york)]
                        text-[1.42rem]
                        font-semibold
                        leading-[1]
                        tracking-[-0.03em]
                        text-[#0B2A52]
                        xl:text-[1.55rem]
                      "
                    >
                      {step.title}
                    </h3>

                    {/* micro */}

                    <span
                      className="
                        mt-3
                        block
                        text-[0.39rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#8C9CA8]
                      "
                    >
                      {step.micro}
                    </span>

                    {/* description */}

                    <p
                      className="
                        mx-auto
                        mt-4
                        max-w-[190px]
                        text-[0.75rem]
                        leading-[1.6]
                        text-[#66758A]
                      "
                    >
                      {step.description}
                    </p>

                    {/* hover detail */}

                    <span
                      className="
                        mx-auto
                        mt-5
                        block
                        h-[2px]
                        w-0
                        bg-[#C6A77A]
                        transition-all
                        duration-500
                        group-hover:w-9
                      "
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE + TABLET JOURNEY
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-[720px]
            lg:hidden
          "
        >
          <div
            className="
              mb-8
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                text-[0.42rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#8293A0]
              "
            >
              The Growth Journey
            </span>

            <span className="h-px flex-1 bg-[#DDE6EC]" />

            <span
              className="
                text-[0.42rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#A17B55]
              "
            >
              01—05
            </span>
          </div>

          <div>
            {steps.map((step, index) => (
              <MobileJourneyStep
                key={step.number}
                step={step}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            FINAL PROMISE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.72,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[1050px]
            sm:mt-16
            lg:mt-10
          "
        >
          <div
            className="
              relative
              overflow-hidden
              border-y
              border-[#D9E3E9]
              py-8
              sm:py-9
            "
          >
            {/* background glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[180px]
                w-[520px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#EEF5FA]
                blur-[65px]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                justify-center
                gap-5
                text-center
                md:flex-row
                md:text-left
              "
            >
              {/* icon */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: [0, 7, 0],
                        y: [0, -3, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F4EEE5]
                  text-[#A97C52]
                "
              >
                <Sparkles
                  size={16}
                  strokeWidth={1.7}
                />
              </motion.div>

              {/* main statement */}

              <div>
                <p
                  className="
                    font-[var(--font-new-york)]
                    text-[1.05rem]
                    font-semibold
                    leading-[1.45]
                    tracking-[-0.015em]
                    text-[#0B2A52]
                    sm:text-[1.18rem]
                  "
                >
                  It&apos;s not just our process.{" "}
                  <span className="text-[#C6A77A]">
                    It&apos;s our promise.
                  </span>
                </p>

                <p
                  className="
                    mt-1.5
                    text-[0.78rem]
                    leading-[1.6]
                    text-[#66758A]
                  "
                >
                  Strategy. Creativity. Data.{" "}
                  <span className="font-semibold text-[#0B2A52]">
                    That&apos;s how growth happens.
                  </span>
                </p>
              </div>

              {/* desktop arrow */}

              <div
                className="
                  hidden
                  flex-1
                  items-center
                  gap-3
                  md:flex
                "
              >
                <span className="h-px flex-1 bg-[#D8E3E9]" />

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                  "
                >
                  <ArrowRight
                    size={11}
                    strokeWidth={1.8}
                  />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}