"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  FileText,
  Search,
  Send,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type JourneyStep = {
  number: string;
  stage: string;
  description: string;
  icon: LucideIcon;
  tone: "blue" | "gold";
};

/* =========================================================
   DATA
========================================================= */

const journeySteps: JourneyStep[] = [
  {
    number: "01",
    stage: "ARRIVE",
    description: "Create the right first impression.",
    icon: UserRound,
    tone: "blue",
  },
  {
    number: "02",
    stage: "UNDERSTAND",
    description: "Make the offer clear.",
    icon: FileText,
    tone: "gold",
  },
  {
    number: "03",
    stage: "EXPLORE",
    description: "Make information easy to find.",
    icon: Search,
    tone: "blue",
  },
  {
    number: "04",
    stage: "TRUST",
    description: "Reduce uncertainty.",
    icon: ShieldCheck,
    tone: "gold",
  },
  {
    number: "05",
    stage: "DECIDE",
    description: "Make the value clear.",
    icon: Star,
    tone: "blue",
  },
  {
    number: "06",
    stage: "ACT",
    description: "Create an obvious next step.",
    icon: Send,
    tone: "gold",
  },
];

const progressLabels = [
  "Visitor Arrives",
  "Interest Builds",
  "Curiosity Grows",
  "Confidence Increases",
  "Intent Strengthens",
  "Action Happens",
];

/* =========================================================
   JOURNEY CARD
   CARD STYLING KEPT THE SAME
========================================================= */

function JourneyCard({
  step,
  index,
  reduceMotion,
}: {
  step: JourneyStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const blue = step.tone === "blue";

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
              scale: 0.96,
            }
      }
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
        duration: 0.6,
        delay: reduceMotion ? 0 : index * 0.07,
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
        relative
        z-20
        h-full
      "
    >
      <div
        className={`
          relative
          flex
          min-h-[218px]
          h-full
          flex-col
          items-center
          overflow-hidden
          rounded-[22px]
          border
          bg-white
          px-5
          py-5
          text-center
          shadow-[0_16px_34px_rgba(11,42,82,0.055)]
          transition-shadow
          duration-300

          hover:shadow-[0_22px_44px_rgba(11,42,82,0.085)]

          ${
            blue
              ? "border-[#9FC9F1]"
              : "border-[#D8AE74]"
          }
        `}
      >
        {/* SOFT CORNER GLOW */}

        <div
          className={`
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-24
            w-24
            rounded-full
            blur-[18px]

            ${
              blue
                ? "bg-[#DCEEFF]/65"
                : "bg-[#F6E7D2]/70"
            }
          `}
        />

        {/* ICON */}

        <div
          className={`
            relative
            mx-auto
            flex
            h-[66px]
            w-[66px]
            items-center
            justify-center
            rounded-full
            border

            ${
              blue
                ? "border-[#C6DEF4] bg-[#EAF4FE]"
                : "border-[#E8D0AE] bg-[#FAEFE0]"
            }
          `}
        >
          <Icon
            size={27}
            strokeWidth={1.6}
            className="text-[#0B2A52]"
          />
        </div>

        {/* NUMBER */}

        <span
          className="
            relative
            mt-4
            block
            font-serif
            text-[0.88rem]
            font-semibold
            text-[#0B2A52]
          "
        >
          {step.number}
        </span>

        {/* TITLE */}

        <h3
          className="
            relative
            mt-1
            font-serif
            text-[1rem]
            font-semibold
            tracking-[0.015em]
            text-[#0B2A52]
          "
        >
          {step.stage}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            relative
            mx-auto
            mt-4
            max-w-[132px]
            font-serif
            text-[0.82rem]
            leading-[1.45]
            text-[#526A80]
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

export default function WebsiteJourneySection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="website-journey"
      aria-labelledby="website-journey-heading"
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
        {/* LEFT SUBTLE CIRCLE */}

        <div
          className="
            absolute
            -left-[250px]
            top-[80px]
            h-[470px]
            w-[470px]
            rounded-full
            bg-[#EEF5FB]/75
          "
        />

        <div
          className="
            absolute
            -left-[165px]
            top-[165px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-white
          "
        />

        {/* RIGHT WARM GLOW */}

        <div
          className="
            absolute
            -right-[260px]
            bottom-[5%]
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#B79A72]/[0.04]
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
          max-w-[1380px]

          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
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
                  y: 20,
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
            duration: 0.72,
            ease,
          }}
          className="
            mx-auto
            max-w-[1020px]
            text-center
          "
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#B79A72]" />

            <span
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#A07850]
              "
            >
              How A Good Website Works
            </span>

            <span className="h-px w-10 bg-[#B79A72]" />
          </div>

          {/* HEADING */}

          <h2
            id="website-journey-heading"
            className="
              mx-auto
              mt-6
              max-w-[1000px]

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
            From First Visit to{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                text-[#B18458]
              "
            >
              Confident Action.
            </span>
          </h2>

          {/* COPY */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[760px]

              text-[0.9rem]
              leading-[1.7]

              text-[#536B80]

              sm:text-[0.96rem]
            "
          >
            A website works best when every stage gives the visitor a reason to
            continue.
          </p>
        </motion.div>

        {/* =====================================================
            JOURNEY AREA
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-[1240px]
          "
        >
          {/* =================================================
              DESKTOP CONNECTING LINE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-[6.5%]
              right-[6.5%]
              top-[109px]
              hidden
              lg:block
            "
          >
            {/* BASE LINE */}

            <span
              className="
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-[#D8E1E7]
              "
            />

            {/* ANIMATED LINE */}

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
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: 0.15,
                ease,
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                absolute
                left-0
                right-0
                top-0
                h-px

                bg-[linear-gradient(90deg,#6EA6D9_0%,#B79A72_50%,#6EA6D9_100%)]
              "
            />
          </div>

          {/* =================================================
              DESKTOP CARDS
          ================================================= */}

          <div
            className="
              relative
              z-10

              grid
              gap-4

              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
            "
          >
            {journeySteps.map((step, index) => (
              <JourneyCard
                key={step.number}
                step={step}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              PROGRESS BELOW CARDS
          ================================================= */}

          <div
            className="
              relative
              mt-7

              hidden
              grid-cols-6
              gap-4

              lg:grid
            "
          >
            {progressLabels.map((label, index) => (
              <motion.div
                key={label}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 8,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: reduceMotion
                    ? 0
                    : 0.3 + index * 0.05,
                  ease,
                }}
                className="
                  text-center
                "
              >
                {/* DOT */}

                <span
                  className={`
                    mx-auto
                    block
                    h-[9px]
                    w-[9px]
                    rounded-full
                    border-[2px]
                    border-white
                    shadow-[0_0_0_1px_rgba(11,42,82,0.10)]

                    ${
                      index % 2 === 0
                        ? "bg-[#4B8DCA]"
                        : "bg-[#B18458]"
                    }
                  `}
                />

                {/* SMALL LINE */}

                <span
                  className="
                    mx-auto
                    mt-2
                    block
                    h-5
                    w-px
                    bg-[#DDE3E7]
                  "
                />

                {/* LABEL */}

                <span
                  className="
                    mt-1
                    block

                    text-[0.45rem]
                    font-semibold
                    uppercase
                    leading-[1.55]
                    tracking-[0.18em]

                    text-[#6B8093]
                  "
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* =================================================
              FINAL DIRECTION
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.55,
              ease,
            }}
            className="
              mt-8
              hidden
              items-center
              justify-end
              gap-3

              lg:flex
            "
          >
            <span className="h-px w-12 bg-[#B79A72]" />

            <span
              className="
                text-[0.48rem]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#A07850]
              "
            >
              Move Forward
            </span>

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center

                rounded-full

                border
                border-[#DCC8AA]

                bg-[#FCF8F2]

                text-[#B18458]
              "
            >
              <ArrowRight size={13} strokeWidth={1.7} />
            </span>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE / TABLET JOURNEY
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-[720px]

            lg:hidden
          "
        >
          <div className="relative">
            {/* VERTICAL LINE */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-10
                left-[30px]
                top-10
                w-px

                bg-gradient-to-b
                from-[#6EA6D9]
                via-[#B79A72]
                to-[#6EA6D9]
              "
            />

            <div className="space-y-5">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                const blue = step.tone === "blue";

                return (
                  <motion.div
                    key={step.number}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: -18,
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
                      duration: 0.48,
                      delay: reduceMotion
                        ? 0
                        : index * 0.05,
                      ease,
                    }}
                    className="
                      relative
                      flex
                      items-start
                      gap-5
                    "
                  >
                    {/* ICON */}

                    <span
                      className={`
                        relative
                        z-10

                        flex
                        h-[60px]
                        w-[60px]
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        border

                        ${
                          blue
                            ? "border-[#9FC9F1] bg-[#EAF4FE]"
                            : "border-[#D8AE74] bg-[#FAEFE0]"
                        }
                      `}
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.65}
                        className="text-[#0B2A52]"
                      />
                    </span>

                    {/* TEXT */}

                    <div
                      className="
                        flex-1

                        border-b
                        border-[#E1E5E8]

                        pb-5
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-[0.78rem]
                          font-semibold
                          text-[#B18458]
                        "
                      >
                        {step.number}
                      </span>

                      <h3
                        className="
                          mt-1

                          font-serif
                          text-[1.02rem]
                          font-semibold

                          text-[#0B2A52]
                        "
                      >
                        {step.stage}
                      </h3>

                      <p
                        className="
                          mt-2

                          text-[0.78rem]
                          leading-[1.6]

                          text-[#62788D]
                        "
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            RESULT BLOCK
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
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.68,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-[1160px]

            overflow-hidden

            rounded-[26px]

            border
            border-[#DDE3E7]

            bg-white

            px-6
            py-8

            shadow-[0_9px_28px_rgba(11,42,82,0.03)]

            sm:px-8

            lg:grid
            lg:grid-cols-[1fr_auto_0.92fr_auto]
            lg:items-center
            lg:gap-9
            lg:px-10
          "
        >
          {/* DECORATION */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[120px]
              -top-[120px]

              h-[260px]
              w-[260px]

              rounded-full

              bg-[#B79A72]/[0.04]
            "
          />

          {/* LEFT */}

          <div className="relative z-10">
            <span
              className="
                text-[0.5rem]
                font-semibold
                uppercase
                tracking-[0.27em]

                text-[#A07850]
              "
            >
              The Real Result
            </span>

            <p
              className="
                mt-4
                max-w-[455px]

                font-serif
                text-[1.65rem]
                leading-[1.08]
                tracking-[-0.035em]

                text-[#0B2A52]

                sm:text-[1.85rem]
                lg:text-[2rem]
              "
            >
              A Clearer Journey Creates{" "}
              <span
                className="
                  italic
                  text-[#B18458]
                "
              >
                Brighter Opportunities.
              </span>
            </p>
          </div>

          {/* DIVIDER */}

          <div
            className="
              relative
              z-10

              hidden
              h-[78px]
              w-px

              bg-[#E0E4E7]

              lg:block
            "
          />

          {/* COPY */}

          <div
            className="
              relative
              z-10

              mt-6

              lg:mt-0
            "
          >
            <p
              className="
                max-w-[390px]

                text-[0.86rem]
                leading-[1.65]

                text-[#607487]
              "
            >
              When every step feels simple and relevant, your website
              doesn&apos;t just inform. It moves people towards meaningful
              action.
            </p>
          </div>

          {/* CTA */}

          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    x: 3,
                  }
            }
            className="
              relative
              z-10

              mt-6

              flex
              items-center
              gap-3

              lg:mt-0
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

                rounded-full

                border
                border-[#D8C5A7]

                bg-[#FCF8F2]

                text-[#B18458]
              "
            >
              <ArrowRight size={15} strokeWidth={1.7} />
            </span>

            <span
              className="
                text-[0.5rem]
                font-semibold
                uppercase
                leading-[1.7]
                tracking-[0.18em]

                text-[#526A80]
              "
            >
              Build A
              <br />
              Better Website
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}