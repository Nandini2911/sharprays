"use client";

import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Ban,
  Bot,
  FileCog,
  FileWarning,
  Gauge,
  MapPinned,
  SearchX,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TYPES
============================================================ */

type AvoidItem = {
  number: string;
  title: string;
  icon: LucideIcon;
};

/* ============================================================
   DATA
============================================================ */

const avoidItems: AvoidItem[] = [
  {
    number: "01",
    title: "Keyword stuffing.",
    icon: SearchX,
  },
  {
    number: "02",
    title: "Hundreds of low-value pages.",
    icon: FileWarning,
  },
  {
    number: "03",
    title: "Copied competitor content.",
    icon: FileCog,
  },
  {
    number: "04",
    title: "Artificially repeated location pages.",
    icon: MapPinned,
  },
  {
    number: "05",
    title: "Guaranteed number-one rankings.",
    icon: Trophy,
  },
  {
    number: "06",
    title: "Meaningless traffic targets.",
    icon: Gauge,
  },
  {
    number: "07",
    title: "Automated content published without review or purpose.",
    icon: Bot,
  },
  {
    number: "08",
    title:
      "Short-term tactics that put your website at unnecessary risk.",
    icon: Ban,
  },
];

const principles = [
  {
    number: "01",
    title: "RELEVANCE",
  },
  {
    number: "02",
    title: "TECHNICAL QUALITY",
  },
  {
    number: "03",
    title: "USEFUL CONTENT",
  },
  {
    number: "04",
    title: "CLEAR EXPERTISE",
  },
  {
    number: "05",
    title: "SUSTAINABLE IMPROVEMENT",
  },
];

/* ============================================================
   MAIN SECTION
============================================================ */

export default function SEOBetterApproachSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="better-seo-approach"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-64
            top-[8%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#3976B6]/[0.05]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -right-64
            bottom-[10%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#C6A77A]/[0.09]
            blur-[160px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

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
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            max-w-[980px]
            text-center
          "
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#C6A77A]" />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.24em]
                text-[#C6A77A]
              "
            >
              A BETTER APPROACH TO SEO
            </span>

            <span className="h-px w-9 bg-[#C6A77A]" />
          </div>

          <h2
            className="
              mt-6
              text-[2.2rem]
              font-medium
              leading-[1.08]
              tracking-[-0.035em]
              text-[#0B2A52]
              sm:text-[2.6rem]
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

          <p
            className="
              mx-auto
              mt-7
              max-w-[820px]
              text-[14px]
              leading-7
              text-[#0B2A52]/64
              sm:text-[15px]
            "
          >
            SEO is a long-term growth channel, and we would rather build
            something durable than chase temporary tricks.
          </p>
        </motion.div>

        {/* =====================================================
            EDITORIAL STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-20
            max-w-[1180px]
            overflow-hidden
            border-y
            border-[#0B2A52]/14
            py-12
            sm:py-14
            lg:py-16
          "
        >
          {/* HUGE BACKGROUND WORD */}

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              whitespace-nowrap
              select-none
              text-[86px]
              font-semibold
              leading-none
              tracking-[-0.07em]
              text-[#0B2A52]/[0.025]
              sm:text-[130px]
              lg:text-[170px]
            "
          >
            NO SHORTCUTS
          </span>

          <div
            className="
              relative
              z-10
              mx-auto
              grid
              max-w-[1000px]
              gap-10
              lg:grid-cols-[0.72fr_1.28fr]
              lg:items-center
            "
          >
            {/* VISUAL SYMBOL */}

            <div
              className="
                flex
                justify-center
                lg:justify-start
              "
            >
              <div
                className="
                  relative
                  flex
                  h-[190px]
                  w-[190px]
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-[#3976B6]/12
                  "
                />

                <div
                  className="
                    absolute
                    inset-[22px]
                    rounded-full
                    border
                    border-dashed
                    border-[#C6A77A]/25
                  "
                />

                <motion.div
                  initial={{
                    scale: reduceMotion ? 1 : 0.88,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.75,
                    ease,
                  }}
                  className="
                    relative
                    flex
                    h-[102px]
                    w-[102px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                    shadow-[0_18px_45px_rgba(11,42,82,0.18)]
                  "
                >
                  <ShieldCheck
                    size={34}
                    strokeWidth={1.35}
                  />

                  <span
                    className="
                      absolute
                      h-[2px]
                      w-[132px]
                      -rotate-45
                      bg-[#C6A77A]
                    "
                  />
                </motion.div>

                <span
                  className="
                    absolute
                    bottom-[-3px]
                    rounded-full
                    border
                    border-[#0B2A52]/10
                    bg-white
                    px-4
                    py-2
                    text-[9px]
                    font-semibold
                    tracking-[0.15em]
                    text-[#0B2A52]/48
                  "
                >
                  STRATEGY STANDARD
                </span>
              </div>
            </div>

            {/* STATEMENT */}

            <div>
              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.18em]
                  text-[#C6A77A]
                "
              >
                THE STANDARD
              </span>

              <h3
                className="
                  mt-4
                  max-w-[680px]
                  text-[28px]
                  font-medium
                  leading-[1.18]
                  tracking-[-0.03em]
                  text-[#0B2A52]
                  sm:text-[33px]
                  lg:text-[36px]
                "
              >
                If a tactic cannot support long-term value, it does not belong
                in the strategy.
              </h3>

              <p
                className="
                  mt-5
                  max-w-[650px]
                  text-[14px]
                  leading-7
                  text-[#0B2A52]/60
                  sm:text-[15px]
                "
              >
                We do not build SEO around volume for the sake of volume,
                shortcuts for temporary movement or promises that cannot be
                responsibly controlled.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            WHAT WE DON'T DO — OPEN MATRIX
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.85,
            ease,
          }}
          className="
            mx-auto
            mt-24
            max-w-[1180px]
          "
        >
          {/* HEADER */}

          <div
            className="
              flex
              flex-col
              gap-6
              border-b
              border-[#0B2A52]/15
              pb-7
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C6A77A]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.19em]
                    text-[#C6A77A]
                  "
                >
                  WHAT WE DON&apos;T BUILD AROUND
                </span>
              </div>

              <h3
                className="
                  mt-4
                  max-w-[700px]
                  text-[28px]
                  font-medium
                  leading-[1.16]
                  tracking-[-0.03em]
                  text-[#0B2A52]
                  sm:text-[32px]
                "
              >
                Eight shortcuts we intentionally leave out.
              </h3>
            </div>

            <div className="flex items-end gap-3">
              <span
                className="
                  text-[34px]
                  font-medium
                  leading-none
                  tracking-[-0.04em]
                  text-[#C6A77A]
                "
              >
                08
              </span>

              <span
                className="
                  pb-1
                  text-[9px]
                  font-semibold
                  leading-4
                  tracking-[0.13em]
                  text-[#0B2A52]/36
                "
              >
                SEO
                <br />
                GUARDRAILS
              </span>
            </div>
          </div>

          {/* ===================================================
              OPEN GRID — NOT CARDS
          =================================================== */}

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {avoidItems.map((item, index) => (
              <AvoidCell
                key={item.number}
                item={item}
                index={index}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            TRANSITION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: reduceMotion ? 1 : 0.8,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.85,
            ease,
          }}
          className="
            mx-auto
            mt-16
            flex
            max-w-[860px]
            items-center
            gap-5
          "
        >
          <span
            className="
              h-px
              flex-1
              bg-gradient-to-r
              from-transparent
              to-[#0B2A52]/18
            "
          />

          <span
            className="
              text-center
              text-[10px]
              font-semibold
              tracking-[0.16em]
              text-[#0B2A52]/38
            "
          >
            REMOVE THE SHORTCUTS · STRENGTHEN THE FOUNDATION
          </span>

          <span
            className="
              h-px
              flex-1
              bg-gradient-to-l
              from-transparent
              to-[#0B2A52]/18
            "
          />
        </motion.div>

        {/* =====================================================
            WHAT WE BUILD INSTEAD
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 26,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[1140px]
          "
        >
          {/* INTRO */}

          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <Sparkles
                size={14}
                strokeWidth={1.7}
                className="text-[#C6A77A]"
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.2em]
                  text-[#C6A77A]
                "
              >
                WHAT WE BUILD INSTEAD
              </span>
            </div>

            <h3
              className="
                mx-auto
                mt-4
                max-w-[790px]
                text-[29px]
                font-medium
                leading-[1.16]
                tracking-[-0.03em]
                text-[#0B2A52]
                sm:text-[34px]
              "
            >
              A stronger foundation for sustainable search growth.
            </h3>
          </div>

          {/* ===================================================
              ARCHITECTURAL FOUNDATION VISUAL
          =================================================== */}

          <div
            className="
              relative
              mt-14
              pt-16
            "
          >
            {/* TOP RESULT */}

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : -10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease,
              }}
              className="
                absolute
                left-1/2
                top-0
                z-20
                -translate-x-1/2
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#C6A77A]/35
                  bg-white
                  px-5
                  py-3
                  shadow-[0_10px_30px_rgba(11,42,82,0.07)]
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                  "
                >
                  <ShieldCheck
                    size={14}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <span
                    className="
                      block
                      text-[9px]
                      font-semibold
                      tracking-[0.14em]
                      text-[#C6A77A]
                    "
                  >
                    RESULT
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[12px]
                      font-medium
                      text-[#0B2A52]
                    "
                  >
                    Durable Search Growth
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CONNECTOR */}

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.15,
              }}
              className="
                absolute
                left-1/2
                top-[52px]
                h-[58px]
                w-px
                -translate-x-1/2
                origin-top
                bg-[#C6A77A]/45
              "
            />

            {/* FOUNDATION */}

            <div
              className="
                relative
                mt-7
                overflow-hidden
                rounded-[30px]
                border
                border-[#0B2A52]/14
                bg-gradient-to-b
                from-[#F8FBFE]
                via-white
                to-[#FAF4EA]
                px-5
                pb-6
                pt-12
                shadow-[0_24px_65px_rgba(11,42,82,0.055)]
                sm:px-8
              "
            >
              {/* BACKGROUND ARCH */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[-260px]
                  h-[500px]
                  w-[760px]
                  -translate-x-1/2
                  rounded-full
                  border
                  border-[#3976B6]/[0.07]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[-210px]
                  h-[420px]
                  w-[620px]
                  -translate-x-1/2
                  rounded-full
                  border
                  border-[#C6A77A]/10
                "
              />

              {/* PILLARS */}

              <div
                className="
                  relative
                  z-10
                  grid
                  gap-4
                  sm:grid-cols-2
                  lg:grid-cols-5
                "
              >
                {principles.map((item, index) => (
                  <FoundationPillar
                    key={item.number}
                    item={item}
                    index={index}
                    reduceMotion={!!reduceMotion}
                  />
                ))}
              </div>

              {/* FOUNDATION BASE */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.18,
                  ease,
                }}
                className="
                  relative
                  z-10
                  mt-5
                  h-[4px]
                  origin-left
                  rounded-full
                  bg-gradient-to-r
                  from-[#3976B6]
                  via-[#0B2A52]
                  to-[#C6A77A]
                "
              />
            </div>
          </div>

          {/* ===================================================
              FINAL COPY
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
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
              duration: 0.8,
              ease,
            }}
            className="
              mx-auto
              mt-10
              max-w-[900px]
              text-center
            "
          >
            <p
              className="
                text-[18px]
                font-medium
                leading-8
                tracking-[-0.015em]
                text-[#0B2A52]
                sm:text-[20px]
              "
            >
              Instead, we focus on relevance, technical quality, useful
              content, clear expertise and sustainable improvement.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   AVOID CELL
============================================================ */

function AvoidCell({
  item,
  index,
  reduceMotion,
}: {
  item: AvoidItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  const isRightEdge = (index + 1) % 4 === 0;
  const isBottomRow = index >= 4;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 16,
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
        duration: 0.58,
        delay: Math.min(index * 0.045, 0.22),
        ease,
      }}
      className={`
        group
        relative
        min-h-[205px]
        px-5
        py-7
        sm:px-6
        lg:px-7

        ${
          !isRightEdge
            ? "lg:border-r lg:border-[#0B2A52]/10"
            : ""
        }

        ${
          !isBottomRow
            ? "border-b border-[#0B2A52]/10"
            : ""
        }
      `}
    >
      {/* LARGE NUMBER */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-4
          top-2
          text-[66px]
          font-semibold
          leading-none
          tracking-[-0.07em]
          text-[#0B2A52]/[0.025]
          transition-colors
          duration-500
          group-hover:text-[#C6A77A]/[0.08]
        "
      >
        {item.number}
      </span>

      {/* ICON */}

      <div
        className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#EAF4FC]
          text-[#3976B6]
          transition-all
          duration-300
          group-hover:bg-[#0B2A52]
          group-hover:text-white
        "
      >
        <Icon
          size={16}
          strokeWidth={1.6}
        />

        <span
          className="
            absolute
            h-px
            w-7
            -rotate-45
            bg-[#C6A77A]
          "
        />
      </div>

      {/* NUMBER */}

      <span
        className="
          mt-6
          block
          text-[10px]
          font-bold
          tracking-[0.15em]
          text-[#C6A77A]
        "
      >
        {item.number}
      </span>

      {/* TEXT */}

      <h4
        className="
          mt-3
          max-w-[230px]
          text-[16px]
          font-medium
          leading-6
          tracking-[-0.015em]
          text-[#0B2A52]/68
          transition-colors
          duration-300
          group-hover:text-[#0B2A52]
          sm:text-[17px]
        "
      >
        {item.title}
      </h4>

      {/* HOVER SIGNAL */}

      <span
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-gradient-to-r
          from-[#3976B6]
          to-[#C6A77A]
          transition-all
          duration-500
          group-hover:w-[45%]
        "
      />
    </motion.div>
  );
}

/* ============================================================
   FOUNDATION PILLAR
============================================================ */

function FoundationPillar({
  item,
  index,
  reduceMotion,
}: {
  item: {
    number: string;
    title: string;
  };
  index: number;
  reduceMotion: boolean;
}) {
  return (
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
        amount: 0.35,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease,
      }}
      className="
        group
        relative
        min-h-[150px]
        overflow-hidden
        rounded-[18px]
        border
        border-[#0B2A52]/10
        bg-white/72
        px-5
        py-6
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#C6A77A]/35
        hover:shadow-[0_12px_30px_rgba(11,42,82,0.055)]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-[#C6A77A]/35
          bg-[#FCF6EC]
          text-[10px]
          font-bold
          text-[#C6A77A]
          transition-all
          duration-300
          group-hover:bg-[#0B2A52]
          group-hover:text-white
        "
      >
        {item.number}
      </div>

      <p
        className="
          mt-5
          text-[10px]
          font-semibold
          leading-5
          tracking-[0.13em]
          text-[#0B2A52]/62
        "
      >
        {item.title}
      </p>

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[3px]
          w-[46%]
          -translate-x-1/2
          rounded-t-full
          bg-[#C6A77A]
          opacity-35
          transition-all
          duration-300
          group-hover:w-[75%]
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}