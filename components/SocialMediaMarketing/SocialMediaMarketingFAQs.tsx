"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What does a social media marketing agency do?",
    answer:
      "A social media marketing agency helps businesses plan, create, manage and improve their presence across social platforms. Services may include social media strategy, content creation, publishing, community management, paid advertising and performance reporting.",
  },
  {
    question: "What is included in social media management?",
    answer:
      "Social media management can include strategy, content planning, content creation, scheduling, publishing, community engagement and reporting. The exact deliverables depend on the platforms, content volume and responsibilities included in your plan.",
  },
  {
    question: "How much does social media marketing cost?",
    answer:
      "Social media marketing costs vary depending on the number of platforms, volume and type of content, video production requirements, community management, paid advertising and level of ongoing support. Sharp Rays confirms the final price after defining the required scope.",
  },
  {
    question: "Which social media platform is best for my business?",
    answer:
      "The best platform depends on your audience, industry and goals. Instagram may suit highly visual brands, while LinkedIn can be more relevant for many B2B businesses. The right strategy focuses on the platforms where your audience and business objectives overlap.",
  },
  {
    question: "Do you create Instagram Reels and short-form videos?",
    answer:
      "Short-form video can be included depending on your package and production requirements. The proposal clarifies whether Sharp Rays creates the complete video, works with footage supplied by your team or requires separate production.",
  },
  {
    question: "Do you manage comments and direct messages?",
    answer:
      "Community management can be included in your service. The exact responsibilities, response expectations and escalation process are agreed before management begins.",
  },
  {
    question: "Is paid social media advertising included?",
    answer:
      "Paid advertising is available as an additional service where required. Campaign management, creative production and advertising spend are defined separately in your proposal.",
  },
  {
    question: "How do you measure social media performance?",
    answer:
      "The metrics used depend on your objectives. They may include reach, engagement, audience growth, profile activity, website traffic, enquiries, leads or conversions where tracking is available.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function SocialMediaMarketingFAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="social-media-marketing-faq"
      className="
        relative
        overflow-hidden
        bg-white

        py-16
        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mb-10
            grid
            gap-6

            sm:mb-12
            sm:gap-7

            md:mb-14

            lg:mb-20
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-end
            lg:gap-8
          "
        >
          {/* LEFT */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
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
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
          >
            {/* LABEL */}

            <div
              className="
                flex
                items-center
                gap-2.5

                sm:gap-3
              "
            >
              <span
                className="
                  h-px
                  w-7

                  bg-gradient-to-r
                  from-transparent
                  to-[#B79A72]

                  sm:w-10
                "
              />

              <span
                className="
                  whitespace-nowrap

                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#B79A72]

                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                Social Media Marketing FAQs
              </span>

              <span
                className="
                  h-px
                  w-7

                  bg-gradient-to-l
                  from-transparent
                  to-[#B79A72]

                  sm:w-10
                "
              />
            </div>

            {/* HEADING */}

            <h2
              className="
                mt-5
                max-w-[650px]

                font-[var(--font-new-york)]

                text-[2.6rem]
                font-normal
                leading-[0.98]
                tracking-[-0.05em]
                text-[#0B2A52]

                sm:mt-6

                md:text-[2.95rem]

                lg:mt-7
                lg:text-[3.1rem]

                xl:text-[3.35rem]
              "
            >
              Questions About{" "}
              <span className="italic text-[#C6A77A]">
                Social Media Marketing?
              </span>
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.15,
              ease,
            }}
            className="
              max-w-[460px]

              text-[13px]
              leading-6
              text-[#66758A]

              sm:text-sm
              sm:leading-7

              md:text-[15px]

              lg:ml-auto
              lg:pb-1
              lg:text-base
            "
          >
            Straightforward answers to common questions businesses ask before
            choosing a social media marketing partner.
          </motion.p>
        </div>

        {/* =====================================================
            MOBILE + TABLET
        ===================================================== */}

        <div className="block lg:hidden">
          <div
            className="
              overflow-hidden

              rounded-[20px]

              border
              border-[#DCE5EF]

              bg-white

              sm:rounded-[24px]
            "
          >
            {faqs.map((faq, index) => (
              <motion.article
                key={faq.question}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : index * 0.035,
                  ease,
                }}
                className="
                  relative

                  border-b
                  border-[#E6EBF1]

                  px-5
                  py-6

                  last:border-b-0

                  sm:px-6
                  sm:py-7

                  md:px-8
                  md:py-8
                "
              >
                {/* NUMBER */}

                <div
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2.5

                    sm:mb-4
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#C6A77A]

                      sm:text-[10px]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      h-px
                      w-7

                      bg-[#C6A77A]/60

                      sm:w-9
                    "
                  />
                </div>

                {/* QUESTION */}

                <h3
                  className="
                    max-w-[650px]

                    font-[var(--font-new-york)]

                    text-[19px]
                    font-medium
                    leading-[1.22]
                    tracking-[-0.025em]
                    text-[#0B2A52]

                    sm:text-[21px]
                    md:text-[23px]
                  "
                >
                  {faq.question}
                </h3>

                {/* ANSWER */}

                <p
                  className="
                    mt-3
                    max-w-[680px]

                    text-[13px]
                    leading-[1.75]
                    text-[#66758A]

                    sm:mt-4
                    sm:text-sm
                    sm:leading-7

                    md:text-[15px]
                  "
                >
                  {faq.answer}
                </p>
              </motion.article>
            ))}
          </div>

          {/* MOBILE BOTTOM NOTE */}

          <div
            className="
              mt-5

              flex
              flex-wrap
              items-center

              gap-x-3
              gap-y-1

              px-1

              sm:mt-6
            "
          >
            <span
              className="
                h-px
                w-6
                bg-[#C6A77A]
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-[#66758A]/60

                sm:text-[9px]
              "
            >
              Clear Answers
            </span>

            <span className="text-[#C6A77A]/50">
              ·
            </span>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-[#66758A]/60

                sm:text-[9px]
              "
            >
              Clear Expectations
            </span>
          </div>
        </div>

        {/* =====================================================
            DESKTOP
        ===================================================== */}

        <div
          className="
            hidden

            overflow-hidden

            rounded-[28px]

            border
            border-[#DCE5EF]

            bg-white

            lg:grid
            lg:grid-cols-[1fr_0.9fr]
          "
        >
          {/* =================================================
              QUESTIONS
          ================================================= */}

          <div
            className="
              border-r
              border-[#DCE5EF]
            "
          >
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={faq.question}
                  type="button"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -15,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.045,
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`
                    group
                    relative

                    block
                    w-full

                    border-b
                    border-[#E6EBF1]

                    px-8
                    py-6

                    text-left

                    outline-none

                    transition-all
                    duration-500

                    last:border-b-0

                    focus-visible:ring-2
                    focus-visible:ring-inset
                    focus-visible:ring-[#C6A77A]/60

                    lg:px-9

                    xl:px-10
                    xl:py-7

                    ${
                      isActive
                        ? "bg-[#F7F9FB]"
                        : "bg-white hover:bg-[#FAFBFC]"
                    }
                  `}
                >
                  {/* ACTIVE GOLD LINE */}

                  <motion.span
                    aria-hidden="true"
                    animate={{
                      scaleY: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                    }}
                    className="
                      absolute
                      left-0
                      top-0

                      h-full
                      w-[3px]

                      origin-top

                      bg-[#C6A77A]
                    "
                  />

                  {/* NUMBER */}

                  <span
                    className={`
                      mb-2
                      block

                      text-[9px]
                      font-semibold
                      tracking-[0.18em]

                      transition-colors
                      duration-300

                      ${
                        isActive
                          ? "text-[#C6A77A]"
                          : "text-[#0B2A52]/25"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* QUESTION */}

                  <span
                    className={`
                      block
                      max-w-[500px]

                      font-[var(--font-new-york)]

                      text-[19px]
                      font-medium

                      leading-[1.25]

                      tracking-[-0.02em]

                      transition-all
                      duration-300

                      xl:text-[21px]

                      ${
                        isActive
                          ? "translate-x-1 text-[#0B2A52]"
                          : "text-[#344054]"
                      }
                    `}
                  >
                    {faq.question}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* =================================================
              ANSWER PANEL
          ================================================= */}

          <div
            className="
              relative

              flex
              min-h-[590px]
              flex-col
              justify-between

              overflow-hidden

              bg-[#0B2A52]

              p-10

              xl:p-12
            "
          >
            {/* DECORATIVE QUESTION MARK */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                -right-4
                -top-10

                font-[var(--font-new-york)]

                text-[180px]
                font-medium
                leading-none

                text-white/[0.035]
              "
            >
              ?
            </span>

            {/* ANSWER TOP */}

            <div className="relative z-10">
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#C6A77A]
                  "
                >
                  Answer
                </span>

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.16em]
                    text-white/30
                  "
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-10 xl:mt-12">
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
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    ease,
                  }}
                >
                  <h3
                    className="
                      max-w-[440px]

                      font-[var(--font-new-york)]

                      text-[27px]
                      font-medium

                      leading-[1.15]

                      tracking-[-0.03em]

                      text-white

                      xl:text-[31px]
                    "
                  >
                    {faqs[activeIndex].question}
                  </h3>

                  <div
                    className="
                      mt-7

                      h-px
                      w-10

                      bg-[#C6A77A]
                    "
                  />

                  <p
                    className="
                      mt-7
                      max-w-[440px]

                      text-[14px]
                      leading-7
                      text-white/60

                      xl:text-[15px]
                    "
                  >
                    {faqs[activeIndex].answer}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* ANSWER BOTTOM */}

            <div
              className="
                relative
                z-10

                flex
                items-end
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  Clear answers.
                </p>

                <p
                  className="
                    mt-1

                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  Clear expectations.
                </p>
              </div>

              <span
                className="
                  font-[var(--font-new-york)]

                  text-5xl
                  italic
                  leading-none

                  text-[#C6A77A]/70
                "
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DETAIL
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10

            hidden
            max-w-[720px]
            items-center
            gap-4

            lg:flex
          "
        >
          <span className="h-px flex-1 bg-[#C6A77A]/40" />

          <span
            className="
              shrink-0

              text-[8px]
              font-semibold
              uppercase
              tracking-[0.19em]
              text-[#0B2A52]/32
            "
          >
            Strategy · Content · Community · Growth
          </span>

          <span className="h-px flex-1 bg-[#C6A77A]/40" />
        </div>
      </div>
    </section>
  );
}