"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  CheckCircle2,
  FileText,
  Palette,
  Scissors,
  Search,
  Sparkles,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type WorkflowStep = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  type: "human" | "ai";
  accent: string;
  soft: string;
  border: string;
  iconBg: string;
};

/* =========================================================
   WORKFLOW
========================================================= */

const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    eyebrow: "DIRECTION",
    title: "Human-Led Brief",
    description:
      "We define the objective, audience, message and constraints.",
    icon: FileText,
    type: "human",
    accent: "#0B2A52",
    soft: "#F3F8FC",
    border: "#CBDDE9",
    iconBg: "#E1EDF6",
  },
  {
    number: "02",
    eyebrow: "EXPLORATION",
    title: "AI-Assisted Exploration",
    description:
      "Generative tools can help explore concepts, environments, scenes or production possibilities.",
    icon: Bot,
    type: "ai",
    accent: "#A97942",
    soft: "#FCF7EF",
    border: "#E7D3B6",
    iconBg: "#F1E2CE",
  },
  {
    number: "03",
    eyebrow: "SELECTION",
    title: "Creative Selection",
    description:
      "We decide which outputs actually support the idea.",
    icon: Search,
    type: "human",
    accent: "#0B2A52",
    soft: "#F3F8FC",
    border: "#CBDDE9",
    iconBg: "#E1EDF6",
  },
  {
    number: "04",
    eyebrow: "EDITING",
    title: "Professional Editing",
    description:
      "Generated and traditional assets are shaped into one coherent video.",
    icon: Scissors,
    type: "human",
    accent: "#0B2A52",
    soft: "#F3F8FC",
    border: "#CBDDE9",
    iconBg: "#E1EDF6",
  },
  {
    number: "05",
    eyebrow: "REFINEMENT",
    title: "Brand Refinement",
    description:
      "Typography, visual treatment, audio and tone are aligned with the business.",
    icon: Palette,
    type: "human",
    accent: "#0B2A52",
    soft: "#F3F8FC",
    border: "#CBDDE9",
    iconBg: "#E1EDF6",
  },
  {
    number: "06",
    eyebrow: "QUALITY",
    title: "Quality Review",
    description:
      "The final output is checked for visual consistency, accuracy and suitability for its intended use.",
    icon: CheckCircle2,
    type: "human",
    accent: "#A97942",
    soft: "#FCF7EF",
    border: "#E7D3B6",
    iconBg: "#F1E2CE",
  },
];

/* =========================================================
   CONTROL ITEMS
========================================================= */

const controlItems = [
  {
    number: "01",
    title: "Objective",
    text: "Why are we making this?",
  },
  {
    number: "02",
    title: "Audience",
    text: "Who needs to understand it?",
  },
  {
    number: "03",
    title: "Selection",
    text: "What actually supports the idea?",
  },
  {
    number: "04",
    title: "Brand",
    text: "Does it still feel recognizably yours?",
  },
  {
    number: "05",
    title: "Quality",
    text: "Is the output ready to publish?",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function HumanDirectionAiProduction() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="human-direction-ai-production"
      aria-labelledby="human-direction-ai-production-heading"
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
            -left-[270px]
            top-[13%]
            h-[540px]
            w-[540px]
            rounded-full
            bg-[#E9F3FA]
            blur-[135px]
          "
        />

        {/* GOLD GLOW */}

        <div
          className="
            absolute
            -right-[270px]
            bottom-[12%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#FBF3E8]
            blur-[145px]
          "
        />

        {/* CENTER GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-[43%]
            h-[650px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#F7FAFC]
            blur-[80px]
          "
        />

        {/* GHOST WORD */}

        <span
          style={newYorkFont}
          className="
            absolute
            left-1/2
            top-[31%]
            hidden
            -translate-x-1/2
            whitespace-nowrap
            text-[190px]
            font-light
            leading-none
            tracking-[-0.08em]
            text-[#0B2A52]/[0.016]
            xl:block
          "
        >
          DIRECTION
        </span>
      </div>

      {/* =====================================================
          SIDE MICROCOPY
      ===================================================== */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: -20,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease,
        }}
        className="
          absolute
          left-[2.5%]
          top-[20%]
          hidden
          xl:block
        "
      >
        <span className="block h-px w-10 bg-[#B79A72]" />

        <p
          style={newYorkFont}
          className="
            mt-4
            text-[8px]
            uppercase
            leading-[2]
            tracking-[0.26em]
            text-[#526E86]
          "
        >
          Human Brief
          <br />
          AI Explore
          <br />
          Human Decide
        </p>
      </motion.div>

      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: 20,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease,
        }}
        className="
          absolute
          right-[2.7%]
          top-[18%]
          hidden
          xl:block
        "
      >
        <p
          style={newYorkFont}
          className="
            text-[8px]
            uppercase
            leading-[2]
            tracking-[0.26em]
            text-[#A4774C]
          "
        >
          Faster
          <br />
          Smarter
          <br />
          Still Considered
        </p>

        <span className="mt-4 block h-px w-10 bg-[#B79A72]" />
      </motion.div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1460px]
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
            lg:grid-cols-[0.30fr_0.70fr]
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
                    x: -35,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
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
                How We Use AI
              </span>
            </div>

            <p
              style={newYorkFont}
              className="
                mt-5
                max-w-[310px]
                text-[9px]
                uppercase
                leading-[1.9]
                tracking-[0.17em]
                text-[#687C8E]
              "
            >
              Human Direction
              <br />
              AI Assistance
              <br />
              Professional Finish
            </p>
          </motion.div>

          {/* HEADING */}

          <motion.h2
            id="human-direction-ai-production-heading"
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
            style={newYorkFont}
            className="
              max-w-[950px]
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
            AI in the Workflow.{" "}
            <span className="font-normal italic text-[#A97C52]">
              Human Judgement at the Centre.
            </span>
          </motion.h2>
        </div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
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
            duration: reduceMotion ? 0 : 0.75,
            delay: reduceMotion ? 0 : 0.13,
            ease,
          }}
          className="
            mt-11
            grid
            gap-5
            border-t
            border-[#0B2A52]/10
            pt-7

            md:grid-cols-2
            md:gap-14
          "
        >
          <p
            style={newYorkFont}
            className="
              max-w-[620px]
              text-[14px]
              leading-[1.75]
              text-[#405A72]
              sm:text-[16px]
            "
          >
            Using AI does not mean handing the project to an automated tool
            and accepting whatever comes back.
          </p>

          <p
            style={newYorkFont}
            className="
              max-w-[620px]
              text-[14px]
              leading-[1.75]
              text-[#405A72]
              sm:text-[16px]
            "
          >
            The strongest workflow combines automation with deliberate
            creative decisions.
          </p>
        </motion.div>

        {/* =====================================================
            AI ASSISTS / HUMAN DECIDES BAND
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            delay: reduceMotion ? 0 : 0.12,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[920px]

            lg:mt-14
          "
        >
          <div
            className="
              grid
              overflow-hidden
              rounded-full
              border
              border-[#D8E3EA]
              bg-white
              shadow-[0_15px_40px_rgba(11,42,82,0.045)]

              sm:grid-cols-2
            "
          >
            {/* AI */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-4

                border-b
                border-[#D8E3EA]

                px-6
                py-4

                sm:border-b-0
                sm:border-r
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F3E6D4]
                  text-[#A4774C]
                "
              >
                <Bot size={14} strokeWidth={1.5} />
              </div>

              <div>
                <span
                  style={newYorkFont}
                  className="
                    block
                    text-[7px]
                    uppercase
                    tracking-[0.2em]
                    text-[#A4774C]
                  "
                >
                  AI Assists
                </span>

                <span
                  style={newYorkFont}
                  className="
                    mt-1
                    block
                    text-[0.82rem]
                    text-[#536D83]
                  "
                >
                  Exploration · Speed · Possibility
                </span>
              </div>
            </div>

            {/* HUMAN */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-4
                bg-[#F5F9FC]
                px-6
                py-4
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B2A52]
                  text-white
                "
              >
                <Search size={14} strokeWidth={1.5} />
              </div>

              <div>
                <span
                  style={newYorkFont}
                  className="
                    block
                    text-[7px]
                    uppercase
                    tracking-[0.2em]
                    text-[#6285AD]
                  "
                >
                  Human Decides
                </span>

                <span
                  style={newYorkFont}
                  className="
                    mt-1
                    block
                    text-[0.82rem]
                    text-[#0B2A52]
                  "
                >
                  Direction · Selection · Standards
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DESKTOP STAIRCASE
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-20
            hidden
            min-h-[790px]
            max-w-[1280px]

            lg:block
          "
        >
          {/* =================================================
              STAGE META
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -25,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="
              absolute
              left-0
              top-[90px]
              max-w-[190px]
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.22em]
                text-[#A4774C]
              "
            >
              Production Logic
            </span>

            <h3
              style={newYorkFont}
              className="
                mt-3
                text-[1.55rem]
                font-light
                leading-[1.12]
                tracking-[-0.03em]
                text-[#0B2A52]
              "
            >
              Every decision moves the idea forward.
            </h3>

            <span className="mt-5 block h-px w-14 bg-[#B79A72]" />

            <p
              style={newYorkFont}
              className="
                mt-4
                text-[8px]
                uppercase
                leading-[1.8]
                tracking-[0.16em]
                text-[#778B9C]
              "
            >
              Direction
              <br />
              Production
              <br />
              Refinement
            </p>
          </motion.div>

          {/* =================================================
              FLOATING TOP NOTE
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -15,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.25,
              ease,
            }}
            className="
              absolute
              right-[2%]
              top-[10px]
              max-w-[220px]
              text-right
            "
          >
            <div
              className="
                ml-auto
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#FCF5EC]
                text-[#A4774C]
              "
            >
              <Sparkles size={15} strokeWidth={1.45} />
            </div>

            <p
              style={newYorkFont}
              className="
                mt-3
                text-[8px]
                uppercase
                leading-[1.8]
                tracking-[0.18em]
                text-[#A4774C]
              "
            >
              Technology expands
              <br />
              the possibilities.
            </p>
          </motion.div>

          {/* =================================================
              RISING PATH
          ================================================= */}

          <svg
            viewBox="0 0 1100 560"
            preserveAspectRatio="none"
            fill="none"
            className="
              pointer-events-none
              absolute
              bottom-[115px]
              left-[125px]
              h-[530px]
              w-[1080px]
            "
          >
            {/* SHADOW PATH */}

            <path
              d="
                M35 470
                L220 405
                L395 340
                L570 275
                L745 210
                L930 140
              "
              stroke="#0B2A52"
              strokeOpacity="0.08"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* DASHED GUIDE */}

            <path
              d="
                M35 470
                L220 405
                L395 340
                L570 275
                L745 210
                L930 140
              "
              stroke="#0B2A52"
              strokeOpacity="0.15"
              strokeWidth="1.4"
              strokeDasharray="7 10"
            />

            {/* ACTIVE PATH */}

            <motion.path
              d="
                M35 470
                L220 405
                L395 340
                L570 275
                L745 210
                L930 140
              "
              stroke="#B79A72"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.6,
                ease,
              }}
            />

            {/* PATH NODES */}

            {[
              [35, 470],
              [220, 405],
              [395, 340],
              [570, 275],
              [745, 210],
              [930, 140],
            ].map(([cx, cy], index) => (
              <motion.circle
                key={index}
                cx={cx}
                cy={cy}
                r="5"
                fill={index === 1 ? "#B79A72" : "#0B2A52"}
                stroke="#ffffff"
                strokeWidth="4"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: reduceMotion ? 0 : 0.25 + index * 0.08,
                }}
              />
            ))}
          </svg>

          {/* =================================================
              STAIR ITEMS
          ================================================= */}

          <div
            className="
              absolute
              bottom-[165px]
              left-[155px]
              right-0
              h-[540px]
            "
          >
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isAI = step.type === "ai";

              const positions = [
                "left-[0%] bottom-[0px]",
                "left-[16.4%] bottom-[66px]",
                "left-[32.8%] bottom-[132px]",
                "left-[49.2%] bottom-[198px]",
                "left-[65.6%] bottom-[264px]",
                "left-[82%] bottom-[330px]",
              ];

              return (
                <motion.article
                  key={step.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 38,
                          scale: 0.97,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.72,
                    delay: reduceMotion ? 0 : index * 0.085,
                    ease,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                        }
                  }
                  className={`
                    absolute
                    w-[170px]

                    xl:w-[185px]

                    ${positions[index]}
                  `}
                >
                  {/* TOP LABEL */}

                  <div
                    className="
                      mb-3
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      style={{
                        ...newYorkFont,
                        color: step.accent,
                      }}
                      className="
                        text-[8px]
                        font-medium
                        tracking-[0.16em]
                      "
                    >
                      {step.number}
                    </span>

                    <span
                      style={{
                        backgroundColor: step.accent,
                      }}
                      className="
                        h-px
                        flex-1
                        opacity-30
                      "
                    />
                  </div>

                  {/* =================================================
                      MAIN BLOCK
                  ================================================= */}

                  <div
                    style={{
                      backgroundColor: step.soft,
                      borderColor: step.border,
                    }}
                    className="
                      group
                      relative
                      min-h-[220px]
                      overflow-hidden
                      rounded-[26px_26px_10px_10px]
                      border
                      px-4
                      pb-5
                      pt-4
                      shadow-[0_16px_38px_rgba(11,42,82,0.055)]
                      transition-shadow
                      duration-300

                      hover:shadow-[0_24px_48px_rgba(11,42,82,0.09)]
                    "
                  >
                    {/* TOP STRIPE */}

                    <motion.span
                      initial={{
                        scaleX: reduceMotion ? 1 : 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.6,
                        delay: reduceMotion ? 0 : index * 0.08,
                        ease,
                      }}
                      style={{
                        backgroundColor: step.accent,
                      }}
                      className="
                        absolute
                        left-0
                        top-0
                        h-[3px]
                        w-full
                        origin-left
                      "
                    />

                    {/* GHOST NUMBER */}

                    <span
                      style={{
                        ...newYorkFont,
                        color: step.accent,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        -right-1
                        -top-3
                        text-[4rem]
                        font-light
                        leading-none
                        opacity-[0.055]
                      "
                    >
                      {step.number}
                    </span>

                    {/* ICON */}

                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              rotate: 6,
                              scale: 1.07,
                            }
                      }
                      style={{
                        backgroundColor: step.iconBg,
                        color: step.accent,
                      }}
                      className="
                        relative
                        z-10
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </motion.div>

                    {/* EYEBROW */}

                    <p
                      style={{
                        ...newYorkFont,
                        color: step.accent,
                      }}
                      className="
                        relative
                        z-10
                        mt-5
                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.19em]
                      "
                    >
                      {step.eyebrow}
                    </p>

                    {/* TITLE */}

                    <h3
                      style={newYorkFont}
                      className="
                        relative
                        z-10
                        mt-2
                        text-[1.05rem]
                        font-light
                        leading-[1.1]
                        tracking-[-0.025em]
                        text-[#0B2A52]
                      "
                    >
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      style={newYorkFont}
                      className="
                        relative
                        z-10
                        mt-3
                        text-[0.68rem]
                        leading-[1.58]
                        text-[#587086]
                      "
                    >
                      {step.description}
                    </p>

                    {/* TYPE */}

                    <div
                      className="
                        relative
                        z-10
                        mt-5
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        style={{
                          backgroundColor: step.accent,
                        }}
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                        "
                      />

                      <span
                        style={newYorkFont}
                        className="
                          text-[6px]
                          uppercase
                          tracking-[0.17em]
                          text-[#80909D]
                        "
                      >
                        {isAI ? "AI Assisted" : "Human Led"}
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      STEP DEPTH
                  ================================================= */}

                  <div
                    style={{
                      backgroundColor: isAI
                        ? "#E9D7BC"
                        : "#D9E7F0",
                    }}
                    className="
                      mx-auto
                      h-[17px]
                      w-[90%]
                      rounded-b-[9px]
                    "
                  />

                  <div
                    style={{
                      backgroundColor: isAI
                        ? "#F3E6D3"
                        : "#E8F1F6",
                    }}
                    className="
                      mx-auto
                      h-[7px]
                      w-[78%]
                      rounded-b-[7px]
                    "
                  />
                </motion.article>
              );
            })}
          </div>

          {/* =================================================
              FOUNDATION
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scaleX: 0.94,
                  }
            }
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.2,
              ease,
            }}
            className="
              absolute
              bottom-0
              left-[7%]
              right-[1%]

              overflow-hidden

              rounded-[26px]

              bg-[#0B2A52]

              px-8
              py-7

              shadow-[0_26px_70px_rgba(11,42,82,0.18)]
            "
          >
            {/* DECORATIONS */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-[240px]
                w-[240px]
                rounded-full
                border-[40px]
                border-white/[0.035]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-[38%]
                top-1/2
                h-[160px]
                w-[300px]
                -translate-y-1/2
                rounded-full
                bg-[#3976B6]/15
                blur-[50px]
              "
            />

            <div
              className="
                relative
                z-10
                grid
                grid-cols-[auto_1fr_auto]
                items-center
                gap-6
              "
            >
              {/* ICON */}

              <div
                className="
                  flex
                  h-13
                  w-13
                  items-center
                  justify-center
                  rounded-full
                  bg-[#B79A72]
                  text-white
                "
                style={{
                  width: 52,
                  height: 52,
                }}
              >
                <Search size={17} strokeWidth={1.45} />
              </div>

              {/* TEXT */}

              <div>
                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    font-medium
                    uppercase
                    tracking-[0.21em]
                    text-[#C6A77A]
                  "
                >
                  The Foundation
                </span>

                <h3
                  style={newYorkFont}
                  className="
                    mt-2
                    text-[1.55rem]
                    font-light
                    leading-[1.12]
                    tracking-[-0.035em]
                    text-white
                  "
                >
                  Human Judgement Runs Through Every Step.
                </h3>
              </div>

              {/* END LABEL */}

              <div className="text-right">
                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    uppercase
                    leading-[1.8]
                    tracking-[0.17em]
                    text-white/45
                  "
                >
                  Objective
                  <br />
                  Selection
                  <br />
                  Standards
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            relative
            mt-16
            lg:hidden
          "
        >
          {/* RAIL */}

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
              duration: reduceMotion ? 0 : 1.2,
              ease,
            }}
            className="
              absolute
              bottom-[145px]
              left-[24px]
              top-0
              w-px
              origin-top
              bg-gradient-to-b
              from-[#0B2A52]
              via-[#6285AD]
              to-[#B79A72]
            "
          />

          <div className="space-y-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isAI = step.type === "ai";

              return (
                <motion.article
                  key={step.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: index % 2 === 0 ? -24 : 24,
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
                    delay: reduceMotion ? 0 : index * 0.05,
                    ease,
                  }}
                  className="
                    relative
                    grid
                    grid-cols-[50px_1fr]
                    gap-4
                  "
                >
                  {/* NODE */}

                  <div
                    style={{
                      backgroundColor: step.accent,
                    }}
                    className="
                      relative
                      z-10
                      flex
                      h-[48px]
                      w-[48px]
                      items-center
                      justify-center
                      rounded-full
                      border-[4px]
                      border-white
                      text-white
                      shadow-[0_8px_24px_rgba(11,42,82,0.13)]
                    "
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </div>

                  {/* CARD */}

                  <div
                    style={{
                      backgroundColor: step.soft,
                      borderColor: step.border,
                    }}
                    className="
                      overflow-hidden
                      rounded-[22px]
                      border
                      px-5
                      py-5
                    "
                  >
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          ...newYorkFont,
                          color: step.accent,
                        }}
                        className="
                          text-[7px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                        "
                      >
                        {step.eyebrow}
                      </span>

                      <span
                        style={{
                          backgroundColor: step.accent,
                        }}
                        className="h-px w-8 opacity-50"
                      />

                      <span
                        style={newYorkFont}
                        className="
                          text-[7px]
                          text-[#8B9AA7]
                        "
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3
                      style={newYorkFont}
                      className="
                        mt-3
                        text-[1.25rem]
                        font-light
                        leading-[1.12]
                        tracking-[-0.03em]
                        text-[#0B2A52]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      style={newYorkFont}
                      className="
                        mt-2
                        text-[0.8rem]
                        leading-[1.65]
                        text-[#526B80]
                      "
                    >
                      {step.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      <span
                        style={{
                          backgroundColor: step.accent,
                        }}
                        className="h-1.5 w-1.5 rounded-full"
                      />

                      <span
                        style={newYorkFont}
                        className="
                          text-[6px]
                          uppercase
                          tracking-[0.17em]
                          text-[#7C8E9D]
                        "
                      >
                        {isAI ? "AI Assisted" : "Human Led"}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* MOBILE FOUNDATION */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="
              mt-5
              rounded-[24px]
              bg-[#0B2A52]
              px-6
              py-7
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-[#C6A77A]
              "
            >
              The Foundation
            </span>

            <h3
              style={newYorkFont}
              className="
                mt-2
                text-[1.35rem]
                font-light
                leading-[1.2]
                text-white
              "
            >
              Human Judgement Runs Through Every Step.
            </h3>
          </motion.div>
        </div>

        {/* =====================================================
            CONTROL LAYER
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 32,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-20
            max-w-[1200px]

            overflow-hidden

            rounded-[30px]

            border
            border-[#D9E3EA]

            bg-[linear-gradient(120deg,#F4F9FC_0%,#FFFFFF_46%,#FCF7F0_100%)]

            px-6
            py-8

            shadow-[0_20px_55px_rgba(11,42,82,0.05)]

            sm:px-8

            lg:mt-24
            lg:px-10
          "
        >
          {/* DECORATION */}

          <div
            className="
              pointer-events-none
              absolute
              -left-24
              -top-24
              h-[240px]
              w-[240px]
              rounded-full
              bg-[#EAF3F9]
              blur-[50px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              right-[5%]
              h-[230px]
              w-[230px]
              rounded-full
              bg-[#F5E7D3]
              blur-[55px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-9

              lg:grid-cols-[0.32fr_0.68fr]
              lg:items-center
            "
          >
            {/* LEFT */}

            <div>
              <span
                style={newYorkFont}
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.23em]
                  text-[#A4774C]
                "
              >
                Human Control Layer
              </span>

              <h3
                style={newYorkFont}
                className="
                  mt-3
                  max-w-[350px]
                  text-[1.65rem]
                  font-light
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#0B2A52]

                  sm:text-[1.85rem]
                "
              >
                AI can accelerate production.{" "}
                <span className="italic text-[#A97C52]">
                  These decisions remain human.
                </span>
              </h3>
            </div>

            {/* CONTROLS */}

            <div
              className="
                grid
                grid-cols-1
                gap-2

                sm:grid-cols-2
                xl:grid-cols-5
              "
            >
              {controlItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 16,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.055,
                    ease,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[17px]
                    border
                    border-[#D9E3EA]
                    bg-white
                    px-4
                    py-5
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#B79A72]/50
                    hover:shadow-[0_12px_25px_rgba(11,42,82,0.06)]
                  "
                >
                  <span
                    style={newYorkFont}
                    className="
                      text-[7px]
                      tracking-[0.16em]
                      text-[#B18458]
                    "
                  >
                    {item.number}
                  </span>

                  <h4
                    style={newYorkFont}
                    className="
                      mt-3
                      text-[0.92rem]
                      font-medium
                      text-[#0B2A52]
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    style={newYorkFont}
                    className="
                      mt-2
                      text-[0.67rem]
                      leading-[1.55]
                      text-[#687C8D]
                    "
                  >
                    {item.text}
                  </p>

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-[#B79A72]
                      transition-all
                      duration-500

                      group-hover:w-full
                    "
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            HUMAN + AI SUMMARY
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[1120px]
            border-y
            border-[#0B2A52]/10
            py-10

            lg:mt-20
          "
        >
          <div
            className="
              grid
              gap-8

              md:grid-cols-[1fr_auto_1fr]
              md:items-center
            "
          >
            {/* HUMAN */}

            <div className="md:text-right">
              <span
                style={newYorkFont}
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.23em]
                  text-[#0B2A52]
                "
              >
                Human Direction
              </span>

              <h3
                style={newYorkFont}
                className="
                  mt-3
                  text-[1.55rem]
                  font-light
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#0B2A52]

                  sm:text-[1.8rem]
                "
              >
                Decide what matters.
              </h3>

              <p
                style={newYorkFont}
                className="
                  mt-3
                  ml-auto
                  max-w-[410px]
                  text-[0.8rem]
                  leading-[1.65]
                  text-[#61778A]
                "
              >
                The objective, message, selection, brand and final quality
                stay deliberately controlled.
              </p>
            </div>

            {/* PLUS */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, 6, 0, -6, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mx-auto
                flex
                h-[78px]
                w-[78px]
                items-center
                justify-center
                rounded-full
                border
                border-[#DCC6A6]
                bg-[#FCF7F0]
                text-[#A97C52]
                shadow-[0_12px_35px_rgba(11,42,82,0.05)]
              "
            >
              <Sparkles size={22} strokeWidth={1.3} />
            </motion.div>

            {/* AI */}

            <div>
              <span
                style={newYorkFont}
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.23em]
                  text-[#A4774C]
                "
              >
                AI Production
              </span>

              <h3
                style={newYorkFont}
                className="
                  mt-3
                  text-[1.55rem]
                  font-light
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#0B2A52]

                  sm:text-[1.8rem]
                "
              >
                Accelerate what helps.
              </h3>

              <p
                style={newYorkFont}
                className="
                  mt-3
                  max-w-[410px]
                  text-[0.8rem]
                  leading-[1.65]
                  text-[#61778A]
                "
              >
                Generative tools support exploration and production where they
                genuinely improve the workflow.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-20
            max-w-[1180px]
            overflow-hidden
            rounded-[34px]
            bg-[#0B2A52]
            px-6
            py-12
            text-center
            shadow-[0_28px_80px_rgba(11,42,82,0.18)]

            sm:px-9

            lg:mt-24
            lg:px-14
            lg:py-14
          "
        >
          {/* DECORATIVE RINGS */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[100px]
              -top-[100px]
              h-[280px]
              w-[280px]
              rounded-full
              border-[48px]
              border-white/[0.035]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[120px]
              -right-[80px]
              h-[300px]
              w-[300px]
              rounded-full
              border-[50px]
              border-[#B79A72]/[0.08]
            "
          />

          {/* LABEL */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              w-fit
              items-center
              gap-4
            "
          >
            <span className="h-px w-12 bg-[#C6A77A]/60 sm:w-20" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#C6A77A]
              "
            >
              The Principle
            </span>

            <span className="h-px w-12 bg-[#C6A77A]/60 sm:w-20" />
          </div>

          {/* SMALL LINE */}

          <p
            style={newYorkFont}
            className="
              relative
              z-10
              mt-8
              text-[1.15rem]
              font-light
              tracking-[-0.02em]
              text-white/45

              sm:text-[1.35rem]
            "
          >
            Speed should improve the process.
          </p>

          {/* MAIN PRINCIPLE */}

          <h3
            style={newYorkFont}
            className="
              relative
              z-10
              mx-auto
              mt-3
              max-w-[1040px]

              text-[2rem]
              font-light
              leading-[1.08]
              tracking-[-0.045em]

              text-white

              sm:text-[2.45rem]
              md:text-[2.85rem]
              lg:text-[3.1rem]
            "
          >
            Faster Production Should Never Mean{" "}
            <span className="relative inline-block font-normal italic text-[#D1A66E]">
              Lower Standards.

              <motion.span
                initial={{
                  scaleX: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : 0.2,
                  ease,
                }}
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-full
                  origin-left
                  bg-[#D1A66E]/70
                "
              />
            </span>
          </h3>

          {/* FINAL PROCESS */}

          <div
            className="
              relative
              z-10
              mx-auto
              mt-10
              flex
              max-w-[820px]
              flex-wrap
              items-center
              justify-center
              gap-x-4
              gap-y-3
            "
          >
            {[
              "Human Brief",
              "AI Explore",
              "Human Select",
              "Professional Edit",
              "Brand Refine",
              "Quality Review",
            ].map((item, index) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    font-medium
                    uppercase
                    tracking-[0.17em]
                    text-white/50
                  "
                >
                  {item}
                </span>

                {index !== 5 && (
                  <span className="h-1 w-1 rounded-full bg-[#C6A77A]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}