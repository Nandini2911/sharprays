"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Eye,
  FileText,
  Megaphone,
  Monitor,
  Search,
  ShieldCheck,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type ResponsibilityItem = {
  number: string;
  title: string;
  icon: LucideIcon;
  tone: "blue" | "gold";
};

/* =========================================================
   DATA
========================================================= */

const responsibilityItems: ResponsibilityItem[] = [
  {
    number: "01",
    title: "Permission to use supplied assets",
    icon: BadgeCheck,
    tone: "blue",
  },
  {
    number: "02",
    title: "Rights to logos and brand materials",
    icon: ShieldCheck,
    tone: "gold",
  },
  {
    number: "03",
    title: "Appropriate licensed media",
    icon: FileText,
    tone: "blue",
  },
  {
    number: "04",
    title: "Likeness and voice permissions",
    icon: Users,
    tone: "gold",
  },
  {
    number: "05",
    title: "Factual accuracy",
    icon: Search,
    tone: "blue",
  },
  {
    number: "06",
    title: "Disclosure where context reasonably requires it",
    icon: Eye,
    tone: "gold",
  },
  {
    number: "07",
    title: "Platform advertising requirements",
    icon: Megaphone,
    tone: "blue",
  },
  {
    number: "08",
    title: "Intended usage and distribution",
    icon: Monitor,
    tone: "gold",
  },
];

/* =========================================================
   PILL
========================================================= */

function ResponsibilityPill({
  item,
  index,
  reduceMotion,
}: {
  item: ResponsibilityItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;
  const isBlue = item.tone === "blue";

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 25,
              y: 12,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.065,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              x: 5,
            }
      }
      className="
        group
        relative
        z-20

        flex
        min-h-[72px]
        items-center

        rounded-full
        border

        px-3
        pr-6

        shadow-[0_14px_35px_rgba(11,42,82,0.055)]

        backdrop-blur-sm

        transition-shadow
        duration-300

        hover:shadow-[0_18px_42px_rgba(11,42,82,0.10)]
      "
      style={{
        background: isBlue
          ? "linear-gradient(100deg, rgba(238,247,255,0.96) 0%, rgba(248,252,255,0.97) 100%)"
          : "linear-gradient(100deg, rgba(252,247,239,0.97) 0%, rgba(255,251,246,0.98) 100%)",
        borderColor: isBlue ? "#BDD8EF" : "#E4CCAA",
      }}
    >
      {/* ICON CIRCLE */}

      <motion.div
        whileHover={
          reduceMotion
            ? undefined
            : {
                scale: 1.07,
                rotate: 4,
              }
        }
        className="
          relative
          flex
          h-[54px]
          w-[54px]
          shrink-0
          items-center
          justify-center

          rounded-full

          border-[5px]
          border-white

          bg-white

          shadow-[0_9px_24px_rgba(11,42,82,0.12)]
        "
      >
        <span
          className={`
            absolute
            inset-[4px]
            rounded-full

            ${
              isBlue
                ? "bg-[#EAF4FC]"
                : "bg-[#FBF3E8]"
            }
          `}
        />

        <Icon
          size={19}
          strokeWidth={1.5}
          className={`
            relative
            z-10

            ${
              isBlue
                ? "text-[#6285AD]"
                : "text-[#A97C52]"
            }
          `}
        />
      </motion.div>

      {/* NUMBER */}

      <span
        style={newYorkFont}
        className="
          ml-4
          shrink-0

          text-[1rem]
          font-light

          text-[#A97C52]
        "
      >
        {item.number}
      </span>

      {/* TEXT */}

      <p
        style={newYorkFont}
        className="
          ml-5
          max-w-[210px]

          text-[0.92rem]
          font-light
          leading-[1.2]
          tracking-[-0.02em]

          text-[#0B2A52]
        "
      >
        {item.title}
      </p>

      {/* HOVER TRACE */}

      <span
        className={`
          absolute
          bottom-[5px]
          left-[82px]

          h-px
          w-0

          transition-all
          duration-500

          group-hover:w-[80px]

          ${
            isBlue
              ? "bg-[#6285AD]/50"
              : "bg-[#B79A72]/55"
          }
        `}
      />
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ResponsibleAiVideo() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="responsible-ai-video"
      aria-labelledby="responsible-ai-video-heading"
      className="
        relative
        isolate
        overflow-hidden

        bg-white
      "
    >
      {/* =====================================================
          MAIN WHITE AREA
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden

          pb-16
          pt-20

          sm:pb-20
          sm:pt-24

          lg:pb-24
          lg:pt-28

          xl:min-h-[790px]
          xl:pb-10
      "
      >
        {/* =================================================
            BACKGROUND DECORATION
        ================================================= */}

        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* TOP CENTRAL BLUE ARC */}

          <div
            className="
              absolute
              left-[45%]
              top-[-365px]

              hidden
              h-[690px]
              w-[690px]

              -translate-x-1/2

              rounded-full

              border
              border-[#B9D7EF]/45

              bg-[radial-gradient(circle_at_center,rgba(222,240,253,0.76)_0%,rgba(238,247,253,0.50)_42%,rgba(255,255,255,0)_72%)]

              xl:block
            "
          />

          <div
            className="
              absolute
              left-[44%]
              top-[-390px]

              hidden
              h-[740px]
              w-[740px]

              -translate-x-1/2

              rounded-full

              border
              border-[#D4AA69]/45

              xl:block
            "
          />

          {/* RIGHT LARGE ARC */}

          <div
            className="
              absolute
              -bottom-[425px]
              -right-[410px]

              hidden
              h-[880px]
              w-[880px]

              rounded-full

              border
              border-[#D5A15A]/55

              xl:block
            "
          />

          <div
            className="
              absolute
              -bottom-[440px]
              -right-[445px]

              hidden
              h-[825px]
              w-[825px]

              rounded-full

              border-[35px]
              border-[#EAF4FC]/85

              xl:block
            "
          />

          {/* SUBTLE BLUE GLOW */}

          <div
            className="
              absolute
              right-[5%]
              top-[20%]

              h-[500px]
              w-[500px]

              rounded-full

              bg-[#EAF4FC]/40

              blur-[135px]
            "
          />
        </div>

        {/* =================================================
            SIDE TEXT — RIGHT
        ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 15,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            absolute
            right-[2.8%]
            top-[5%]

            hidden

            xl:block
          "
        >
          <p
            style={newYorkFont}
            className="
              text-[7px]
              uppercase
              leading-[2]
              tracking-[0.28em]

              text-[#6285AD]
            "
          >
            Responsible
            <br />
            Creativity
            <br />
            Creates
            <br />
            A Brighter
            <br />
            Tomorrow
          </p>

          <span className="mt-4 block h-px w-9 bg-[#B79A72]" />
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 15,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.15,
            ease,
          }}
          className="
            absolute
            bottom-[12%]
            right-[2.8%]

            hidden

            xl:block
          "
        >
          <span className="block h-px w-9 bg-[#B79A72]" />

          <p
            style={newYorkFont}
            className="
              mt-4
              text-[7px]
              uppercase
              leading-[2]
              tracking-[0.28em]

              text-[#6285AD]
            "
          >
            Good
            <br />
            Stories
            <br />
            Respect
            <br />
            A Wider
            <br />
            World
          </p>
        </motion.div>

        {/* =================================================
            CONTENT CONTAINER
        ================================================= */}

        <div
          className="
            relative
            z-10

            mx-auto
            w-full
            max-w-[1540px]

            px-5
            sm:px-8
            md:px-10
            lg:px-14
            xl:px-16
          "
        >
          {/* =================================================
              DESKTOP REFERENCE COMPOSITION
          ================================================= */}

          <div
            className="
              xl:grid
              xl:grid-cols-[0.39fr_0.12fr_0.49fr]
              xl:gap-5
            "
          >
            {/* =================================================
                LEFT — EDITORIAL CONTENT
            ================================================= */}

            <div>
              {/* EYEBROW */}

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
                  amount: 0.4,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  ease,
                }}
                className="
                  flex
                  items-center
                  gap-5
                "
              >
                <span className="h-px w-10 bg-[#B79A72]" />

                <span
                  style={newYorkFont}
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.3em]

                    text-[#A4774C]

                    sm:text-[10px]
                  "
                >
                  Creative With Clear Responsibility
                </span>
              </motion.div>

              {/* HEADING */}

              <motion.h2
                id="responsible-ai-video-heading"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 32,
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
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : 0.08,
                  ease,
                }}
                style={newYorkFont}
                className="
                  mt-7
                  max-w-[670px]

                  text-[2.1rem]
                  font-light
                  leading-[1.02]
                  tracking-[-0.05em]

                  text-[#0B2A52]

                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Just Because
                <br className="hidden xl:block" />
                Something Can Be
                <br className="hidden xl:block" />
                Generated{" "}
                <span className="text-[#A97C52]">
                  Doesn&apos;t
                  <br className="hidden xl:block" />
                  Mean It Should Be.
                </span>
              </motion.h2>

              {/* GOLD LINE */}

              <motion.span
                initial={{
                  scaleX: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.2,
                  ease,
                }}
                className="
                  mt-8
                  block
                  h-[2px]
                  w-[58px]
                  origin-left
                  bg-[#B79A72]
                "
              />

              {/* INTRO */}

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
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.15,
                  ease,
                }}
                style={newYorkFont}
                className="
                  mt-8
                  max-w-[560px]

                  text-[14px]
                  leading-[1.72]

                  text-[#486681]

                  sm:text-[16px]
                "
              >
                AI video introduces new creative possibilities, but it also
                requires careful decisions around accuracy, ownership and
                representation.
              </motion.p>

              {/* WHERE RELEVANT */}

              <motion.p
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
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.2,
                  ease,
                }}
                style={newYorkFont}
                className="
                  mt-7

                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.27em]

                  text-[#526F88]
                "
              >
                Where relevant, projects should consider:
              </motion.p>

              {/* BOUNDARY NOTE */}

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
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : 0.25,
                  ease,
                }}
                className="
                  relative
                  mt-6

                  max-w-[565px]

                  overflow-hidden

                  rounded-[16px]

                  bg-[#FBF8F3]

                  px-5
                  py-4

                  shadow-[0_12px_32px_rgba(11,42,82,0.04)]

                  sm:px-6
                "
              >
                <span
                  className="
                    absolute
                    bottom-4
                    left-5
                    top-4

                    w-px

                    bg-[#B79A72]
                  "
                />

                <div
                  className="
                    flex
                    items-center
                    gap-5

                    pl-4
                  "
                >
                  <div
                    className="
                      flex
                      h-[40px]
                      w-[40px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#B79A72]

                      text-[#A97C52]
                    "
                  >
                    <span
                      style={newYorkFont}
                      className="
                        text-[1rem]
                        font-medium
                      "
                    >
                      !
                    </span>
                  </div>

                  <p
                    style={newYorkFont}
                    className="
                      text-[0.86rem]
                      font-light
                      leading-[1.45]

                      text-[#0B2A52]

                      sm:text-[0.94rem]
                    "
                  >
                    We do not treat misleading impersonation or unsupported
                    claims as creative strategy.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                CENTER — RESPONSIBILITY SPINE
            ================================================= */}

            <div
              className="
                relative
                hidden
                min-h-[650px]

                xl:flex
                xl:flex-col
                xl:items-center
              "
            >
              {/* TOP LINE */}

              <motion.div
                initial={{
                  scaleY: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  ease,
                }}
                className="
                  h-[72px]
                  w-px
                  origin-top

                  bg-[#0B2A52]/35
                "
              />

              {/* STAR CORE */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.8,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : 0.12,
                  ease,
                }}
                className="
                  relative

                  flex
                  h-[104px]
                  w-[104px]
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#BFD9EF]

                  bg-white

                  shadow-[0_13px_38px_rgba(11,42,82,0.08)]
                "
              >
                {/* OUTER RINGS */}

                <span
                  className="
                    absolute
                    -inset-[12px]
                    rounded-full
                    border
                    border-[#CFE4F4]/65
                  "
                />

                <span
                  className="
                    absolute
                    -inset-[23px]
                    rounded-full
                    border
                    border-[#E1EDF6]/80
                  "
                />

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: [0, 8, 0, -8, 0],
                          scale: [1, 1.05, 1],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles
                    size={38}
                    strokeWidth={1.05}
                    className="text-[#A97C52]"
                  />
                </motion.div>
              </motion.div>

              {/* SMALL LINE */}

              <div className="h-[24px] w-px bg-[#0B2A52]/35" />

              {/* CENTER COPY */}

              <motion.p
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                      }
                }
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.25,
                }}
                style={newYorkFont}
                className="
                  mt-3
                  max-w-[110px]

                  text-center

                  text-[7px]
                  uppercase
                  leading-[2.15]
                  tracking-[0.27em]

                  text-[#526F88]
                "
              >
                Creativity
                <br />
                Goes
                <br />
                Further
                <br />
                When
                <br />
                It Respects
                <br />
                People,
                <br />
                Brands
                <br />
                And
                <br />
                Reality.
              </motion.p>

              <div className="mt-5 h-[67px] w-px bg-[#0B2A52]/35" />

              <motion.p
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                      }
                }
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.3,
                }}
                style={newYorkFont}
                className="
                  mt-4
                  text-center

                  text-[7px]
                  uppercase
                  leading-[2]
                  tracking-[0.28em]

                  text-[#6285AD]
                "
              >
                Better
                <br />
                Ideas
                <br />
                A Brighter
                <br />
                Tomorrow
              </motion.p>

              <span className="mt-5 h-px w-8 bg-[#B79A72]" />
            </div>

            {/* =================================================
                RIGHT — ASCENDING RESPONSIBILITY PATH
            ================================================= */}

            <div
              className="
                relative

                mt-14

                xl:mt-0
                xl:min-h-[680px]
              "
            >
              {/* =================================================
                  DESKTOP ASCENDING PATH
              ================================================= */}

              <div
                className="
                  relative
                  hidden
                  h-[680px]

                  xl:block
                "
              >
                {/* CONNECTOR SVG */}

                <svg
                  viewBox="0 0 720 680"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    h-full
                    w-full
                  "
                >
                  {/* BASE CURVED PATH */}

                  <motion.path
                    d="
                      M42 624
                      C40 590 40 570 76 560
                      C104 552 104 515 104 503
                      C104 474 104 451 140 442
                      C168 435 168 397 168 385
                      C168 356 168 335 204 325
                      C232 318 232 279 232 267
                      C232 239 232 217 268 207
                      C296 200 296 162 296 150
                      C296 121 296 101 332 91
                      C358 84 358 55 358 38
                    "
                    stroke="#D2A25B"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    initial={{
                      pathLength: reduceMotion ? 1 : 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.7,
                      ease,
                    }}
                  />

                  {/* NODES */}

                  {[
                    [42, 624],
                    [104, 503],
                    [140, 442],
                    [168, 385],
                    [204, 325],
                    [232, 267],
                    [268, 207],
                    [332, 91],
                  ].map(([cx, cy], index) => (
                    <motion.circle
                      key={index}
                      cx={cx}
                      cy={cy}
                      r="5"
                      fill="#C69245"
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: reduceMotion
                          ? 0
                          : 0.25 + index * 0.075,
                      }}
                    />
                  ))}
                </svg>

                {/* =================================================
                    PILLS
                ================================================= */}

                {responsibilityItems.map((item, index) => {
                  /*
                    index 0 = bottom left
                    index 7 = top right
                  */

                  const left = 46 + index * 43;
                  const top = 594 - index * 78;

                  return (
                    <div
                      key={item.number}
                      className="
                        absolute
                        w-[335px]

                        2xl:w-[360px]
                      "
                      style={{
                        left: `${left}px`,
                        top: `${top}px`,
                      }}
                    >
                      <ResponsibilityPill
                        item={item}
                        index={index}
                        reduceMotion={reduceMotion}
                      />
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                  MOBILE / TABLET RESPONSIBILITY LIST
              ================================================= */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-3

                  sm:grid-cols-2

                  xl:hidden
                "
              >
                {responsibilityItems.map((item, index) => (
                  <ResponsibilityPill
                    key={item.number}
                    item={item}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL NAVY TRUST STRIP
      ===================================================== */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 25,
              }
        }
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
          relative
          overflow-hidden

          bg-[#0B2A52]

          px-5
          py-9

          sm:px-8
          sm:py-10

          lg:px-14

          xl:py-11
        "
      >
        {/* =================================================
            BACKGROUND WAVES
        ================================================= */}

        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              -bottom-[225px]
              -left-[170px]

              h-[420px]
              w-[650px]

              rotate-[-8deg]

              rounded-[50%]

              border-[45px]
              border-white/[0.035]
            "
          />

          <div
            className="
              absolute
              -right-[170px]
              -top-[240px]

              h-[460px]
              w-[670px]

              rotate-[8deg]

              rounded-[50%]

              border-[45px]
              border-[#3976B6]/10
            "
          />

          <div
            className="
              absolute
              -right-[80px]
              -top-[210px]

              h-[430px]
              w-[430px]

              rounded-full

              border
              border-[#B79A72]/45
            "
          />
        </div>

        <div
          className="
            relative
            z-10

            mx-auto
            grid
            max-w-[1460px]
            gap-8

            md:grid-cols-[0.20fr_0.60fr_0.20fr]
            md:items-center
          "
        >
          {/* LEFT MICROCOPY */}

          <div
            className="
              hidden
              border-r
              border-white/20
              pr-8

              md:block
            "
          >
            <p
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                leading-[1.8]
                tracking-[0.27em]

                text-white/50
              "
            >
              People
              <br />
              Purpose
              <br />
              Progress
            </p>

            <span className="mt-4 block h-px w-9 bg-[#C6A77A]" />
          </div>

          {/* CENTER */}

          <div className="text-center">
            <div
              className="
                flex
                items-center
                justify-center
                gap-5
              "
            >
              <span
                className="
                  hidden
                  h-px
                  w-11

                  bg-[#C6A77A]

                  sm:block
                "
              />

              <h3
                style={newYorkFont}
                className="
                  text-[1.65rem]
                  font-light
                  leading-[1.1]
                  tracking-[-0.035em]

                  text-white

                  sm:text-[2rem]
                  md:text-[2.25rem]
                  lg:text-[2.5rem]
                "
              >
                Trust still matters{" "}
                <span className="font-normal italic text-[#D5AA72]">
                  after the render finishes.
                </span>
              </h3>
            </div>
          </div>

          {/* RIGHT MICROCOPY */}

          <div
            className="
              hidden
              border-l
              border-white/20
              pl-8
              text-right

              md:block
            "
          >
            <p
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                leading-[1.8]
                tracking-[0.27em]

                text-white/50
              "
            >
              Clearer
              <br />
              Choices
              <br />
              Brighter
              <br />
              Outcomes
            </p>

            <span className="ml-auto mt-4 block h-px w-9 bg-[#C6A77A]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}