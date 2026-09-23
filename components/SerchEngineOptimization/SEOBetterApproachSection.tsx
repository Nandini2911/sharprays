"use client";

import type { LucideIcon } from "lucide-react";
import {
  Copy,
  FileWarning,
  MapPinned,
  SearchX,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

/* =========================================================
   FONT
========================================================= */

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

/* =========================================================
   ANIMATION
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type StandardRow = {
  number: string;
  avoid: string;
  build: string;
  icon: LucideIcon;
};

/* =========================================================
   DATA
========================================================= */

const standards: StandardRow[] = [
  {
    number: "01",
    avoid: "Keyword stuffing",
    build: "Relevance",
    icon: SearchX,
  },
  {
    number: "02",
    avoid: "Mass low-value pages",
    build: "Technical Quality",
    icon: FileWarning,
  },
  {
    number: "03",
    avoid: "Copied content",
    build: "Useful Content",
    icon: Copy,
  },
  {
    number: "04",
    avoid: "Fake location pages",
    build: "Clear Expertise",
    icon: MapPinned,
  },
  {
    number: "05",
    avoid: "Guaranteed #1 rankings",
    build: "Continuous Improvement",
    icon: Trophy,
  },
];

/* =========================================================
   MAIN SECTION
========================================================= */

export default function SEOBetterApproachSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="better-seo-approach"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-[#0B2A52]

        sm:py-24
        md:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* TOP BLUE LIGHT */}

        <div
          className="
            absolute
            left-1/2
            top-[-250px]

            h-[480px]
            w-[760px]

            -translate-x-1/2

            rounded-full

            bg-[#EAF4FC]/75
            blur-[140px]

            sm:w-[920px]
            lg:w-[1150px]
          "
        />

        {/* LEFT RING */}

        <div
          className="
            absolute
            -left-[360px]
            top-[32%]

            hidden

            h-[680px]
            w-[680px]

            rounded-full

            border
            border-[#0B2A52]/[0.04]

            lg:block
          "
        />

        {/* RIGHT RING */}

        <div
          className="
            absolute
            -right-[340px]
            bottom-[-180px]

            hidden

            h-[660px]
            w-[660px]

            rounded-full

            border
            border-[#C6A77A]/12

            lg:block
          "
        />

        {/* HUGE BACKGROUND WORD */}

        <div
          className="
            absolute
            left-1/2
            top-[54%]

            hidden

            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            text-[150px]
            font-semibold
            uppercase
            tracking-[-0.07em]
            text-[#0B2A52]/[0.018]

            lg:block
            xl:text-[190px]
          "
        >
          STANDARD
        </div>
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
          max-w-[1280px]

          px-5
          sm:px-7
          md:px-8
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            mx-auto
            max-w-[930px]
            text-center
          "
        >
          {/* LABEL */}

          <div
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

                bg-gradient-to-r
                from-transparent
                to-[#C6A77A]

                sm:w-10
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#C6A77A]

                sm:text-[10px]
                sm:tracking-[0.34em]
              "
            >
              A Better Approach to SEO
            </span>

            <span
              className="
                h-px
                w-7

                bg-gradient-to-l
                from-transparent
                to-[#C6A77A]

                sm:w-10
              "
            />
          </div>

          {/* HEADING */}

          <h2
            style={newYorkFont}
            className="
              mx-auto
              mt-6
              max-w-[880px]

              text-[2.6rem]
              font-medium
              leading-[1]
              tracking-[-0.045em]
              text-[#0B2A52]

              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            No Shortcuts Disguised as{" "}
            <span className="text-[#C6A77A]">
              Strategy.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[720px]

              text-[13px]
              leading-[1.8]
              text-[#64798F]

              sm:text-[14px]
              md:text-[15px]
            "
          >
            Sustainable SEO comes from strengthening the fundamentals, not
            chasing tactics designed to create temporary movement.
          </p>
        </motion.div>

        {/* =====================================================
            MANIFESTO INTRO
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            delay: reduceMotion ? 0 : 0.08,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[1100px]

            sm:mt-14
            lg:mt-16
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-4

              border-y
              border-[#DCE5ED]

              py-5

              sm:grid-cols-2
              sm:items-center
              sm:py-6
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
                  flex
                  h-9
                  w-9

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#D7E1EA]

                  bg-[#F7FAFC]

                  text-[#657B90]
                "
              >
                <SearchX
                  size={14}
                  strokeWidth={1.7}
                />
              </span>

              <div>
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.19em]
                    text-[#C6A77A]
                  "
                >
                  Leave Behind
                </p>

                <p
                  style={newYorkFont}
                  className="
                    mt-1

                    text-[18px]
                    font-medium
                    text-[#0B2A52]
                  "
                >
                  Shortcuts & promises.
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-3

                sm:justify-end
                sm:text-right
              "
            >
              <div className="sm:order-1">
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.19em]
                    text-[#C6A77A]
                  "
                >
                  Build Instead
                </p>

                <p
                  style={newYorkFont}
                  className="
                    mt-1

                    text-[18px]
                    font-medium
                    text-[#0B2A52]
                  "
                >
                  Strong foundations.
                </p>
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

                  shadow-[0_8px_24px_rgba(11,42,82,0.14)]

                  sm:order-2
                "
              >
                <ShieldCheck
                  size={14}
                  strokeWidth={1.7}
                />
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DESKTOP TRANSFORMATION TIMELINE
        ===================================================== */}

        <div
          className="
            relative

            mx-auto
            mt-8

            hidden
            max-w-[1120px]

            lg:block
          "
        >
          {/* MAIN CENTER LINE */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[38px]
              left-1/2
              top-[38px]

              w-px

              -translate-x-1/2

              bg-[#DCE5ED]
            "
          />

          {/* ANIMATED CENTER LINE */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.4,
              ease,
            }}
            className="
              absolute
              bottom-[38px]
              left-1/2
              top-[38px]

              w-[2px]

              -translate-x-1/2

              origin-top

              bg-gradient-to-b
              from-[#0B2A52]
              via-[#C6A77A]
              to-[#0B2A52]
            "
          />

          {/* ROWS */}

          <div>
            {standards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion
                      ? 0
                      : index * 0.08,
                    ease,
                  }}
                  className="
                    group
                    relative

                    grid
                    min-h-[110px]

                    grid-cols-[1fr_120px_1fr]

                    items-center

                    border-b
                    border-[#DCE5ED]
                  "
                >
                  {/* =========================================
                      LEFT — REJECT
                  ========================================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-end

                      gap-4

                      pr-9
                    "
                  >
                    <div className="text-right">
                      <span
                        className="
                          text-[7px]
                          font-semibold
                          uppercase
                          tracking-[0.17em]
                          text-[#9AA8B5]
                        "
                      >
                        Don&apos;t Build Around
                      </span>

                      <p
                        className="
                          mt-2

                          text-[15px]
                          font-medium
                          text-[#64798F]

                          transition-colors
                          duration-300

                          group-hover:text-[#0B2A52]
                        "
                      >
                        {item.avoid}
                      </p>
                    </div>

                    {/* ICON */}

                    <div
                      className="
                        relative

                        flex
                        h-11
                        w-11
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#D8E2EB]

                        bg-white

                        text-[#7B8D9E]

                        transition-all
                        duration-400

                        group-hover:border-[#C6A77A]/50
                        group-hover:bg-[#FFF8EF]
                        group-hover:text-[#C6A77A]
                      "
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.65}
                      />

                      <span
                        aria-hidden="true"
                        className="
                          absolute

                          h-px
                          w-6

                          -rotate-45

                          bg-[#C6A77A]/65
                        "
                      />
                    </div>
                  </div>

                  {/* =========================================
                      CENTER NODE
                  ========================================= */}

                  <div
                    className="
                      relative
                      z-10

                      flex
                      items-center
                      justify-center
                    "
                  >
                    {/* LEFT CONNECTOR */}

                    <span
                      className="
                        absolute
                        right-1/2

                        h-px
                        w-[60px]

                        bg-gradient-to-l
                        from-[#C6A77A]
                        to-transparent
                      "
                    />

                    {/* RIGHT CONNECTOR */}

                    <span
                      className="
                        absolute
                        left-1/2

                        h-px
                        w-[60px]

                        bg-gradient-to-r
                        from-[#C6A77A]
                        to-transparent
                      "
                    />

                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              scale: 1.08,
                            }
                      }
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
                        border-[#C6A77A]/45

                        bg-white

                        shadow-[0_8px_24px_rgba(11,42,82,0.08)]
                      "
                    >
                      <span
                        style={newYorkFont}
                        className="
                          text-[14px]
                          font-medium
                          text-[#C6A77A]
                        "
                      >
                        {item.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* =========================================
                      RIGHT — BUILD
                  ========================================= */}

                  <div
                    className="
                      flex
                      items-center

                      gap-4

                      pl-9
                    "
                  >
                    {/* CHECK */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        bg-[#EEF5FA]

                        text-[#0B2A52]

                        transition-all
                        duration-400

                        group-hover:bg-[#0B2A52]
                        group-hover:text-white
                      "
                    >
                      <Sparkles
                        size={15}
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <span
                        className="
                          text-[7px]
                          font-semibold
                          uppercase
                          tracking-[0.17em]
                          text-[#C6A77A]
                        "
                      >
                        Build Around
                      </span>

                      <p
                        style={newYorkFont}
                        className="
                          mt-2

                          text-[21px]
                          font-medium
                          tracking-[-0.025em]
                          text-[#0B2A52]
                        "
                      >
                        {item.build}
                      </p>
                    </div>
                  </div>

                  {/* ROW HOVER */}

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none

                      absolute
                      inset-x-0
                      bottom-0

                      h-[2px]

                      scale-x-0

                      bg-gradient-to-r
                      from-transparent
                      via-[#C6A77A]
                      to-transparent

                      transition-transform
                      duration-500

                      group-hover:scale-x-100
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET TRANSFORMATION FLOW
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-8
            max-w-[720px]

            lg:hidden
          "
        >
          <div
            className="
              relative

              border-l
              border-[#D8E2EB]

              pl-6

              sm:pl-8
            "
          >
            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.3,
                ease,
              }}
              className="
                absolute
                bottom-0
                left-[-1px]
                top-0

                w-[2px]

                origin-top

                bg-gradient-to-b
                from-[#0B2A52]
                via-[#C6A77A]
                to-[#0B2A52]
              "
            />

            {standards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 20,
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
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion
                      ? 0
                      : index * 0.06,
                    ease,
                  }}
                  className="
                    relative

                    border-b
                    border-[#DCE5ED]

                    py-6

                    first:pt-2
                  "
                >
                  {/* NODE */}

                  <span
                    className="
                      absolute
                      left-[-31px]
                      top-7

                      flex
                      h-3
                      w-3

                      items-center
                      justify-center

                      rounded-full

                      border-2
                      border-white

                      bg-[#C6A77A]

                      shadow-[0_0_0_1px_rgba(198,167,122,0.35)]

                      sm:left-[-39px]
                    "
                  />

                  {/* NUMBER */}

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      tracking-[0.18em]
                      text-[#C6A77A]
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      mt-3

                      grid
                      grid-cols-1

                      gap-4

                      sm:grid-cols-[1fr_auto_1fr]
                      sm:items-center
                    "
                  >
                    {/* AVOID */}

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          relative

                          flex
                          h-9
                          w-9
                          shrink-0

                          items-center
                          justify-center

                          rounded-[11px]

                          border
                          border-[#D8E2EB]

                          bg-white

                          text-[#768A9D]
                        "
                      >
                        <Icon
                          size={14}
                          strokeWidth={1.6}
                        />

                        <span
                          className="
                            absolute

                            h-px
                            w-5

                            -rotate-45

                            bg-[#C6A77A]
                          "
                        />
                      </span>

                      <div>
                        <p
                          className="
                            text-[7px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-[#9AA8B5]
                          "
                        >
                          Don&apos;t
                        </p>

                        <p
                          className="
                            mt-1

                            text-[13px]
                            font-medium
                            text-[#61778D]
                          "
                        >
                          {item.avoid}
                        </p>
                      </div>
                    </div>

                    {/* TRANSITION */}

                    <div
                      className="
                        hidden

                        h-px
                        w-8

                        bg-gradient-to-r
                        from-[#0B2A52]/10
                        to-[#C6A77A]

                        sm:block
                      "
                    />

                    {/* BUILD */}

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0

                          items-center
                          justify-center

                          rounded-[11px]

                          bg-[#EEF5FA]

                          text-[#0B2A52]
                        "
                      >
                        <Sparkles
                          size={13}
                          strokeWidth={1.7}
                        />
                      </span>

                      <div>
                        <p
                          className="
                            text-[7px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-[#C6A77A]
                          "
                        >
                          Build
                        </p>

                        <p
                          style={newYorkFont}
                          className="
                            mt-1

                            text-[17px]
                            font-medium
                            text-[#0B2A52]
                          "
                        >
                          {item.build}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            FINAL PRINCIPLE
        ===================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative

            mx-auto
            mt-12

            max-w-[1040px]

            overflow-hidden

            rounded-[24px]

            border
            border-[#D4E0E9]

            bg-[linear-gradient(110deg,#EFF7FD_0%,#FFFFFF_52%,#FFF8ED_100%)]

            px-5
            py-7

            shadow-[0_15px_45px_rgba(11,42,82,0.055)]

            sm:mt-14
            sm:px-7
            sm:py-8

            md:px-9

            lg:mt-16
            lg:px-10
          "
        >
          {/* DECOR */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -right-[100px]
              -top-[120px]

              h-[260px]
              w-[260px]

              rounded-full

              border
              border-[#C6A77A]/15
            "
          />

          <div
            className="
              relative
              z-10

              flex
              flex-col
              gap-5

              md:flex-row
              md:items-center
              md:justify-between
              md:gap-10
            "
          >
            {/* LEFT */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  bg-[#0B2A52]

                  text-white
                "
              >
                <ShieldCheck
                  size={15}
                  strokeWidth={1.7}
                />
              </span>

              <div>
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#C6A77A]
                  "
                >
                  The Principle
                </p>

                <p
                  className="
                    mt-1

                    text-[10px]
                    text-[#72869A]
                  "
                >
                  Sustainable search growth.
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <h3
              style={newYorkFont}
              className="
                max-w-[650px]

                text-[24px]
                font-medium
                leading-[1.12]
                tracking-[-0.035em]
                text-[#0B2A52]

                sm:text-[27px]

                md:text-right
                md:text-[29px]
              "
            >
              Build on fundamentals that can{" "}
              <span className="text-[#C6A77A]">
                compound over time.
              </span>
            </h3>
          </div>
        </motion.div>

        {/* =====================================================
            MICRO LINE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
          className="
            mx-auto
            mt-8

            flex
            max-w-[720px]

            items-center
            gap-3
          "
        >
          <span
            className="
              h-px
              flex-1

              bg-gradient-to-r
              from-transparent
              to-[#C6A77A]/45
            "
          />

          <span
            className="
              shrink-0

              text-center

              text-[7px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#73889D]

              sm:text-[8px]
              sm:tracking-[0.19em]
            "
          >
            Relevance · Quality · Content · Expertise · Improvement
          </span>

          <span
            className="
              h-px
              flex-1

              bg-gradient-to-l
              from-transparent
              to-[#C6A77A]/45
            "
          />
        </motion.div>
      </div>
    </section>
  );
}