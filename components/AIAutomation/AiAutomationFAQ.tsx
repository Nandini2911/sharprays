"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  CircleHelp,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type FAQ = {
  number: string;
  question: string;
  answer: string[];
};

const faqs: FAQ[] = [
  {
    number: "01",
    question: "What is AI automation?",
    answer: [
      "AI automation combines artificial intelligence with workflow automation to help complete or coordinate business tasks with less manual intervention.",
      "It can be used to interpret information, classify requests, generate or summarize content, update systems and trigger actions within defined workflows.",
    ],
  },
  {
    number: "02",
    question:
      "What is the difference between AI automation and traditional automation?",
    answer: [
      'Traditional automation usually follows predefined rules such as “when this happens, do that.”',
      "AI-enabled automation can also help interpret less structured information such as text, documents or customer requests before deciding which predefined action should follow.",
      "The right workflow may use both approaches together.",
    ],
  },
  {
    number: "03",
    question: "What business processes can be automated?",
    answer: [
      "Common opportunities can include lead capture, CRM updates, customer support routing, follow-ups, reporting, document processing, internal notifications, marketing workflows and recurring administrative tasks.",
      "The best opportunities depend on how your business currently operates.",
    ],
  },
  {
    number: "04",
    question: "What is workflow automation?",
    answer: [
      "Workflow automation connects triggers and actions so a process can move between steps with less manual coordination.",
      "For example, a new website enquiry could trigger CRM creation, lead classification, assignment, acknowledgement and follow-up tasks automatically.",
    ],
  },
  {
    number: "05",
    question: "What is an AI agent?",
    answer: [
      "An AI agent is a software-based system designed to use information, reasoning and tools to perform defined tasks towards an objective.",
      "In business workflows, an agent may retrieve information, interpret requests, prepare outputs or trigger approved actions.",
      "The level of autonomy should depend on the task and associated risk.",
    ],
  },
  {
    number: "06",
    question: "Can AI automate lead qualification?",
    answer: [
      "Yes.",
      "A workflow can collect lead information, categorize enquiries, compare them with defined criteria, update the CRM and route suitable opportunities to the appropriate person.",
      "Important commercial decisions can remain with the sales team.",
    ],
  },
  {
    number: "07",
    question: "Can you automate our CRM?",
    answer: [
      "CRM workflows can often be automated around lead creation, updates, assignment, follow-up tasks, pipeline stages and internal notifications.",
      "The exact possibilities depend on the CRM and available integrations.",
    ],
  },
  {
    number: "08",
    question: "Can AI automate customer support?",
    answer: [
      "AI can support customer service by classifying requests, retrieving approved information, preparing responses, summarizing conversations and routing tickets.",
      "Sensitive or complex issues should still be escalated appropriately.",
    ],
  },
  {
    number: "09",
    question: "Can automation connect different business tools?",
    answer: [
      "Often, yes.",
      "Systems can be connected where suitable APIs, integrations or other supported methods are available.",
      "Technical feasibility depends on the platforms involved.",
    ],
  },
  {
    number: "10",
    question: "Do we need to replace our existing software?",
    answer: [
      "Usually not.",
      "Many automation projects focus on connecting and improving the systems a business already uses rather than replacing everything.",
      "The existing technology should be reviewed before recommending changes.",
    ],
  },
  {
    number: "11",
    question: "Is AI automation secure?",
    answer: [
      "Security depends on the systems, architecture, permissions, data and implementation.",
      "Any automation that handles sensitive business information should be designed around appropriate access controls and data-handling requirements.",
      "Security should be evaluated for the actual workflow rather than assumed simply because a particular technology is being used.",
    ],
  },
  {
    number: "12",
    question: "Will AI automation replace our employees?",
    answer: [
      "The purpose of most business automation is to reduce repetitive work and improve process consistency.",
      "It can change how certain tasks are completed, but many workflows still require people for judgement, exceptions, relationships, creativity and accountability.",
    ],
  },
  {
    number: "13",
    question: "How do you decide what should be automated?",
    answer: [
      "We look for processes that are repetitive, rule-driven, time-consuming, error-prone or dependent on unnecessary manual handoffs.",
      "We also consider risk, complexity, frequency and the value of keeping a person involved.",
    ],
  },
  {
    number: "14",
    question: "Can you automate a process that uses spreadsheets?",
    answer: [
      "Potentially.",
      "Spreadsheet-based workflows are common automation candidates, especially when information needs to move between forms, spreadsheets, CRM systems or reporting tools.",
      "The right implementation depends on the role the spreadsheet currently plays.",
    ],
  },
  {
    number: "15",
    question: "Can AI automation help small businesses?",
    answer: [
      "Yes.",
      "Small businesses can benefit when automation removes recurring administrative work or improves response times without requiring additional manual coordination.",
      "The automation should still be proportionate to the size and complexity of the process.",
    ],
  },
  {
    number: "16",
    question: "How much does AI automation cost?",
    answer: [
      "Pricing depends on the number of workflows, systems involved, AI requirements, integrations, business logic, data complexity, testing and ongoing support.",
      "We define the process and technical scope before confirming commercial terms.",
    ],
  },
  {
    number: "17",
    question: "How long does an automation project take?",
    answer: [
      "Timeline depends on workflow complexity, integrations, access requirements, testing and the number of exceptions that need to be handled.",
      "A focused workflow may be significantly simpler than a multi-system automation program.",
      "The project timeline is defined after discovery.",
    ],
  },
  {
    number: "18",
    question: "Can AI automation improve business efficiency?",
    answer: [
      "It can improve efficiency when applied to processes where repetitive work, waiting or manual coordination creates unnecessary friction.",
      "The value should be measured against real operational outcomes such as time saved, faster responses or fewer manual steps rather than the fact that AI was used.",
    ],
  },
];

/* =========================================================
   FAQ ITEM
========================================================= */

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
  reduceMotion,
}: {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      id={`faq-${faq.number}`}
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
        amount: 0.2,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : Math.min(index * 0.025, 0.14),
        ease,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        transition-all
        duration-300

        ${
          isOpen
            ? "border-[#BFD6E5] bg-[linear-gradient(145deg,#FFFFFF_0%,#F4F9FC_58%,#EDF6FA_100%)] shadow-[0_16px_38px_rgba(11,42,82,0.055)]"
            : "border-[#DCE6ED] bg-white hover:border-[#C4D9E6] hover:shadow-[0_10px_30px_rgba(11,42,82,0.04)]"
        }
      `}
    >
      {/* OPEN STATE SOFT GLOW */}

      {isOpen && (
        <>
          <div
            className="
              pointer-events-none
              absolute
              -right-[90px]
              -top-[100px]
              h-[230px]
              w-[230px]
              rounded-full
              bg-white/80
              blur-[40px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[120px]
              right-[10%]
              h-[200px]
              w-[260px]
              rounded-full
              bg-[#CAE2F0]/35
              blur-[55px]
            "
          />
        </>
      )}

      {/* QUESTION */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.number}`}
        className="
          relative
          z-10
          grid
          w-full
          grid-cols-[48px_1fr_42px]
          items-center
          gap-4
          px-5
          py-5
          text-left

          sm:grid-cols-[58px_1fr_46px]
          sm:gap-5
          sm:px-6
          sm:py-6

          lg:px-7
        "
      >
        {/* NUMBER */}

        <span
          style={newYorkFont}
          className={`
            flex
            h-[46px]
            w-[46px]
            items-center
            justify-center
            rounded-full
            border
            text-[13px]
            transition-all
            duration-300

            sm:h-[52px]
            sm:w-[52px]

            ${
              isOpen
                ? "border-[#B18458]/35 bg-[#FCF8F3] text-[#B18458]"
                : "border-[#D4E2EB] bg-[#F5F9FB] text-[#0B2A52]"
            }
          `}
        >
          {faq.number}
        </span>

        {/* QUESTION TEXT */}

        <h3
          style={newYorkFont}
          className="
            pr-2
            text-[1.12rem]
            font-light
            leading-[1.15]
            tracking-[-0.025em]
            text-[#0B2A52]

            sm:text-[1.25rem]
            lg:text-[1.35rem]
          "
        >
          {faq.question}
        </h3>

        {/* TOGGLE */}

        <span
          className={`
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300

            ${
              isOpen
                ? "rotate-180 border-[#0B2A52] bg-[#0B2A52] text-white"
                : "border-[#D0DFE8] bg-white text-[#0B2A52] group-hover:border-[#B18458]/45"
            }
          `}
        >
          <ChevronDown
            size={17}
            strokeWidth={1.45}
          />
        </span>
      </button>

      {/* ANSWER */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.number}`}
            initial={
              reduceMotion
                ? { opacity: 1 }
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
                ? { opacity: 0 }
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.4,
              ease,
            }}
            className="overflow-hidden"
          >
            <div
              className="
                relative
                z-10
                grid
                grid-cols-[48px_1fr_42px]
                gap-4
                px-5
                pb-6

                sm:grid-cols-[58px_1fr_46px]
                sm:gap-5
                sm:px-6
                sm:pb-7

                lg:px-7
              "
            >
              <div />

              <div
                className="
                  border-t
                  border-[#0B2A52]/10
                  pt-5
                "
              >
                <div
                  className="
                    max-w-[760px]
                    space-y-3
                  "
                >
                  {faq.answer.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      style={newYorkFont}
                      className={`
                        text-[11px]
                        leading-[1.72]

                        sm:text-[12px]

                        ${
                          paragraph === "Yes." ||
                          paragraph === "Often, yes." ||
                          paragraph === "Usually not." ||
                          paragraph === "Potentially."
                            ? "font-medium text-[#0B2A52]"
                            : "text-[#536D85]"
                        }
                      `}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* ANSWER DETAIL */}

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
                      h-[5px]
                      w-[5px]
                      rounded-full
                      bg-[#B18458]
                    "
                  />

                  <span
                    style={newYorkFont}
                    className="
                      text-[6px]
                      uppercase
                      tracking-[0.29em]
                      text-[#0B2A52]/40
                    "
                  >
                    AI Automation · Sharp Rays
                  </span>
                </div>
              </div>

              <div />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function AiAutomationFAQ() {
  const reduceMotion = Boolean(useReducedMotion());

  const [openItems, setOpenItems] = useState<number[]>([0]);

  const allOpen = openItems.length === faqs.length;

  const toggleFAQ = (index: number) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  const toggleAll = () => {
    setOpenItems(allOpen ? [] : faqs.map((_, index) => index));
  };

  return (
    <section
      id="ai-automation-faq"
      aria-labelledby="ai-automation-faq-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[300px]
          h-[900px]
          w-[1500px]
          -translate-x-1/2
          rounded-[50%]
          bg-[radial-gradient(circle_at_center,#F0F7FB_0%,#FAFCFD_48%,rgba(255,255,255,0)_73%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[320px]
          top-[720px]
          h-[650px]
          w-[650px]
          rounded-full
          border
          border-[#E6EEF3]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[330px]
          top-[260px]
          h-[680px]
          w-[680px]
          rounded-full
          border
          border-[#E8EFF4]
        "
      />

      {/* =====================================================
          WRAPPER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* =====================================================
            HEADER
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
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            max-w-[1040px]
            text-center
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
            <span className="h-px w-12 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.36em]
                text-[#B18458]

                sm:text-[10px]
              "
            >
              AI Automation FAQs
            </span>

            <span className="h-px w-12 bg-[#C6A77A]" />
          </div>

          <h2
            id="ai-automation-faq-heading"
            style={newYorkFont}
            className="
              mt-6
              text-[2.1rem]
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
            Questions Before{" "}
            <span className="text-[#B18458]">
              We Automate?
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[680px]
              text-[13px]
              leading-[1.65]
              text-[#536D85]

              sm:text-[14px]
            "
          >
            Straightforward answers about AI automation, workflows,
            integrations, security, implementation and where human judgement
            still matters.
          </p>
        </motion.div>

        {/* =====================================================
            FAQ BODY
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-16
            grid
            max-w-[1320px]
            gap-8

            lg:grid-cols-[300px_minmax(0,1fr)]
            lg:items-start
            lg:gap-12

            xl:grid-cols-[330px_minmax(0,1fr)]
            xl:gap-16
          "
        >
          {/* =================================================
              LEFT INDEX
          ================================================= */}

          <motion.aside
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
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="
              relative

              lg:sticky
              lg:top-[120px]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-[#C9DDE8]
                bg-[linear-gradient(150deg,#FFFFFF_0%,#F3F8FB_60%,#EAF4F9_100%)]
                p-6
                shadow-[0_18px_45px_rgba(11,42,82,0.05)]

                lg:p-7
              "
            >
              {/* GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[80px]
                  -top-[90px]
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-white
                  blur-[45px]
                "
              />

              {/* ICON */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-[56px]
                  w-[56px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C4DAE7]
                  bg-white
                  text-[#0B2A52]
                  shadow-[0_9px_24px_rgba(11,42,82,0.06)]
                "
              >
                <CircleHelp
                  size={22}
                  strokeWidth={1.4}
                />
              </div>

              <span
                style={newYorkFont}
                className="
                  relative
                  z-10
                  mt-7
                  block
                  text-[7px]
                  uppercase
                  tracking-[0.32em]
                  text-[#B18458]
                "
              >
                FAQ Index
              </span>

              <h3
                style={newYorkFont}
                className="
                  relative
                  z-10
                  mt-3
                  text-[1.8rem]
                  font-light
                  leading-[1]
                  tracking-[-0.045em]
                  text-[#0B2A52]
                "
              >
                18 Questions.
                <br />
                Clear Answers.
              </h3>

              <p
                style={newYorkFont}
                className="
                  relative
                  z-10
                  mt-4
                  text-[10.5px]
                  leading-[1.65]
                  text-[#536D85]
                "
              >
                Explore the questions businesses commonly ask before
                introducing AI automation into their workflows.
              </p>

              {/* INDEX NUMBER GRID */}

              <div
                className="
                  relative
                  z-10
                  mt-7
                  grid
                  grid-cols-6
                  gap-2
                "
              >
                {faqs.map((faq, index) => {
                  const active = openItems.includes(index);

                  return (
                    <button
                      key={faq.number}
                      type="button"
                      onClick={() => {
                        document
                          .getElementById(`faq-${faq.number}`)
                          ?.scrollIntoView({
                            behavior: reduceMotion ? "auto" : "smooth",
                            block: "center",
                          });

                        if (!active) {
                          setOpenItems((current) => [
                            ...current,
                            index,
                          ]);
                        }
                      }}
                      aria-label={`Go to question ${faq.number}`}
                      className={`
                        flex
                        aspect-square
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-[8px]
                        transition-all
                        duration-300

                        ${
                          active
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                            : "border-[#CDDEE8] bg-white/75 text-[#0B2A52] hover:border-[#B18458]/50"
                        }
                      `}
                      style={newYorkFont}
                    >
                      {faq.number}
                    </button>
                  );
                })}
              </div>

              {/* EXPAND ALL */}

              <button
                type="button"
                onClick={toggleAll}
                className="
                  group
                  relative
                  z-10
                  mt-7
                  flex
                  h-[48px]
                  w-full
                  items-center
                  justify-between
                  rounded-full
                  border
                  border-[#C5D9E6]
                  bg-white
                  pl-5
                  pr-2
                  text-[#0B2A52]
                  shadow-[0_6px_20px_rgba(11,42,82,0.035)]
                  transition-all
                  duration-300

                  hover:border-[#B18458]/45
                  hover:shadow-[0_9px_24px_rgba(11,42,82,0.06)]
                "
              >
                <span
                  style={newYorkFont}
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                  "
                >
                  {allOpen
                    ? "Collapse All"
                    : "View All Answers"}
                </span>

                <span
                  className="
                    flex
                    h-[34px]
                    w-[34px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F1F7FB]
                  "
                >
                  {allOpen ? (
                    <Minus
                      size={14}
                      strokeWidth={1.5}
                    />
                  ) : (
                    <Plus
                      size={14}
                      strokeWidth={1.5}
                    />
                  )}
                </span>
              </button>

              {/* MICROCOPY */}

              <div
                className="
                  relative
                  z-10
                  mt-7
                  flex
                  items-center
                  gap-3
                  border-t
                  border-[#0B2A52]/10
                  pt-5
                "
              >
                <Sparkles
                  size={13}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#B18458]"
                />

                <span
                  style={newYorkFont}
                  className="
                    text-[6px]
                    uppercase
                    leading-[1.7]
                    tracking-[0.27em]
                    text-[#0B2A52]/45
                  "
                >
                  STRATEGY · SYSTEMS
                  <br />
                  CONTROL · IMPROVEMENT
                </span>
              </div>
            </div>
          </motion.aside>

          {/* =================================================
              RIGHT QUESTIONS
          ================================================= */}

          <div className="min-w-0">
            {/* TOP TOOLBAR */}

            <div
              className="
                mb-5
                flex
                items-center
                justify-between
                gap-6
                px-1
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.31em]
                  text-[#0B2A52]/45
                "
              >
                Select a question to reveal the answer
              </span>

              <span
                style={newYorkFont}
                className="
                  hidden
                  text-[7px]
                  uppercase
                  tracking-[0.28em]
                  text-[#B18458]

                  sm:block
                "
              >
                01 — 18
              </span>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.number}
                  faq={faq}
                  index={index}
                  isOpen={openItems.includes(index)}
                  onToggle={() => toggleFAQ(index)}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            {/* =================================================
                END CAP
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 16,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                ease,
              }}
              className="
                mt-5
                flex
                flex-col
                gap-5
                rounded-[24px]
                border
                border-[#C9DDE8]
                bg-[#F3F8FB]
                px-6
                py-6

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <span
                  style={newYorkFont}
                  className="
                    text-[6px]
                    uppercase
                    tracking-[0.3em]
                    text-[#B18458]
                  "
                >
                  STILL HAVE A QUESTION?
                </span>

                <p
                  style={newYorkFont}
                  className="
                    mt-2
                    text-[1.25rem]
                    font-light
                    tracking-[-0.03em]
                    text-[#0B2A52]
                  "
                >
                  Talk through the workflow before you automate it.
                </p>
              </div>

              <a
                href="/contact"
                className="
                  group
                  flex
                  h-[48px]
                  shrink-0
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0B2A52]
                  px-5
                  text-white
                  shadow-[0_10px_26px_rgba(11,42,82,0.14)]
                "
              >
                <span
                  style={newYorkFont}
                  className="text-[9px]"
                >
                  Talk to Sharp Rays
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FAQ STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer.join(" "),
              },
            })),
          }),
        }}
      />
    </section>
  );
}