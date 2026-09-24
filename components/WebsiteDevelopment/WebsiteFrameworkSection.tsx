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

        py-16
        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
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
          hidden
          overflow-hidden

          sm:block
        "
      >
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

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
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
              gap-3
              sm:gap-4
            "
          >
           <span
            className="
              h-px
              w-7
              sm:w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />

            <span
              className="
                text-[10px]
              
                uppercase
                tracking-[0.29em]

                text-[#B79A72]

                sm:text-[0.62rem]
              "
            >
              The Sharp Rays Approach
            </span>

        <span
            className="
              h-px
              w-7
              sm:w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />
          </motion.div>

          <motion.h2
            id="website-framework-heading"
            variants={fadeUp}
            className="
              mx-auto
              mt-5
              max-w-[1080px]

              font-serif
              text-[2.2rem]
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
              mt-5
              max-w-[760px]

              font-serif
              text-[0.88rem]
              leading-[1.7]

              sm:mt-6
              sm:text-[0.96rem]

              md:text-[1rem]

              text-[#60758A]
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
            mt-10
            max-w-[1260px]

            sm:mt-12
            md:mt-14
            lg:mt-16
          "
        >
          {/* TOP META */}

         

          {/* =================================================
              DESKTOP EXPERIENCE
          ================================================= */}

          <div
            className="
              hidden

              min-h-[560px]

              lg:grid
              lg:grid-cols-[290px_minmax(0,1fr)]

              xl:min-h-[610px]
              xl:grid-cols-[340px_minmax(0,1fr)]

              2xl:grid-cols-[360px_minmax(0,1fr)]
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

                pr-5
                pt-6

                xl:pr-8
                xl:pt-8
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
                        gap-3

                        rounded-[14px]

                        px-1.5
                        py-3

                        xl:gap-5
                        xl:rounded-[16px]
                        xl:px-2
                        xl:py-3.5

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
                          h-[35px]
                          w-[35px]

                          xl:h-[39px]
                          xl:w-[39px]
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
                            text-[0.82rem]

                            xl:text-[0.96rem]

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

                pl-7
                pt-6

                xl:pl-12
                xl:pt-8

                2xl:pl-16
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
                    min-h-[520px]

                    xl:min-h-[570px]
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
                      text-[8.5rem]

                      xl:text-[11rem]
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

                      h-[260px]
                      w-[260px]

                      xl:h-[330px]
                      xl:w-[330px]

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
                      min-h-[490px]

                      xl:min-h-[540px]
                      flex-col
                    "
                  >
                    {/* TOP */}

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-5

                        xl:gap-8
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
                            mt-5
                            max-w-[650px]

                            font-serif
                            text-[2.05rem]

                            xl:mt-6
                            xl:text-[2.55rem]
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
                          h-14
                          w-14

                          xl:h-16
                          xl:w-16
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
                        mt-8
                        grid
                        grid-cols-[1.05fr_0.95fr]
                        gap-7

                        xl:mt-10
                        xl:grid-cols-[1.1fr_0.9fr]
                        xl:gap-12
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
                            text-[0.9rem]
                            leading-[1.7]

                            xl:text-[1rem]
                            xl:leading-[1.8]

                            text-[#5B7286]
                          "
                        >
                          {activeStep.description}
                        </p>

                        {/* INSIGHT */}

                        <div
                          className="
                            mt-6
                            max-w-[520px]

                            xl:mt-8

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
              MOBILE — HORIZONTAL SNAP SCROLL
          ================================================= */}

          <div className="md:hidden">
            {/* SMALL SCROLL HINT */}

            <div
              className="
                mt-7

                flex
                items-center
                justify-between
                gap-4
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5

                    rounded-full

                    bg-[#B79A72]
                  "
                />

                <span
                  className="
                    text-[0.48rem]
                    font-semibold
                    uppercase
                    tracking-[0.16em]

                    text-[#7B8D9D]
                  "
                >
                  Swipe Through the Process
                </span>
              </div>

              <span
                className="
                  text-[0.48rem]
                  font-semibold
                  tracking-[0.12em]

                  text-[#A0ADB7]
                "
              >
                01 — 07
              </span>
            </div>

            {/* SCROLL CARDS */}

            <div
              className="
                -mx-4
                mt-4

                flex
                snap-x
                snap-mandatory
                gap-3

                overflow-x-auto
                overscroll-x-contain

                px-4
                pb-4

                scroll-px-4
                scroll-smooth

                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden

                sm:-mx-6
                sm:px-6
                sm:scroll-px-6
              "
            >
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
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
                      amount: 0.35,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.5,
                      delay: reduceMotion ? 0 : index * 0.035,
                      ease,
                    }}
                    className="
                      relative

                      w-[84vw]
                      min-w-[270px]
                      max-w-[340px]
                      shrink-0
                      snap-center

                      overflow-hidden

                      rounded-[20px]

                      border
                      border-[#D8E2E8]

                      bg-white

                      p-5

                      shadow-[0_12px_34px_rgba(11,42,82,0.055)]

                      min-[390px]:w-[82vw]

                      sm:w-[360px]
                      sm:min-w-[360px]
                      sm:max-w-[360px]
                      sm:p-6
                    "
                  >
                    {/* SOFT COLOR WASH */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none

                        absolute
                        -right-16
                        -top-16

                        h-40
                        w-40

                        rounded-full

                        blur-[45px]
                      "
                      style={{
                        backgroundColor: step.soft,
                        opacity: 0.9,
                      }}
                    />

                    {/* GHOST NUMBER */}

                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none

                        absolute
                        -right-1
                        -top-4

                        font-serif
                        text-[5.4rem]
                        leading-none
                        tracking-[-0.08em]

                        text-[#0B2A52]/[0.035]
                      "
                    >
                      {step.number}
                    </span>

                    <div className="relative z-10">
                      {/* TOP */}

                      <div
                        className="
                          flex
                          items-start
                          justify-between
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

                            rounded-[13px]

                            border
                            border-white/80
                          "
                          style={{
                            backgroundColor: step.soft,
                            color: step.accent,
                          }}
                        >
                          <Icon size={17} strokeWidth={1.7} />
                        </span>

                        <span
                          className="
                            rounded-full

                            border
                            border-[#DCE4E9]

                            bg-white/80

                            px-2.5
                            py-1.5

                            text-[0.48rem]
                            font-semibold
                            uppercase
                            tracking-[0.13em]

                            text-[#788B9B]
                          "
                        >
                          {step.number} / 07
                        </span>
                      </div>

                      {/* STAGE */}

                      <span
                        className="
                          mt-5
                          block

                          text-[0.48rem]
                          font-semibold
                          uppercase
                          tracking-[0.18em]

                          text-[#92745C]
                        "
                      >
                        {step.stage}
                      </span>

                      {/* ACTION */}

                      <h3
                        className="
                          mt-2

                          font-serif
                          text-[1.45rem]
                          font-normal
                          leading-[1.1]
                          tracking-[-0.035em]

                          text-[#0B2A52]

                          sm:text-[1.55rem]
                        "
                      >
                        {step.action}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-4

                          text-[0.76rem]
                          leading-[1.62]

                          text-[#60758A]
                        "
                      >
                        {step.description}
                      </p>

                      {/* FOCUS */}

                      <div
                        className="
                          mt-5

                          border-t
                          border-[#E1E7EB]

                          pt-4
                        "
                      >
                        <span
                          className="
                            text-[0.43rem]
                            font-semibold
                            uppercase
                            tracking-[0.17em]

                            text-[#97A4AF]
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
                          {step.focus.map((item) => (
                            <span
                              key={item}
                              className="
                                inline-flex
                                items-center
                                gap-1.5

                                rounded-full

                                bg-[#F3F6F8]

                                px-2.5
                                py-1.5

                                text-[0.56rem]
                                font-medium

                                text-[#536D83]
                              "
                            >
                              <Check
                                size={8}
                                strokeWidth={2.2}
                                className="text-[#A97C52]"
                              />

                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* SHORT INSIGHT */}

                      <p
                        className="
                          mt-5

                          border-l-2

                          pl-3.5

                          font-serif
                          text-[0.7rem]
                          leading-[1.58]

                          text-[#405D76]
                        "
                        style={{
                          borderColor: step.accent,
                        }}
                      >
                        {step.note}
                      </p>

                      {/* BOTTOM STEP INDICATOR */}

                      <div
                        className="
                          mt-5

                          flex
                          items-center
                          justify-between
                          gap-4
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-1
                          "
                        >
                          {steps.map((_, dotIndex) => (
                            <span
                              key={dotIndex}
                              className={`
                                block
                                h-[3px]
                                rounded-full

                                ${
                                  dotIndex === index
                                    ? "w-7 bg-[#0B2A52]"
                                    : dotIndex < index
                                      ? "w-3 bg-[#B79A72]"
                                      : "w-3 bg-[#D7E1E7]"
                                }
                              `}
                            />
                          ))}
                        </div>

                        {index < steps.length - 1 ? (
                          <span
                            className="
                              inline-flex
                              items-center
                              gap-1.5

                              text-[0.48rem]
                              font-semibold
                              uppercase
                              tracking-[0.13em]

                              text-[#718496]
                            "
                          >
                            Swipe
                            <ArrowRight
                              size={10}
                              strokeWidth={1.8}
                              className="text-[#B18458]"
                            />
                          </span>
                        ) : (
                          <span
                            className="
                              text-[0.48rem]
                              font-semibold
                              uppercase
                              tracking-[0.13em]

                              text-[#B18458]
                            "
                          >
                            Improve
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* =================================================
              TABLET — STEP SELECTOR + ACTIVE DETAIL
          ================================================= */}

          <div className="hidden md:block lg:hidden">
            {/* TABLET STEP SELECTOR */}

            <div
              className="
                mt-8

                grid
                grid-cols-4
                gap-2.5
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
                      w-full
                      items-center
                      justify-center
                      gap-2

                      rounded-full

                      border

                      px-2.5
                      py-2.5

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
                    <span className="text-[0.42rem] font-semibold">
                      {step.number}
                    </span>

                    <span
                      className="
                        text-[0.43rem]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                      "
                    >
                      {step.stage}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE TABLET DETAIL */}

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

                  mt-8

                  overflow-hidden

                  border-y
                  border-[#D9E3EA]

                  py-10
                "
              >
                {/* GHOST NUMBER */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute
                    right-0
                    top-[-28px]

                    font-serif
                    text-[7.5rem]
                    leading-none
                    tracking-[-0.08em]

                    text-[#0B2A52]/[0.035]
                  "
                >
                  {activeStep.number}
                </span>

                <div
                  className="
                    relative
                    z-10

                    grid
                    grid-cols-[1fr_0.8fr]
                    gap-8
                  "
                >
                  {/* LEFT */}

                  <div>
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center

                        rounded-[16px]
                      "
                      style={{
                        backgroundColor: activeStep.soft,
                        color: activeStep.accent,
                      }}
                    >
                      <ActiveIcon size={20} strokeWidth={1.65} />
                    </div>

                    <span
                      className="
                        mt-5
                        block

                        text-[0.46rem]
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
                        mt-3

                        max-w-[560px]

                        font-serif
                        text-[2.05rem]
                        leading-[1.08]
                        tracking-[-0.04em]

                        text-[#0B2A52]
                      "
                    >
                      {activeStep.action}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-[620px]

                        font-serif
                        text-[0.88rem]
                        leading-[1.7]

                        text-[#60758A]
                      "
                    >
                      {activeStep.description}
                    </p>

                    <p
                      className="
                        mt-6
                        max-w-[620px]

                        border-l-2

                        pl-4

                        font-serif
                        text-[0.82rem]
                        leading-[1.7]

                        text-[#405D76]
                      "
                      style={{
                        borderColor: activeStep.accent,
                      }}
                    >
                      {activeStep.note}
                    </p>
                  </div>

                  {/* RIGHT / FOCUS */}

                  <div
                    className="
                      border-l
                      border-[#E0E7EC]

                      pl-7
                    "
                  >
                    <span
                      className="
                        text-[0.43rem]
                        font-semibold
                        uppercase
                        tracking-[0.18em]

                        text-[#91A0AD]
                      "
                    >
                      Focus
                    </span>

                    <div className="mt-4 space-y-3">
                      {activeStep.focus.map((item) => (
                        <div
                          key={item}
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
                            <Check size={9} strokeWidth={2.4} />
                          </span>

                          <span
                            className="
                              text-[0.7rem]
                              font-medium

                              text-[#536D83]
                            "
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {activeIndex < steps.length - 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex((current) =>
                            Math.min(current + 1, steps.length - 1),
                          )
                        }
                        className="
                          mt-7

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
                            tracking-[0.15em]

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
                  </div>
                </div>
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
            mt-12
            max-w-[900px]

            text-center

            sm:mt-14
            md:mt-16
            lg:mt-20
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
              text-[1rem]
              leading-[1.5]

              sm:text-[1.15rem]
              md:text-[1.25rem]

              text-[#0B2A52]

              lg:text-[1.35rem]
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