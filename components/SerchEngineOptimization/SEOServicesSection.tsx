"use client";

import type { CSSProperties, ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileSearch,
  FileText,
  KeyRound,
  Link2,
  MapPin,
  PenLine,
  RefreshCw,
  Settings2,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TYPES
============================================================ */

type Service = {
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  lead: string;
  items: string[];
  outro?: string;
  icon: ElementType;
  accent: string;
  soft: string;
  gradient: string;
};

/* ============================================================
   SERVICES
============================================================ */

const services: Service[] = [
  {
    number: "01",
    title: "SEO Audit & Strategy",
    subtitle: "Know What Is Holding Your Website Back.",
    intro:
      "We start by understanding how your website currently performs and where the strongest opportunities exist.",
    lead: "Depending on your scope, an SEO audit can review:",
    items: [
      "Technical SEO issues",
      "Website structure",
      "Indexing and crawlability",
      "Existing rankings",
      "Organic traffic",
      "Content quality",
      "Internal linking",
      "Search intent alignment",
      "Competitor visibility",
      "Conversion opportunities",
    ],
    icon: FileSearch,

    accent: "#3976B6",
    soft: "#E4F1FC",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #EEF6FC 32%, #E1EFFA 68%, #D7EAF8 100%)",
  },

  {
    number: "02",
    title: "Keyword & Search Intent Research",
    subtitle: "Understand What Your Customers Actually Search For.",
    intro:
      "Keyword research should go beyond collecting high-volume phrases.",
    lead: "We identify relevant searches based on:",
    items: [
      "Customer intent",
      "Commercial relevance",
      "Search journey",
      "Service priorities",
      "Topic relationships",
      "Competition",
      "Existing website authority",
    ],
    outro:
      "The result is a clearer map of which pages should target which search needs.",
    icon: KeyRound,

    accent: "#B57A31",
    soft: "#FCEFD9",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #FFF7E9 30%, #FBEBD0 67%, #F3DDB5 100%)",
  },

  {
    number: "03",
    title: "Technical SEO",
    subtitle: "Build a Website Search Engines Can Access and Understand.",
    intro:
      "Technical SEO creates a stronger foundation for organic visibility.",
    lead: "Depending on your website, optimization may include:",
    items: [
      "Crawlability",
      "Indexing",
      "Site architecture",
      "XML sitemaps",
      "Robots directives",
      "Canonical URLs",
      "Redirects",
      "Duplicate content issues",
      "Structured data",
      "Core Web Vitals considerations",
      "Mobile usability",
      "JavaScript SEO",
      "Internal linking structure",
    ],
    icon: Settings2,

    accent: "#27816A",
    soft: "#E2F3EC",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #EFF9F5 30%, #E1F2EA 67%, #D0EADF 100%)",
  },

  {
    number: "04",
    title: "On-Page SEO",
    subtitle: "Make Every Important Page Easier to Understand.",
    intro:
      "We optimize individual pages around their purpose, topic and search intent.",
    lead: "On-page SEO can include:",
    items: [
      "Page titles",
      "Meta descriptions",
      "Heading structure",
      "Content hierarchy",
      "URL structure",
      "Semantic relevance",
      "Image optimization",
      "Internal links",
      "Anchor text",
      "Calls to action",
      "Structured page content",
    ],
    icon: FileText,

    accent: "#7059B0",
    soft: "#ECE7F8",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #F7F3FD 30%, #ECE6F8 67%, #DDD3F1 100%)",
  },

  {
    number: "05",
    title: "SEO Content Strategy",
    subtitle: "Create Content People Are Actually Looking For.",
    intro:
      "SEO content should answer useful questions while supporting your wider business strategy.",
    lead: "We identify opportunities across:",
    items: [
      "Service pages",
      "Landing pages",
      "Topic guides",
      "Educational resources",
      "Comparison content",
      "Industry questions",
      "Commercial search topics",
      "Supporting informational content",
    ],
    outro:
      "Instead of creating content simply to increase page count, we prioritize topics that strengthen your website’s relevance and usefulness.",
    icon: PenLine,

    accent: "#BD6247",
    soft: "#FBE8E1",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #FFF5F1 30%, #FAE7DF 67%, #F2D4C8 100%)",
  },

  {
    number: "06",
    title: "Content Optimization",
    subtitle: "Improve What You Already Have.",
    intro:
      "Not every SEO opportunity requires another new page.",
    lead: "Existing content can often be improved through:",
    items: [
      "Search intent alignment",
      "Better structure",
      "Content expansion",
      "Content consolidation",
      "Internal linking",
      "Updated information",
      "Clearer answers",
      "Improved calls to action",
    ],
    outro:
      "The goal is to strengthen pages where genuine improvement is possible rather than publishing unnecessary content.",
    icon: RefreshCw,

    accent: "#258595",
    soft: "#E1F4F6",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #EFFAFB 30%, #E0F3F5 67%, #CDECEF 100%)",
  },

  {
    number: "07",
    title: "Internal Linking & Website Structure",
    subtitle: "Help Users and Search Engines Find What Matters.",
    intro:
      "Strong internal linking creates clearer relationships between your pages.",
    lead: "We use internal links to help:",
    items: [
      "Search engines discover content",
      "Users navigate related topics",
      "Important pages receive more contextual support",
      "Website sections form logical topic relationships",
      "Visitors continue their journey through the site",
    ],
    icon: Link2,

    accent: "#A85072",
    soft: "#F8E3EB",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #FFF4F8 30%, #F8E4EC 67%, #EFD1DD 100%)",
  },

  {
    number: "08",
    title: "Local SEO",
    subtitle: "Be Easier to Find Where You Do Business.",
    intro:
      "For businesses serving specific locations, local SEO helps strengthen visibility for geographically relevant searches.",
    lead: "Depending on your requirements, local SEO may include:",
    items: [
      "Local search strategy",
      "Google Business Profile optimization",
      "Location information consistency",
      "Location-focused pages",
      "Local keyword targeting",
      "Local landing page optimization",
      "Business information markup",
      "Local content opportunities",
    ],
    outro:
      "We prioritize genuine location relevance rather than repeating city names unnaturally across your website.",
    icon: MapPin,

    accent: "#9B6C31",
    soft: "#F7EBD7",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #FCF7ED 30%, #F5E8D2 67%, #EBD5B1 100%)",
  },
];

/* ============================================================
   SECTION
============================================================ */

export default function SEOServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-services"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-[#FBFCFF]
        to-[#F8FAFC]
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          SECTION BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* NAVY GLOW */}

        <div
          className="
            absolute
            -left-52
            top-[8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0B2A52]/[0.055]
            blur-[140px]
          "
        />

        {/* GOLD GLOW */}

        <div
          className="
            absolute
            -right-52
            top-[36%]
            h-[540px]
            w-[540px]
            rounded-full
            bg-[#C6A77A]/[0.11]
            blur-[150px]
          "
        />

        {/* SOFT BLUE LOWER GLOW */}

        <div
          className="
            absolute
            -left-40
            bottom-[10%]
            h-[450px]
            w-[520px]
            rounded-full
            bg-[#3976B6]/[0.045]
            blur-[140px]
          "
        />

        {/* CENTER GOLD HAZE */}

        <div
          className="
            absolute
            left-1/2
            top-[63%]
            h-[400px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-[#C6A77A]/[0.045]
            blur-[160px]
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
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* ====================================================
            HEADER
        ==================================================== */}

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
          className="mx-auto max-w-[940px] text-center"
        >
          {/* EYEBROW */}

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#C6A77A]" />

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.28em]
                text-[#C6A77A]
                sm:text-[10px]
              "
            >
              OUR SEO SERVICES
            </span>

            <span className="h-px w-9 bg-[#C6A77A]" />
          </div>

          {/* LOCKED HEADING SIZE */}

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
            Everything Your Search Presence Needs.{" "}
            <span className="text-[#C6A77A]">
              Connected.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[760px]
              text-[13px]
              leading-7
              text-[#0B2A52]/60
              sm:text-sm
            "
          >
            Our SEO services combine technical improvements, search strategy,
            content optimization and performance analysis.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-[760px]
              text-[13px]
              leading-7
              text-[#0B2A52]/60
              sm:text-sm
            "
          >
            The final SEO plan depends on your website, market, competition,
            current visibility and business objectives.
          </p>
        </motion.div>

        {/* ====================================================
            BLUEPRINT HEADER
        ==================================================== */}

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
            duration: 0.8,
            delay: 0.15,
            ease,
          }}
          className="
            mx-auto
            mt-16
            flex
            max-w-[1240px]
            items-center
            justify-between
            border-b
            border-[#0B2A52]/15
            pb-5
            lg:mt-20
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
                text-[8px]
                font-semibold
                tracking-[0.22em]
                text-[#0B2A52]/45
              "
            >
              SEO SERVICE BLUEPRINT
            </span>
          </div>

          <span
            className="
              hidden
              text-[8px]
              font-semibold
              tracking-[0.18em]
              text-[#0B2A52]/30
              sm:block
            "
          >
            08 CONNECTED CAPABILITIES
          </span>
        </motion.div>

        {/* ====================================================
            OPEN SERVICE SYSTEM
        ==================================================== */}

        <div className="mx-auto max-w-[1240px]">
          {services.map((service, index) => (
            <ServiceChapter
              key={service.number}
              service={service}
              index={index}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICE CHAPTER
============================================================ */

function ServiceChapter({
  service,
  index,
  reduceMotion,
}: {
  service: Service;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = service.icon;

  const style = {
    "--accent": service.accent,
    "--soft": service.soft,
  } as CSSProperties;

  return (
    <motion.article
      style={style}
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
        amount: 0.12,
      }}
      transition={{
        duration: 0.8,
        ease,
      }}
      className="
        group
        relative
        border-b
        border-[#0B2A52]/15
        py-10
        sm:py-12
        lg:py-14
      "
    >
      {/* =====================================================
          MAIN GRADIENT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-x-5
          inset-y-3
          rounded-[28px]
          opacity-[0.82]
          shadow-[0_12px_38px_rgba(11,42,82,0.025)]
          transition-all
          duration-700
          ease-out
          group-hover:opacity-100
          group-hover:shadow-[0_18px_50px_rgba(11,42,82,0.06)]
          sm:-inset-x-7
        "
        style={{
          background: service.gradient,
        }}
      />

      {/* =====================================================
          ACCENT GLOW INSIDE GRADIENT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-10
          top-1/2
          h-[74%]
          w-[40%]
          -translate-y-1/2
          rounded-full
          bg-[var(--accent)]
          opacity-[0.045]
          blur-[70px]
          transition-all
          duration-700
          group-hover:scale-110
          group-hover:opacity-[0.085]
        "
      />

      {/* =====================================================
          SUBTLE LEFT WHITE LIGHT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-20
          top-1/2
          h-[75%]
          w-[30%]
          -translate-y-1/2
          rounded-full
          bg-white
          opacity-30
          blur-[60px]
        "
      />

      {/* =====================================================
          ACTIVE LEFT LINE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-12
          left-0
          top-12
          z-20
          w-[3px]
          origin-center
          scale-y-50
          rounded-r-full
          bg-[var(--accent)]
          opacity-55
          transition-all
          duration-500
          group-hover:scale-y-100
          group-hover:opacity-100
        "
      />

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          grid
          gap-9
          pl-5
          sm:pl-7
          lg:grid-cols-[130px_0.8fr_1.2fr]
          lg:gap-12
          lg:pl-8
        "
      >
        {/* ===================================================
            NUMBER + ICON
        =================================================== */}

        <div
          className="
            flex
            items-start
            justify-between
            lg:block
          "
        >
          <div>
            <span
              className="
                block
                text-[44px]
                font-light
                leading-none
                tracking-[-0.05em]
                text-[var(--accent)]
                sm:text-[52px]
              "
            >
              {service.number}
            </span>

            <span
              className="
                mt-3
                block
                text-[7px]
                font-bold
                tracking-[0.2em]
                text-[#0B2A52]/35
              "
            >
              SEO SERVICE
            </span>
          </div>

          {/* CONNECTOR */}

          <div className="mt-7 hidden items-center lg:flex">
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 48,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease,
              }}
              className="h-px bg-[var(--accent)]"
            />

            <span
              className="
                h-2
                w-2
                -translate-x-px
                rounded-full
                bg-[var(--accent)]
              "
            />
          </div>

          {/* ICON */}

          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    rotate: 5,
                    scale: 1.06,
                  }
            }
            transition={{
              duration: 0.3,
            }}
            className="
              mt-0
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[var(--accent)]
              text-white
              shadow-[0_8px_22px_rgba(11,42,82,0.12)]
              lg:mt-8
            "
          >
            <Icon
              size={16}
              strokeWidth={1.7}
            />
          </motion.div>
        </div>

        {/* ===================================================
            SERVICE INFORMATION
        =================================================== */}

        <div>
          <h3
            className="
              max-w-[500px]
              text-[22px]
              font-medium
              leading-[1.18]
              tracking-[-0.026em]
              text-[#0B2A52]
              sm:text-[24px]
              lg:text-[25px]
            "
          >
            {service.title}
          </h3>

          <h4
            className="
              mt-4
              max-w-[510px]
              text-[14px]
              font-semibold
              leading-7
              text-[var(--accent)]
              sm:text-[15px]
            "
          >
            {service.subtitle}
          </h4>

          <p
            className="
              mt-4
              max-w-[520px]
              text-[12px]
              leading-6
              text-[#0B2A52]/65
              sm:text-[13px]
            "
          >
            {service.intro}
          </p>

          {service.outro && (
            <div className="mt-6 flex gap-4">
              <span
                className="
                  w-[2px]
                  shrink-0
                  rounded-full
                  bg-[var(--accent)]
                "
              />

              <p
                className="
                  max-w-[520px]
                  text-[11px]
                  font-medium
                  leading-6
                  text-[#0B2A52]/70
                  sm:text-[12px]
                "
              >
                {service.outro}
              </p>
            </div>
          )}
        </div>

        {/* ===================================================
            SCOPE
        =================================================== */}

        <div
          className="
            relative
            lg:border-l
            lg:border-[#0B2A52]/12
            lg:pl-10
          "
        >
          {/* SCOPE HEADER */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
            "
          >
            <p
              className="
                max-w-[500px]
                text-[10px]
                font-semibold
                leading-5
                text-[#0B2A52]
                sm:text-[11px]
              "
            >
              {service.lead}
            </p>

            <div className="flex items-center gap-2">
              <span
                className="
                  text-[8px]
                  font-bold
                  tracking-[0.16em]
                  text-[var(--accent)]
                "
              >
                {service.items.length
                  .toString()
                  .padStart(2, "0")}
              </span>

              <span
                className="
                  text-[7px]
                  font-semibold
                  tracking-[0.16em]
                  text-[#0B2A52]/35
                "
              >
                FOCUS AREAS
              </span>
            </div>
          </div>

          {/* =================================================
              VISIBLE ITEM GRID
          ================================================= */}

          <div
            className="
              mt-5
              grid
              gap-x-8
              sm:grid-cols-2
            "
          >
            {service.items.map((item, itemIndex) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : 8,
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
                  duration: 0.4,
                  delay: Math.min(
                    itemIndex * 0.025,
                    0.16,
                  ),
                }}
                className="
                  group/item
                  flex
                  min-h-[43px]
                  items-center
                  gap-3
                  border-b
                  border-[#0B2A52]/12
                  py-2.5
                  transition-all
                  duration-300
                  hover:border-[var(--accent)]
                "
              >
                {/* NODE */}

                <span
                  className="
                    relative
                    flex
                    h-[15px]
                    w-[15px]
                    shrink-0
                    items-center
                    justify-center
                  "
                >
                  <span
                    className="
                      h-[5px]
                      w-[5px]
                      rounded-full
                      bg-[var(--accent)]
                    "
                  />

                  <span
                    className="
                      absolute
                      inset-0
                      scale-50
                      rounded-full
                      border
                      border-[var(--accent)]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover/item:scale-100
                      group-hover/item:opacity-45
                    "
                  />
                </span>

                <span
                  className="
                    text-[10px]
                    leading-5
                    text-[#0B2A52]/68
                    transition-all
                    duration-300
                    group-hover/item:translate-x-1
                    group-hover/item:text-[#0B2A52]
                    sm:text-[11px]
                  "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM ACCENT */}

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
                bg-[var(--accent)]
                transition-all
                duration-500
                group-hover:w-14
              "
            />

            <span
              className="
                text-[7px]
                font-semibold
                tracking-[0.2em]
                text-[#0B2A52]/32
              "
            >
              CONNECTED SEO
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}