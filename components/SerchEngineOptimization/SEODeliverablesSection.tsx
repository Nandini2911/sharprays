"use client";

import type { ReactNode } from "react";
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
  Target,
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
            bg-[#3976B6]/[0.045]
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
            bg-[#C6A77A]/[0.075]
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
            DELIVERABLE ROWS
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
            CONNECTED SCOPE
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
            border-[#0B2A52]/[0.12]
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

          {/* DESKTOP FLOW */}

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
            BOTTOM MICROCOPY
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
          gap-8
          py-11
          sm:py-12
          lg:grid-cols-[75px_minmax(0,1fr)_460px]
          lg:items-center
          lg:gap-12
          lg:py-16
        "
      >
        {/* NUMBER */}

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
              [font-family:Georgia,'Times_New_Roman',serif]
              text-[34px]
              font-normal
              leading-none
              tracking-[-0.04em]
              text-[#C6A77A]
            "
          >
            {item.number}
          </span>

          <span
            className="
              hidden
              mt-5
              h-9
              w-px
              bg-[#0B2A52]/15
              lg:block
            "
          />
        </div>

        {/* COPY */}

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
                shadow-[0_7px_20px_rgba(57,118,182,0.06)]
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
              [font-family:Georgia,'Times_New_Roman',serif]
              text-[24px]
              font-normal
              leading-[1.18]
              tracking-[-0.027em]
              text-[#0B2A52]
              sm:text-[27px]
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
              text-[#0B2A52]/60
            "
          >
            {item.description}
          </p>

          <div
            className="
              mt-6
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

        {/* VISUAL */}

        <DeliverableVisual
          index={index}
          reduceMotion={reduceMotion}
        />
      </div>

      {/* SUBTLE HOVER WASH */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-[#EAF4FC]/25
          via-transparent
          to-[#F7ECD9]/25
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
   PREMIUM VISUAL SHELL
============================================================ */

function VisualShell({
  number,
  label,
  icon,
  children,
  className = "",
}: {
  number: string;
  label: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        relative
        min-h-[225px]
        overflow-hidden
        rounded-[28px]
        border
        border-[#0B2A52]/[0.11]
        bg-gradient-to-br
        from-[#F7FBFF]
        via-[#FFFFFF]
        to-[#FBF4E8]
        px-5
        py-5
        shadow-[0_18px_45px_rgba(11,42,82,0.05)]
        transition-all
        duration-500
        group-hover:-translate-y-[2px]
        group-hover:border-[#0B2A52]/20
        group-hover:shadow-[0_24px_60px_rgba(11,42,82,0.075)]
        sm:px-6
        ${className}
      `}
    >
      {/* atmospheric glows */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-20
          h-[190px]
          w-[190px]
          rounded-full
          bg-[#3976B6]/[0.055]
          blur-[45px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-16
          h-[170px]
          w-[170px]
          rounded-full
          bg-[#C6A77A]/[0.08]
          blur-[45px]
        "
      />

      {/* header */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-between
          gap-5
          border-b
          border-[#0B2A52]/[0.08]
          pb-4
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#E7F2FC]
              text-[#3976B6]
              shadow-[0_5px_14px_rgba(57,118,182,0.08)]
            "
          >
            {icon}
          </div>

          <div>
            <span
              className="
                block
                text-[8px]
                font-semibold
                tracking-[0.18em]
                text-[#C6A77A]
              "
            >
              SEO SYSTEM
            </span>

            <span
              className="
                mt-0.5
                block
                text-[10px]
                font-semibold
                tracking-[0.08em]
                text-[#0B2A52]/48
              "
            >
              {label}
            </span>
          </div>
        </div>

        <span
          className="
            [font-family:Georgia,'Times_New_Roman',serif]
            text-[26px]
            leading-none
            text-[#C6A77A]/60
          "
        >
          {number}
        </span>
      </div>

      <div className="relative z-10 pt-5">
        {children}
      </div>
    </div>
  );
}

/* ============================================================
   DELIVERABLE VISUALS
============================================================ */

function DeliverableVisual({
  index,
  reduceMotion,
}: {
  index: number;
  reduceMotion: boolean;
}) {
  /* ==========================================================
     01 — SEO AUDIT
  ========================================================== */

  if (index === 0) {
    const checks = [
      ["Technical", 84],
      ["Structure", 68],
      ["Content", 76],
      ["Visibility", 58],
    ] as const;

    return (
      <VisualShell
        number="01"
        label="SEO AUDIT"
        icon={
          <FileSearch
            size={14}
            strokeWidth={1.7}
          />
        }
      >
        <div
          className="
            grid
            grid-cols-[1fr_96px]
            items-center
            gap-5
          "
        >
          <div className="space-y-3.5">
            {checks.map(([label, width], rowIndex) => (
              <div key={label}>
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      tracking-[0.08em]
                      text-[#0B2A52]/48
                    "
                  >
                    {label}
                  </span>

                  <Check
                    size={11}
                    strokeWidth={2}
                    className="text-[#C6A77A]"
                  />
                </div>

                <div
                  className="
                    h-[5px]
                    overflow-hidden
                    rounded-full
                    bg-[#0B2A52]/[0.07]
                  "
                >
                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: width / 100,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.75,
                      delay: rowIndex * 0.07,
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
              relative
              flex
              h-[108px]
              items-center
              justify-center
              rounded-[22px]
              border
              border-[#3976B6]/15
              bg-[#EAF4FC]/80
            "
          >
            <div
              className="
                absolute
                inset-3
                rounded-[16px]
                border
                border-dashed
                border-[#3976B6]/15
              "
            />

            <div className="relative z-10 text-center">
              <Search
                size={24}
                strokeWidth={1.45}
                className="mx-auto text-[#0B2A52]"
              />

              <span
                className="
                  mt-2
                  block
                  text-[8px]
                  font-semibold
                  tracking-[0.11em]
                  text-[#3976B6]
                "
              >
                REVIEW
              </span>
            </div>
          </div>
        </div>
      </VisualShell>
    );
  }

  /* ==========================================================
     02 — KEYWORD & INTENT
  ========================================================== */

  if (index === 1) {
    const stages = [
      {
        label: "SEARCH",
        sub: "What people type",
        icon: Search,
      },
      {
        label: "INTENT",
        sub: "What they need",
        icon: Target,
      },
      {
        label: "PAGE",
        sub: "Where they land",
        icon: FileText,
      },
    ];

    return (
      <VisualShell
        number="02"
        label="SEARCH INTENT MAP"
        icon={
          <SearchCheck
            size={14}
            strokeWidth={1.7}
          />
        }
      >
        <div
          className="
            flex
            items-center
            gap-3
            rounded-[15px]
            border
            border-[#3976B6]/15
            bg-white/85
            px-4
            py-3
            shadow-[0_8px_22px_rgba(11,42,82,0.035)]
          "
        >
          <Search
            size={13}
            strokeWidth={1.7}
            className="shrink-0 text-[#3976B6]"
          />

          <span
            className="
              truncate
              text-[10px]
              text-[#0B2A52]/45
            "
          >
            What is the searcher really looking for?
          </span>

          <span
            className="
              ml-auto
              shrink-0
              rounded-full
              bg-[#EAF4FC]
              px-2.5
              py-1
              text-[7px]
              font-bold
              tracking-[0.1em]
              text-[#3976B6]
            "
          >
            QUERY
          </span>
        </div>

        <div
          className="
            relative
            mt-6
            grid
            grid-cols-3
            gap-3
          "
        >
          <div
            className="
              absolute
              left-[16%]
              right-[16%]
              top-[25px]
              h-px
              bg-[#0B2A52]/10
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
              duration: reduceMotion ? 0 : 0.9,
              ease,
            }}
            className="
              absolute
              left-[16%]
              right-[16%]
              top-[25px]
              h-[2px]
              origin-left
              bg-gradient-to-r
              from-[#3976B6]
              via-[#0B2A52]
              to-[#C6A77A]
            "
          />

          {stages.map((stage, stageIndex) => {
            const StageIcon = stage.icon;

            return (
              <div
                key={stage.label}
                className="
                  relative
                  z-10
                  text-center
                "
              >
                <div
                  className={`
                    mx-auto
                    flex
                    h-[52px]
                    w-[52px]
                    items-center
                    justify-center
                    rounded-full
                    border-[5px]
                    border-white
                    shadow-[0_0_0_1px_rgba(11,42,82,0.10),0_8px_20px_rgba(11,42,82,0.06)]

                    ${
                      stageIndex === 1
                        ? "bg-[#0B2A52] text-white"
                        : stageIndex === 2
                          ? "bg-[#FFF1DC] text-[#A66E32]"
                          : "bg-[#EAF4FC] text-[#3976B6]"
                    }
                  `}
                >
                  <StageIcon
                    size={15}
                    strokeWidth={1.7}
                  />
                </div>

                <span
                  className="
                    mt-3
                    block
                    text-[8px]
                    font-bold
                    tracking-[0.13em]
                    text-[#C6A77A]
                  "
                >
                  {stage.label}
                </span>

                <span
                  className="
                    mx-auto
                    mt-1
                    block
                    max-w-[90px]
                    text-[9px]
                    leading-4
                    text-[#0B2A52]/48
                  "
                >
                  {stage.sub}
                </span>
              </div>
            );
          })}
        </div>
      </VisualShell>
    );
  }

  /* ==========================================================
     03 — TECHNICAL SEO
  ========================================================== */

  if (index === 2) {
    const items = [
      {
        label: "CRAWL",
        icon: Search,
      },
      {
        label: "INDEX",
        icon: Check,
      },
      {
        label: "SPEED",
        icon: TrendingUp,
      },
      {
        label: "STRUCTURE",
        icon: Settings2,
      },
    ];

    return (
      <VisualShell
        number="03"
        label="TECHNICAL HEALTH"
        icon={
          <Settings2
            size={14}
            strokeWidth={1.7}
          />
        }
      >
        <div
          className="
            grid
            grid-cols-2
            gap-3
          "
        >
          {items.map((item, itemIndex) => {
            const ItemIcon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: itemIndex * 0.06,
                  ease,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-[14px]
                  border
                  border-[#3976B6]/12
                  bg-white/75
                  px-3.5
                  py-3
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                  "
                >
                  <ItemIcon
                    size={11}
                    strokeWidth={1.8}
                  />
                </div>

                <span
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.11em]
                    text-[#0B2A52]/60
                  "
                >
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div
          className="
            mt-4
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              h-[5px]
              flex-1
              overflow-hidden
              rounded-full
              bg-[#0B2A52]/[0.07]
            "
          >
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 0.88,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                ease,
              }}
              className="
                h-full
                w-full
                origin-left
                rounded-full
                bg-gradient-to-r
                from-[#3976B6]
                to-[#C6A77A]
              "
            />
          </div>

          <span
            className="
              text-[8px]
              font-bold
              tracking-[0.12em]
              text-[#C6A77A]
            "
          >
            HEALTH
          </span>
        </div>
      </VisualShell>
    );
  }

  /* ==========================================================
     04 — ON-PAGE
  ========================================================== */

  if (index === 3) {
    return (
      <VisualShell
        number="04"
        label="PAGE OPTIMIZATION"
        icon={
          <FileText
            size={14}
            strokeWidth={1.7}
          />
        }
      >
        <div
          className="
            rounded-[17px]
            border
            border-[#0B2A52]/10
            bg-white/80
            p-4
            shadow-[0_8px_22px_rgba(11,42,82,0.03)]
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                text-[8px]
                font-semibold
                tracking-[0.14em]
                text-[#C6A77A]
              "
            >
              PAGE STRUCTURE
            </span>

            <FileText
              size={13}
              className="text-[#3976B6]"
            />
          </div>

          <div className="mt-4">
            <div
              className="
                h-[9px]
                w-[58%]
                rounded-full
                bg-[#0B2A52]/16
              "
            />

            <div className="mt-3 space-y-2">
              <div className="h-[6px] w-full rounded-full bg-[#3976B6]/10" />
              <div className="h-[6px] w-[91%] rounded-full bg-[#3976B6]/10" />
              <div className="h-[6px] w-[72%] rounded-full bg-[#3976B6]/10" />
            </div>

            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-2
              "
            >
              {["TITLE", "H1", "CONTENT", "LINKS"].map((label) => (
                <span
                  key={label}
                  className="
                    rounded-full
                    border
                    border-[#C6A77A]/25
                    bg-[#FFF9EF]
                    px-3
                    py-1.5
                    text-[7px]
                    font-semibold
                    tracking-[0.08em]
                    text-[#0B2A52]/55
                  "
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </VisualShell>
    );
  }

  /* ==========================================================
     05 — CONTENT STRATEGY
  ========================================================== */

  if (index === 4) {
    return (
      <VisualShell
        number="05"
        label="CONTENT ROADMAP"
        icon={
          <Sparkles
            size={14}
            strokeWidth={1.7}
          />
        }
      >
        <div
          className="
            relative
            pt-3
          "
        >
          <div
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[30px]
              h-px
              bg-[#0B2A52]/10
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
              duration: reduceMotion ? 0 : 0.9,
              ease,
            }}
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[30px]
              h-[2px]
              origin-left
              bg-gradient-to-r
              from-[#3976B6]
              via-[#0B2A52]
              to-[#C6A77A]
            "
          />

          <div className="grid grid-cols-4">
            {["FIND", "PLAN", "CREATE", "IMPROVE"].map(
              (label, stageIndex) => (
                <div
                  key={label}
                  className="
                    relative
                    z-10
                    text-center
                  "
                >
                  <div
                    className={`
                      mx-auto
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border-[4px]
                      border-white
                      text-[9px]
                      font-semibold
                      shadow-[0_0_0_1px_rgba(11,42,82,0.10)]

                      ${
                        stageIndex === 3
                          ? "bg-[#C6A77A] text-white"
                          : "bg-[#0B2A52] text-white"
                      }
                    `}
                  >
                    {stageIndex + 1}
                  </div>

                  <span
                    className="
                      mt-3
                      block
                      text-[7px]
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

          <p
            className="
              mx-auto
              mt-5
              max-w-[280px]
              text-center
              text-[9px]
              leading-4
              text-[#0B2A52]/42
            "
          >
            Turn search opportunity into a prioritized content plan.
          </p>
        </div>
      </VisualShell>
    );
  }

  /* ==========================================================
     06 — INTERNAL LINKING
  ========================================================== */

  if (index === 5) {
    return (
      <VisualShell
        number="06"
        label="INTERNAL LINK NETWORK"
        icon={
          <Link2
            size={14}
            strokeWidth={1.7}
          />
        }
      >
        <div className="relative h-[126px]">
          <svg
            viewBox="0 0 360 126"
            fill="none"
            className="
              absolute
              inset-0
              h-full
              w-full
            "
            aria-hidden="true"
          >
            <path
              d="M180 63L66 25"
              stroke="#3976B6"
              strokeOpacity="0.28"
            />

            <path
              d="M180 63L294 25"
              stroke="#C6A77A"
              strokeOpacity="0.34"
            />

            <path
              d="M180 63L78 105"
              stroke="#C6A77A"
              strokeOpacity="0.34"
            />

            <path
              d="M180 63L282 105"
              stroke="#3976B6"
              strokeOpacity="0.28"
            />
          </svg>

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
              shadow-[0_10px_24px_rgba(11,42,82,0.15)]
            "
          >
            <Link2
              size={16}
              strokeWidth={1.7}
            />
          </div>

          {[
            "left-[10%] top-0",
            "right-[10%] top-0",
            "left-[14%] bottom-0",
            "right-[14%] bottom-0",
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
                border-[#3976B6]/15
                bg-white
                text-[#3976B6]
                shadow-[0_7px_18px_rgba(11,42,82,0.05)]
              `}
            >
              <FileText
                size={12}
                strokeWidth={1.7}
              />
            </div>
          ))}
        </div>

        <p
          className="
            mt-2
            text-center
            text-[8px]
            font-semibold
            tracking-[0.11em]
            text-[#0B2A52]/40
          "
        >
          CONNECT RELATED PAGES
        </p>
      </VisualShell>
    );
  }

  /* ==========================================================
     07 — LOCAL SEO
  ========================================================== */

  if (index === 6) {
    return (
      <VisualShell
        number="07"
        label="LOCAL SEARCH"
        icon={
          <MapPin
            size={14}
            strokeWidth={1.7}
          />
        }
      >
        <div
          className="
            relative
            h-[128px]
            overflow-hidden
            rounded-[17px]
            border
            border-[#0B2A52]/[0.08]
            bg-white/65
          "
        >
          <div
            className="
              absolute
              left-[-10%]
              top-[30%]
              h-px
              w-[120%]
              rotate-[7deg]
              bg-[#3976B6]/12
            "
          />

          <div
            className="
              absolute
              left-[-10%]
              top-[69%]
              h-px
              w-[120%]
              -rotate-[7deg]
              bg-[#C6A77A]/18
            "
          />

          <div
            className="
              absolute
              left-[28%]
              top-[-20%]
              h-[140%]
              w-px
              rotate-[12deg]
              bg-[#0B2A52]/[0.08]
            "
          />

          <div
            className="
              absolute
              right-[26%]
              top-[-20%]
              h-[140%]
              w-px
              -rotate-[13deg]
              bg-[#0B2A52]/[0.08]
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.86,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease,
            }}
            className="
              absolute
              left-1/2
              top-[44%]
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
              shadow-[0_12px_28px_rgba(11,42,82,0.17)]
            "
          >
            <MapPin
              size={19}
              strokeWidth={1.6}
            />
          </motion.div>

          <span
            className="
              absolute
              bottom-3
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              rounded-full
              border
              border-[#C6A77A]/25
              bg-[#FFF9F0]/90
              px-3
              py-1.5
              text-[7px]
              font-semibold
              tracking-[0.1em]
              text-[#0B2A52]/48
            "
          >
            WHERE YOUR CUSTOMERS SEARCH
          </span>
        </div>
      </VisualShell>
    );
  }

  /* ==========================================================
     08 — REPORTING
  ========================================================== */

  const bars = [37, 47, 43, 59, 56, 70, 67, 84];

  return (
    <VisualShell
      number="08"
      label="PERFORMANCE REPORTING"
      icon={
        <BarChart3
          size={14}
          strokeWidth={1.7}
        />
      }
    >
      <div
        className="
          grid
          grid-cols-[1.25fr_0.75fr]
          gap-5
        "
      >
        <div
          className="
            flex
            h-[124px]
            items-end
            gap-2
            rounded-[16px]
            border
            border-[#0B2A52]/[0.08]
            bg-white/72
            px-4
            pb-3
            pt-5
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
                duration: reduceMotion ? 0 : 0.65,
                delay: barIndex * 0.045,
                ease,
              }}
              className="
                flex-1
                rounded-t-[3px]
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
            rounded-[16px]
            border
            border-[#C6A77A]/18
            bg-[#FFF9EF]/80
            px-4
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
            <TrendingUp
              size={14}
              strokeWidth={1.7}
            />
          </div>

          <span
            className="
              mt-3
              text-[7px]
              font-semibold
              tracking-[0.13em]
              text-[#C6A77A]
            "
          >
            INSIGHT
          </span>

          <p
            className="
              mt-1
              text-[11px]
              font-medium
              leading-4
              text-[#0B2A52]
            "
          >
            Measure what matters.
          </p>
        </div>
      </div>
    </VisualShell>
  );
}

/* ============================================================
   FINAL PLAN STEP
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