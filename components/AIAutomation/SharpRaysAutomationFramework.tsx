"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Filter,
  GitBranch,
  Link2,
  Map,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type FrameworkStep = {
  number: string;
  stage: string;
  title: string;
  description: string;
  focus: string;
  icon: LucideIcon;
};

const steps: FrameworkStep[] = [
  {
    number: "01",
    stage: "MAP",
    title: "See the Current Process",
    description:
      "Document the people, systems, triggers, decisions and handoffs involved.",
    focus: "Tasks · Systems · Bottlenecks",
    icon: Map,
  },
  {
    number: "02",
    stage: "SIMPLIFY",
    title: "Remove What Doesn’t Need to Exist",
    description:
      "A bad process should not be automated before it is improved.",
    focus: "Friction · Duplication · Clarity",
    icon: Filter,
  },
  {
    number: "03",
    stage: "DESIGN",
    title: "Decide What Should Happen",
    description:
      "Define triggers, logic, actions, exceptions and human checkpoints.",
    focus: "Rules · Decisions · Outcomes",
    icon: GitBranch,
  },
  {
    number: "04",
    stage: "CONNECT",
    title: "Bring the Systems Together",
    description: "Create the required integrations and data flow.",
    focus: "CRM · APIs · Forms · Tools",
    icon: Link2,
  },
  {
    number: "05",
    stage: "AUTOMATE",
    title: "Put the Workflow Into Motion",
    description: "Build and configure the agreed automation.",
    focus: "Triggers · AI · Actions",
    icon: Zap,
  },
  {
    number: "06",
    stage: "TEST",
    title: "See What Happens When Real Inputs Arrive",
    description:
      "Test expected scenarios, edge cases and failure states.",
    focus: "Accuracy · Reliability · Exceptions",
    icon: BarChart3,
  },
  {
    number: "07",
    stage: "IMPROVE",
    title: "Refine Using Real Use",
    description:
      "Review performance, failures and workflow changes over time.",
    focus: "Efficiency · Quality · Scale",
    icon: TrendingUp,
  },
];

/* =========================================================
   DESKTOP RIBBON STEP
========================================================= */

function RibbonStep({
  step,
  index,
  direction = "right",
  reduceMotion,
}: {
  step: FrameworkStep;
  index: number;
  direction?: "right" | "left";
  reduceMotion: boolean;
}) {
  const Icon = step.icon;

  const clip =
    direction === "right"
      ? "polygon(0 0, 91% 0, 100% 50%, 91% 100%, 0 100%, 8% 50%)"
      : "polygon(9% 0, 100% 0, 92% 50%, 100% 100%, 9% 100%, 0 50%)";

  const strongShade = index === 3 || index === 4;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: direction === "right" ? -26 : 26,
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
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className="
        group
        relative
        h-full
        min-h-[330px]
      "
    >
      {/* =====================================================
          BORDER SHAPE
      ===================================================== */}

      <div
        className={`
          absolute
          inset-0
          transition-colors
          duration-300

          ${
            strongShade
              ? "bg-[#9EBFD5]"
              : "bg-[#C2D7E5]"
          }
        `}
        style={{
          clipPath: clip,
        }}
      />

      {/* =====================================================
          MAIN SHADED PANEL
      ===================================================== */}

      <div
        className={`
          absolute
          inset-[1px]
          flex
          flex-col
          overflow-hidden
          px-8
          py-7

          ${
            strongShade
              ? "bg-[linear-gradient(145deg,#F8FCFF_0%,#EAF4FA_50%,#DDECF6_100%)]"
              : "bg-[linear-gradient(145deg,#FFFFFF_0%,#F4F9FC_52%,#EAF3F9_100%)]"
          }
        `}
        style={{
          clipPath: clip,
        }}
      >
        {/* TOP GLASS LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[15%]
            -top-[40%]
            h-[190px]
            w-[190px]
            rounded-full
            bg-white/80
            blur-[24px]
          "
        />

        {/* BOTTOM BLUE SHADE */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[80px]
            right-[-60px]
            h-[190px]
            w-[190px]
            rounded-full
            bg-[#BDD8EA]/40
            blur-[36px]
          "
        />

        {/* VERY SUBTLE INNER LINE */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[10px]
            border
            border-white/60
          "
          style={{
            clipPath: clip,
          }}
        />

        {/* LARGE NUMBER */}

        <span
          style={newYorkFont}
          className="
            pointer-events-none
            absolute
            -right-3
            -top-8
            text-[8rem]
            font-light
            leading-none
            tracking-[-0.08em]
            text-[#0B2A52]/[0.035]
          "
        >
          {step.number}
        </span>

        {/* ===================================================
            TOP ROW
        =================================================== */}

        <div
          className="
            relative
            z-10
            flex
            items-start
            justify-between
            gap-5
          "
        >
          <div>
            <span
              style={newYorkFont}
              className="
                text-[2rem]
                font-light
                leading-none
                tracking-[-0.05em]
                text-[#A97C52]
              "
            >
              {step.number}
            </span>

            <span
              style={newYorkFont}
              className="
                mt-2
                block
                text-[6px]
                uppercase
                tracking-[0.3em]
                text-[#0B2A52]/45
              "
            >
              Framework Stage
            </span>
          </div>

          <div
            className="
              relative
              flex
              h-[56px]
              w-[56px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#BDD5E5]
              bg-[linear-gradient(145deg,#FFFFFF,#EAF4FA)]
              text-[#0B2A52]
              shadow-[0_10px_24px_rgba(11,42,82,0.08)]
              transition-all
              duration-300

              group-hover:scale-[1.05]
              group-hover:bg-white
            "
          >
            <span
              className="
                absolute
                inset-[5px]
                rounded-full
                border
                border-white
              "
            />

            <Icon
              size={21}
              strokeWidth={1.45}
              className="relative"
            />
          </div>
        </div>

        {/* ===================================================
            STAGE NAME
        =================================================== */}

        <h3
          style={newYorkFont}
          className="
            relative
            z-10
            mt-6
            text-[1.45rem]
            font-light
            leading-none
            tracking-[-0.045em]
            text-[#0B2A52]
          "
        >
          {step.stage}
        </h3>

        {/* ===================================================
            TITLE
        =================================================== */}

        <p
          style={newYorkFont}
          className="
            relative
            z-10
            mt-3
            min-h-[34px]
            text-[7px]
            font-medium
            uppercase
            leading-[1.55]
            tracking-[0.18em]
            text-[#143D68]
          "
        >
          {step.title}
        </p>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <p
          style={newYorkFont}
          className="
            relative
            z-10
            mt-4
            max-w-[270px]
            text-[10.5px]
            leading-[1.55]
            text-[#526B84]
          "
        >
          {step.description}
        </p>

        {/* ===================================================
            FOCUS
        =================================================== */}

        <div
          className="
            relative
            z-10
            mt-auto
            pt-5
          "
        >
          <span
            className="
              mb-3
              block
              h-px
              w-8
              bg-[#B18458]
            "
          />

          <span
            style={newYorkFont}
            className="
              block
              text-[8px]
              font-medium
              text-[#0B2A52]
            "
          >
            Focus:
          </span>

          <p
            style={newYorkFont}
            className="
              mt-1.5
              text-[8.5px]
              leading-[1.4]
              text-[#496781]
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

function MobileStep({
  step,
  index,
  reduceMotion,
}: {
  step: FrameworkStep;
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
        delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.18),
        ease,
      }}
      className="
        grid
        grid-cols-[62px_1fr]
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
              top-[58px]
              w-px
              bg-[linear-gradient(180deg,#9DBFD6,#D6E5EE)]
            "
          />
        )}

        <div
          className="
            relative
            z-10
            flex
            h-[54px]
            w-[54px]
            items-center
            justify-center
            rounded-full
            border
            border-[#BFD5E4]
            bg-[linear-gradient(145deg,#FFFFFF,#EAF4FA)]
            text-[#0B2A52]
            shadow-[0_9px_22px_rgba(11,42,82,0.065)]
          "
        >
          <Icon size={20} strokeWidth={1.45} />

          <span
            style={newYorkFont}
            className="
              absolute
              -right-[5px]
              -top-[5px]
              flex
              h-[22px]
              w-[22px]
              items-center
              justify-center
              rounded-full
              bg-[#A97C52]
              text-[8px]
              text-white
            "
          >
            {step.number}
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[24px]
          border
          border-[#D0E1EB]
          bg-[linear-gradient(145deg,#FFFFFF_0%,#F4F9FC_56%,#EAF3F9_100%)]
          p-5
          shadow-[0_10px_28px_rgba(11,42,82,0.04)]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-[120px]
            w-[120px]
            rounded-full
            bg-white/80
            blur-[22px]
          "
        />

        <span
          style={newYorkFont}
          className="
            relative
            z-10
            text-[7px]
            uppercase
            tracking-[0.3em]
            text-[#A97C52]
          "
        >
          {step.stage}
        </span>

        <h3
          style={newYorkFont}
          className="
            relative
            z-10
            mt-2
            text-[1.35rem]
            font-light
            leading-[1.05]
            tracking-[-0.035em]
            text-[#0B2A52]
          "
        >
          {step.title}
        </h3>

        <p
          style={newYorkFont}
          className="
            relative
            z-10
            mt-3
            text-[11px]
            leading-[1.6]
            text-[#536D85]
          "
        >
          {step.description}
        </p>

        <div
          className="
            relative
            z-10
            mt-4
            rounded-[14px]
            border
            border-white
            bg-white/70
            px-4
            py-3
            shadow-[0_4px_14px_rgba(11,42,82,0.025)]
          "
        >
          <span
            style={newYorkFont}
            className="
              text-[8px]
              font-medium
              text-[#0B2A52]
            "
          >
            Focus:
          </span>

          <span
            style={newYorkFont}
            className="
              ml-2
              text-[9px]
              text-[#526B84]
            "
          >
            {step.focus}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function SharpRaysAutomationFramework() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="sharp-rays-automation-framework"
      aria-labelledby="sharp-rays-framework-heading"
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
      {/* =====================================================
          BACKGROUND SHADING
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[300px]
          h-[1000px]
          w-[1700px]
          -translate-x-1/2
          rounded-[50%]
          bg-[radial-gradient(circle_at_center,#EEF6FB_0%,#F6FAFC_42%,rgba(255,255,255,0)_72%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[280px]
          top-[520px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#DDECF6]/40
          blur-[30px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[300px]
          top-[330px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#EAF3F9]/70
          blur-[30px]
        "
      />

      {/* =====================================================
          WRAPPER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1660px]
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-14
          2xl:px-16
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
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            max-w-[1180px]
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
            <span className="h-px w-12 bg-[#B18458]" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.36em]
                text-[#A97C52]
                sm:text-[10px]
              "
            >
              Our Approach
            </span>

            <span className="h-px w-12 bg-[#B18458]" />
          </div>

          <h2
            id="sharp-rays-framework-heading"
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
            Map. Simplify. Connect. Automate.{" "}
            <span className="text-[#A97C52]">
              Improve.
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-5
              max-w-[780px]
            "
          >
            <p
              style={newYorkFont}
              className="
                text-[13px]
                leading-[1.65]
                text-[#526B84]
                sm:text-[14px]
              "
            >
              We do not begin by asking which AI tool should be installed.
            </p>

            <p
              style={newYorkFont}
              className="
                mt-1
                text-[13px]
                leading-[1.65]
                text-[#526B84]
                sm:text-[14px]
              "
            >
              We begin by understanding how the work currently happens.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            DESKTOP SERPENTINE BOARD
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-20
            hidden
            max-w-[1540px]
            overflow-hidden
            rounded-[42px]
            border
            border-[#CADDE9]
            bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(243,249,252,0.96)_52%,rgba(234,244,250,0.98)_100%)]
            px-8
            pb-10
            pt-8
            shadow-[0_28px_70px_rgba(11,42,82,0.075)]

            xl:block
          "
        >
          {/* BOARD GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              left-[20%]
              top-[-180px]
              h-[420px]
              w-[720px]
              rounded-full
              bg-white
              blur-[90px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-230px]
              right-[5%]
              h-[500px]
              w-[700px]
              rounded-full
              bg-[#CEE3F0]/45
              blur-[90px]
            "
          />

          {/* =================================================
              BOARD HEADER
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              items-center
              justify-between
              gap-8
              border-b
              border-[#0B2A52]/[0.08]
              pb-6
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
                  h-[46px]
                  w-[46px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#BDD5E4]
                  bg-[linear-gradient(145deg,#FFFFFF,#E8F3F9)]
                  text-[#0B2A52]
                  shadow-[0_8px_22px_rgba(11,42,82,0.06)]
                "
              >
                <Workflow
                  size={18}
                  strokeWidth={1.45}
                />
              </div>

              <div>
                <span
                  style={newYorkFont}
                  className="
                    block
                    text-[7px]
                    uppercase
                    tracking-[0.31em]
                    text-[#A97C52]
                  "
                >
                  The Sharp Rays Automation Framework
                </span>

                <span
                  style={newYorkFont}
                  className="
                    mt-1.5
                    block
                    text-[10px]
                    text-[#526B84]
                  "
                >
                  Seven connected stages. One clearer way of working.
                </span>
              </div>
            </div>

            <div
              className="
                rounded-full
                border
                border-[#CCDDE8]
                bg-white/75
                px-5
                py-2.5
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[6px]
                  uppercase
                  tracking-[0.31em]
                  text-[#0B2A52]/50
                "
              >
                START → BUILD → TEST → IMPROVE
              </span>
            </div>
          </div>

          {/* =================================================
              TOP ROW
          ================================================= */}

          <div
            className="
              relative
              z-10
              mt-8
              grid
              grid-cols-4
              gap-[3px]
            "
          >
            {steps.slice(0, 4).map((step, index) => (
              <RibbonStep
                key={step.number}
                step={step}
                index={index}
                direction="right"
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              TURN
          ================================================= */}

          <div
            className="
              relative
              z-10
              ml-auto
              h-[125px]
              w-[210px]
            "
          >
            <svg
              viewBox="0 0 210 125"
              className="h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="routeTurn"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#85B4D3"
                  />
                  <stop
                    offset="100%"
                    stopColor="#B18458"
                  />
                </linearGradient>
              </defs>

              <motion.path
                d="
                  M5 12
                  H139
                  C178 12 194 32 194 59
                  C194 93 169 111 132 111
                  H58
                "
                fill="none"
                stroke="url(#routeTurn)"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  ease,
                }}
              />

              <circle
                cx="5"
                cy="12"
                r="4"
                fill="#A97C52"
              />

              <path
                d="M67 105 L57 111 L67 117"
                fill="none"
                stroke="#0B2A52"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div
              className="
                absolute
                right-[16px]
                top-[46px]
                text-right
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[6px]
                  uppercase
                  leading-[1.75]
                  tracking-[0.28em]
                  text-[#0B2A52]/50
                "
              >
                BUILD
                <br />
                THE SYSTEM
              </span>
            </div>
          </div>

          {/* =================================================
              BOTTOM ROW
          ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-3
              gap-[3px]
              px-[8.333%]
            "
          >
            <RibbonStep
              step={steps[6]}
              index={6}
              direction="left"
              reduceMotion={reduceMotion}
            />

            <RibbonStep
              step={steps[5]}
              index={5}
              direction="left"
              reduceMotion={reduceMotion}
            />

            <RibbonStep
              step={steps[4]}
              index={4}
              direction="left"
              reduceMotion={reduceMotion}
            />
          </div>

          {/* =================================================
              FOOTER ROUTE
          ================================================= */}

          <div
            className="
              relative
              z-10
              mt-9
              flex
              items-center
              justify-center
              gap-5
              rounded-[18px]
              border
              border-white
              bg-white/65
              px-7
              py-5
              shadow-[0_7px_22px_rgba(11,42,82,0.025)]
              backdrop-blur-[8px]
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,transparent,#A8C5D9)]
              "
            />

            <span
              style={newYorkFont}
              className="
                text-[6px]
                uppercase
                tracking-[0.3em]
                text-[#0B2A52]/50
              "
            >
              01 MAP · 02 SIMPLIFY · 03 DESIGN · 04 CONNECT · 05 AUTOMATE ·
              06 TEST · 07 IMPROVE
            </span>

            <span
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,#A8C5D9,transparent)]
              "
            />
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-14
            max-w-[850px]
            space-y-6
            xl:hidden
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
            SUPPORTING LINE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 14,
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
            mt-14
            flex
            max-w-[1100px]
            items-center
            justify-center
            gap-5
          "
        >
          <span
            className="
              h-px
              flex-1
              bg-[linear-gradient(90deg,transparent,#A97C52)]
            "
          />

          <span
            style={newYorkFont}
            className="
              whitespace-nowrap
              text-center
              text-[7px]
              uppercase
              tracking-[0.32em]
              text-[#0B2A52]/55
            "
          >
            MAP · CONNECT · AUTOMATE · REVIEW · IMPROVE
          </span>

          <span
            className="
              h-px
              flex-1
              bg-[linear-gradient(90deg,#A97C52,transparent)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}