"use client";

import { useId, useRef, useState } from "react";
import {
  ArrowUpRight,
  MessageCircleQuestion,
  Minus,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

/* ===========================================================
   FAQ DATA
=========================================================== */

const faqs = [
  {
    number: "01",
    question: "What does a content marketing agency do?",
    answer: [
      "A content marketing agency helps businesses plan, create, distribute and improve useful content designed to attract audiences, demonstrate expertise, build trust and support business goals.",
      "Services can include content strategy, topic research, SEO content, website copy, blog articles, thought leadership, case studies and content optimization.",
    ],
  },

  {
    number: "02",
    question: "What is included in content marketing services?",
    answer: [
      "Content marketing services can include audience research, content strategy, topic and keyword research, editorial planning, content creation, optimization, internal linking, distribution support and performance reporting.",
      "The exact deliverables depend on your objectives and agreed scope.",
    ],
  },

  {
    number: "03",
    question:
      "What is the difference between content marketing and SEO?",
    answer: [
      "SEO focuses on improving visibility and performance within organic search.",
      "Content marketing has a wider role that can include search, education, brand authority, customer nurturing and distribution across multiple channels.",
      "The two often work best together because useful content gives an SEO strategy something valuable to make discoverable.",
    ],
  },

  {
    number: "04",
    question: "Do you provide SEO content writing?",
    answer: [
      "Yes.",
      "SEO-led content can be included within a Sharp Rays content marketing plan.",
      "We combine search intent with audience needs, business expertise and clear content structure rather than writing purely around keyword density.",
    ],
  },

  {
    number: "05",
    question: "Do you write website content?",
    answer: [
      "Yes.",
      "Depending on the agreed scope, we can develop content for service pages, landing pages, industry pages, About pages and other important website sections.",
    ],
  },

  {
    number: "06",
    question: "Do you create blog content?",
    answer: [
      "Yes.",
      "Blog and editorial content can be included where ongoing educational or search-led publishing supports the wider strategy.",
      "We prioritize useful topics rather than publishing articles simply to maintain a schedule.",
    ],
  },

  {
    number: "07",
    question: "Can you create thought leadership content?",
    answer: [
      "Yes.",
      "We can help turn founder, leadership or subject-matter expertise into articles, perspectives and other thought leadership formats.",
      "The strongest thought leadership is based on genuine knowledge and experience rather than generic commentary.",
    ],
  },

  {
    number: "08",
    question: "Can AI be used to create content?",
    answer: [
      "AI can support parts of the content workflow, including research, ideation and production assistance.",
      "However, useful content still requires accurate information, editorial judgement, original perspective and appropriate human review.",
      "We do not treat mass-produced AI content as a substitute for genuine expertise.",
    ],
  },

  {
    number: "09",
    question: "How does content marketing help SEO?",
    answer: [
      "Content marketing can help build relevant pages around the questions, topics and needs connected to your audience.",
      "When useful content is supported by strong technical SEO and internal linking, it can strengthen organic discovery across relevant searches.",
    ],
  },

  {
    number: "10",
    question:
      "Can content help my business appear in AI Overviews?",
    answer: [
      "Useful, original and accessible content can improve your overall eligibility for discovery across Google's search ecosystem, including generative search features.",
      "However, no agency can guarantee inclusion within an AI Overview or AI-generated response.",
    ],
  },

  {
    number: "11",
    question: "What is AEO in content marketing?",
    answer: [
      "Answer engine optimization generally refers to making information easy to understand and useful when people ask direct questions through search and AI experiences.",
      "Clear answers, logical structure, trustworthy information and useful context are important principles.",
    ],
  },

  {
    number: "12",
    question: "What is GEO in content marketing?",
    answer: [
      "Generative engine optimization is a term commonly used for improving content visibility within generative AI experiences.",
      "For Google Search, the same strong SEO foundations remain important: useful original content, crawlability, clear information and genuine expertise.",
    ],
  },

  {
    number: "13",
    question: "How often should a business publish content?",
    answer: [
      "There is no universal publishing frequency.",
      "The right cadence depends on your audience, resources, industry, objectives and ability to maintain quality.",
      "Publishing fewer valuable pieces can be more effective than producing large volumes of weak content.",
    ],
  },

  {
    number: "14",
    question: "How long does content marketing take to work?",
    answer: [
      "Content marketing is generally a medium- to long-term strategy.",
      "Some individual content can generate attention quickly, while organic visibility, brand authority and consistent lead generation usually develop over time.",
      "The timeline depends on your starting position, competition, content quality, distribution and objectives.",
    ],
  },

  {
    number: "15",
    question: "How much do content marketing services cost?",
    answer: [
      "Pricing depends on the level of strategy required, volume and format of content, research requirements, production complexity, optimization needs and ongoing support.",
      "Sharp Rays confirms pricing after defining the scope and responsibilities.",
    ],
  },
];

/* ===========================================================
   COMPONENT
=========================================================== */

export default function ContentMarketingFAQs() {
  const id = useId();
  const sectionRef = useRef<HTMLElement | null>(null);

  const [openIndex, setOpenIndex] = useState(0);

  const isVisible = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="content-marketing-faq"
      aria-labelledby={`${id}-heading`}
      className="
        relative
        overflow-hidden
        bg-white

        py-20
        text-[#0B2A52]

        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* LEFT CIRCLE */}

        <div
          className="
            absolute
            -left-[390px]
            top-[180px]

            h-[720px]
            w-[720px]

            rounded-full

            border
            border-[#0B2A52]/[0.035]
          "
        />

        <div
          className="
            absolute
            -left-[260px]
            top-[310px]

            h-[460px]
            w-[460px]

            rounded-full

            border
            border-[#B88758]/10
          "
        />

        {/* RIGHT CIRCLE */}

        <div
          className="
            absolute
            -right-[310px]
            bottom-[60px]

            h-[600px]
            w-[600px]

            rounded-full

            border
            border-[#B88758]/10
          "
        />

        {/* SOFT ATMOSPHERE */}

        <div
          className="
            absolute
            left-[3%]
            top-[35%]

            h-[280px]
            w-[280px]

            rounded-full

            bg-[#0B2A52]/[0.022]
            blur-[105px]
          "
        />

        <div
          className="
            absolute
            right-[4%]
            top-[18%]

            h-[260px]
            w-[260px]

            rounded-full

            bg-[#B88758]/[0.05]
            blur-[110px]
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
          max-w-[1320px]

          px-5
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            gap-12

            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-16

            xl:gap-24
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -35,
              y: reduceMotion ? 0 : 20,
            }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="
                lg:sticky
                lg:top-28
              "
            >
              {/* =========================================
                  EYEBROW
              ========================================= */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-9
                    bg-[#B88758]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-[#A67549]

                    sm:text-[10px]
                  "
                >
                  Content Marketing FAQs
                </span>
              </div>

              {/* =========================================
                  HEADING
              ========================================= */}

              <h2
                id={`${id}-heading`}
                className="
                  mt-6
                  max-w-[560px]

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
                Questions About{" "}
                <span
                  className="
                    block
                    font-normal
                    italic
                    text-[#B88758]
                  "
                >
                  Content Marketing?
                </span>
              </h2>

              {/* =========================================
                  INTRO
              ========================================= */}

              <p
                className="
                  mt-6
                  max-w-[455px]

                  text-[14px]
                  leading-7
                  text-[#536B83]

                  sm:text-[15px]
                "
              >
                Straightforward answers to the questions businesses commonly
                ask before investing in a content marketing strategy.
              </p>

              {/* =========================================
                  CONTACT BLOCK
              ========================================= */}

              <motion.a
                href="/contact"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                className="
                  group

                  mt-9

                  inline-flex
                  items-center
                  gap-4

                  rounded-[18px]

                  border
                  border-[#0B2A52]/10

                  bg-white

                  p-2
                  pr-5

                  shadow-[0_16px_40px_-30px_rgba(11,42,82,0.24)]

                  transition-all
                  duration-500

                  hover:border-[#B88758]/60
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

                    rounded-[13px]

                    bg-[#0B2A52]
                    text-[#D1A274]
                  "
                >
                  <MessageCircleQuestion
                    size={19}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.19em]
                      text-[#A67549]
                    "
                  >
                    Still Have A Question?
                  </p>

                  <p
                    className="
                      mt-1
                      text-[13px]
                      font-medium
                      text-[#0B2A52]
                    "
                  >
                    Talk to Sharp Rays.
                  </p>
                </div>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="
                    ml-1
                    text-[#B88758]

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </motion.a>

              {/* =========================================
                  FAQ COUNT
              ========================================= */}

              <div
                className="
                  mt-12

                  hidden
                  items-center
                  gap-4

                  lg:flex
                "
              >
                <span
                  className="
                    font-serif
                    text-[52px]
                    leading-none
                    tracking-[-0.06em]
                    text-[#0B2A52]/[0.07]
                  "
                >
                  15
                </span>

                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.21em]
                      text-[#A67549]
                    "
                  >
                    Common Questions
                  </p>

                  <p
                    className="
                      mt-1
                      max-w-[230px]
                      text-[10px]
                      leading-5
                      text-[#63798D]
                    "
                  >
                    Strategy · SEO · AI Search · Content Creation · Pricing
                  </p>
                </div>
              </div>

              {/* =========================================
                  SMALL SEARCH / AI SIGNAL
              ========================================= */}

              <div
                className="
                  mt-10
                  hidden
                  max-w-[310px]
                  items-center
                  gap-3

                  border-t
                  border-[#0B2A52]/10

                  pt-5

                  lg:flex
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#B88758]/40

                    text-[#A67549]
                  "
                >
                  <Search
                    size={13}
                    strokeWidth={1.5}
                  />
                </span>

                <span
                  className="
                    h-px
                    w-5
                    bg-[#B88758]/55
                  "
                />

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#B88758]/40

                    text-[#A67549]
                  "
                >
                  <Sparkles
                    size={13}
                    strokeWidth={1.5}
                  />
                </span>

                <span
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#718496]
                  "
                >
                  Search + AI discovery
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — FAQ ACCORDION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 35,
              y: reduceMotion ? 0 : 25,
            }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.95,
              delay: reduceMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="
                overflow-hidden

                rounded-[28px]

                border
                border-[#0B2A52]/10

                bg-white

                shadow-[0_30px_80px_-58px_rgba(11,42,82,0.30)]
              "
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                const panelId = `${id}-panel-${index}`;
                const buttonId = `${id}-button-${index}`;

                return (
                  <article
                    key={faq.number}
                    className={`
                      group
                      relative

                      transition-colors
                      duration-500

                      ${
                        index !== faqs.length - 1
                          ? "border-b border-[#0B2A52]/[0.08]"
                          : ""
                      }

                      ${
                        isOpen
                          ? "bg-[#FCF9F5]"
                          : "bg-white hover:bg-[#0B2A52]/[0.012]"
                      }
                    `}
                  >
                    {/* =====================================
                        ACTIVE GOLD EDGE
                    ===================================== */}

                    <motion.span
                      aria-hidden="true"
                      animate={{
                        scaleY: isOpen ? 1 : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.4,
                      }}
                      className="
                        absolute
                        bottom-5
                        left-0
                        top-5

                        w-[3px]

                        origin-bottom

                        rounded-full

                        bg-[#B88758]
                      "
                    />

                    {/* =====================================
                        QUESTION
                    ===================================== */}

                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpenIndex(isOpen ? -1 : index)
                        }
                        className="
                          relative

                          flex
                          w-full
                          items-start

                          gap-4

                          px-5
                          py-6

                          text-left
                          outline-none

                          sm:gap-6
                          sm:px-7
                          sm:py-7

                          lg:px-8
                        "
                      >
                        {/* NUMBER */}

                        <span
                          className={`
                            mt-[5px]
                            shrink-0

                            text-[9px]
                            font-semibold
                            tracking-[0.16em]

                            transition-colors
                            duration-400

                            ${
                              isOpen
                                ? "text-[#A67549]"
                                : "text-[#0B2A52]/30"
                            }
                          `}
                        >
                          {faq.number}
                        </span>

                        {/* QUESTION TEXT */}

                        <span
                          className={`
                            min-w-0
                            flex-1

                            font-serif
                            text-[1.03rem]
                            font-medium
                            leading-[1.4]
                            tracking-[-0.02em]

                            transition-colors
                            duration-400

                            sm:text-[1.12rem]
                            lg:text-[1.18rem]

                            ${
                              isOpen
                                ? "text-[#0B2A52]"
                                : "text-[#0B2A52]/72"
                            }
                          `}
                        >
                          {faq.question}
                        </span>

                        {/* TOGGLE */}

                        <motion.span
                          animate={{
                            rotate: isOpen ? 180 : 0,
                          }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.35,
                          }}
                          className={`
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center

                            rounded-full

                            border

                            transition-colors
                            duration-400

                            ${
                              isOpen
                                ? "border-[#0B2A52] bg-[#0B2A52] text-[#D4A472]"
                                : "border-[#0B2A52]/12 bg-white text-[#0B2A52]/45 group-hover:border-[#B88758]/55 group-hover:text-[#B88758]"
                            }
                          `}
                        >
                          {isOpen ? (
                            <Minus
                              size={15}
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          ) : (
                            <Plus
                              size={15}
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          )}
                        </motion.span>
                      </button>
                    </h3>

                    {/* =====================================
                        ANSWER
                    ===================================== */}

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`
                        grid

                        transition-all
                        duration-500

                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="
                            px-5
                            pb-7

                            sm:px-7
                            sm:pb-8

                            lg:px-8
                          "
                        >
                          <div
                            className="
                              ml-[29px]

                              border-l
                              border-[#B88758]/45

                              pl-5

                              sm:ml-[40px]
                              sm:pl-6
                            "
                          >
                            <div
                              className="
                                max-w-[700px]
                                space-y-3
                              "
                            >
                              {faq.answer.map((paragraph, paragraphIndex) => (
                                <p
                                  key={paragraphIndex}
                                  className={`
                                    text-[13px]
                                    leading-7

                                    sm:text-[14px]

                                    ${
                                      paragraph === "Yes."
                                        ? "font-semibold text-[#0B2A52]"
                                        : "text-[#536B83]"
                                    }
                                  `}
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* =================================================
                BOTTOM CONTACT LINK
            ================================================= */}

            <div
              className="
                mt-6

                flex
                items-center
                justify-end
              "
            >
              <a
                href="/contact"
                className="
                  group

                  inline-flex
                  items-center
                  gap-2

                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#A67549]

                  transition-colors
                  duration-300

                  hover:text-[#0B2A52]
                "
              >
                Have another question?

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM DETAIL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 12,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.35,
          }}
          className="
            mx-auto
            mt-14

            flex
            max-w-[760px]
            items-center
            gap-4
          "
        >
          <span
            className="
              h-px
              flex-1
              bg-[#B88758]/40
            "
          />

          <span
            className="
              shrink-0

              text-[8px]
              font-semibold
              uppercase
              tracking-[0.19em]
              text-[#0B2A52]/35
            "
          >
            Clear Answers · Clear Expectations
          </span>

          <span
            className="
              h-px
              flex-1
              bg-[#B88758]/40
            "
          />
        </motion.div>
      </div>
    </section>
  );
}