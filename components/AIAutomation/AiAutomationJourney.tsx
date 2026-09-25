"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  GitBranch,
  RefreshCw,
  ScanSearch,
  Send,
  UserRoundCheck,
  Zap,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type JourneyStep = {
  number: string;
  stage: string;
  title: string;
  description?: string;
  examples?: string[];
  icon: LucideIcon;
};

const steps: JourneyStep[] = [
  {
    number: "01",
    stage: "TRIGGER",
    title: "Something Happens",
    examples: [
      "A form is submitted.",
      "A customer sends a message.",
      "A document arrives.",
      "A CRM record changes.",
      "A deadline approaches.",
    ],
    icon: Zap,
  },
  {
    number: "02",
    stage: "UNDERSTAND",
    title: "Interpret What Happened",
    description:
      "The workflow identifies relevant information and determines what type of request, task or event occurred.",
    icon: ScanSearch,
  },
  {
    number: "03",
    stage: "DECIDE",
    title: "Apply the Right Logic",
    description:
      "Rules, business context or AI classification determine what should happen next.",
    icon: GitBranch,
  },
  {
    number: "04",
    stage: "ACT",
    title: "Move the Process Forward",
    description:
      "The system sends, updates, creates, records, assigns or generates the required action.",
    icon: Send,
  },
  {
    number: "05",
    stage: "REVIEW",
    title: "Bring in a Human When Needed",
    description:
      "High-value, sensitive or uncertain situations can be routed to the right person.",
    icon: UserRoundCheck,
  },
  {
    number: "06",
    stage: "LEARN",
    title: "See Where the Process Can Improve",
    description:
      "Workflow performance and exceptions reveal opportunities for refinement.",
    icon: RefreshCw,
  },
];

/* =========================================================
   DESKTOP STEP
========================================================= */

function DesktopStep({
  step,
  index,
  reduceMotion,
}: {
  step: JourneyStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const isTop = index % 2 === 0;

  return (
    <div className="relative h-[700px]">
      {/* =====================================================
          CARD
      ===================================================== */}

      <motion.article
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: isTop ? -24 : 24,
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
          duration: reduceMotion ? 0 : 0.62,
          delay: reduceMotion ? 0 : index * 0.055,
          ease,
        }}
        className={`
          absolute
          left-0
          right-0
          z-20
          flex
          h-[300px]
          flex-col
          rounded-[28px]
          border
          border-[#D5E3ED]
          bg-white
          p-5
          shadow-[0_14px_36px_rgba(11,42,82,0.045)]

          xl:p-6

          ${isTop ? "top-0" : "bottom-0"}
        `}
      >
        {/* TOP ROW */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          

          <div
            className="
              flex
              h-[48px]
              w-[48px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#D5E3ED]
              bg-[#F4F8FB]
              text-[#0B2A52]
            "
          >
            <Icon
              size={19}
              strokeWidth={1.45}
            />
          </div>
        </div>

        {/* STAGE */}

        <span
          style={newYorkFont}
          className="
            mt-5
            text-[7px]
            uppercase
            tracking-[0.31em]
            text-[#B18458]
          "
        >
          {step.stage}
        </span>

        {/* TITLE */}

        <h3
          style={newYorkFont}
          className="
            mt-2
            max-w-[185px]
            text-[1.35rem]
            font-light
            leading-[1.05]
            tracking-[-0.04em]
            text-[#0B2A52]
          "
        >
          {step.title}
        </h3>

        {/* DESCRIPTION */}

        {step.description && (
          <p
            style={newYorkFont}
            className="
              mt-4
              text-[10.5px]
              leading-[1.55]
              text-[#506A82]
            "
          >
            {step.description}
          </p>
        )}

        {/* TRIGGER ITEMS */}

        {step.examples && (
          <div
            className="
              mt-4
              border-t
              border-[#0B2A52]/10
              pt-3
            "
          >
            <div className="space-y-[6px]">
              {step.examples.map((example) => (
                <div
                  key={example}
                  className="
                    flex
                    items-start
                    gap-2.5
                  "
                >
                  <span
                    className="
                      mt-[5px]
                      h-[4px]
                      w-[4px]
                      shrink-0
                      rounded-full
                      bg-[#B18458]
                    "
                  />

                  <span
                    style={newYorkFont}
                    className="
                      text-[9.5px]
                      leading-[1.3]
                      text-[#506A82]
                    "
                  >
                    {example}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.article>

      {/* =====================================================
          VERTICAL CONNECTION

          card = 300px
          centre = 350px
          connector = exactly 50px
      ===================================================== */}

      <motion.span
        initial={{
          scaleY: reduceMotion ? 1 : 0,
        }}
        whileInView={{
          scaleY: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.5,
          delay: reduceMotion ? 0 : 0.12 + index * 0.05,
          ease,
        }}
        className={`
          absolute
          left-1/2
          z-[5]
          h-[50px]
          w-px
          -translate-x-1/2
          origin-center
          bg-[#C6A77A]

          ${
            isTop
              ? "top-[300px]"
              : "bottom-[300px]"
          }
        `}
      />

      {/* =====================================================
          CENTER NODE
      ===================================================== */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.65,
              }
        }
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.45,
          delay: reduceMotion ? 0 : 0.18 + index * 0.05,
          ease,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-30
          flex
          h-[14px]
          w-[14px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-white
          bg-[#B18458]
          shadow-[0_0_0_1px_rgba(177,132,88,0.42)]
        "
      />
    </div>
  );
}

/* =========================================================
   MOBILE STEP
========================================================= */

function MobileStep({
  step,
  index,
  reduceMotion,
}: {
  step: JourneyStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
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
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.16),
        ease,
      }}
      className="
        relative
        grid
        grid-cols-[54px_1fr]
        gap-5
      "
    >
      {/* TIMELINE */}

      <div className="relative flex justify-center">
        {index < steps.length - 1 && (
          <span
            className="
              absolute
              bottom-[-30px]
              top-[50px]
              w-px
              bg-[#D8E4EC]
            "
          />
        )}

        <div
          className="
            relative
            z-10
            flex
            h-[48px]
            w-[48px]
            items-center
            justify-center
            rounded-full
            border
            border-[#D5E3ED]
            bg-[#F4F8FB]
            text-[#0B2A52]
          "
        >
          <Icon
            size={18}
            strokeWidth={1.45}
          />
        </div>
      </div>

      {/* CONTENT */}

      <div
        className="
          border-b
          border-[#0B2A52]/10
          pb-8
        "
      >
        <div className="flex items-center gap-4">
         
      

          <span
            style={newYorkFont}
            className="
              text-[7px]
              uppercase
              tracking-[0.28em]
              text-[#0B2A52]/50
            "
          >
            {step.stage}
          </span>
        </div>

        <h3
          style={newYorkFont}
          className="
            mt-3
            text-[1.3rem]
            font-light
            leading-[1.1]
            tracking-[-0.035em]
            text-[#0B2A52]
          "
        >
          {step.title}
        </h3>

        {step.description && (
          <p
            style={newYorkFont}
            className="
              mt-3
              text-[12px]
              leading-[1.6]
              text-[#506A82]
            "
          >
            {step.description}
          </p>
        )}

        {step.examples && (
          <div className="mt-4 space-y-2">
            {step.examples.map((example) => (
              <div
                key={example}
                className="
                  flex
                  items-start
                  gap-2.5
                "
              >
                <span
                  className="
                    mt-[6px]
                    h-[4px]
                    w-[4px]
                    shrink-0
                    rounded-full
                    bg-[#B18458]
                  "
                />

                <span
                  style={newYorkFont}
                  className="
                    text-[11px]
                    leading-[1.45]
                    text-[#506A82]
                  "
                >
                  {example}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AiAutomationJourney() {
  const reduceMotion = Boolean(useReducedMotion());

  const arrowPositions = [
    "16.666%",
    "33.333%",
    "50%",
    "66.666%",
    "83.333%",
  ];

  return (
    <section
      id="automation-journey"
      aria-labelledby="automation-journey-heading"
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
          mx-auto
          w-full
          max-w-[1480px]
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
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            mx-auto
            max-w-[960px]
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
            <span className="h-px w-10 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-[#B18458]
                sm:text-[10px]
              "
            >
              How a Smart Workflow Works
            </span>

            <span className="h-px w-10 bg-[#C6A77A]" />
          </div>

          <h2
            id="automation-journey-heading"
            style={newYorkFont}
            className="
              mt-6
              text-[2.1rem]
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
            From Trigger to{" "}
            <span className="text-[#B18458]">
              Completed Action.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[670px]
              text-[15px]
              leading-[1.65]
              text-[#4F6982]
              sm:text-[16px]
            "
          >
            A useful automation should make the process easier to understand,
            not more complicated.
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
            max-w-[1360px]
            lg:block
          "
        >
          {/* =================================================
              EXACT CENTER TRACK
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-[3%]
              right-[3%]
              top-[350px]
              z-0
              h-px
              bg-[#D5E2EB]
            "
          >
            <motion.span
              initial={{
                scaleX: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.15,
                ease,
              }}
              className="
                absolute
                inset-0
                origin-left
                bg-[linear-gradient(90deg,#C6A77A_0%,#9ABDD4_50%,#C6A77A_100%)]
              "
            />
          </div>

          {/* =================================================
              STEP COLUMNS
          ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-6
              gap-4
              xl:gap-5
            "
          >
            {steps.map((step, index) => (
              <DesktopStep
                key={step.number}
                step={step}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              DIRECTION ARROWS
          ================================================= */}

          {arrowPositions.map((position, index) => (
            <motion.div
              key={position}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.7,
                    }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion
                  ? 0
                  : 0.35 + index * 0.07,
                ease,
              }}
              style={{
                left: position,
              }}
              className="
                pointer-events-none
                absolute
                top-[350px]
                z-40
                flex
                h-[30px]
                w-[30px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#C9DCE8]
                bg-white
                text-[#0B2A52]
                shadow-[0_5px_15px_rgba(11,42,82,0.07)]
              "
            >
              <ArrowRight
                size={12}
                strokeWidth={1.6}
              />
            </motion.div>
          ))}

          {/* =================================================
              START LABEL
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-[350px]
              z-30
              -translate-y-1/2
            "
          >
            <div
              className="
                flex
                h-[40px]
                w-[40px]
                -translate-x-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#D5C2A8]
                bg-white
                text-[#B18458]
                shadow-[0_7px_18px_rgba(11,42,82,0.05)]
              "
            >
              <Zap
                size={15}
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* =================================================
              END
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-[350px]
              z-30
              -translate-y-1/2
            "
          >
            <div
              className="
                flex
                h-[40px]
                w-[40px]
                translate-x-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#C8DCE8]
                bg-white
                text-[#0B2A52]
                shadow-[0_7px_18px_rgba(11,42,82,0.05)]
              "
            >
              <ArrowRight
                size={15}
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* =================================================
              CAPTION
          ================================================= */}

          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-5
            "
          >
            

           
           
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-14
            max-w-[760px]
            space-y-7
            lg:hidden
          "
        >
          {steps.map((step, index) => (
            <MobileStep
              key={step.number}
              step={step}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
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
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[1230px]
            overflow-hidden
            rounded-[34px]
            border
            border-[#D5E3ED]
            bg-[#F3F8FB]
            px-6
            py-9
            sm:px-9
            lg:grid
            lg:grid-cols-[190px_1fr]
            lg:items-center
            lg:gap-12
            lg:px-12
            lg:py-11
          "
        >
          {/* LABEL */}

          <div>
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.32em]
                text-[#B18458]
              "
            >
              THE REAL GOAL
            </span>

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-10 bg-[#C6A77A]" />

              <ArrowRight
                size={14}
                strokeWidth={1.45}
                className="text-[#B18458]"
              />
            </div>
          </div>

          {/* STATEMENT */}

          <div
            className="
              mt-7
              lg:mt-0
              lg:border-l
              lg:border-[#0B2A52]/10
              lg:pl-12
            "
          >
            <h3
              style={newYorkFont}
              className="
                text-[1.7rem]
                font-light
                leading-[1.07]
                tracking-[-0.04em]
                text-[#0B2A52]
                sm:text-[2rem]
                lg:text-[2.2rem]
              "
            >
              Don’t Automate Tasks in Isolation.
            </h3>

            <h3
              style={newYorkFont}
              className="
                mt-3
                text-[1.7rem]
                font-light
                leading-[1.07]
                tracking-[-0.04em]
                text-[#B18458]
                sm:text-[2rem]
                lg:text-[2.2rem]
              "
            >
              Build a Better Flow of Work.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}