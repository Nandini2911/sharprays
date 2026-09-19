"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Clock3,
  Film,
  Lightbulb,
  Megaphone,
  Scissors,
  Smartphone,
  Sparkles,
  TrendingDown,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   PROBLEMS
========================================================= */

const problems = [
  {
    number: "01",
    title: "You Have an Idea",
    text: "But turning it into a polished video still takes too much time.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "You Have Raw Footage",
    text: "But it sits unused because nobody has shaped it into finished content.",
    icon: Film,
  },
  {
    number: "03",
    title: "You’re Using AI Tools",
    text: "But the output still looks inconsistent, generic or disconnected from your brand.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "You Need More Short-Form Content",
    text: "But creating every Reel or campaign variation from scratch is slowing your team down.",
    icon: Smartphone,
  },
  {
    number: "05",
    title: "Your Videos Look Polished",
    text: "But they take too long to reach the point.",
    icon: Clock3,
  },
  {
    number: "06",
    title: "You’re Running Ads",
    text: "But the same creative is being used long after the audience has stopped responding to it.",
    icon: TrendingDown,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function AiVideoProblem() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-problem"
      aria-labelledby="ai-video-problem-heading"
      className="
        relative
        overflow-hidden
        bg-[#F5F7F9]
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* BLUE GLOW */}

        <div
          className="
            absolute
            -left-[220px]
            top-[12%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#6285AD]/10
            blur-[120px]
          "
        />

        {/* GOLD GLOW */}

        <div
          className="
            absolute
            -right-[220px]
            bottom-[5%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#C6A77A]/10
            blur-[130px]
          "
        />

        {/* CENTER DIVIDER */}

        <div
          className="
            absolute
            left-1/2
            top-0
            hidden
            h-full
            w-px
            bg-[#0B2A52]/[0.03]
            lg:block
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
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
            MAIN GRID
        ===================================================== */}

        <div
          className="
            grid
            gap-12

            lg:grid-cols-[0.88fr_1.12fr]
            lg:gap-16

            xl:gap-20
          "
        >
          {/* =================================================
              LEFT — STICKY INTRO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
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
              lg:sticky
              lg:top-28
              lg:self-start
            "
          >
            {/* LABEL */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-8 bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-[#92745C]
                  sm:text-[10px]
                "
              >
                The Problem
              </span>
            </div>

            {/* HEADING */}

            <h2
              id="ai-video-problem-heading"
              style={newYorkFont}
              className="
                max-w-[620px]

                text-[2.1rem]
                font-light
                leading-[0.99]
                tracking-[-0.045em]

                text-[#0B2A52]

                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Creating More Video Is Easy.{" "}
              <span
                className="
                  font-normal
                  italic
                  text-[#A97C52]
                "
              >
                Creating Better Video Is Harder.
              </span>
            </h2>

            {/* INTRO COPY */}

            <div
              style={newYorkFont}
              className="
                mt-7
                max-w-[590px]
                space-y-4

                text-[14px]
                leading-[1.75]

                text-[#344054]

                sm:text-[16px]
                md:text-[17px]
              "
            >
              <p>
                AI has made it possible to produce visual content faster.
              </p>

              <p>
                But faster production does not automatically create stronger
                communication.
              </p>
            </div>

            {/* =================================================
                SPEED VS IMPACT PANEL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 25,
              }}
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
                delay: reduceMotion ? 0 : 0.15,
                ease,
              }}
              className="
                relative
                mt-10
                overflow-hidden

                rounded-[28px]

                bg-[#0B2A52]

                p-6

                shadow-[0_25px_65px_rgba(11,42,82,0.16)]

                sm:p-7
              "
            >
              {/* DECORATIVE CIRCLE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-20

                  h-[220px]
                  w-[220px]

                  rounded-full

                  border-[38px]
                  border-white/[0.035]
                "
              />

              <div
                className="
                  relative
                  z-10

                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >
                <div>
                  <p
                    style={newYorkFont}
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]

                      text-[#C6A77A]
                    "
                  >
                    Faster Production
                  </p>

                  <p
                    style={newYorkFont}
                    className="
                      mt-2
                      max-w-[355px]

                      text-[18px]
                      font-light
                      leading-[1.35]

                      text-white

                      sm:text-[20px]
                    "
                  >
                    Speed helps. But speed alone does not make a video worth
                    watching.
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

                    border
                    border-white/15

                    bg-white/[0.06]

                    text-[#C6A77A]
                  "
                >
                  <Scissors size={18} strokeWidth={1.5} />
                </div>
              </div>

              {/* COMPARISON */}

              <div className="relative z-10 mt-7">
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    style={newYorkFont}
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.18em]

                      text-white/45
                    "
                  >
                    Produce
                  </span>

                  <span
                    style={newYorkFont}
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.18em]

                      text-white/45
                    "
                  >
                    Perform
                  </span>
                </div>

                {/* TRACK */}

                <div
                  className="
                    relative

                    h-[6px]

                    overflow-hidden

                    rounded-full

                    bg-white/10
                  "
                >
                  <motion.div
                    initial={{
                      width: "0%",
                    }}
                    whileInView={{
                      width: "62%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.15,
                      delay: reduceMotion ? 0 : 0.3,
                      ease,
                    }}
                    className="
                      absolute
                      inset-y-0
                      left-0

                      rounded-full

                      bg-[#C6A77A]
                    "
                  />
                </div>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <span
                    style={newYorkFont}
                    className="
                      text-[10px]
                      text-white/50
                    "
                  >
                    More video
                  </span>

                  <span
                    style={newYorkFont}
                    className="
                      text-right
                      text-[10px]
                      font-medium

                      text-white
                    "
                  >
                    Better reason to keep watching
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — PROBLEMS
          ================================================= */}

          <div>
            {/* TITLE ROW */}

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease,
              }}
              className="
                mb-7
                flex
                items-center
                justify-between

                border-b
                border-[#0B2A52]/10

                pb-4
              "
            >
              <p
                style={newYorkFont}
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.22em]

                  text-[#0B2A52]

                  sm:text-[11px]
                "
              >
                Does This Sound Familiar?
              </p>

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.18em]

                  text-[#344054]/45
                "
              >
                06 Signals
              </span>
            </motion.div>

            {/* =================================================
                PROBLEM LIST
            ================================================= */}

            <div className="space-y-4">
              {problems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.number}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 42,
                      y: reduceMotion ? 0 : 14,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.22,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.7,
                      delay: reduceMotion ? 0 : index * 0.055,
                      ease,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            x: 6,
                          }
                    }
                    className="
                      group
                      relative

                      overflow-hidden

                      rounded-[25px]

                      border
                      border-[#0B2A52]/10

                      bg-white

                      p-[5px]

                      shadow-[0_14px_35px_rgba(11,42,82,0.045)]

                      transition-shadow
                      duration-300

                      hover:shadow-[0_20px_45px_rgba(11,42,82,0.08)]
                    "
                  >
                    <div
                      className="
                        relative

                        grid
                        min-h-[145px]
                        grid-cols-[auto_1fr]
                        gap-4

                        overflow-hidden

                        rounded-[20px]

                        bg-[#F6F8FA]

                        px-5
                        py-5

                        sm:grid-cols-[56px_1fr_auto]
                        sm:items-center
                        sm:gap-5
                        sm:px-6
                      "
                    >
                      {/* SOFT BACKGROUND WASH */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0

                          bg-[linear-gradient(110deg,rgba(237,244,249,0.9)_0%,rgba(255,255,255,0.4)_58%,rgba(249,244,236,0.7)_100%)]

                          opacity-80
                        "
                      />

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

                          rounded-full

                          border
                          border-[#D7E2EA]

                          bg-white

                          text-[#0B2A52]

                          shadow-[0_8px_24px_rgba(11,42,82,0.055)]

                          transition-all
                          duration-300

                          group-hover:border-[#B79A72]/55
                          group-hover:text-[#A97C52]
                        "
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </div>

                      {/* TEXT */}

                      <div className="relative z-10">
                        <div
                          className="
                            mb-2
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <span
                            style={newYorkFont}
                            className="
                              text-[9px]
                              font-medium
                              tracking-[0.18em]

                              text-[#A97C52]
                            "
                          >
                            {item.number}
                          </span>

                          <span
                            className="
                              h-px
                              w-5

                              bg-[#B79A72]
                            "
                          />
                        </div>

                        <h3
                          style={newYorkFont}
                          className="
                            text-[17px]
                            font-medium
                            leading-[1.35]

                            text-[#0B2A52]

                            sm:text-[18px]
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          style={newYorkFont}
                          className="
                            mt-2
                            max-w-[540px]

                            text-[13px]
                            leading-[1.65]

                            text-[#4F6377]

                            sm:text-[14px]
                          "
                        >
                          {item.text}
                        </p>
                      </div>

                      {/* ARROW */}

                      <div
                        className="
                          relative
                          z-10

                          hidden
                          h-10
                          w-10
                          items-center
                          justify-center

                          rounded-full

                          border
                          border-[#D8E2E9]

                          bg-white/85

                          text-[#0B2A52]

                          transition-all
                          duration-300

                          group-hover:border-[#B79A72]/50
                          group-hover:text-[#A97C52]

                          sm:flex
                        "
                      >
                        <ArrowDownRight
                          size={15}
                          strokeWidth={1.5}
                          className="
                            transition-transform
                            duration-300

                            group-hover:translate-x-0.5
                            group-hover:translate-y-0.5
                          "
                        />
                      </div>

                      {/* GHOST NUMBER */}

                      <span
                        style={newYorkFont}
                        className="
                          pointer-events-none
                          absolute
                          -right-3
                          -top-5

                          text-[95px]
                          font-light
                          leading-none

                          text-[#0B2A52]/[0.035]

                          transition-transform
                          duration-500

                          group-hover:scale-105
                        "
                      >
                        {item.number}
                      </span>

                      {/* GOLD LEFT TRACE */}

                      <motion.span
                        initial={{
                          scaleY: reduceMotion ? 1 : 0,
                        }}
                        whileInView={{
                          scaleY: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.5,
                          delay: reduceMotion
                            ? 0
                            : index * 0.055 + 0.18,
                          ease,
                        }}
                        className="
                          absolute
                          bottom-4
                          left-0
                          top-4

                          w-[3px]

                          origin-top

                          rounded-full

                          bg-[#B79A72]
                        "
                      />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            REAL PROBLEM
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 34,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.82,
            ease,
          }}
          className="
            relative

            mt-16

            overflow-hidden

            rounded-[34px]

            border
            border-[#DCE4EA]

            bg-white

            px-6
            py-10

            shadow-[0_22px_65px_rgba(11,42,82,0.06)]

            sm:px-9
            sm:py-12

            lg:mt-20
            lg:px-12
            lg:py-14
          "
        >
          {/* BIG BACKGROUND WORD */}

          <span
            style={newYorkFont}
            className="
              pointer-events-none
              absolute
              -right-4
              -top-8

              text-[105px]
              font-light
              leading-none
              tracking-[-0.07em]

              text-[#0B2A52]/[0.022]

              sm:text-[155px]
            "
          >
            WATCH
          </span>

          {/* BLUE GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-20

              h-[280px]
              w-[360px]

              rounded-full

              bg-[#EAF2F7]

              blur-[85px]
            "
          />

          <div
            className="
              relative
              z-10

              grid
              gap-8

              lg:grid-cols-[0.34fr_0.66fr]
              lg:items-center
            "
          >
            {/* LEFT */}

            <div>
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full

                  bg-[#0B2A52]

                  text-white

                  shadow-[0_9px_25px_rgba(11,42,82,0.14)]
                "
              >
                <Megaphone size={17} strokeWidth={1.5} />
              </div>

              <p
                style={newYorkFont}
                className="
                  mt-5

                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]

                  text-[#92745C]

                  sm:text-[10px]
                "
              >
                The Real Problem
              </p>

              <div
                className="
                  mt-4
                  h-px
                  w-14

                  bg-[#C6A77A]
                "
              />
            </div>

            {/* RIGHT */}

            <div>
              <p
                style={newYorkFont}
                className="
                  text-[16px]
                  leading-[1.65]

                  text-[#4B6075]

                  sm:text-[17px]
                "
              >
                The challenge is no longer simply making video.
              </p>

              <h3
                style={newYorkFont}
                className="
                  mt-3
                  max-w-[790px]

                  text-[27px]
                  font-light
                  leading-[1.12]
                  tracking-[-0.035em]

                  text-[#0B2A52]

                  sm:text-[32px]
                  md:text-[36px]
                  lg:text-[40px]
                "
              >
                It is turning ideas and assets into content people{" "}
                <span
                  className="
                    font-normal
                    italic
                    text-[#A97C52]
                  "
                >
                  actually want to watch.
                </span>
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}