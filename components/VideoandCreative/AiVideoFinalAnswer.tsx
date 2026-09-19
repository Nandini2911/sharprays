"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    number: "01",
    label: "AI-Generated Scenes",
  },
  {
    number: "02",
    label: "Product Advertising",
  },
  {
    number: "03",
    label: "UGC-Style Creative",
  },
  {
    number: "04",
    label: "Short-Form Edits",
  },
  {
    number: "05",
    label: "Advertising Variations",
  },
  {
    number: "06",
    label: "Long-Form Repurposing",
  },
];

export default function AiVideoFinalAnswer() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-final-answer"
      aria-labelledby="ai-video-final-answer-heading"
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
          max-w-[1440px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            TOP LABEL
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
              text-center
              text-[8px]
              uppercase
              tracking-[0.31em]
              text-[#B18458]
              sm:text-[9px]
            "
          >
            AI Video & Editing With Sharp Rays
          </span>

          <span className="h-px w-12 bg-[#C6A77A]" />
        </motion.div>

        {/* =====================================================
            LARGE CENTER HEADING
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
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            mx-auto
            mt-8
            max-w-[1150px]
            text-center
          "
        >
          <h2
            id="ai-video-final-answer-heading"
            style={newYorkFont}
            className="
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
            Looking for a Faster Way
            <br className="hidden sm:block" />{" "}
            to Create{" "}
            <span className="text-[#B18458]">
              Better Video?
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            EDITORIAL BOARD
        ===================================================== */}

        <div
          className="
            mt-14
            border-y
            border-[#0B2A52]/10

            lg:grid
            lg:grid-cols-[1fr_155px_1fr]
          "
        >
          {/* =================================================
              LEFT COPY
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -28,
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
              py-9

              lg:flex
              lg:min-h-[320px]
              lg:items-center
              lg:py-12
              lg:pr-14
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  style={newYorkFont}
                  className="
                    text-[28px]
                    font-light
                    leading-none
                    text-[#B18458]
                  "
                >
                  01
                </span>

                <span className="h-px w-10 bg-[#C6A77A]" />

                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.24em]
                    text-[#0B2A52]/42
                  "
                >
                  THE COMBINATION
                </span>
              </div>

              <p
                style={newYorkFont}
                className="
                  mt-7
                  max-w-[560px]
                  text-[15px]
                  leading-[1.75]
                  text-[#405E79]
                  sm:text-[16px]
                "
              >
                Sharp Rays combines AI video creation, professional editing and
                platform-ready post-production to help businesses turn ideas
                and existing assets into more useful visual content.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              CENTER SPINE
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scaleY: 0.85,
                  }
            }
            whileInView={{
              opacity: 1,
              scaleY: 1,
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
              border-x
              border-[#0B2A52]/10

              lg:flex
              lg:min-h-[320px]
              lg:flex-col
              lg:items-center
              lg:justify-center
            "
          >
            <span
              className="
                absolute
                top-0
                h-12
                w-px
                bg-[#C6A77A]
              "
            />

            <div
              className="
                flex
                flex-col
                items-center
                gap-4
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0B2A52]/48
                "
              >
                IDEA
              </span>

              <ArrowRight
                size={15}
                strokeWidth={1.3}
                className="
                  rotate-90
                  text-[#B18458]
                "
              />

              <span
                style={newYorkFont}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0B2A52]/48
                "
              >
                EDIT
              </span>

              <ArrowRight
                size={15}
                strokeWidth={1.3}
                className="
                  rotate-90
                  text-[#B18458]
                "
              />

              <span
                style={newYorkFont}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0B2A52]/48
                "
              >
                OUTPUT
              </span>
            </div>

            <span
              className="
                absolute
                bottom-0
                h-12
                w-px
                bg-[#C6A77A]
              "
            />
          </motion.div>

          {/* =================================================
              RIGHT COPY
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 28,
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
              delay: reduceMotion ? 0 : 0.06,
              ease,
            }}
            className="
              border-t
              border-[#0B2A52]/10
              py-9

              lg:flex
              lg:min-h-[320px]
              lg:items-center
              lg:border-t-0
              lg:py-12
              lg:pl-14
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  style={newYorkFont}
                  className="
                    text-[28px]
                    font-light
                    leading-none
                    text-[#B18458]
                  "
                >
                  02
                </span>

                <span className="h-px w-10 bg-[#C6A77A]" />

                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.24em]
                    text-[#0B2A52]/42
                  "
                >
                  THE APPROACH
                </span>
              </div>

              <p
                style={newYorkFont}
                className="
                  mt-7
                  max-w-[585px]
                  text-[15px]
                  leading-[1.75]
                  text-[#405E79]
                  sm:text-[16px]
                "
              >
                Whether you need AI-generated scenes, product advertising,
                UGC-style creative, short-form edits, advertising variations or
                support transforming long recordings into multiple assets, we
                start by understanding what the video actually needs to achieve.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE PROCESS LINE
        ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-4
            border-b
            border-[#0B2A52]/10
            py-6

            lg:hidden
          "
        >
          {["IDEA", "EDIT", "OUTPUT"].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-4"
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

              {index < 2 && (
                <ArrowRight
                  size={12}
                  strokeWidth={1.3}
                  className="text-[#B18458]"
                />
              )}
            </div>
          ))}
        </div>

        {/* =====================================================
            FILM STRIP / OUTPUT TYPES
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
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
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mt-12
          "
        >
          {/* LABEL */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-5
            "
          >
            <span
              style={newYorkFont}
              className="
                shrink-0
                text-[7px]
                uppercase
                tracking-[0.26em]
                text-[#B18458]
              "
            >
              WHAT THAT CAN INCLUDE
            </span>

            <span
              className="
                h-px
                flex-1
                bg-[#0B2A52]/10
              "
            />
          </div>

          {/* FILM STRIP */}

          <div
            className="
              grid
              border-y
              border-[#0B2A52]/10

              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-6
            "
          >
            {services.map((item, index) => (
              <motion.div
                key={item.number}
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
                  amount: 0.4,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.52,
                  delay: reduceMotion ? 0 : index * 0.045,
                  ease,
                }}
                className={`
                  group
                  relative
                  min-h-[122px]
                  px-4
                  py-5

                  sm:px-5

                  ${
                    index !== services.length - 1
                      ? "xl:border-r xl:border-[#0B2A52]/10"
                      : ""
                  }
                `}
              >
                {/* TOP FILM HOLE */}

                <div
                  className="
                    absolute
                    left-4
                    top-0
                    h-[5px]
                    w-7
                    bg-[#0B2A52]/10
                  "
                />

                <span
                  style={newYorkFont}
                  className="
                    text-[9px]
                    text-[#B18458]
                  "
                >
                  {item.number}
                </span>

                <p
                  style={newYorkFont}
                  className="
                    mt-6
                    max-w-[175px]
                    text-[13px]
                    font-light
                    leading-[1.35]
                    tracking-[-0.01em]
                    text-[#0B2A52]
                  "
                >
                  {item.label}
                </p>

                {/* HOVER LINE */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#B18458]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            FINAL ACTION
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
            mt-12
            border-y
            border-[#0B2A52]/10
          "
        >
          <a
            href="/contact"
            className="
              group
              grid
              min-h-[160px]

              md:grid-cols-[210px_1fr_120px]

              lg:min-h-[180px]
            "
          >
            {/* LEFT LABEL */}

            <div
              className="
                flex
                items-center
                border-b
                border-[#0B2A52]/10
                px-6
                py-6

                md:border-b-0
                md:border-r
                md:px-8
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
                  READY TO START?
                </span>

                <span
                  className="
                    mt-4
                    block
                    h-px
                    w-10
                    bg-[#C6A77A]
                  "
                />
              </div>
            </div>

            {/* CTA WORDING */}

            <div
              className="
                flex
                items-center
                px-6
                py-9

                sm:px-8

                md:px-10

                lg:px-12
              "
            >
              <div>
                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.24em]
                    text-[#0B2A52]/40
                  "
                >
                  START THE CONVERSATION
                </span>

                <h3
                  style={newYorkFont}
                  className="
                    mt-3
                    text-[2rem]
                    font-light
                    leading-[1]
                    tracking-[-0.045em]
                    text-[#0B2A52]

                    sm:text-[2.4rem]
                    lg:text-[2.7rem]
                  "
                >
                  Talk About My Video
                </h3>
              </div>
            </div>

            {/* ARROW */}

            <div
              className="
                flex
                min-h-[90px]
                items-center
                justify-center
                bg-[#0B2A52]
                text-white
                transition-colors
                duration-300

                group-hover:bg-[#123F70]

                md:min-h-full
              "
            >
              <motion.span
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.08,
                      }
                }
                className="
                  flex
                  h-[54px]
                  w-[54px]
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
                  size={22}
                  strokeWidth={1.4}
                />
              </motion.span>
            </div>
          </a>
        </motion.div>

        {/* =====================================================
            BOTTOM SIGNATURE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 10,
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
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
          className="
            mt-7
            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-4">
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.22em]
                text-[#0B2A52]/38
              "
            >
              Sharp Rays
            </span>

            <span className="h-px w-8 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.22em]
                text-[#0B2A52]/38
              "
            >
              AI Video & Editing
            </span>
          </div>

          <span
            style={newYorkFont}
            className="
              text-[7px]
              uppercase
              tracking-[0.21em]
              text-[#0B2A52]/35
            "
          >
            Idea → Edit → Useful Visual Content
          </span>
        </motion.div>
      </div>
    </section>
  );
}