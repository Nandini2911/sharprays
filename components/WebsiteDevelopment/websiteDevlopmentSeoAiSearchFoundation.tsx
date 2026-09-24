"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  Bot,
  Check,
  Code2,
  FileSearch,
  GitBranch,
  Link2,
  ListTree,
  MonitorSmartphone,
  Search,
  Sparkles,
  Tags,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type CoreFoundation = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type AiSignal = {
  title: string;
  icon: LucideIcon;
};

/* =========================================================
   CORE SEARCH FOUNDATIONS

   Reduced from nine large cards to five essentials.
   Supporting technical considerations are shown separately
   in one compact line below.
========================================================= */

const coreFoundations: CoreFoundation[] = [
  {
    number: "01",
    title: "Crawlable Content",
    description:
      "Important information should be accessible to search engines and users.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Clear Page Architecture",
    description:
      "Services, topics and resources should connect through a logical hierarchy.",
    icon: ListTree,
  },
  {
    number: "03",
    title: "Semantic Structure",
    description:
      "Headings and page elements should clearly describe the role of the content.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Internal Linking",
    description:
      "Relevant pages should connect naturally so related information is easier to discover.",
    icon: Link2,
  },
  {
    number: "05",
    title: "Metadata & Indexing",
    description:
      "Important pages need clear metadata and technical signals that support correct indexing.",
    icon: Tags,
  },
];

/* =========================================================
   AI / GENERATIVE DISCOVERY SIGNALS
========================================================= */

const aiSignals: AiSignal[] = [
  {
    title: "Clear information",
    icon: Search,
  },
  {
    title: "Useful content",
    icon: Check,
  },
  {
    title: "Logical relationships",
    icon: GitBranch,
  },
  {
    title: "Original expertise",
    icon: Sparkles,
  },
  {
    title: "Accurate business details",
    icon: Check,
  },
  {
    title: "Crawlable pages",
    icon: FileSearch,
  },
  {
    title: "Strong user experience",
    icon: MonitorSmartphone,
  },
];

/* =========================================================
   CORE FOUNDATION ITEM
========================================================= */

function CoreFoundationItem({
  item,
  index,
  reduceMotion,
}: {
  item: CoreFoundation;
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
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : index * 0.055,
        ease,
      }}
      className="
        group

        relative
        flex
        h-full
        flex-col

        border-b
        border-[#DCE5EC]

        py-5

        md:rounded-[18px]
        md:border
        md:border-[#D8E2E9]
        md:bg-white
        md:p-5
        md:shadow-[0_9px_28px_rgba(11,42,82,0.035)]

        transition-all
        duration-300

        md:hover:-translate-y-1
        md:hover:border-[#B8CEDD]
        md:hover:shadow-[0_16px_38px_rgba(11,42,82,0.07)]
      "
    >
      {/* TOP */}

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
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center

            rounded-[11px]

            bg-[#EEF5FA]

            text-[#0B2A52]

            md:h-10
            md:w-10
          "
        >
          <Icon size={16} strokeWidth={1.7} />
        </span>

       
      </div>

      {/* CONTENT */}

      <h3
        className="
          mt-4

          font-serif
          text-[1.08rem]
          font-normal
          leading-[1.18]
          tracking-[-0.025em]

          text-[#0B2A52]

          md:text-[1.12rem]
        "
      >
        {item.title}
      </h3>

      <p
        className="
          mt-2

          text-[0.73rem]
          leading-[1.55]

          text-[#61768A]
        "
      >
        {item.description}
      </p>

      {/* SMALL ACCENT */}

      <span
        className="
          mt-4
          block
          h-[2px]
          w-8

          rounded-full

          bg-[#B79A72]

          transition-all
          duration-300

          group-hover:w-14
        "
      />
    </motion.article>
  );
}

/* =========================================================
   AI SIGNAL PILL
========================================================= */

function CompactAiSignal({
  signal,
  index,
  reduceMotion,
}: {
  signal: AiSignal;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = signal.icon;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 10,
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
        duration: reduceMotion ? 0 : 0.4,
        delay: reduceMotion ? 0 : index * 0.035,
        ease,
      }}
      className="
        flex
        min-h-[42px]
        items-center
        gap-2.5

        rounded-full

        border
        border-[#D8E2E9]

        bg-white

        px-3
        py-2

        text-[#36536E]
      "
    >
      <span
        className="
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center

          rounded-full

          bg-[#EEF5FA]

          text-[#0B2A52]
        "
      >
        <Icon size={11} strokeWidth={1.8} />
      </span>

      <span
        className="
          text-[0.65rem]
          font-medium
          leading-[1.35]
        "
      >
        {signal.title}
      </span>
    </motion.div>
  );
}

/* =========================================================
   MAIN
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

        py-16

        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          VERY LIGHT BACKGROUND — DESKTOP ONLY
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20

          hidden

          sm:block
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[8%]

            h-[420px]
            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-[#F4F8FB]

            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-[260px]
            bottom-[5%]

            h-[460px]
            w-[460px]

            rounded-full

            bg-[#B79A72]/[0.035]

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

          px-4
          sm:px-6
          md:px-8
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
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            mx-auto
            max-w-[1000px]

            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
                <span
            className="
              h-px
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />
            <span
              className="
              
                text-[10px]
                uppercase
                tracking-[0.22em]

                text-[#B79A72]

            
              "
            >
              Built to Be Discovered
            </span>

            <span
            className="
              h-px
              w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />
          </div>

          <h2
            id="seo-ai-foundation-heading"
            className="
              mx-auto
              mt-5
              max-w-[1000px]

              text-[2.2rem]
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
            Search Visibility Starts With the{" "}
            <span
              className="
                font-serif
                font-normal
                italic

                text-[#B79A72]
              "
            >
              Website Foundation.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[760px]

              text-[0.88rem]
              leading-[1.68]

              text-[#5D7286]

              sm:text-[0.96rem]
            "
          >
            We build important search considerations into the website from the
            beginning, so future SEO is easier to strengthen — not harder to
            repair.
          </p>
        </motion.div>

        {/* =====================================================
            CORE SEARCH FOUNDATION
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
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[1220px]

            sm:mt-14
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]

                  text-[#A07850]
                "
              >
                Search Foundation
              </span>

              <h3
                className="
                  mt-2
                  max-w-[650px]

                  font-serif
                  text-[1.5rem]
                  font-normal
                  leading-[1.15]
                  tracking-[-0.03em]

                  text-[#0B2A52]

                  sm:text-[1.75rem]
                "
              >
                Five essentials that make a website{" "}
                <span className="italic text-[#B18458]">
                  easier to understand and discover.
                </span>
              </h3>
            </div>

          
          </div>

          {/* =================================================
              CORE ITEMS
          ================================================= */}

          <div
            className="
              mt-5

              grid
              grid-cols-1
              auto-rows-fr

              md:grid-cols-2
              md:gap-3

              lg:grid-cols-5
            "
          >
            {coreFoundations.map((item, index) => (
              <CoreFoundationItem
                key={item.number}
                item={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              SUPPORTING TECHNICAL POINTS
          ================================================= */}

          <div
            className="
              mt-5

              flex
              flex-wrap
              items-center
              justify-center
              gap-x-3
              gap-y-2

              border-y
              border-[#E0E7EC]

              py-4
            "
          >
            {[
              "Structured Data",
              "Image Optimization",
              "Canonical Signals",
              "Mobile Experience",
            ].map((item, index) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5

                    rounded-full

                    bg-[#B79A72]
                  "
                />

                <span
                  className="
                    text-[0.58rem]
                    font-semibold
                    uppercase
                    tracking-[0.12em]

                    text-[#60768B]
                  "
                >
                  {item}
                </span>

                {index !== 3 && (
                  <span
                    className="
                      hidden
                      h-px
                      w-4

                      bg-[#D5E0E7]

                      sm:block
                    "
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

       

        {/* =====================================================
            PRINCIPLE — TEXT ONLY
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
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[900px]

            text-center

            sm:mt-14
          "
        >
        

          <p
            className="
              mx-auto
              mt-5
              max-w-[820px]

              font-serif
              text-[1.3rem]
              font-normal
              leading-[1.32]
              tracking-[-0.025em]

              text-[#0B2A52]

              sm:text-[1.55rem]
              md:text-[1.8rem]
            "
          >
            Don&apos;t build a website for search engines.{" "}
            <span className="italic text-[#B18458]">
              Build one they can understand because people can understand it.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
