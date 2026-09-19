"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  Blocks,
  Braces,
  CheckCircle2,
  Lightbulb,
  MousePointer2,
  PenTool,
  Search,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "navy" | "gold";
};

/* =========================================================
   DATA
========================================================= */

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVERY",
    description: "Understanding the business, audience and problem.",
    icon: Search,
    tone: "navy",
  },
  {
    number: "02",
    title: "STRUCTURE",
    description: "Planning pages, journeys and information.",
    icon: Blocks,
    tone: "gold",
  },
  {
    number: "03",
    title: "WIREFRAME",
    description: "Working out hierarchy before visual polish.",
    icon: MousePointer2,
    tone: "navy",
  },
  {
    number: "04",
    title: "DESIGN",
    description: "Turning structure into a clear visual experience.",
    icon: PenTool,
    tone: "gold",
  },
  {
    number: "05",
    title: "DEVELOPMENT",
    description: "Building responsive, functional interfaces.",
    icon: Braces,
    tone: "navy",
  },
  {
    number: "06",
    title: "REVIEW",
    description: "Testing whether the experience works as intended.",
    icon: CheckCircle2,
    tone: "gold",
  },
  {
    number: "07",
    title: "IMPROVEMENT",
    description: "Using feedback and real use to guide what happens next.",
    icon: Lightbulb,
    tone: "navy",
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
  step: ProcessStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const navy = step.tone === "navy";

  return (
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
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.52,
        delay: reduceMotion ? 0 : index * 0.06,
        ease,
      }}
      className="
        group
        relative
        min-w-0
        text-center
      "
    >
      {/* =====================================================
          NODE
      ===================================================== */}

      <motion.div
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -4,
                scale: 1.05,
              }
        }
        className={`
          relative
          z-20

          mx-auto

          flex
          h-[58px]
          w-[58px]

          items-center
          justify-center

          rounded-full

          border-[5px]
          border-white

          font-serif
          text-[0.82rem]
          font-semibold

          text-white

          shadow-[0_8px_24px_rgba(11,42,82,0.13)]

          ${
            navy
              ? `
                bg-[linear-gradient(145deg,#164675,#0B2A52)]
              `
              : `
                bg-[linear-gradient(145deg,#CAA168,#A97A47)]
              `
          }
        `}
      >
        {step.number}
      </motion.div>

      {/* =====================================================
          ICON
      ===================================================== */}

      <motion.div
        whileHover={
          reduceMotion
            ? undefined
            : {
                scale: 1.07,
                rotate: -4,
              }
        }
        className={`
          mx-auto
          mt-6

          flex
          h-[64px]
          w-[64px]

          items-center
          justify-center

          rounded-[18px]

          border

          ${
            navy
              ? `
                border-[#D6E5EF]
                bg-[linear-gradient(145deg,#F8FCFF,#EAF4FB)]
                text-[#0B2A52]
              `
              : `
                border-[#E7D5BE]
                bg-[linear-gradient(145deg,#FFFDF9,#F7EEDF)]
                text-[#A0784A]
              `
          }
        `}
      >
        <Icon size={24} strokeWidth={1.65} />
      </motion.div>

      {/* TITLE */}

      <h3
        className="
          mt-5

          font-serif
          text-[1rem]
          font-semibold
          leading-[1.1]

          text-[#0B2A52]
        "
      >
        {step.title}
      </h3>

      {/* SMALL DIVIDER */}

      <motion.span
        initial={
          reduceMotion
            ? false
            : {
                scaleX: 0,
              }
        }
        whileInView={{
          scaleX: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          delay: reduceMotion ? 0 : 0.2 + index * 0.04,
          ease,
        }}
        className={`
          mx-auto
          mt-4

          block
          h-[2px]
          w-8

          origin-center

          ${
            navy
              ? "bg-[#0B2A52]"
              : "bg-[#B79A72]"
          }
        `}
      />

      {/* DESCRIPTION */}

      <p
        className="
          mx-auto
          mt-4
          max-w-[175px]

          text-[0.72rem]
          leading-[1.6]

          text-[#62778A]
        "
      >
        {step.description}
      </p>
    </motion.div>
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
  step: ProcessStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const navy = step.tone === "navy";

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: index % 2 === 0 ? -20 : 20,
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
        duration: 0.5,
        delay: reduceMotion ? 0 : index * 0.04,
        ease,
      }}
      className="
        relative
        grid
        grid-cols-[46px_1fr]
        gap-4
      "
    >
      {/* NODE */}

      <div
        className={`
          relative
          z-10

          flex
          h-[44px]
          w-[44px]
          items-center
          justify-center

          rounded-full

          border-[4px]
          border-white

          font-serif
          text-[0.68rem]
          font-semibold

          text-white

          shadow-[0_6px_18px_rgba(11,42,82,0.12)]

          ${
            navy
              ? "bg-[#0B2A52]"
              : "bg-[#B18458]"
          }
        `}
      >
        {step.number}
      </div>

      {/* CONTENT */}

      <div
        className="
          rounded-[16px]

          border
          border-[#DFE6EB]

          bg-white/80

          px-4
          py-4
        "
      >
        <div className="flex items-center gap-3">
          <div
            className={`
              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-[10px]

              ${
                navy
                  ? "bg-[#EDF5FA] text-[#0B2A52]"
                  : "bg-[#F7EFE4] text-[#A0784A]"
              }
            `}
          >
            <Icon size={16} strokeWidth={1.7} />
          </div>

          <h3
            className="
              font-serif
              text-[1rem]
              font-semibold

              text-[#0B2A52]
            "
          >
            {step.title}
          </h3>
        </div>

        <p
          className="
            mt-3

            text-[0.78rem]
            leading-[1.6]

            text-[#60768A]
          "
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function IdeaToFinalExperienceSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="idea-to-final-experience"
      aria-labelledby="idea-to-final-experience-heading"
      className="
        relative
        isolate
        overflow-hidden

        bg-white

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          overflow-hidden
        "
      >
        {/* BLUE GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-[30%]

            h-[430px]
            w-[1050px]

            -translate-x-1/2

            rounded-full

            bg-[radial-gradient(circle,rgba(91,157,207,0.09)_0%,rgba(91,157,207,0.025)_45%,transparent_72%)]

            blur-[35px]
          "
        />

        {/* GOLD GLOW */}

        <div
          className="
            absolute
            -right-[160px]
            top-[18%]

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#B79A72]/[0.055]

            blur-[100px]
          "
        />

        {/* LEFT DECORATIVE ARC */}

        <div
          className="
            absolute
            -left-[240px]
            -top-[180px]

            h-[440px]
            w-[440px]

            rounded-full

            border-[50px]
            border-[#EDF4F8]
          "
        />

        {/* RIGHT FINE RING */}

        <div
          className="
            absolute
            -right-[180px]
            top-[40px]

            h-[420px]
            w-[420px]

            rounded-full

            border
            border-[#D6E3EC]
          "
        />
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
          max-w-[1450px]

          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            INTRO
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            max-w-[1050px]

            text-center
          "
        >
          {/* EYEBROW */}

          <div
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
                w-12

                bg-[linear-gradient(90deg,transparent,#B79A72)]
              "
            />

            <span
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.3em]

                text-[#9B7650]
              "
            >
              Behind the Work
            </span>

            <span
              className="
                h-px
                w-12

                bg-[linear-gradient(90deg,#B79A72,transparent)]
              "
            />
          </div>

          {/* HEADING */}

          <h2
            id="idea-to-final-experience-heading"
            className="
              mx-auto
              mt-6
              max-w-[1040px]

         
              text-[2.3rem]
            
              leading-[1.02]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            The Finished Screen Is Only{" "}
            <span
              className="
                font-normal
                italic

                text-[#B18458]
              "
            >
              One Part
            </span>{" "}
            of the Project.
          </h2>

          {/* COPY */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[720px]

              text-[0.96rem]
              leading-[1.7]

              text-[#526B80]

              sm:text-[1rem]
            "
          >
            We like showing what happens before the polished result.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-[720px]

              text-[0.88rem]
              leading-[1.65]

              text-[#7A8D9D]
            "
          >
            Depending on the project, that may include:
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP PROCESS CANVAS
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            relative

            mx-auto
            mt-16
            hidden
            max-w-[1280px]

            overflow-hidden

            rounded-[28px]

            border
            border-[#DCE5EB]

            bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(249,252,254,0.95)_100%)]

            px-6
            pb-10
            pt-12

            shadow-[0_20px_60px_rgba(11,42,82,0.035)]

            lg:block
          "
        >
          {/* =================================================
              BACKGROUND TEXTURE
          ================================================= */}

          <span
            className="
              pointer-events-none

              absolute
              -right-5
              bottom-[-20px]

              font-serif
              text-[8rem]
              leading-none
              tracking-[-0.08em]

              text-[#0B2A52]/[0.018]

              xl:text-[10rem]
            "
          >
            PROCESS
          </span>

          {/* =================================================
              PROCESS LINE
          ================================================= */}

          <div
            className="
              pointer-events-none

              absolute
              left-[7%]
              right-[7%]
              top-[80px]

              h-px

              bg-[#D6E1E8]
            "
          />

          {/* NAVY → GOLD LINE */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    scaleX: 0,
                  }
            }
            whileInView={{
              scaleX: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 1.35,
              ease,
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
              pointer-events-none

              absolute
              left-[7%]
              right-[7%]
              top-[79px]

              h-[2px]

              bg-[linear-gradient(90deg,#0B2A52_0%,#5D91B8_22%,#B79A72_45%,#0B2A52_68%,#B79A72_100%)]
            "
          />

          {/* MOVING LIGHT */}

          {!reduceMotion && (
            <motion.span
              initial={{
                left: "6%",
                opacity: 0,
              }}
              whileInView={{
                left: "91%",
                opacity: [0, 1, 1, 0],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                delay: 0.18,
                ease,
              }}
              className="
                pointer-events-none

                absolute
                top-[74px]

                h-3
                w-3

                rounded-full

                bg-white

                shadow-[0_0_0_3px_rgba(183,154,114,0.18),0_0_18px_rgba(183,154,114,0.55)]
              "
            />
          )}

          {/* =================================================
              STEPS
          ================================================= */}

          <div
            className="
              relative
              z-10

              grid
              grid-cols-7
              gap-4
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
        </motion.div>

        {/* =====================================================
            MOBILE PROCESS
        ===================================================== */}

        <div
          className="
            relative

            mx-auto
            mt-12
            max-w-[680px]

            lg:hidden
          "
        >
          {/* VERTICAL LINE */}

          <div
            className="
              absolute
              bottom-[20px]
              left-[21px]
              top-[20px]

              w-px

              bg-[linear-gradient(180deg,#0B2A52,#B79A72,#0B2A52)]
            "
          />

          <div className="space-y-4">
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
            BOTTOM PRINCIPLE / SUPPORTING LINE
        ===================================================== */}

        <motion.div
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
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.55,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[980px]
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-5

              border-y
              border-[#DDE5EA]

              py-7

              sm:flex-row
            "
          >
            {/* ICON */}

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 6,
                      scale: 1.06,
                    }
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                bg-[#0B2A52]

                text-white
              "
            >
              <Sparkles size={15} strokeWidth={1.7} />
            </motion.div>

            {/* LINE */}

            <span
              className="
                hidden
                h-px
                w-10

                bg-[#B79A72]

                sm:block
              "
            />

            {/* TEXT */}

            <div
              className="
                text-center
              "
            >
              <span
                className="
                  text-[0.52rem]
                  font-semibold
                  uppercase
                  tracking-[0.24em]

                  text-[#8F7559]
                "
              >
                From Idea to Final Experience
              </span>

              <div
                className="
                  mt-2

                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-3
                  gap-y-1
                "
              >
                {["PROBLEM", "THINKING", "BUILD", "LEARNING"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          text-[0.68rem]
                          font-semibold
                          uppercase
                          tracking-[0.17em]

                          text-[#0B2A52]
                        "
                      >
                        {item}
                      </span>

                      {index !== 3 && (
                        <ArrowRight
                          size={11}
                          className="text-[#B18458]"
                        />
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}