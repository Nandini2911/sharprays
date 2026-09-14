"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  BarChart3,
  Lightbulb,
  Megaphone,
  MousePointerClick,
  Rocket,
  Search,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type StageTone =
  | "sky"
  | "lavender"
  | "mint"
  | "warm"
  | "blue"
  | "rose";

type FrameworkStage = {
  number: string;
  title: string;
  headline: string;
  description: string;
  focus: string[];
  icon: LucideIcon;
  tone: StageTone;
  position: string;
};

/* =========================================================
   STAGES
========================================================= */

const stages: FrameworkStage[] = [
  {
    number: "01",
    title: "DEFINE",
    headline: "START WITH THE OUTCOME",
    description:
      "Clarify what the campaign needs to achieve and how success should be measured.",
    focus: ["Objectives", "Conversions", "Value"],
    icon: Target,
    tone: "sky",
    position:
      "lg:absolute lg:left-1/2 lg:top-[1.5%] lg:w-[318px] lg:-translate-x-1/2",
  },
  {
    number: "02",
    title: "FIND",
    headline: "REACH THE RIGHT PEOPLE",
    description:
      "Build campaign and audience strategies around where relevant demand exists.",
    focus: ["Intent", "Audiences", "Platforms"],
    icon: UsersRound,
    tone: "lavender",
    position:
      "lg:absolute lg:right-[0.5%] lg:top-[23%] lg:w-[318px]",
  },
  {
    number: "03",
    title: "ATTRACT",
    headline: "CREATE THE REASON TO CLICK",
    description:
      "Develop messaging and creative that connects audience needs with your offer.",
    focus: ["Creative", "Copy", "Offer"],
    icon: Megaphone,
    tone: "mint",
    position:
      "lg:absolute lg:right-[0.5%] lg:top-[57%] lg:w-[318px]",
  },
  {
    number: "04",
    title: "CONVERT",
    headline: "IMPROVE THE EXPERIENCE AFTER THE CLICK",
    description:
      "Connect campaign promises with landing pages and conversion journeys.",
    focus: ["Landing Pages", "UX", "CTA"],
    icon: MousePointerClick,
    tone: "warm",
    position:
      "lg:absolute lg:bottom-[1%] lg:left-1/2 lg:w-[318px] lg:-translate-x-1/2",
  },
  {
    number: "05",
    title: "LEARN",
    headline: "TURN PERFORMANCE INTO INSIGHT",
    description:
      "Use campaign and conversion data to understand what deserves to change.",
    focus: ["Tracking", "Testing", "Analysis"],
    icon: BarChart3,
    tone: "blue",
    position:
      "lg:absolute lg:left-[0.5%] lg:top-[57%] lg:w-[318px]",
  },
  {
    number: "06",
    title: "SCALE",
    headline: "INVEST WHERE PERFORMANCE SUPPORTS IT",
    description:
      "Expand campaigns, audiences, creative or budgets where the data supports additional growth.",
    focus: ["Efficiency", "Budget", "Growth"],
    icon: Rocket,
    tone: "rose",
    position:
      "lg:absolute lg:left-[0.5%] lg:top-[23%] lg:w-[318px]",
  },
];

/* =========================================================
   BOTTOM OUTCOMES
========================================================= */

const outcomes = [
  {
    label: "RIGHT AUDIENCES",
    icon: Target,
  },
  {
    label: "STRONGER CAMPAIGNS",
    icon: BarChart3,
  },
  {
    label: "CLEARER INSIGHTS",
    icon: Lightbulb,
  },
  {
    label: "MEANINGFUL GROWTH",
    icon: TrendingUp,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PerformanceFrameworkSection() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="performance-framework"
      aria-labelledby="performance-framework-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#FCFDFE]
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(135deg,#FFFFFF_0%,#FCFDFE_38%,#F5F9FD_70%,#FFFFFF_100%)]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[43%]
            h-[760px]
            w-[760px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#DFEEFA]/42
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -left-[330px]
            top-[40px]
            h-[560px]
            w-[560px]
            rounded-full
            border
            border-[#6FA7D4]/20
          "
        />

        <div
          className="
            absolute
            -left-[275px]
            top-[95px]
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-[#0B2A52]/[0.055]
          "
        />

        <div
          className="
            absolute
            -bottom-[270px]
            -right-[290px]
            h-[570px]
            w-[570px]
            rounded-full
            border-[58px]
            border-[#DCEBFA]/55
          "
        />
      </div>

      {/* =====================================================
          INTRO
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
          lg:px-10
          xl:px-14
        "
      >
        <div className="mx-auto max-w-[960px] text-center">
          <motion.p
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
              text-[0.66rem]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#1763A0]
              sm:text-[0.7rem]
            "
          >
            The Sharp Rays Approach
          </motion.p>

          <motion.h2
            id="performance-framework-heading"
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
              amount: 0.55,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.82,
              delay: reduceMotion ? 0 : 0.06,
              ease,
            }}
            className="
              mt-6
              font-serif
              text-[2.3rem]
              font-medium
              leading-[1.03]
              tracking-[-0.05em]
              text-[#071F45]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Find. Convert. Learn.{" "}
            <span
              className="
                font-normal
                text-[#3788E9]
              "
            >
              Scale.
            </span>
          </motion.h2>

          <motion.p
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
              amount: 0.6,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.72,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-[680px]
              text-[0.98rem]
              leading-[1.7]
              text-[#405D7D]
              sm:text-[1rem]
            "
          >
            Our performance marketing approach connects six stages.
          </motion.p>

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
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.25,
              ease,
            }}
            className="
              mx-auto
              mt-7
              block
              h-[2px]
              w-12
              origin-center
              bg-[#0B2A52]
            "
          />
        </div>

        {/* =====================================================
            DESKTOP FRAMEWORK CANVAS
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-12
            max-w-[1240px]

            lg:h-[1110px]
          "
        >
          {/* =================================================
              DESKTOP SVG NETWORK
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              hidden
              lg:block
            "
          >
            <svg
              viewBox="0 0 1240 1110"
              fill="none"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="framework-arrow"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6.5"
                  refY="4"
                  orient="auto"
                >
                  <path
                    d="M0 0L8 4L0 8"
                    fill="#0D5C9A"
                  />
                </marker>

                <linearGradient
                  id="connectorBlue"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#75A8D3"
                    stopOpacity="0.2"
                  />

                  <stop
                    offset="100%"
                    stopColor="#0D5C9A"
                    stopOpacity="0.7"
                  />
                </linearGradient>

                <linearGradient
                  id="connectorWarm"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#E3BF94"
                    stopOpacity="0.25"
                  />

                  <stop
                    offset="100%"
                    stopColor="#B67D49"
                    stopOpacity="0.65"
                  />
                </linearGradient>
              </defs>

              {/* =============================================
                  CENTRAL OUTER CIRCLES
              ============================================= */}

              <circle
                cx="620"
                cy="560"
                r="215"
                stroke="#D4E3F0"
                strokeWidth="1.5"
              />

              <circle
                cx="620"
                cy="560"
                r="185"
                stroke="#FFFFFF"
                strokeWidth="2"
              />

              <circle
                cx="620"
                cy="560"
                r="155"
                stroke="#75A8D3"
                strokeWidth="1.2"
                strokeOpacity="0.55"
              />

              {/* =============================================
                  RADIAL CONNECTORS
              ============================================= */}

              {[
                {
                  x1: 620,
                  y1: 345,
                  x2: 620,
                  y2: 248,
                },
                {
                  x1: 805,
                  y1: 450,
                  x2: 920,
                  y2: 376,
                },
                {
                  x1: 805,
                  y1: 670,
                  x2: 920,
                  y2: 735,
                },
                {
                  x1: 620,
                  y1: 775,
                  x2: 620,
                  y2: 868,
                },
                {
                  x1: 435,
                  y1: 670,
                  x2: 320,
                  y2: 735,
                },
                {
                  x1: 435,
                  y1: 450,
                  x2: 320,
                  y2: 376,
                },
              ].map((line, index) => (
                <motion.line
                  key={index}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke={
                    index === 3 || index === 5
                      ? "url(#connectorWarm)"
                      : "url(#connectorBlue)"
                  }
                  strokeWidth="1.4"
                  strokeDasharray="5 6"
                  initial={{
                    pathLength: reduceMotion ? 1 : 0,
                    opacity: reduceMotion ? 1 : 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.9,
                    delay:
                      reduceMotion
                        ? 0
                        : 0.2 + index * 0.06,
                    ease,
                  }}
                />
              ))}

              {/* =============================================
                  FLOW ARROWS
              ============================================= */}

              <motion.path
                d="M 670 342 C 735 350, 785 384, 835 430"
                stroke="#0D5C9A"
                strokeWidth="1.8"
                strokeLinecap="round"
                markerEnd="url(#framework-arrow)"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                  opacity: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.5,
                  ease,
                }}
              />

              <motion.path
                d="M 835 485 C 860 540, 860 585, 842 630"
                stroke="#0D5C9A"
                strokeWidth="1.8"
                strokeLinecap="round"
                markerEnd="url(#framework-arrow)"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                  opacity: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.6,
                  ease,
                }}
              />

              <motion.path
                d="M 810 705 C 770 755, 725 780, 665 790"
                stroke="#0D5C9A"
                strokeWidth="1.8"
                strokeLinecap="round"
                markerEnd="url(#framework-arrow)"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                  opacity: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.7,
                  ease,
                }}
              />

              <motion.path
                d="M 575 790 C 510 780, 470 752, 430 707"
                stroke="#0D5C9A"
                strokeWidth="1.8"
                strokeLinecap="round"
                markerEnd="url(#framework-arrow)"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                  opacity: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.8,
                  ease,
                }}
              />

              <motion.path
                d="M 402 632 C 382 577, 382 535, 400 485"
                stroke="#0D5C9A"
                strokeWidth="1.8"
                strokeLinecap="round"
                markerEnd="url(#framework-arrow)"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                  opacity: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.9,
                  ease,
                }}
              />

              <motion.path
                d="M 423 430 C 468 382, 515 352, 572 342"
                stroke="#0D5C9A"
                strokeWidth="1.8"
                strokeLinecap="round"
                markerEnd="url(#framework-arrow)"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                  opacity: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 1,
                  ease,
                }}
              />

              {/* =============================================
                  SIX NODES
              ============================================= */}

              {[
                {
                  cx: 620,
                  cy: 345,
                  fill: "#43A0E8",
                  stroke: "#A8D1F1",
                },
                {
                  cx: 805,
                  cy: 450,
                  fill: "#8A73E8",
                  stroke: "#CBC1F8",
                },
                {
                  cx: 805,
                  cy: 670,
                  fill: "#32B693",
                  stroke: "#B0E7D9",
                },
                {
                  cx: 620,
                  cy: 775,
                  fill: "#E9A03F",
                  stroke: "#F0CF9F",
                },
                {
                  cx: 435,
                  cy: 670,
                  fill: "#4B9FE6",
                  stroke: "#B7D9F5",
                },
                {
                  cx: 435,
                  cy: 450,
                  fill: "#EF6B75",
                  stroke: "#F7BBC0",
                },
              ].map((node, index) => (
                <g key={index}>
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="17"
                    fill="white"
                    stroke={node.stroke}
                    strokeWidth="1.2"
                  />

                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="7"
                    fill={node.fill}
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            r: [7, 9, 7],
                          }
                    }
                    transition={{
                      duration: 2.6 + index * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* =================================================
              CENTER CORE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.18,
              ease,
            }}
            className="
              relative
              z-10
              mx-auto
              mb-10
              flex
              h-[260px]
              w-[260px]
              items-center
              justify-center

              lg:absolute
              lg:left-1/2
              lg:top-[50.5%]
              lg:mb-0
              lg:h-[310px]
              lg:w-[310px]
              lg:-translate-x-1/2
              lg:-translate-y-1/2
            "
          >
            {/* OUTER GLOW */}

            <div
              className="
                absolute
                -inset-12
                rounded-full
                bg-[#D9EBFA]/55
                blur-3xl
              "
            />

            {/* OUTER RING */}

            <div
              className="
                absolute
                -inset-9
                rounded-full
                border
                border-white
                bg-white/20
                shadow-[0_0_70px_rgba(42,126,194,0.12)]
              "
            />

            {/* MIDDLE RING */}

            <div
              className="
                absolute
                -inset-4
                rounded-full
                border
                border-[#B8D8EF]
                bg-white/35
              "
            />

            {/* CORE */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                flex
                h-full
                w-full
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-[#6FA9D8]
                bg-white/92
                text-center
                shadow-[0_24px_70px_rgba(11,42,82,0.12)]
                backdrop-blur-xl
              "
            >
              <p
                className="
                  font-serif
                  text-[1.8rem]
                  font-semibold
                  tracking-[-0.035em]
                  text-[#071F45]

                  lg:text-[2rem]
                "
              >
                Sharp Rays
              </p>

              <span
                className="
                  mt-4
                  h-px
                  w-10
                  bg-[#B67D49]
                "
              />

              <p
                className="
                  mt-4
                  text-[0.58rem]
                  font-bold
                  uppercase
                  leading-[1.8]
                  tracking-[0.34em]
                  text-[#0B2A52]
                "
              >
                Performance
                <br />
                Framework
              </p>
            </motion.div>
          </motion.div>

          {/* =================================================
              MOBILE CARDS
          ================================================= */}

          <div
            className="
              grid
              gap-5

              sm:grid-cols-2

              lg:block
            "
          >
            {stages.map((stage, index) => (
              <FrameworkCard
                key={stage.number}
                stage={stage}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              EDITORIAL NOTES
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 15,
              rotate: -5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: -5,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.5,
              ease,
            }}
            className="
              absolute
              right-[2%]
              top-[8%]
              hidden
              max-w-[150px]
              -rotate-[5deg]
              font-serif
              text-[0.7rem]
              font-medium
              italic
              leading-[1.5]
              tracking-[0.08em]
              text-[#1763A0]

              xl:block
            "
          >
            A clearer path to
            <br />
            better results.
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -15,
              rotate: -8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: -8,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="
              absolute
              bottom-[4%]
              left-[3%]
              hidden
              -rotate-[8deg]
              font-serif
              text-[0.65rem]
              font-medium
              italic
              leading-[1.7]
              tracking-[0.08em]
              text-[#5887B0]

              xl:block
            "
          >
            STRATEGY
            <br />
            EXECUTION
            <br />
            INSIGHTS
            <br />
            GROWTH
          </motion.div>
        </div>

        {/* =====================================================
            OUTCOME STRIP
        ===================================================== */}

        <motion.div
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
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[1220px]
            overflow-hidden
            rounded-[1.5rem]
            border
            border-[#D2E2EE]
            bg-white/75
            shadow-[0_16px_50px_rgba(11,42,82,0.05)]
            backdrop-blur-xl

            lg:mt-6
          "
        >
          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {outcomes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay:
                      reduceMotion
                        ? 0
                        : index * 0.07,
                    ease,
                  }}
                  className={`
                    flex
                    min-h-[92px]
                    items-center
                    gap-4
                    border-b
                    border-[#DDE8F0]
                    px-6
                    py-5

                    sm:border-b-0

                    ${
                      index !== outcomes.length - 1
                        ? "lg:border-r lg:border-[#D7E3EC]"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      text-[#0C4A85]
                    "
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span
                    className="
                      text-[0.57rem]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#355C80]
                    "
                  >
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   FRAMEWORK CARD
========================================================= */

function FrameworkCard({
  stage,
  index,
  reduceMotion,
}: {
  stage: FrameworkStage;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = stage.icon;

  const ease = [0.22, 1, 0.36, 1] as const;

  const styles = getToneStyles(stage.tone);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 28,
        scale: reduceMotion ? 1 : 0.98,
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
        duration: reduceMotion ? 0 : 0.68,
        delay:
          reduceMotion
            ? 0
            : index * 0.055,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className={`
        group
        relative
        z-20
        overflow-hidden
        rounded-[1.3rem]
        border
        p-5
        shadow-[0_15px_42px_rgba(11,42,82,0.055)]
        backdrop-blur-xl
        transition-all
        duration-500

        sm:p-6

        ${stage.position}
        ${styles.card}
      `}
    >
      {/* SOFT HOVER WASH */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-44
          w-44
          rounded-full
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-100

          ${styles.glow}
        `}
      />

      {/* TOP */}

      <div
        className="
          relative
          flex
          items-center
          gap-4
        "
      >
        <div
          className={`
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-transform
            duration-300
            group-hover:scale-105

            ${styles.icon}
          `}
        >
          <Icon
            size={24}
            strokeWidth={1.65}
          />
        </div>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              font-serif
              text-[0.85rem]
              font-semibold
              text-[#0B2A52]
            "
          >
            {stage.number}
          </span>

          <span className="h-px w-4 bg-[#7E94A8]" />

          <span
            className="
              text-[0.68rem]
              font-bold
              tracking-[0.18em]
              text-[#0B2A52]
            "
          >
            {stage.title}
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <h3
        className="
          relative
          mt-6
          text-[0.86rem]
          font-bold
          leading-[1.4]
          tracking-[0.015em]
          text-[#0B2A52]
        "
      >
        {stage.headline}
      </h3>

      <p
        className="
          relative
          mt-2.5
          text-[0.78rem]
          leading-[1.58]
          text-[#526C87]
        "
      >
        {stage.description}
      </p>

      {/* FOCUS */}

      <div
        className="
          relative
          mt-5
        "
      >
        <span
          className={`
            block
            h-px
            w-8

            ${styles.line}
          `}
        />

        <p
          className="
            mt-3
            text-[0.58rem]
            font-semibold
            text-[#315474]
          "
        >
          Focus:
        </p>

        <p
          className="
            mt-0.5
            text-[0.73rem]
            font-medium
            leading-[1.55]
            text-[#0B2A52]
          "
        >
          {stage.focus.join(" · ")}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   COLOR SYSTEM
========================================================= */

function getToneStyles(tone: StageTone) {
  const tones: Record<
    StageTone,
    {
      card: string;
      icon: string;
      glow: string;
      line: string;
    }
  > = {
    sky: {
      card:
        "border-[#A9D0F0] bg-gradient-to-br from-[#F7FBFF]/95 via-[#F1F8FE]/95 to-[#EAF5FD]/95 hover:border-[#6BA9DB] hover:shadow-[0_20px_55px_rgba(52,132,194,0.12)]",
      icon:
        "border-[#AED2F0] bg-gradient-to-br from-[#DDF0FE] to-[#9FD0F5] text-[#0B4A84]",
      glow: "bg-[#A7D5F7]",
      line: "bg-[#579BD0]",
    },

    lavender: {
      card:
        "border-[#CEC5F5] bg-gradient-to-br from-[#FCFBFF]/95 via-[#F8F6FF]/95 to-[#F1EFFF]/95 hover:border-[#A997E8] hover:shadow-[0_20px_55px_rgba(113,91,208,0.10)]",
      icon:
        "border-[#D0C5F7] bg-gradient-to-br from-[#EEE9FF] to-[#C8BAF8] text-[#5140CB]",
      glow: "bg-[#D0C5FA]",
      line: "bg-[#7965D7]",
    },

    mint: {
      card:
        "border-[#B9E2D9] bg-gradient-to-br from-[#FBFEFD]/95 via-[#F2FBF8]/95 to-[#EAF8F4]/95 hover:border-[#7BC8B7] hover:shadow-[0_20px_55px_rgba(42,150,124,0.10)]",
      icon:
        "border-[#BCE5DA] bg-gradient-to-br from-[#DDF7EF] to-[#A7DFC9] text-[#086657]",
      glow: "bg-[#B5E8D9]",
      line: "bg-[#36A88D]",
    },

    warm: {
      card:
        "border-[#E8CAA8] bg-gradient-to-br from-[#FFFCF9]/95 via-[#FFF8F1]/95 to-[#FDF2E6]/95 hover:border-[#D7A66B] hover:shadow-[0_20px_55px_rgba(173,113,54,0.10)]",
      icon:
        "border-[#EDC99F] bg-gradient-to-br from-[#FFF0DD] to-[#F6C78E] text-[#A86522]",
      glow: "bg-[#F4D3AD]",
      line: "bg-[#D79647]",
    },

    blue: {
      card:
        "border-[#B7D8F2] bg-gradient-to-br from-[#FAFDFF]/95 via-[#F2F9FE]/95 to-[#EAF5FD]/95 hover:border-[#78AFE0] hover:shadow-[0_20px_55px_rgba(49,128,195,0.11)]",
      icon:
        "border-[#BADAF3] bg-gradient-to-br from-[#E5F4FF] to-[#AAD7F7] text-[#0C568D]",
      glow: "bg-[#ADD8F6]",
      line: "bg-[#4D9AD5]",
    },

    rose: {
      card:
        "border-[#F0BCC1] bg-gradient-to-br from-[#FFFDFD]/95 via-[#FFF6F6]/95 to-[#FDEEEF]/95 hover:border-[#E78D96] hover:shadow-[0_20px_55px_rgba(192,81,91,0.09)]",
      icon:
        "border-[#F2C1C5] bg-gradient-to-br from-[#FFE9EA] to-[#F6B7BC] text-[#A42C3A]",
      glow: "bg-[#F5C5C9]",
      line: "bg-[#DE737D]",
    },
  };

  return tones[tone];
}