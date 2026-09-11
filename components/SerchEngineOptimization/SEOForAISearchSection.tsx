"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Building2,
  Check,
  CircleDot,
  FileText,
  Globe2,
  Link2,
  MessageSquareText,
  Network,
  ScanText,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TYPES
============================================================ */

type SearchSurface = {
  number: string;
  label: string;
  title: string;
  icon: LucideIcon;
};

type Quality = {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

type FocusItem = {
  number: string;
  text: string;
  icon: LucideIcon;
};

/* ============================================================
   SEARCH SURFACES
============================================================ */

const searchSurfaces: SearchSurface[] = [
  {
    number: "01",
    label: "GOOGLE SEARCH",
    title: "Traditional Search",
    icon: Search,
  },
  {
    number: "02",
    label: "AI OVERVIEWS",
    title: "AI-Assisted Discovery",
    icon: Sparkles,
  },
  {
    number: "03",
    label: "GENERATIVE DISCOVERY",
    title: "Conversational Search",
    icon: Bot,
  },
];

/* ============================================================
   SOURCE QUALITIES
============================================================ */

const qualities: Quality[] = [
  {
    number: "01",
    title: "CLEAR",
    text: "Clear enough to understand.",
    icon: FileText,
  },
  {
    number: "02",
    title: "SPECIFIC",
    text: "Specific enough to be useful.",
    icon: CircleDot,
  },
  {
    number: "03",
    title: "STRUCTURED",
    text: "Structured enough to navigate.",
    icon: Network,
  },
  {
    number: "04",
    title: "ORIGINAL",
    text: "Original enough to add something meaningful.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "CREDIBLE",
    text: "Credible enough to trust.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "ACCESSIBLE",
    text: "Technically accessible enough to discover.",
    icon: Search,
  },
];

/* ============================================================
   AI SEARCH FOCUS
============================================================ */

const focusItems: FocusItem[] = [
  {
    number: "01",
    text: "Clear entity and business information",
    icon: Building2,
  },
  {
    number: "02",
    text: "Strong topical relationships",
    icon: Network,
  },
  {
    number: "03",
    text: "Direct answers to important questions",
    icon: MessageSquareText,
  },
  {
    number: "04",
    text: "Expert-led service content",
    icon: BadgeCheck,
  },
  {
    number: "05",
    text: "Original insights",
    icon: Sparkles,
  },
  {
    number: "06",
    text: "Useful supporting evidence",
    icon: ShieldCheck,
  },
  {
    number: "07",
    text: "Logical internal linking",
    icon: Link2,
  },
  {
    number: "08",
    text: "Crawlable text content",
    icon: ScanText,
  },
  {
    number: "09",
    text: "Structured business information",
    icon: FileText,
  },
  {
    number: "10",
    text: "Consistent brand information across the web",
    icon: Globe2,
  },
];

/* ============================================================
   MAIN SECTION
============================================================ */

export default function SEOForAISearchSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-ai-search"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-[#FAFCFF]
        to-[#FBF9F5]
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
            -left-52
            top-[7%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#3976B6]/[0.055]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-52
            top-[40%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#C6A77A]/[0.10]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[4%]
            left-1/2
            h-[420px]
            w-[720px]
            -translate-x-1/2
            rounded-full
            bg-[#3976B6]/[0.03]
            blur-[160px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

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
            max-w-[1000px]
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
              SEARCH IS EVOLVING
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
            SEO for Google Search, AI Overviews and{" "}
            <span className="text-[#C6A77A]">
              Generative Discovery.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[830px]
              text-[14px]
              leading-7
              text-[#0B2A52]/65
              sm:text-[15px]
            "
          >
            People increasingly discover information through traditional
            search results, AI Overviews, conversational search and other
            AI-assisted experiences.
          </p>

          {/* FORMAT STATEMENT */}

          <div
            className="
              mx-auto
              mt-7
              flex
              max-w-[650px]
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
                to-[#0B2A52]/15
              "
            />

            <div className="text-center">
              <p
                className="
                  text-[13px]
                  font-semibold
                  text-[#0B2A52]
                "
              >
                The format is changing.
              </p>

              <p
                className="
                  mt-1
                  text-[12px]
                  text-[#0B2A52]/55
                "
              >
                The fundamentals of being a useful source are not.
              </p>
            </div>

            <span
              className="
                h-px
                flex-1
                bg-gradient-to-l
                from-transparent
                to-[#0B2A52]/15
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            MODERN SEARCH LANDSCAPE
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
            amount: 0.14,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[1180px]
            sm:mt-20
          "
        >
          {/* TOP BAR */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#0B2A52]/15
              pb-5
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#C6A77A]
                  shadow-[0_0_12px_rgba(198,167,122,0.5)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.19em]
                  text-[#0B2A52]/52
                "
              >
                MODERN SEARCH LANDSCAPE
              </span>
            </div>

            <span
              className="
                hidden
                text-[9px]
                font-semibold
                tracking-[0.15em]
                text-[#0B2A52]/35
                sm:block
              "
            >
              DIFFERENT SURFACES · ONE STRONG SOURCE
            </span>
          </div>

          {/* SEARCH SURFACES */}

          <div className="grid md:grid-cols-3">
            {searchSurfaces.map((item, index) => (
              <SearchSurfaceBlock
                key={item.number}
                item={item}
                index={index}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>

          {/* CONNECTOR */}

          <div
            className="
              relative
              mx-auto
              hidden
              h-[92px]
              max-w-[850px]
              md:block
            "
          >
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
                duration: 0.6,
                delay: 0.12,
                ease,
              }}
              className="
                absolute
                left-[16.66%]
                top-0
                h-[40px]
                w-px
                origin-top
                bg-[#3976B6]/35
              "
            />

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
                duration: 0.6,
                delay: 0.18,
                ease,
              }}
              className="
                absolute
                left-1/2
                top-0
                h-[65px]
                w-px
                -translate-x-1/2
                origin-top
                bg-[#C6A77A]/70
              "
            />

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
                duration: 0.6,
                delay: 0.24,
                ease,
              }}
              className="
                absolute
                right-[16.66%]
                top-0
                h-[40px]
                w-px
                origin-top
                bg-[#0B2A52]/30
              "
            />

            <motion.span
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
                duration: 0.9,
                delay: 0.28,
                ease,
              }}
              className="
                absolute
                left-[16.66%]
                right-[16.66%]
                top-[39px]
                h-px
                origin-center
                bg-gradient-to-r
                from-[#3976B6]/35
                via-[#C6A77A]/65
                to-[#0B2A52]/30
              "
            />
          </div>

          {/* ONE IMAGE SOURCE VISUAL */}

          <WebsiteSourceVisual
            reduceMotion={!!reduceMotion}
          />
        </motion.div>

        {/* =====================================================
            SIX SOURCE QUALITIES
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
            amount: 0.12,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            mt-24
            max-w-[1180px]
            lg:mt-28
          "
        >
          {/* HEADER */}

          <div
            className="
              grid
              gap-8
              border-b
              border-[#0B2A52]/15
              pb-8
              lg:grid-cols-[1fr_0.85fr]
              lg:items-end
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#C6A77A]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.22em]
                    text-[#C6A77A]
                  "
                >
                  WHAT MAKES A SOURCE USEFUL?
                </span>
              </div>

              <h3
                className="
                  mt-4
                  max-w-[700px]
                  text-[29px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.032em]
                  text-[#0B2A52]
                  sm:text-[34px]
                "
              >
                Six qualities that make content easier to understand,
                trust and discover.
              </h3>
            </div>

            <p
              className="
                max-w-[500px]
                text-[14px]
                leading-7
                text-[#0B2A52]/62
                lg:justify-self-end
              "
            >
              Our approach focuses on creating content that is clear,
              specific, structured, original, credible and technically
              accessible.
            </p>
          </div>

          {/* ===================================================
              DESKTOP QUALITY PATH
          =================================================== */}

          <div
            className="
              relative
              mt-16
              hidden
              lg:block
            "
          >
            {/* SOURCE LABEL */}

            <motion.div
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
                duration: 0.7,
                ease,
              }}
              className="
                mx-auto
                mb-10
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                border
                border-[#0B2A52]/12
                bg-white
                px-5
                py-3
                shadow-[0_10px_30px_rgba(11,42,82,0.05)]
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
                  bg-[#0B2A52]
                  text-white
                "
              >
                <Globe2
                  size={16}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.17em]
                    text-[#C6A77A]
                  "
                >
                  ONE STRONG SOURCE
                </p>

                <p
                  className="
                    mt-1
                    text-[13px]
                    font-medium
                    text-[#0B2A52]
                  "
                >
                  Six qualities working together
                </p>
              </div>
            </motion.div>

            {/* BASE LINE */}

            <div
              className="
                absolute
                left-[7%]
                right-[7%]
                top-[111px]
                h-px
                bg-[#0B2A52]/12
              "
            />

            {/* ACTIVE LINE */}

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
                duration: 1.4,
                delay: 0.15,
                ease,
              }}
              className="
                absolute
                left-[7%]
                right-[7%]
                top-[111px]
                h-[2px]
                origin-left
                bg-gradient-to-r
                from-[#3976B6]
                via-[#0B2A52]
                to-[#C6A77A]
              "
            />

            {/* QUALITY POINTS */}

            <div
              className="
                relative
                grid
                grid-cols-6
                gap-5
              "
            >
              {qualities.map((item, index) => (
                <QualityPoint
                  key={item.number}
                  item={item}
                  index={index}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </div>

            {/* OUTCOME */}

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
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease,
              }}
              className="
                mx-auto
                mt-14
                grid
                max-w-[900px]
                grid-cols-3
                overflow-hidden
                rounded-[22px]
                border
                border-[#0B2A52]/14
                bg-gradient-to-r
                from-[#EAF4FC]
                via-white
                to-[#F6E9D5]
                shadow-[0_16px_45px_rgba(11,42,82,0.05)]
              "
            >
              {[
                ["01", "UNDERSTAND"],
                ["02", "TRUST"],
                ["03", "DISCOVER"],
              ].map(([number, label], index) => (
                <div
                  key={label}
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-5
                    py-5

                    ${
                      index < 2
                        ? "border-r border-[#0B2A52]/10"
                        : ""
                    }
                  `}
                >
                  <span
                    className="
                      text-[10px]
                      font-bold
                      text-[#C6A77A]
                    "
                  >
                    {number}
                  </span>

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      tracking-[0.16em]
                      text-[#0B2A52]/65
                    "
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* MOBILE QUALITY PATH */}

          <div
            className="
              mt-10
              lg:hidden
            "
          >
            <div
              className="
                relative
                border-l
                border-[#C6A77A]/40
                pl-7
              "
            >
              {qualities.map((item, index) => (
                <MobileQuality
                  key={item.number}
                  item={item}
                  index={index}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            EXPLANATION
        ====================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.85,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[1060px]
            overflow-hidden
            rounded-[28px]
            border
            border-[#0B2A52]/15
            bg-gradient-to-r
            from-[#E8F3FC]
            via-white
            to-[#F5E7D1]
            px-7
            py-8
            shadow-[0_18px_50px_rgba(11,42,82,0.055)]
            sm:px-10
          "
        >
          <div
            className="
              grid
              gap-6
              sm:grid-cols-[auto_1fr]
              sm:items-center
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#0B2A52]
                text-white
                shadow-[0_9px_25px_rgba(11,42,82,0.15)]
              "
            >
              <Sparkles
                size={17}
                strokeWidth={1.6}
              />
            </div>

            <p
              className="
                text-[13px]
                leading-7
                text-[#0B2A52]/68
                sm:text-[14px]
              "
            >
              Instead of creating separate content purely for algorithms or
              AI systems, we strengthen the underlying website so its
              expertise, services and information are easier to understand
              across modern search experiences.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            TEN AI SEARCH SIGNALS
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            mt-24
            max-w-[1180px]
            lg:mt-28
          "
        >
          {/* HEADER */}

          <div
            className="
              grid
              gap-8
              border-b
              border-[#0B2A52]/15
              pb-9
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#C6A77A]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.22em]
                    text-[#C6A77A]
                  "
                >
                  OUR FOCUS IN AI SEARCH
                </span>
              </div>

              <h3
                className="
                  mt-4
                  max-w-[760px]
                  text-[29px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.032em]
                  text-[#0B2A52]
                  sm:text-[34px]
                "
              >
                Ten connected signals behind modern search visibility.
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C6A77A]/50
                  bg-[#F8F1E6]
                "
              >
                <span
                  className="
                    text-[20px]
                    font-medium
                    text-[#0B2A52]
                  "
                >
                  10
                </span>
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.16em]
                    text-[#0B2A52]
                  "
                >
                  SEARCH READINESS
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    text-[#0B2A52]/45
                  "
                >
                  Connected website signals
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================
              DESKTOP SIGNAL MAP
          =================================================== */}

          <div
            className="
              relative
              mx-auto
              mt-14
              hidden
              max-w-[1100px]
              lg:block
            "
          >
            {/* CENTRAL TRACK */}

            <div
              className="
                absolute
                bottom-[30px]
                left-1/2
                top-[30px]
                w-px
                -translate-x-1/2
                bg-[#0B2A52]/12
              "
            />

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
                duration: 1.5,
                ease,
              }}
              className="
                absolute
                bottom-[30px]
                left-1/2
                top-[30px]
                w-[2px]
                -translate-x-1/2
                origin-top
                bg-gradient-to-b
                from-[#3976B6]
                via-[#0B2A52]
                to-[#C6A77A]
              "
            />

            {/* WEBSITE CORE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.92,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="
                relative
                z-20
                mx-auto
                mb-8
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                border
                border-[#0B2A52]/14
                bg-white
                px-6
                py-4
                shadow-[0_12px_35px_rgba(11,42,82,0.07)]
              "
            >
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
                "
              >
                <Globe2
                  size={17}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.18em]
                    text-[#C6A77A]
                  "
                >
                  YOUR WEBSITE
                </p>

                <p
                  className="
                    mt-1
                    text-[15px]
                    font-medium
                    text-[#0B2A52]
                  "
                >
                  The connected source
                </p>
              </div>
            </motion.div>

            {/* SIGNAL PAIRS */}

            <div className="relative z-10">
              {Array.from({ length: 5 }).map((_, rowIndex) => {
                const left = focusItems[rowIndex * 2];
                const right = focusItems[rowIndex * 2 + 1];

                return (
                  <SignalPair
                    key={rowIndex}
                    left={left}
                    right={right}
                    rowIndex={rowIndex}
                    reduceMotion={!!reduceMotion}
                  />
                );
              })}
            </div>

            {/* RESULT */}

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
              }}
              transition={{
                duration: 0.75,
                delay: 0.3,
                ease,
              }}
              className="
                relative
                z-20
                mx-auto
                mt-8
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                border
                border-[#C6A77A]/40
                bg-[#FCF7EF]
                px-6
                py-4
              "
            >
              <Sparkles
                size={16}
                strokeWidth={1.6}
                className="text-[#C6A77A]"
              />

              <span
                className="
                  text-[12px]
                  font-semibold
                  tracking-[0.08em]
                  text-[#0B2A52]
                "
              >
                CLEAR · CONNECTED · DISCOVERABLE
              </span>
            </motion.div>
          </div>

          {/* MOBILE SIGNAL MAP */}

          <div className="mt-10 lg:hidden">
            <div
              className="
                mb-7
                flex
                items-center
                gap-4
                rounded-[20px]
                border
                border-[#0B2A52]/14
                bg-gradient-to-r
                from-[#EAF4FC]
                to-[#F8EFDF]
                p-5
              "
            >
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
                "
              >
                <Globe2 size={17} />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.16em]
                    text-[#C6A77A]
                  "
                >
                  YOUR WEBSITE
                </p>

                <p
                  className="
                    mt-1
                    text-[14px]
                    font-medium
                  "
                >
                  One connected signal system.
                </p>
              </div>
            </div>

            <div
              className="
                relative
                border-l
                border-[#C6A77A]/40
                pl-6
              "
            >
              {focusItems.map((item, index) => (
                <MobileSignal
                  key={item.number}
                  item={item}
                  index={index}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL PRINCIPLE
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
            amount: 0.22,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-24
            max-w-[1120px]
            lg:mt-28
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-[#0B2A52]/15
              bg-gradient-to-r
              from-[#E7F2FB]
              via-white
              to-[#F3E0BE]
              shadow-[0_28px_75px_rgba(11,42,82,0.08)]
            "
          >
            {/* DECOR */}

            <div
              className="
                pointer-events-none
                absolute
                -left-32
                top-1/2
                h-[340px]
                w-[340px]
                -translate-y-1/2
                rounded-full
                border
                border-[#3976B6]/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-28
                top-1/2
                h-[320px]
                w-[320px]
                -translate-y-1/2
                rounded-full
                border
                border-[#C6A77A]/15
              "
            />

            <div
              className="
                relative
                z-10
                grid
                lg:grid-cols-[1fr_110px_1fr]
              "
            >
              {/* ALGORITHM-FIRST */}

              <div
                className="
                  flex
                  min-h-[300px]
                  flex-col
                  items-center
                  justify-center
                  px-7
                  py-12
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#3976B6]/20
                    bg-white/80
                    text-[#3976B6]
                  "
                >
                  <Bot
                    size={18}
                    strokeWidth={1.6}
                  />
                </div>

                <p
                  className="
                    mt-5
                    text-[10px]
                    font-semibold
                    tracking-[0.18em]
                    text-[#0B2A52]/42
                  "
                >
                  ALGORITHM-FIRST
                </p>

                <h3
                  className="
                    mt-4
                    text-[28px]
                    font-medium
                    leading-[1.14]
                    tracking-[-0.03em]
                    text-[#0B2A52]
                    sm:text-[33px]
                  "
                >
                  Don&apos;t Write
                  <br />
                  for AI.
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[310px]
                    text-[13px]
                    leading-6
                    text-[#0B2A52]/55
                  "
                >
                  Avoid building content around individual algorithms or
                  changing interfaces.
                </p>
              </div>

              {/* TRANSITION */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  border-y
                  border-[#0B2A52]/10
                  py-7
                  lg:border-x
                  lg:border-y-0
                  lg:py-0
                "
              >
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          x: [0, 6, 0],
                        }
                  }
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                    shadow-[0_9px_25px_rgba(11,42,82,0.16)]
                  "
                >
                  <ArrowRight
                    size={18}
                    strokeWidth={1.7}
                    className="rotate-90 lg:rotate-0"
                  />
                </motion.div>
              </div>

              {/* SOURCE-FIRST */}

              <div
                className="
                  flex
                  min-h-[300px]
                  flex-col
                  items-center
                  justify-center
                  px-7
                  py-12
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C6A77A]
                    text-white
                    shadow-[0_10px_28px_rgba(198,167,122,0.28)]
                  "
                >
                  <Globe2
                    size={18}
                    strokeWidth={1.6}
                  />
                </div>

                <p
                  className="
                    mt-5
                    text-[10px]
                    font-semibold
                    tracking-[0.18em]
                    text-[#C6A77A]
                  "
                >
                  SOURCE-FIRST
                </p>

                <h3
                  className="
                    mt-4
                    text-[28px]
                    font-medium
                    leading-[1.14]
                    tracking-[-0.03em]
                    text-[#C6A77A]
                    sm:text-[33px]
                  "
                >
                  Become a Source
                  <br />
                  Worth Using.
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[320px]
                    text-[13px]
                    leading-6
                    text-[#0B2A52]/58
                  "
                >
                  Build useful information that people, search engines and
                  modern AI experiences can understand.
                </p>
              </div>
            </div>

            {/* FOOTER */}

            <div
              className="
                relative
                z-10
                flex
                flex-col
                gap-4
                border-t
                border-[#0B2A52]/10
                bg-white/45
                px-7
                py-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                  "
                >
                  <Check
                    size={13}
                    strokeWidth={1.8}
                  />
                </div>

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.20em]
                    text-[#C6A77A]
                  "
                >
                  THE PRINCIPLE
                </span>
              </div>

              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.15em]
                  text-[#0B2A52]/40
                "
              >
                CLEAR · USEFUL · CREDIBLE · DISCOVERABLE
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   SEARCH SURFACE BLOCK
============================================================ */

function SearchSurfaceBlock({
  item,
  index,
  reduceMotion,
}: {
  item: SearchSurface;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

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
        amount: 0.4,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease,
      }}
      className={`
        group
        relative
        py-9

        ${
          index < 2
            ? "border-b border-[#0B2A52]/10 md:border-b-0 md:border-r"
            : ""
        }

        ${
          index === 0
            ? "md:pr-8"
            : index === 1
              ? "md:px-8"
              : "md:pl-8"
        }
      `}
    >
      <div className="flex items-center gap-4">
        <div
          className={`
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            text-white
            shadow-[0_8px_24px_rgba(11,42,82,0.12)]

            ${
              index === 1
                ? "bg-[#C6A77A]"
                : index === 2
                  ? "bg-[#0B2A52]"
                  : "bg-[#3976B6]"
            }
          `}
        >
          <Icon
            size={17}
            strokeWidth={1.65}
          />
        </div>

        <div>
          <p
            className="
              text-[10px]
              font-bold
              tracking-[0.15em]
              text-[#C6A77A]
            "
          >
            {item.number} · {item.label}
          </p>

          <p
            className="
              mt-2
              text-[16px]
              font-medium
              text-[#0B2A52]
              sm:text-[17px]
            "
          >
            {item.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   WEBSITE SOURCE VISUAL
   ONE IMAGE ONLY
============================================================ */

function WebsiteSourceVisual({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 18,
        scale: reduceMotion ? 1 : 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.85,
        delay: 0.2,
        ease,
      }}
      className="
        relative
        mx-auto
        max-w-[940px]
      "
    >
      <div
        className="
          overflow-hidden
          rounded-[32px]
          border
          border-[#0B2A52]/15
          bg-white/85
          shadow-[0_26px_70px_rgba(11,42,82,0.075)]
        "
      >
        {/* ===================================================
            TOP BAR
        =================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#0B2A52]/10
            bg-gradient-to-r
            from-[#EAF4FC]
            via-white
            to-[#F8EFDF]
            px-6
            py-4
          "
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#3976B6]" />
            <span className="h-2 w-2 rounded-full bg-[#C6A77A]" />
            <span className="h-2 w-2 rounded-full bg-[#0B2A52]/20" />
          </div>

          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.16em]
              text-[#0B2A52]/45
            "
          >
            YOUR WEBSITE · THE SOURCE
          </span>
        </div>

        {/* ===================================================
            BODY
        =================================================== */}

        <div
          className="
            grid
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* LEFT CONTENT */}

          <div
            className="
              flex
              flex-col
              justify-center
              px-7
              py-11
              sm:px-10
              lg:px-12
              lg:py-14
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#0B2A52]
                text-white
                shadow-[0_10px_28px_rgba(11,42,82,0.16)]
              "
            >
              <Globe2
                size={18}
                strokeWidth={1.6}
              />
            </div>

            <p
              className="
                mt-6
                text-[10px]
                font-bold
                tracking-[0.18em]
                text-[#C6A77A]
              "
            >
              ONE STRONG SOURCE
            </p>

            <h3
              className="
                mt-3
                text-[27px]
                font-medium
                leading-[1.15]
                tracking-[-0.03em]
                text-[#0B2A52]
                sm:text-[30px]
              "
            >
              Useful information,
              <br />
              wherever search happens.
            </h3>

            <p
              className="
                mt-5
                max-w-[350px]
                text-[13px]
                leading-7
                text-[#0B2A52]/62
                sm:text-[14px]
              "
            >
              Strengthen the website first, then make that information easier
              to discover across Google Search, AI Overviews and generative
              search experiences.
            </p>

            <div
              className="
                mt-7
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
                  text-[9px]
                  font-semibold
                  tracking-[0.14em]
                  text-[#0B2A52]/42
                "
              >
                ONE WEBSITE · MULTIPLE DISCOVERY SURFACES
              </span>
            </div>
          </div>

          {/* =================================================
              SINGLE IMAGE
          ================================================= */}

          <div
            className="
              relative
              flex
              min-h-[380px]
              items-center
              justify-center
              overflow-hidden
              border-t
              border-[#0B2A52]/10
              bg-gradient-to-br
              from-[#EEF6FD]
              via-white
              to-[#F8EEDC]
              p-7
              sm:p-9
              lg:border-l
              lg:border-t-0
            "
          >
            {/* BLUE GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                left-[5%]
                top-[12%]
                h-[220px]
                w-[220px]
                rounded-full
                bg-[#3976B6]/10
                blur-[70px]
              "
            />

            {/* GOLD GLOW */}

            <div
              className="
                pointer-events-none
                bottom-[5%]
                right-[2%]
                absolute
                h-[200px]
                w-[200px]
                rounded-full
                bg-[#C6A77A]/15
                blur-[70px]
              "
            />

            {/* BACKGROUND CIRCLE */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#0B2A52]/[0.06]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[220px]
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#C6A77A]/12
              "
            />

            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 18,
                scale: reduceMotion ? 1 : 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
                delay: 0.18,
                ease,
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                    }
              }
              className="
                relative
                z-10
                w-full
                max-w-[470px]
              "
            >
              <Image
                src="/services/seo/ai-overview.png"
                alt="SEO for Google Search, AI Overviews and generative discovery"
                width={800}
                height={620}
                className="
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_24px_38px_rgba(11,42,82,0.14)]
                "
              />
            </motion.div>

            {/* IMAGE LABEL */}

            <div
              className="
                absolute
                bottom-5
                left-1/2
                z-20
                -translate-x-1/2
                whitespace-nowrap
                rounded-full
                border
                border-[#0B2A52]/10
                bg-white/80
                px-4
                py-2
                backdrop-blur-lg
              "
            >
              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.13em]
                  text-[#0B2A52]/48
                "
              >
                SEARCH · AI OVERVIEWS · GENERATIVE DISCOVERY
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM MESSAGE */}

        <div
          className="
            border-t
            border-[#0B2A52]/10
            bg-gradient-to-r
            from-[#EAF4FC]
            via-white
            to-[#F8EEDC]
            px-6
            py-5
            text-center
          "
        >
          <p
            className="
              text-[12px]
              font-medium
              leading-6
              text-[#0B2A52]/68
              sm:text-[13px]
            "
          >
            The format is changing. The fundamentals of being a useful source
            are not.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   QUALITY POINT
============================================================ */

function QualityPoint({
  item,
  index,
  reduceMotion,
}: {
  item: Quality;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
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
        duration: 0.6,
        delay: index * 0.07,
        ease,
      }}
      className="
        group
        relative
        pt-[72px]
        text-center
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-[46px]
          z-10
          flex
          h-[54px]
          w-[54px]
          -translate-x-1/2
          items-center
          justify-center
          rounded-full
          border-[4px]
          border-white
          bg-[#EAF4FC]
          text-[#3976B6]
          shadow-[0_0_0_1px_rgba(11,42,82,0.11),0_8px_22px_rgba(11,42,82,0.08)]
          transition-all
          duration-300
          group-hover:bg-[#0B2A52]
          group-hover:text-white
        "
      >
        <Icon
          size={17}
          strokeWidth={1.6}
        />
      </div>

      <span
        className="
          mt-9
          block
          text-[10px]
          font-bold
          tracking-[0.16em]
          text-[#C6A77A]
        "
      >
        {item.number}
      </span>

      <h4
        className="
          mt-2
          text-[12px]
          font-bold
          tracking-[0.13em]
          text-[#0B2A52]
        "
      >
        {item.title}
      </h4>

      <p
        className="
          mx-auto
          mt-3
          max-w-[170px]
          text-[13px]
          leading-6
          text-[#0B2A52]/65
        "
      >
        {item.text}
      </p>
    </motion.div>
  );
}

/* ============================================================
   MOBILE QUALITY
============================================================ */

function MobileQuality({
  item,
  index,
  reduceMotion,
}: {
  item: Quality;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : 14,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease,
      }}
      className="
        relative
        flex
        gap-4
        border-b
        border-[#0B2A52]/10
        py-5
      "
    >
      <span
        className="
          absolute
          -left-[31px]
          top-[31px]
          h-2
          w-2
          rounded-full
          bg-[#C6A77A]
        "
      />

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#EAF4FC]
          text-[#3976B6]
        "
      >
        <Icon
          size={15}
          strokeWidth={1.6}
        />
      </div>

      <div>
        <div className="flex items-center gap-3">
          <span
            className="
              text-[10px]
              font-bold
              text-[#C6A77A]
            "
          >
            {item.number}
          </span>

          <h4
            className="
              text-[11px]
              font-bold
              tracking-[0.13em]
              text-[#0B2A52]
            "
          >
            {item.title}
          </h4>
        </div>

        <p
          className="
            mt-2
            text-[14px]
            leading-6
            text-[#0B2A52]/65
          "
        >
          {item.text}
        </p>
      </div>
    </motion.div>
  );
}

/* ============================================================
   SIGNAL PAIR
============================================================ */

function SignalPair({
  left,
  right,
  rowIndex,
  reduceMotion,
}: {
  left: FocusItem;
  right: FocusItem;
  rowIndex: number;
  reduceMotion: boolean;
}) {
  return (
    <div
      className="
        relative
        grid
        grid-cols-[1fr_100px_1fr]
        items-center
        py-5
      "
    >
      <SignalNode
        item={left}
        side="left"
        delay={rowIndex * 0.07}
        reduceMotion={reduceMotion}
      />

      <div
        className="
          relative
          flex
          items-center
          justify-center
        "
      >
        <span
          className="
            absolute
            left-0
            right-1/2
            h-px
            bg-[#0B2A52]/12
          "
        />

        <span
          className="
            absolute
            left-1/2
            right-0
            h-px
            bg-[#0B2A52]/12
          "
        />

        <motion.span
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
            delay: rowIndex * 0.07 + 0.14,
            ease,
          }}
          className="
            relative
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border-[5px]
            border-white
            bg-[#C6A77A]
            shadow-[0_0_0_1px_rgba(11,42,82,0.12)]
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-white
            "
          />
        </motion.span>
      </div>

      <SignalNode
        item={right}
        side="right"
        delay={rowIndex * 0.07 + 0.04}
        reduceMotion={reduceMotion}
      />
    </div>
  );
}

/* ============================================================
   SIGNAL NODE
============================================================ */

function SignalNode({
  item,
  side,
  delay,
  reduceMotion,
}: {
  item: FocusItem;
  side: "left" | "right";
  delay: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x:
          reduceMotion
            ? 0
            : side === "left"
              ? -18
              : 18,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease,
      }}
      className={`
        group
        flex
        min-h-[84px]
        items-center
        gap-4
        border-b
        border-[#0B2A52]/10
        py-4

        ${
          side === "left"
            ? "justify-end pr-5 text-right"
            : "pl-5"
        }
      `}
    >
      {side === "right" && (
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
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
            size={15}
            strokeWidth={1.6}
          />
        </div>
      )}

      <div>
        <span
          className="
            text-[10px]
            font-bold
            text-[#C6A77A]
          "
        >
          {item.number}
        </span>

        <p
          className="
            mt-1
            text-[14px]
            font-medium
            leading-6
            text-[#0B2A52]/68
            transition-colors
            duration-300
            group-hover:text-[#0B2A52]
          "
        >
          {item.text}
        </p>
      </div>

      {side === "left" && (
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
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
            size={15}
            strokeWidth={1.6}
          />
        </div>
      )}
    </motion.div>
  );
}

/* ============================================================
   MOBILE SIGNAL
============================================================ */

function MobileSignal({
  item,
  index,
  reduceMotion,
}: {
  item: FocusItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : 12,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.03, 0.18),
        ease,
      }}
      className="
        relative
        flex
        gap-4
        border-b
        border-[#0B2A52]/10
        py-5
      "
    >
      <span
        className="
          absolute
          -left-[27px]
          top-[31px]
          h-2
          w-2
          rounded-full
          bg-[#C6A77A]
        "
      />

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#EAF4FC]
          text-[#3976B6]
        "
      >
        <Icon
          size={15}
          strokeWidth={1.6}
        />
      </div>

      <div>
        <span
          className="
            text-[10px]
            font-bold
            text-[#C6A77A]
          "
        >
          {item.number}
        </span>

        <p
          className="
            mt-1
            text-[14px]
            font-medium
            leading-6
            text-[#0B2A52]/68
          "
        >
          {item.text}
        </p>
      </div>
    </motion.div>
  );
}