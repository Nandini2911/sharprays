"use client";

import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Compass,
  Layers3,
  Route,
  Wrench,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TYPES
============================================================ */

type FrameworkItem = {
  number: string;
  step: string;
  title: string;
  description: string;
  focus: string[];
  icon: LucideIcon;
};

/* ============================================================
   DATA
============================================================ */

const framework: FrameworkItem[] = [
  {
    number: "01",
    step: "DISCOVER",
    title: "UNDERSTAND THE SEARCH LANDSCAPE",
    description:
      "We analyse your business, audience, website, competitors and current organic visibility.",
    focus: ["Business", "Audience", "Search Intent", "Competition"],
    icon: Compass,
  },
  {
    number: "02",
    step: "FIX",
    title: "STRENGTHEN THE FOUNDATION",
    description:
      "We identify technical and structural issues that can make your website harder to crawl, understand or use.",
    focus: ["Technical SEO", "Architecture", "Indexing", "Performance"],
    icon: Wrench,
  },
  {
    number: "03",
    step: "ALIGN",
    title: "CONNECT SEARCH INTENT WITH YOUR PAGES",
    description:
      "We map important topics and searches to the pages that should satisfy them.",
    focus: ["Keywords", "Intent", "Pages", "Internal Linking"],
    icon: Route,
  },
  {
    number: "04",
    step: "BUILD",
    title: "CREATE SOMETHING WORTH FINDING",
    description:
      "We improve existing pages and develop valuable new content where genuine search opportunities exist.",
    focus: ["Content", "Expertise", "Relevance", "User Value"],
    icon: Layers3,
  },
  {
    number: "05",
    step: "IMPROVE",
    title: "TURN DATA INTO BETTER DECISIONS",
    description:
      "We monitor organic performance and use real search data to guide what happens next.",
    focus: ["Visibility", "Traffic", "Conversions", "Opportunities"],
    icon: BarChart3,
  },
];

const stagePosition = [
  "lg:ml-0 lg:w-full",
  "lg:ml-[4%] lg:w-[96%]",
  "lg:ml-[8%] lg:w-[92%]",
  "lg:ml-[12%] lg:w-[88%]",
  "lg:ml-[16%] lg:w-[84%]",
];

/* ============================================================
   MAIN SECTION
============================================================ */

export default function SEOFrameworkSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-framework"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-[#F9FCFF]
        to-[#FBF8F2]
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
            -left-56
            top-[7%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#3976B6]/[0.06]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-52
            top-[48%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#C6A77A]/[0.11]
            blur-[155px]
          "
        />

        <div
          className="
            absolute
            bottom-[2%]
            left-1/2
            h-[420px]
            w-[760px]
            -translate-x-1/2
            rounded-full
            bg-[#3976B6]/[0.035]
            blur-[160px]
          "
        />
      </div>

      {/* BLUEPRINT GRID */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.014]
          [background-image:linear-gradient(#0B2A52_1px,transparent_1px),linear-gradient(90deg,#0B2A52_1px,transparent_1px)]
          [background-size:58px_58px]
        "
      />

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
            max-w-[960px]
            text-center
          "
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#C6A77A]" />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-[#C6A77A]
              "
            >
              THE SHARP RAYS APPROACH
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
            Search Visibility Built From the{" "}
            <span className="text-[#C6A77A]">
              Foundation Up.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[780px]
              text-[14px]
              leading-7
              text-[#0B2A52]/64
              sm:text-[15px]
            "
          >
            Our SEO process connects five disciplines instead of treating
            optimization as isolated tasks.
          </p>
        </motion.div>

        {/* =====================================================
            QUICK PROCESS VISUAL
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
            delay: 0.12,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[1080px]
          "
        >
          <div
            className="
              relative
              hidden
              items-center
              justify-between
              lg:flex
            "
          >
            {/* BASE TRACK */}

            <div
              className="
                absolute
                left-[7%]
                right-[7%]
                top-6
                h-px
                bg-[#0B2A52]/12
              "
            />

            {/* ANIMATED TRACK */}

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
                duration: 1.3,
                delay: 0.2,
                ease,
              }}
              className="
                absolute
                left-[7%]
                right-[7%]
                top-6
                h-[2px]
                origin-left
                bg-gradient-to-r
                from-[#3976B6]
                via-[#0B2A52]
                to-[#C6A77A]
              "
            />

            {framework.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.2 + index * 0.07,
                    ease,
                  }}
                  className="
                    relative
                    z-10
                    flex
                    w-[18%]
                    flex-col
                    items-center
                    text-center
                  "
                >
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border-[4px]
                      border-white
                      shadow-[0_8px_24px_rgba(11,42,82,0.10)]

                      ${
                        index === 4
                          ? "bg-[#C6A77A] text-white"
                          : index % 2 === 0
                            ? "bg-[#0B2A52] text-white"
                            : "bg-[#EAF4FC] text-[#3976B6]"
                      }
                    `}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.65}
                    />
                  </div>

                  <span
                    className="
                      mt-3
                      text-[9px]
                      font-bold
                      tracking-[0.16em]
                      text-[#C6A77A]
                    "
                  >
                    {item.number}
                  </span>

                  <span
                    className="
                      mt-1
                      text-[10px]
                      font-semibold
                      tracking-[0.14em]
                      text-[#0B2A52]
                    "
                  >
                    {item.step}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            FOUNDATION BLUEPRINT
        ====================================================== */}

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
            amount: 0.08,
          }}
          transition={{
            duration: 0.95,
            delay: 0.15,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-12
            max-w-[1220px]
            lg:mt-16
          "
        >
          {/* ===================================================
              BLUEPRINT TOP LABEL
          =================================================== */}

          <div
            className="
              mb-6
              flex
              flex-col
              gap-4
              border-b
              border-[#0B2A52]/15
              pb-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#C6A77A]
                  shadow-[0_0_12px_rgba(198,167,122,0.45)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.18em]
                  text-[#0B2A52]/52
                "
              >
                SEO FOUNDATION BUILD
              </span>
            </div>

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.15em]
                text-[#0B2A52]/35
              "
            >
              05 CONNECTED DISCIPLINES · ONE SEARCH SYSTEM
            </span>
          </div>

          {/* ===================================================
              STEPS
          =================================================== */}

          <div className="relative">
            {/* LEFT BLUEPRINT GUIDE */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-4
                left-0
                top-4
                hidden
                w-px
                bg-[#0B2A52]/10
                lg:block
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-4
                left-[7px]
                top-4
                hidden
                w-px
                bg-[#C6A77A]/25
                lg:block
              "
            />

            <div className="space-y-4">
              {framework.map((item, index) => (
                <FrameworkStage
                  key={item.number}
                  item={item}
                  index={index}
                  positionClass={stagePosition[index]}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </div>
          </div>

          {/* ===================================================
              FOUNDATION BASE
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: reduceMotion ? 1 : 0.85,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.85,
              ease,
            }}
            className="
              mt-7
              overflow-hidden
              rounded-[22px]
              border
              border-[#0B2A52]/14
              bg-gradient-to-r
              from-[#E8F3FC]
              via-white
              to-[#F5E5CA]
              shadow-[0_15px_40px_rgba(11,42,82,0.045)]
            "
          >
            <div
              className="
                grid
                gap-0
                sm:grid-cols-5
              "
            >
              {framework.map((item, index) => (
                <div
                  key={item.step}
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-3
                    py-4

                    ${
                      index < framework.length - 1
                        ? "border-b border-[#0B2A52]/10 sm:border-b-0 sm:border-r"
                        : ""
                    }
                  `}
                >
                  <span
                    className="
                      text-[9px]
                      font-bold
                      text-[#C6A77A]
                    "
                  >
                    {item.number}
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      tracking-[0.11em]
                      text-[#0B2A52]/65
                    "
                  >
                    {item.step}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="
                h-[3px]
                w-full
                bg-gradient-to-r
                from-[#3976B6]
                via-[#0B2A52]
                to-[#C6A77A]
              "
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="
            mx-auto
            mt-9
            flex
            max-w-[840px]
            items-center
            gap-4
            text-center
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
              text-[9px]
              font-semibold
              tracking-[0.17em]
              text-[#0B2A52]/42
            "
          >
            FOUNDATION → RELEVANCE → VISIBILITY → GROWTH
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
      </div>
    </section>
  );
}

/* ============================================================
   FRAMEWORK STAGE
============================================================ */

function FrameworkStage({
  item,
  index,
  positionClass,
  reduceMotion,
}: {
  item: FrameworkItem;
  index: number;
  positionClass: string;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : -24,
        y: reduceMotion ? 0 : 12,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.07, 0.25),
        ease,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-[#0B2A52]/14
        bg-white/80
        shadow-[0_14px_40px_rgba(11,42,82,0.045)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-[2px]
        hover:border-[#0B2A52]/25
        hover:shadow-[0_20px_50px_rgba(11,42,82,0.08)]

        ${positionClass}
      `}
    >
      {/* ======================================================
          THEME BACKGROUND
      ====================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          transition-opacity
          duration-500
          group-hover:opacity-100

          ${
            index % 2 === 0
              ? "bg-gradient-to-r from-[#EDF6FD]/90 via-white/60 to-white/20 opacity-70"
              : "bg-gradient-to-r from-[#FBF4E9]/80 via-white/60 to-[#EDF6FD]/45 opacity-70"
          }
        `}
      />

      {/* LARGE WATERMARK */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-2
          -top-9
          select-none
          text-[110px]
          font-semibold
          leading-none
          tracking-[-0.075em]
          text-[#0B2A52]/[0.025]
          transition-all
          duration-700
          group-hover:-translate-x-4
          group-hover:text-[#C6A77A]/[0.075]
          sm:text-[145px]
        "
      >
        {item.number}
      </span>

      {/* GOLD LEFT SIGNAL */}

      <motion.span
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
          duration: 0.65,
          delay: 0.15,
          ease,
        }}
        className="
          absolute
          bottom-[18%]
          left-0
          top-[18%]
          w-[3px]
          origin-center
          rounded-r-full
          bg-[#C6A77A]
        "
      />

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          grid
          gap-7
          px-6
          py-8
          sm:px-8
          lg:grid-cols-[92px_1fr_0.95fr]
          lg:items-center
          lg:gap-9
          lg:px-9
          lg:py-9
        "
      >
        {/* ====================================================
            STEP ID
        ==================================================== */}

        <div
          className="
            flex
            items-center
            gap-4
            lg:flex-col
            lg:items-start
          "
        >
          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.06,
                    rotate: index % 2 === 0 ? -3 : 3,
                  }
            }
            transition={{
              duration: 0.28,
            }}
            className={`
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              shadow-[0_9px_25px_rgba(11,42,82,0.12)]

              ${
                index === 4
                  ? "bg-[#C6A77A] text-white"
                  : index % 2 === 0
                    ? "bg-[#0B2A52] text-white"
                    : "bg-[#EAF4FC] text-[#3976B6]"
              }
            `}
          >
            <Icon
              size={17}
              strokeWidth={1.65}
            />
          </motion.div>

          <div>
            <span
              className="
                text-[10px]
                font-bold
                tracking-[0.16em]
                text-[#C6A77A]
              "
            >
              {item.number}
            </span>

            <p
              className="
                mt-1
                text-[9px]
                font-semibold
                tracking-[0.13em]
                text-[#0B2A52]/38
              "
            >
              STAGE
            </p>
          </div>
        </div>

        {/* ====================================================
            MAIN INFORMATION
        ==================================================== */}

        <div>
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[2px]
                w-8
                bg-[#C6A77A]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                tracking-[0.18em]
                text-[#3976B6]
              "
            >
              {item.step}
            </span>
          </div>

          <h3
            className="
              mt-3
              max-w-[520px]
              text-[19px]
              font-semibold
              leading-[1.28]
              tracking-[-0.02em]
              text-[#0B2A52]
              sm:text-[21px]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-3
              max-w-[560px]
              text-[13px]
              leading-6
              text-[#0B2A52]/63
              sm:text-[14px]
            "
          >
            {item.description}
          </p>
        </div>

        {/* ====================================================
            FOCUS AREA
        ==================================================== */}

        <div
          className="
            lg:border-l
            lg:border-[#0B2A52]/10
            lg:pl-8
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <span
              className="
                text-[9px]
                font-bold
                tracking-[0.16em]
                text-[#0B2A52]/50
              "
            >
              FOCUS
            </span>

            <span
              className="
                text-[9px]
                font-medium
                text-[#C6A77A]
              "
            >
              04 PRIORITIES
            </span>
          </div>

          <div
            className="
              mt-4
              grid
              grid-cols-2
              gap-2.5
            "
          >
            {item.focus.map((focusItem, focusIndex) => (
              <motion.div
                key={focusItem}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 6,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay:
                    Math.min(index * 0.04, 0.15) +
                    focusIndex * 0.035,
                }}
                className="
                  group/focus
                  flex
                  min-h-[42px]
                  items-center
                  gap-2.5
                  rounded-[12px]
                  border
                  border-[#0B2A52]/10
                  bg-white/65
                  px-3
                  py-2
                  transition-all
                  duration-300
                  hover:border-[#C6A77A]/45
                  hover:bg-[#F8F2E8]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#C6A77A]
                    transition-transform
                    duration-300
                    group-hover/focus:scale-150
                  "
                />

                <span
                  className="
                    text-[11px]
                    font-medium
                    leading-5
                    text-[#0B2A52]/64
                    transition-colors
                    duration-300
                    group-hover/focus:text-[#0B2A52]
                    sm:text-[12px]
                  "
                >
                  {focusItem}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================
          STEP DIRECTION
      ====================================================== */}

      <div
        className="
          absolute
          right-5
          top-5
          z-20
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          border-[#0B2A52]/10
          bg-white/70
          text-[#0B2A52]/40
          opacity-0
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:border-[#C6A77A]/40
          group-hover:text-[#C6A77A]
          group-hover:opacity-100
        "
      >
        <ArrowUpRight
          size={13}
          strokeWidth={1.7}
        />
      </div>
    </motion.article>
  );
}