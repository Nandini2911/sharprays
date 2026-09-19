"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function AiAutomationHero() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-automation-hero"
      aria-labelledby="ai-automation-heading"
      className="
        relative
        overflow-hidden
        bg-white
        pb-20
        pt-32
        sm:pb-24
        sm:pt-36
        lg:pb-28
        lg:pt-40
        xl:pb-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        <div
          className="
            grid
            items-center
            gap-14
            xl:grid-cols-[0.44fr_0.56fr]
            xl:gap-16
          "
        >
          {/* =====================================================
              LEFT
          ===================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -32,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              relative
              z-10
              max-w-[670px]
            "
          >
            {/* EYEBROW */}

            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.32em]
                  text-[#B18458]
                  sm:text-[10px]
                "
              >
                AI Automation
              </span>
            </div>

            {/* HEADING */}

            <h1
              id="ai-automation-heading"
              style={newYorkFont}
              className="
                mt-7
                max-w-[720px]

                text-[2.1rem]
                font-light
                leading-[0.96]
                tracking-[-0.05em]
                text-[#0B2A52]

                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Automate the Work That Shouldn&apos;t Need{" "}
              <span className="text-[#B18458]">
                Your Attention.
              </span>
            </h1>

            {/* COPY */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
              className="
                mt-7
                max-w-[600px]
              "
            >
              <p
                style={newYorkFont}
                className="
                  text-[15px]
                  leading-[1.7]
                  text-[#405E79]
                  sm:text-[16px]
                "
              >
                Sharp Rays helps businesses design AI-powered workflows that
                reduce repetitive work, connect systems and keep important
                processes moving.
              </p>

              <p
                style={newYorkFont}
                className="
                  mt-4
                  text-[15px]
                  leading-[1.7]
                  text-[#405E79]
                  sm:text-[16px]
                "
              >
                From lead qualification and CRM workflows to customer support,
                reporting, follow-ups and internal operations, we identify
                where automation can remove friction without removing the human
                judgement that matters.
              </p>
            </motion.div>

            {/* KEY MESSAGE */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 16,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.17,
                ease,
              }}
              className="
                mt-7
                flex
                items-start
                gap-4
              "
            >
              <span
                className="
                  mt-1
                  h-[54px]
                  w-[2px]
                  shrink-0
                  bg-[#C6A77A]
                "
              />

              <p
                style={newYorkFont}
                className="
                  text-[1.35rem]
                  font-light
                  leading-[1.18]
                  tracking-[-0.03em]
                  text-[#0B2A52]
                  sm:text-[1.5rem]
                "
              >
                Less manual repetition.
                <br />
                More time for useful work.
              </p>
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.72,
                delay: reduceMotion ? 0 : 0.23,
                ease,
              }}
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              {/* PRIMARY */}

              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-between
                  gap-7
                  rounded-full
                  bg-[#0B2A52]
                  px-6
                  py-3
                  text-white

                  shadow-[0_14px_32px_rgba(11,42,82,0.17)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#123E70]
                  hover:shadow-[0_19px_40px_rgba(11,42,82,0.22)]

                  sm:min-w-[225px]
                "
              >
                <span
                  style={newYorkFont}
                  className="text-[13px]"
                >
                  Automate My Workflow
                </span>

                <span
                  className="
                    flex
                    h-[32px]
                    w-[32px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B18458]

                    transition-transform
                    duration-300

                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.45}
                  />
                </span>
              </a>

              {/* SECONDARY */}

              <a
                href="#what-we-can-automate"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  px-4
                  py-3
                  text-[#0B2A52]
                "
              >
                <span
                  style={newYorkFont}
                  className="
                    border-b
                    border-[#0B2A52]/20
                    pb-1
                    text-[13px]
                    transition-colors
                    duration-300

                    group-hover:border-[#B18458]
                  "
                >
                  Explore What We Can Automate
                </span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.45}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </motion.div>

            {/* SUPPORTING LINE */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 10,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2
              "
            >
              {[
                "CONNECT",
                "AUTOMATE",
                "REVIEW",
                "IMPROVE",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-5"
                >
                  <span
                    style={newYorkFont}
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.28em]
                      text-[#0B2A52]/42
                    "
                  >
                    {item}
                  </span>

                  {index < 3 && (
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-[#B18458]
                      "
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 34,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.08,
              ease,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[820px]
            "
          >
            {/* VERTICAL SIDE LABEL */}

            <div
              className="
                absolute
                -left-7
                top-1/2
                z-20
                hidden
                -translate-y-1/2
                xl:flex
                xl:flex-col
                xl:items-center
                xl:gap-4
              "
            >
              <span
                className="
                  h-16
                  w-px
                  bg-[#C6A77A]
                "
              />

              <span
                style={newYorkFont}
                className="
                  rotate-180
                  text-[7px]
                  uppercase
                  tracking-[0.28em]
                  text-[#0B2A52]/40
                  [writing-mode:vertical-rl]
                "
              >
                WORKFLOW AUTOMATION
              </span>

              <span
                className="
                  h-16
                  w-px
                  bg-[#0B2A52]/10
                "
              />
            </div>

            {/* IMAGE FRAME */}

            <div
              className="
                relative
                overflow-hidden

                rounded-[34px_34px_110px_34px]

                border
                border-[#DCE6ED]
                bg-[#F5F9FC]

                shadow-[0_30px_75px_rgba(11,42,82,0.075)]

                sm:rounded-[42px_42px_135px_42px]
              "
            >
              <Image
                src="/aihero.webp"
                alt="AI automation connecting business systems, customer support, leads, scheduling and reporting"
                width={1536}
                height={1024}
                priority
                className="
                  h-auto
                  w-full
                  object-cover
                "
              />

              {/* SOFT INNER EDGE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[inherit]
                  ring-1
                  ring-inset
                  ring-white/80
                "
              />
            </div>

            {/* FLOATING NOTE */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.35,
                ease,
              }}
              className="
                relative
                z-20
                mx-auto
                -mt-8
                w-[88%]

                rounded-[22px]
                border
                border-[#D8E4EC]
                bg-white/95

                px-5
                py-4

                shadow-[0_16px_38px_rgba(11,42,82,0.075)]
                backdrop-blur-sm

                sm:absolute
                sm:-bottom-8
                sm:left-8
                sm:mt-0
                sm:w-auto
                sm:max-w-[330px]
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
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EDF5FA]
                    text-[#0B2A52]
                  "
                >
                  <Sparkles
                    size={18}
                    strokeWidth={1.45}
                  />
                </div>

                <div>
                  <span
                    style={newYorkFont}
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.22em]
                      text-[#B18458]
                    "
                  >
                    AI + HUMAN JUDGEMENT
                  </span>

                  <p
                    style={newYorkFont}
                    className="
                      mt-1
                      text-[12px]
                      leading-[1.45]
                      text-[#0B2A52]
                    "
                  >
                    Automate the repetition. Keep people in control.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SMALL TOP META */}

            <div
              className="
                mt-12
                flex
                items-center
                justify-between
                gap-5
                sm:mt-10
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-[7px]
                    w-[7px]
                    rounded-full
                    bg-[#B18458]
                  "
                />

                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.23em]
                    text-[#0B2A52]/40
                  "
                >
                  CONNECTED SYSTEMS
                </span>
              </div>

              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.23em]
                  text-[#0B2A52]/40
                "
              >
                LESS FRICTION
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scaleX: 0,
                }
          }
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.38,
            ease,
          }}
          className="
            mt-16
            h-px
            w-full
            origin-left
            bg-[#0B2A52]/10
          "
        />
      </div>
    </section>
  );
}