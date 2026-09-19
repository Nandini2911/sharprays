"use client";

import type { ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Clock3,
  Heart,
  MousePointer,
  Play,
  Repeat2,
  Target,
  TrendingDown,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type PerformanceItem = {
  number: string;
  stage: string;
  title: string;
  description: string;
  icon: ElementType;
  tone: "blue" | "gold";
};

const steps: PerformanceItem[] = [
  {
    number: "01",
    stage: "HOOK PERFORMANCE",
    title: "Earn the First Seconds",
    description:
      "Does the beginning earn enough attention to keep people watching?",
    icon: Play,
    tone: "blue",
  },
  {
    number: "02",
    stage: "WATCH TIME",
    title: "Measure Attention",
    description: "How long are viewers staying?",
    icon: Clock3,
    tone: "gold",
  },
  {
    number: "03",
    stage: "COMPLETION RATE",
    title: "See Who Stays",
    description:
      "How many people reach the later parts of the video?",
    icon: BarChart3,
    tone: "blue",
  },
  {
    number: "04",
    stage: "ENGAGEMENT",
    title: "Measure Interaction",
    description:
      "Does the content create meaningful interaction?",
    icon: Heart,
    tone: "gold",
  },
  {
    number: "05",
    stage: "CLICK-THROUGH RATE",
    title: "Create the Next Step",
    description:
      "Does it encourage people to take the next step?",
    icon: MousePointer,
    tone: "blue",
  },
  {
    number: "06",
    stage: "CONVERSION RATE",
    title: "Measure the Intended Action",
    description:
      "Does the video contribute to the intended action?",
    icon: Target,
    tone: "gold",
  },
  {
    number: "07",
    stage: "CREATIVE FATIGUE",
    title: "Watch for Declining Performance",
    description:
      "Is performance declining as the audience repeatedly sees the same asset?",
    icon: TrendingDown,
    tone: "blue",
  },
  {
    number: "08",
    stage: "PRODUCTION EFFICIENCY",
    title: "Get More From Strong Ideas",
    description:
      "Can strong ideas be adapted into more useful outputs without sacrificing quality?",
    icon: Repeat2,
    tone: "gold",
  },
];

export default function VideoPerformance() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);

  return (
    <section
      id="video-performance"
      aria-labelledby="video-performance-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
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
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            mx-auto
            max-w-[1050px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-5
            "
          >
            <span className="h-px w-14 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.34em]
                text-[#0B2A52]/65
                sm:text-[10px]
              "
            >
              What Happens After Publish
            </span>

            <span className="h-px w-14 bg-[#C6A77A]" />
          </div>

          <h2
            id="video-performance-heading"
            style={newYorkFont}
            className="
              mt-7
              font-light
              leading-[0.98]
              tracking-[-0.05em]
              text-[#0B2A52]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            A Good Edit Should Have a Job.
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[730px]
              text-[14px]
              leading-[1.7]
              text-[#0B2A52]/62
              sm:text-[15px]
            "
          >
            The best metric depends on what the video was designed to
            accomplish.
          </p>

          {/* SUPPORTING LINE */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-2
            "
          >
            {[
              "HOOK",
              "WATCH",
              "ENGAGE",
              "CONVERT",
              "IMPROVE",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5"
              >
                <span
                  style={newYorkFont}
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                    text-[#0B2A52]/58
                  "
                >
                  {item}
                </span>

                {index < 4 && (
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#0B2A52]/45
                    "
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            DESKTOP WAVE PROCESS
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-8
            hidden
            h-[570px]
            max-w-[1320px]
            xl:block
          "
        >
          {/* =================================================
              WAVE PATH
          ================================================= */}

          <svg
            viewBox="0 0 1600 400"
            preserveAspectRatio="none"
            className="
              pointer-events-none
              absolute
              left-0
              top-[48px]
              h-[315px]
              w-full
              overflow-visible
            "
            aria-hidden="true"
          >
            {/* SOFT OUTER PATH */}

            <motion.path
              d="
                M 100 130
                C 185 130, 215 260, 300 260
                S 415 130, 500 130
                S 615 260, 700 260
                S 815 130, 900 130
                S 1015 260, 1100 260
                S 1215 130, 1300 130
                S 1415 260, 1500 260
              "
              fill="none"
              stroke="#E9DCC8"
              strokeWidth="18"
              strokeLinecap="round"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 2,
                ease,
              }}
            />

            {/* INNER GOLD LINE */}

            <motion.path
              d="
                M 100 130
                C 185 130, 215 260, 300 260
                S 415 130, 500 130
                S 615 260, 700 260
                S 815 130, 900 130
                S 1015 260, 1100 260
                S 1215 130, 1300 130
                S 1415 260, 1500 260
              "
              fill="none"
              stroke="#C6A77A"
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
                duration: reduceMotion ? 0 : 2.1,
                ease,
              }}
            />

            {/* SMALL NAVY SECTIONS */}

            <motion.path
              d="
                M 355 230
                C 400 200, 420 130, 500 130
              "
              fill="none"
              stroke="#0B2A52"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.8,
                ease,
              }}
            />

            <motion.path
              d="
                M 755 230
                C 800 200, 820 130, 900 130
              "
              fill="none"
              stroke="#0B2A52"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 1,
                ease,
              }}
            />

            <motion.path
              d="
                M 1155 230
                C 1200 200, 1220 130, 1300 130
              "
              fill="none"
              stroke="#0B2A52"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 1.2,
                ease,
              }}
            />
          </svg>

          {/* =================================================
              PATH NODES
          ================================================= */}

          {[
            { left: "12.5%", top: "191px", color: "#C98F3E" },
            { left: "25%", top: "293px", color: "#9B6C2E" },
            { left: "37.5%", top: "191px", color: "#C98F3E" },
            { left: "50%", top: "293px", color: "#0B2A52" },
            { left: "62.5%", top: "191px", color: "#9B6C2E" },
            { left: "75%", top: "293px", color: "#D4A66C" },
            { left: "87.5%", top: "191px", color: "#8B602D" },
          ].map((node, index) => (
            <motion.span
              key={`${node.left}-${index}`}
              initial={{
                scale: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion
                  ? 0
                  : 0.6 + index * 0.1,
                ease,
              }}
              className="
                absolute
                z-[5]
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                ring-4
                ring-white
              "
              style={{
                left: node.left,
                top: node.top,
                backgroundColor: node.color,
              }}
            />
          ))}

          {/* =================================================
              PERFORMANCE ITEMS
          ================================================= */}

          {steps.map((step, index) => (
            <DesktopStep
              key={step.number}
              step={step}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            MOBILE + TABLET
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-[760px]
            xl:hidden
          "
        >
          {/* VERTICAL GUIDE */}

          <div
            className="
              absolute
              bottom-8
              left-[31px]
              top-8
              w-px
              bg-[linear-gradient(180deg,transparent,#C6A77A_8%,#C6A77A_92%,transparent)]
              sm:left-[37px]
            "
          />

          <div className="space-y-3">
            {steps.map((step, index) => (
              <MobileStep
                key={step.number}
                step={step}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM PREMIUM STRIP
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
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-12
            max-w-[1320px]
            overflow-hidden
            rounded-[22px]
            bg-[linear-gradient(100deg,#0B2A52_0%,#123F70_58%,#E8F1F8_100%)]
            px-6
            py-8
            sm:px-8
            lg:px-10
          "
        >
          {/* SOFT ARC */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[130px]
              -top-[210px]
              h-[360px]
              w-[360px]
              rounded-full
              border-[42px]
              border-white/[0.05]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-[26%]
              top-1/2
              hidden
              h-[430px]
              w-[430px]
              -translate-y-1/2
              rounded-full
              border
              border-[#C6A77A]/28
              lg:block
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-7
              text-center
              lg:grid-cols-[0.28fr_0.44fr_0.28fr]
              lg:items-center
              lg:text-left
            "
          >
            {/* LEFT */}

            <div
              className="
                lg:border-r
                lg:border-white/25
                lg:pr-8
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  leading-[1.9]
                  tracking-[0.28em]
                  text-white/70
                "
              >
                THE REAL
                <br />
                QUESTION
                <br />
                AFTER PUBLISH
              </span>
            </div>

            {/* CENTER */}

            <div className="lg:px-8 lg:text-center">
              <p
                style={newYorkFont}
                className="
                  text-[25px]
                  font-light
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-white
                  sm:text-[28px]
                "
              >
                Did the video earn
                <br />
                the outcome it was created for?
              </p>
            </div>

            {/* RIGHT */}

            <div
              className="
                lg:border-l
                lg:border-white/25
                lg:pl-8
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  leading-[1.9]
                  tracking-[0.28em]
                  text-[#0B2A52]/70
                "
              >
                ATTENTION
                <br />
                ACTION
                <br />
                OUTCOME
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP ITEM
========================================================= */

function DesktopStep({
  step,
  index,
  reduceMotion,
}: {
  step: PerformanceItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const isUpper = index % 2 === 0;
  const isBlue = step.tone === "blue";

  const left = `${6.25 + index * 12.5}%`;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reduceMotion
          ? 0
          : isUpper
            ? -24
            : 24,
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
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.07,
        ease,
      }}
      className="
        absolute
        z-10
        w-[145px]
        -translate-x-1/2
        2xl:w-[155px]
      "
      style={{
        left,
        top: isUpper ? "4px" : "148px",
      }}
    >
      {/* NUMBER */}

      <div className="text-center">
        <span
          style={newYorkFont}
          className={`
            block
            text-[31px]
            font-light
            leading-none
            tracking-[-0.055em]

            ${
              isBlue
                ? "text-[#0B2A52]"
                : "text-[#A57437]"
            }
          `}
        >
          {step.number}
        </span>

        <span
          style={newYorkFont}
          className={`
            mt-2
            block
            text-[7px]
            uppercase
            tracking-[0.18em]

            ${
              isBlue
                ? "text-[#0B2A52]"
                : "text-[#A57437]"
            }
          `}
        >
          {step.stage}
        </span>
      </div>

      {/* ICON */}

      <div
        className="
          relative
          mx-auto
          mt-4
          flex
          h-[78px]
          w-[78px]
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-[0_12px_35px_rgba(11,42,82,0.08)]
        "
      >
        <div
          className={`
            flex
            h-[62px]
            w-[62px]
            items-center
            justify-center
            rounded-full
            border

            ${
              isBlue
                ? `
                  border-[#C9DDEA]
                  bg-[#EAF3FA]
                  text-[#0B2A52]
                `
                : `
                  border-[#E7D5B9]
                  bg-[#FBF2E6]
                  text-[#91662F]
                `
            }
          `}
        >
          <Icon
            size={27}
            strokeWidth={1.45}
          />
        </div>
      </div>

      {/* VERTICAL GUIDE */}

      <div
        className="
          mx-auto
          h-6
          w-px
          bg-[#0B2A52]/12
        "
      />

      {/* COPY */}

      <div
        className="
          border-l
          border-[#0B2A52]/12
          pl-3
        "
      >
        <h3
          style={newYorkFont}
          className="
            text-[17px]
            font-light
            leading-[1.08]
            tracking-[-0.03em]
            text-[#0B2A52]
          "
        >
          {step.title}
        </h3>

        <p
          style={newYorkFont}
          className="
            mt-3
            text-[10.5px]
            leading-[1.55]
            text-[#0B2A52]/58
          "
        >
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MOBILE ITEM
========================================================= */

function MobileStep({
  step,
  index,
  reduceMotion,
}: {
  step: PerformanceItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const isBlue = step.tone === "blue";

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: reduceMotion
          ? 0
          : index % 2 === 0
            ? -20
            : 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.45,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        ease,
      }}
      className="
        relative
        grid
        grid-cols-[64px_1fr]
        gap-5
        py-5
        sm:grid-cols-[76px_1fr]
      "
    >
      {/* ICON */}

      <div
        className="
          relative
          z-10
          flex
          h-[64px]
          w-[64px]
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-[0_10px_30px_rgba(11,42,82,0.07)]
          sm:h-[74px]
          sm:w-[74px]
        "
      >
        <div
          className={`
            flex
            h-[50px]
            w-[50px]
            items-center
            justify-center
            rounded-full
            border
            sm:h-[58px]
            sm:w-[58px]

            ${
              isBlue
                ? `
                  border-[#C9DDEA]
                  bg-[#EAF3FA]
                  text-[#0B2A52]
                `
                : `
                  border-[#E7D5B9]
                  bg-[#FBF2E6]
                  text-[#91662F]
                `
            }
          `}
        >
          <Icon
            size={23}
            strokeWidth={1.45}
          />
        </div>
      </div>

      {/* CONTENT */}

      <div
        className="
          border-b
          border-[#0B2A52]/10
          pb-5
        "
      >
        <div className="flex items-center gap-3">
          <span
            style={newYorkFont}
            className={`
              text-[22px]
              font-light
              tracking-[-0.04em]

              ${
                isBlue
                  ? "text-[#0B2A52]"
                  : "text-[#A57437]"
              }
            `}
          >
            {step.number}
          </span>

          <span
            style={newYorkFont}
            className="
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-[#0B2A52]/42
            "
          >
            {step.stage}
          </span>
        </div>

        <h3
          style={newYorkFont}
          className="
            mt-3
            text-[20px]
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
            mt-3
            max-w-[520px]
            text-[12px]
            leading-[1.7]
            text-[#0B2A52]/58
          "
        >
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}