"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
                style={newYorkFont}
                className="
                  group
                  relative
                  inline-flex
                  min-h-[46px]
                  items-center
                  justify-center
                  overflow-hidden

                  rounded-[16px]

                  border
                  border-[#6285AD]/30

                  bg-white/80

                  px-5
                  py-[11px]

                  text-[13px]
                  font-medium
                  tracking-[-0.01em]
                  text-[#0B2A52]

                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]

                  backdrop-blur-[8px]

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:border-[#6285AD]/40
                  hover:bg-white
                  hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

                  active:translate-y-0

                  sm:min-h-[48px]
                  sm:px-6
                  sm:py-3
                  sm:text-[14px]

                  md:text-[15px]
                "
              >
                {/* STATIC SOFT BORDER */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-[2px]
                    rounded-[13px]
                    border
                    border-white/60
                  "
                />

                {/* VERY SUBTLE INNER LIGHT */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-4
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                  "
                />

                {/* TEXT */}
                <span
                  className="
                    relative
                    z-10
                    whitespace-nowrap
                    text-[#0B2A52]
                  "
                >
                  Automate My Workflow
                </span>
              </a>

              {/* SECONDARY */}

              <a
                href="#what-we-can-automate"
                style={newYorkFont}
                className="
                  group
                  relative
                  inline-flex
                  min-h-[46px]
                  items-center
                  justify-center
                  overflow-hidden

                  rounded-[16px]

                  border
                  border-[#6285AD]/30

                  bg-white/80

                  px-5
                  py-[11px]

                  text-[13px]
                  font-medium
                  tracking-[-0.01em]
                  text-[#0B2A52]

                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]

                  backdrop-blur-[8px]

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:border-[#6285AD]/40
                  hover:bg-white
                  hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

                  active:translate-y-0

                  sm:min-h-[48px]
                  sm:px-6
                  sm:py-3
                  sm:text-[14px]

                  md:text-[15px]
                "
              >
                {/* STATIC SOFT BORDER */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-[2px]
                    rounded-[13px]
                    border
                    border-white/60
                  "
                />

                {/* VERY SUBTLE INNER LIGHT */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-4
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                  "
                />

                {/* TEXT */}
                <span
                  className="
                    relative
                    z-10
                    whitespace-nowrap
                    text-[#0B2A52]
                  "
                >
                  Explore What We Can Automate
                </span>
              </a>
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


            {/* SMALL TOP META */}

         
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}

        
      </div>
    </section>
  );
}