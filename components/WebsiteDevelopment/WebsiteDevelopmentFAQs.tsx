"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Globe2,
  HelpCircle,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "What does a website development company do?",
    answer:
      "A website development company plans and builds the technical experience behind a website.\n\nDepending on the project, this can include strategy, information architecture, frontend development, responsive implementation, CMS integration, forms, APIs, performance optimization, testing and deployment.",
  },
  {
    question:
      "What is the difference between web design and web development?",
    answer:
      "Web design focuses on how the website is organized, presented and experienced by users.\n\nWeb development turns that design into a functional digital product through code, systems and integrations.\n\nStrong website projects usually require the two disciplines to work together.",
  },
  {
    question:
      "Does Sharp Rays provide both website design and development?",
    answer:
      "Yes.\n\nDepending on the project scope, Sharp Rays can support website strategy, UX/UI design and development as one connected process.\n\nThe exact responsibilities are defined before work begins.",
  },
  {
    question: "Do you build custom websites?",
    answer:
      "Yes.\n\nWhere a project requires a tailored experience, we can develop custom page structures, reusable components, interactions and functionality around the needs of the business.",
  },
  {
    question: "Do you develop Next.js websites?",
    answer:
      "Yes.\n\nNext.js can be used for suitable Sharp Rays projects where its component architecture, rendering options and modern frontend capabilities align with the website requirements.\n\nThe technology is selected according to the project rather than used automatically for every website.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Responsive development is part of modern website delivery.\n\nLayouts, navigation, content and interactions should adapt across relevant screen sizes so important functionality remains usable on mobile, tablet and desktop devices.",
  },
  {
    question: "Will the website be SEO-friendly?",
    answer:
      "We can build the website with a technical SEO foundation including crawlable content, semantic structure, internal linking considerations, metadata implementation and other agreed technical requirements.\n\nHowever, development alone does not guarantee search rankings.\n\nOngoing organic visibility also depends on content, competition, authority, relevance and wider SEO activity.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes.\n\nBefore recommending a complete rebuild, we assess what is working, what is limiting the experience and what can reasonably be preserved.\n\nThe right approach may be redesign, redevelopment or a more focused set of improvements.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "That depends on the website architecture and project requirements.\n\nWhere regular client-managed updates are required, an appropriate content management workflow can be included in the scope.",
  },
  {
    question: "Can you integrate forms, CRM tools or external platforms?",
    answer:
      "Yes, where technically suitable.\n\nIntegrations can be included depending on the platform, API availability, authentication requirements and agreed development scope.",
  },

 
 
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WebsiteDevelopmentFAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);

  const reduceMotion = Boolean(useReducedMotion());

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\n\n/g, " "),
      },
    })),
  };

  return (
    <section
      id="website-development-faqs"
      aria-labelledby="website-development-faq-heading"
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
          FAQ SCHEMA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="
            absolute
            -left-52
            top-[7%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#EAF3F9]/70

            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-48
            top-[32%]

            h-[450px]
            w-[450px]

            rounded-full

            bg-[#F3EADF]/50

            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            left-[28%]

            h-[560px]
            w-[720px]

            rounded-full

            bg-[#EDF4F9]/55

            blur-[150px]
          "
        />

        {/* subtle grid */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.18]

            [background-image:linear-gradient(to_right,#0B2A5208_1px,transparent_1px),linear-gradient(to_bottom,#0B2A5208_1px,transparent_1px)]
            [background-size:92px_92px]
          "
        />

        {/* top separator */}

        <div
          className="
            absolute
            inset-x-0
            top-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-[#0B2A52]/10
            to-transparent
          "
        />

        {/* circles */}

        <div
          className="
            absolute
            -right-[230px]
            top-[130px]

            h-[470px]
            w-[470px]

            rounded-full

            border
            border-[#8EB7D4]/20
          "
        />

        <div
          className="
            absolute
            -right-[165px]
            top-[195px]

            h-[340px]
            w-[340px]

            rounded-full

            border
            border-[#B79A72]/20
          "
        />
      </div>

      <div
        className="
          mx-auto
          w-full
          max-w-[1380px]

          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            grid
            gap-9

            lg:grid-cols-[1fr_0.65fr]
            lg:items-end
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div>
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -24,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                ease,
              }}
              className="
                mb-6
                flex
                items-center
                gap-4
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
                  text-[0.61rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]

                  text-[#B79A72]

                  sm:text-[0.66rem]
                "
              >
                Website Development FAQs
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
            </motion.div>

            <motion.h2
              id="website-development-faq-heading"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 28,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.05,
                ease,
              }}
              className="
                max-w-[760px]

                font-serif
                text-[2.1rem]
                font-normal
                leading-[1.04]
                tracking-[-0.04em]

                text-[#0B2A52]

                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Questions Before{" "}
              <span
                className="
                  font-serif
                  font-normal
                  italic

                  text-[#A97C52]
                "
              >
                We Build?
              </span>
            </motion.h2>
          </div>

          {/* =================================================
              RIGHT
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 28,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="lg:pb-1"
          >
            

            
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP FAQ EXPERIENCE
        ===================================================== */}

        <div
          className="
            mt-14

            hidden
            gap-6

            lg:grid
            lg:grid-cols-[1.08fr_0.92fr]
            lg:items-start
          "
        >
          {/* =================================================
              QUESTION DIRECTORY
          ================================================= */}

          <div
            className="
              overflow-hidden

              rounded-[28px]

              border
              border-[#C8D8E3]

              bg-white

              shadow-[0_18px_60px_rgba(11,42,82,0.05)]
            "
          >
            {/* DIRECTORY HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-5

                border-b
                border-[#E2E9EF]

                bg-[#F8FAFC]

                px-7
                py-5
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    grid
                    h-9
                    w-9
                    place-items-center

                    rounded-[12px]

                    border
                    border-[#CDDCE7]

                    bg-white

                    text-[#0B2A52]
                  "
                >
                  <HelpCircle size={16} strokeWidth={1.7} />
                </span>

                <div>
                  <p
                    className="
                      text-[0.49rem]
                      font-semibold
                      uppercase
                      tracking-[0.17em]

                      text-[#8B9DAC]
                    "
                  >
                    Browse Questions
                  </p>

                  <p
                    className="
                      mt-0.5

                      text-[0.75rem]
                      font-medium

                      text-[#315470]
                    "
                  >
                    Choose a question to read the full answer.
                  </p>
                </div>
              </div>

             
            </div>

            {/* QUESTIONS */}

            {faqs.map((faq, index) => {
              const active = activeIndex === index;

              return (
                <motion.button
                  key={faq.question}
                  type="button"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -16,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion
                      ? 0
                      : Math.min((index % 5) * 0.035, 0.14),
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={active}
                  className={`
                    group
                    relative

                    flex
                    w-full
                    items-center
                    gap-5

                    border-b
                    border-[#E5EBF0]

                    px-6
                    py-5

                    text-left

                    transition-all
                    duration-300

                    last:border-b-0

                    sm:px-7

                    ${
                      active
                        ? "bg-[#F4F8FB]"
                        : "bg-white hover:bg-[#FAFCFD]"
                    }
                  `}
                >
                  {/* ACTIVE LINE */}

                  <motion.span
                    animate={{
                      scaleY: active ? 1 : 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.3,
                    }}
                    className="
                      absolute
                      left-0
                      top-0

                      h-full
                      w-[3px]

                      origin-top

                      bg-gradient-to-b
                      from-[#0B2A52]
                      to-[#B79A72]
                    "
                  />

                  {/* NUMBER */}

                  <span
                    className={`
                      w-8
                      shrink-0

                      font-serif
                      text-[0.76rem]

                      transition-colors
                      duration-300

                      ${
                        active
                          ? "text-[#A97C52]"
                          : "text-[#A2AFBA]"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* QUESTION */}

                  <span
                    className={`
                      flex-1

                      text-[0.92rem]
                      font-semibold
                      leading-[1.45]
                      tracking-[-0.015em]

                      transition-all
                      duration-300

                      ${
                        active
                          ? "translate-x-1 text-[#0B2A52]"
                          : "text-[#456079]"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* ACTION */}

                  <span
                    className={`
                      grid
                      h-9
                      w-9
                      shrink-0
                      place-items-center

                      rounded-full

                      border

                      transition-all
                      duration-300

                      ${
                        active
                          ? `
                            border-[#0B2A52]
                            bg-[#0B2A52]
                            text-white
                          `
                          : `
                            border-[#D7E2EA]
                            bg-white
                            text-[#7890A5]

                            group-hover:border-[#B8CAD7]
                          `
                      }
                    `}
                  >
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.7}
                      className={`
                        transition-transform
                        duration-300

                        ${
                          active
                            ? "translate-x-[1px] -translate-y-[1px]"
                            : ""
                        }
                      `}
                    />
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* =================================================
              STICKY ANSWER PANEL
          ================================================= */}

          <div
            className="
              sticky
              top-28

              overflow-hidden

              rounded-[30px]

              border
              border-[#BDD0DE]

              bg-gradient-to-br
              from-[#F2F7FA]
              via-white
              to-[#FCF8F3]

              shadow-[0_26px_80px_rgba(11,42,82,0.08)]
            "
          >
            {/* BLUE GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24

                h-[300px]
                w-[300px]

                rounded-full

                bg-[#D8E8F3]/75

                blur-[80px]
              "
            />

            {/* GOLD GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-28
                -left-20

                h-[280px]
                w-[280px]

                rounded-full

                bg-[#F0DFCC]/60

                blur-[90px]
              "
            />

            {/* DECORATIVE QUESTION MARK */}

            <span
              className="
                pointer-events-none
                absolute
                -right-2
                -top-9

                font-serif
                text-[180px]
                font-medium
                leading-none

                text-[#0B2A52]/[0.032]
              "
            >
              ?
            </span>

            <div
              className="
                relative

                flex
                min-h-[610px]
                flex-col

                p-9

                xl:p-11
              "
            >
              {/* =========================================
                  META
              ========================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      grid
                      h-10
                      w-10
                      place-items-center

                      rounded-[14px]

                      bg-[#0B2A52]

                      text-white

                      shadow-[0_9px_25px_rgba(11,42,82,0.18)]
                    "
                  >
                    <Sparkles size={16} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[0.49rem]
                        font-semibold
                        uppercase
                        tracking-[0.2em]

                        text-[#92745C]
                      "
                    >
                      Straight Answer
                    </p>

                    <p
                      className="
                        mt-0.5

                        text-[0.7rem]

                        text-[#7890A4]
                      "
                    >
                      Website Development FAQ
                    </p>
                  </div>
                </div>

                <span
                  className="
                    font-serif
                    text-[1rem]

                    text-[#879AA9]
                  "
                >
                  {String(activeIndex + 1).padStart(2, "0")}

                  <span className="text-[#BAC5CE]">
                    {" "}
                    / {faqs.length}
                  </span>
                </span>
              </div>

              {/* =========================================
                  ACTIVE ANSWER
              ========================================= */}

              <div
                className="
                  flex
                  flex-1
                  items-center

                  py-10
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 18,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: -10,
                          }
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.38,
                      ease,
                    }}
                  >
                    <p
                      className="
                        text-[0.51rem]
                        font-semibold
                        uppercase
                        tracking-[0.19em]

                        text-[#71899D]
                      "
                    >
                      Question {String(activeIndex + 1).padStart(2, "0")}
                    </p>

                    <h3
                      className="
                        mt-4
                        max-w-[500px]

                        font-serif
                        text-[1.85rem]
                        font-normal
                        leading-[1.18]
                        tracking-[-0.035em]

                        text-[#0B2A52]

                        xl:text-[2.1rem]
                      "
                    >
                      {faqs[activeIndex].question}
                    </h3>

                    <motion.div
                      initial={{
                        width: reduceMotion ? 48 : 0,
                      }}
                      animate={{
                        width: 48,
                      }}
                      transition={{
                        duration: 0.45,
                        ease,
                      }}
                      className="
                        mt-7

                        h-px

                        bg-[#B79A72]
                      "
                    />

                    <div
                      className="
                        mt-7
                        max-w-[520px]

                        whitespace-pre-line

                        font-serif
                        text-[0.91rem]
                        leading-[1.8]

                        text-[#556E85]
                      "
                    >
                      {faqs[activeIndex].answer}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* =========================================
                  BOTTOM
              ========================================= */}

              <div
                className="
                  flex
                  items-end
                  justify-between
                  gap-6

                  border-t
                  border-[#DDE7EE]

                  pt-6
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      grid
                      h-8
                      w-8
                      place-items-center

                      rounded-full

                      border
                      border-[#CBDDE8]

                      bg-white

                      text-[#0B2A52]
                    "
                  >
                    <Code2 size={13} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[0.47rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]

                        text-[#899BAB]
                      "
                    >
                      Clear Before We Build
                    </p>

                    <p
                      className="
                        mt-0.5

                        text-[0.7rem]
                        font-medium

                        text-[#45647D]
                      "
                    >
                      Scope, technology and responsibilities defined upfront.
                    </p>
                  </div>
                </div>

                <span
                  className="
                    font-serif
                    text-[2.8rem]
                    italic
                    leading-none

                    text-[#B79A72]/65
                  "
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET ACCORDION
        ===================================================== */}

        <div
          className="
            mt-12

            overflow-hidden

            rounded-[26px]

            border
            border-[#C8D8E3]

            bg-white

            shadow-[0_18px_55px_rgba(11,42,82,0.05)]

            lg:hidden
          "
        >
          {faqs.map((faq, index) => {
            const open = mobileOpenIndex === index;

            return (
              <motion.div
                key={faq.question}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.48,
                }}
                className="
                  border-b
                  border-[#E3EAF0]

                  last:border-b-0
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    setMobileOpenIndex(open ? null : index)
                  }
                  aria-expanded={open}
                  className={`
                    relative

                    flex
                    w-full
                    items-center
                    gap-4

                    px-5
                    py-5

                    text-left

                    transition-colors
                    duration-300

                    sm:px-6

                    ${
                      open
                        ? "bg-[#F4F8FB]"
                        : "bg-white"
                    }
                  `}
                >
                  {/* LEFT ACTIVE LINE */}

                  {open && (
                    <span
                      className="
                        absolute
                        left-0
                        top-0

                        h-full
                        w-[3px]

                        bg-gradient-to-b
                        from-[#0B2A52]
                        to-[#B79A72]
                      "
                    />
                  )}

                  {/* NUMBER */}

                  <span
                    className={`
                      w-7
                      shrink-0

                      font-serif
                      text-[0.72rem]

                      ${
                        open
                          ? "text-[#A97C52]"
                          : "text-[#9BA9B6]"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* QUESTION */}

                  <span
                    className={`
                      flex-1

                      text-[0.89rem]
                      font-semibold
                      leading-[1.45]

                      ${
                        open
                          ? "text-[#0B2A52]"
                          : "text-[#455F77]"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* PLUS / MINUS */}

                  <span
                    className={`
                      grid
                      h-8
                      w-8
                      shrink-0
                      place-items-center

                      rounded-full

                      border

                      transition-all
                      duration-300

                      ${
                        open
                          ? `
                            border-[#0B2A52]
                            bg-[#0B2A52]
                            text-white
                          `
                          : `
                            border-[#D5E1E9]
                            bg-white
                            text-[#7790A5]
                          `
                      }
                    `}
                  >
                    {open ? (
                      <Minus size={13} strokeWidth={1.8} />
                    ) : (
                      <Plus size={13} strokeWidth={1.8} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={
                        reduceMotion
                          ? false
                          : {
                              height: 0,
                              opacity: 0,
                            }
                      }
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={
                        reduceMotion
                          ? undefined
                          : {
                              height: 0,
                              opacity: 0,
                            }
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                        ease,
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                          bg-gradient-to-br
                          from-[#F8FAFC]
                          to-[#FCF8F4]

                          px-5
                          pb-6
                          pt-2

                          sm:px-6
                        "
                      >
                        <div
                          className="
                            ml-11

                            h-px
                            w-9

                            bg-[#B79A72]
                          "
                        />

                        <p
                          className="
                            ml-11
                            mt-4

                            whitespace-pre-line

                            font-serif
                            text-[0.84rem]
                            leading-[1.75]

                            text-[#586F84]
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}