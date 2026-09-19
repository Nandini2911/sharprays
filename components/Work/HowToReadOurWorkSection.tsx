"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CircleHelp,
  Eye,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type WorkLens = {
  number: string;
  label: string;
  question: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

/* =========================================================
   DATA
========================================================= */

const lenses: WorkLens[] = [
  {
    number: "01",
    label: "The Challenge",
    question: "What was getting in the way?",
    icon: CircleHelp,
    accent: "#3976A4",
    soft: "#EAF3FA",
  },
  {
    number: "02",
    label: "The Thinking",
    question: "What did we believe needed to change?",
    icon: Lightbulb,
    accent: "#75629A",
    soft: "#F0ECF7",
  },
  {
    number: "03",
    label: "The Execution",
    question: "What did Sharp Rays actually do?",
    icon: Rocket,
    accent: "#A57A50",
    soft: "#F7EEE2",
  },
  {
    number: "04",
    label: "The Outcome",
    question: "What changed after the work went live?",
    icon: TrendingUp,
    accent: "#477D73",
    soft: "#E7F2EF",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function HowToReadOurWorkSection() {
  const reduceMotion = Boolean(useReducedMotion());

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  return (
    <section
      id="how-to-read-our-work"
      aria-labelledby="how-to-read-our-work-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-[-320px]
            h-[650px]
            w-[1120px]
            -translate-x-1/2
            rounded-full
            bg-[#EEF5FA]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -left-[230px]
            top-[45%]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#F4F8FA]
            blur-[115px]
          "
        />

        <div
          className="
            absolute
            -right-[240px]
            bottom-[-130px]
            h-[470px]
            w-[500px]
            rounded-full
            bg-[#FBF5EC]
            blur-[125px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            mx-auto
            max-w-[1060px]
            text-center
          "
        >
          {/* eyebrow */}

          <motion.div
            variants={fadeUp}
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-9 bg-[#B79A72]" />

            <span
              className="
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#92745C]
                sm:text-[0.62rem]
              "
            >
              Beyond the Final Screen
            </span>

            <span className="h-px w-9 bg-[#B79A72]" />
          </motion.div>

          {/* heading */}

          <motion.h2
            id="how-to-read-our-work-heading"
            variants={fadeUp}
            className="
              mx-auto
              mt-5
              max-w-[1040px]
        
              text-[2.1rem]
          
              leading-[1.04]
              tracking-[-0.045em]
              text-[#0B2A52]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            The Outcome Makes More Sense When You{" "}
            <span className="italic text-[#A97C52]">
              Understand the Thinking.
            </span>
          </motion.h2>

          {/* intro copy */}

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[760px]
            "
          >
            <p
              className="
                font-serif
                text-[0.95rem]
                leading-[1.8]
                text-[#60758A]
                sm:text-[1rem]
              "
            >
              A portfolio can show you what something looked like.
            </p>

            <p
              className="
                mt-2
                font-serif
                text-[0.95rem]
                leading-[1.8]
                text-[#60758A]
                sm:text-[1rem]
              "
            >
              A useful case study should show you{" "}
              <span
                className="
                  font-medium
                  italic
                  text-[#0B2A52]
                "
              >
                why it was built that way.
              </span>
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="
              mt-5
              text-[0.49rem]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#92745C]
            "
          >
            That is why our work focuses on four things
          </motion.p>
        </motion.div>

        {/* =====================================================
            FRAMEWORK INTRO
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[1220px]
            sm:mt-16
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
                text-[0.44rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#8A9AA7]
              "
            >
              Read the Work
            </span>

            <span className="h-px flex-1 bg-[#DDE6EC]" />

            <span
              className="
                text-[0.44rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#B08A62]
              "
            >
              01 — 04
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            CONNECTED FOUR-PART FRAMEWORK
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-7
            max-w-[1220px]
          "
        >
          {/* desktop top connector */}

          <div
            className="
              absolute
              left-[11%]
              right-[11%]
              top-[28px]
              hidden
              h-px
              bg-[#DCE5EA]
              lg:block
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
              duration: 1.1,
              ease,
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
              absolute
              left-[11%]
              right-[11%]
              top-[28px]
              hidden
              h-px
              bg-[linear-gradient(90deg,#3976A4,#75629A,#A57A50,#477D73)]
              lg:block
            "
          />

          <div
            className="
              grid
              grid-cols-1
              border-y
              border-[#DDE6EC]
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {lenses.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
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
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: reduceMotion ? 0 : index * 0.09,
                    ease,
                  }}
                  className={`
                    group
                    relative
                    px-5
                    py-7
                    sm:px-7
                    sm:py-8
                    lg:px-7
                    lg:pb-10
                    lg:pt-4

                    ${
                      index !== lenses.length - 1
                        ? `
                          border-b
                          border-[#E1E8ED]

                          md:border-r

                          lg:border-b-0
                        `
                        : ""
                    }

                    ${
                      index === 1
                        ? "md:border-r-0 lg:border-r"
                        : ""
                    }

                    ${
                      index === 2
                        ? "md:border-b-0"
                        : ""
                    }
                  `}
                >
                  {/* top icon marker */}

                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                            scale: 1.05,
                          }
                    }
                    className="
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border-[6px]
                      border-white
                      shadow-[0_0_0_1px_#D5E0E7]
                    "
                    style={{
                      backgroundColor: item.soft,
                      color: item.accent,
                    }}
                  >
                    <Icon size={18} strokeWidth={1.65} />
                  </motion.div>

                  {/* number */}

                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-[1.9rem]
                        leading-none
                        tracking-[-0.05em]
                        text-[#B79A72]
                      "
                    >
                      {item.number}
                    </span>

                    <motion.span
                      initial={{
                        width: reduceMotion ? 30 : 0,
                      }}
                      whileInView={{
                        width: 30,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: reduceMotion ? 0 : 0.15 + index * 0.07,
                        ease,
                      }}
                      className="h-px"
                      style={{
                        backgroundColor: item.accent,
                      }}
                    />
                  </div>

                  {/* title */}

                  <h3
                    className="
                      mt-4
                      text-[0.55rem]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#92745C]
                    "
                  >
                    {item.label}
                  </h3>

                  {/* question */}

                  <p
                    className="
                      mt-4
                      max-w-[245px]
                      font-serif
                      text-[1.22rem]
                      leading-[1.28]
                      tracking-[-0.02em]
                      text-[#0B2A52]
                      sm:text-[1.32rem]
                    "
                  >
                    {item.question}
                  </p>

                  {/* hover arrow */}

                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                      "
                      style={{
                        backgroundColor: item.accent,
                      }}
                    />

                    <span
                      className="
                        text-[0.41rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#9AA7B1]
                      "
                    >
                      Case Study Lens
                    </span>

                    <ArrowRight
                      size={10}
                      strokeWidth={1.8}
                      className="
                        ml-auto
                        text-[#B79A72]
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {/* bottom hover line */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            TRANSITION
        ===================================================== */}

        <motion.div
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
            amount: 0.5,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[850px]
          "
        >
          <div
            className="
              flex
              items-center
              gap-5
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,transparent,#D7E2E9)]
              "
            />

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, 8, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#D5E0E7]
                bg-white
                text-[#0B2A52]
                shadow-[0_8px_22px_rgba(11,42,82,0.055)]
              "
            >
              <Eye size={15} strokeWidth={1.7} />
            </motion.span>

            <span
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,#D7E2E9,transparent)]
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
          className="
            mx-auto
            mt-9
            max-w-[1000px]
            text-center
          "
        >
          <motion.span
            variants={fadeUp}
            className="
              text-[0.5rem]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#92745C]
            "
          >
            The Principle
          </motion.span>

          <motion.h3
            variants={fadeUp}
            className="
              mx-auto
              mt-5
              max-w-[900px]
              font-serif
              text-[1.85rem]
              font-normal
              leading-[1.16]
              tracking-[-0.035em]
              text-[#0B2A52]
              sm:text-[2.15rem]
              md:text-[2.45rem]
            "
          >
            Don&apos;t Judge the Work Only by{" "}
            <span className="italic text-[#A97C52]">
              How It Looks.
            </span>
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-3
              max-w-[780px]
              font-serif
              text-[1.05rem]
              leading-[1.55]
              text-[#60758A]
              sm:text-[1.18rem]
            "
          >
            Understand what it was{" "}
            <span
              className="
                font-medium
                text-[#0B2A52]
              "
            >
              designed to do.
            </span>
          </motion.p>

          {/* final visual detail */}

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              mt-7
              flex
              w-fit
              items-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-[#D5E0E7]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />
            <span className="h-px w-10 bg-[#D5E0E7]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}