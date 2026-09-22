"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  FolderKanban,
  HelpCircle,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "Is Sharp Rays a new agency?",
    answer:
      "Yes.\n\nSharp Rays is a growing digital agency building its portfolio project by project.\n\nOur work page includes real client work, internal projects and clearly identified concept work where relevant.",
  },
  {
    question: "Are all projects shown here client projects?",
    answer:
      "No.\n\nEach project should be labelled clearly.\n\nClient Work means the project was completed for a client.\n\nInternal Project means the work was created for Sharp Rays.\n\nConcept Project means the work was created independently to explore or demonstrate an idea.",
  },
  {
    question: "Why don't all projects show results or percentages?",
    answer:
      "Not every project has access to the same performance data.\n\nSome projects are also too new for meaningful long-term results.\n\nWhere reliable performance information exists and can be shared, we use it.\n\nWhere it does not, we avoid inventing figures.",
  },
  {
    question: "What kind of projects can Sharp Rays work on?",
    answer:
      "Sharp Rays works across website development, SEO, social media marketing, content marketing, performance marketing and AI video and editing.\n\nProjects can involve one discipline or combine several where the problem requires it.",
  },
  {
    question: "Can you work with an existing website?",
    answer:
      "Yes.\n\nA project does not always need to start from zero.\n\nDepending on the requirement, we can evaluate an existing website and focus on the areas that need improvement.",
  },
  {
    question: "Can Sharp Rays work with our internal team?",
    answer:
      "Yes.\n\nWe can work alongside existing marketing, content, design, development or leadership teams where responsibilities are clearly defined.",
  },
  {
    question: "Can we see a project similar to ours?",
    answer:
      "If relevant public work is available, we can show projects connected to a similar type of challenge.\n\nAs the Sharp Rays portfolio grows, more examples will be added to this page.",
  },
];

/* =========================================================
   SECTION
========================================================= */

export default function WorkFAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);

  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  /* =========================================================
     FAQ SCHEMA
  ========================================================= */

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
      id="work-faqs"
      aria-labelledby="work-faq-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
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
            top-[8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#E5F1FA]/65
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-48
            top-[36%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#F1E4D7]/45
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-210px]
            left-[30%]
            h-[560px]
            w-[720px]
            rounded-full
            bg-[#E6F0F9]/45
            blur-[150px]
          "
        />

        {/* subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.15]
            [background-image:linear-gradient(to_right,#0B2A5208_1px,transparent_1px),linear-gradient(to_bottom,#0B2A5208_1px,transparent_1px)]
            [background-size:94px_94px]
          "
        />

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

        {/* right decorative rings */}
        <div
          className="
            absolute
            -right-[240px]
            top-[150px]
            h-[470px]
            w-[470px]
            rounded-full
            border
            border-[#8EB7D4]/18
          "
        />

        <div
          className="
            absolute
            -right-[175px]
            top-[215px]
            h-[340px]
            w-[340px]
            rounded-full
            border
            border-[#B79A72]/18
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
          {/* LEFT */}
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
                amount: 0.7,
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
              <span className="h-px w-9 bg-[#B79A72]" />

              <span
                className="
                  text-[0.66rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#35618E]
                  sm:text-[0.7rem]
                "
              >
                About Our Work
              </span>
            </motion.div>

            <motion.h2
              id="work-faq-heading"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.55,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: reduceMotion ? 0 : 0.05,
                ease,
              }}
              className="
                max-w-[760px]
                font-medium
                leading-[1.05]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Questions About{" "}
              <span
                className="
                  font-serif
                  font-normal
                  italic
                  tracking-[-0.02em]
                  text-[#B79A72]
                "
              >
                Sharp Rays Projects?
              </span>
            </motion.h2>
          </div>

          {/* RIGHT */}
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
              amount: 0.55,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="lg:pb-1"
          >
            <p
              className="
                max-w-[500px]
                text-[0.98rem]
                leading-[1.75]
                text-[#536C83]
                sm:text-[1rem]
                lg:ml-auto
              "
            >
              Clear answers about our portfolio, project labels, results,
              collaboration and the kinds of work Sharp Rays can support.
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
                lg:justify-end
              "
            >
              <span
                className="
                  grid
                  h-8
                  w-8
                  place-items-center
                  rounded-full
                  border
                  border-[#C9DCE9]
                  bg-[#EFF6FB]
                  text-[#0B2A52]
                "
              >
                <CheckCircle2 size={14} strokeWidth={1.8} />
              </span>

              <span
                className="
                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#73899D]
                "
              >
                Clear Context · Clear Answers
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP INTERACTIVE FAQ
        ===================================================== */}

        <div
          className="
            mt-14
            hidden
            gap-6
            lg:grid
            lg:grid-cols-[1.04fr_0.96fr]
            lg:items-start
          "
        >
          {/* =================================================
              QUESTIONS
          ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-[#C7D9E6]
              bg-white
              shadow-[0_18px_60px_rgba(11,42,82,0.05)]
            "
          >
            {/* QUESTION LIST HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#E2E9EF]
                bg-[#F8FBFD]
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
                    border-[#C9DCE9]
                    bg-white
                    text-[#0B2A52]
                  "
                >
                  <HelpCircle size={16} strokeWidth={1.7} />
                </span>

                <div>
                  <p
                    className="
                      text-[0.5rem]
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
                    Select a question to explore the answer.
                  </p>
                </div>
              </div>

              <span
                className="
                  rounded-full
                  border
                  border-[#D3E1EA]
                  bg-white
                  px-3
                  py-1.5
                  text-[0.48rem]
                  font-bold
                  tracking-[0.14em]
                  text-[#698196]
                "
              >
                07 QUESTIONS
              </span>
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
                          x: -18,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.45,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion
                      ? 0
                      : Math.min((index % 5) * 0.04, 0.16),
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
                        ? "bg-[#F3F9FD]"
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
                          ? "text-[#B79A72]"
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
                      text-[0.93rem]
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

                  {/* ARROW */}
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
                              group-hover:border-[#B5CAD9]
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
              border-[#B9D0E0]
              bg-gradient-to-br
              from-[#F2F9FD]
              via-white
              to-[#FCF7F2]
              shadow-[0_26px_80px_rgba(11,42,82,0.08)]
            "
          >
            {/* glows */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#CDE6F5]/70
                blur-[80px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-28
                -left-20
                h-[280px]
                w-[280px]
                rounded-full
                bg-[#EFDBC6]/55
                blur-[90px]
              "
            />

            {/* decorative number */}
            <span
              className="
                pointer-events-none
                absolute
                -right-2
                -top-10
                font-serif
                text-[180px]
                font-medium
                leading-none
                text-[#0B2A52]/[0.03]
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div
              className="
                relative
                flex
                min-h-[560px]
                flex-col
                p-9
                xl:p-11
              "
            >
              {/* TOP META */}
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
                      bg-gradient-to-br
                      from-[#0B2A52]
                      to-[#18538B]
                      text-white
                      shadow-[0_9px_25px_rgba(11,42,82,0.18)]
                    "
                  >
                    <FolderKanban size={16} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[0.5rem]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#A17A50]
                      "
                    >
                      Project Answer
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[0.7rem]
                        text-[#7890A4]
                      "
                    >
                      Sharp Rays Work FAQ
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
                    / 07
                  </span>
                </span>
              </div>

              {/* ANSWER */}
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
                        text-[0.52rem]
                        font-semibold
                        uppercase
                        tracking-[0.19em]
                        text-[#71899D]
                      "
                    >
                      Question{" "}
                      {String(activeIndex + 1).padStart(2, "0")}
                    </p>

                    <h3
                      className="
                        mt-4
                        max-w-[500px]
                        font-serif
                        text-[1.85rem]
                        font-semibold
                        leading-[1.18]
                        tracking-[-0.03em]
                        text-[#0B2A52]
                        xl:text-[2.1rem]
                      "
                    >
                      {faqs[activeIndex].question}
                    </h3>

                    <div
                      className="
                        mt-7
                        h-px
                        w-12
                        bg-[#B79A72]
                      "
                    />

                    <div
                      className="
                        mt-7
                        max-w-[520px]
                        whitespace-pre-line
                        text-[0.92rem]
                        leading-[1.8]
                        text-[#556E85]
                      "
                    >
                      {faqs[activeIndex].answer}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* BOTTOM */}
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
                      border-[#CBDEE9]
                      bg-white
                      text-[#0B2A52]
                    "
                  >
                    <BadgeCheck size={13} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[0.48rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#899BAB]
                      "
                    >
                      Clear Project Context
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[0.7rem]
                        font-medium
                        text-[#45647D]
                      "
                    >
                      Know what the work is before judging the work.
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
            border-[#C7D9E6]
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
                  amount: 0.25,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
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
                        ? "bg-[#F3F9FD]"
                        : "bg-white"
                    }
                  `}
                >
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

                  <span
                    className={`
                      w-7
                      shrink-0
                      font-serif
                      text-[0.72rem]

                      ${
                        open
                          ? "text-[#B79A72]"
                          : "text-[#9BA9B6]"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`
                      flex-1
                      text-[0.9rem]
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
                          from-[#F8FBFD]
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

        {/* =====================================================
            BOTTOM PRINCIPLE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
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
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-12
            max-w-[980px]
            overflow-hidden
            rounded-[24px]
            border
            border-[#BCD1E0]
            bg-gradient-to-r
            from-[#F4F9FD]
            via-white
            to-[#FCF7F2]
            px-6
            py-6
            shadow-[0_16px_50px_rgba(11,42,82,0.045)]
            sm:px-8
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-80px]
              h-[160px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-[#DDEEF9]/65
              blur-[60px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-center
              gap-4
              text-center
              sm:flex-row
              sm:text-left
            "
          >
            <span
              className="
                grid
                h-10
                w-10
                shrink-0
                place-items-center
                rounded-full
                bg-gradient-to-br
                from-[#0B2A52]
                to-[#176CA8]
                text-white
                shadow-[0_9px_25px_rgba(11,62,112,0.17)]
              "
            >
              <BriefcaseBusiness size={16} strokeWidth={1.7} />
            </span>

            <div className="flex-1">
              <p
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#8195A7]
                "
              >
                Work With Sharp Rays
              </p>

              <p
                className="
                  mt-1.5
                  text-[0.92rem]
                  font-medium
                  leading-[1.6]
                  text-[#365A77]
                "
              >
                Real work, clear project context and a growing portfolio built
                one project at a time.
              </p>
            </div>

            <span
              className="
                hidden
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#CBDDE8]
                bg-white
                text-[#0B2A52]
                sm:flex
              "
            >
              <ArrowRight size={14} strokeWidth={1.8} />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}