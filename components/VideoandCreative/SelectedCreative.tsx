"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CheckCircle2,
  FileText,
  MonitorSmartphone,
  Palette,
  Scissors,
  Sparkles,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type WorkflowStep = {
  number: string;
  stage: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "blue" | "gold";
};

const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    stage: "BRIEF",
    title: "Define the Job",
    description:
      "We understand the audience, message, channel and intended outcome.",
    icon: FileText,
    tone: "blue",
  },
  {
    number: "02",
    stage: "DIRECTION",
    title: "Shape the Creative",
    description:
      "We establish the concept, reference points, tone and visual direction.",
    icon: Palette,
    tone: "gold",
  },
  {
    number: "03",
    stage: "GENERATE / GATHER",
    title: "Build the Raw Material",
    description:
      "We create agreed AI assets or organize supplied footage, graphics and supporting media.",
    icon: Sparkles,
    tone: "blue",
  },
  {
    number: "04",
    stage: "EDIT",
    title: "Build the Story",
    description:
      "Everything is shaped into a clear visual sequence using pacing, audio, graphics and narrative decisions.",
    icon: Scissors,
    tone: "gold",
  },
  {
    number: "05",
    stage: "REFINE",
    title: "Make It Feel Finished",
    description:
      "We polish visual consistency, captions, colour, motion and brand details.",
    icon: CheckCircle2,
    tone: "blue",
  },
  {
    number: "06",
    stage: "ADAPT",
    title: "Prepare Each Format",
    description:
      "Approved creative is adapted into the agreed platform sizes, lengths and placements.",
    icon: MonitorSmartphone,
    tone: "gold",
  },
  {
    number: "07",
    stage: "DELIVER",
    title: "Ready to Publish",
    description:
      "Final approved assets are exported in the agreed formats and specifications.",
    icon: BadgeCheck,
    tone: "blue",
  },
];

/* =========================================================
   DESKTOP POSITIONS
========================================================= */

const desktopPositions = [
  {
    left: "2%",
    top: "132px",
    width: "20%",
    align: "top",
  },
  {
    left: "27%",
    top: "82px",
    width: "20%",
    align: "top",
  },
  {
    left: "52%",
    top: "132px",
    width: "20%",
    align: "top",
  },
  {
    left: "77%",
    top: "82px",
    width: "20%",
    align: "top",
  },
  {
    left: "68%",
    top: "445px",
    width: "22%",
    align: "bottom",
  },
  {
    left: "39%",
    top: "492px",
    width: "22%",
    align: "bottom",
  },
  {
    left: "10%",
    top: "445px",
    width: "22%",
    align: "bottom",
  },
] as const;

/* =========================================================
   DESKTOP STEP
========================================================= */

function DesktopStep({
  step,
  index,
  reduceMotion,
}: {
  step: WorkflowStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const isGold = step.tone === "gold";
  const position = desktopPositions[index];
  const isBottom = position.align === "bottom";

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: isBottom ? 25 : -20,
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
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : index * 0.07,
        ease,
      }}
      className="absolute z-20"
      style={{
        left: position.left,
        top: position.top,
        width: position.width,
      }}
    >
      <div
        className={`
          flex
          gap-4

          ${
            isBottom
              ? "flex-col"
              : "flex-col-reverse"
          }
        `}
      >
        {/* CONTENT */}

        <div
          className={`
            ${
              isBottom
                ? "pt-4"
                : "pb-4"
            }
          `}
        >
          <div className="flex items-center gap-3">
            <span
              style={newYorkFont}
              className="
                text-[2.7rem]
                font-light
                leading-none
                tracking-[-0.065em]
                text-[#0B2A52]/10
              "
            >
              {step.number}
            </span>

            <div>
              <span
                className={`
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.23em]

                  ${
                    isGold
                      ? "text-[#A97C52]"
                      : "text-[#4D7DA8]"
                  }
                `}
              >
                {step.stage}
              </span>

              <h3
                style={newYorkFont}
                className="
                  mt-1
                  max-w-[230px]
                  text-[1.25rem]
                  font-light
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#0B2A52]
                "
              >
                {step.title}
              </h3>
            </div>
          </div>

          <p
            style={newYorkFont}
            className="
              mt-4
              max-w-[260px]
              text-[0.74rem]
              leading-[1.55]
              text-[#526D84]
            "
          >
            {step.description}
          </p>

          <span
            className={`
              mt-5
              block
              h-px
              w-9

              ${
                isGold
                  ? "bg-[#B79A72]"
                  : "bg-[#709DC4]"
              }
            `}
          />
        </div>

        {/* NODE */}

        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.08,
                  rotate: 4,
                }
          }
          className={`
            relative
            flex
            h-[72px]
            w-[72px]
            items-center
            justify-center
            rounded-full
            border-[6px]
            border-white
            shadow-[0_14px_32px_rgba(11,42,82,0.12)]

            ${
              isGold
                ? "bg-[#F3E7D8]"
                : "bg-[#E6F1F9]"
            }
          `}
        >
          <span
            className={`
              absolute
              inset-[5px]
              rounded-full
              border

              ${
                isGold
                  ? "border-[#D7B98F]"
                  : "border-[#BBD5E8]"
              }
            `}
          />

          <Icon
            size={23}
            strokeWidth={1.45}
            className={`
              relative
              z-10

              ${
                isGold
                  ? "text-[#A97C52]"
                  : "text-[#0B2A52]"
              }
            `}
          />
        </motion.div>
      </div>
    </motion.article>
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
  step: WorkflowStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const isGold = step.tone === "gold";

  return (
    <motion.article
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
        amount: 0.3,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : index * 0.045,
        ease,
      }}
      className="
        relative
        grid
        grid-cols-[64px_1fr]
        gap-5
      "
    >
      {/* LINE */}

      <div className="relative flex justify-center">
        {index < workflowSteps.length - 1 && (
          <span
            className="
              absolute
              bottom-[-32px]
              top-[62px]
              w-px
              bg-[linear-gradient(180deg,#7FA6C8_0%,#D0B07E_100%)]
            "
          />
        )}

        <div
          className={`
            relative
            z-10
            flex
            h-[60px]
            w-[60px]
            items-center
            justify-center
            rounded-full
            border-[4px]
            border-white
            shadow-[0_10px_26px_rgba(11,42,82,0.1)]

            ${
              isGold
                ? "bg-[#F3E7D8]"
                : "bg-[#E6F1F9]"
            }
          `}
        >
          <Icon
            size={20}
            strokeWidth={1.45}
            className={
              isGold
                ? "text-[#A97C52]"
                : "text-[#0B2A52]"
            }
          />
        </div>
      </div>

      {/* CONTENT */}

      <div
        className="
          border-b
          border-[#0B2A52]/[0.08]
          pb-8
        "
      >
        <div className="flex items-center gap-3">
          <span
            style={newYorkFont}
            className="
              text-[2rem]
              font-light
              leading-none
              text-[#0B2A52]/15
            "
          >
            {step.number}
          </span>

          <span
            className={`
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]

              ${
                isGold
                  ? "text-[#A97C52]"
                  : "text-[#4D7DA8]"
              }
            `}
          >
            {step.stage}
          </span>
        </div>

        <h3
          style={newYorkFont}
          className="
            mt-3
            text-[1.35rem]
            font-light
            leading-[1.08]
            tracking-[-0.035em]
            text-[#0B2A52]
          "
        >
          {step.title}
        </h3>

        <p
          style={newYorkFont}
          className="
            mt-3
            max-w-[620px]
            text-[0.82rem]
            leading-[1.6]
            text-[#526D84]
          "
        >
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SharpRaysWorkflow() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="sharp-rays-workflow"
      aria-labelledby="sharp-rays-workflow-heading"
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
        <div
          className="
            absolute
            -left-[320px]
            top-[20%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#EAF3FA]/65
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-[330px]
            bottom-[8%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#F7EEE3]/65
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[43%]
            h-[420px]
            w-[920px]
            -translate-x-1/2
            rounded-full
            bg-[#F1F7FB]/70
            blur-[100px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
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
            lg:grid-cols-[0.7fr_0.3fr]
            lg:items-end
          "
        >
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
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease,
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B79A72]" />

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#B88959]
                  sm:text-[10px]
                "
              >
                Our Approach
              </span>
            </div>

            <h2
              id="sharp-rays-workflow-heading"
              style={newYorkFont}
              className="
                mt-6
                max-w-[1000px]
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
              Brief. Build. Generate.
              <br />
              Edit. Refine.{" "}
              <span className="text-[#B88959]">
                Deliver.
              </span>
            </h2>

            <p
              style={newYorkFont}
              className="
                mt-6
                max-w-[670px]
                text-[14px]
                leading-[1.7]
                text-[#0B2A52]/65
                sm:text-[16px]
              "
            >
              A clear workflow keeps fast production from becoming chaotic
              production.
            </p>
          </motion.div>

          {/* RIGHT EDITORIAL */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 25,
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
              duration: reduceMotion ? 0 : 0.75,
              ease,
            }}
            className="
              hidden
              justify-end
              lg:flex
            "
          >
            <div
              className="
                border-l
                border-[#0B2A52]/15
                pl-6
              "
            >
              {[
                "CLEAR INPUT",
                "CLEAR DIRECTION",
                "CLEAR PRODUCTION",
                "CLEAR DELIVERY",
              ].map((text) => (
                <span
                  key={text}
                  style={newYorkFont}
                  className="
                    block
                    text-[7px]
                    uppercase
                    leading-[2]
                    tracking-[0.25em]
                    text-[#0B2A52]/45
                  "
                >
                  {text}
                </span>
              ))}

              <span className="mt-4 block h-px w-10 bg-[#B79A72]" />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP SERPENTINE ROUTE
        ===================================================== */}

        <div
          className="
            relative
            mt-14
            hidden
            h-[760px]
            xl:block
          "
        >
          {/* GHOST LABEL */}

          <span
            style={newYorkFont}
            className="
              absolute
              left-1/2
              top-[275px]
              -translate-x-1/2
              whitespace-nowrap
              text-[155px]
              font-light
              leading-none
              tracking-[-0.08em]
              text-[#0B2A52]/[0.018]
            "
          >
            WORKFLOW
          </span>

          {/* ROUTE */}

          <svg
            viewBox="0 0 1400 650"
            preserveAspectRatio="none"
            fill="none"
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
            "
          >
            {/* PALE BAND */}

            <path
              d="
                M 80 230
                C 270 100, 440 100, 620 220
                C 805 345, 1000 310, 1235 185
                C 1340 130, 1380 210, 1340 320
                C 1295 445, 1120 520, 900 530
                C 670 540, 450 505, 250 525
                C 165 535, 110 525, 75 500
              "
              stroke="#E7F1F8"
              strokeWidth="72"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />

            {/* BLUE ROUTE */}

            <motion.path
              d="
                M 80 230
                C 270 100, 440 100, 620 220
                C 805 345, 1000 310, 1235 185
                C 1340 130, 1380 210, 1340 320
                C 1295 445, 1120 520, 900 530
                C 670 540, 450 505, 250 525
                C 165 535, 110 525, 75 500
              "
              stroke="#5F94BF"
              strokeWidth="1.3"
              strokeLinecap="round"
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
                duration: reduceMotion ? 0 : 2,
                ease,
              }}
            />

            {/* GOLD COMPANION LINE */}

            <motion.path
              d="
                M 88 246
                C 270 122, 437 121, 610 232
                C 798 353, 1000 330, 1245 200
                C 1320 160, 1350 220, 1316 312
                C 1267 424, 1105 495, 890 508
                C 660 520, 448 485, 235 505
              "
              stroke="#C6A77A"
              strokeWidth="0.8"
              strokeOpacity="0.55"
              strokeLinecap="round"
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
                duration: reduceMotion ? 0 : 2.1,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
            />

            {/* ROUTE DOTS */}

            {[
              [105, 218],
              [385, 143],
              [670, 245],
              [1215, 196],
              [1090, 476],
              [670, 520],
              [220, 514],
            ].map(([cx, cy], index) => (
              <motion.circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="5"
                fill={
                  index % 2 === 0
                    ? "#477EAC"
                    : "#B88959"
                }
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion
                    ? 0
                    : 0.35 + index * 0.08,
                }}
              />
            ))}
          </svg>

          {/* STEPS */}

          {workflowSteps.map((step, index) => (
            <DesktopStep
              key={step.number}
              step={step}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}

          {/* CENTER MESSAGE */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.95,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.35,
              ease,
            }}
            className="
              absolute
              left-1/2
              top-[330px]
              z-10
              w-[300px]
              -translate-x-1/2
              text-center
            "
          >
            <span
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#A97C52]
              "
            >
              ONE CONNECTED PROCESS
            </span>

            <p
              style={newYorkFont}
              className="
                mt-3
                text-[1.8rem]
                font-light
                italic
                leading-[1.02]
                tracking-[-0.04em]
                text-[#0B2A52]
              "
            >
              Fast production.
              <br />
              Clear decisions.
            </p>

            <span className="mx-auto mt-5 block h-px w-10 bg-[#B79A72]" />
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-14
            max-w-[820px]
            space-y-8
            xl:hidden
          "
        >
          {workflowSteps.map((step, index) => (
            <MobileStep
              key={step.number}
              step={step}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            FINAL BAND
        ===================================================== */}

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
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-[1260px]
            overflow-hidden
            rounded-[28px]
            border
            border-[#0B2A52]/10
            bg-[linear-gradient(100deg,#F5F9FC_0%,#FFFFFF_48%,#FCF6EE_100%)]
            px-6
            py-8
            sm:px-8
            lg:grid
            lg:grid-cols-[0.37fr_0.63fr]
            lg:items-center
            lg:gap-10
            lg:px-10
          "
        >
          {/* BACKGROUND CIRCLE */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[140px]
              -right-[100px]
              h-[320px]
              w-[320px]
              rounded-full
              border-[42px]
              border-[#E4EEF6]/70
            "
          />

          {/* LEFT */}

          <div className="relative z-10">
            <span
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#B88959]
              "
            >
              THE SHARP RAYS WORKFLOW
            </span>

            <h3
              style={newYorkFont}
              className="
                mt-3
                text-[1.8rem]
                font-light
                leading-[1.05]
                tracking-[-0.04em]
                text-[#0B2A52]
              "
            >
              Seven stages.
              <br />
              One clear path.
            </h3>
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              z-10
              mt-7
              lg:mt-0
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-3
              "
            >
              {workflowSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    style={newYorkFont}
                    className="
                      text-[7px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-[#0B2A52]/55
                    "
                  >
                    {step.stage}
                  </span>

                  {index < workflowSteps.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-[#B88959]" />
                  )}
                </div>
              ))}
            </div>

            <p
              style={newYorkFont}
              className="
                mt-5
                max-w-[680px]
                text-[0.85rem]
                leading-[1.65]
                text-[#526D84]
              "
            >
              From the first brief to final delivery, each stage has a clear
              purpose so faster production stays structured, intentional and
              ready for the channels where the creative needs to work.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mt-8
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-4">
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.23em]
                text-[#0B2A52]/45
              "
            >
              Sharp Rays
            </span>

            <span className="text-[7px] text-[#0B2A52]/25">
              /
            </span>

            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.23em]
                text-[#0B2A52]/45
              "
            >
              AI Video Workflow
            </span>

            <span className="h-px w-10 bg-[#B88959]" />
          </div>

          <span
            style={newYorkFont}
            className="
              text-[7px]
              uppercase
              tracking-[0.21em]
              text-[#0B2A52]/40
            "
          >
            Brief · Direction · Generate · Edit · Refine · Adapt · Deliver
          </span>
        </motion.div>
      </div>
    </section>
  );
}