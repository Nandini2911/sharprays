"use client";

import { useId, useRef, useState } from "react";
import {
  ArrowUpRight,
  MessageCircleQuestion,
  Minus,
  Plus,
} from "lucide-react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

/* ============================================================
   FAQ DATA
============================================================ */

const faqs = [
  {
    number: "01",
    question: "What does an SEO agency do?",
    answer: [
      "An SEO agency helps improve a website's visibility in organic search by addressing technical issues, understanding search intent, optimizing pages, developing useful content, strengthening website structure and measuring search performance.",
      "The exact work required depends on the website, market, competition and business objectives.",
    ],
  },
  {
    number: "02",
    question: "What is included in SEO services?",
    answer: [
      "SEO services can include website audits, technical SEO, keyword research, on-page optimization, content strategy, internal linking, local SEO and performance reporting.",
      "Your Sharp Rays proposal defines exactly which services and deliverables are included.",
    ],
  },
  {
    number: "03",
    question: "How long does SEO take to show results?",
    answer: [
      "There is no universal SEO timeline.",
      "Results depend on factors such as your website's current condition, competition, existing authority, technical issues, content quality and the searches you are targeting.",
      "Some improvements can be observed relatively early, while competitive organic growth often requires consistent work over a longer period.",
    ],
  },
  {
    number: "04",
    question: "Can you guarantee first-page Google rankings?",
    answer: [
      "No responsible SEO agency can guarantee a specific organic ranking.",
      "Search rankings are controlled by search engines and influenced by many factors outside an agency's direct control.",
      "Our focus is on improving the factors we can influence and building stronger long-term organic visibility.",
    ],
  },
  {
    number: "05",
    question: "What is technical SEO?",
    answer: [
      "Technical SEO focuses on making a website easier for search engines to crawl, process and index while maintaining a strong experience for users.",
      "It can involve website architecture, indexing, canonicalization, redirects, sitemaps, structured data, page performance and JavaScript-related considerations.",
    ],
  },
  {
    number: "06",
    question: "What is on-page SEO?",
    answer: [
      "On-page SEO improves individual website pages so their topic, purpose and value are clearer to both users and search engines.",
      "It commonly includes titles, headings, page copy, internal links, images, URLs and content structure.",
    ],
  },
  {
    number: "07",
    question: "Do you provide keyword research?",
    answer: [
      "Yes.",
      "Keyword and search intent research can be included within your SEO strategy.",
      "We focus on relevance and business intent rather than selecting keywords only because they have high reported search volume.",
    ],
  },
  {
    number: "08",
    question: "Do you create SEO content?",
    answer: [
      "SEO content strategy and content optimization can be included depending on your scope.",
      "This may involve service pages, landing pages, educational resources and improvements to existing content.",
      "The goal is to create something genuinely useful rather than producing articles simply to increase page count.",
    ],
  },
  {
    number: "09",
    question: "What is local SEO?",
    answer: [
      "Local SEO helps businesses improve visibility for searches connected to a specific geographic area.",
      "It can involve Google Business Profile optimization, location information, local landing pages, business listings, website optimization and locally relevant content.",
    ],
  },
  {
    number: "10",
    question: "Can SEO help my business appear in AI Overviews?",
    answer: [
      "Strong SEO can improve your website's overall eligibility and discoverability within Google's search ecosystem, including AI-assisted search experiences.",
      "There is no guaranteed method for appearing in a specific AI Overview.",
      "We focus on clear, useful, original and technically accessible content that gives search systems stronger information to work with.",
    ],
  },
  {
    number: "11",
    question: "What is AEO?",
    answer: [
      "Answer engine optimization is a term used for improving how clearly content answers the questions users ask through search and AI-powered experiences.",
      "In practice, many effective AEO principles overlap with strong SEO: clear answers, useful content, logical structure and reliable information.",
    ],
  },
  {
    number: "12",
    question: "What is GEO?",
    answer: [
      "Generative engine optimization generally refers to improving a brand's visibility within AI-generated search and answer experiences.",
      "For Google specifically, traditional SEO fundamentals remain the foundation for visibility within generative search features.",
    ],
  },
  {
    number: "13",
    question: "Is SEO better than Google Ads?",
    answer: [
      "SEO and paid advertising solve different problems.",
      "Paid search can provide immediate paid visibility while campaigns are active.",
      "SEO focuses on improving long-term organic discovery.",
      "For many businesses, the strongest strategy may use both channels for different stages of growth.",
    ],
  },
  {
    number: "14",
    question: "Do I need SEO if I already have a website?",
    answer: [
      "A website gives your business an online presence.",
      "SEO helps improve the likelihood that relevant users can discover that website through organic search.",
      "If organic search is important to your acquisition strategy, simply having a website is usually not enough.",
    ],
  },
  {
    number: "15",
    question: "How much do SEO services cost?",
    answer: [
      "SEO pricing depends on the size and condition of your website, competition, technical requirements, number of priority pages, content needs and level of ongoing support.",
      "We define the required scope before confirming commercial terms.",
    ],
  },
];

/* ============================================================
   COMPONENT
============================================================ */

export default function SEOFAQs() {
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
      id="seo-faq"
      aria-labelledby={`${id}-heading`}
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* LEFT LARGE CIRCLE */}

        <div
          className="
            absolute
            -left-[390px]
            top-[170px]
            h-[720px]
            w-[720px]
            rounded-full
            border
            border-[#0B2A52]/[0.035]
          "
        />

        {/* RIGHT CIRCLE */}

        <div
          className="
            absolute
            -right-[300px]
            bottom-[80px]
            h-[580px]
            w-[580px]
            rounded-full
            border
            border-[#C6A77A]/10
          "
        />

        {/* BLUE GLOW */}

        <div
          className="
            absolute
            left-[5%]
            top-[42%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#3976B6]/[0.035]
            blur-[100px]
          "
        />

        {/* GOLD GLOW */}

        <div
          className="
            absolute
            right-[4%]
            top-[20%]
            h-[250px]
            w-[250px]
            rounded-full
            bg-[#C6A77A]/[0.07]
            blur-[105px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-16
            xl:gap-24
          "
        >
          {/* =================================================
              LEFT INTRO
          ================================================== */}

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
              {/* EYEBROW */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-9 bg-[#C6A77A]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#C6A77A]
                  "
                >
                  SEO FAQs
                </span>
              </div>

              {/* TITLE */}

              <h2
                id={`${id}-heading`}
                className="
                  mt-6
                  max-w-[520px]
                  text-[2.35rem]
                  font-medium
                  leading-[1.06]
                  tracking-[-0.05em]
                  text-[#0B2A52]
                  sm:text-[2.8rem]
                  md:text-[3.15rem]
                  lg:text-[3.25rem]
                  xl:text-[3.55rem]
                "
              >
                Questions About{" "}
                <span
                  className="
                    block
                    font-normal
                    text-[#C6A77A]
                  "
                >
                  SEO Services?
                </span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-6
                  max-w-[430px]
                  text-[14px]
                  leading-7
                  text-[#0B2A52]/55
                  sm:text-[15px]
                "
              >
                Straightforward answers to the questions businesses often ask
                before choosing an SEO agency.
              </p>

              {/* CONTACT BLOCK */}

              <div
                className="
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
                  hover:-translate-y-1
                  hover:border-[#C6A77A]/55
                "
              >
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[13px]
                    bg-[#0B2A52]
                    text-[#C6A77A]
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
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#C6A77A]
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
              </div>

              {/* FAQ COUNT */}

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
                    [font-family:Georgia,'Times_New_Roman',serif]
                    text-[46px]
                    leading-none
                    text-[#0B2A52]/[0.07]
                  "
                >
                  15
                </span>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#C6A77A]
                    "
                  >
                    SEO Questions
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      text-[#0B2A52]/38
                    "
                  >
                    Strategy · technical · content · AI search
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FAQ ACCORDION
          ================================================== */}

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
                          ? "bg-gradient-to-r from-[#EAF4FC]/45 via-white to-[#FAF2E6]/45"
                          : "bg-white hover:bg-[#0B2A52]/[0.012]"
                      }
                    `}
                  >
                    {/* ACTIVE GOLD LINE */}

                    <span
                      aria-hidden="true"
                      className={`
                        absolute
                        bottom-5
                        left-0
                        top-5
                        w-[3px]
                        origin-bottom
                        rounded-full
                        bg-[#C6A77A]
                        transition-all
                        duration-500

                        ${
                          isOpen
                            ? "scale-y-100 opacity-100"
                            : "scale-y-0 opacity-0"
                        }
                      `}
                    />

                    {/* QUESTION */}

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
                            text-[10px]
                            font-semibold
                            tracking-[0.16em]
                            transition-colors
                            duration-400

                            ${
                              isOpen
                                ? "text-[#C6A77A]"
                                : "text-[#0B2A52]/30"
                            }
                          `}
                        >
                          {faq.number}
                        </span>

                        {/* QUESTION */}

                        <span
                          className={`
                            min-w-0
                            flex-1
                            text-[17px]
                            font-medium
                            leading-[1.4]
                            tracking-[-0.022em]
                            transition-colors
                            duration-400
                            sm:text-[19px]
                            lg:text-[20px]

                            ${
                              isOpen
                                ? "text-[#0B2A52]"
                                : "text-[#0B2A52]/68"
                            }
                          `}
                        >
                          {faq.question}
                        </span>

                        {/* TOGGLE */}

                        <span
                          className={`
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            transition-all
                            duration-400

                            ${
                              isOpen
                                ? "border-[#0B2A52] bg-[#0B2A52] text-[#C6A77A] shadow-[0_8px_24px_rgba(11,42,82,0.14)]"
                                : "border-[#0B2A52]/12 bg-white text-[#0B2A52]/45 group-hover:border-[#C6A77A]/55 group-hover:text-[#C6A77A]"
                            }
                          `}
                        >
                          {isOpen ? (
                            <Minus
                              size={16}
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          ) : (
                            <Plus
                              size={16}
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </button>
                    </h3>

                    {/* ANSWER */}

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
                              ml-[30px]
                              border-l
                              border-[#C6A77A]/45
                              pl-5
                              sm:ml-[40px]
                              sm:pl-6
                            "
                          >
                            <div
                              className="
                                max-w-[690px]
                                space-y-3
                              "
                            >
                              {faq.answer.map((paragraph, paragraphIndex) => (
                                <p
                                  key={paragraphIndex}
                                  className="
                                    text-[14px]
                                    leading-7
                                    text-[#0B2A52]/58
                                    sm:text-[15px]
                                  "
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
                CONTACT LINK
            ================================================== */}

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
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#C6A77A]
                  transition-colors
                  duration-300
                  hover:text-[#0B2A52]
                "
              >
                Have another SEO question?

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
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: reduceMotion ? 1 : 0.88,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  scaleX: 1,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.25,
            ease: [0.22, 1, 0.36, 1],
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
              bg-gradient-to-r
              from-transparent
              to-[#C6A77A]/50
            "
          />

          <span
            className="
              shrink-0
              text-center
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.19em]
              text-[#0B2A52]/32
              sm:text-[9px]
            "
          >
            Clear Answers · Clear Expectations · Better SEO Decisions
          </span>

          <span
            className="
              h-px
              flex-1
              bg-gradient-to-l
              from-transparent
              to-[#C6A77A]/50
            "
          />
        </motion.div>
      </div>
    </section>
  );
}