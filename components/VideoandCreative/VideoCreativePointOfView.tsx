"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Lightbulb,
  Monitor,
  MousePointer,
  Scissors,
  Sparkles,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   JOURNEY TYPES
========================================================= */

type JourneyItem = {
  number: string;
  word: string;
  question: string;
  icon: LucideIcon;
  accent: string;
  background: string;
};

/* =========================================================
   JOURNEY DATA
========================================================= */

const journey: JourneyItem[] = [
  {
    number: "01",
    word: "IDEA",
    question: "What is worth communicating?",
    icon: Lightbulb,
    accent: "#B18458",
    background: "#FBF6EE",
  },
  {
    number: "02",
    word: "AI",
    question: "Where can technology help us create or transform the visual?",
    icon: Sparkles,
    accent: "#6285AD",
    background: "#EEF5FA",
  },
  {
    number: "03",
    word: "EDIT",
    question: "How should the story move?",
    icon: Scissors,
    accent: "#0B2A52",
    background: "#F2F5F8",
  },
  {
    number: "04",
    word: "BRAND",
    question: "What makes the finished content recognizably yours?",
    icon: BadgeCheck,
    accent: "#B18458",
    background: "#FBF6EE",
  },
  {
    number: "05",
    word: "PLATFORM",
    question: "How will people experience it?",
    icon: Monitor,
    accent: "#6285AD",
    background: "#EEF5FA",
  },
  {
    number: "06",
    word: "ACTION",
    question: "What should happen after they watch?",
    icon: MousePointer,
    accent: "#0B2A52",
    background: "#F2F5F8",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function AiVideoPointOfView() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-point-of-view"
      aria-labelledby="ai-video-point-of-view-heading"
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
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* BLUE GLOW */}

        <div
          className="
            absolute
            -left-[240px]
            top-[10%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#6285AD]/10

            blur-[120px]
          "
        />

        {/* GOLD GLOW */}

        <div
          className="
            absolute
            -right-[220px]
            top-[42%]

            h-[520px]
            w-[520px]

            rounded-full

            bg-[#C6A77A]/10

            blur-[130px]
          "
        />

        {/* LARGE GHOST WORD */}

        <span
          style={newYorkFont}
          className="
            absolute
            left-1/2
            top-[18%]

            hidden

            -translate-x-1/2

            whitespace-nowrap

            text-[150px]
            font-light
            leading-none
            tracking-[-0.07em]

            text-[#0B2A52]/[0.018]

            lg:block
            xl:text-[195px]
          "
        >
          THINK
        </span>
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1440px]

          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            grid
            gap-9

            lg:grid-cols-[0.75fr_1.25fr]
            lg:items-end
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT LABEL
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -35,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease,
            }}
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-9 bg-[#B79A72]" />

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.28em]

                  text-[#A4774C]

                  sm:text-[10px]
                  md:text-[11px]
                "
              >
                How We Think About AI Video
              </span>
            </div>

            <p
              style={newYorkFont}
              className="
                mt-5
                max-w-[370px]

                text-[10px]
                uppercase
                leading-[1.9]
                tracking-[0.14em]

                text-[#617386]
              "
            >
              Technology can accelerate production.
              <br />
              Creative judgement gives it direction.
            </p>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 38,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.08,
              ease,
            }}
          >
            <h2
              id="ai-video-point-of-view-heading"
              style={newYorkFont}
              className="
                max-w-[900px]

                text-[2.1rem]
                font-light
                leading-[1.01]
                tracking-[-0.045em]

                text-[#0B2A52]

                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              AI Should Accelerate Creativity.{" "}
              <span
                className="
                  font-normal
                  italic

                  text-[#A97C52]
                "
              >
                Not Replace the Thinking Behind It.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            AI CAN HELP / HUMAN JUDGEMENT
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.12,
            ease,
          }}
          className="
            relative
            mt-12

            overflow-hidden

            rounded-[30px]

            border
            border-[#D8E2E9]

            bg-white

            shadow-[0_18px_55px_rgba(11,42,82,0.045)]

            lg:mt-14
          "
        >
          <div
            className="
              grid

              lg:grid-cols-[1fr_auto_1fr]
            "
          >
            {/* =================================================
                LEFT — AI CAN HELP
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden

                bg-[#F1F7FB]

                px-6
                py-8

                sm:px-8
                sm:py-9
                lg:px-10
                lg:py-10
              "
            >
              {/* DECORATIVE CIRCLE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-24

                  h-[260px]
                  w-[260px]

                  rounded-full

                  border-[42px]
                  border-[#6285AD]/[0.055]
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center

                      rounded-full

                      bg-white

                      text-[#0B2A52]

                      shadow-[0_7px_22px_rgba(11,42,82,0.05)]
                    "
                  >
                    <Sparkles size={18} strokeWidth={1.5} />
                  </span>

                  <div>
                    <p
                      style={newYorkFont}
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.21em]

                        text-[#6285AD]
                      "
                    >
                      AI Can Help
                    </p>

                    <p
                      style={newYorkFont}
                      className="
                        mt-1

                        text-[0.77rem]

                        text-[#647C91]
                      "
                    >
                      Faster creation and transformation
                    </p>
                  </div>
                </div>

                {/* ITEMS */}

                <div
                  className="
                    mt-7
                    space-y-4
                  "
                >
                  {[
                    "Generate scenes.",
                    "Create visual directions.",
                    "Speed up repetitive production work.",
                    "Transform one idea into several formats.",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: -15,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        delay: reduceMotion ? 0 : index * 0.06,
                        ease,
                      }}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <span
                        className="
                          mt-[2px]

                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          bg-white

                          text-[#6285AD]

                          shadow-[0_4px_12px_rgba(11,42,82,0.04)]
                        "
                      >
                        <Check size={9} strokeWidth={2.2} />
                      </span>

                      <p
                        style={newYorkFont}
                        className="
                          text-[0.9rem]
                          leading-[1.55]

                          text-[#385673]
                        "
                      >
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div
              className="
                mx-6
                h-px

                bg-[#DCE4EA]

                lg:mx-0
                lg:h-full
                lg:w-px
              "
            />

            {/* =================================================
                RIGHT — JUDGEMENT
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden

                bg-[#FCF8F3]

                px-6
                py-8

                sm:px-8
                sm:py-9
                lg:px-10
                lg:py-10
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-20

                  h-[260px]
                  w-[260px]

                  rounded-full

                  bg-[#EEDCC4]/40

                  blur-[45px]
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center

                      rounded-full

                      bg-white

                      text-[#A97C52]

                      shadow-[0_7px_22px_rgba(11,42,82,0.05)]
                    "
                  >
                    <Lightbulb size={18} strokeWidth={1.5} />
                  </span>

                  <div>
                    <p
                      style={newYorkFont}
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.21em]

                        text-[#A97C52]
                      "
                    >
                      Creative Judgement
                    </p>

                    <p
                      style={newYorkFont}
                      className="
                        mt-1

                        text-[0.77rem]

                        text-[#83715F]
                      "
                    >
                      The thinking behind the output
                    </p>
                  </div>
                </div>

                <p
                  style={newYorkFont}
                  className="
                    mt-8
                    max-w-[500px]

                    text-[1.35rem]
                    font-light
                    leading-[1.35]
                    tracking-[-0.025em]

                    text-[#0B2A52]

                    sm:text-[1.55rem]
                  "
                >
                  But technology cannot decide{" "}
                  <span className="italic text-[#A97C52]">
                    why the audience should care.
                  </span>
                </p>

                <p
                  style={newYorkFont}
                  className="
                    mt-5
                    max-w-[470px]

                    text-[0.94rem]
                    leading-[1.7]

                    text-[#5C7184]
                  "
                >
                  That still requires creative judgement.
                </p>

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {["Meaning", "Relevance", "Direction"].map((item) => (
                    <span
                      key={item}
                      style={newYorkFont}
                      className="
                        rounded-full

                        border
                        border-[#E2D2BE]

                        bg-white

                        px-3
                        py-1.5

                        text-[0.5rem]
                        font-medium
                        uppercase
                        tracking-[0.14em]

                        text-[#7C654E]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            APPROACH JOURNEY
        ===================================================== */}

        <div
          className="
            mt-20
            lg:mt-24
          "
        >
          {/* =================================================
              JOURNEY INTRO
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="
              mb-10

              flex
              flex-col
              justify-between
              gap-5

              sm:flex-row
              sm:items-end
            "
          >
            <div>
              <p
                style={newYorkFont}
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.24em]

                  text-[#A4774C]

                  sm:text-[10px]
                "
              >
                Our Approach Connects
              </p>

              <h3
                style={newYorkFont}
                className="
                  mt-3

                  text-[1.65rem]
                  font-light
                  leading-[1.15]
                  tracking-[-0.03em]

                  text-[#0B2A52]

                  sm:text-[1.9rem]
                  md:text-[2.15rem]
                "
              >
                From the idea to{" "}
                <span className="italic text-[#A97C52]">
                  what happens next.
                </span>
              </h3>
            </div>

            <p
              style={newYorkFont}
              className="
                max-w-[390px]

                text-[0.78rem]
                leading-[1.7]

                text-[#6A7D8D]

                sm:text-right
              "
            >
              AI is one part of the process — not the entire creative
              decision.
            </p>
          </motion.div>

          {/* =================================================
              DESKTOP JOURNEY
          ================================================= */}

          <div
            className="
              relative

              hidden

              grid-cols-6

              lg:grid
            "
          >
            {/* BASE LINE */}

            <div
              className="
                absolute
                left-[8%]
                right-[8%]
                top-[54px]

                h-px

                bg-[#D9E2E9]
              "
            />

            {/* ANIMATED LINE */}

            <motion.div
              initial={{
                scaleX: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.25,
                ease,
              }}
              className="
                absolute
                left-[8%]
                right-[8%]
                top-[54px]

                h-px

                origin-left

                bg-[linear-gradient(90deg,#B79A72,#6285AD,#0B2A52,#B79A72,#6285AD,#0B2A52)]
              "
            />

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.word}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: index % 2 === 0 ? 30 : -20,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.68,
                    delay: reduceMotion ? 0 : 0.08 + index * 0.075,
                    ease,
                  }}
                  className="
                    group
                    relative

                    px-2

                    text-center
                  "
                >
                  {/* CIRCLE */}

                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -7,
                            scale: 1.03,
                          }
                    }
                    style={{
                      backgroundColor: item.background,
                    }}
                    className="
                      relative
                      z-10

                      mx-auto

                      flex
                      h-[108px]
                      w-[108px]
                      items-center
                      justify-center

                      rounded-full

                      border-[5px]
                      border-white

                      shadow-[0_12px_34px_rgba(11,42,82,0.09)]
                    "
                  >
                    <span
                      style={{
                        color: item.accent,
                      }}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center

                        rounded-full

                        bg-white

                        shadow-[0_6px_18px_rgba(11,42,82,0.06)]
                      "
                    >
                      <Icon size={18} strokeWidth={1.45} />
                    </span>

                    <span
                      style={{
                        ...newYorkFont,
                        color: item.accent,
                      }}
                      className="
                        absolute
                        -top-1
                        right-0

                        text-[9px]
                        font-medium
                        tracking-[0.15em]
                      "
                    >
                      {item.number}
                    </span>
                  </motion.div>

                  {/* WORD */}

                  <h4
                    style={{
                      ...newYorkFont,
                      color: item.accent,
                    }}
                    className="
                      mt-6

                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    {item.word}
                  </h4>

                  {/* QUESTION */}

                  <p
                    style={newYorkFont}
                    className="
                      mx-auto
                      mt-3
                      max-w-[185px]

                      text-[0.77rem]
                      leading-[1.6]

                      text-[#4F6578]
                    "
                  >
                    {item.question}
                  </p>

                  {/* ARROW */}

                  {index < journey.length - 1 && (
                    <ArrowRight
                      size={14}
                      strokeWidth={1.4}
                      className="
                        absolute
                        -right-1
                        top-[48px]
                        z-20

                        text-[#B79A72]
                      "
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* =================================================
              MOBILE / TABLET
          ================================================= */}

          <div className="space-y-3 lg:hidden">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.word}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: index % 2 === 0 ? -25 : 25,
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
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : index * 0.055,
                    ease,
                  }}
                  style={{
                    backgroundColor: item.background,
                  }}
                  className="
                    relative

                    grid
                    grid-cols-[54px_1fr]
                    items-center
                    gap-4

                    overflow-hidden

                    rounded-[20px]

                    border
                    border-[#DCE4EA]

                    px-4
                    py-4

                    sm:grid-cols-[58px_145px_1fr]
                    sm:px-5
                  "
                >
                  <span
                    style={{
                      color: item.accent,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-full

                      bg-white

                      shadow-[0_6px_18px_rgba(11,42,82,0.055)]
                    "
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </span>

                  <div>
                    <span
                      style={{
                        ...newYorkFont,
                        color: item.accent,
                      }}
                      className="
                        text-[8px]
                        tracking-[0.16em]
                      "
                    >
                      {item.number}
                    </span>

                    <h4
                      style={{
                        ...newYorkFont,
                        color: item.accent,
                      }}
                      className="
                        mt-1

                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                      "
                    >
                      {item.word}
                    </h4>
                  </div>

                  <p
                    style={newYorkFont}
                    className="
                      col-span-2

                      text-[0.8rem]
                      leading-[1.6]

                      text-[#4F6578]

                      sm:col-span-1
                    "
                  >
                    {item.question}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            THE SHIFT
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 42,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease,
          }}
          className="
            relative

            mt-20

            overflow-hidden

            rounded-[34px]

            bg-[#0B2A52]

            shadow-[0_28px_80px_rgba(11,42,82,0.17)]

            lg:mt-24
          "
        >
          {/* DECORATION */}

          <div
            className="
              pointer-events-none
              absolute
              -left-28
              -top-32

              h-[300px]
              w-[300px]

              rounded-full

              border-[48px]
              border-white/[0.035]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-36
              right-[12%]

              h-[300px]
              w-[300px]

              rounded-full

              bg-[#C6A77A]/10
            "
          />

          <div
            className="
              relative
              z-10

              px-6
              py-10

              sm:px-9
              sm:py-12

              lg:px-12
              lg:py-14

              xl:px-14
            "
          >
            {/* SHIFT LABEL */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-9 bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]

                  text-[#C6A77A]

                  sm:text-[10px]
                "
              >
                The Shift
              </span>
            </div>

            {/* =================================================
                OLD / NEW
            ================================================= */}

            <div
              className="
                mt-9

                grid
                gap-5

                lg:grid-cols-[0.78fr_auto_1.22fr]
                lg:items-stretch
              "
            >
              {/* =================================================
                  STOP
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
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.12,
                  ease,
                }}
                className="
                  rounded-[25px]

                  border
                  border-white/10

                  bg-white/[0.045]

                  px-6
                  py-7

                  sm:px-7
                  sm:py-8
                "
              >
                <span
                  style={newYorkFont}
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.2em]

                    text-white/40

                    sm:text-[9px]
                  "
                >
                  Stop Asking
                </span>

                <p
                  style={newYorkFont}
                  className="
                    mt-5

                    text-[1.35rem]
                    font-light
                    leading-[1.35]
                    tracking-[-0.025em]

                    text-white/65

                    sm:text-[1.55rem]
                  "
                >
                  “What can AI generate?”
                </p>
              </motion.div>

              {/* =================================================
                  ARROW
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                "
              >
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          x: [0, 5, 0],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full

                    bg-[#C6A77A]

                    text-white

                    shadow-[0_10px_30px_rgba(198,167,122,0.25)]

                    lg:h-14
                    lg:w-14
                  "
                >
                  <ArrowRight size={18} strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* =================================================
                  START
              ================================================= */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 30,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : 0.22,
                  ease,
                }}
                className="
                  relative

                  overflow-hidden

                  rounded-[25px]

                  border
                  border-[#C6A77A]/30

                  bg-white/[0.08]

                  px-6
                  py-7

                  sm:px-7
                  sm:py-8
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-20

                    h-44
                    w-44

                    rounded-full

                    bg-[#C6A77A]/10

                    blur-2xl
                  "
                />

                <span
                  style={newYorkFont}
                  className="
                    relative
                    z-10

                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.2em]

                    text-[#C6A77A]

                    sm:text-[9px]
                  "
                >
                  Start Asking
                </span>

                <h3
                  style={newYorkFont}
                  className="
                    relative
                    z-10

                    mt-5
                    max-w-[680px]

                    text-[1.5rem]
                    font-light
                    leading-[1.25]
                    tracking-[-0.03em]

                    text-white

                    sm:text-[1.75rem]
                    md:text-[1.95rem]
                    xl:text-[2.1rem]
                  "
                >
                  “What can AI help us{" "}
                  <span
                    className="
                      font-normal
                      italic

                      text-[#C6A77A]
                    "
                  >
                    communicate better?
                  </span>
                  ”
                </h3>
              </motion.div>
            </div>

            {/* =================================================
                PRINCIPLE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: reduceMotion ? 1 : 0.94,
              }}
              whileInView={{
                opacity: 1,
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="
                mt-8

                flex
                flex-wrap
                items-center
                justify-between
                gap-4

                border-t
                border-white/10

                pt-6
              "
            >
              <p
                style={newYorkFont}
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.17em]

                  text-white/45
                "
              >
                Sharp Rays AI Video Principle
              </p>

              <div
                style={newYorkFont}
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2

                  text-[10px]
                  uppercase
                  tracking-[0.17em]

                  text-white/65
                "
              >
                <span>Idea</span>

                <span className="text-[#C6A77A]">·</span>

                <span>Technology</span>

                <span className="text-[#C6A77A]">·</span>

                <span>Judgement</span>

                <span className="text-[#C6A77A]">·</span>

                <span>Impact</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}