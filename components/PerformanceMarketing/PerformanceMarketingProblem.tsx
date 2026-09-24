"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  BarChart3,
  CircleDollarSign,
  Eye,
  FileChartColumnIncreasing,
  MousePointerClick,
  Target,
  UserRoundCheck,
  X,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const problems = [
  {
    number: "01",
    eyebrow: "You’re Reaching People",
    description:
      "But not necessarily the audience most likely to act.",
    icon: Eye,
    tag: "AUDIENCE",
  },
  {
    number: "02",
    eyebrow: "You’re Getting Clicks",
    description:
      "But visitors are leaving without converting.",
    icon: MousePointerClick,
    tag: "CONVERSION",
  },
  {
    number: "03",
    eyebrow: "You’re Generating Leads",
    description:
      "But too many are low quality or commercially irrelevant.",
    icon: UserRoundCheck,
    tag: "LEAD QUALITY",
  },
  {
    number: "04",
    eyebrow: "You’re Increasing Spend",
    description:
      "But performance is not improving with the budget.",
    icon: CircleDollarSign,
    tag: "EFFICIENCY",
  },
  {
    number: "05",
    eyebrow: "You’re Running Multiple Campaigns",
    description:
      "But there is no clear picture of what is actually driving results.",
    icon: Target,
    tag: "ATTRIBUTION",
  },
  {
    number: "06",
    eyebrow: "You’re Looking at Reports",
    description:
      "But the numbers are not connected clearly enough to business outcomes.",
    icon: FileChartColumnIncreasing,
    tag: "MEASUREMENT",
  },
];

const falseGoals = [
  "Traffic is not the goal.",
  "Clicks are not the goal.",
  "Reach alone is not the goal.",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PerformanceMarketingProblem() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="performance-marketing-problem"
      aria-labelledby="performance-problem-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-10
        sm:py-12
        lg:py-14
        xl:py-16
      "
    >
      {/* =====================================================
          BACKGROUND
          GRADIENT ONLY — NO DECORATIVE OBJECTS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
       

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  backgroundPosition: [
                    "0% 45%",
                    "100% 50%",
                    "62% 100%",
                    "0% 45%",
                  ],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
          
            backgroundSize: "160% 160%",
          }}
          className="absolute inset-0"
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.95fr_0.78fr]
            lg:items-end
            lg:gap-20
          "
        >
          {/* LEFT */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -24,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                ease,
              }}
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
                  text-[0.66rem]
                
                  uppercase
                  tracking-[0.28em]
                  text-[#B79A72]
                  sm:text-[0.7rem]
                "
              >
                The Problem
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
              id="performance-problem-heading"
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
                amount: 0.45,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.06,
                ease,
              }}
              className="
                mt-5
                max-w-[760px]
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
              Spending More Doesn’t Automatically Mean{" "}
              <span
                className="
                  font-serif
                  font-normal
                  italic
                  text-[#B79A72]
                "
              >
                Growing More.
              </span>
            </motion.h2>
          </div>

          {/* RIGHT */}

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
              amount: 0.45,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="
              max-w-[560px]
              lg:ml-auto
            "
          >
            <div
              className="
                space-y-1
                text-[0.98rem]
                leading-[1.7]
                text-[#526A82]
              "
            >
              <p>Your ads can generate thousands of impressions.</p>
              <p>They can drive clicks.</p>
              <p>They can even generate leads.</p>
            </div>

            <p
              className="
                mt-5
                border-l-2
                border-[#B67D49]
                pl-5
                text-[0.98rem]
                font-medium
                leading-[1.7]
                text-[#173D62]
              "
            >
              But that does not automatically mean your advertising is
              creating profitable growth.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            AUDIT HEADING
        ===================================================== */}

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
            amount: 0.6,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-4
            sm:mt-20
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#8498AA]
              "
            >
              Performance Efficiency Audit
            </p>

            <h3
              className="
                mt-2
                font-serif
                text-[1.55rem]
                font-medium
                tracking-[-0.025em]
                text-[#0B2A52]
                sm:text-[1.85rem]
              "
            >
              Does this sound{" "}
              <span className="font-normal italic text-[#B79A72]">
                familiar?
              </span>
            </h3>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            

         

            
          </div>
        </motion.div>

        {/* =====================================================
            EXECUTIVE AUDIT BOARD
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 32,
            scale: reduceMotion ? 1 : 0.988,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            mt-8
            overflow-hidden
            rounded-[1.8rem]
            border
            border-[#AFC5D7]
            bg-white/80
            shadow-[0_28px_85px_rgba(11,42,82,0.07)]
            backdrop-blur-xl
          "
        >
          {/* =================================================
              BOARD HEADER
          ================================================= */}

          <div
            className="
              grid
              gap-5
              border-b
              border-[#D8E4ED]
              px-5
              py-5
              sm:px-7
              md:grid-cols-[1fr_auto]
              md:items-center
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-[0.8rem]
                  border
                  border-[#BCD2E3]
                  bg-[#EAF4FC]
                  text-[#0D568E]
                "
              >
                <CircleDollarSign size={19} strokeWidth={1.7} />
              </div>

              <div>
                <p
                  className="
                    text-[0.51rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8A9BAD]
                  "
                >
                  Starting Point
                </p>

                <p
                  className="
                    mt-0.5
                    text-[0.82rem]
                    font-semibold
                    text-[#173D62]
                  "
                >
                  Your advertising investment
                </p>
              </div>
            </div>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              <span
                className="
                  rounded-full
                  border
                  border-[#D3E0E9]
                  bg-[#F8FBFD]
                  px-3
                  py-2
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#6E8396]
                "
              >
                Spend
              </span>

              <ArrowRight
                size={13}
                strokeWidth={1.8}
                className="text-[#B67D49]"
              />

              <span
                className="
                  rounded-full
                  border
                  border-[#D3E0E9]
                  bg-[#F8FBFD]
                  px-3
                  py-2
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#6E8396]
                "
              >
                Performance
              </span>

              <ArrowRight
                size={13}
                strokeWidth={1.8}
                className="text-[#B67D49]"
              />

              <span
                className="
                  rounded-full
                  bg-[#0B2A52]
                  px-3
                  py-2
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white
                "
              >
                Business Action
              </span>
            </div>
          </div>

          {/* =================================================
              TABLE LABELS — DESKTOP
          ================================================= */}

          <div
            className="
              hidden
              grid-cols-[52px_54px_160px_minmax(0,0.95fr)_minmax(0,1.35fr)_90px]
              items-center
              gap-5
              border-b
              border-[#DDE7EE]
              bg-[#F8FBFD]/70
              px-7
              py-3
              lg:grid
            "
          >
            <span />

            <span />

            <span className="audit-label">
              Area
            </span>

            <span className="audit-label">
              What you see
            </span>

            <span className="audit-label">
              What is actually happening
            </span>

            <span className="audit-label text-right">
              Status
            </span>
          </div>

          {/* =================================================
              AUDIT ROWS
          ================================================= */}

          <div>
            {problems.map((problem, index) => (
              <AuditRow
                key={problem.number}
                problem={problem}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              BOARD FOOTER
          ================================================= */}

          <div
            className="
              grid
              gap-5
              border-t
              border-[#B5CBDB]
              bg-gradient-to-r
              from-[#EEF7FD]
              via-white
              to-[#FAF7F3]
              px-5
              py-6
              sm:px-7
              md:grid-cols-[1fr_auto]
              md:items-center
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-[0.8rem]
                  bg-[#0B2A52]
                  text-white
                  shadow-[0_9px_24px_rgba(11,42,82,0.15)]
                "
              >
                <BarChart3 size={18} strokeWidth={1.8} />
              </div>

              <div>
                <p
                  className="
                    text-[0.5rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8799AA]
                  "
                >
                  What should matter
                </p>

                <p
                  className="
                    mt-0.5
                    font-serif
                    text-[1.1rem]
                    font-medium
                    text-[#0B2A52]
                  "
                >
                  Measurable business action.
                </p>
              </div>
            </div>

            <span
              className="
                text-[0.52rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#7B8FA2]
              "
            >
              Outcome over activity
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            REAL PROBLEM
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 32,
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
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[1160px]
            overflow-hidden
            rounded-[1.8rem]
            border
            border-[#A6BED1]
            bg-white/82
            shadow-[0_22px_70px_rgba(11,42,82,0.065)]
            backdrop-blur-xl
            sm:mt-16
          "
        >
          <div
            className="
              grid
              md:grid-cols-[0.72fr_1.28fr]
            "
          >
            {/* FALSE GOALS */}

            <div
              className="
                border-b
                border-[#D9E4ED]
                bg-[#F5F9FC]
                px-6
                py-8
                md:border-b-0
                md:border-r
                md:px-8
                md:py-10
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-8 bg-[#B67D49]" />

                <span
                  className="
                    text-[0.57rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#A86F3E]
                  "
                >
                  The Real Problem
                </span>
              </div>

              <div className="mt-7 space-y-4">
                {falseGoals.map((goal, index) => (
                  <motion.div
                    key={goal}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : -18,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay:
                        reduceMotion
                          ? 0
                          : 0.08 + index * 0.08,
                      ease,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                      border-b
                      border-[#DDE6ED]
                      pb-4
                      last:border-b-0
                      last:pb-0
                    "
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#E4D0BE]
                        bg-[#FFF8F2]
                        text-[#A86F3E]
                      "
                    >
                      <X size={11} strokeWidth={2} />
                    </span>

                    <span
                      className="
                        text-[0.84rem]
                        font-medium
                        text-[#61778C]
                      "
                    >
                      {goal}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* REAL GOAL */}

            <div
              className="
                relative
                flex
                flex-col
                justify-center
                px-6
                py-9
                sm:px-9
                md:px-10
                lg:px-12
              "
            >
              <span
                className="
                  text-[0.53rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#7C91A4]
                "
              >
                What performance should do
              </span>

              <h3
                className="
                  mt-4
                  max-w-[690px]
                  text-[1.65rem]
                  font-medium
                  leading-[1.24]
                  tracking-[-0.035em]
                  text-[#0B2A52]
                  sm:text-[1.9rem]
                  md:text-[2.15rem]
                "
              >
                The goal is turning attention into{" "}
                <span
                  className="
                    font-serif
                    font-normal
                    italic
                    text-[#B67D49]
                  "
                >
                  measurable business action.
                </span>
              </h3>

              <motion.div
                initial={{
                  scaleX: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : 0.25,
                  ease,
                }}
                className="
                  mt-7
                  h-[3px]
                  w-full
                  max-w-[520px]
                  origin-left
                  rounded-full
                  bg-gradient-to-r
                  from-[#0B2A52]
                  via-[#4E87B4]
                  to-[#B67D49]
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   AUDIT ROW
========================================================= */

type Problem = (typeof problems)[number];

function AuditRow({
  problem,
  index,
  reduceMotion,
}: {
  problem: Problem;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon: LucideIcon = problem.icon;

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.article
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
        amount: 0.35,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay:
          reduceMotion
            ? 0
            : index * 0.055,
        ease,
      }}
      className="
        group
        relative
        border-b
        border-[#DDE7EE]
        px-5
        py-5
        transition-colors
        duration-300
        last:border-b-0
        hover:bg-[#F7FBFE]/85
        sm:px-7
      "
    >
      {/* HOVER ACCENT */}

      <span
        className="
          absolute
          bottom-[16%]
          left-0
          top-[16%]
          w-[3px]
          scale-y-0
          rounded-full
          bg-[#176AA6]
          transition-transform
          duration-300
          group-hover:scale-y-100
        "
      />

      {/* DESKTOP */}

      <div
        className="
          hidden
          grid-cols-[52px_54px_160px_minmax(0,0.95fr)_minmax(0,1.35fr)_90px]
          items-center
          gap-5
          lg:grid
        "
      >
        <span
          className="
            font-serif
            text-[0.82rem]
            italic
            text-[#A86F3E]
          "
        >
          {problem.number}
        </span>

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-[0.75rem]
            border
            border-[#D2E0EA]
            bg-[#EDF5FB]
            text-[#0D568E]
            transition-all
            duration-300
            group-hover:border-[#8FB5D1]
            group-hover:bg-[#0D568E]
            group-hover:text-white
          "
        >
          <Icon size={17} strokeWidth={1.75} />
        </div>

        <span
          className="
            text-[0.5rem]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#7C91A4]
          "
        >
          {problem.tag}
        </span>

        <h4
          className="
            text-[0.96rem]
            font-semibold
            leading-[1.4]
            tracking-[-0.015em]
            text-[#12395E]
          "
        >
          {problem.eyebrow}
        </h4>

        <p
          className="
            text-[0.84rem]
            leading-[1.6]
            text-[#5A7188]
          "
        >
          {problem.description}
        </p>

        <div
          className="
            flex
            items-center
            justify-end
            gap-2
          "
        >
          <span
            className="
              text-[0.48rem]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#A1714B]
            "
          >
            Gap
          </span>

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              border
              border-[#E4D2C2]
              bg-[#FFF8F2]
              text-[#A86F3E]
            "
          >
            <X size={11} strokeWidth={2} />
          </span>
        </div>
      </div>

      {/* MOBILE / TABLET */}

      <div className="lg:hidden">
        <div
          className="
            flex
            items-start
            gap-4
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-[0.8rem]
              border
              border-[#D2E0EA]
              bg-[#EDF5FB]
              text-[#0D568E]
            "
          >
            <Icon size={18} strokeWidth={1.75} />
          </div>

          <div className="min-w-0 flex-1">
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              <span
                className="
                  font-serif
                  text-[0.75rem]
                  italic
                  text-[#A86F3E]
                "
              >
                {problem.number}
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-[#DDE6ED]
                  bg-[#F9FBFD]
                  px-2.5
                  py-1
                  text-[0.47rem]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#7D92A5]
                "
              >
                {problem.tag}
              </span>
            </div>

            <h4
              className="
                mt-3
                text-[1rem]
                font-semibold
                leading-[1.4]
                text-[#12395E]
              "
            >
              {problem.eyebrow}
            </h4>

            <p
              className="
                mt-2
                text-[0.86rem]
                leading-[1.65]
                text-[#5A7188]
              "
            >
              {problem.description}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}