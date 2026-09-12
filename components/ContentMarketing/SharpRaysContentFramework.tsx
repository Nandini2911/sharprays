"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Users,
  Target,
  Map,
  PenTool,
  Link2,
  TrendingUp,
  ArrowRight,
  Check,
} from "lucide-react";

/* =========================================================
   FRAMEWORK DATA
========================================================= */

const framework = [
  {
    number: "01",
    step: "Understand",
    title: "Start With the Audience",
    description:
      "Understand who you are trying to reach, what they care about and what questions stand between them and a decision.",
    focus: ["Audience", "Problems", "Questions", "Intent"],
    icon: Users,
  },
  {
    number: "02",
    step: "Position",
    title: "Decide What You Should Be Known For",
    description:
      "Identify the themes and ideas where your business has a genuine reason to contribute.",
    focus: ["Expertise", "Topics", "Perspective", "Positioning"],
    icon: Target,
  },
  {
    number: "03",
    step: "Plan",
    title: "Turn Ideas Into a Content System",
    description:
      "Map topics across the customer journey and decide which formats, pages and channels make sense.",
    focus: ["Content Pillars", "Formats", "Search", "Journey"],
    icon: Map,
  },
  {
    number: "04",
    step: "Create",
    title: "Make Something Worth Consuming",
    description:
      "Turn expertise into useful, clear and distinctive content.",
    focus: ["Writing", "Research", "Design", "Storytelling"],
    icon: PenTool,
  },
  {
    number: "05",
    step: "Connect",
    title: "Give Content Somewhere to Go",
    description:
      "Use internal linking, distribution and clear next actions to connect one piece of content with the wider customer journey.",
    focus: ["SEO", "Distribution", "Internal Links", "Conversion"],
    icon: Link2,
  },
  {
    number: "06",
    step: "Improve",
    title: "Learn From What People Actually Do",
    description:
      "Use performance data, audience behaviour and new business insights to improve the content system over time.",
    focus: ["Performance", "Updates", "Opportunities", "Growth"],
    icon: TrendingUp,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SharpRaysContentFramework() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = framework[activeIndex];
  const ActiveIcon = activeItem.icon;

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 26,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="sharp-rays-content-framework"
      aria-labelledby="content-framework-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-[34%]
            h-[640px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#EDF6FF]/60
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -left-[260px]
            top-[24%]
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#F2F7FC]/80
            blur-[135px]
          "
        />

        <div
          className="
            absolute
            -right-[240px]
            bottom-[4%]
            h-[440px]
            w-[440px]
            rounded-full
            bg-[#F8F2EB]/45
            blur-[130px]
          "
        />

        {/* subtle circles */}

        <div
          className="
            absolute
            -left-[210px]
            top-[330px]
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#0B2A52]/[0.035]
          "
        />

        <div
          className="
            absolute
            -left-[120px]
            top-[420px]
            h-[240px]
            w-[240px]
            rounded-full
            border
            border-[#B88758]/10
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
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            staggerChildren: reduceMotion ? 0 : 0.09,
          }}
          className="
            mx-auto
            max-w-[1050px]
            text-center
          "
        >
          {/* eyebrow */}

          <motion.div
            variants={fadeUp}
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-11 bg-[#B88758]" />

            <span
              className="
                text-[0.67rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#A56C38]
                sm:text-[0.73rem]
              "
            >
              The Sharp Rays Approach
            </span>

            <span className="h-px w-11 bg-[#B88758]" />
          </motion.div>

          {/* heading */}

          <motion.h2
            id="content-framework-heading"
            variants={fadeUp}
            className="
              mx-auto
              mt-5
              max-w-[1030px]
              font-serif
              text-[2.25rem]
              font-medium
              leading-[1.05]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            From Business Knowledge to Content{" "}
            <span
              className="
                font-normal
                italic
                text-[#B88758]
              "
            >
              People Want to Find.
            </span>
          </motion.h2>

          {/* intro */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[760px]
              text-[0.95rem]
              leading-[1.7]
              text-[#536B83]
              sm:text-[1rem]
            "
          >
            We bring strategy, search behaviour, expertise and distribution
            into one connected process.
          </motion.p>
        </motion.div>

        {/* =====================================================
            JOURNEY LABEL
        ===================================================== */}

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
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 0.1,
          }}
          className="
            mx-auto
            mt-12
            flex
            max-w-[1120px]
            items-center
            gap-4
            lg:mt-14
          "
        >
          <span
            className="
              shrink-0
              text-[0.58rem]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#64798D]
            "
          >
            Business Knowledge
          </span>

          <div
            className="
              relative
              h-px
              flex-1
              overflow-hidden
              bg-[#C8D5E1]
            "
          >
            <motion.div
              initial={{
                scaleX: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                delay: reduceMotion ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                inset-0
                origin-left
                bg-gradient-to-r
                from-[#0B2A52]
                via-[#39709C]
                to-[#B88758]
              "
            />
          </div>

          <ArrowRight
            size={14}
            strokeWidth={1.8}
            className="
              shrink-0
              text-[#B88758]
            "
          />

          <span
            className="
              shrink-0
              text-right
              text-[0.58rem]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#64798D]
            "
          >
            Useful Content
          </span>
        </motion.div>

        {/* =====================================================
            DESKTOP PROCESS SYSTEM
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-10
            hidden
            max-w-[1180px]
            lg:block
          "
        >
          {/* =================================================
              TOP PROCESS RAIL
          ================================================= */}

          <div
            className="
              relative
              h-[205px]
            "
          >
            {/* MAIN RAIL */}

            <motion.div
              initial={{
                scaleX: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-[7%]
                right-[7%]
                top-[58px]
                h-px
                origin-left
                bg-[#A9BED1]
              "
            />

            {/* RAIL END DOTS */}

            <span
              className="
                absolute
                left-[6.7%]
                top-[54px]
                h-[9px]
                w-[9px]
                rounded-full
                border
                border-[#7D9BB7]
                bg-white
              "
            />

            <span
              className="
                absolute
                right-[6.7%]
                top-[54px]
                h-[9px]
                w-[9px]
                rounded-full
                border
                border-[#7D9BB7]
                bg-white
              "
            />

            {/* STEPS */}

            <div
              className="
                absolute
                inset-x-[4%]
                top-0
                grid
                grid-cols-6
              "
            >
              {framework.map((item, index) => {
                const Icon = item.icon;
                const active = activeIndex === index;

                return (
                  <div
                    key={item.number}
                    className="
                      relative
                      flex
                      flex-col
                      items-center
                    "
                  >
                    {/* rail joint */}

                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.3,
                        delay:
                          reduceMotion
                            ? 0
                            : 0.35 + index * 0.08,
                      }}
                      className={`
                        absolute
                        top-[54px]
                        z-20
                        h-[9px]
                        w-[9px]
                        rounded-full
                        border-2
                        bg-white

                        ${
                          active
                            ? "border-[#0B2A52]"
                            : "border-[#9DB3C7]"
                        }
                      `}
                    />

                    {/* stem */}

                    <motion.div
                      initial={{
                        scaleY: reduceMotion ? 1 : 0,
                      }}
                      whileInView={{
                        scaleY: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.45,
                        delay:
                          reduceMotion
                            ? 0
                            : 0.45 + index * 0.08,
                      }}
                      className={`
                        absolute
                        top-[62px]
                        h-[34px]
                        w-px
                        origin-top

                        ${
                          active
                            ? "bg-[#0B2A52]"
                            : "bg-[#A6B9CB]"
                        }
                      `}
                    />

                    {/* node */}

                    <motion.button
                      type="button"
                      initial={{
                        opacity: 0,
                        y: reduceMotion ? 0 : 12,
                        scale: reduceMotion ? 1 : 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.45,
                        delay:
                          reduceMotion
                            ? 0
                            : 0.62 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -4,
                            }
                      }
                      onMouseEnter={() =>
                        setActiveIndex(index)
                      }
                      onFocus={() =>
                        setActiveIndex(index)
                      }
                      onClick={() =>
                        setActiveIndex(index)
                      }
                      aria-pressed={active}
                      className={`
                        relative
                        mt-[98px]
                        flex
                        min-h-[96px]
                        w-[145px]
                        flex-col
                        items-center
                        justify-center
                        rounded-[1.25rem]
                        border
                        px-3
                        py-3
                        text-center

                        transition-all
                        duration-300

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#0B2A52]
                        focus-visible:ring-offset-3

                        ${
                          active
                            ? `
                              border-[#7198BE]
                              bg-[#EAF4FF]
                              shadow-[0_16px_38px_rgba(11,42,82,0.11)]
                            `
                            : `
                              border-[#C1D3E3]
                              bg-white
                              shadow-[0_8px_24px_rgba(11,42,82,0.045)]
                            `
                        }
                      `}
                    >
                      {/* active indicator */}

                      <span
                        className={`
                          absolute
                          left-1/2
                          top-0
                          h-[3px]
                          -translate-x-1/2
                          rounded-full
                          bg-[#0B2A52]

                          transition-all
                          duration-300

                          ${
                            active
                              ? "w-9"
                              : "w-0"
                          }
                        `}
                      />

                      {/* icon */}

                      <div
                        className={`
                          flex
                          h-[38px]
                          w-[38px]
                          items-center
                          justify-center
                          rounded-full

                          transition-all
                          duration-300

                          ${
                            active
                              ? "bg-white text-[#0B2A52]"
                              : "bg-[#EDF5FC] text-[#3D6588]"
                          }
                        `}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                        />
                      </div>

                      {/* number */}

                      <span
                        className="
                          mt-2
                          text-[0.55rem]
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-[#B88758]
                        "
                      >
                        {item.number}
                      </span>

                      {/* step */}

                      <span
                        className="
                          mt-1
                          text-[0.62rem]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-[#0B2A52]
                        "
                      >
                        {item.step}
                      </span>
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              ACTIVE STEP PANEL
          ================================================= */}

          <div
            className="
              mx-auto
              mt-10
              max-w-[1050px]
            "
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 18,
                  scale: reduceMotion ? 1 : 0.99,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: reduceMotion ? 0 : -10,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border-[1.5px]
                  border-[#91AEC8]
                  bg-gradient-to-br
                  from-[#F5FAFF]
                  via-white
                  to-[#FAFCFE]
                  p-8
                  shadow-[0_22px_60px_rgba(11,42,82,0.07)]

                  xl:p-10
                "
              >
                {/* top line */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-px
                    w-[42%]
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#7DA0C0]
                    to-transparent
                  "
                />

                {/* decorative circles */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[70px]
                    -top-[80px]
                    h-[220px]
                    w-[220px]
                    rounded-full
                    border
                    border-[#0B2A52]/[0.045]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[10px]
                    -top-[20px]
                    h-[120px]
                    w-[120px]
                    rounded-full
                    border
                    border-[#0B2A52]/[0.045]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    grid
                    items-center
                    gap-12
                    lg:grid-cols-[1fr_0.85fr]
                  "
                >
                  {/* =========================================
                      LEFT COPY
                  ========================================= */}

                  <div>
                    {/* identifier */}

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
                          h-[60px]
                          w-[60px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-[1.1rem]
                          border
                          border-[#A7C3DD]
                          bg-[#E5F0FB]
                          text-[#174F86]
                        "
                      >
                        <ActiveIcon
                          size={25}
                          strokeWidth={1.7}
                        />
                      </div>

                      <div>
                        <span
                          className="
                            text-[0.65rem]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[#B88758]
                          "
                        >
                          Step {activeItem.number}
                        </span>

                        <span
                          className="
                            mt-1
                            block
                            text-[0.72rem]
                            font-semibold
                            uppercase
                            tracking-[0.17em]
                            text-[#496987]
                          "
                        >
                          {activeItem.step}
                        </span>
                      </div>
                    </div>

                    {/* heading */}

                    <h3
                      className="
                        mt-7
                        max-w-[600px]
                        font-serif
                        text-[1.85rem]
                        font-medium
                        leading-[1.12]
                        tracking-[-0.03em]
                        text-[#0B2A52]

                        xl:text-[2.1rem]
                      "
                    >
                      {activeItem.title}
                    </h3>

                    {/* copy */}

                    <p
                      className="
                        mt-4
                        max-w-[620px]
                        text-[0.92rem]
                        leading-[1.7]
                        text-[#536C84]
                      "
                    >
                      {activeItem.description}
                    </p>
                  </div>

                  {/* =========================================
                      FOCUS PANEL
                  ========================================= */}

                  <div
                    className="
                      rounded-[1.45rem]
                      border
                      border-[#D2E0EC]
                      bg-white/80
                      p-6
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
                            text-[0.58rem]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[#6B8095]
                          "
                        >
                          Focus Areas
                        </span>

                        <p
                          className="
                            mt-1
                            font-serif
                            text-[1.15rem]
                            font-medium
                            text-[#0B2A52]
                          "
                        >
                          What matters at this stage.
                        </p>
                      </div>

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#C0D3E5]
                          bg-[#F3F8FD]
                          text-[#0B2A52]
                        "
                      >
                        <ArrowRight
                          size={16}
                          strokeWidth={1.7}
                        />
                      </span>
                    </div>

                    {/* focus items */}

                    <div
                      className="
                        mt-6
                        grid
                        grid-cols-2
                        gap-3
                      "
                    >
                      {activeItem.focus.map(
                        (focus, index) => (
                          <motion.div
                            key={focus}
                            initial={{
                              opacity: 0,
                              y: reduceMotion
                                ? 0
                                : 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration:
                                reduceMotion
                                  ? 0
                                  : 0.3,
                              delay:
                                reduceMotion
                                  ? 0
                                  : index * 0.04,
                            }}
                            className="
                              flex
                              min-h-[46px]
                              items-center
                              gap-2.5
                              rounded-[0.9rem]
                              border
                              border-[#BCD1E4]
                              bg-[#F8FBFF]
                              px-3
                              py-2.5
                            "
                          >
                            <span
                              className="
                                flex
                                h-[18px]
                                w-[18px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#E4F0FB]
                                text-[#0B2A52]
                              "
                            >
                              <Check
                                size={10}
                                strokeWidth={2.2}
                              />
                            </span>

                            <span
                              className="
                                text-[0.76rem]
                                font-medium
                                text-[#496680]
                              "
                            >
                              {focus}
                            </span>
                          </motion.div>
                        ),
                      )}
                    </div>

                    {/* progress */}

                    <div
                      className="
                        mt-6
                        border-t
                        border-[#D7E3ED]
                        pt-4
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
                            text-[0.56rem]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-[#72869A]
                          "
                        >
                          Process Progress
                        </span>

                        <span
                          className="
                            font-serif
                            text-[0.85rem]
                            italic
                            text-[#B88758]
                          "
                        >
                          {activeItem.number} / 06
                        </span>
                      </div>

                      <div
                        className="
                          mt-3
                          h-[3px]
                          overflow-hidden
                          rounded-full
                          bg-[#DFE8F0]
                        "
                      >
                        <motion.div
                          animate={{
                            width: `${
                              ((activeIndex + 1) /
                                framework.length) *
                              100
                            }%`,
                          }}
                          transition={{
                            duration:
                              reduceMotion
                                ? 0
                                : 0.45,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }}
                          className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-[#0B2A52]
                            via-[#396E9A]
                            to-[#B88758]
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-[760px]
            lg:hidden
          "
        >
          {/* step selector */}

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
            "
          >
            {framework.map((item, index) => {
              const Icon = item.icon;
              const active = activeIndex === index;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  aria-pressed={active}
                  className={`
                    relative
                    flex
                    items-center
                    gap-3
                    rounded-[1.1rem]
                    border
                    p-3
                    text-left
                    transition-all
                    duration-300

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#0B2A52]

                    ${
                      active
                        ? `
                          border-[#7EA3C7]
                          bg-[#EBF5FF]
                          shadow-[0_10px_28px_rgba(11,42,82,0.08)]
                        `
                        : `
                          border-[#D4E1EC]
                          bg-white
                        `
                    }
                  `}
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E7F1FB]
                      text-[#174F86]
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                    />
                  </span>

                  <span>
                    <span
                      className="
                        block
                        text-[0.53rem]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-[#B88758]
                      "
                    >
                      {item.number}
                    </span>

                    <span
                      className="
                        mt-0.5
                        block
                        text-[0.7rem]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-[#0B2A52]
                      "
                    >
                      {item.step}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* mobile active panel */}

          <AnimatePresence mode="wait">
            <motion.article
              key={activeItem.number}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: reduceMotion ? 0 : -10,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
              }}
              className="
                mt-5
                rounded-[1.5rem]
                border
                border-[#A9C1D7]
                bg-gradient-to-br
                from-[#F3F9FF]
                via-white
                to-[#FAFCFE]
                p-5
                shadow-[0_15px_38px_rgba(11,42,82,0.055)]

                sm:p-6
              "
            >
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
                    rounded-[0.9rem]
                    border
                    border-[#A9C5DD]
                    bg-[#E5F0FB]
                    text-[#174F86]
                  "
                >
                  <ActiveIcon
                    size={21}
                    strokeWidth={1.7}
                  />
                </span>

                <div>
                  <span
                    className="
                      text-[0.58rem]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#B88758]
                    "
                  >
                    Step {activeItem.number}
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[0.68rem]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-[#496987]
                    "
                  >
                    {activeItem.step}
                  </span>
                </div>
              </div>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[1.5rem]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-[#0B2A52]
                "
              >
                {activeItem.title}
              </h3>

              <p
                className="
                  mt-3
                  text-[0.86rem]
                  leading-[1.6]
                  text-[#536C84]
                "
              >
                {activeItem.description}
              </p>

              <div
                className="
                  mt-5
                  grid
                  grid-cols-2
                  gap-2
                "
              >
                {activeItem.focus.map((focus) => (
                  <div
                    key={focus}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-[0.8rem]
                      border
                      border-[#C5D7E7]
                      bg-white
                      px-3
                      py-2.5
                    "
                  >
                    <Check
                      size={12}
                      strokeWidth={2}
                      className="
                        shrink-0
                        text-[#0B2A52]
                      "
                    />

                    <span
                      className="
                        text-[0.73rem]
                        text-[#526C84]
                      "
                    >
                      {focus}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* =====================================================
            FINAL MESSAGE
        ===================================================== */}

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
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
          }}
          className="
            mx-auto
            mt-14
            max-w-[900px]
            text-center
            lg:mt-16
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#B88758]" />

            <span
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#A56C38]
              "
            >
              One Connected Process
            </span>

            <span className="h-px w-10 bg-[#B88758]" />
          </div>

          <p
            className="
              mx-auto
              mt-5
              max-w-[850px]
              font-serif
              text-[1.4rem]
              font-medium
              leading-[1.4]
              tracking-[-0.025em]
              text-[#0B2A52]

              sm:text-[1.6rem]
              lg:text-[1.8rem]
            "
          >
            Understand what matters. Define your position. Build the system.
            Create something useful. Connect the journey.{" "}
            <span
              className="
                font-normal
                italic
                text-[#B88758]
              "
            >
              Keep improving.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}