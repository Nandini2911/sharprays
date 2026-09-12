"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  Compass,
  Search,
  ChartNoAxesCombined,
  PanelsTopLeft,
  Newspaper,
  Lightbulb,
  BadgeCheck,
  RefreshCw,
  ArrowUpRight,
  Check,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Content Strategy",
    headline: "Decide What Is Worth Talking About.",
    description:
      "A strong content strategy creates direction before production begins.",
    intro: "Depending on your requirements, we can define:",
    items: [
      "Audience priorities",
      "Business objectives",
      "Core topics",
      "Content pillars",
      "Customer questions",
      "Search intent",
      "Content formats",
      "Distribution priorities",
      "Conversion paths",
      "Editorial direction",
    ],
    icon: Compass,

    // BLUE
    cardColor: "bg-[#E3F0FC]",
    borderColor: "border-[#3977B5]",
    iconBg: "bg-[#CEE4F8]",
    iconBorder: "border-[#79A7D1]",
    iconColor: "text-[#225F99]",
    numberColor: "text-[#AACBE8]",
    accentColor: "bg-[#3977B5]",
    glowColor: "bg-[#4E91CF]/35",

    accentHex: "#3977B5",
    softHex: "#E3F0FC",
    darkHex: "#1F5B91",
  },

  {
    number: "02",
    title: "Audience & Topic Research",
    headline: "Find the Questions Worth Answering.",
    description:
      "We research the problems, questions and topics connected to your audience and services.",
    intro: "That can include:",
    items: [
      "Audience questions",
      "Search behaviour",
      "Commercial topics",
      "Industry conversations",
      "Competitor content",
      "Content gaps",
      "Customer journey topics",
      "Supporting subtopics",
    ],
    note:
      "We do not choose topics only because a keyword tool reports search volume.",
    closing:
      "The topic must also make sense for your audience and business.",
    icon: Search,

    // TEAL
    cardColor: "bg-[#DFF2EF]",
    borderColor: "border-[#2D847D]",
    iconBg: "bg-[#CAE9E4]",
    iconBorder: "border-[#72B3A9]",
    iconColor: "text-[#216D67]",
    numberColor: "text-[#A9D8D0]",
    accentColor: "bg-[#2D847D]",
    glowColor: "bg-[#45A198]/35",

    accentHex: "#2D847D",
    softHex: "#DFF2EF",
    darkHex: "#1D625D",
  },

  {
    number: "03",
    title: "SEO Content Strategy",
    headline: "Connect Search Demand With Business Expertise.",
    description:
      "Search-led content should satisfy the person searching while strengthening the wider relevance of your website.",
    intro: "Our SEO content strategy can include:",
    items: [
      "Keyword and topic research",
      "Search intent analysis",
      "Topic clustering",
      "Service-page support content",
      "Content briefs",
      "Internal linking opportunities",
      "Existing-content improvement",
      "Organic content roadmaps",
    ],
    icon: ChartNoAxesCombined,

    // VIOLET
    cardColor: "bg-[#EEE8FA]",
    borderColor: "border-[#7158B2]",
    iconBg: "bg-[#DED4F3]",
    iconBorder: "border-[#A492D2]",
    iconColor: "text-[#60499F]",
    numberColor: "text-[#C9BDE8]",
    accentColor: "bg-[#7158B2]",
    glowColor: "bg-[#8870C7]/35",

    accentHex: "#7158B2",
    softHex: "#EEE8FA",
    darkHex: "#55408E",
  },

  {
    number: "04",
    title: "Website Content",
    headline: "Make Important Pages Easier to Understand.",
    description:
      "Website content should clearly communicate what you do, who you help and why someone should choose you.",
    intro: "We can support content for:",
    items: [
      "Service pages",
      "Landing pages",
      "About pages",
      "Industry pages",
      "Product or solution pages",
      "Campaign pages",
      "Conversion-focused website copy",
    ],
    icon: PanelsTopLeft,

    // CORAL
    cardColor: "bg-[#F9E7DF]",
    borderColor: "border-[#B9684E]",
    iconBg: "bg-[#F1D4C8]",
    iconBorder: "border-[#DB9F8B]",
    iconColor: "text-[#9C513B]",
    numberColor: "text-[#E5BDAE]",
    accentColor: "bg-[#B9684E]",
    glowColor: "bg-[#CF8066]/35",

    accentHex: "#b94e5e",
    softHex: "#F9E7DF",
    darkHex: "#8B4735",
  },

  {
    number: "05",
    title: "Blog & Editorial Content",
    headline: "Publish Something Worth Reading.",
    description:
      "We create articles around topics where your business can contribute useful knowledge rather than simply repeat existing search results.",
    intro: "Content can include:",
    items: [
      "Educational articles",
      "Industry guides",
      "How-to content",
      "Explainers",
      "Trend analysis",
      "Comparison content",
      "Question-led articles",
      "Opinion and perspective pieces",
    ],
    icon: Newspaper,

    // OCEAN CYAN
    cardColor: "bg-[#E0F1F7]",
    borderColor: "border-[#3485A3]",
    iconBg: "bg-[#CBE7F0]",
    iconBorder: "border-[#75B5CA]",
    iconColor: "text-[#246F8C]",
    numberColor: "text-[#AAD4E1]",
    accentColor: "bg-[#3485A3]",
    glowColor: "bg-[#4E9EBB]/35",

    accentHex: "#3485A3",
    softHex: "#E0F1F7",
    darkHex: "#235F78",
  },

  {
    number: "06",
    title: "Thought Leadership Content",
    headline:
      "Turn Expertise Into Something Your Market Can Recognize.",
    description:
      "Your experience becomes more valuable when it is communicated clearly.",
    intro:
      "Thought leadership can help transform internal expertise into:",
    items: [
      "Founder perspectives",
      "Expert articles",
      "Industry commentary",
      "Original frameworks",
      "Research-led content",
      "LinkedIn content",
      "Executive insights",
      "Opinion pieces",
    ],
    note:
      "The goal is not to make your business sound louder.",
    closing:
      "It is to give your brand something worth listening to.",
    icon: Lightbulb,

    // AMBER
    cardColor: "bg-[#F8EBD5]",
    borderColor: "border-[#AF7834]",
    iconBg: "bg-[#F0DBB8]",
    iconBorder: "border-[#D5AD6C]",
    iconColor: "text-[#956323]",
    numberColor: "text-[#E4C797]",
    accentColor: "bg-[#AF7834]",
    glowColor: "bg-[#C99752]/35",

    accentHex: "#AF7834",
    softHex: "#F8EBD5",
    darkHex: "#7E541F",
  },

  {
    number: "07",
    title: "Case Studies & Customer Stories",
    headline:
      "Show How Your Thinking Works in the Real World.",
    description:
      "Case studies help move content from claims to evidence.",
    intro: "A strong case study can explain:",
    items: [
      "The client situation",
      "The challenge",
      "The strategic decision",
      "What changed",
      "How the work was executed",
      "What was learned",
      "What measurable result followed",
    ],
    closing:
      "We use real information and verified outcomes rather than inflated marketing claims.",
    icon: BadgeCheck,

    // SAGE GREEN
    cardColor: "bg-[#E2F0E7]",
    borderColor: "border-[#4D8565]",
    iconBg: "bg-[#CFE5D7]",
    iconBorder: "border-[#82B497]",
    iconColor: "text-[#396F53]",
    numberColor: "text-[#AED1BC]",
    accentColor: "bg-[#4D8565]",
    glowColor: "bg-[#67A17D]/35",

    accentHex: "#4D8565",
    softHex: "#E2F0E7",
    darkHex: "#345F48",
  },

  {
    number: "08",
    title: "Content Optimization",
    headline: "Improve What You Already Have.",
    description:
      "More publishing is not always the answer.",
    intro: "Existing content may need:",
    items: [
      "Search intent improvement",
      "Better organization",
      "Updated information",
      "Clearer explanations",
      "Stronger examples",
      "Content consolidation",
      "Improved internal links",
      "Better calls to action",
      "More original insight",
    ],
    closing:
      "Sometimes the best new content strategy starts with improving what already exists.",
    icon: RefreshCw,

    // ROSE
    cardColor: "bg-[#F6E5EC]",
    borderColor: "border-[#A75F7C]",
    iconBg: "bg-[#ECD0DC]",
    iconBorder: "border-[#CF91A9]",
    iconColor: "text-[#914D68]",
    numberColor: "text-[#DDB5C5]",
    accentColor: "bg-[#A75F7C]",
    glowColor: "bg-[#BF7893]/35",

    accentHex: "#A75F7C",
    softHex: "#F6E5EC",
    darkHex: "#7D4059",
  },
];

export default function ContentMarketingServices() {
  const reduceMotion = useReducedMotion();

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const selected =
    selectedIndex !== null
      ? services[selectedIndex]
      : null;

  const SelectedIcon = selected?.icon;

  /* =====================================================
     LOCK PAGE SCROLL + ESC CLOSE
  ===================================================== */

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex]);

  return (
    <section
      id="content-marketing-services"
      aria-labelledby="content-marketing-services-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-[#0B2A52]
        antialiased

        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-[240px]
            top-[130px]

            h-[520px]
            w-[520px]

            rounded-full

            border
            border-[#0B2A52]/[0.04]
          "
        />

        <div
          className="
            absolute
            -left-[145px]
            top-[225px]

            h-[330px]
            w-[330px]

            rounded-full

            border
            border-[#B88758]/15
          "
        />

        <div
          className="
            absolute
            -right-[190px]
            bottom-[-130px]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#E1ECF7]/65
            blur-[125px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[50%]

            h-[500px]
            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-[#F4F7FB]
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1360px]

          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.header
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 35,
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
            duration: reduceMotion
              ? 0
              : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[1000px]
            text-center
          "
        >
          {/* EYEBROW */}

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
                bg-[#B88758]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.27em]
                text-[#A67549]

                sm:text-[10px]
              "
            >
              Our Content Marketing Services
            </span>

            <span
              className="
                h-px
                w-10
                bg-[#B88758]
              "
            />
          </div>

          {/* HEADING */}

          <h2
            id="content-marketing-services-heading"
            className="
              mx-auto
              mt-6
              max-w-[1000px]

              font-serif
              text-[2.25rem]
              font-medium
              leading-[1.04]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Strategy, Creation and
            Optimization.{" "}
            <span
              className="
                font-normal
                italic
                text-[#B88758]
              "
            >
              Connected.
            </span>
          </h2>

          {/* INTRO */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[800px]

              text-[14px]
              leading-7
              text-[#536B83]

              sm:text-[15px]
            "
          >
            Our content marketing services can
            cover the complete journey from
            deciding what your business should
            talk about to creating, improving
            and measuring the content itself.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-[760px]

              text-[12px]
              leading-6
              text-[#667B90]

              sm:text-[13px]
            "
          >
            The exact scope depends on your
            audience, website, objectives,
            internal resources and wider
            marketing strategy.
          </p>
        </motion.header>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion
              ? 0
              : 0.7,
            delay: reduceMotion
              ? 0
              : 0.12,
          }}
          className="
            mx-auto
            mt-10

            flex
            max-w-[980px]
            items-center
            gap-4
          "
        >
          <span
            className="
              h-px
              flex-1
              bg-[#0B2A52]/10
            "
          />

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.21em]
              text-[#0B2A52]/40
            "
          >
            Select a service to explore
          </span>

          <span
            className="
              h-px
              flex-1
              bg-[#0B2A52]/10
            "
          />
        </motion.div>

        {/* =================================================
            SERVICE CARDS
        ================================================= */}

        <div
          className="
            mt-8

            grid
            gap-5

            sm:grid-cols-2

            lg:grid-cols-4
            lg:gap-5

            xl:gap-6
          "
        >
          {services.map(
            (service, index) => {
              const Icon = service.icon;

              return (
                <motion.button
                  key={service.number}
                  type="button"
                  onClick={() =>
                    setSelectedIndex(index)
                  }
                  initial={{
                    opacity: 0,
                    y: reduceMotion
                      ? 0
                      : 40,
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
                    duration: reduceMotion
                      ? 0
                      : 0.65,
                    delay: reduceMotion
                      ? 0
                      : index * 0.06,
                    ease: [
                      0.22, 1, 0.36, 1,
                    ],
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -7,
                        }
                  }
                  className={`
                    group
                    relative
                    min-w-0

                    rounded-[26px]

                    border-2

                    bg-white
                    p-[7px]

                    text-left

                    shadow-[0_15px_45px_rgba(11,42,82,0.045)]

                    transition-shadow
                    duration-500

                    hover:shadow-[0_25px_60px_rgba(11,42,82,0.12)]

                    ${service.borderColor}
                  `}
                >
                  {/* =========================================
                      INNER COLORED CARD
                  ========================================= */}

                  <div
                    className={`
                      relative

                      flex
                      min-h-[270px]
                      flex-col

                      overflow-hidden

                      rounded-[19px]

                      p-5

                      sm:min-h-[285px]
                      sm:p-6

                      ${service.cardColor}
                    `}
                  >
                    {/* HOVER GLOW */}

                    <div
                      className={`
                        pointer-events-none

                        absolute
                        -right-14
                        -top-14

                        h-[175px]
                        w-[175px]

                        rounded-full

                        opacity-0
                        blur-[42px]

                        transition-all
                        duration-700

                        group-hover:scale-125
                        group-hover:opacity-100

                        ${service.glowColor}
                      `}
                    />

                    {/* DECORATIVE CIRCLE */}

                    <div
                      className="
                        pointer-events-none

                        absolute
                        -right-[68px]
                        -top-[68px]

                        h-[175px]
                        w-[175px]

                        rounded-full

                        border
                        border-white/65

                        transition-transform
                        duration-700

                        group-hover:scale-110
                      "
                    />

                    <div
                      className="
                        pointer-events-none

                        absolute
                        -right-[26px]
                        -top-[26px]

                        h-[95px]
                        w-[95px]

                        rounded-full

                        border
                        border-white/40
                      "
                    />

                    {/* =========================================
                        TOP
                    ========================================= */}

                    <div
                      className="
                        relative
                        z-10

                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      {/* ICON */}

                      <span
                        className={`
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center

                          rounded-[14px]

                          border

                          shadow-[0_8px_20px_rgba(11,42,82,0.05)]

                          transition-all
                          duration-500

                          group-hover:-rotate-3
                          group-hover:scale-105

                          ${service.iconBg}
                          ${service.iconBorder}
                          ${service.iconColor}
                        `}
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.45}
                        />
                      </span>

                      {/* BIG NUMBER */}

                      <span
                        className={`
                          select-none

                          font-serif
                          text-[52px]
                          font-normal
                          leading-[0.8]
                          tracking-[-0.07em]

                          transition-transform
                          duration-500

                          group-hover:-translate-y-1

                          ${service.numberColor}
                        `}
                      >
                        {service.number}
                      </span>
                    </div>

                    {/* =========================================
                        CARD CONTENT
                    ========================================= */}

                    <div
                      className="
                        relative
                        z-10

                        mt-8

                        flex
                        flex-1
                        flex-col
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
                            h-[2px]
                            w-6

                            rounded-full

                            transition-all
                            duration-500

                            group-hover:w-10

                            ${service.accentColor}
                          `}
                        />

                        <span
                          className="
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.17em]
                            text-[#0B2A52]/40
                          "
                        >
                          Service{" "}
                          {service.number}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-4
                          max-w-[250px]

                          font-serif
                          text-[1.3rem]
                          font-medium
                          leading-[1.17]
                          tracking-[-0.03em]
                          text-[#0B2A52]

                          sm:text-[1.4rem]
                        "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          max-w-[255px]

                          text-[12px]
                          font-medium
                          leading-[1.55]
                          text-[#3E5870]
                        "
                      >
                        {service.headline}
                      </p>
                    </div>

                    {/* =========================================
                        VIEW SERVICE
                    ========================================= */}

                    <div
                      className="
                        relative
                        z-10

                        mt-5

                        flex
                        items-center
                        justify-between

                        border-t
                        border-[#0B2A52]/10

                        pt-4
                      "
                    >
                      <span
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                        "
                        style={{
                          color:
                            service.darkHex,
                        }}
                      >
                        View full service
                      </span>

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center

                          rounded-full

                          border

                          bg-white/65

                          transition-transform
                          duration-500

                          group-hover:-rotate-6
                          group-hover:scale-105
                        "
                        style={{
                          borderColor: `${service.accentHex}70`,
                          color:
                            service.darkHex,
                        }}
                      >
                        <ArrowUpRight
                          size={12}
                          strokeWidth={1.8}
                        />
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            }
          )}
        </div>
      </div>

      {/* =====================================================
          SERVICE MODAL
      ===================================================== */}

      <AnimatePresence>
        {selected &&
          SelectedIcon && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                fixed
                inset-0
                z-[9999]

                flex
                items-center
                justify-center

                p-4

                sm:p-6
                lg:p-8
              "
            >
              {/* =============================================
                  BACKDROP
              ============================================= */}

              <button
                type="button"
                aria-label="Close service details"
                onClick={() =>
                  setSelectedIndex(null)
                }
                className="
                  absolute
                  inset-0

                  bg-[#06182C]/60
                  backdrop-blur-[7px]
                "
              />

              {/* =============================================
                  MODAL OUTER SHELL
              ============================================= */}

              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="service-modal-title"
                initial={{
                  opacity: 0,
                  y: reduceMotion
                    ? 0
                    : 28,
                  scale: reduceMotion
                    ? 1
                    : 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: reduceMotion
                    ? 0
                    : 20,
                  scale: reduceMotion
                    ? 1
                    : 0.98,
                }}
                transition={{
                  duration: reduceMotion
                    ? 0
                    : 0.42,
                  ease: [
                    0.22, 1, 0.36, 1,
                  ],
                }}
                className="
                  relative
                  z-10

                  max-h-[90vh]
                  w-full
                  max-w-[1100px]

                  overflow-y-auto

                  rounded-[29px]

                  bg-white

                  p-[7px]

                  shadow-[0_35px_110px_rgba(3,18,35,0.32)]
                "
                style={{
                  border: `2px solid ${selected.accentHex}`,
                }}
              >
                {/* =============================================
                    MODAL INNER
                ============================================= */}

                <div
                  className="
                    relative
                    overflow-hidden

                    rounded-[20px]
                  "
                  style={{
                    backgroundColor:
                      selected.softHex,
                  }}
                >
                  {/* BIG NUMBER */}

                  <span
                    className="
                      pointer-events-none

                      absolute
                      -right-3
                      -top-8

                      hidden

                      select-none

                      font-serif
                      text-[12rem]
                      leading-none
                      tracking-[-0.08em]

                      lg:block
                    "
                    style={{
                      color: `${selected.accentHex}18`,
                    }}
                  >
                    {selected.number}
                  </span>

                  {/* DECORATIVE CIRCLES */}

                  <div
                    className="
                      pointer-events-none

                      absolute
                      -right-20
                      -top-20

                      h-[240px]
                      w-[240px]

                      rounded-full

                      border
                      border-white/80
                    "
                  />

                  <div
                    className="
                      pointer-events-none

                      absolute
                      -right-5
                      -top-5

                      h-[125px]
                      w-[125px]

                      rounded-full

                      border
                      border-white/50
                    "
                  />

                  {/* CLOSE */}

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex(null)
                    }
                    aria-label="Close service details"
                    className="
                      absolute
                      right-4
                      top-4
                      z-30

                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-white/90

                      bg-white/85
                      text-[#0B2A52]

                      shadow-[0_8px_20px_rgba(11,42,82,0.10)]

                      backdrop-blur

                      transition-all
                      duration-300

                      hover:rotate-90
                      hover:scale-105

                      sm:right-5
                      sm:top-5
                    "
                  >
                    <X
                      size={17}
                      strokeWidth={1.8}
                    />
                  </button>

                  {/* =============================================
                      MODAL CONTENT
                  ============================================= */}

                  <div
                    className="
                      relative
                      z-10

                      grid
                      gap-9

                      px-6
                      py-8

                      sm:px-8
                      sm:py-10

                      lg:grid-cols-[0.9fr_1.1fr]
                      lg:gap-14
                      lg:px-11
                      lg:py-12
                    "
                  >
                    {/* =========================================
                        LEFT SIDE
                    ========================================= */}

                    <div>
                      {/* META */}

                      <div
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >
                        <span
                          className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center

                            rounded-[15px]

                            text-white

                            shadow-[0_8px_22px_rgba(11,42,82,0.14)]
                          "
                          style={{
                            backgroundColor:
                              selected.accentHex,
                          }}
                        >
                          <SelectedIcon
                            size={19}
                            strokeWidth={1.6}
                          />
                        </span>

                        <span
                          className="
                            h-[2px]
                            w-10
                          "
                          style={{
                            backgroundColor:
                              selected.accentHex,
                          }}
                        />

                        <span
                          className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                          "
                          style={{
                            color:
                              selected.darkHex,
                          }}
                        >
                          Service{" "}
                          {selected.number}
                        </span>
                      </div>

                      {/* TITLE */}

                      <p
                        className="
                          mt-7

                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.21em]
                        "
                        style={{
                          color:
                            selected.darkHex,
                        }}
                      >
                        {selected.title}
                      </p>

                      {/* HEADLINE */}

                      <h3
                        id="service-modal-title"
                        className="
                          mt-3
                          max-w-[540px]

                          font-serif
                          text-[1.9rem]
                          font-medium
                          leading-[1.08]
                          tracking-[-0.035em]
                          text-[#0B2A52]

                          sm:text-[2.2rem]
                          lg:text-[2.45rem]
                        "
                      >
                        {selected.headline}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-5
                          max-w-[520px]

                          text-[13px]
                          leading-7
                          text-[#425E76]

                          sm:text-[14px]
                        "
                      >
                        {selected.description}
                      </p>

                      {/* OPTIONAL NOTE */}

                      {selected.note && (
                        <p
                          className="
                            mt-5
                            max-w-[520px]

                            text-[12px]
                            leading-6
                            text-[#61768A]

                            sm:text-[13px]
                          "
                        >
                          {selected.note}
                        </p>
                      )}

                      {/* OPTIONAL CLOSING */}

                      {selected.closing && (
                        <div
                          className="
                            mt-6
                            max-w-[520px]

                            border-l-[3px]

                            pl-5
                          "
                          style={{
                            borderColor:
                              selected.accentHex,
                          }}
                        >
                          <p
                            className="
                              font-serif
                              text-[1.05rem]
                              font-medium
                              leading-[1.55]
                              text-[#0B2A52]
                            "
                          >
                            {selected.closing}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* =========================================
                        RIGHT SIDE
                    ========================================= */}

                    <div>
                      {/* INTRO */}

                      <div
                        className="
                          mb-5

                          flex
                          items-center
                          gap-4
                        "
                      >
                        <span
                          className="
                            max-w-[80%]

                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.17em]
                            text-[#506980]
                          "
                        >
                          {selected.intro}
                        </span>

                        <span
                          className="
                            h-px
                            flex-1
                          "
                          style={{
                            backgroundColor: `${selected.accentHex}75`,
                          }}
                        />
                      </div>

                      {/* ITEMS */}

                      <div
                        className="
                          grid

                          sm:grid-cols-2
                          sm:gap-x-8
                        "
                      >
                        {selected.items.map(
                          (
                            item,
                            itemIndex
                          ) => (
                            <motion.div
                              key={item}
                              initial={{
                                opacity: 0,
                                y: reduceMotion
                                  ? 0
                                  : 10,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration:
                                  reduceMotion
                                    ? 0
                                    : 0.35,

                                delay:
                                  reduceMotion
                                    ? 0
                                    : 0.08 +
                                      itemIndex *
                                        0.035,
                              }}
                              className="
                                group/item

                                flex
                                min-h-[52px]
                                items-center
                                gap-3

                                border-t

                                py-3
                              "
                              style={{
                                borderColor: `${selected.accentHex}55`,
                              }}
                            >
                              {/* CHECK */}

                              <span
                                className="
                                  flex
                                  h-[22px]
                                  w-[22px]
                                  shrink-0
                                  items-center
                                  justify-center

                                  rounded-full

                                  border

                                  bg-white/70

                                  transition-transform
                                  duration-300

                                  group-hover/item:scale-110
                                "
                                style={{
                                  borderColor: `${selected.accentHex}90`,
                                  color:
                                    selected.darkHex,
                                }}
                              >
                                <Check
                                  size={10}
                                  strokeWidth={2}
                                />
                              </span>

                              {/* ITEM TEXT */}

                              <span
                                className="
                                  text-[12px]
                                  font-medium
                                  leading-[1.45]
                                  text-[#2E4A62]

                                  transition-transform
                                  duration-300

                                  group-hover/item:translate-x-1

                                  sm:text-[13px]
                                "
                              >
                                {item}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </section>
  );
}