"use client";

import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Check,
  FileCheck2,
  FileSearch,
  FileText,
  Link2,
  MapPin,
  Search,
  SearchCheck,
  Settings2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TYPES
============================================================ */

type Deliverable = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

/* ============================================================
   DATA
============================================================ */

const deliverables: Deliverable[] = [
  {
    number: "01",
    title: "SEO Audit",
    description:
      "A review of technical, structural, content and search performance issues affecting your website.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Keyword & Search Intent Strategy",
    description:
      "Research and mapping of relevant commercial and informational search opportunities.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Technical SEO Recommendations",
    description:
      "Prioritized improvements relating to crawlability, indexing, website structure and technical search performance.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "On-Page Optimization",
    description:
      "Optimization of important pages including titles, headings, content structure, internal links and search intent alignment.",
    icon: FileText,
  },
  {
    number: "05",
    title: "SEO Content Strategy",
    description:
      "A prioritized roadmap for improving existing pages and creating useful new content around relevant opportunities.",
    icon: FileCheck2,
  },
  {
    number: "06",
    title: "Internal Linking",
    description:
      "Strategic links between related pages to strengthen navigation, topic relationships and page discovery.",
    icon: Link2,
  },
  {
    number: "07",
    title: "Local SEO",
    description:
      "Location-specific optimization where local search visibility is relevant to your business.",
    icon: MapPin,
  },
  {
    number: "08",
    title: "SEO Performance Reporting",
    description:
      "Reporting focused on meaningful organic visibility, traffic, search behaviour and conversion opportunities.",
    icon: BarChart3,
  },
];

const finalPlan = [
  "Website scope",
  "Priority pages",
  "Deliverables",
  "Responsibilities",
  "Timelines",
  "Reporting",
  "Commercial terms",
];

/* ============================================================
   MAIN SECTION
============================================================ */

export default function SEODeliverablesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-deliverables"
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
            -left-60
            top-[12%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#3976B6]/[0.05]
            blur-[155px]
          "
        />

        <div
          className="
            absolute
            -right-56
            top-[54%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#C6A77A]/[0.09]
            blur-[155px]
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
              SEO SERVICES &amp; DELIVERABLES
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
            Clear Priorities.{" "}
            <span className="text-[#C6A77A]">
              Clear SEO Deliverables.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[790px]
              text-[14px]
              leading-7
              text-[#0B2A52]/64
              sm:text-[15px]
            "
          >
            Your SEO proposal defines the exact work included based on your
            website and objectives.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-[790px]
              text-[14px]
              leading-7
              text-[#0B2A52]/64
              sm:text-[15px]
            "
          >
            Depending on your selected scope, your SEO service may include:
          </p>
        </motion.div>

        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-20
            flex
            max-w-[1200px]
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
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#C6A77A]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.17em]
                  text-[#0B2A52]/45
                "
              >
                YOUR SEO SCOPE
              </span>
            </div>

            <p
              className="
                mt-3
                text-[18px]
                font-medium
                tracking-[-0.02em]
                text-[#0B2A52]
                sm:text-[20px]
              "
            >
              Eight areas. One connected SEO direction.
            </p>
          </div>

          <div className="flex items-end gap-3">
            <span
              className="
                text-[36px]
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
                text-[10px]
                font-semibold
                leading-4
                tracking-[0.13em]
                text-[#0B2A52]/38
              "
            >
              POSSIBLE
              <br />
              DELIVERABLES
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            PREMIUM EDITORIAL INDEX
        ====================================================== */}

        <div
          className="
            mx-auto
            max-w-[1200px]
          "
        >
          {deliverables.map((item, index) => (
            <DeliverableRow
              key={item.number}
              item={item}
              index={index}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            CONNECTED SCOPE STATEMENT
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
            border-[#0B2A52]/13
            bg-gradient-to-r
            from-[#EAF4FC]
            via-white
            to-[#F6E9D5]
            px-7
            py-8
            shadow-[0_18px_50px_rgba(11,42,82,0.045)]
            sm:px-10
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-0
              h-[2px]
              w-[40%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#C6A77A]
              to-transparent
            "
          />

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
                items-center
                justify-center
                rounded-full
                bg-[#0B2A52]
                text-white
                shadow-[0_9px_25px_rgba(11,42,82,0.14)]
              "
            >
              <FileCheck2
                size={17}
                strokeWidth={1.65}
              />
            </div>

            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.18em]
                  text-[#C6A77A]
                "
              >
                ONE CONNECTED SEO SCOPE
              </p>

              <p
                className="
                  mt-2
                  max-w-[820px]
                  text-[14px]
                  leading-7
                  text-[#0B2A52]/65
                "
              >
                Your selected deliverables work together around the pages,
                search opportunities and business priorities that matter most.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL PLAN
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            mt-24
            max-w-[1180px]
          "
        >
          <div
            className="
              grid
              gap-7
              border-b
              border-[#0B2A52]/15
              pb-7
              lg:grid-cols-[1fr_0.75fr]
              lg:items-end
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C6A77A]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.2em]
                    text-[#C6A77A]
                  "
                >
                  YOUR FINAL SEO PLAN CONFIRMS
                </span>
              </div>

              <h3
                className="
                  mt-4
                  text-[29px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#0B2A52]
                  sm:text-[33px]
                "
              >
                Everything is defined before execution begins.
              </h3>
            </div>

            <p
              className="
                max-w-[470px]
                text-[14px]
                leading-7
                text-[#0B2A52]/60
                lg:justify-self-end
              "
            >
              Scope, priorities, responsibilities and reporting stay clear
              from the beginning.
            </p>
          </div>

          {/* PLAN FLOW */}

          <div
            className="
              relative
              mt-12
              hidden
              lg:block
            "
          >
            <div
              className="
                absolute
                left-[6%]
                right-[6%]
                top-[28px]
                h-px
                bg-[#0B2A52]/12
              "
            />

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
                duration: 1.2,
                ease,
              }}
              className="
                absolute
                left-[6%]
                right-[6%]
                top-[28px]
                h-[2px]
                origin-left
                bg-gradient-to-r
                from-[#3976B6]
                via-[#0B2A52]
                to-[#C6A77A]
              "
            />

            <div className="grid grid-cols-7 gap-3">
              {finalPlan.map((item, index) => (
                <PlanStep
                  key={item}
                  item={item}
                  index={index}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </div>
          </div>

          {/* MOBILE */}

          <div
            className="
              mt-8
              grid
              gap-3
              sm:grid-cols-2
              lg:hidden
            "
          >
            {finalPlan.map((item, index) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-4
                  border-b
                  border-[#0B2A52]/10
                  py-4
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF4FC]
                    text-[#3976B6]
                  "
                >
                  <Check
                    size={13}
                    strokeWidth={1.8}
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
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <p
                    className="
                      mt-1
                      text-[13px]
                      font-medium
                      text-[#0B2A52]/70
                    "
                  >
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM
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
            duration: 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-12
            flex
            max-w-[850px]
            items-center
            gap-4
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
            SCOPE · PRIORITY · EXECUTION · REPORTING
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
   DELIVERABLE ROW
============================================================ */

function DeliverableRow({
  item,
  index,
  reduceMotion,
}: {
  item: Deliverable;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
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
        amount: 0.18,
      }}
      transition={{
        duration: 0.72,
        delay: Math.min(index * 0.045, 0.22),
        ease,
      }}
      className="
        group
        relative
        border-b
        border-[#0B2A52]/12
      "
    >
      <div
        className="
          grid
          gap-7
          py-10
          sm:py-12
          lg:grid-cols-[75px_1fr_410px]
          lg:items-center
          lg:gap-12
          lg:py-14
        "
      >
        {/* ====================================================
            NUMBER
        ==================================================== */}

        <div
          className="
            flex
            items-center
            gap-4
            lg:block
          "
        >
          <span
            className="
              text-[31px]
              font-medium
              leading-none
              tracking-[-0.05em]
              text-[#C6A77A]
            "
          >
            {item.number}
          </span>

          <span
            className="
              hidden
              mt-4
              h-8
              w-px
              bg-[#0B2A52]/15
              lg:block
            "
          />
        </div>

        {/* ====================================================
            COPY
        ==================================================== */}

        <div>
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                flex
                h-11
                w-11
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
                size={16}
                strokeWidth={1.65}
              />
            </div>

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.17em]
                text-[#0B2A52]/38
              "
            >
              SEO DELIVERABLE
            </span>
          </div>

          <h3
            className="
              mt-5
              max-w-[560px]
              text-[22px]
              font-medium
              leading-[1.22]
              tracking-[-0.027em]
              text-[#0B2A52]
              sm:text-[24px]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-4
              max-w-[590px]
              text-[14px]
              leading-7
              text-[#0B2A52]/62
            "
          >
            {item.description}
          </p>

          <div
            className="
              mt-5
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
                transition-all
                duration-500
                group-hover:w-14
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.14em]
                text-[#0B2A52]/35
              "
            >
              INCLUDED BY SCOPE
            </span>
          </div>
        </div>

        {/* ====================================================
            VISUAL
        ==================================================== */}

        <DeliverableVisual
          index={index}
          reduceMotion={reduceMotion}
        />
      </div>

      {/* HOVER WASH */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-[#EAF4FC]/40
          via-transparent
          to-[#F7ECD9]/35
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </motion.article>
  );
}

/* ============================================================
   UNIQUE VISUALS
============================================================ */

function DeliverableVisual({
  index,
  reduceMotion,
}: {
  index: number;
  reduceMotion: boolean;
}) {
  const base =
    "relative overflow-hidden rounded-[24px] border border-[#0B2A52]/10 bg-gradient-to-br from-[#F3F8FC] via-white to-[#FBF4E8]";

  /* ==========================================================
     01 — SEO AUDIT
  ========================================================== */

  if (index === 0) {
    const lines = [88, 71, 82, 60];

    return (
      <div className={`${base} min-h-[180px] p-6`}>
        <div className="flex items-center justify-between">
          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.14em]
              text-[#0B2A52]/45
            "
          >
            SITE REVIEW
          </span>

          <FileSearch
            size={17}
            className="text-[#3976B6]"
          />
        </div>

        <div
          className="
            mt-6
            grid
            grid-cols-[1fr_90px]
            gap-5
            items-center
          "
        >
          <div className="space-y-4">
            {lines.map((width, rowIndex) => (
              <div
                key={rowIndex}
                className="flex items-center gap-3"
              >
                <Check
                  size={12}
                  className="shrink-0 text-[#C6A77A]"
                />

                <div
                  className="
                    h-2
                    flex-1
                    overflow-hidden
                    rounded-full
                    bg-[#0B2A52]/[0.07]
                  "
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: width / 100 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: rowIndex * 0.08,
                      ease,
                    }}
                    className="
                      h-full
                      w-full
                      origin-left
                      rounded-full
                      bg-gradient-to-r
                      from-[#3976B6]
                      to-[#0B2A52]
                    "
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className="
              flex
              h-[92px]
              items-center
              justify-center
              rounded-full
              border
              border-[#C6A77A]/30
              bg-white/70
            "
          >
            <Search
              size={24}
              strokeWidth={1.45}
              className="text-[#0B2A52]"
            />
          </div>
        </div>
      </div>
    );
  }

  /* ==========================================================
     02 — KEYWORDS
  ========================================================== */

  if (index === 1) {
    return (
      <div className={`${base} min-h-[180px] p-6`}>
        <div
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-[#0B2A52]/10
            bg-white/80
            px-4
            py-3
          "
        >
          <Search
            size={14}
            className="text-[#3976B6]"
          />

          <span
            className="
              text-[11px]
              text-[#0B2A52]/52
            "
          >
            Search opportunity
          </span>
        </div>

        <div
          className="
            relative
            mt-7
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              absolute
              left-[12%]
              right-[12%]
              top-[18px]
              h-px
              bg-[#0B2A52]/12
            "
          />

          {[
            ["SEARCH", "Query"],
            ["INTENT", "Meaning"],
            ["PAGE", "Match"],
          ].map(([title, text], stepIndex) => (
            <div
              key={title}
              className="
                relative
                z-10
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  h-9
                  w-9
                  rounded-full
                  border-[4px]
                  border-white
                  bg-[#0B2A52]
                  shadow-[0_0_0_1px_rgba(11,42,82,0.12)]
                "
              />

              <span
                className="
                  mt-3
                  block
                  text-[9px]
                  font-bold
                  tracking-[0.12em]
                  text-[#C6A77A]
                "
              >
                {title}
              </span>

              <span
                className="
                  mt-1
                  block
                  text-[11px]
                  text-[#0B2A52]/55
                "
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ==========================================================
     03 — TECHNICAL
  ========================================================== */

  if (index === 2) {
    return (
      <div
        className={`
          ${base}
          flex
          min-h-[180px]
          items-center
          justify-center
          p-6
        `}
      >
        <div
          className="
            relative
            flex
            h-[140px]
            w-[140px]
            items-center
            justify-center
            rounded-full
            border
            border-[#3976B6]/15
          "
        >
          <div
            className="
              absolute
              inset-[18px]
              rounded-full
              border
              border-dashed
              border-[#C6A77A]/35
            "
          />

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-[#0B2A52]
              text-white
            "
          >
            <Settings2 size={20} />
          </div>

          {[
            "-top-1 left-1/2 -translate-x-1/2",
            "right-0 top-1/2 -translate-y-1/2",
            "-bottom-1 left-1/2 -translate-x-1/2",
            "left-0 top-1/2 -translate-y-1/2",
          ].map((position, nodeIndex) => (
            <span
              key={position}
              className={`
                absolute
                ${position}
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#0B2A52]/10
                bg-white
                text-[9px]
                font-bold
                text-[#C6A77A]
              `}
            >
              {nodeIndex + 1}
            </span>
          ))}
        </div>

        <div
          className="
            ml-7
            space-y-2
          "
        >
          {["Crawl", "Index", "Speed", "Structure"].map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-2
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A77A]" />

              <span
                className="
                  text-[11px]
                  font-medium
                  text-[#0B2A52]/60
                "
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ==========================================================
     04 — ON PAGE
  ========================================================== */

  if (index === 3) {
    return (
      <div className={`${base} min-h-[180px] p-6`}>
        <div
          className="
            mx-auto
            max-w-[300px]
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.13em]
                text-[#C6A77A]
              "
            >
              PAGE STRUCTURE
            </span>

            <FileText
              size={16}
              className="text-[#3976B6]"
            />
          </div>

          <div className="mt-5">
            <div className="h-3 w-[62%] rounded-full bg-[#0B2A52]/16" />

            <div className="mt-4 space-y-2.5">
              <div className="h-2 w-full rounded-full bg-[#3976B6]/10" />
              <div className="h-2 w-[90%] rounded-full bg-[#3976B6]/10" />
              <div className="h-2 w-[70%] rounded-full bg-[#3976B6]/10" />
            </div>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >
              {["TITLE", "H1", "CONTENT", "LINKS"].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-[#C6A77A]/30
                    bg-white/70
                    px-3
                    py-1.5
                    text-[9px]
                    font-semibold
                    text-[#0B2A52]/55
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ==========================================================
     05 — CONTENT
  ========================================================== */

  if (index === 4) {
    return (
      <div className={`${base} min-h-[180px] p-6`}>
        <div className="flex items-center justify-between">
          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.14em]
              text-[#0B2A52]/45
            "
          >
            CONTENT ROADMAP
          </span>

          <Sparkles
            size={16}
            className="text-[#C6A77A]"
          />
        </div>

        <div
          className="
            relative
            mt-8
            flex
            justify-between
          "
        >
          <div
            className="
              absolute
              left-[7%]
              right-[7%]
              top-[17px]
              h-[2px]
              bg-gradient-to-r
              from-[#3976B6]
              via-[#0B2A52]
              to-[#C6A77A]
            "
          />

          {["FIND", "PLAN", "CREATE", "IMPROVE"].map(
            (label, stepIndex) => (
              <div
                key={label}
                className="
                  relative
                  z-10
                  text-center
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
                    border-[4px]
                    border-white
                    bg-[#0B2A52]
                    text-[9px]
                    font-semibold
                    text-white
                    shadow-[0_0_0_1px_rgba(11,42,82,0.12)]
                  "
                >
                  {stepIndex + 1}
                </div>

                <span
                  className="
                    mt-3
                    block
                    text-[9px]
                    font-semibold
                    tracking-[0.08em]
                    text-[#0B2A52]/48
                  "
                >
                  {label}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  /* ==========================================================
     06 — INTERNAL LINKS
  ========================================================== */

  if (index === 5) {
    return (
      <div className={`${base} min-h-[180px]`}>
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-px
            w-[58%]
            -translate-x-1/2
            rotate-[12deg]
            bg-[#C6A77A]/40
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-px
            w-[58%]
            -translate-x-1/2
            -rotate-[12deg]
            bg-[#3976B6]/30
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-12
            w-12
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#0B2A52]
            text-white
            shadow-[0_10px_25px_rgba(11,42,82,0.15)]
          "
        >
          <Link2 size={17} />
        </div>

        {[
          "left-[13%] top-[20%]",
          "right-[13%] top-[20%]",
          "left-[17%] bottom-[18%]",
          "right-[17%] bottom-[18%]",
        ].map((position) => (
          <div
            key={position}
            className={`
              absolute
              ${position}
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#3976B6]/18
              bg-white
              shadow-[0_6px_18px_rgba(11,42,82,0.06)]
            `}
          >
            <FileText
              size={13}
              className="text-[#3976B6]"
            />
          </div>
        ))}

        <span
          className="
            absolute
            bottom-4
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-[9px]
            font-semibold
            tracking-[0.11em]
            text-[#0B2A52]/40
          "
        >
          CONNECT RELATED PAGES
        </span>
      </div>
    );
  }

  /* ==========================================================
     07 — LOCAL SEO
  ========================================================== */

  if (index === 6) {
    return (
      <div className={`${base} min-h-[180px]`}>
        <div
          className="
            absolute
            left-[-5%]
            top-[36%]
            h-px
            w-[115%]
            rotate-[8deg]
            bg-[#0B2A52]/[0.08]
          "
        />

        <div
          className="
            absolute
            left-[-5%]
            top-[68%]
            h-px
            w-[115%]
            -rotate-[8deg]
            bg-[#0B2A52]/[0.08]
          "
        />

        <div
          className="
            absolute
            left-[28%]
            top-[-10%]
            h-[120%]
            w-px
            rotate-[12deg]
            bg-[#0B2A52]/[0.08]
          "
        />

        <div
          className="
            absolute
            right-[28%]
            top-[-10%]
            h-[120%]
            w-px
            -rotate-[15deg]
            bg-[#0B2A52]/[0.08]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : -12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            absolute
            left-1/2
            top-[42%]
            flex
            h-14
            w-14
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#0B2A52]
            text-white
            shadow-[0_12px_30px_rgba(11,42,82,0.17)]
          "
        >
          <MapPin
            size={20}
            strokeWidth={1.6}
          />
        </motion.div>

        <div
          className="
            absolute
            bottom-4
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            rounded-full
            border
            border-[#C6A77A]/28
            bg-white/75
            px-4
            py-2
          "
        >
          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.1em]
              text-[#0B2A52]/48
            "
          >
            SEARCH WHERE YOU SERVE
          </span>
        </div>
      </div>
    );
  }

  /* ==========================================================
     08 — REPORTING
  ========================================================== */

  const bars = [38, 48, 44, 62, 57, 74, 69, 88];

  return (
    <div
      className={`
        ${base}
        grid
        min-h-[180px]
        grid-cols-[1.3fr_0.7fr]
        gap-4
        p-6
      `}
    >
      <div
        className="
          flex
          items-end
          gap-2
          border-b
          border-[#0B2A52]/10
          pb-2
        "
      >
        {bars.map((height, barIndex) => (
          <motion.div
            key={barIndex}
            initial={{
              height: 0,
            }}
            whileInView={{
              height: `${height}%`,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: barIndex * 0.05,
              ease,
            }}
            className="
              flex-1
              rounded-t-[4px]
              bg-gradient-to-t
              from-[#3976B6]
              via-[#0B2A52]
              to-[#C6A77A]
            "
          />
        ))}
      </div>

      <div
        className="
          flex
          flex-col
          justify-center
          border-l
          border-[#0B2A52]/10
          pl-5
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
          <TrendingUp
            size={15}
            strokeWidth={1.7}
          />
        </div>

        <span
          className="
            mt-4
            text-[9px]
            font-semibold
            tracking-[0.13em]
            text-[#C6A77A]
          "
        >
          PERFORMANCE
        </span>

        <p
          className="
            mt-2
            text-[13px]
            font-medium
            leading-5
            text-[#0B2A52]
          "
        >
          Measure what matters.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   PLAN STEP
============================================================ */

function PlanStep({
  item,
  index,
  reduceMotion,
}: {
  item: string;
  index: number;
  reduceMotion: boolean;
}) {
  return (
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
        duration: 0.5,
        delay: Math.min(index * 0.055, 0.25),
        ease,
      }}
      className="
        group
        relative
        pt-[58px]
        text-center
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-0
          z-10
          flex
          h-[56px]
          w-[56px]
          -translate-x-1/2
          items-center
          justify-center
          rounded-full
          border-[4px]
          border-white
          bg-[#EAF4FC]
          text-[#3976B6]
          shadow-[0_0_0_1px_rgba(11,42,82,0.12),0_8px_22px_rgba(11,42,82,0.07)]
          transition-all
          duration-300
          group-hover:bg-[#0B2A52]
          group-hover:text-white
        "
      >
        <Check
          size={15}
          strokeWidth={1.8}
        />
      </div>

      <span
        className="
          mt-4
          block
          text-[10px]
          font-bold
          text-[#C6A77A]
        "
      >
        {(index + 1).toString().padStart(2, "0")}
      </span>

      <p
        className="
          mx-auto
          mt-2
          max-w-[128px]
          text-[12px]
          font-medium
          leading-5
          text-[#0B2A52]/65
        "
      >
        {item}
      </p>
    </motion.div>
  );
}