"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  BarChart3,
  Layers3,
  Rocket,
  Search,
  SlidersHorizontal,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type ProcessStep = {
  number: string;
  phase: string;
  title: string;
  description: string;
  focus: string;
  icon: LucideIcon;
  tone: "blue" | "sky" | "navy";
};

/* =========================================================
   PROCESS
========================================================= */

const steps: ProcessStep[] = [
  {
    number: "01",
    phase: "DISCOVER",
    title: "Understand the Business",
    description:
      "We learn about your audience, offer, economics, existing campaigns and growth objectives.",
    focus: "Audience · Offer · Economics",
    icon: Search,
    tone: "sky",
  },
  {
    number: "02",
    phase: "DEFINE",
    title: "Choose the Right Goal",
    description:
      "We agree on what the campaigns are expected to achieve and which actions should be measured.",
    focus: "Goals · Actions · Measurement",
    icon: Target,
    tone: "blue",
  },
  {
    number: "03",
    phase: "BUILD",
    title: "Create the Campaign System",
    description:
      "We develop the agreed campaign structure, targeting, tracking requirements and creative direction.",
    focus: "Structure · Targeting · Tracking",
    icon: Layers3,
    tone: "sky",
  },
  {
    number: "04",
    phase: "LAUNCH",
    title: "Put the Strategy Into Market",
    description:
      "Campaigns launch with agreed budgets, audiences, creatives and conversion actions.",
    focus: "Budget · Audience · Creative",
    icon: Rocket,
    tone: "navy",
  },
  {
    number: "05",
    phase: "LEARN",
    title: "See What the Market Tells Us",
    description:
      "We monitor performance and identify meaningful patterns across audiences, campaigns, creative and conversions.",
    focus: "Signals · Patterns · Insight",
    icon: BarChart3,
    tone: "sky",
  },
  {
    number: "06",
    phase: "OPTIMIZE",
    title: "Improve What Matters",
    description:
      "We adjust the areas where evidence suggests performance can improve.",
    focus: "Test · Refine · Improve",
    icon: SlidersHorizontal,
    tone: "blue",
  },
  {
    number: "07",
    phase: "SCALE",
    title: "Grow What Works",
    description:
      "When campaigns demonstrate stronger economics, we evaluate where increased investment or expansion makes sense.",
    focus: "Efficiency · Investment · Growth",
    icon: TrendingUp,
    tone: "navy",
  },
];

/* =========================================================
   MAIN
========================================================= */

export default function PerformanceMarketingProcess() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="performance-process"
      aria-labelledby="performance-process-heading"
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
          PREMIUM BACKGROUND
      ===================================================== */}

    
        

       
      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1420px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="mx-auto max-w-[940px] text-center">
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
                tracking-[0.3em]
                text-[#B79A72]
                sm:text-[0.7rem]
              "
            >
              Your Experience
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
            id="performance-process-heading"
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
              amount: 0.55,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.82,
              delay: reduceMotion ? 0 : 0.05,
              ease,
            }}
            className="
              mt-5
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
            From First Campaign to{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                text-[#B79A72]
              "
            >
              Better Performance.
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
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="
              mx-auto
              mt-6
              max-w-[720px]
              text-[0.98rem]
              leading-[1.75]
              text-[#506981]
              sm:text-[1rem]
            "
          >
            A clear process keeps media spend connected to the business
            objective.
          </motion.p>
        </div>

        {/* =====================================================
            PROCESS BOARD
        ===================================================== */}

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
            amount: 0.12,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.1,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-[1260px]
            overflow-hidden
            rounded-[2rem]
            border
            border-[#B7CCDC]
            bg-white/82
            shadow-[0_28px_90px_rgba(11,42,82,0.075)]
            backdrop-blur-xl

            sm:mt-16
          "
        >
          {/* =================================================
              BOARD HEADER
          ================================================= */}

          <div
            className="
              flex
              flex-col
              gap-5
              border-b
              border-[#D8E4ED]
              px-5
              py-5

              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7

              lg:px-8
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
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
                  rounded-[0.8rem]
                  bg-gradient-to-br
                  from-[#0B2A52]
                  to-[#1763A0]
                  text-white
                  shadow-[0_9px_25px_rgba(11,42,82,0.16)]
                "
              >
                <Sparkles
                  size={18}
                  strokeWidth={1.7}
                />
              </span>

              <div>
                <span
                  className="
                    text-[0.49rem]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#8799A9]
                  "
                >
                  Performance Process
                </span>

                <p
                  className="
                    mt-1
                    text-[0.86rem]
                    font-semibold
                    text-[#173F63]
                  "
                >
                  One connected path from understanding to scalable growth.
                </p>
              </div>
            </div>

            <div
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-[#C9DBE7]
                bg-[#F5FAFD]
                px-4
                py-2
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#39876A]
                "
              />

              <span
                className="
                  text-[0.48rem]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#6E8498]
                "
              >
                Continuous Improvement
              </span>
            </div>
          </div>

          {/* =================================================
              DESKTOP FLOW
          ================================================= */}

          <div
            className="
              relative
              hidden
              px-7
              pb-10
              pt-9
              lg:block
              xl:px-9
            "
          >
            {/* =================================================
                TOP FLOW LINE
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-[8%]
                right-[8%]
                top-[121px]
                h-px
                bg-[#BBD0DF]
              "
            />

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
                duration: reduceMotion ? 0 : 1.15,
                delay: reduceMotion ? 0 : 0.2,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                left-[8%]
                right-[26%]
                top-[120px]
                h-[2px]
                origin-left
                bg-gradient-to-r
                from-[#7DB0D1]
                via-[#2E78AF]
                to-[#0B2A52]
              "
            />

            {/* TOP 4 */}

            <div className="grid grid-cols-4 gap-5">
              {steps.slice(0, 4).map((step, index) => (
                <ProcessStation
                  key={step.number}
                  step={step}
                  index={index}
                  reduceMotion={reduceMotion}
                  direction="down"
                />
              ))}
            </div>

            {/* =================================================
                TURN
            ================================================= */}

            <div
              className="
                relative
                ml-auto
                mr-[11.5%]
                h-[98px]
                w-[52px]
              "
            >
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-[49px]
                  w-px
                  bg-[#B9CEDD]
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  h-[50px]
                  w-[52px]
                  rounded-br-[30px]
                  border-b
                  border-r
                  border-[#B9CEDD]
                "
              />

              <motion.span
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
                  delay: reduceMotion ? 0 : 0.7,
                  ease,
                }}
                className="
                  absolute
                  -bottom-[5px]
                  -left-[3px]
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border-[5px]
                  border-white
                  bg-[#0D568E]
                  text-white
                  shadow-[0_5px_15px_rgba(11,42,82,0.12)]
                "
              >
                <ArrowRight
                  size={9}
                  strokeWidth={2}
                  className="rotate-180"
                />
              </motion.span>
            </div>

            {/* =================================================
                LOWER FLOW
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                grid
                max-w-[900px]
                grid-cols-3
                gap-5
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-[12%]
                  right-[12%]
                  top-[53px]
                  h-px
                  bg-[#BDD1DF]
                "
              />

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
                  duration: reduceMotion ? 0 : 1,
                  delay: reduceMotion ? 0 : 0.75,
                  ease,
                }}
                className="
                  pointer-events-none
                  absolute
                  left-[12%]
                  right-[12%]
                  top-[52px]
                  h-[2px]
                  origin-right
                  bg-gradient-to-l
                  from-[#2C79B2]
                  via-[#4C94C4]
                  to-[#0B2A52]
                "
              />

              {steps
                .slice(4)
                .reverse()
                .map((step, index) => (
                  <ProcessStation
                    key={step.number}
                    step={step}
                    index={index + 4}
                    reduceMotion={reduceMotion}
                    direction="up"
                  />
                ))}
            </div>

            {/* =================================================
                SMALL SYSTEM FOOTER
            ================================================= */}

            <div
              className="
                mx-auto
                mt-9
                flex
                max-w-[820px]
                items-center
                justify-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  flex-1
                  bg-gradient-to-r
                  from-transparent
                  to-[#B9CCD9]
                "
              />

              <p
                className="
                  text-[0.49rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#71889C]
                "
              >
                Every stage informs the next
              </p>

              <span
                className="
                  h-px
                  flex-1
                  bg-gradient-to-l
                  from-transparent
                  to-[#B9CCD9]
                "
              />
            </div>
          </div>

          {/* =================================================
              MOBILE / TABLET PROCESS
          ================================================= */}

          <div
            className="
              px-5
              py-6
              sm:px-7
              lg:hidden
            "
          >
            <div className="relative">
              {/* VERTICAL RAIL */}

              <div
                className="
                  absolute
                  bottom-6
                  left-[23px]
                  top-6
                  w-px
                  bg-[#C7D8E4]
                "
              />

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <MobileProcessStep
                    key={step.number}
                    step={step}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              BOARD BOTTOM
          ================================================= */}

          <div
            className="
              border-t
              border-[#D8E4ED]
              bg-gradient-to-r
              from-[#F0F7FC]
              via-white
              to-[#F2F8FC]
              px-5
              py-5
              sm:px-7
              lg:px-8
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <Target
                  size={15}
                  strokeWidth={1.7}
                  className="text-[#1763A0]"
                />

                <p
                  className="
                    text-[0.7rem]
                    font-medium
                    leading-[1.55]
                    text-[#49677F]
                  "
                >
                  Spend stays connected to the objective from launch through
                  scale.
                </p>
              </div>

              <span
                className="
                  text-[0.48rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#73899D]
                "
              >
                Evidence Before Expansion
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SUPPORTING LINE
        ===================================================== */}

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
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-8
            flex
            max-w-[850px]
            items-center
            justify-center
            gap-4
            text-center
          "
        >
          <span
            className="
              hidden
              h-px
              w-12
              bg-[#B8CBD9]
              sm:block
            "
          />

          <p
            className="
              text-[0.58rem]
              font-semibold
              uppercase
              leading-[1.8]
              tracking-[0.22em]
              text-[#69849A]
            "
          >
            Launch · Measure · Learn · Optimize · Scale
          </p>

          <span
            className="
              hidden
              h-px
              w-12
              bg-[#B8CBD9]
              sm:block
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP STATION
========================================================= */

function ProcessStation({
  step,
  index,
  reduceMotion,
  direction,
}: {
  step: ProcessStep;
  index: number;
  reduceMotion: boolean | null;
  direction: "up" | "down";
}) {
  const Icon = step.icon;
  const theme = getTone(step.tone);
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y:
          reduceMotion
            ? 0
            : direction === "down"
              ? -22
              : 22,
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
        duration: reduceMotion ? 0 : 0.62,
        delay:
          reduceMotion
            ? 0
            : index * 0.065,
        ease,
      }}
      className="
        group
        relative
        z-10
      "
    >
      {/* NODE */}

      <div
        className="
          mx-auto
          flex
          h-[106px]
          w-[106px]
          flex-col
          items-center
          justify-center
          rounded-full
          border-[7px]
          border-white
          bg-white
          text-center
          shadow-[0_11px_30px_rgba(11,42,82,0.09)]
          transition-all
          duration-400
          group-hover:-translate-y-1
          group-hover:shadow-[0_16px_38px_rgba(11,42,82,0.13)]
        "
      >
        <span
          className={`
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            ${theme.icon}
          `}
        >
          <Icon
            size={16}
            strokeWidth={1.7}
          />
        </span>

        <span
          className="
            mt-2
            text-[0.44rem]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#0B2A52]
          "
        >
          {step.phase}
        </span>
      </div>

      {/* BODY */}

      <div
        className={`
          mt-5
          min-h-[225px]
          overflow-hidden
          rounded-[1.15rem]
          border
          p-5
          shadow-[0_10px_28px_rgba(11,42,82,0.035)]
          transition-all
          duration-400
          group-hover:-translate-y-1
          group-hover:shadow-[0_18px_45px_rgba(11,42,82,0.08)]
          ${theme.card}
        `}
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
              font-serif
              text-[0.78rem]
              italic
              text-[#7191A9]
            "
          >
            STEP {step.number}
          </span>

          <span
            className={`
              h-[2px]
              w-8
              ${theme.line}
            `}
          />
        </div>

        <h3
          className="
            mt-5
            font-serif
            text-[1.08rem]
            font-semibold
            leading-[1.25]
            tracking-[-0.025em]
            text-[#0B2A52]
          "
        >
          {step.title}
        </h3>

        <p
          className="
            mt-3
            text-[0.76rem]
            leading-[1.62]
            text-[#597087]
          "
        >
          {step.description}
        </p>

        <div
          className="
            mt-5
            border-t
            border-[#DCE6ED]
            pt-4
          "
        >
          <span
            className="
              text-[0.45rem]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#8A9CAB]
            "
          >
            Focus
          </span>

          <p
            className="
              mt-1
              text-[0.66rem]
              font-semibold
              leading-[1.5]
              text-[#315777]
            "
          >
            {step.focus}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MOBILE STEP
========================================================= */

function MobileProcessStep({
  step,
  index,
  reduceMotion,
}: {
  step: ProcessStep;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = step.icon;
  const theme = getTone(step.tone);

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay:
          reduceMotion
            ? 0
            : index * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        grid
        grid-cols-[48px_1fr]
        gap-4
      "
    >
      <div
        className="
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
          bg-[#EAF4FC]
          text-[#1763A0]
          shadow-[0_6px_18px_rgba(11,42,82,0.08)]
        "
      >
        <Icon
          size={17}
          strokeWidth={1.7}
        />
      </div>

      <div
        className={`
          rounded-[1rem]
          border
          p-5
          ${theme.card}
        `}
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          <span
            className="
              font-serif
              text-[0.7rem]
              italic
              text-[#7191A9]
            "
          >
            STEP {step.number}
          </span>

          <span
            className="
              text-[0.48rem]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#467391]
            "
          >
            {step.phase}
          </span>
        </div>

        <h3
          className="
            mt-3
            font-serif
            text-[1.05rem]
            font-semibold
            text-[#0B2A52]
          "
        >
          {step.title}
        </h3>

        <p
          className="
            mt-2.5
            text-[0.77rem]
            leading-[1.65]
            text-[#597087]
          "
        >
          {step.description}
        </p>

        <p
          className="
            mt-4
            text-[0.62rem]
            font-semibold
            text-[#315777]
          "
        >
          {step.focus}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   THEME
========================================================= */

function getTone(tone: ProcessStep["tone"]) {
  const tones = {
    sky: {
      card:
        "border-[#BCD7E9] bg-gradient-to-br from-[#FBFEFF] via-[#F2F9FD] to-[#EAF5FC]",
      icon:
        "bg-[#DDF0FC] text-[#1763A0]",
      line:
        "bg-[#6DA9D1]",
    },

    blue: {
      card:
        "border-[#B2CFE4] bg-gradient-to-br from-[#FAFDFF] via-[#EFF7FC] to-[#E7F3FB]",
      icon:
        "bg-[#D6EAF9] text-[#0D568E]",
      line:
        "bg-[#387FAF]",
    },

    navy: {
      card:
        "border-[#A8C3D7] bg-gradient-to-br from-[#F8FBFD] via-[#EDF5FA] to-[#E2EFF8]",
      icon:
        "bg-[#0B2A52] text-white",
      line:
        "bg-[#0B2A52]",
    },
  };

  return tones[tone];
}