"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Film,
  Layers3,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type StartPoint = {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

const startPoints: StartPoint[] = [
  {
    number: "01",
    title: "START WITH FOOTAGE",
    text: "You may already have the footage.",
    icon: Film,
  },
  {
    number: "02",
    title: "START WITH AN IDEA",
    text: "You may only have the concept.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "START WITH ONE STRONG ASSET",
    text: "You may need ten campaign variations from one strong idea.",
    icon: Layers3,
  },
];

/* =========================================================
   STARTING POINT
========================================================= */

function StartPointItem({
  item,
  index,
  reduceMotion,
}: {
  item: StartPoint;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: -24,
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
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.08,
        ease,
      }}
      className="
        group
        relative
        grid
        grid-cols-[54px_1fr]
        gap-5
        border-b
        border-[#0B2A52]/10
        py-6
        last:border-b-0

        sm:grid-cols-[62px_1fr]
        lg:py-7
      "
    >
      {/* ICON */}

      <div
        className="
          flex
          h-[52px]
          w-[52px]
          items-center
          justify-center
          rounded-full
          border
          border-[#C9DCE9]
          bg-[#F2F7FB]
          text-[#0B2A52]
          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:border-[#0B2A52]/30

          sm:h-[58px]
          sm:w-[58px]
        "
      >
        <Icon size={22} strokeWidth={1.4} />
      </div>

      {/* CONTENT */}

      <div>
        <div className="flex items-center gap-4">
          <span
            style={newYorkFont}
            className="
              text-[20px]
              font-light
              leading-none
              text-[#B18458]
            "
          >
            {item.number}
          </span>

          <span className="h-px w-7 bg-[#C6A77A]" />

          <span
            style={newYorkFont}
            className="
              text-[7px]
              uppercase
              tracking-[0.21em]
              text-[#0B2A52]/42
            "
          >
            {item.title}
          </span>
        </div>

        <p
          style={newYorkFont}
          className="
            mt-3
            max-w-[360px]
            text-[15px]
            font-light
            leading-[1.5]
            tracking-[-0.015em]
            text-[#0B2A52]
          "
        >
          {item.text}
        </p>
      </div>

      {/* HOVER ACCENT */}

      <span
        className="
          absolute
          bottom-[-1px]
          left-[74px]
          h-[2px]
          w-0
          bg-[#B18458]
          transition-all
          duration-500
          group-hover:w-20
        "
      />
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AiVideoFinalCTA() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-final-cta"
      aria-labelledby="ai-video-final-cta-heading"
      className="
        bg-white
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1460px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            max-w-[1100px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-5
            "
          >
            <span className="h-px w-12 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.31em]
                text-[#B18458]
                sm:text-[10px]
              "
            >
              Your Next Move
            </span>

            <span className="h-px w-12 bg-[#C6A77A]" />
          </div>

          <h2
            id="ai-video-final-cta-heading"
            style={newYorkFont}
            className="
              mt-7

              text-[2.1rem]
              font-light
              leading-[0.98]
              tracking-[-0.05em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Turn the Idea Into Something
            <br className="hidden sm:block" />{" "}
            <span className="text-[#B18458]">
              Worth Watching.
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            CONVERGENCE LAYOUT
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-16
            max-w-[1280px]

            xl:grid
            xl:grid-cols-[0.38fr_180px_0.62fr]
            xl:items-stretch
          "
        >
          {/* =================================================
              LEFT — STARTING POINTS
          ================================================= */}

          <div
            className="
              border-y
              border-[#0B2A52]/10

              xl:border-r-0
            "
          >
            <motion.div
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
                ease,
              }}
              className="
                flex
                items-center
                justify-between
                gap-5
                border-b
                border-[#0B2A52]/10
                py-5
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  text-[#B18458]
                "
              >
                THE PROJECT CAN START HERE
              </span>

              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.22em]
                  text-[#0B2A52]/35
                "
              >
                01 — 03
              </span>
            </motion.div>

            <div>
              {startPoints.map((item, index) => (
                <StartPointItem
                  key={item.number}
                  item={item}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>

          {/* =================================================
              CENTER — CONVERGENCE
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.94,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
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
              relative
              hidden
              min-h-[470px]
              items-center
              justify-center

              xl:flex
            "
          >
            {/* LINES FROM LEFT */}

            <svg
              viewBox="0 0 180 470"
              preserveAspectRatio="none"
              className="
                pointer-events-none
                absolute
                inset-0
                h-full
                w-full
              "
              aria-hidden="true"
            >
              <motion.path
                d="M0 110 C80 110 62 220 110 235"
                fill="none"
                stroke="#C6A77A"
                strokeWidth="1"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 1,
                  ease,
                }}
              />

              <motion.path
                d="M0 235 C65 235 72 235 110 235"
                fill="none"
                stroke="#C6A77A"
                strokeWidth="1"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 1,
                  delay: reduceMotion ? 0 : 0.08,
                  ease,
                }}
              />

              <motion.path
                d="M0 360 C80 360 62 250 110 235"
                fill="none"
                stroke="#C6A77A"
                strokeWidth="1"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 1,
                  delay: reduceMotion ? 0 : 0.16,
                  ease,
                }}
              />

              <motion.path
                d="M110 235 L180 235"
                fill="none"
                stroke="#0B2A52"
                strokeWidth="1.5"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.28,
                  ease,
                }}
              />
            </svg>

            {/* CENTRAL NODE */}

            <div
              className="
                relative
                z-10
                flex
                h-[108px]
                w-[108px]
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-[#C6A77A]
                bg-white
                shadow-[0_15px_40px_rgba(11,42,82,0.07)]
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.22em]
                  text-[#B18458]
                "
              >
                ONE
              </span>

              <span
                style={newYorkFont}
                className="
                  mt-1
                  text-[1.4rem]
                  font-light
                  leading-none
                  tracking-[-0.04em]
                  text-[#0B2A52]
                "
              >
                Goal
              </span>

              <span
                className="
                  mt-2
                  h-px
                  w-7
                  bg-[#C6A77A]
                "
              />
            </div>
          </motion.div>

          {/* =================================================
              MOBILE CONVERGENCE
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-4
              border-b
              border-[#0B2A52]/10
              py-7

              xl:hidden
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-[#C6A77A]/50
              "
            />

            <div
              className="
                flex
                h-[82px]
                w-[82px]
                shrink-0
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-[#C6A77A]
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.22em]
                  text-[#B18458]
                "
              >
                ONE
              </span>

              <span
                style={newYorkFont}
                className="
                  mt-1
                  text-[1.2rem]
                  font-light
                  text-[#0B2A52]
                "
              >
                Goal
              </span>
            </div>

            <ArrowRight
              size={17}
              strokeWidth={1.3}
              className="text-[#B18458]"
            />

            <span
              className="
                h-px
                flex-1
                bg-[#C6A77A]/50
              "
            />
          </div>

          {/* =================================================
              RIGHT — THE OUTCOME
          ================================================= */}

          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              flex
              min-h-[420px]
              flex-col
              justify-between
              border-b
              border-[#0B2A52]/10
              py-9

              xl:min-h-[470px]
              xl:border-y
              xl:border-l
              xl:border-[#0B2A52]/10
              xl:px-12
              xl:py-11
            "
          >
            {/* TOP */}

            <div>
              <div className="flex items-center gap-4">
                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.26em]
                    text-[#B18458]
                  "
                >
                  WHEREVER THE PROJECT STARTS
                </span>

                <span className="h-px w-10 bg-[#C6A77A]" />
              </div>

              <p
                style={newYorkFont}
                className="
                  mt-6
                  max-w-[660px]
                  text-[1.55rem]
                  font-light
                  leading-[1.12]
                  tracking-[-0.035em]
                  text-[#0B2A52]

                  sm:text-[1.8rem]
                  lg:text-[2rem]
                "
              >
                Wherever the project starts, the goal is the same:
              </p>
            </div>

            {/* OUTCOME */}

            <div
              className="
                mt-12
                border-l-2
                border-[#C6A77A]
                pl-6

                sm:pl-8
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0B2A52]/40
                "
              >
                THE OUTCOME
              </span>

              <p
                style={newYorkFont}
                className="
                  mt-4
                  max-w-[680px]
                  text-[1.75rem]
                  font-light
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-[#0B2A52]

                  sm:text-[2rem]
                  lg:text-[2.25rem]
                "
              >
                Create a clearer, stronger video that is ready for the place
                people will actually see it.
              </p>
            </div>

            {/* PROCESS */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3
              "
            >
              {["IMAGINE", "GENERATE", "EDIT", "DELIVER"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-5
                    "
                  >
                    <span
                      style={newYorkFont}
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.22em]
                        text-[#0B2A52]/45
                      "
                    >
                      {item}
                    </span>

                    {index < 3 && (
                      <ArrowRight
                        size={11}
                        strokeWidth={1.25}
                        className="text-[#B18458]"
                      />
                    )}
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FINAL ACTION ROW
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[1280px]
            border-y
            border-[#0B2A52]/10
          "
        >
          <div
            className="
              grid

              md:grid-cols-[0.34fr_0.66fr]
            "
          >
            {/* LABEL */}

            <div
              className="
                flex
                items-center
                border-b
                border-[#0B2A52]/10
                px-5
                py-7

                md:border-b-0
                md:border-r
                md:px-8
                md:py-8
              "
            >
              <div>
                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.27em]
                    text-[#B18458]
                  "
                >
                  YOUR NEXT MOVE
                </span>

                <p
                  style={newYorkFont}
                  className="
                    mt-3
                    max-w-[320px]
                    text-[1.3rem]
                    font-light
                    leading-[1.16]
                    tracking-[-0.03em]
                    text-[#0B2A52]
                  "
                >
                  Choose how you want to start.
                </p>
              </div>
            </div>

            {/* CTAS */}

            <div
              className="
                grid

                sm:grid-cols-2
              "
            >
              {/* PRIMARY */}

              <a
                href="/contact"
                className="
                  group
                  flex
                  min-h-[140px]
                  items-center
                  justify-between
                  gap-6
                  bg-[#0B2A52]
                  px-6
                  py-7
                  text-white
                  transition-colors
                  duration-300

                  hover:bg-[#123F70]

                  sm:min-h-[150px]
                  sm:px-8
                "
              >
                <div>
                  <span
                    style={newYorkFont}
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.24em]
                      text-[#D9BC91]
                    "
                  >
                    PRIMARY
                  </span>

                  <p
                    style={newYorkFont}
                    className="
                      mt-3
                      text-[1.8rem]
                      font-light
                      leading-none
                      tracking-[-0.04em]

                      sm:text-[2rem]
                    "
                  >
                    Create My Video
                  </p>
                </div>

                <span
                  className="
                    flex
                    h-[50px]
                    w-[50px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/25
                    transition-all
                    duration-300

                    group-hover:rotate-45
                    group-hover:bg-white
                    group-hover:text-[#0B2A52]
                  "
                >
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.4}
                  />
                </span>
              </a>

              {/* SECONDARY */}

              <a
                href="/contact"
                className="
                  group
                  flex
                  min-h-[140px]
                  items-center
                  justify-between
                  gap-6
                  border-t
                  border-[#0B2A52]/10
                  bg-white
                  px-6
                  py-7
                  transition-colors
                  duration-300

                  hover:bg-[#F5F9FC]

                  sm:min-h-[150px]
                  sm:border-l
                  sm:border-t-0
                  sm:px-8
                "
              >
                <div>
                  <span
                    style={newYorkFont}
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.24em]
                      text-[#B18458]
                    "
                  >
                    SECONDARY
                  </span>

                  <p
                    style={newYorkFont}
                    className="
                      mt-3
                      text-[1.8rem]
                      font-light
                      leading-none
                      tracking-[-0.04em]
                      text-[#0B2A52]

                      sm:text-[2rem]
                    "
                  >
                    Talk to Sharp Rays
                  </p>
                </div>

                <span
                  className="
                    flex
                    h-[50px]
                    w-[50px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0B2A52]/15
                    text-[#0B2A52]
                    transition-all
                    duration-300

                    group-hover:rotate-45
                    group-hover:border-[#0B2A52]
                    group-hover:bg-[#0B2A52]
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.4}
                  />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SUPPORTING LINE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
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
            mt-9
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-3
          "
        >
          {["IMAGINE", "GENERATE", "EDIT", "DELIVER"].map(
            (item, index) => (
              <div
                key={item}
                className="flex items-center gap-6"
              >
                <span
                  style={newYorkFont}
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                    text-[#0B2A52]/45
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
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}