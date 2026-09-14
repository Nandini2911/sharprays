"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
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
    question: "What is performance marketing?",
    answer:
      "Performance marketing is a results-focused approach to digital advertising where campaigns are measured and optimized around defined outcomes such as leads, sales, enquiries, calls or other valuable actions.",
  },
  {
    question: "What does a performance marketing agency do?",
    answer:
      "A performance marketing agency can manage campaign strategy, paid search, paid social, audience targeting, advertising creative, conversion tracking, optimization and performance reporting.\n\nThe exact scope depends on the business, platforms and objectives.",
  },
  {
    question:
      "What is the difference between performance marketing and digital marketing?",
    answer:
      "Digital marketing is a broad category covering channels such as SEO, social media, content, email and paid advertising.\n\nPerformance marketing focuses specifically on measurable campaign activity and optimizing spend around defined outcomes.",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "Depending on the strategy and agreed scope, campaigns may include Google Ads, Meta Ads and other relevant paid media platforms.\n\nWe recommend platforms based on the audience, objective and available opportunity rather than trying to advertise everywhere.",
  },
  {
    question: "Do you manage Google Ads?",
    answer:
      "Yes.\n\nGoogle Ads management can be included within a Sharp Rays performance marketing plan, including relevant Search, Performance Max, YouTube, Display or other suitable campaign types.",
  },
  {
    question: "Do you manage Meta Ads?",
    answer:
      "Yes.\n\nFacebook and Instagram advertising can be included depending on your audience, campaign objective, creative requirements and agreed scope.",
  },
  {
    question: "How much should I spend on paid advertising?",
    answer:
      "There is no universal advertising budget.\n\nThe appropriate level depends on your market, audience size, customer value, competition, conversion rate, campaign objective and available growth opportunity.\n\nMedia spend is discussed separately from management fees.",
  },
  {
    question: "What is a conversion?",
    answer:
      "A conversion is a valuable action completed after someone interacts with your marketing.\n\nDepending on your business, this could be a purchase, lead form, phone call, booking, signup or another meaningful action.",
  },
  {
    question: "What is conversion tracking?",
    answer:
      "Conversion tracking measures the valuable actions generated after people interact with advertising.\n\nIt helps connect campaign activity with outcomes such as leads or purchases and provides better information for optimization.",
  },
  {
    question: "What is cost per lead?",
    answer:
      "Cost per lead, or CPL, is the amount of advertising spend required on average to generate a recorded lead.\n\nLead quality should be evaluated alongside CPL rather than judging campaign performance on cost alone.",
  },
  {
    question: "What is ROAS?",
    answer:
      "Return on ad spend compares measurable revenue generated with the advertising spend used to generate it.\n\nFor example, where accurate revenue tracking is available, ROAS can help evaluate how efficiently advertising investment generates revenue.",
  },
  {
    question: "How quickly can paid advertising generate results?",
    answer:
      "Paid campaigns can begin generating traffic and activity soon after launch, but meaningful optimization requires enough reliable data to understand what is happening.\n\nThe timeline depends on budget, market size, objective, offer, audience, conversion journey and available data.",
  },
  {
    question: "Can you guarantee leads or sales?",
    answer:
      "No responsible agency should guarantee a specific number of leads, sales or return before sufficient campaign and business data exists.\n\nAdvertising performance depends on multiple factors including market demand, competition, pricing, offer, creative, website experience and sales follow-up.",
  },
  {
    question: "Do you create the ads?",
    answer:
      "Advertising creative can be included depending on the agreed scope.\n\nThis may include campaign messaging, copy, graphics, concepts or short-form video requirements.",
  },
  {
    question: "Do you optimize landing pages?",
    answer:
      "Landing-page analysis and optimization recommendations can be included where the page experience is affecting campaign performance.\n\nThe exact design or development responsibility is confirmed within your proposal.",
  },
  {
    question: "How do you report performance?",
    answer:
      "Reporting is built around the KPIs relevant to your campaign objectives.\n\nThat may include reach, clicks, conversions, cost per lead, cost per acquisition, conversion value and return on ad spend where accurate measurement is available.",
  },
];

/* =========================================================
   SECTION
========================================================= */

export default function PerformanceMarketingFAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);

  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

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
      id="performance-marketing-faqs"
      aria-labelledby="performance-faq-heading"
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
          SEO / AEO FAQ SCHEMA
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
            bg-[#E5F1FA]/65
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-48
            top-[34%]
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
            bottom-[-200px]
            left-[28%]
            h-[560px]
            w-[720px]
            rounded-full
            bg-[#E6F0F9]/50
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.18]
            [background-image:linear-gradient(to_right,#0B2A5208_1px,transparent_1px),linear-gradient(to_bottom,#0B2A5208_1px,transparent_1px)]
            [background-size:92px_92px]
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

        {/* decorative circles */}
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
            border-[#B88B59]/18
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
              <span className="h-px w-9 bg-[#B67D49]" />

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
                Performance Marketing FAQs
              </span>
            </motion.div>

            <motion.h2
              id="performance-faq-heading"
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
                text-[2.3rem]
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
                  text-[#B67D49]
                "
              >
                Paid Growth?
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
              Straightforward answers to the questions businesses commonly ask
              before choosing a performance marketing agency.
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
                  text-[#0D5A93]
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
                Clear Answers · No Agency Jargon
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
            lg:grid-cols-[1.08fr_0.92fr]
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
                    text-[#0D5A93]
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
                16 QUESTIONS
              </span>
            </div>

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
                      from-[#0D5A93]
                      to-[#B67D49]
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
                          ? "text-[#B67D49]"
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
                            border-[#0D5A93]
                            bg-[#0D5A93]
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
                        ${active ? "translate-x-[1px] -translate-y-[1px]" : ""}
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
            {/* atmospheric glows */}
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
                -bottom-28
                -left-20
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                bg-[#EFDBC6]/55
                blur-[90px]
              "
            />

            {/* decorative ? */}
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
                text-[#0B2A52]/[0.035]
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
                      from-[#0B3E70]
                      to-[#176CA8]
                      text-white
                      shadow-[0_9px_25px_rgba(11,62,112,0.18)]
                    "
                  >
                    <Sparkles size={16} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[0.5rem]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#A46F41]
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
                      Performance Marketing FAQ
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
                  <span className="text-[#BAC5CE]"> / 16</span>
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
                      Question {String(activeIndex + 1).padStart(2, "0")}
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
                        bg-[#B67D49]
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
                      text-[#0D5A93]
                    "
                  >
                    <BarChart3 size={13} strokeWidth={1.7} />
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
                      Clear Information
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[0.7rem]
                        font-medium
                        text-[#45647D]
                      "
                    >
                      Better decisions start with better questions.
                    </p>
                  </div>
                </div>

                <span
                  className="
                    font-serif
                    text-[2.8rem]
                    italic
                    leading-none
                    text-[#B67D49]/65
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
                        from-[#0D5A93]
                        to-[#B67D49]
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
                          ? "text-[#B67D49]"
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
                            border-[#0D5A93]
                            bg-[#0D5A93]
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
                            bg-[#B67D49]
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
                from-[#0B3E70]
                to-[#176CA8]
                text-white
                shadow-[0_9px_25px_rgba(11,62,112,0.17)]
              "
            >
              <CircleDollarSign size={16} strokeWidth={1.7} />
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
                Performance Marketing With Sharp Rays
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
                Clear strategy, transparent measurement and decisions built
                around meaningful business outcomes.
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
                text-[#0D5A93]
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