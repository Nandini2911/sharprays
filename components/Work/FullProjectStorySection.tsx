"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BookOpen } from "lucide-react";

const chapters = [
  {
    number: "01",
    title: "OVERVIEW",
    question: "What was the project?",
  },
  {
    number: "02",
    title: "CHALLENGE",
    question: "What needed to change?",
  },
  {
    number: "03",
    title: "OBJECTIVE",
    question: "What were we trying to achieve?",
  },
  {
    number: "04",
    title: "THINKING",
    question: "What shaped the direction?",
  },
  {
    number: "05",
    title: "EXECUTION",
    question: "What did we actually create?",
  },
  {
    number: "06",
    title: "DETAILS",
    question: "What decisions made the biggest difference?",
  },
  {
    number: "07",
    title: "OUTCOME",
    question: "What changed after the work?",
  },
  {
    number: "08",
    title: "LEARNING",
    question: "What did the project teach us?",
  },
];

export default function FullProjectStorySection() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="full-project-story"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
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
          bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_52%,#FFFFFF_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[260px]
          top-[20%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#D9E9F8]/35
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[260px]
          bottom-[0%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#B79A72]/[0.07]
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
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
                  y: 30,
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
          className="mx-auto max-w-[980px] text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-[#B79A72]" />

            <p
              className="
                text-[0.68rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#A17A50]
                sm:text-[0.72rem]
              "
            >
              Project Stories
            </p>

            <span className="h-px w-9 bg-[#B79A72]" />
          </div>

          <h2
            className="
              mt-6
              font-serif
              font-medium
              leading-[1.05]
              tracking-[-0.045em]
              text-[#0B2A52]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            More Than a{" "}
            <span className="text-[#B79A72]">
              Gallery.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[720px]
              text-[0.97rem]
              leading-[1.85]
              text-[#5B687A]
              sm:text-[1.03rem]
            "
          >
            As the portfolio grows, individual project pages will go deeper.
            A full Sharp Rays project story can include:
          </p>
        </motion.div>

        {/* =====================================================
            PROJECT STORY FRAME
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 36,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.08,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[1180px]
            overflow-hidden
            rounded-[30px]
            border
            border-[#0B2A52]/10
            bg-white
            shadow-[0_28px_70px_rgba(11,42,82,0.06)]
          "
        >
          {/* top document bar */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#0B2A52]/[0.07]
              bg-[#FBFCFE]
              px-5
              py-4
              sm:px-7
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0B2A52]/20" />
              <span className="h-2 w-2 rounded-full bg-[#7FA5CC]/40" />
              <span className="h-2 w-2 rounded-full bg-[#B79A72]/55" />
            </div>

            <div className="flex items-center gap-2.5">
              <BookOpen
                size={14}
                strokeWidth={1.7}
                className="text-[#B79A72]"
              />

              <span
                className="
                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#7C8797]
                "
              >
                Full Project Story
              </span>
            </div>
          </div>

          {/* =================================================
              INTRO STRIP
          ================================================= */}

          <div
            className="
              grid
              gap-7
              border-b
              border-[#0B2A52]/[0.07]
              bg-[linear-gradient(115deg,#F3F8FD_0%,#FFFFFF_58%,#FBF7F1_100%)]
              px-6
              py-8
              sm:px-8
              sm:py-10
              lg:grid-cols-[0.32fr_0.68fr]
              lg:items-end
              lg:px-10
            "
          >
            <div>
              <p
                className="
                  text-[0.6rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17A50]
                "
              >
                The Structure
              </p>

              <div className="mt-4 h-[2px] w-10 bg-[#B79A72]" />
            </div>

            <p
              className="
                max-w-[740px]
                font-serif
                text-[1.5rem]
                font-medium
                leading-[1.4]
                tracking-[-0.025em]
                text-[#0B2A52]
                sm:text-[1.75rem]
              "
            >
              A useful case study should explain{" "}
              <span className="text-[#B79A72]">
                how the project moved from problem to outcome.
              </span>
            </p>
          </div>

          {/* =================================================
              CHAPTERS
          ================================================= */}

          <div className="relative">
            {/* animated vertical line */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-[41px]
                top-0
                hidden
                w-px
                bg-[#0B2A52]/[0.08]
                sm:block
              "
            />

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      scaleY: 0,
                    }
              }
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.15,
                delay: reduceMotion ? 0 : 0.2,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                bottom-0
                left-[41px]
                top-0
                hidden
                w-px
                origin-top
                bg-gradient-to-b
                from-[#0B2A52]
                via-[#6D99C2]
                to-[#B79A72]
                sm:block
              "
            />

            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.number}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: index % 2 === 0 ? -24 : 24,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.45,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : index * 0.045,
                  ease,
                }}
                className={`
                  group
                  relative
                  grid
                  gap-4
                  px-5
                  py-6
                  sm:grid-cols-[46px_0.28fr_0.72fr]
                  sm:items-center
                  sm:gap-6
                  sm:px-7
                  lg:px-9
                  ${
                    index !== chapters.length - 1
                      ? "border-b border-[#0B2A52]/[0.07]"
                      : ""
                  }
                `}
              >
                {/* number */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0B2A52]/12
                    bg-white
                    shadow-[0_6px_18px_rgba(11,42,82,0.05)]
                    transition-all
                    duration-300
                    group-hover:border-[#B79A72]
                    group-hover:bg-[#FCF8F2]
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[0.7rem]
                      text-[#0B2A52]
                    "
                  >
                    {chapter.number}
                  </span>
                </div>

                {/* title */}
                <div>
                  <p
                    className="
                      text-[0.61rem]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#0B2A52]
                    "
                  >
                    {chapter.title}
                  </p>
                </div>

                {/* question */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-5
                  "
                >
                  <p
                    className="
                      text-[0.9rem]
                      leading-7
                      text-[#617085]
                      sm:text-[0.94rem]
                    "
                  >
                    {chapter.question}
                  </p>

                  <ArrowUpRight
                    size={15}
                    className="
                      hidden
                      shrink-0
                      text-[#0B2A52]/20
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#B79A72]
                      sm:block
                    "
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* =================================================
              END OF STORY STRIP
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              border-t
              border-[#0B2A52]/[0.07]
              bg-[#FBFCFD]
              px-5
              py-4
            "
          >
            <span
              className="
                text-[0.55rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#7E8998]
              "
            >
              Problem
            </span>

            <ArrowDown
              size={12}
              className="rotate-[-90deg] text-[#B79A72]"
            />

            <span
              className="
                text-[0.55rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#7E8998]
              "
            >
              Direction
            </span>

            <ArrowDown
              size={12}
              className="rotate-[-90deg] text-[#B79A72]"
            />

            <span
              className="
                text-[0.55rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#7E8998]
              "
            >
              Work
            </span>

            <ArrowDown
              size={12}
              className="rotate-[-90deg] text-[#B79A72]"
            />

            <span
              className="
                text-[0.55rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#0B2A52]
              "
            >
              Outcome
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            THE GOAL
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[1180px]
            border-t
            border-[#0B2A52]/10
            pt-11
            lg:mt-20
            lg:grid
            lg:grid-cols-[0.22fr_0.78fr]
            lg:items-start
            lg:gap-10
            lg:pt-14
          "
        >
          <div>
            <p
              className="
                text-[0.62rem]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#A17A50]
              "
            >
              The Goal
            </p>

            <div className="mt-4 h-[2px] w-10 bg-[#B79A72]" />
          </div>

          <div className="mt-7 lg:mt-0">
            <p
              className="
                max-w-[900px]
                font-serif
                text-[2rem]
                font-medium
                leading-[1.28]
                tracking-[-0.035em]
                text-[#0B2A52]
                sm:text-[2.3rem]
                lg:text-[2.55rem]
              "
            >
              Make every case study{" "}
              <span className="text-[#B79A72]">
                useful
              </span>{" "}
              even before someone contacts us.
            </p>

            <p
              className="
                mt-5
                max-w-[720px]
                text-[0.91rem]
                leading-7
                text-[#687589]
              "
            >
              The project page should help someone understand the problem,
              the decisions behind the work and what changed — not simply show
              a collection of finished screens.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}