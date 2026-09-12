"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  Telescope,
  Compass,
  PenLine,
  Network,
  BarChart3,
  ArrowRight,
  RotateCcw,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Understand the Business",
    description:
      "We learn about your audience, services, expertise, current content and objectives.",
    icon: Telescope,
    tone: "warm",
    details: ["Audience", "Services", "Expertise", "Objectives"],
  },
  {
    number: "02",
    label: "RESEARCH",
    title: "Find the Opportunities",
    description:
      "We explore audience questions, relevant topics, search behaviour, competitors and existing content gaps.",
    icon: Search,
    tone: "blue",
    details: ["Questions", "Search", "Competitors", "Content gaps"],
  },
  {
    number: "03",
    label: "STRATEGIZE",
    title: "Build the Content Direction",
    description:
      "We define priorities, topics, formats, responsibilities and the role each piece of content should play.",
    icon: Compass,
    tone: "warm",
    details: ["Priorities", "Topics", "Formats", "Responsibilities"],
  },
  {
    number: "04",
    label: "CREATE",
    title: "Turn Knowledge Into Content",
    description:
      "Content is researched, developed and refined around the agreed strategy.",
    icon: PenLine,
    tone: "blue",
    details: ["Research", "Develop", "Refine", "Approve"],
  },
  {
    number: "05",
    label: "PUBLISH & CONNECT",
    title: "Put Content Into the Wider Journey",
    description:
      "Approved content is published and connected through internal links, relevant channels and appropriate calls to action.",
    icon: Network,
    tone: "warm",
    details: ["Publish", "Internal links", "Channels", "CTAs"],
  },
  {
    number: "06",
    label: "LEARN & IMPROVE",
    title: "Use Performance to Shape What Comes Next",
    description:
      "We review what is working, what needs improvement and where new opportunities are appearing.",
    icon: BarChart3,
    tone: "blue",
    details: ["Measure", "Learn", "Improve", "Repeat"],
  },
];

const footerSteps = [
  { label: "RESEARCH", text: "Recognize", icon: Search },
  { label: "PLAN", text: "Prioritize", icon: Compass },
  { label: "CREATE", text: "Produce", icon: PenLine },
  { label: "CONNECT", text: "Distribute", icon: Network },
  { label: "IMPROVE", text: "Grow", icon: BarChart3 },
];

export default function ContentMarketingProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="content-marketing-process"
      aria-labelledby="content-marketing-process-heading"
      className="
        relative
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

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-[240px]
            -top-[240px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#EDF6FF]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[50%]
            h-[780px]
            w-[1050px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#EEF6FF]/60
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[250px]
            bottom-[-80px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#FFF3E9]/45
            blur-[130px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            HEADER
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[1060px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-12 bg-[#B88758]" />

            <span
              className="
                text-[0.68rem]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#A66738]
              "
            >
              Your Experience
            </span>

            <span className="h-px w-12 bg-[#B88758]" />
          </div>

          <h2
            id="content-marketing-process-heading"
            className="
              mx-auto
              mt-5
              max-w-[1020px]
              font-serif
              font-medium
              leading-[1.04]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            From Content Strategy to{" "}
            <span className="font-normal italic text-[#B97848]">
              Continuous Improvement.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[760px]
              text-[0.96rem]
              leading-[1.7]
              text-[#536D86]
            "
          >
            A clear process keeps content connected to audience needs and
            business priorities.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP JOURNEY
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-16
            hidden
            max-w-[1240px]
            lg:block
          "
        >
          {/* =================================================
              ROAD
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-[170px]
              h-[570px]
            "
          >
            <svg
              viewBox="0 0 1240 570"
              fill="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="journeyRoad"
                  x1="70"
                  y1="50"
                  x2="1170"
                  y2="520"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFF7EF" />
                  <stop offset="0.5" stopColor="#F8FBFF" />
                  <stop offset="1" stopColor="#EAF4FF" />
                </linearGradient>

                <linearGradient
                  id="journeyLine"
                  x1="80"
                  y1="100"
                  x2="1160"
                  y2="500"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B88758" />
                  <stop offset="0.45" stopColor="#8CAECD" />
                  <stop offset="1" stopColor="#2869A5" />
                </linearGradient>

                <filter
                  id="softRoadShadow"
                  x="-20%"
                  y="-30%"
                  width="140%"
                  height="160%"
                >
                  <feDropShadow
                    dx="0"
                    dy="18"
                    stdDeviation="17"
                    floodColor="#0B2A52"
                    floodOpacity="0.1"
                  />
                </filter>
              </defs>

              {/* SOFT ROAD */}

              <motion.path
                d="
                  M 75 100
                  C 235 30, 335 65, 405 155
                  C 470 240, 530 255, 620 190
                  C 720 115, 785 110, 850 195
                  C 920 285, 1010 300, 1165 240
                  C 1215 220, 1215 330, 1155 370
                  C 1045 445, 955 430, 855 385
                  C 750 340, 685 380, 620 455
                  C 555 530, 465 525, 390 465
                  C 300 395, 215 395, 80 480
                "
                stroke="url(#journeyRoad)"
                strokeWidth="105"
                strokeLinecap="round"
                filter="url(#softRoadShadow)"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* ROAD OUTLINE */}

              <motion.path
                d="
                  M 75 100
                  C 235 30, 335 65, 405 155
                  C 470 240, 530 255, 620 190
                  C 720 115, 785 110, 850 195
                  C 920 285, 1010 300, 1165 240
                  C 1215 220, 1215 330, 1155 370
                  C 1045 445, 955 430, 855 385
                  C 750 340, 685 380, 620 455
                  C 555 530, 465 525, 390 465
                  C 300 395, 215 395, 80 480
                "
                stroke="#C7D7E4"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 1.9,
                  delay: reduceMotion ? 0 : 0.1,
                }}
              />

              {/* DASHED CENTER */}

              <motion.path
                d="
                  M 75 100
                  C 235 30, 335 65, 405 155
                  C 470 240, 530 255, 620 190
                  C 720 115, 785 110, 850 195
                  C 920 285, 1010 300, 1165 240
                  C 1215 220, 1215 330, 1155 370
                  C 1045 445, 955 430, 855 385
                  C 750 340, 685 380, 620 455
                  C 555 530, 465 525, 390 465
                  C 300 395, 215 395, 80 480
                "
                stroke="url(#journeyLine)"
                strokeWidth="1.3"
                strokeDasharray="8 11"
                strokeLinecap="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 2.1,
                  delay: reduceMotion ? 0 : 0.3,
                }}
              />
            </svg>
          </div>

          {/* =================================================
              GRID OF 6 STAGES
          ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-3
              gap-x-14
              gap-y-[150px]
            "
          >
            {steps.map((step, index) => (
              <JourneyStep
                key={step.number}
                step={step}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-12
            max-w-[760px]
            lg:hidden
          "
        >
          {/* vertical road */}

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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-10
              left-[31px]
              top-10
              w-[2px]
              origin-top
              bg-gradient-to-b
              from-[#B88758]
              via-[#7EA4C6]
              to-[#1F629C]
            "
          />

          <div className="space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const warm = step.tone === "warm";

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay:
                      reduceMotion
                        ? 0
                        : index * 0.05,
                  }}
                  className={`
                    relative
                    ml-[72px]

                    rounded-[1.45rem]

                    border

                    p-5

                    shadow-[0_14px_35px_rgba(11,42,82,0.055)]

                    ${
                      warm
                        ? `
                          border-[#E5CDB8]
                          bg-gradient-to-br
                          from-[#FFF8F1]
                          via-white
                          to-white
                        `
                        : `
                          border-[#B8D0E6]
                          bg-gradient-to-br
                          from-[#F1F8FF]
                          via-white
                          to-white
                        `
                    }
                  `}
                >
                  {/* timeline icon */}

                  <div
                    className={`
                      absolute
                      left-[-72px]
                      top-5

                      flex
                      h-[62px]
                      w-[62px]

                      items-center
                      justify-center

                      rounded-full

                      border-[7px]
                      border-white

                      shadow-[0_9px_25px_rgba(11,42,82,0.1)]

                      ${
                        warm
                          ? `
                            bg-[#F8E2CE]
                            text-[#A96230]
                          `
                          : `
                            bg-[#DDEDFC]
                            text-[#1D6099]
                          `
                      }
                    `}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.7}
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
                        text-[0.77rem]
                        italic
                        text-[#B06C3B]
                      "
                    >
                      STEP {step.number}
                    </span>

                    <span className="h-px w-5 bg-[#B88758]" />

                    <span
                      className="
                        text-[0.54rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#607A93]
                      "
                    >
                      {step.label}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[1.4rem]
                      font-medium
                      leading-[1.12]
                      tracking-[-0.025em]
                      text-[#0B2A52]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[0.84rem]
                      leading-[1.6]
                      text-[#566F87]
                    "
                  >
                    {step.description}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {step.details.map((item) => (
                      <span
                        key={item}
                        className="
                          inline-flex
                          items-center
                          gap-2

                          rounded-full

                          border
                          border-[#C8D8E6]

                          bg-white

                          px-3
                          py-2

                          text-[0.67rem]
                          text-[#536C84]
                        "
                      >
                        <Check
                          size={10}
                          strokeWidth={2}
                          className="text-[#0B2A52]"
                        />

                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CONTINUOUS CYCLE
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-20
            max-w-[1260px]

            overflow-hidden

            rounded-[2rem]

            border
            border-[#E3CEBA]

            bg-gradient-to-r
            from-[#FFF9F3]
            via-white
            to-[#F3F9FF]

            px-5
            py-5

            shadow-[0_18px_46px_rgba(11,42,82,0.055)]

            lg:mt-24
            lg:px-7
          "
        >
          <div
            className="
              grid
              gap-6

              lg:grid-cols-[285px_1fr]
              lg:items-center
            "
          >
            {/* continuous cycle */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  flex
                  h-[58px]
                  w-[58px]
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#DFC8B4]

                  bg-white

                  text-[#B06C3B]
                "
              >
                <RotateCcw
                  size={23}
                  strokeWidth={1.7}
                />
              </motion.div>

              <div>
                <span
                  className="
                    text-[0.57rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#A66738]
                  "
                >
                  Continuous Cycle
                </span>

                <p
                  className="
                    mt-1.5
                    font-serif
                    text-[0.96rem]
                    text-[#315473]
                  "
                >
                  Learnings feed the next decision.
                </p>
              </div>
            </div>

            {/* cycle steps */}

            <div
              className="
                grid
                gap-3

                sm:grid-cols-2
                lg:grid-cols-5
              "
            >
              {footerSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay:
                        reduceMotion
                          ? 0
                          : index * 0.06,
                    }}
                    className="
                      flex
                      items-center
                      gap-3

                      lg:border-l
                      lg:border-[#E5D4C5]
                      lg:pl-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-[44px]
                        w-[44px]
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#E6D4C3]

                        bg-[#FFF9F4]

                        text-[#AF6C3B]
                      "
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <span
                        className="
                          text-[0.52rem]
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-[#315473]
                        "
                      >
                        {item.label}
                      </span>

                      <p
                        className="
                          mt-1
                          text-[0.66rem]
                          text-[#788B9D]
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL LINE
        ===================================================== */}

        <motion.div
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
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
          }}
          className="
            mx-auto
            mt-9
            flex
            max-w-[820px]
            items-center
            justify-center
            gap-6
            text-center
          "
        >
          <span
            className="
              hidden
              h-px
              flex-1
              bg-gradient-to-r
              from-transparent
              to-[#88A7C1]

              sm:block
            "
          />

          <p
            className="
              font-serif
              text-[1.1rem]
              leading-[1.4]
              text-[#0B2A52]

              sm:text-[1.25rem]
            "
          >
            A connected process means every stage informs{" "}
            <span className="font-normal italic text-[#B97848]">
              what happens next.
            </span>
          </p>

          <span
            className="
              hidden
              h-px
              flex-1
              bg-gradient-to-l
              from-transparent
              to-[#88A7C1]

              sm:block
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP JOURNEY STEP
========================================================= */

function JourneyStep({
  step,
  index,
  reduceMotion,
}: {
  step: (typeof steps)[number];
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = step.icon;
  const warm = step.tone === "warm";

  const lowerRow = index >= 3;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reduceMotion
          ? 0
          : lowerRow
            ? 30
            : -20,
        scale: reduceMotion ? 1 : 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay:
          reduceMotion
            ? 0
            : 0.12 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        relative

        ${
          lowerRow
            ? "pt-[30px]"
            : "pb-[30px]"
        }
      `}
    >
      {/* CARD */}

      <motion.div
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -6,
              }
        }
        className={`
          group
          relative
          min-h-[285px]

          overflow-hidden

          rounded-[1.6rem]

          border

          p-6

          shadow-[0_16px_42px_rgba(11,42,82,0.06)]

          transition-all
          duration-300

          hover:shadow-[0_25px_58px_rgba(11,42,82,0.11)]

          ${
            warm
              ? `
                border-[#E5CDB7]
                bg-gradient-to-br
                from-[#FFF8F1]
                via-white
                to-[#FFFDFB]
              `
              : `
                border-[#B8D1E6]
                bg-gradient-to-br
                from-[#EFF7FF]
                via-white
                to-[#FBFDFF]
              `
          }
        `}
      >
        {/* subtle large number */}

        <span
          className="
            pointer-events-none
            absolute
            -right-2
            -top-8

            font-serif
            text-[7rem]
            font-medium
            leading-none

            text-[#0B2A52]/[0.035]
          "
        >
          {step.number}
        </span>

        {/* top */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            gap-4
          "
        >
          <div
            className={`
              flex
              h-[56px]
              w-[56px]
              shrink-0

              items-center
              justify-center

              rounded-full

              shadow-[0_8px_22px_rgba(11,42,82,0.065)]

              transition-transform
              duration-300

              group-hover:-rotate-3
              group-hover:scale-105

              ${
                warm
                  ? `
                    bg-[#F8E2CD]
                    text-[#A9612E]
                  `
                  : `
                    bg-[#DDEDFC]
                    text-[#195A95]
                  `
              }
            `}
          >
            <Icon
              size={23}
              strokeWidth={1.7}
            />
          </div>

          <div>
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[0.58rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#A66738]
                "
              >
                Step {step.number}
              </span>

              <span className="h-px w-5 bg-[#B88758]" />
            </div>

            <span
              className="
                mt-1.5
                block

                text-[0.55rem]
                font-semibold
                uppercase
                tracking-[0.17em]

                text-[#6C8195]
              "
            >
              {step.label}
            </span>
          </div>
        </div>

        {/* title */}

        <h3
          className="
            relative
            z-10
            mt-5
            max-w-[270px]

            font-serif
            text-[1.55rem]
            font-medium
            leading-[1.1]
            tracking-[-0.03em]

            text-[#0B2A52]
          "
        >
          {step.title}
        </h3>

        {/* description */}

        <p
          className="
            relative
            z-10
            mt-3

            text-[0.82rem]
            leading-[1.55]

            text-[#566F87]
          "
        >
          {step.description}
        </p>

        {/* mini details */}

        <div
          className="
            relative
            z-10
            mt-5
            grid
            grid-cols-2
            gap-2
          "
        >
          {step.details.map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-2

                rounded-[0.7rem]

                border
                border-[#D2DFEA]

                bg-white/80

                px-2.5
                py-2
              "
            >
              <span
                className={`
                  h-[6px]
                  w-[6px]
                  shrink-0
                  rounded-full

                  ${
                    warm
                      ? "bg-[#B97848]"
                      : "bg-[#3777AF]"
                  }
                `}
              />

              <span
                className="
                  text-[0.63rem]
                  text-[#536B82]
                "
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* footer */}

        <div
          className="
            relative
            z-10
            mt-5

            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[0.54rem]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-[#667D92]
            "
          >
            {step.label}
          </span>

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center

              rounded-full

              border
              border-[#C1D3E3]

              bg-white

              text-[#0B2A52]

              transition-all
              duration-300

              group-hover:translate-x-1
              group-hover:bg-[#0B2A52]
              group-hover:text-white
            "
          >
            <ArrowRight
              size={14}
              strokeWidth={1.7}
            />
          </span>
        </div>
      </motion.div>

      {/* =====================================================
          ROAD CHECKPOINT
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: reduceMotion ? 1 : 0.6,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.45,
          delay:
            reduceMotion
              ? 0
              : 0.45 + index * 0.08,
        }}
        className={`
          absolute
          left-1/2
          z-20

          flex
          h-[58px]
          w-[58px]

          -translate-x-1/2

          items-center
          justify-center

          rounded-full

          border-[5px]
          border-white

          font-serif
          text-[1rem]
          font-semibold
          text-white

          shadow-[0_12px_26px_rgba(11,42,82,0.14)]

          ${
            lowerRow
              ? "-top-[3px]"
              : "-bottom-[3px]"
          }

          ${
            warm
              ? `
                bg-gradient-to-br
                from-[#CA9062]
                to-[#955126]
              `
              : `
                bg-gradient-to-br
                from-[#4386C0]
                to-[#17578F]
              `
          }
        `}
      >
        {step.number}
      </motion.div>
    </motion.article>
  );
}