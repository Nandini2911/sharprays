"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CircleHelp,
  Compass,
  MousePointer2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const questions = [
  {
    number: "01",
    question: "Am I in the right place?",
    position:
      "lg:absolute lg:left-[4%] lg:top-[15%] xl:left-[6%]",
  },
  {
    number: "02",
    question: "Does this business solve my problem?",
    position:
      "lg:absolute lg:left-[2%] lg:top-[51%] xl:left-[4%]",
  },
  {
    number: "03",
    question: "Can I trust them?",
    position:
      "lg:absolute lg:left-[20%] lg:bottom-[7%] xl:left-[23%]",
  },
  {
    number: "04",
    question: "What exactly do they offer?",
    position:
      "lg:absolute lg:right-[20%] lg:bottom-[7%] xl:right-[23%]",
  },
  {
    number: "05",
    question: "Why should I choose them?",
    position:
      "lg:absolute lg:right-[2%] lg:top-[51%] xl:right-[4%]",
  },
  {
    number: "06",
    question: "What should I do next?",
    position:
      "lg:absolute lg:right-[4%] lg:top-[15%] xl:right-[6%]",
  },
];

const principles = [
  {
    number: "01",
    title: "Every page needs a job.",
  },
  {
    number: "02",
    title: "Every section needs a reason to exist.",
  },
  {
    number: "03",
    title: "Every interaction should move the visitor forward.",
  },
];

export default function WebsitePointOfViewSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.62,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section
      id="website-point-of-view"
      aria-labelledby="website-point-of-view-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          SOFT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[28%]
            h-[520px]
            w-[520px]
            -translate-x-1/2
            rounded-full
            bg-[#F5F8FB]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            bottom-[5%]
            h-[340px]
            w-[340px]
            rounded-full
            bg-[#F7F8FA]
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1420px]
          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            CENTER INTRO
        ===================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            mx-auto
            max-w-[1080px]
            text-center
          "
        >
          {/* EYEBROW */}

          <motion.div
            variants={fadeUp}
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
              sm:mb-6
            "
          >
            <span className="h-px w-8 bg-[#B79A72] sm:w-10" />

            <span
              className="
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#987458]
                sm:text-[0.62rem]
              "
            >
              How We Think About Websites
            </span>

            <span className="h-px w-8 bg-[#B79A72] sm:w-10" />
          </motion.div>

          {/* HEADING */}

          <motion.h2
            id="website-point-of-view-heading"
            variants={fadeUp}
            className="
              mx-auto
              max-w-[1050px]

              font-serif
              text-[2.1rem]
              font-normal
              leading-[1.05]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Your Website Should Answer Questions{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                text-[#A97C52]
              "
            >
              Before It Creates Them.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[780px]
              font-serif
              text-[0.94rem]
              leading-[1.75]
              text-[#5D7288]

              sm:text-[1rem]
            "
          >
            A visitor lands on your website with questions. The strongest
            digital experiences answer them naturally before uncertainty has a
            chance to grow.
          </motion.p>
        </motion.div>

        {/* =====================================================
            DECISION CLARITY VISUAL
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
            amount: 0.12,
          }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-12
            max-w-[1240px]

            sm:mt-14
            lg:mt-16
            lg:min-h-[610px]
          "
        >
          {/* =================================================
              DESKTOP RADIAL LINES
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-[430px]
              w-[430px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#DFE5EA]
              lg:block
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-[330px]
              w-[330px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-[#D9E1E7]
              lg:block
            "
          />

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-[430px]
              w-[430px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              lg:block
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-[-5px]
                h-2.5
                w-2.5
                -translate-x-1/2
                rounded-full
                bg-[#B79A72]
              "
            />

            <span
              className="
                absolute
                bottom-[-4px]
                left-1/2
                h-2
                w-2
                -translate-x-1/2
                rounded-full
                bg-[#0B2A52]
              "
            />
          </motion.div>

          {/* =================================================
              MOBILE / TABLET QUESTIONS GRID
          ================================================= */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2
              sm:gap-4

              lg:block
            "
          >
            {questions.map(({ number, question, position }) => (
              <motion.div
                key={number}
                variants={fadeUp}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                className={`
                  group
                  relative
                  z-20

                  flex
                  min-h-[92px]
                  items-center
                  gap-4

                  rounded-[18px]

                  border
                  border-[#E0E6EB]

                  bg-white

                  px-4
                  py-4

                  shadow-[0_10px_30px_rgba(11,42,82,0.045)]

                  transition-all
                  duration-300

                  hover:border-[#CAD4DD]
                  hover:shadow-[0_16px_38px_rgba(11,42,82,0.075)]

                  sm:px-5

                  lg:w-[250px]

                  xl:w-[275px]

                  ${position}
                `}
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#DEE5EB]

                    bg-[#F7F9FB]

                    text-[0.5rem]
                    font-semibold
                    text-[#8B9AA8]

                    transition-all
                    duration-300

                    group-hover:border-[#0B2A52]
                    group-hover:bg-[#0B2A52]
                    group-hover:text-white
                  "
                >
                  {number}
                </span>

                <p
                  className="
                    font-serif
                    text-[0.96rem]
                    leading-[1.35]
                    text-[#0B2A52]

                    sm:text-[1rem]
                  "
                >
                  {question}
                </p>

                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-[#B79A72]
                    transition-all
                    duration-500
                    group-hover:w-[55%]
                  "
                />
              </motion.div>
            ))}
          </motion.div>

          {/* =================================================
              CENTER DECISION HUB
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.9,
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
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="
              relative
              z-30
              mx-auto
              mt-8

              flex
              min-h-[300px]
              max-w-[430px]
              flex-col
              items-center
              justify-center

              overflow-hidden

              rounded-[28px]

              bg-[#0B2A52]

              px-7
              py-10

              text-center

              shadow-[0_28px_70px_rgba(11,42,82,0.18)]

              sm:min-h-[330px]
              sm:px-10

              lg:absolute
              lg:left-1/2
              lg:top-1/2
              lg:mt-0
              lg:h-[300px]
              lg:w-[300px]
              lg:min-h-0
              lg:-translate-x-1/2
              lg:-translate-y-1/2
              lg:rounded-full
              lg:px-8
              lg:py-8
            "
          >
            {/* inner rings */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[16px]
                rounded-[22px]
                border
                border-white/[0.08]

                lg:rounded-full
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-[34px]
                rounded-[18px]
                border
                border-white/[0.06]

                lg:rounded-full
              "
            />

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
                bg-white/[0.1]
                text-white
                backdrop-blur
              "
            >
              <Compass size={21} strokeWidth={1.6} />
            </div>

            <span
              className="
                relative
                z-10
                mt-5

                text-[0.52rem]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#D7C3A7]
              "
            >
              Decision Clarity
            </span>

            <h3
              className="
                relative
                z-10
                mt-3

                font-serif
                text-[1.5rem]
                font-normal
                leading-[1.12]
                tracking-[-0.03em]
                text-white

                sm:text-[1.7rem]

                lg:text-[1.55rem]
              "
            >
              Make the answer feel{" "}
              <span
                className="
                  block
                  font-serif
                  italic
                  text-[#D2B48B]
                "
              >
                obvious.
              </span>
            </h3>

            <p
              className="
                relative
                z-10
                mt-4
                max-w-[250px]
                font-serif
                text-[0.78rem]
                leading-[1.65]
                text-white/65
              "
            >
              Clear content, hierarchy, interaction and navigation should work
              together to reduce uncertainty.
            </p>
          </motion.div>
        </motion.div>

        {/* =====================================================
            PRINCIPLES
        ===================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          className="
            mx-auto
            mt-12
            grid
            max-w-[1150px]
            grid-cols-1
            gap-0

            overflow-hidden

            rounded-[22px]

            border
            border-[#E1E7EC]

            bg-white

            sm:mt-14

            md:grid-cols-3

            lg:mt-16
          "
        >
          {principles.map(({ number, title }, index) => (
            <motion.div
              key={number}
              variants={fadeUp}
              className={`
                group
                relative

                flex
                items-start
                gap-4

                px-5
                py-6

                transition-colors
                duration-300

                hover:bg-[#FBFCFD]

                sm:px-6

                lg:px-8
                lg:py-7

                ${
                  index !== principles.length - 1
                    ? "border-b border-[#E5E9ED] md:border-b-0 md:border-r"
                    : ""
                }
              `}
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  bg-[#F1F5F8]

                  text-[0.48rem]
                  font-semibold
                  text-[#0B2A52]

                  transition-all
                  duration-300

                  group-hover:bg-[#0B2A52]
                  group-hover:text-white
                "
              >
                {number}
              </span>

              <div>
                <p
                  className="
                    text-[0.5rem]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#A0AAB4]
                  "
                >
                  Principle
                </p>

                <p
                  className="
                    mt-1.5
                    max-w-[280px]

                    font-serif
                    text-[1rem]
                    leading-[1.45]
                    text-[#0B2A52]

                    sm:text-[1.05rem]
                  "
                >
                  {title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =====================================================
            THE SHIFT
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-12
            max-w-[1150px]
            overflow-hidden

            rounded-[24px]

            border
            border-[#DDE4EA]

            bg-[#FBFCFD]

            sm:mt-14
            sm:rounded-[28px]

            lg:mt-16
          "
        >
          {/* top label */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3

              border-b
              border-[#E3E8ED]

              px-5
              py-4
            "
          >
            <span className="h-px w-7 bg-[#B79A72]" />

            <span
              className="
                text-[0.53rem]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#97745A]
              "
            >
              The Shift
            </span>

            <span className="h-px w-7 bg-[#B79A72]" />
          </div>

          <div
            className="
              grid
              lg:grid-cols-[1fr_auto_1fr]
            "
          >
            {/* OLD THINKING */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -20,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease,
              }}
              className="
                flex
                min-h-[210px]
                flex-col
                justify-center
                p-6

                sm:p-8
                lg:p-10
              "
            >
              <p
                className="
                  text-[0.52rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#98A4AF]
                "
              >
                Stop asking
              </p>

              <p
                className="
                  mt-4
                  max-w-[440px]

                  font-serif
                  text-[1.3rem]
                  leading-[1.35]
                  text-[#6B7E91]

                  sm:text-[1.45rem]
                "
              >
                “How can we make the website look more impressive?”
              </p>
            </motion.div>

            {/* CENTER */}

            <div
              className="
                flex
                items-center
                justify-center

                border-y
                border-[#E1E7EC]

                px-6
                py-5

                lg:border-x
                lg:border-y-0
                lg:px-6
              "
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: [0, 5, 0],
                      }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full

                  bg-[#0B2A52]

                  text-white

                  shadow-[0_10px_24px_rgba(11,42,82,0.16)]
                "
              >
                <ArrowRight size={16} />
              </motion.div>
            </div>

            {/* NEW THINKING */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 20,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease,
              }}
              className="
                relative
                flex
                min-h-[210px]
                flex-col
                justify-center
                overflow-hidden

                bg-white

                p-6

                sm:p-8
                lg:p-10
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[80px]
                  top-1/2
                  h-[220px]
                  w-[220px]
                  -translate-y-1/2
                  rounded-full
                  bg-[#F2F6F9]
                  blur-[65px]
                "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#B79A72]
                      text-[#A97C52]
                    "
                  >
                    <MousePointer2 size={13} />
                  </span>

                  <span
                    className="
                      text-[0.52rem]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#98745A]
                    "
                  >
                    Start asking
                  </span>
                </div>

                <p
                  className="
                    mt-4
                    max-w-[520px]

                    font-serif
                    text-[1.75rem]
                    leading-[1.16]
                    tracking-[-0.035em]
                    text-[#0B2A52]

                    sm:text-[2rem]
                    lg:text-[2.15rem]
                  "
                >
                  “How can we make the{" "}
                  <span
                    className="
                      font-serif
                      italic
                      text-[#A97C52]
                    "
                  >
                    decision easier?
                  </span>
                  ”
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL MICRO MESSAGE
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
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease,
          }}
          className="
            mx-auto
            mt-8
            flex
            max-w-[760px]
            items-center
            justify-center
            gap-3
            text-center
          "
        >
          <ShieldCheck
            size={16}
            strokeWidth={1.7}
            className="shrink-0 text-[#B79A72]"
          />

          <p
            className="
              font-serif
              text-[0.86rem]
              leading-6
              text-[#64788C]
            "
          >
            Strong website design reduces uncertainty and makes the next action
            feel natural.
          </p>
        </motion.div>
      </div>
    </section>
  );
}