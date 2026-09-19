"use client";

import { motion, useReducedMotion } from "framer-motion";
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

const deliverables = [
  {
    number: "01",
    title: "Permission to Use Supplied Assets",
    description:
      "Where relevant, projects should consider permission to use supplied assets.",
    icon: BadgeCheck,
    tone: "blue",
  },
  {
    number: "02",
    title: "Rights to Logos & Brand Materials",
    description:
      "Where relevant, projects should consider rights to logos and brand materials.",
    icon: Tag,
    tone: "gold",
  },
  {
    number: "03",
    title: "Appropriate Licensed Media",
    description:
      "Where relevant, projects should consider appropriate licensed media.",
    icon: FileText,
    tone: "blue",
  },
  {
    number: "04",
    title: "Likeness & Voice Permissions",
    description:
      "Where relevant, projects should consider likeness and voice permissions.",
    icon: Users,
    tone: "gold",
  },
  {
    number: "05",
    title: "Factual Accuracy",
    description:
      "Where relevant, projects should consider factual accuracy.",
    icon: Search,
    tone: "blue",
  },
  {
    number: "06",
    title: "Disclosure Where Context Requires It",
    description:
      "Disclosure where context reasonably requires it.",
    icon: Eye,
    tone: "gold",
  },
  {
    number: "07",
    title: "Platform Advertising Requirements",
    description:
      "Where relevant, projects should consider platform advertising requirements.",
    icon: Megaphone,
    tone: "blue",
  },
  {
    number: "08",
    title: "Intended Usage & Distribution",
    description:
      "Where relevant, projects should consider intended usage and distribution.",
    icon: Monitor,
    tone: "gold",
  },
  {
    number: "09",
    title: "Misleading Impersonation",
    description:
      "We do not treat misleading impersonation or unsupported claims as creative strategy.",
    icon: ShieldCheck,
    tone: "blue",
  },
  {
    number: "10",
    title: "Trust After the Render",
    description: "Trust still matters after the render finishes.",
    icon: Sparkles,
    tone: "gold",
  },
];

const proposalItems = [
  "Permission to use supplied assets",
  "Rights to logos and brand materials",
  "Appropriate licensed media",
  "Likeness and voice permissions",
  "Factual accuracy",
  "Disclosure where context reasonably requires it",
  "Platform advertising requirements",
  "Intended usage and distribution",
];

export default function ResponsibleAiVideo() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="responsible-ai-video"
      aria-labelledby="responsible-ai-video-heading"
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(135deg,#FDFEFE_0%,#F5F9FD_42%,#FCFAF6_100%)]
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-[260px]
            top-[16%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#DCECF8]/55
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-[270px]
            bottom-[2%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#F0E5D4]/55
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-[310px]
            -top-[190px]
            hidden
            h-[720px]
            w-[720px]
            rounded-full
            border-[80px]
            border-[#DDE9F4]/55
            xl:block
          "
        />

        <div
          className="
            absolute
            -right-[225px]
            -top-[105px]
            hidden
            h-[560px]
            w-[560px]
            rounded-full
            border
            border-[#C6A77A]/55
            xl:block
          "
        />

        <div
          className="
            absolute
            -right-[135px]
            -top-[20px]
            hidden
            h-[390px]
            w-[390px]
            rounded-full
            bg-white/30
            xl:block
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
            HERO
        ===================================================== */}

        <div
          className="
            relative
            grid
            gap-12
            xl:grid-cols-[0.69fr_0.31fr]
            xl:gap-16
          "
        >
          {/* LEFT */}

          <div>
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -25,
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
                duration: reduceMotion ? 0 : 0.75,
                ease,
              }}
              className="flex items-center gap-4"
            >
              <span className="h-px w-11 bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#B88959]
                  sm:text-[10px]
                "
              >
                Creative With Clear Responsibility
              </span>
            </motion.div>

            <motion.h2
              id="responsible-ai-video-heading"
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
                amount: 0.35,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.07,
                ease,
              }}
              style={newYorkFont}
              className="
                mt-7
                max-w-[970px]
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
              Just Because Something Can Be Generated
              <br />

              <span className="text-[#B88959]">
                Doesn&apos;t Mean It Should Be.
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
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.14,
                ease,
              }}
              style={newYorkFont}
              className="
                mt-6
                max-w-[760px]
                text-[14px]
                leading-[1.7]
                text-[#0B2A52]/75
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              AI video introduces new creative possibilities, but it also
              requires careful decisions around accuracy, ownership and
              representation.
            </motion.p>

            {/* CATEGORY LINE */}

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
                delay: reduceMotion ? 0 : 0.2,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
              "
            >
              {["ACCURACY", "OWNERSHIP", "REPRESENTATION", "TRUST"].map(
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
                        text-[#0B2A52]/55
                      "
                    >
                      {item}
                    </span>

                    {index < 3 && (
                      <span
                        style={newYorkFont}
                        className="
                          text-[8px]
                          text-[#0B2A52]/35
                        "
                      >
                        /
                      </span>
                    )}
                  </div>
                ),
              )}
            </motion.div>
          </div>

          {/* RIGHT EDITORIAL */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 25,
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
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.15,
              ease,
            }}
            className="
              relative
              hidden
              min-h-[290px]
              xl:block
            "
          >
            <div
              className="
                absolute
                left-0
                top-3
                border-l
                border-[#0B2A52]/20
                pl-5
              "
            >
              {["PERMISSION", "RIGHTS", "ACCURACY", "TRUST"].map((item) => (
                <span
                  key={item}
                  style={newYorkFont}
                  className="
                    block
                    text-[8px]
                    uppercase
                    leading-[2.2]
                    tracking-[0.3em]
                    text-[#0B2A52]/45
                  "
                >
                  {item}
                </span>
              ))}

              <span
                className="
                  mt-4
                  block
                  h-px
                  w-10
                  bg-[#B88959]
                "
              />
            </div>

            <div
              className="
                absolute
                right-0
                top-[65px]
                w-[165px]
              "
            >
              <p
                style={newYorkFont}
                className="
                  text-[17px]
                  italic
                  leading-[1.05]
                  text-[#0B2A52]
                "
              >
                Creative
                <br />
                With Clear
                <br />
                Responsibility.
              </p>

              <span
                className="
                  mt-7
                  block
                  h-[2px]
                  w-10
                  bg-[#B88959]
                "
              />

              <p
                style={newYorkFont}
                className="
                  mt-8
                  text-[8px]
                  uppercase
                  leading-[2.1]
                  tracking-[0.27em]
                  text-[#0B2A52]/50
                "
              >
                Accuracy
                <br />
                Ownership
                <br />
                Representation
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            RESPONSIBILITY CARDS
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-12
            max-w-[1320px]
            lg:mt-14
          "
        >
          {/* DESKTOP CONNECTOR */}

          <svg
            viewBox="0 0 1320 590"
            preserveAspectRatio="none"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-[85px]
              z-0
              hidden
              h-[535px]
              w-full
              lg:block
            "
            fill="none"
          >
            {/* FIRST ROW */}

            <motion.path
              d="
                M 22 103
                C 22 72, 40 62, 62 62
                L 226 62
                C 247 62, 247 92, 265 92
                C 284 92, 283 62, 306 62
                L 491 62
                C 510 62, 510 92, 528 92
                C 547 92, 547 62, 568 62
                L 755 62
                C 776 62, 776 92, 795 92
                C 813 92, 813 62, 835 62
                L 1020 62
                C 1042 62, 1042 92, 1061 92
                C 1080 92, 1080 62, 1102 62
                L 1260 62
                C 1290 62, 1304 83, 1304 110
                L 1304 240
                C 1304 272, 1292 284, 1264 284
              "
              stroke="#356EA5"
              strokeWidth="1.25"
              strokeOpacity="0.72"
              strokeLinecap="round"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.8,
                ease,
              }}
            />

            {/* RETURN LINE */}

            <motion.path
              d="
                M 1264 284
                L 55 284
                C 26 284, 12 304, 12 330
                L 12 425
                C 12 454, 29 469, 55 469
              "
              stroke="#356EA5"
              strokeWidth="1.25"
              strokeOpacity="0.72"
              strokeLinecap="round"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.4,
                delay: reduceMotion ? 0 : 0.5,
                ease,
              }}
            />

            {/* SECOND ROW */}

            <motion.path
              d="
                M 55 469
                L 226 469
                C 247 469, 247 441, 265 441
                C 284 441, 284 469, 306 469
                L 491 469
                C 510 469, 510 441, 528 441
                C 547 441, 547 469, 568 469
                L 755 469
                C 776 469, 776 441, 795 441
                C 813 441, 813 469, 835 469
                L 1020 469
                C 1042 469, 1042 441, 1061 441
                C 1080 441, 1080 469, 1102 469
                L 1264 469
              "
              stroke="#356EA5"
              strokeWidth="1.25"
              strokeOpacity="0.72"
              strokeLinecap="round"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.6,
                delay: reduceMotion ? 0 : 0.8,
                ease,
              }}
            />

            {/* GOLD DETAILS */}

            <path
              d="M247 92 C284 92 284 62 306 62"
              stroke="#B88959"
              strokeWidth="1.2"
              strokeDasharray="2 4"
              opacity="0.7"
            />

            <path
              d="M776 441 C813 441 813 469 835 469"
              stroke="#B88959"
              strokeWidth="1.2"
              strokeDasharray="2 4"
              opacity="0.7"
            />

            {[
              [22, 103],
              [265, 92],
              [528, 92],
              [795, 92],
              [1061, 92],
              [55, 469],
              [265, 441],
              [528, 441],
              [795, 441],
              [1061, 441],
            ].map(([cx, cy], index) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="3.8"
                fill={index % 2 === 0 ? "#1F5F9E" : "#B88959"}
              />
            ))}
          </svg>

          {/* GRID */}

          <div
            className="
              relative
              z-10
              grid
              gap-7
              sm:grid-cols-2
              lg:grid-cols-5
              lg:gap-x-9
              lg:gap-y-10
            "
          >
            {deliverables.map((item, index) => (
              <DeliverableCard
                key={item.number}
                item={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            RESPONSIBILITY SUMMARY
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
            amount: 0.25,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[1320px]
            overflow-hidden
            rounded-[30px]
            border
            border-[#0B2A52]/10
            bg-[linear-gradient(100deg,rgba(255,255,255,0.76)_0%,rgba(246,249,252,0.92)_64%,rgba(238,244,249,0.9)_100%)]
            px-6
            py-8
            shadow-[0_20px_55px_rgba(11,42,82,0.045)]
            backdrop-blur-sm
            sm:px-8
            lg:grid
            lg:grid-cols-[0.76fr_0.24fr]
            lg:gap-10
            lg:px-10
            lg:py-10
          "
        >
          {/* DECORATION */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[160px]
              -right-[100px]
              h-[350px]
              w-[350px]
              rounded-full
              border-[40px]
              border-[#D9E8F3]/70
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[115px]
              -right-[55px]
              h-[270px]
              w-[270px]
              rounded-full
              border
              border-[#C6A77A]/25
            "
          />

          {/* LEFT */}

          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B88959]" />

              <span
                style={newYorkFont}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-[#B88959]
                "
              >
                Where Relevant, Projects Should Consider
              </span>
            </div>

            <div
              className="
                mt-7
                flex
                max-w-[930px]
                flex-wrap
                items-center
                gap-y-3
              "
            >
              {proposalItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 7,
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
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion
                      ? 0
                      : Math.min(index * 0.025, 0.2),
                  }}
                  className="
                    flex
                    items-center
                  "
                >
                  <span
                    style={newYorkFont}
                    className="
                      text-[11px]
                      text-[#0B2A52]/80
                      sm:text-[12px]
                    "
                  >
                    {item}
                  </span>

                  {index < proposalItems.length - 1 && (
                    <span
                      className="
                        mx-3
                        h-1
                        w-1
                        rounded-full
                        bg-[#B88959]
                      "
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* CLEAR BOUNDARY */}

            <div
              className="
                mt-8
                max-w-[850px]
                border-l-2
                border-[#B88959]
                pl-5
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.24em]
                  text-[#B88959]
                "
              >
                Clear Boundary
              </span>

              <p
                style={newYorkFont}
                className="
                  mt-3
                  text-[15px]
                  leading-[1.55]
                  text-[#0B2A52]/75
                "
              >
                We do not treat misleading impersonation or unsupported claims
                as creative strategy.
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              z-10
              mt-8
              border-t
              border-[#B88959]/30
              pt-7
              lg:mt-0
              lg:border-l
              lg:border-t-0
              lg:pl-10
              lg:pt-0
            "
          >
            <p
              style={newYorkFont}
              className="
                text-[31px]
                font-light
                italic
                leading-[0.95]
                tracking-[-0.04em]
                text-[#0B2A52]
                lg:text-[35px]
              "
            >
              Trust
              <br />
              Still Matters
              <br />
              After the Render Finishes.
            </p>

            <span
              className="
                mt-6
                block
                h-[2px]
                w-11
                bg-[#B88959]
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 14,
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
            mx-auto
            mt-7
            flex
            max-w-[1320px]
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
                tracking-[0.23em]
                text-[#0B2A52]/45
              "
            >
              Sharp Rays
            </span>

            <span
              style={newYorkFont}
              className="
                text-[7px]
                text-[#0B2A52]/30
              "
            >
              /
            </span>

            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.23em]
                text-[#0B2A52]/45
              "
            >
              Responsible AI Video
            </span>

            <span className="h-px w-10 bg-[#B88959]" />
          </div>

          <span
            style={newYorkFont}
            className="
              text-[7px]
              uppercase
              tracking-[0.24em]
              text-[#0B2A52]/35
            "
          >
            Accuracy · Ownership · Representation.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   RESPONSIBILITY CARD
========================================================= */

function DeliverableCard({
  item,
  index,
  reduceMotion,
}: {
  item: (typeof deliverables)[number];
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;
  const blue = item.tone === "blue";

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: index < 5 ? 28 : 34,
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
        delay: reduceMotion ? 0 : (index % 5) * 0.055,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className="
        group
        relative
        min-h-[255px]
        pt-7
        sm:min-h-[270px]
        lg:min-h-[285px]
      "
    >
      {/* OUTER SHAPE */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          top-[28px]
          overflow-hidden
          border
          bg-white/50
          shadow-[0_12px_35px_rgba(11,42,82,0.025)]
          backdrop-blur-[2px]
          transition-all
          duration-500
          group-hover:bg-white/75
          group-hover:shadow-[0_20px_45px_rgba(11,42,82,0.06)]

          ${
            blue
              ? `
                border-[#BFD8ED]
                group-hover:border-[#79A9D1]
              `
              : `
                border-[#E8D4B9]
                group-hover:border-[#CDAE84]
              `
          }
        `}
        style={{
          borderRadius: "36px 36px 18px 18px",
        }}
      />

      {/* CURVED TOP */}

      <div
        className={`
          pointer-events-none
          absolute
          left-[2px]
          top-[12px]
          h-[62px]
          w-[100px]
          rounded-[48px]
          border-l
          border-t
          bg-transparent

          ${blue ? "border-[#BFD8ED]" : "border-[#E8D4B9]"}
        `}
      />

      {/* NUMBER */}

      <div
        className={`
          absolute
          left-3
          top-0
          z-20
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-full

          ${blue ? "bg-[#E6F1FA]" : "bg-[#F6EDE1]"}
        `}
      >
        <span
          style={newYorkFont}
          className="
            text-[25px]
            font-light
            tracking-[-0.05em]
            text-[#0B2A52]
          "
        >
          {item.number}
        </span>
      </div>

      {/* ICON */}

      <div
        className={`
          absolute
          left-1/2
          top-[35px]
          z-20
          flex
          h-[58px]
          w-[58px]
          -translate-x-1/2
          items-center
          justify-center
          rounded-full
          transition-transform
          duration-500
          group-hover:-translate-y-1

          ${blue ? "bg-[#E5F0F9]" : "bg-[#F5EBDD]"}
        `}
      >
        <Icon
          size={25}
          strokeWidth={1.55}
          className="text-[#0B2A52]"
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[255px]
          flex-col
          items-center
          px-5
          pb-6
          pt-[102px]
          text-center
          sm:min-h-[270px]
          lg:min-h-[285px]
        "
      >
        <h3
          style={newYorkFont}
          className="
            text-[17px]
            font-light
            leading-[1.12]
            tracking-[-0.025em]
            text-[#0B2A52]
            sm:text-[18px]
            xl:text-[19px]
          "
        >
          {item.title}
        </h3>

        <p
          style={newYorkFont}
          className="
            mt-4
            max-w-[215px]
            text-[11px]
            leading-[1.55]
            text-[#0B2A52]/65
            sm:text-[12px]
          "
        >
          {item.description}
        </p>
      </div>

      {/* MOBILE CONNECTOR DOT */}

      <span
        className={`
          absolute
          -bottom-1
          left-1/2
          z-20
          h-2
          w-2
          -translate-x-1/2
          rounded-full
          lg:hidden

          ${blue ? "bg-[#286BA9]" : "bg-[#B88959]"}
        `}
      />
    </motion.article>
  );
}