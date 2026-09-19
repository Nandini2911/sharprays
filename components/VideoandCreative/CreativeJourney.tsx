"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  BadgeCheck,
  CirclePlay,
  Film,
  MessageCircle,
  MousePointer,
  Pause,
  Sparkles,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type JourneyStep = {
  number: string;
  time: string;
  stage: string;
  title: string;
  description: string;
  icon: LucideIcon;
  side: "left" | "right";
  tone: "blue" | "gold";
};

/* =========================================================
   DATA
========================================================= */

const journey: JourneyStep[] = [
  {
    number: "01",
    time: "00:00",
    stage: "HOOK",
    title: "Earn the First Second",
    description:
      "Start with an idea, visual or message strong enough to interrupt the scroll.",
    icon: CirclePlay,
    side: "left",
    tone: "gold",
  },
  {
    number: "02",
    time: "00:01",
    stage: "HOLD",
    title: "Keep the Story Moving",
    description:
      "Use pacing, cuts, sound and visual progression to maintain attention.",
    icon: Pause,
    side: "right",
    tone: "blue",
  },
  {
    number: "03",
    time: "00:03",
    stage: "CLARIFY",
    title: "Make the Message Easy to Get",
    description:
      "Remove unnecessary complexity and help viewers understand the point quickly.",
    icon: MessageCircle,
    side: "left",
    tone: "gold",
  },
  {
    number: "04",
    time: "00:06",
    stage: "BUILD",
    title: "Create Interest",
    description:
      "Use visual storytelling, demonstrations, motion or generated scenes to make the idea more engaging.",
    icon: Sparkles,
    side: "right",
    tone: "blue",
  },
  {
    number: "05",
    time: "00:09",
    stage: "BRAND",
    title: "Make It Recognizable",
    description:
      "Bring in consistent typography, visual language, tone and brand cues.",
    icon: BadgeCheck,
    side: "left",
    tone: "gold",
  },
  {
    number: "06",
    time: "00:12+",
    stage: "MOVE",
    title: "Create the Next Step",
    description:
      "End with the right action — watch more, visit, enquire, click, buy or remember.",
    icon: MousePointer,
    side: "right",
    tone: "blue",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function VideoJourneySection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="video-journey"
      aria-labelledby="video-journey-heading"
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

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* BLUE GLOW */}

        <div
          className="
            absolute
            -left-[250px]
            top-[14%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#EAF3F9]
            blur-[125px]
          "
        />

        {/* GOLD GLOW */}

        <div
          className="
            absolute
            -right-[250px]
            top-[48%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#FAF2E8]
            blur-[130px]
          "
        />

        {/* GHOST WORD */}

        <span
          style={newYorkFont}
          className="
            absolute
            right-[-25px]
            top-[11%]
            hidden
            text-[170px]
            font-light
            leading-none
            tracking-[-0.08em]
            text-[#0B2A52]/[0.018]
            lg:block
            xl:text-[220px]
          "
        >
          FRAME
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
            HEADER
        ===================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.36fr_0.64fr]
            lg:items-end
            lg:gap-16
          "
        >
          {/* LEFT */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -34,
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
            <div className="flex items-center gap-3">
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
                "
              >
                How Effective Video Works
              </span>
            </div>

            <p
              style={newYorkFont}
              className="
                mt-5
                max-w-[350px]
                text-[10px]
                uppercase
                leading-[1.9]
                tracking-[0.15em]
                text-[#65788B]
              "
            >
              Every frame has a job.
              <br />
              Every second should earn the next.
            </p>
          </motion.div>

          {/* HEADING */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 35,
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
              id="video-journey-heading"
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
              From First Frame to{" "}
              <span className="font-normal italic text-[#A97C52]">
                Final Action.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            INTRO / EDITING VS EXPERIENCE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 26,
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
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.12,
            ease,
          }}
          className="
            relative
            mt-12
            overflow-hidden
            rounded-[28px]
            border
            border-[#D6E1E9]
            bg-white
            shadow-[0_18px_50px_rgba(11,42,82,0.045)]
          "
        >
          <div
            className="
              grid
              lg:grid-cols-[1fr_auto_1fr]
            "
          >
            {/* LEFT */}

            <div
              className="
                relative
                overflow-hidden
                bg-[#F2F7FB]
                px-6
                py-8
                sm:px-8
                lg:px-10
                lg:py-9
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-[220px]
                  w-[220px]
                  rounded-full
                  border-[38px]
                  border-[#6285AD]/[0.05]
                "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#0B2A52]
                      shadow-[0_7px_20px_rgba(11,42,82,0.05)]
                    "
                  >
                    <Film size={16} strokeWidth={1.5} />
                  </span>

                  <span
                    style={newYorkFont}
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-[#6285AD]
                    "
                  >
                    Behind the Timeline
                  </span>
                </div>

                <p
                  style={newYorkFont}
                  className="
                    mt-6
                    max-w-[480px]
                    text-[1.25rem]
                    font-light
                    leading-[1.4]
                    tracking-[-0.02em]
                    text-[#0B2A52]
                    sm:text-[1.4rem]
                  "
                >
                  The editing timeline may contain{" "}
                  <span className="italic text-[#A97C52]">
                    hundreds of decisions.
                  </span>
                </p>
              </div>
            </div>

            {/* DIVIDER */}

            <div
              className="
                mx-6
                h-px
                bg-[#DCE5EB]

                lg:mx-0
                lg:h-full
                lg:w-px
              "
            />

            {/* RIGHT */}

            <div
              className="
                relative
                overflow-hidden
                bg-[#FCF8F3]
                px-6
                py-8
                sm:px-8
                lg:px-10
                lg:py-9
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-20
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-[#F0E0CD]/40
                  blur-[40px]
                "
              />

              <div className="relative z-10">
                <span
                  style={newYorkFont}
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#A97C52]
                  "
                >
                  What the Audience Feels
                </span>

                <p
                  style={newYorkFont}
                  className="
                    mt-6
                    max-w-[500px]
                    text-[1.25rem]
                    font-light
                    leading-[1.4]
                    tracking-[-0.02em]
                    text-[#0B2A52]
                    sm:text-[1.4rem]
                  "
                >
                  The audience should experience{" "}
                  <span className="italic text-[#A97C52]">
                    something simple.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            VIDEO JOURNEY INTRO
        ===================================================== */}

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
            mt-20
            flex
            flex-col
            justify-between
            gap-5
            sm:flex-row
            sm:items-end
            lg:mt-24
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
              The Video Journey
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
              Six stages.{" "}
              <span className="italic text-[#A97C52]">
                One clear experience.
              </span>
            </h3>
          </div>

          <div
            style={newYorkFont}
            className="
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#6B7D8C]
            "
          >
            <span>First Frame</span>

            <span className="h-px w-8 bg-[#B79A72]" />

            <span>Next Action</span>
          </div>
        </motion.div>

        {/* =====================================================
            FLOWING JOURNEY
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-16
            max-w-[1160px]
            lg:mt-20
          "
        >
          {/* =================================================
              DESKTOP PATH
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-[420px]
              -translate-x-1/2
              lg:block
            "
          >
            <svg
              viewBox="0 0 420 1570"
              preserveAspectRatio="none"
              className="h-full w-full"
              fill="none"
            >
              {/* BASE */}

              <path
                d="
                  M210 20
                  C350 90 350 215 210 280
                  C70 350 70 460 210 530
                  C350 600 350 720 210 790
                  C70 860 70 980 210 1050
                  C350 1120 350 1240 210 1310
                  C110 1370 115 1480 210 1550
                "
                stroke="#0B2A52"
                strokeOpacity="0.08"
                strokeWidth="2"
                strokeDasharray="8 11"
              />

              {/* ANIMATED GOLD PATH */}

              <motion.path
                d="
                  M210 20
                  C350 90 350 215 210 280
                  C70 350 70 460 210 530
                  C350 600 350 720 210 790
                  C70 860 70 980 210 1050
                  C350 1120 350 1240 210 1310
                  C110 1370 115 1480 210 1550
                "
                stroke="#B79A72"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                  opacity: reduceMotion ? 0.7 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 0.7,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 2,
                  ease,
                }}
              />
            </svg>
          </div>

          {/* =================================================
              MOBILE LINE
          ================================================= */}

          <motion.div
            initial={{
              scaleY: reduceMotion ? 1 : 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.4,
              ease,
            }}
            className="
              absolute
              bottom-0
              left-[24px]
              top-0
              w-px
              origin-top
              bg-[linear-gradient(to_bottom,#B79A72,#8AA7BD,#B79A72)]
              lg:hidden
            "
          />

          {/* =================================================
              STAGES
          ================================================= */}

          <div
            className="
              relative
              space-y-16
              sm:space-y-20
              lg:space-y-24
            "
          >
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.side === "left";
              const isGold = item.tone === "gold";

              return (
                <motion.div
                  key={item.stage}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: isLeft ? -40 : 40,
                          y: 18,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.78,
                    delay: reduceMotion ? 0 : index * 0.045,
                    ease,
                  }}
                  className="
                    relative
                    grid
                    grid-cols-[50px_1fr]
                    gap-5

                    lg:grid-cols-[1fr_150px_1fr]
                    lg:items-center
                    lg:gap-10
                  "
                >
                  {/* =================================================
                      LEFT CONTENT DESKTOP
                  ================================================= */}

                  <div
                    className={`
                      col-start-2

                      lg:col-start-1
                      lg:row-start-1

                      ${
                        isLeft
                          ? "lg:block"
                          : "lg:invisible"
                      }
                    `}
                  >
                    {isLeft && (
                      <JourneyContent
                        item={item}
                        alignment="right"
                      />
                    )}
                  </div>

                  {/* =================================================
                      CENTER PLAYHEAD
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      z-20

                      lg:relative
                      lg:left-auto
                      lg:top-auto
                      lg:col-start-2
                      lg:row-start-1
                      lg:flex
                      lg:justify-center
                    "
                  >
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              scale: 1.08,
                              rotate: isLeft ? 4 : -4,
                            }
                      }
                      className={`
                        relative

                        flex
                        h-[50px]
                        w-[50px]
                        items-center
                        justify-center

                        rounded-full

                        border-[5px]
                        border-white

                        text-white

                        shadow-[0_12px_32px_rgba(11,42,82,0.14)]

                        sm:h-[56px]
                        sm:w-[56px]

                        lg:h-[76px]
                        lg:w-[76px]

                        ${
                          isGold
                            ? "bg-[#B18458]"
                            : "bg-[#0B2A52]"
                        }
                      `}
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.45}
                        className="
                          lg:h-[21px]
                          lg:w-[21px]
                        "
                      />

                      {/* ORBIT */}

                      <motion.span
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                rotate: 360,
                              }
                        }
                        transition={{
                          duration: 15 + index,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          -inset-[9px]

                          rounded-full

                          border
                          border-dashed
                          border-[#B79A72]/35
                        "
                      />

                      {/* NUMBER */}

                      <span
                        style={newYorkFont}
                        className="
                          absolute
                          -right-3
                          -top-3

                          flex
                          h-6
                          w-6
                          items-center
                          justify-center

                          rounded-full

                          bg-white

                          text-[7px]
                          font-medium
                          tracking-[0.08em]

                          text-[#0B2A52]

                          shadow-[0_5px_14px_rgba(11,42,82,0.08)]

                          lg:h-7
                          lg:w-7
                          lg:text-[8px]
                        "
                      >
                        {item.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* =================================================
                      RIGHT CONTENT DESKTOP
                  ================================================= */}

                  <div
                    className={`
                      col-start-2

                      lg:col-start-3
                      lg:row-start-1

                      ${
                        !isLeft
                          ? "lg:block"
                          : "hidden lg:invisible"
                      }
                    `}
                  >
                    {!isLeft && (
                      <JourneyContent
                        item={item}
                        alignment="left"
                      />
                    )}
                  </div>

                  {/* =================================================
                      MOBILE LEFT ITEM CONTENT
                  ================================================= */}

                  {isLeft && (
                    <div className="col-start-2 lg:hidden">
                      <JourneyContent
                        item={item}
                        alignment="left"
                      />
                    </div>
                  )}

                  {/* =================================================
                      GIANT WORD
                  ================================================= */}

                  <span
                    style={newYorkFont}
                    className={`
                      pointer-events-none
                      absolute
                      top-1/2

                      hidden

                      -translate-y-1/2

                      whitespace-nowrap

                      text-[92px]
                      font-light
                      leading-none
                      tracking-[-0.07em]

                      text-[#0B2A52]/[0.022]

                      xl:block

                      ${
                        isLeft
                          ? "right-[62%]"
                          : "left-[62%]"
                      }
                    `}
                  >
                    {item.stage}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* =================================================
              END ARROW
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -10,
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
              duration: reduceMotion ? 0 : 0.6,
              ease,
            }}
            className="
              mx-auto
              mt-14

              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              bg-[#B79A72]

              text-white

              shadow-[0_12px_30px_rgba(183,154,114,0.22)]
            "
          >
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [-2, 3, -2],
                    }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={17} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            REAL GOAL
        ===================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-[1100px]

            overflow-hidden

            rounded-[30px]

            border
            border-[#C9DBE8]

            bg-[linear-gradient(110deg,#F2F8FC_0%,#FFFFFF_48%,#FCF8F2_100%)]

            px-6
            py-10

            text-center

            shadow-[0_18px_55px_rgba(11,42,82,0.05)]

            sm:px-9
            sm:py-12

            lg:mt-18
            lg:px-12
            lg:py-14
          "
        >
          {/* LEFT FRAME DETAIL */}

          <div
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20

              h-[230px]
              w-[230px]

              rounded-full

              border-[35px]
              border-[#DDECF7]/60
            "
          />

          {/* RIGHT GOLD DETAIL */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -right-20

              h-[250px]
              w-[250px]

              rounded-full

              bg-[#F3E6D5]/40

              blur-[40px]
            "
          />

          <div className="relative z-10">
            {/* LABEL */}

            <div
              className="
                mx-auto

                flex
                w-fit
                items-center
                gap-4
              "
            >
              <span className="h-px w-12 bg-[#B79A72]/70 sm:w-20" />

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]

                  text-[#A4774C]

                  sm:text-[10px]
                "
              >
                The Real Goal
              </span>

              <span className="h-px w-12 bg-[#B79A72]/70 sm:w-20" />
            </div>

            {/* SMALL STATEMENT */}

            <p
              style={newYorkFont}
              className="
                mt-8

                text-[1.35rem]
                font-light
                leading-[1.3]
                tracking-[-0.02em]

                text-[#647687]

                sm:text-[1.55rem]
                md:text-[1.7rem]
              "
            >
              Not More Frames.
            </p>

            {/* MAIN STATEMENT */}

            <h3
              style={newYorkFont}
              className="
                mx-auto
                mt-2
                max-w-[900px]

                text-[2rem]
                font-light
                leading-[1.08]
                tracking-[-0.045em]

                text-[#0B2A52]

                sm:text-[2.45rem]
                md:text-[2.8rem]
                lg:text-[3.05rem]
              "
            >
              More Meaning in{" "}
              <span
                className="
                  relative
                  inline-block
                  font-normal
                  italic
                  text-[#A97C52]
                "
              >
                Every Frame.

                <motion.span
                  initial={{
                    scaleX: reduceMotion ? 1 : 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.9,
                    delay: reduceMotion ? 0 : 0.25,
                    ease,
                  }}
                  className="
                    absolute
                    -bottom-2
                    left-0

                    h-px
                    w-full

                    origin-left

                    bg-[#B79A72]/65
                  "
                />
              </span>
            </h3>

            {/* MINI TIMELINE */}

            <div
              className="
                mx-auto
                mt-9

                flex
                max-w-[760px]
                flex-wrap
                items-center
                justify-center
                gap-x-3
                gap-y-2
              "
            >
              {journey.map((item, index) => (
                <div
                  key={item.stage}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    style={newYorkFont}
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.17em]

                      text-[#536B80]
                    "
                  >
                    {item.stage}
                  </span>

                  {index !== journey.length - 1 && (
                    <span
                      className="
                        h-1
                        w-1

                        rounded-full

                        bg-[#B79A72]
                      "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   JOURNEY CONTENT
========================================================= */

function JourneyContent({
  item,
  alignment,
}: {
  item: JourneyStep;
  alignment: "left" | "right";
}) {
  const isRight = alignment === "right";

  return (
    <div
      className={`
        relative
        max-w-[440px]

        ${isRight ? "lg:ml-auto" : ""}
      `}
    >
      {/* ===============================================
          META
      =============================================== */}

      <div
        className={`
          flex
          items-center
          gap-3

          ${isRight ? "lg:justify-end" : ""}
        `}
      >
        {isRight && (
          <span
            className="
              hidden
              h-px
              w-9
              bg-[#B79A72]
              lg:block
            "
          />
        )}

        <span
          style={newYorkFont}
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#8A9AA8]
          "
        >
          {item.time}
        </span>

        <span className="h-[3px] w-[3px] rounded-full bg-[#B79A72]" />

        <span
          style={newYorkFont}
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.21em]
            text-[#A4774C]
          "
        >
          {item.stage}
        </span>

        {!isRight && (
          <span className="h-px w-9 bg-[#B79A72]" />
        )}
      </div>

      {/* ===============================================
          TITLE
      =============================================== */}

      <h3
        style={newYorkFont}
        className={`
          mt-4

          text-[1.45rem]
          font-light
          leading-[1.15]
          tracking-[-0.035em]

          text-[#0B2A52]

          sm:text-[1.65rem]
          md:text-[1.8rem]

          ${isRight ? "lg:text-right" : ""}
        `}
      >
        {item.title}
      </h3>

      {/* ===============================================
          DESCRIPTION
      =============================================== */}

      <p
        style={newYorkFont}
        className={`
          mt-4

          text-[0.82rem]
          leading-[1.7]

          text-[#516A80]

          sm:text-[0.88rem]

          ${
            isRight
              ? "lg:ml-auto lg:text-right"
              : ""
          }
        `}
      >
        {item.description}
      </p>
    </div>
  );
}