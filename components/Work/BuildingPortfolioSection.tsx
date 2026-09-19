"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  BriefcaseBusiness,
  Layers3,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const projectTypes = [
  {
    number: "01",
    label: "CLIENT WORK",
    title: "Created for a real client",
    description:
      "Work delivered for a real business is clearly labelled as client work.",
    icon: BriefcaseBusiness,
    bg: "bg-[#F1F7FD]",
    border: "border-[#AFC9E4]",
    iconBg: "bg-[#DCEAF8]",
    iconColor: "text-[#245D91]",
  },
  {
    number: "02",
    label: "INTERNAL PROJECT",
    title: "Built inside Sharp Rays",
    description:
      "Work created for our own brand, systems or digital experience is labelled as internal.",
    icon: Layers3,
    bg: "bg-[#FBF7F0]",
    border: "border-[#D8C19E]",
    iconBg: "bg-[#F1E5D4]",
    iconColor: "text-[#9A754C]",
  },
  {
    number: "03",
    label: "CONCEPT WORK",
    title: "Explored independently",
    description:
      "Ideas created to explore a problem or demonstrate capability are clearly labelled as concepts.",
    icon: Lightbulb,
    bg: "bg-[#F3F7F5]",
    border: "border-[#BED2CA]",
    iconBg: "bg-[#E2EEE9]",
    iconColor: "text-[#4C796B]",
  },
];

const growth = [
  "More experience",
  "More evidence",
  "More learning",
  "More perspective",
  "Better next project",
];

export default function BuildingPortfolioSection() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="building-the-portfolio"
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
          -left-[280px]
          top-[20%]
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#DCEAF8]/40
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[280px]
          bottom-[4%]
          h-[540px]
          w-[540px]
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
              The Story So Far
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
            New Agency.{" "}
            <span className="text-[#B79A72]">
              Growing Body of Work.
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-7
              max-w-[760px]
              text-[0.97rem]
              leading-[1.85]
              text-[#5B687A]
              sm:text-[1.03rem]
            "
          >
            <p>Sharp Rays is still building its portfolio.</p>

            <p className="mt-2">
              We see that as something to be transparent about rather than
              disguise.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN EDITORIAL PANEL
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-16
            grid
            max-w-[1180px]
            gap-10
            lg:grid-cols-[0.42fr_0.58fr]
            lg:gap-14
          "
        >
          {/* =================================================
              LEFT — STATEMENT
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -35,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
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
              flex
              flex-col
              justify-between
              border-l
              border-[#0B2A52]/10
              pl-6
              sm:pl-8
            "
          >
            <div>
              <p
                className="
                  text-[0.61rem]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#B79A72]
                "
              >
                How we label the work
              </p>

              <p
                className="
                  mt-6
                  max-w-[470px]
                  font-serif
                  text-[1.65rem]
                  font-medium
                  leading-[1.45]
                  tracking-[-0.025em]
                  text-[#0B2A52]
                  sm:text-[1.9rem]
                "
              >
                You should always know{" "}
                <span className="text-[#B79A72]">
                  exactly what you are looking at.
                </span>
              </p>

              <p
                className="
                  mt-6
                  max-w-[470px]
                  text-[0.93rem]
                  leading-7
                  text-[#667386]
                "
              >
                Client work, internal projects and concept work are different
                things. We label them accordingly instead of presenting
                everything as the same kind of proof.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <ArrowDownRight
                size={17}
                className="text-[#B79A72]"
              />

              <span
                className="
                  text-[0.57rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#7C8898]
                "
              >
                Clear label. Clear context.
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — THREE LABELS
          ================================================= */}

          <div className="space-y-3">
            {projectTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 30,
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
                    duration: reduceMotion ? 0 : 0.62,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease,
                  }}
                  className={`
                    group
                    grid
                    gap-4
                    rounded-[22px]
                    border
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_35px_rgba(11,42,82,0.06)]
                    sm:grid-cols-[auto_1fr_auto]
                    sm:items-center
                    sm:p-6
                    ${item.bg}
                    ${item.border}
                  `}
                >
                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[14px]
                      ${item.iconBg}
                      ${item.iconColor}
                    `}
                  >
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="
                          text-[0.55rem]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-[#8C97A5]
                        "
                      >
                        {item.number}
                      </span>

                      <span className="h-px w-5 bg-[#0B2A52]/15" />

                      <span
                        className="
                          text-[0.61rem]
                          font-bold
                          uppercase
                          tracking-[0.17em]
                          text-[#0B2A52]
                        "
                      >
                        {item.label}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-2
                        text-[0.96rem]
                        font-semibold
                        text-[#0B2A52]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        max-w-[490px]
                        text-[0.74rem]
                        leading-5
                        text-[#647184]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="
                      hidden
                      text-[#0B2A52]/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#B79A72]
                      sm:block
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            HONESTY STATEMENT
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 26,
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
            max-w-[1180px]
            border-y
            border-[#0B2A52]/10
            py-10
            sm:py-12
          "
        >
          <div
            className="
              grid
              gap-6
              lg:grid-cols-[0.2fr_0.8fr]
              lg:items-start
            "
          >
            <p
              className="
                text-[0.61rem]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#A17A50]
              "
            >
              Our Position
            </p>

            <p
              className="
                max-w-[900px]
                font-serif
                text-[1.55rem]
                font-medium
                leading-[1.45]
                tracking-[-0.025em]
                text-[#0B2A52]
                sm:text-[1.8rem]
                lg:text-[2rem]
              "
            >
              We would rather show you{" "}
              <span className="text-[#B79A72]">
                how we think and what we can genuinely build
              </span>{" "}
              than manufacture a history that does not exist.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            GROWING PORTFOLIO
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[1180px]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[0.61rem]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#A17A50]
                "
              >
                Every New Project Adds
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[1.35rem]
                  leading-[1.4]
                  text-[#0B2A52]
                  sm:text-[1.55rem]
                "
              >
                The portfolio grows with the work.
              </p>
            </div>

            <p
              className="
                max-w-[430px]
                text-[0.83rem]
                leading-6
                text-[#738093]
              "
            >
              And every project creates another opportunity to make the next
              one better.
            </p>
          </div>

          {/* progression */}
          <div
            className="
              relative
              mt-9
              grid
              gap-0
              border-y
              border-[#0B2A52]/10
              sm:grid-cols-5
            "
          >
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
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.15,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                left-0
                right-0
                top-0
                hidden
                h-[2px]
                origin-left
                bg-gradient-to-r
                from-[#0B2A52]
                via-[#6E9BC7]
                to-[#B79A72]
                sm:block
              "
            />

            {growth.map((item, index) => (
              <motion.div
                key={item}
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
                  amount: 0.45,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
                className={`
                  relative
                  py-6
                  sm:px-5
                  sm:py-8
                  ${
                    index !== growth.length - 1
                      ? "border-b border-[#0B2A52]/[0.08] sm:border-b-0 sm:border-r"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    text-[0.53rem]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#B79A72]
                  "
                >
                  0{index + 1}
                </span>

                <p
                  className="
                    mt-3
                    text-[0.84rem]
                    font-semibold
                    text-[#0B2A52]
                  "
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}