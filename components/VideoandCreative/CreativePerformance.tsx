"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Captions,
  Clock3,
  FileText,
  Image as ImageIcon,
  Layers3,
  Link2,
  Search,
  Tag,
  Text,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

const metrics = [
  {
    number: "01",
    title: "Descriptive Video Titles",
    description: "Make the subject immediately clear.",
    icon: FileText,
    tone: "gold",
  },
  {
    number: "02",
    title: "Useful Video Descriptions",
    description: "Explain what the viewer will learn or see.",
    icon: Text,
    tone: "blue",
  },
  {
    number: "03",
    title: "Captions & Transcripts",
    description: "Make spoken information available as text.",
    icon: Captions,
    tone: "gold",
  },
  {
    number: "04",
    title: "Supporting Page Copy",
    description:
      "Place valuable videos within pages that explain their context and purpose.",
    icon: Layers3,
    tone: "blue",
  },
  {
    number: "05",
    title: "Strong Thumbnails",
    description:
      "Represent the video clearly without relying on misleading clickbait.",
    icon: ImageIcon,
    tone: "gold",
  },
  {
    number: "06",
    title: "Video Structured Data",
    description:
      "Eligible website videos can use structured information such as title, description, thumbnail and publication details.",
    icon: Tag,
    tone: "blue",
  },
  {
    number: "07",
    title: "Key Moments",
    description:
      "Longer content can use meaningful chapters or timestamps where appropriate.",
    icon: Clock3,
    tone: "gold",
  },
  {
    number: "08",
    title: "Internal Connections",
    description:
      "Link related videos, services, case studies and supporting information logically.",
    icon: Link2,
    tone: "blue",
  },
  {
    number: "09",
    title: "AI Search",
    description:
      "Make important video content accessible, useful and supported by strong textual context.",
    icon: Search,
    tone: "gold",
  },
];

export default function VideoSearchAIDiscovery() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="video-search-ai-discovery"
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(125deg,#FFFFFF_0%,#F7FAFD_44%,#FFFFFF_72%,#FCF9F4_100%)]
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* LEFT LARGE BLUE FORM */}

        <div
          className="
            absolute
            -left-[410px]
            top-[210px]
            h-[980px]
            w-[980px]
            rounded-full
            border-[110px]
            border-[#E5EFF7]/60
          "
        />

        <div
          className="
            absolute
            -left-[310px]
            top-[300px]
            h-[770px]
            w-[770px]
            rounded-full
            bg-[#F6F9FC]/70
          "
        />

        {/* TOP RIGHT */}

        <div
          className="
            absolute
            -right-[350px]
            -top-[390px]
            hidden
            h-[820px]
            w-[820px]
            rounded-full
            border-[100px]
            border-[#E8F0F6]/60
            xl:block
          "
        />

        <div
          className="
            absolute
            -right-[255px]
            -top-[290px]
            hidden
            h-[620px]
            w-[620px]
            rounded-full
            border
            border-[#C6A77A]/25
            xl:block
          "
        />

        {/* RIGHT MIDDLE */}

        <div
          className="
            absolute
            -right-[310px]
            top-[36%]
            hidden
            h-[570px]
            w-[570px]
            rounded-full
            border-[75px]
            border-[#F5ECE1]/50
            xl:block
          "
        />

        {/* RIGHT BOTTOM */}

        <div
          className="
            absolute
            -bottom-[420px]
            -right-[320px]
            hidden
            h-[820px]
            w-[820px]
            rounded-full
            border-[95px]
            border-[#E3EDF5]/60
            xl:block
          "
        />

        {/* LEFT BOTTOM */}

        <div
          className="
            absolute
            -bottom-[260px]
            -left-[245px]
            h-[450px]
            w-[450px]
            rounded-full
            border-[50px]
            border-[#F2E8DB]/55
          "
        />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

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
        {/* =========================================================
            MAIN DESKTOP / LARGE LAYOUT
        ========================================================= */}

        <div
          className="
            relative
            grid
            gap-14
            xl:grid-cols-[0.47fr_0.53fr]
            xl:gap-10
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="relative">
            {/* LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -28,
              }}
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
              className="flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#B88959]" />

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#B88959]
                  sm:text-[10px]
                "
              >
                Video Discoverability
              </span>
            </motion.div>

            {/* ===================================================
                HEADING
            =================================================== */}

            <motion.h2
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 32,
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
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.06,
                ease,
              }}
              style={newYorkFont}
              className="
                mt-7
                max-w-[700px]
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
              Make Good Video
              <br />
              Easier to Find
              <br />

              <span className="text-[#B88959]">
                and Understand.
              </span>
            </motion.h2>

            {/* ===================================================
                INTRO
            =================================================== */}

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
                amount: 0.4,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : 0.12,
                ease,
              }}
              className="
                mt-7
                max-w-[520px]
              "
            >
              <p
                style={newYorkFont}
                className="
                  text-[14px]
                  leading-[1.65]
                  text-[#0B2A52]/75
                  sm:text-[16px]
                "
              >
                Video can create value beyond the feed when it is published
                with enough surrounding information for users and search
                systems to understand it.
              </p>

              <p
                style={newYorkFont}
                className="
                  mt-4
                  text-[14px]
                  leading-[1.65]
                  text-[#0B2A52]/75
                  sm:text-[16px]
                "
              >
                Where relevant, implementation may include:
              </p>
            </motion.div>

            {/* ===================================================
                EDITORIAL MICRO COPY
            =================================================== */}

            <motion.div
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
                amount: 0.4,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : 0.17,
                ease,
              }}
              className="
                absolute
                right-2
                top-[330px]
                hidden
                w-[140px]
                xl:block
              "
            >
              <span className="block h-px w-10 bg-[#B88959]" />

              <p
                style={newYorkFont}
                className="
                  mt-7
                  text-[8px]
                  uppercase
                  leading-[2.05]
                  tracking-[0.28em]
                  text-[#0B2A52]/45
                "
              >
                Titles
                <br />
                Context
                <br />
                Captions
                <br />
                Connections
              </p>

              <span
                className="
                  mt-7
                  block
                  h-px
                  w-10
                  bg-[#B88959]
                "
              />
            </motion.div>

            {/* ===================================================
                AI SEARCH PANEL
            =================================================== */}

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
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.16,
                ease,
              }}
              className="
                relative
                mt-9
                max-w-[500px]
                overflow-hidden
                rounded-[20px]
                border
                border-[#BED7E9]/60
                bg-white/50
                px-6
                py-6
                backdrop-blur-sm
                sm:grid
                sm:grid-cols-[74px_1fr]
                sm:gap-6
              "
            >
              <div
                className="
                  flex
                  h-[66px]
                  w-[66px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E7F1F9]
                "
              >
                <Search
                  size={27}
                  strokeWidth={1.5}
                  className="text-[#0B2A52]"
                />
              </div>

              <div className="mt-5 sm:mt-0">
                <h3
                  style={newYorkFont}
                  className="
                    text-[23px]
                    font-light
                    leading-[1]
                    tracking-[-0.035em]
                    text-[#0B2A52]
                  "
                >
                  AI Search.
                  <br />
                  Strong Context.
                </h3>

                <p
                  style={newYorkFont}
                  className="
                    mt-3
                    max-w-[320px]
                    text-[12px]
                    leading-[1.55]
                    text-[#0B2A52]/60
                  "
                >
                  There is no separate trick that guarantees inclusion in AI
                  Overviews or AI Mode. Our approach is to make important video
                  content accessible, useful and supported by strong textual
                  context.
                </p>
              </div>
            </motion.div>

            {/* ===================================================
                PRINCIPLE
            =================================================== */}

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
                duration: reduceMotion ? 0 : 0.8,
                ease,
              }}
              className="
                mt-9
                max-w-[560px]
              "
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#B88959]" />

                <span
                  style={newYorkFont}
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                    text-[#B88959]
                  "
                >
                  The Principle
                </span>
              </div>

              <h3
                style={newYorkFont}
                className="
                  mt-5
                  text-[30px]
                  font-light
                  leading-[1.04]
                  tracking-[-0.04em]
                  text-[#0B2A52]
                  sm:text-[36px]
                  lg:text-[39px]
                "
              >
                Create Something Useful.
                <br />

                <span className="text-[#B88959]">
                  Make Its Meaning Easy to Understand.
                </span>
              </h3>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT DISCOVERY ITEMS
          ===================================================== */}

          <div
            className="
              relative
              min-h-[830px]
              xl:pl-12
            "
          >
            {/* ===================================================
                TOP RIGHT MICROCOPY
            =================================================== */}

            <motion.div
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
                amount: 0.45,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease,
              }}
              className="
                absolute
                right-0
                top-0
                hidden
                border-l
                border-[#0B2A52]/20
                pl-5
                xl:block
              "
            >
              {["SEARCH", "CONTEXT", "STRUCTURE", "DISCOVERY"].map(
                (item) => (
                  <span
                    key={item}
                    style={newYorkFont}
                    className="
                      block
                      text-[7px]
                      uppercase
                      leading-[2]
                      tracking-[0.28em]
                      text-[#0B2A52]/45
                    "
                  >
                    {item}
                  </span>
                ),
              )}

              <span
                className="
                  mt-4
                  block
                  h-px
                  w-10
                  bg-[#B88959]
                "
              />
            </motion.div>

            {/* ===================================================
                CURVE — DESKTOP ONLY
            =================================================== */}

            <svg
              viewBox="0 0 520 840"
              fill="none"
              preserveAspectRatio="none"
              className="
                pointer-events-none
                absolute
                -left-[210px]
                top-0
                hidden
                h-[830px]
                w-[430px]
                xl:block
              "
            >
              {/* LARGE PALE BAND */}

              <path
                d="
                  M 10 0
                  C 275 75 330 220 330 410
                  C 330 605 260 745 35 840
                "
                stroke="#E3EEF6"
                strokeWidth="84"
                strokeOpacity="0.72"
                strokeLinecap="round"
              />

              {/* BLUE CURVE */}

              <motion.path
                d="
                  M 25 0
                  C 275 82 318 225 318 410
                  C 318 595 250 735 45 840
                "
                stroke="#78A6CF"
                strokeWidth="1"
                strokeOpacity="0.65"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.7,
                  ease,
                }}
              />

              {/* WARM CURVE */}

              <motion.path
                d="
                  M 47 4
                  C 260 92 300 235 300 410
                  C 300 580 235 720 68 828
                "
                stroke="#C6A77A"
                strokeWidth="0.8"
                strokeOpacity="0.42"
                initial={{
                  pathLength: 0,
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
                  delay: reduceMotion ? 0 : 0.1,
                  ease,
                }}
              />

              {/* DOTS */}

              {[
                [251, 64],
                [297, 152],
                [319, 240],
                [326, 329],
                [325, 417],
                [315, 506],
                [294, 594],
                [259, 682],
                [207, 772],
              ].map(([cx, cy], index) => (
                <circle
                  key={`${cx}-${cy}-${index}`}
                  cx={cx}
                  cy={cy}
                  r="4"
                  fill="#B88959"
                />
              ))}
            </svg>

            {/* ===================================================
                DISCOVERY LIST
            =================================================== */}

            <div
              className="
                relative
                z-10
                pt-2
                xl:ml-6
                xl:mr-[90px]
              "
            >
              {metrics.map((metric, index) => (
                <PerformanceMetric
                  key={metric.number}
                  metric={metric}
                  index={index}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            FOOTER
        ========================================================= */}

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
            amount: 0.5,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-[#0B2A52]/[0.06]
            pt-6
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
              Video Search & AI Discovery
            </span>

            <span className="h-px w-10 bg-[#B88959]" />
          </div>

          <div className="flex items-center gap-5">
            <span className="h-px w-10 bg-[#B88959]" />

            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.24em]
                text-[#0B2A52]/35
              "
            >
              Useful Video. Clearer Meaning.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DISCOVERY ITEM
========================================================= */

function PerformanceMetric({
  metric,
  index,
  reduceMotion,
}: {
  metric: (typeof metrics)[number];
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = metric.icon;
  const isGold = metric.tone === "gold";

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : 28,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.45,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion
          ? 0
          : Math.min(index * 0.045, 0.2),
        ease,
      }}
      className="
        group
        relative
        grid
        grid-cols-[62px_48px_1fr]
        items-start
        gap-3
        py-4
        sm:grid-cols-[68px_52px_1fr]
        sm:gap-4
      "
    >
      {/* ICON */}

      <div
        className={`
          relative
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-full
          border
          transition-all
          duration-300
          group-hover:-translate-y-1
          sm:h-[64px]
          sm:w-[64px]

          ${
            isGold
              ? "border-[#E8D5BC] bg-[#F7EEDF]"
              : "border-[#BCD7EB] bg-[#E8F2FA]"
          }
        `}
      >
        <span
          className={`
            absolute
            inset-[6px]
            rounded-full

            ${
              isGold
                ? "bg-[#FBF5ED]"
                : "bg-[#F4F9FC]"
            }
          `}
        />

        <Icon
          size={22}
          strokeWidth={1.5}
          className="
            relative
            z-10
            text-[#0B2A52]
          "
        />
      </div>

      {/* NUMBER */}

      <span
        style={newYorkFont}
        className="
          pt-1
          text-[27px]
          font-light
          leading-none
          tracking-[-0.055em]
          text-[#B88959]
          sm:text-[30px]
        "
      >
        {metric.number}
      </span>

      {/* CONTENT */}

      <div>
        <h3
          style={newYorkFont}
          className="
            text-[18px]
            font-light
            leading-[1.08]
            tracking-[-0.03em]
            text-[#0B2A52]
            sm:text-[20px]
            xl:text-[21px]
          "
        >
          {metric.title}
        </h3>

        <p
          style={newYorkFont}
          className="
            mt-1.5
            max-w-[340px]
            text-[11px]
            leading-[1.5]
            text-[#0B2A52]/60
            sm:text-[12px]
          "
        >
          {metric.description}
        </p>
      </div>

      {/* HOVER LINE */}

      <span
        className="
          absolute
          bottom-1
          left-[130px]
          h-px
          w-0
          bg-[#C6A77A]
          transition-all
          duration-500
          group-hover:w-16
          sm:left-[144px]
        "
      />
    </motion.article>
  );
}