"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Search,
  Wrench,
  Sparkles,
} from "lucide-react";

const startingPoints = [
  {
    number: "01",
    text: "What you are trying to improve",
    icon: Search,
  },
  {
    number: "02",
    text: "What feels unclear",
    icon: MessageCircle,
  },
  {
    number: "03",
    text: "What is not working",
    icon: Wrench,
  },
  {
    number: "04",
    text: "What you want to build next",
    icon: Sparkles,
  },
];

export default function FinalCTASection() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="final-cta"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          PAGE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-[linear-gradient(180deg,#FFFFFF_0%,#F6FAFE_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[300px]
          -left-[200px]
          -z-20
          h-[600px]
          w-[760px]
          rounded-full
          bg-[#CFE3F7]/45
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          -top-[240px]
          -z-20
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#B79A72]/[0.08]
          blur-[120px]
        "
      />

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            MAIN CTA FRAME
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 42,
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
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            relative
            overflow-hidden
            rounded-[34px]
            border
            border-[#0B2A52]/10
            bg-white
            shadow-[0_30px_90px_rgba(11,42,82,0.10)]
          "
        >
          {/* =================================================
              DECORATIVE BACKGROUND
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[linear-gradient(115deg,#FFFFFF_0%,#FFFFFF_48%,#F1F7FD_100%)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[120px]
              -top-[130px]
              h-[420px]
              w-[420px]
              rounded-full
              border
              border-[#8FB5DB]/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[45px]
              -top-[55px]
              h-[270px]
              w-[270px]
              rounded-full
              border
              border-[#B79A72]/22
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[170px]
              left-[20%]
              h-[360px]
              w-[600px]
              rounded-[50%]
              bg-[#DCEAF8]/55
              blur-[80px]
            "
          />

          {/* giant decorative word */}
          <span
            className="
              pointer-events-none
              absolute
              -bottom-8
              right-8
              hidden
              select-none
              font-serif
              text-[8rem]
              leading-none
              tracking-[-0.07em]
              text-[#0B2A52]/[0.025]
              xl:block
            "
          >
            NEXT
          </span>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              gap-12
              px-6
              py-10
              sm:px-9
              sm:py-12
              lg:grid-cols-[0.58fr_0.42fr]
              lg:items-center
              lg:gap-16
              lg:px-12
              lg:py-16
              xl:px-16
              xl:py-20
            "
          >
            {/* =================================================
                LEFT
            ================================================= */}

            <div>
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -26,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
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
                  flex
                  items-center
                  gap-4
                "
              >
                <span className="h-px w-9 bg-[#B79A72]" />

                <span
                  className="
                    text-[0.66rem]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#A17A50]
                    sm:text-[0.7rem]
                  "
                >
                  Your Project Could Be Next
                </span>
              </motion.div>

              {/* MAIN HEADING */}
              <motion.h2
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
                  amount: 0.4,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.06,
                  ease,
                }}
                className="
                  mt-6
                  max-w-[720px]
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
                We’re Building the{" "}
                <span className="text-[#B79A72]">
                  Portfolio.
                </span>
              </motion.h2>

              <motion.p
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
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.13,
                  ease,
                }}
                className="
                  mt-5
                  font-serif
                  text-[1.45rem]
                  font-medium
                  leading-[1.35]
                  tracking-[-0.025em]
                  text-[#34516E]
                  sm:text-[1.7rem]
                  lg:text-[1.85rem]
                "
              >
                Maybe the next project is yours.
              </motion.p>

              <motion.p
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
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.18,
                  ease,
                }}
                className="
                  mt-7
                  max-w-[590px]
                  text-[0.98rem]
                  leading-[1.85]
                  text-[#5C697C]
                  sm:text-[1.03rem]
                "
              >
                You do not need to arrive with a perfect brief. Tell us what
                you are trying to improve, what feels unclear, what is not
                working or what you want to build next.
              </motion.p>

              {/* Principle */}
              <motion.div
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
                  amount: 0.4,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : 0.24,
                }}
                className="
                  mt-7
                  flex
                  items-start
                  gap-4
                  border-l-2
                  border-[#B79A72]
                  pl-5
                "
              >
                <p
                  className="
                    font-serif
                    text-[1.08rem]
                    font-medium
                    leading-[1.6]
                    text-[#0B2A52]
                  "
                >
                  We’ll start by understanding the problem.
                </p>
              </motion.div>

              {/* CTA BUTTONS */}
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
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.3,
                }}
                className="
                  mt-9
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:items-center
                "
              >
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    min-h-[58px]
                    items-center
                    justify-center
                    gap-5
                    rounded-full
                    bg-[linear-gradient(135deg,#0B2A52_0%,#174D80_100%)]
                    px-7
                    text-[0.9rem]
                    font-semibold
                    text-white
                    shadow-[0_16px_38px_rgba(11,42,82,0.20)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_22px_45px_rgba(11,42,82,0.27)]
                  "
                >
                  Start a Project

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D8B67F]
                      text-[#0B2A52]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowRight size={15} strokeWidth={2} />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    min-h-[58px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#0B2A52]/15
                    bg-white/80
                    px-7
                    text-[0.9rem]
                    font-semibold
                    text-[#0B2A52]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#B79A72]/55
                    hover:bg-[#FCF8F2]
                  "
                >
                  Talk to Sharp Rays

                  <ArrowUpRight
                    size={16}
                    className="
                      text-[#B79A72]
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </Link>
              </motion.div>
            </div>

            {/* =================================================
                RIGHT — STARTING POINT VISUAL
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 38,
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
                duration: reduceMotion ? 0 : 0.85,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#B8CFE3]
                bg-white/80
                p-5
                shadow-[0_20px_55px_rgba(11,42,82,0.07)]
                backdrop-blur-xl
                sm:p-6
              "
            >
              {/* top */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#0B2A52]/[0.07]
                  pb-5
                "
              >
                <div>
                  <p
                    className="
                      text-[0.56rem]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#A17A50]
                    "
                  >
                    Start Here
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[1.35rem]
                      font-medium
                      tracking-[-0.025em]
                      text-[#0B2A52]
                    "
                  >
                    You don’t need the answer yet.
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                  "
                >
                  <MessageCircle size={17} strokeWidth={1.7} />
                </div>
              </div>

              {/* PROMPTS */}
              <div className="mt-3">
                {startingPoints.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
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
                      viewport={{
                        once: true,
                        amount: 0.45,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        delay: reduceMotion ? 0 : 0.22 + index * 0.07,
                        ease,
                      }}
                      className={`
                        group
                        flex
                        items-center
                        gap-4
                        py-4

                        ${
                          index !== startingPoints.length - 1
                            ? "border-b border-[#0B2A52]/[0.07]"
                            : ""
                        }
                      `}
                    >
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-[13px]
                          border
                          border-[#C7D9E8]
                          bg-[#F1F7FC]
                          text-[#0B2A52]
                          transition-all
                          duration-300
                          group-hover:border-[#B79A72]/45
                          group-hover:bg-[#FCF7EF]
                        "
                      >
                        <Icon size={16} strokeWidth={1.7} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <span
                          className="
                            text-[0.5rem]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[#9AA4B0]
                          "
                        >
                          {item.number}
                        </span>

                        <p
                          className="
                            mt-1
                            text-[0.82rem]
                            font-medium
                            leading-6
                            text-[#42566D]
                          "
                        >
                          {item.text}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="
                          shrink-0
                          text-[#0B2A52]/20
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-[#B79A72]
                        "
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* bottom answer */}
              <div
                className="
                  mt-4
                  rounded-[18px]
                  bg-[#0B2A52]
                  px-5
                  py-4
                "
              >
                <p
                  className="
                    text-[0.55rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#D8B67F]
                  "
                >
                  Our first job
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[1rem]
                    leading-[1.5]
                    text-white
                  "
                >
                  Understand what needs to change before deciding what needs to
                  be built.
                </p>
              </div>
            </motion.div>
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
                    y: 15,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="
              relative
              z-10
              flex
              flex-col
              gap-3
              border-t
              border-[#0B2A52]/[0.08]
              bg-white/55
              px-6
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-9
              lg:px-12
              xl:px-16
            "
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />

              <p
                className="
                  text-[0.57rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#8190A2]
                "
              >
                Your next project can start with a conversation
              </p>
            </div>

            <p
              className="
                text-[0.6rem]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#0B2A52]
              "
            >
              Understand
              <span className="mx-2 text-[#B79A72]">·</span>
              Create
              <span className="mx-2 text-[#B79A72]">·</span>
              Build
              <span className="mx-2 text-[#B79A72]">·</span>
              Improve
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}