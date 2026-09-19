"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  FileSearch,
  GitBranch,
  Image as ImageIcon,
  Layers3,
  Link2,
  ListTree,
  MonitorSmartphone,
  Network,
  Search,
  Sparkles,
  Tags,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type SearchFoundation = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type AiFoundation = {
  number: string;
  title: string;
  icon: LucideIcon;
};

/* =========================================================
   SEARCH FOUNDATION DATA
========================================================= */

const searchFoundations: SearchFoundation[] = [
  {
    number: "01",
    title: "Crawlable Content",
    description:
      "Important information should be available in a form search engines can access and understand.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Logical Page Architecture",
    description:
      "Related services, topics and resources should connect through a clear website hierarchy.",
    icon: ListTree,
  },
  {
    number: "03",
    title: "Semantic Structure",
    description:
      "Headings and page elements should describe the role of the content instead of being used only for visual styling.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Internal Linking",
    description:
      "Relevant pages should connect naturally so visitors and search engines can discover related information.",
    icon: Link2,
  },
  {
    number: "05",
    title: "Metadata",
    description:
      "Important pages need descriptive titles and supporting search information aligned with their actual purpose.",
    icon: Tags,
  },
  {
    number: "06",
    title: "Image Optimization",
    description:
      "Images should support the experience without creating unnecessary performance problems, with descriptive alternative text where appropriate.",
    icon: ImageIcon,
  },
  {
    number: "07",
    title: "Structured Data",
    description:
      "Relevant structured information can be added where it accurately represents the business and page content.",
    icon: GitBranch,
  },
  {
    number: "08",
    title: "Canonical & Indexing Considerations",
    description:
      "Technical signals should help search engines understand which pages belong in the index and which URLs represent the preferred version.",
    icon: Network,
  },
  {
    number: "09",
    title: "Mobile Experience",
    description:
      "Important information and functionality should remain accessible across devices.",
    icon: MonitorSmartphone,
  },
];

/* =========================================================
   AI SEARCH DATA
========================================================= */

const aiFoundations: AiFoundation[] = [
  {
    number: "01",
    title: "Clear information",
    icon: Search,
  },
  {
    number: "02",
    title: "Useful content",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Logical relationships",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Original expertise",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Accurate business details",
    icon: Check,
  },
  {
    number: "06",
    title: "Crawlable pages",
    icon: FileSearch,
  },
  {
    number: "07",
    title: "Strong user experience",
    icon: MonitorSmartphone,
  },
];

/* =========================================================
   SEARCH FOUNDATION CARD
========================================================= */

function FoundationCard({
  item,
  index,
  reduceMotion,
}: {
  item: SearchFoundation;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;
  const gold = index % 3 === 1;

  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.045,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
            }
      }
      className="
        group
        relative
        flex
        min-h-[210px]
        flex-col
        overflow-hidden

        rounded-[22px]

        border
        border-[#DDE4EA]

        bg-white

        p-5

        shadow-[0_10px_28px_rgba(11,42,82,0.03)]

        transition-all
        duration-300

        hover:border-[#BFCBD5]
        hover:shadow-[0_18px_42px_rgba(11,42,82,0.07)]

        sm:p-6
      "
    >
      {/* TOP ACCENT */}

      <motion.span
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: reduceMotion ? 0 : index * 0.04,
          ease,
        }}
        style={{
          transformOrigin: "left",
        }}
        className={`
          absolute
          left-0
          top-0

          h-[3px]
          w-full

          ${gold ? "bg-[#B79A72]" : "bg-[#0B2A52]"}
        `}
      />

      {/* GHOST NUMBER */}

      <span
        className="
          pointer-events-none

          absolute
          -right-1
          -top-3

          font-serif
          text-[5.8rem]
          leading-none
          tracking-[-0.08em]

          text-[#0B2A52]/[0.025]
        "
      >
        {item.number}
      </span>

      {/* TOP */}

      <div className="relative z-10 flex items-center justify-between gap-4">
        <motion.span
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.08,
                  rotate: -5,
                }
          }
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center

            rounded-[13px]

            ${
              gold
                ? "bg-[#F7EFE5] text-[#A97C52]"
                : "bg-[#EDF4FA] text-[#0B2A52]"
            }
          `}
        >
          <Icon size={18} strokeWidth={1.7} />
        </motion.span>

        <span
          className="
            text-[0.5rem]
            font-semibold
            uppercase
            tracking-[0.16em]

            text-[#8A98A5]
          "
        >
          {item.number} / 09
        </span>
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mt-5">
        <span
          className={`
            text-[0.51rem]
            font-semibold
            uppercase
            tracking-[0.18em]

            ${gold ? "text-[#A07850]" : "text-[#577795]"}
          `}
        >
          Search Foundation
        </span>

        <h3
          className="
            mt-2

            font-serif
            text-[1.25rem]
            font-normal
            leading-[1.15]
            tracking-[-0.025em]

            text-[#0B2A52]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-3

            text-[0.78rem]
            leading-[1.65]

            text-[#61768A]
          "
        >
          {item.description}
        </p>
      </div>

      {/* BOTTOM INDICATOR */}

      <div
        className="
          relative
          z-10

          mt-auto
          pt-5
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
            className={`
              h-[6px]
              w-[6px]

              rounded-full

              ${gold ? "bg-[#B79A72]" : "bg-[#0B2A52]"}
            `}
          />

          <span
            className="
              h-px
              flex-1

              bg-[#E0E5E9]
            "
          />

          <motion.span
            initial={{
              x: 0,
            }}
            whileHover={{
              x: 3,
            }}
            className="
              text-[#8FA0AE]
            "
          >
            <ArrowRight size={12} />
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   AI SIGNAL
========================================================= */

function AiSignal({
  item,
  index,
  reduceMotion,
}: {
  item: AiFoundation;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 14,
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
        duration: 0.42,
        delay: reduceMotion ? 0 : index * 0.045,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              x: 4,
            }
      }
      className="
        group

        flex
        min-h-[58px]
        items-center
        gap-3

        rounded-[14px]

        border
        border-[#DCE3E9]

        bg-white/80

        px-3.5
        py-3

        transition-all
        duration-300

        hover:border-[#C5D0D9]
        hover:bg-white
        hover:shadow-[0_8px_22px_rgba(11,42,82,0.05)]
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

          bg-[#EDF4FA]

          text-[#0B2A52]
        "
      >
        <Icon size={15} strokeWidth={1.7} />
      </span>

      <div className="min-w-0 flex-1">
        <span
          className="
            block

            text-[0.46rem]
            font-semibold
            uppercase
            tracking-[0.15em]

            text-[#A07850]
          "
        >
          Signal {item.number}
        </span>

        <span
          className="
            mt-1
            block

            text-[0.76rem]
            font-medium
            leading-[1.35]

            text-[#34516A]
          "
        >
          {item.title}
        </span>
      </div>

      <span
        className="
          h-2
          w-2
          shrink-0

          rounded-full

          bg-[#B79A72]

          opacity-40

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SeoAiSearchFoundationSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="seo-ai-foundation"
      aria-labelledby="seo-ai-foundation-heading"
      className="
        relative
        isolate
        overflow-hidden

        bg-white

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            -left-[280px]
            top-[180px]

            h-[560px]
            w-[560px]

            rounded-full

            bg-[#EEF4F9]

            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -right-[260px]
            top-[44%]

            h-[520px]
            w-[520px]

            rounded-full

            bg-[#B79A72]/[0.045]

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            left-1/2

            h-[300px]
            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-[#F6F8FA]

            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1380px]

          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

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
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            max-w-[1040px]
            text-center
          "
        >
          {/* EYEBROW */}

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#B79A72]" />

            <span
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.29em]

                text-[#92745C]
              "
            >
              Built to Be Discovered
            </span>

            <span className="h-px w-10 bg-[#B79A72]" />
          </div>

          {/* HEADING */}

          <h2
            id="seo-ai-foundation-heading"
            className="
              mx-auto
              mt-6
              max-w-[1050px]

              text-[2.3rem]
              font-medium
              leading-[1.04]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Search Visibility Starts Before the{" "}
            <span
              className="
                font-serif
                font-normal
                italic

                text-[#B18458]
              "
            >
              SEO Campaign Begins.
            </span>
          </h2>

          {/* COPY */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[820px]

              text-[0.92rem]
              leading-[1.72]

              text-[#586F84]

              sm:text-[0.98rem]
            "
          >
            Website development can either create a strong foundation for
            organic visibility or make future SEO unnecessarily difficult.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-[790px]

              text-[0.88rem]
              leading-[1.7]

              text-[#6C7F91]

              sm:text-[0.94rem]
            "
          >
            We build important search considerations into the website structure
            from the beginning.
          </p>
        </motion.div>

        {/* =====================================================
            SEARCH FOUNDATION INTRO
        ===================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.62,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[1180px]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <span
                  className="
                    text-[0.52rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]

                    text-[#A07850]
                  "
                >
                  Search Foundation
                </span>
              </div>

              <h3
                className="
                  mt-3
                  max-w-[680px]

                  font-serif
                  text-[1.65rem]
                  leading-[1.15]
                  tracking-[-0.03em]

                  text-[#0B2A52]

                  sm:text-[1.9rem]
                "
              >
                Nine foundations working as{" "}
                <span className="italic text-[#B18458]">
                  one search-ready system.
                </span>
              </h3>
            </div>

            {/* SMALL FLOW */}

            <div
              className="
                flex
                items-center
                gap-3

                rounded-full

                border
                border-[#DDE4E9]

                bg-white

                px-4
                py-2.5

                shadow-[0_5px_18px_rgba(11,42,82,0.03)]
              "
            >
              <Search
                size={14}
                strokeWidth={1.7}
                className="text-[#0B2A52]"
              />

              <span
                className="
                  text-[0.48rem]
                  font-semibold
                  uppercase
                  tracking-[0.14em]

                  text-[#6C8092]
                "
              >
                Structure
              </span>

              <ArrowRight
                size={10}
                className="text-[#B79A72]"
              />

              <span
                className="
                  text-[0.48rem]
                  font-semibold
                  uppercase
                  tracking-[0.14em]

                  text-[#6C8092]
                "
              >
                Understand
              </span>

              <ArrowRight
                size={10}
                className="text-[#B79A72]"
              />

              <span
                className="
                  text-[0.48rem]
                  font-semibold
                  uppercase
                  tracking-[0.14em]

                  text-[#6C8092]
                "
              >
                Discover
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SEARCH FOUNDATION GRID
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-8
            max-w-[1180px]

            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >
          {searchFoundations.map((item, index) => (
            <FoundationCard
              key={item.number}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            CONNECTION STRIP
        ===================================================== */}

        <motion.div
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
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
            ease,
          }}
          className="
            mx-auto
            mt-10
            max-w-[1080px]
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-4

              border-y
              border-[#DCE3E8]

              py-6

              sm:flex-row
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                border
                border-[#D9E1E7]

                bg-white

                text-[#B18458]

                shadow-[0_5px_16px_rgba(11,42,82,0.04)]
              "
            >
              <Sparkles size={15} />
            </div>

            <p
              className="
                text-center

                font-serif
                text-[1rem]
                leading-[1.5]

                text-[#526B82]
              "
            >
              The same clean technical foundation also supports{" "}
              <span className="italic text-[#B18458]">
                modern search and generative discovery.
              </span>
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            AI SEARCH
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[1180px]
          "
        >
          <div
            className="
              relative

              overflow-hidden

              rounded-[28px]

              border
              border-[#DCE3E8]

              bg-[#F8FAFC]

              p-6

              sm:p-8
              lg:p-10
            "
          >
            {/* DECORATIVE GHOST WORD */}

            <span
              className="
                pointer-events-none

                absolute
                -right-4
                -top-8

                font-serif
                text-[7rem]
                leading-none
                tracking-[-0.08em]

                text-[#0B2A52]/[0.018]

                sm:text-[11rem]
              "
            >
              DISCOVER
            </span>

            {/* NAVY / GOLD CORNER DETAILS */}

            <div
              className="
                pointer-events-none

                absolute
                left-0
                top-0

                h-[3px]
                w-[35%]

                bg-[#0B2A52]
              "
            />

            <div
              className="
                pointer-events-none

                absolute
                right-0
                top-0

                h-[3px]
                w-[16%]

                bg-[#B79A72]
              "
            />

            <div
              className="
                relative
                z-10

                grid
                gap-9

                lg:grid-cols-[0.9fr_1.1fr]
                lg:gap-12
              "
            >
              {/* =================================================
                  LEFT
              ================================================= */}

              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center

                      rounded-[13px]

                      bg-[#0B2A52]

                      text-white
                    "
                  >
                    <Bot size={18} strokeWidth={1.7} />
                  </span>

                  <div>
                    <span
                      className="
                        block

                        text-[0.55rem]
                        font-semibold
                        uppercase
                        tracking-[0.2em]

                        text-[#A07850]
                      "
                    >
                      AI Search & Generative Discovery
                    </span>

                    <span
                      className="
                        mt-1
                        block

                        text-[0.45rem]
                        font-semibold
                        uppercase
                        tracking-[0.14em]

                        text-[#8A99A5]
                      "
                    >
                      Modern Search Foundation
                    </span>
                  </div>
                </div>

                <h3
                  className="
                    mt-6

                    max-w-[520px]

                    font-serif
                    text-[1.8rem]
                    leading-[1.1]
                    tracking-[-0.035em]

                    text-[#0B2A52]

                    sm:text-[2rem]
                  "
                >
                  Clear websites are easier to{" "}
                  <span className="italic text-[#B18458]">
                    discover, interpret and use.
                  </span>
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[550px]

                    text-[0.85rem]
                    leading-[1.72]

                    text-[#61768A]
                  "
                >
                  Modern search experiences may answer more complex questions
                  using information gathered from multiple sources.
                </p>

                <p
                  className="
                    mt-3
                    max-w-[550px]

                    text-[0.85rem]
                    leading-[1.72]

                    text-[#61768A]
                  "
                >
                  There is no separate shortcut that guarantees AI visibility.
                </p>

                {/* KEY MESSAGE */}

                <div
                  className="
                    mt-6

                    rounded-r-[14px]

                    border-l-[3px]
                    border-[#B79A72]

                    bg-white/70

                    px-4
                    py-4
                  "
                >
                  <p
                    className="
                      max-w-[520px]

                      font-serif
                      text-[0.92rem]
                      leading-[1.62]

                      text-[#0B2A52]
                    "
                  >
                    The foundation remains a website that is clear, useful,
                    connected and technically accessible.
                  </p>
                </div>
              </div>

              {/* =================================================
                  RIGHT
              ================================================= */}

              <div
                className="
                  border-t
                  border-[#DCE3E8]

                  pt-7

                  lg:border-l
                  lg:border-t-0
                  lg:pl-10
                  lg:pt-0
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
                  <div>
                    <span
                      className="
                        text-[0.52rem]
                        font-semibold
                        uppercase
                        tracking-[0.18em]

                        text-[#A07850]
                      "
                    >
                      A Strong Foundation Has
                    </span>

                    <p
                      className="
                        mt-2

                        font-serif
                        text-[1.15rem]

                        text-[#0B2A52]
                      "
                    >
                      Seven signals that make information easier to use.
                    </p>
                  </div>

                  <span
                    className="
                      rounded-full

                      border
                      border-[#D8E0E6]

                      bg-white

                      px-3
                      py-1.5

                      text-[0.48rem]
                      font-semibold
                      uppercase
                      tracking-[0.13em]

                      text-[#7B8D9D]
                    "
                  >
                    07 Signals
                  </span>
                </div>

                {/* SIGNALS */}

                <div
                  className="
                    mt-5

                    grid
                    grid-cols-1
                    gap-2.5

                    sm:grid-cols-2
                  "
                >
                  {aiFoundations.map((item, index) => (
                    <AiSignal
                      key={item.number}
                      item={item}
                      index={index}
                      reduceMotion={reduceMotion}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                DISCOVERY FLOW
            ================================================= */}

            <div
              className="
                relative
                z-10

                mt-9

                border-t
                border-[#DCE3E8]

                pt-6
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-4

                  lg:flex-row
                  lg:items-center
                "
              >
                <span
                  className="
                    shrink-0

                    text-[0.5rem]
                    font-semibold
                    uppercase
                    tracking-[0.17em]

                    text-[#718394]
                  "
                >
                  Clear path to discovery
                </span>

                <div
                  className="
                    flex
                    flex-1
                    flex-wrap
                    items-center
                    gap-2
                  "
                >
                  {[
                    "Understandable content",
                    "Connected information",
                    "Technical access",
                    "Useful source",
                  ].map((text, index) => (
                    <div
                      key={text}
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className={`
                          rounded-full

                          px-3
                          py-1.5

                          text-[0.49rem]
                          font-semibold
                          uppercase
                          tracking-[0.1em]

                          ${
                            index % 2 === 0
                              ? "bg-[#EAF2F8] text-[#0B2A52]"
                              : "bg-[#F6EEE4] text-[#9B754F]"
                          }
                        `}
                      >
                        {text}
                      </span>

                      {index !== 3 && (
                        <ArrowRight
                          size={10}
                          className="
                            hidden
                            text-[#B79A72]

                            sm:block
                          "
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

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
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.68,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[1120px]
          "
        >
          <div
            className="
              relative
              overflow-hidden

              rounded-[24px]

              border
              border-[#DED4C8]

              bg-[#FCFAF7]

              px-6
              py-10

              text-center

              sm:px-10
              sm:py-12
            "
          >
            {/* GHOST */}

            <span
              className="
                pointer-events-none

                absolute
                left-1/2
                top-1/2

                -translate-x-1/2
                -translate-y-1/2

                whitespace-nowrap

                font-serif
                text-[5rem]
                leading-none
                tracking-[-0.08em]

                text-[#0B2A52]/[0.018]

                sm:text-[8rem]
              "
            >
              UNDERSTAND
            </span>

            {/* CORNER LINES */}

            <div
              className="
                pointer-events-none

                absolute
                left-0
                top-0

                h-[3px]
                w-[28%]

                bg-[#0B2A52]
              "
            />

            <div
              className="
                pointer-events-none

                absolute
                right-0
                top-0

                h-[3px]
                w-[18%]

                bg-[#B79A72]
              "
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-[#B79A72]" />

                <span
                  className="
                    text-[0.53rem]
                    font-semibold
                    uppercase
                    tracking-[0.24em]

                    text-[#92745C]
                  "
                >
                  Our Principle
                </span>

                <span className="h-px w-9 bg-[#B79A72]" />
              </div>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-[700px]

                  font-serif
                  text-[1.25rem]
                  leading-[1.3]

                  text-[#718293]

                  sm:text-[1.45rem]
                "
              >
                Don&apos;t build a website for search engines.
              </p>

              {/* CONNECTOR */}

              <div
                className="
                  mx-auto
                  my-5

                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#D9E1E7]

                  bg-white

                  text-[#B18458]

                  shadow-[0_5px_16px_rgba(11,42,82,0.04)]
                "
              >
                <ArrowRight
                  size={14}
                  className="rotate-90"
                />
              </div>

              <h3
                className="
                  mx-auto
                  max-w-[920px]

                  font-serif
                  text-[1.85rem]
                  leading-[1.08]
                  tracking-[-0.04em]

                  text-[#0B2A52]

                  sm:text-[2.2rem]
                  md:text-[2.45rem]
                  lg:text-[2.7rem]
                "
              >
                Build a website they can understand{" "}
                <span
                  className="
                    italic
                    text-[#B18458]
                  "
                >
                  because people can understand it.
                </span>
              </h3>

              {/* FINAL SIGNAL */}

              <div
                className="
                  mx-auto
                  mt-8

                  flex
                  w-fit
                  items-center
                  gap-2
                "
              >
                <span className="h-[3px] w-12 rounded-full bg-[#0B2A52]" />
                <span className="h-2 w-2 rounded-full bg-[#B79A72]" />
                <span className="h-[3px] w-12 rounded-full bg-[#D9C6AA]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}