"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardCheck,
  Code2,
  Compass,
  Layers3,
  PenTool,
  Rocket,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type FrameworkStep = {
  number: string;
  stage: string;
  action: string;
  description: string;
  focus: string[];
  icon: LucideIcon;

  eyebrow: string;
  note: string;

  accent: string;
  pale: string;
  soft: string;
};

/* =========================================================
   DATA
========================================================= */

const steps: FrameworkStep[] = [
  {
    number: "01",
    stage: "Understand",
    action: "Start With the Business",
    description:
      "We learn what you offer, who you serve, how people currently find you and what the new website needs to accomplish.",
    focus: ["Business", "Audience", "Objectives"],
    icon: Compass,

    eyebrow: "Clarity Before Design",
    note: "The website starts with what the business actually needs to communicate and achieve.",

    accent: "#3E78A5",
    pale: "#F4F9FD",
    soft: "#E8F2FA",
  },

  {
    number: "02",
    stage: "Structure",
    action: "Create the Path",
    description:
      "We organize pages, information and user journeys before visual details take over the project.",
    focus: ["Architecture", "Navigation", "Content"],
    icon: Layers3,

    eyebrow: "Make Information Easy to Find",
    note: "Structure gives every page, message and action a clear place in the experience.",

    accent: "#72639B",
    pale: "#F8F6FC",
    soft: "#EEEBF7",
  },

  {
    number: "03",
    stage: "Design",
    action: "Make the Experience Clear",
    description:
      "The visual system brings brand, hierarchy and interaction together.",
    focus: ["UX", "UI", "Responsive Design"],
    icon: PenTool,

    eyebrow: "Turn Structure Into Experience",
    note: "Design makes the journey easier to understand while giving the brand a distinctive digital presence.",

    accent: "#AE8152",
    pale: "#FCF8F2",
    soft: "#F5EBDD",
  },

  {
    number: "04",
    stage: "Develop",
    action: "Turn the System Into a Working Website",
    description:
      "Approved designs become responsive, reusable and functional digital experiences.",
    focus: ["Components", "Functionality", "Integrations"],
    icon: Code2,

    eyebrow: "Build the Working System",
    note: "The approved experience becomes responsive components, functionality and connected technology.",

    accent: "#487E75",
    pale: "#F3F9F8",
    soft: "#E5F1EE",
  },

  {
    number: "05",
    stage: "Test",
    action: "Check the Details",
    description:
      "We review important pages, interactions, responsive behaviour and agreed functionality before launch.",
    focus: ["Quality", "Usability", "Devices"],
    icon: ClipboardCheck,

    eyebrow: "Review Before Release",
    note: "Testing helps find friction, inconsistencies and technical issues before customers experience them.",

    accent: "#9C6B50",
    pale: "#FCF7F4",
    soft: "#F5E9E2",
  },

  {
    number: "06",
    stage: "Launch",
    action: "Put the Website to Work",
    description:
      "After final checks and approvals, the website moves into its production environment.",
    focus: ["Deployment", "Tracking", "Indexing"],
    icon: Rocket,

    eyebrow: "Move From Build to Business",
    note: "Launch puts the new experience in front of real visitors and begins the next phase of learning.",

    accent: "#446E9A",
    pale: "#F4F8FD",
    soft: "#E7EFF8",
  },

  {
    number: "07",
    stage: "Improve",
    action: "Learn From Real Use",
    description:
      "A website does not need to stop evolving after launch. Performance data, search behaviour and business changes can reveal future opportunities.",
    focus: ["Measurement", "Iteration", "Improvement"],
    icon: BarChart3,

    eyebrow: "Use Real Behaviour to Improve",
    note: "Performance, search behaviour and business changes reveal where the experience can become stronger.",

    accent: "#A17A50",
    pale: "#FCF9F4",
    soft: "#F3EBDD",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WebsiteFrameworkSection() {
  const reduceMotion = Boolean(useReducedMotion());

  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

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
      id="website-framework"
      aria-labelledby="website-framework-heading"
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
            top-[-330px]

            h-[680px]
            w-[1150px]

            -translate-x-1/2

            rounded-full

            bg-[#EDF5FB]

            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -left-[250px]
            top-[45%]

            h-[440px]
            w-[440px]

            rounded-full

            bg-[#F3F7FA]

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-[220px]
            bottom-[-120px]

            h-[480px]
            w-[500px]

            rounded-full

            bg-[#FBF5ED]

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
            max-w-[1080px]

            text-center
          "
        >
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
                tracking-[0.29em]

                text-[#92745C]

                sm:text-[0.62rem]
              "
            >
              The Sharp Rays Approach
            </span>

            <span className="h-px w-9 bg-[#B79A72]" />
          </motion.div>

          <motion.h2
            id="website-framework-heading"
            variants={fadeUp}
            className="
              mx-auto
              mt-5
              max-w-[1080px]

              font-serif
              text-[2.1rem]
              font-normal
              leading-[1.04]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Understand. Structure. Design. Build.{" "}
            <span
              className="
                font-serif
                italic

                text-[#A97C52]
              "
            >
              Refine.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[760px]

              font-serif
              text-[0.96rem]
              leading-[1.8]

              text-[#60758A]

              sm:text-[1rem]
            "
          >
            Our website development process keeps business goals connected to
            the final experience.
          </motion.p>
        </motion.div>

        {/* =====================================================
            PROCESS NAVIGATOR
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[1260px]

            sm:mt-16
          "
        >
          {/* TOP META */}

          <div
            className="
              flex
              flex-col
              gap-4

              border-y
              border-[#DBE5EB]

              py-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center

                  rounded-full

                  bg-[#F1F6F9]

                  text-[#0B2A52]
                "
              >
                <Layers3 size={13} strokeWidth={1.7} />
              </span>

              <span
                className="
                  text-[0.47rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]

                  text-[#536D83]
                "
              >
                Website Development Framework
              </span>
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
                  text-[0.43rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]

                  text-[#92745C]
                "
              >
                Explore Each Stage
              </span>

              <ArrowRight
                size={11}
                strokeWidth={1.8}
                className="text-[#B79A72]"
              />
            </div>
          </div>

          {/* =================================================
              DESKTOP EXPERIENCE
          ================================================= */}

          <div
            className="
              hidden

              min-h-[610px]

              lg:grid
              lg:grid-cols-[360px_1fr]
            "
          >
            {/* ===============================================
                LEFT NAVIGATION
            =============================================== */}

            <div
              className="
                relative

                border-r
                border-[#DDE6EC]

                pr-8
                pt-8
              "
            >
              {/* VERTICAL GUIDE */}

              <div
                className="
                  absolute
                  bottom-8
                  left-[27px]
                  top-8

                  w-px

                  bg-[#E0E8ED]
                "
              />

              {/* PROGRESS LINE */}

              <motion.div
                animate={{
                  height: `${((activeIndex + 1) / steps.length) * 100}%`,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  ease,
                }}
                className="
                  absolute
                  left-[27px]
                  top-8

                  w-px

                  origin-top

                  bg-[#B79A72]
                "
                style={{
                  maxHeight: "calc(100% - 64px)",
                }}
              />

              <div className="space-y-1">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const active = activeIndex === index;

                  return (
                    <motion.button
                      key={step.number}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              x: 5,
                            }
                      }
                      transition={{
                        duration: 0.25,
                        ease,
                      }}
                      className="
                        group
                        relative

                        flex
                        w-full
                        items-center
                        gap-5

                        rounded-[16px]

                        px-2
                        py-3.5

                        text-left

                        outline-none

                        transition-colors
                        duration-300
                      "
                    >
                      {/* DOT */}

                      <span
                        className={`
                          relative
                          z-10

                          flex
                          h-[39px]
                          w-[39px]
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          border-[6px]
                          border-white

                          shadow-[0_0_0_1px_#D4DFE6]

                          transition-all
                          duration-300

                          ${
                            active
                              ? "bg-[#0B2A52] text-white"
                              : "bg-[#F1F5F8] text-[#6C8194]"
                          }
                        `}
                      >
                        <Icon size={13} strokeWidth={1.8} />
                      </span>

                      {/* TEXT */}

                      <div className="min-w-0 flex-1">
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <span
                            className={`
                              text-[0.42rem]
                              font-semibold
                              uppercase
                              tracking-[0.18em]

                              transition-colors
                              duration-300

                              ${
                                active
                                  ? "text-[#A97C52]"
                                  : "text-[#9AA7B2]"
                              }
                            `}
                          >
                            {step.number}
                          </span>

                          <span
                            className={`
                              text-[0.45rem]
                              font-semibold
                              uppercase
                              tracking-[0.17em]

                              transition-colors
                              duration-300

                              ${
                                active
                                  ? "text-[#92745C]"
                                  : "text-[#8192A0]"
                              }
                            `}
                          >
                            {step.stage}
                          </span>
                        </div>

                        <p
                          className={`
                            mt-1

                            truncate

                            font-serif
                            text-[0.96rem]

                            transition-colors
                            duration-300

                            ${
                              active
                                ? "text-[#0B2A52]"
                                : "text-[#718496]"
                            }
                          `}
                        >
                          {step.action}
                        </p>
                      </div>

                      {/* ACTIVE ARROW */}

                      <motion.span
                        animate={{
                          opacity: active ? 1 : 0,
                          x: active ? 0 : -7,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          bg-[#F4EEE5]

                          text-[#A97C52]
                        "
                      >
                        <ArrowRight
                          size={11}
                          strokeWidth={1.8}
                        />
                      </motion.span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* ===============================================
                RIGHT ACTIVE WORKSPACE
            =============================================== */}

            <div
              className="
                relative
                overflow-hidden

                pl-12
                pt-8

                xl:pl-16
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.number}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 26,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: reduceMotion ? 0 : -18,
                  }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.42,
                    ease,
                  }}
                  className="
                    relative
                    min-h-[570px]
                  "
                >
                  {/* LARGE BACKGROUND NUMBER */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="
                      pointer-events-none

                      absolute
                      right-0
                      top-[-45px]

                      select-none

                      font-serif
                      text-[11rem]
                      leading-none
                      tracking-[-0.08em]

                      text-[#0B2A52]/[0.035]

                      xl:text-[14rem]
                    "
                  >
                    {activeStep.number}
                  </motion.span>

                  {/* COLOURED WASH */}

                  <motion.div
                    key={`${activeStep.number}-wash`}
                    initial={{
                      opacity: 0,
                      scale: reduceMotion ? 1 : 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.65,
                      ease,
                    }}
                    className="
                      pointer-events-none

                      absolute
                      right-[3%]
                      top-[16%]

                      h-[330px]
                      w-[330px]

                      rounded-full

                      blur-[90px]
                    "
                    style={{
                      backgroundColor: activeStep.soft,
                      opacity: 0.68,
                    }}
                  />

                  {/* CONTENT */}

                  <div
                    className="
                      relative
                      z-10

                      flex
                      min-h-[540px]
                      flex-col
                    "
                  >
                    {/* TOP */}

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-8
                      "
                    >
                      <div>
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <motion.span
                            key={`${activeStep.number}-line`}
                            initial={{
                              width: reduceMotion ? 36 : 0,
                            }}
                            animate={{
                              width: 36,
                            }}
                            transition={{
                              duration: 0.5,
                            }}
                            className="
                              h-px
                            "
                            style={{
                              backgroundColor: activeStep.accent,
                            }}
                          />

                          <span
                            className="
                              text-[0.48rem]
                              font-semibold
                              uppercase
                              tracking-[0.21em]

                              text-[#92745C]
                            "
                          >
                            {activeStep.eyebrow}
                          </span>
                        </div>

                        <h3
                          className="
                            mt-6
                            max-w-[650px]

                            font-serif
                            text-[2.55rem]
                            font-normal
                            leading-[1.05]
                            tracking-[-0.045em]

                            text-[#0B2A52]

                            xl:text-[3rem]
                          "
                        >
                          {activeStep.action}
                        </h3>
                      </div>

                      {/* ICON */}

                      <motion.div
                        key={`${activeStep.number}-icon`}
                        initial={{
                          opacity: 0,
                          rotate: reduceMotion ? 0 : -8,
                          scale: reduceMotion ? 1 : 0.85,
                        }}
                        animate={{
                          opacity: 1,
                          rotate: 0,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          ease,
                        }}
                        className="
                          flex
                          h-16
                          w-16
                          shrink-0
                          items-center
                          justify-center

                          rounded-[20px]

                          border
                          border-[#D5E1E8]

                          shadow-[0_12px_32px_rgba(11,42,82,0.055)]
                        "
                        style={{
                          backgroundColor: activeStep.soft,
                          color: activeStep.accent,
                        }}
                      >
                        <ActiveIcon size={24} strokeWidth={1.55} />
                      </motion.div>
                    </div>

                    {/* BODY */}

                    <div
                      className="
                        mt-10
                        grid
                        grid-cols-[1.1fr_0.9fr]
                        gap-12
                      "
                    >
                      {/* DESCRIPTION */}

                      <div>
                        <span
                          className="
                            text-[0.43rem]
                            font-semibold
                            uppercase
                            tracking-[0.19em]

                            text-[#91A0AD]
                          "
                        >
                          What Happens
                        </span>

                        <p
                          className="
                            mt-4
                            max-w-[530px]

                            font-serif
                            text-[1rem]
                            leading-[1.8]

                            text-[#5B7286]
                          "
                        >
                          {activeStep.description}
                        </p>

                        {/* INSIGHT */}

                        <div
                          className="
                            mt-8
                            max-w-[520px]

                            border-l-2

                            pl-5
                          "
                          style={{
                            borderColor: activeStep.accent,
                          }}
                        >
                          <p
                            className="
                              font-serif
                              text-[0.9rem]
                              leading-[1.75]

                              text-[#37536C]
                            "
                          >
                            {activeStep.note}
                          </p>
                        </div>
                      </div>

                      {/* FOCUS */}

                      <div>
                        <span
                          className="
                            text-[0.43rem]
                            font-semibold
                            uppercase
                            tracking-[0.19em]

                            text-[#91A0AD]
                          "
                        >
                          Focus
                        </span>

                        <div
                          className="
                            mt-4
                            space-y-3
                          "
                        >
                          {activeStep.focus.map((item, index) => (
                            <motion.div
                              key={item}
                              initial={{
                                opacity: 0,
                                x: reduceMotion ? 0 : 14,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                duration: 0.4,
                                delay: reduceMotion
                                  ? 0
                                  : 0.08 + index * 0.07,
                              }}
                              className="
                                flex
                                items-center
                                gap-3

                                border-b
                                border-[#E3E9ED]

                                pb-3
                              "
                            >
                              <span
                                className="
                                  flex
                                  h-6
                                  w-6
                                  shrink-0
                                  items-center
                                  justify-center

                                  rounded-full

                                  bg-[#F1F5F7]

                                  text-[#A97C52]
                                "
                              >
                                <Check
                                  size={9}
                                  strokeWidth={2.4}
                                />
                              </span>

                              <span
                                className="
                                  text-[0.73rem]
                                  font-medium

                                  text-[#536D83]
                                "
                              >
                                {item}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* =========================================
                        BOTTOM PROGRESS
                    ========================================= */}

                    <div className="mt-auto pt-12">
                      <div
                        className="
                          flex
                          items-end
                          justify-between
                          gap-6

                          border-t
                          border-[#DDE6EC]

                          pt-5
                        "
                      >
                        <div>
                          <span
                            className="
                              text-[0.4rem]
                              font-semibold
                              uppercase
                              tracking-[0.17em]

                              text-[#98A5AF]
                            "
                          >
                            Progress
                          </span>

                          <div
                            className="
                              mt-2
                              flex
                              items-center
                              gap-1.5
                            "
                          >
                            {steps.map((_, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to step ${index + 1}`}
                                className={`
                                  h-[4px]
                                  rounded-full

                                  transition-all
                                  duration-300

                                  ${
                                    index === activeIndex
                                      ? "w-10 bg-[#0B2A52]"
                                      : index < activeIndex
                                        ? "w-5 bg-[#B79A72]"
                                        : "w-5 bg-[#D7E1E7]"
                                  }
                                `}
                              />
                            ))}
                          </div>
                        </div>

                        {/* NEXT */}

                        {activeIndex < steps.length - 1 ? (
                          <button
                            type="button"
                            onClick={() =>
                              setActiveIndex((current) =>
                                Math.min(
                                  current + 1,
                                  steps.length - 1,
                                ),
                              )
                            }
                            className="
                              group

                              flex
                              items-center
                              gap-3
                            "
                          >
                            <div className="text-right">
                              <span
                                className="
                                  block

                                  text-[0.39rem]
                                  font-semibold
                                  uppercase
                                  tracking-[0.17em]

                                  text-[#9AA7B1]
                                "
                              >
                                Next Stage
                              </span>

                              <span
                                className="
                                  mt-1
                                  block

                                  font-serif
                                  text-[0.83rem]

                                  text-[#0B2A52]
                                "
                              >
                                {steps[activeIndex + 1].stage}
                              </span>
                            </div>

                            <span
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center

                                rounded-full

                                bg-[#0B2A52]

                                text-white

                                transition-transform
                                duration-300

                                group-hover:translate-x-1
                              "
                            >
                              <ArrowRight
                                size={13}
                                strokeWidth={1.7}
                              />
                            </span>
                          </button>
                        ) : (
                          <div
                            className="
                              flex
                              items-center
                              gap-3
                            "
                          >
                            <div className="text-right">
                              <span
                                className="
                                  block

                                  text-[0.39rem]
                                  font-semibold
                                  uppercase
                                  tracking-[0.17em]

                                  text-[#9AA7B1]
                                "
                              >
                                The Process Continues
                              </span>

                              <span
                                className="
                                  mt-1
                                  block

                                  font-serif
                                  text-[0.83rem]

                                  text-[#A97C52]
                                "
                              >
                                Measure · Learn · Improve
                              </span>
                            </div>

                            <span
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center

                                rounded-full

                                bg-[#F4EEE5]

                                text-[#A97C52]
                              "
                            >
                              <BarChart3
                                size={13}
                                strokeWidth={1.7}
                              />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* =================================================
              MOBILE VERSION
          ================================================= */}

          <div className="lg:hidden">
            <div
              className="
                mt-7

                flex
                gap-2

                overflow-x-auto

                pb-3

                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {steps.map((step, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`
                      flex
                      shrink-0
                      items-center
                      gap-2

                      rounded-full

                      border

                      px-3
                      py-2

                      transition-all
                      duration-300

                      ${
                        active
                          ? `
                            border-[#0B2A52]
                            bg-[#0B2A52]
                            text-white
                          `
                          : `
                            border-[#D8E2E8]
                            bg-white
                            text-[#60758A]
                          `
                      }
                    `}
                  >
                    <span
                      className="
                        text-[0.42rem]
                        font-semibold
                      "
                    >
                      {step.number}
                    </span>

                    <span
                      className="
                        text-[0.43rem]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                      "
                    >
                      {step.stage}
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: reduceMotion ? 0 : -10,
                }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.4,
                  ease,
                }}
                className="
                  relative

                  mt-7

                  overflow-hidden

                  border-y
                  border-[#D9E3EA]

                  py-8
                "
              >
                {/* NUMBER */}

                <span
                  className="
                    pointer-events-none

                    absolute
                    right-0
                    top-[-18px]

                    font-serif
                    text-[6.5rem]
                    leading-none
                    tracking-[-0.08em]

                    text-[#0B2A52]/[0.035]
                  "
                >
                  {activeStep.number}
                </span>

                {/* ICON */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-[15px]
                  "
                  style={{
                    backgroundColor: activeStep.soft,
                    color: activeStep.accent,
                  }}
                >
                  <ActiveIcon size={18} strokeWidth={1.65} />
                </div>

                <span
                  className="
                    relative
                    z-10

                    mt-5
                    block

                    text-[0.45rem]
                    font-semibold
                    uppercase
                    tracking-[0.19em]

                    text-[#92745C]
                  "
                >
                  {activeStep.stage}
                </span>

                <h3
                  className="
                    relative
                    z-10

                    mt-3

                    max-w-[500px]

                    font-serif
                    text-[1.85rem]
                    leading-[1.08]
                    tracking-[-0.04em]

                    text-[#0B2A52]
                  "
                >
                  {activeStep.action}
                </h3>

                <p
                  className="
                    relative
                    z-10

                    mt-5

                    max-w-[550px]

                    font-serif
                    text-[0.83rem]
                    leading-[1.75]

                    text-[#60758A]
                  "
                >
                  {activeStep.description}
                </p>

                <div
                  className="
                    relative
                    z-10

                    mt-6

                    border-l-2

                    pl-4
                  "
                  style={{
                    borderColor: activeStep.accent,
                  }}
                >
                  <p
                    className="
                      font-serif
                      text-[0.78rem]
                      leading-[1.7]

                      text-[#405D76]
                    "
                  >
                    {activeStep.note}
                  </p>
                </div>

                <div
                  className="
                    relative
                    z-10

                    mt-7
                  "
                >
                  <span
                    className="
                      text-[0.42rem]
                      font-semibold
                      uppercase
                      tracking-[0.18em]

                      text-[#91A0AD]
                    "
                  >
                    Focus
                  </span>

                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {activeStep.focus.map((item) => (
                      <span
                        key={item}
                        className="
                          flex
                          items-center
                          gap-2

                          rounded-full

                          border
                          border-[#D8E2E8]

                          bg-white

                          px-3
                          py-2

                          text-[0.62rem]

                          text-[#536D83]
                        "
                      >
                        <Check
                          size={9}
                          strokeWidth={2.2}
                          className="text-[#A97C52]"
                        />

                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* MOBILE NEXT */}

                {activeIndex < steps.length - 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((current) =>
                        Math.min(current + 1, steps.length - 1),
                      )
                    }
                    className="
                      relative
                      z-10

                      mt-8

                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-[0.46rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]

                        text-[#0B2A52]
                      "
                    >
                      Next — {steps[activeIndex + 1].stage}
                    </span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center

                        rounded-full

                        bg-[#0B2A52]

                        text-white
                      "
                    >
                      <ArrowRight size={11} strokeWidth={1.8} />
                    </span>
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* =====================================================
            SIMPLE ENDING — NO EXTRA CARD
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
            amount: 0.6,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[900px]

            text-center

            sm:mt-20
          "
        >
          <div
            className="
              mx-auto

              flex
              w-fit
              items-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-[#D5E0E7]" />

            <span
              className="
                h-1.5
                w-1.5

                rounded-full

                bg-[#B79A72]
              "
            />

            <span className="h-px w-10 bg-[#D5E0E7]" />
          </div>

          <p
            className="
              mt-5

              font-serif
              text-[1.15rem]
              leading-[1.45]

              text-[#0B2A52]

              sm:text-[1.35rem]
            "
          >
            A clear process keeps every decision connected to{" "}
            <span
              className="
                font-serif
                italic

                text-[#A97C52]
              "
            >
              the website your business actually needs.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}