"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is AI video creation?",
    answer:
      "AI video creation uses generative artificial intelligence to create or transform moving visual content from inputs such as text, images or existing media. It can support concept development, generated scenes, animation and other visual production requirements.",
  },
  {
    question: "What types of AI video ads can you create?",
    answer:
      "Depending on the product, audience and campaign objective, AI-assisted advertising can include product hero ads, UGC or influencer-style creative, problem-to-solution ads, product demonstrations, cinematic brand commercials and transformation or before-and-after concepts.",
  },
  {
    question: "What is AI video editing?",
    answer:
      "AI video editing uses AI-assisted tools to support parts of the post-production process. This can include caption assistance, cleanup, visual enhancement, asset organization and format adaptation. Creative editing decisions still require judgement around pacing, story, brand and audience.",
  },
  {
    question: "What is included in your video editing service?",
    answer:
      "The exact scope depends on the project. Editing may include footage selection, cutting, pacing, colour treatment, audio refinement, captions, transitions, graphics, motion, calls to action and platform-specific exports.",
  },
  {
    question: "Can you create an entire video using AI?",
    answer:
      "Yes. Certain concepts can be produced primarily with AI-generated assets. Whether that approach makes sense depends on the message, desired realism, brand requirements and intended use.",
  },
  {
    question: "Can you edit footage we already have?",
    answer:
      "Yes. Existing footage can be turned into polished videos, short-form clips, advertisements, social posts or other agreed formats depending on the project requirements.",
  },
  {
    question: "Do you edit Instagram Reels and YouTube Shorts?",
    answer:
      "Yes. Vertical short-form editing can be created for Instagram Reels, YouTube Shorts and other suitable social platforms, with pacing, captions and format adapted for short-form viewing.",
  },
  {
    question: "Do you edit YouTube videos?",
    answer:
      "Yes. Depending on the agreed scope, YouTube editing can include long-form videos, educational content, interviews, explainers and supporting short-form cutdowns.",
  },
  {
    question: "Can you create video ads?",
    answer:
      "Yes. Advertising videos can include new edits, AI-assisted visuals, performance variations, different hooks, messages and calls to action depending on the campaign requirements.",
  },
  {
    question: "Can AI video match our brand?",
    answer:
      "AI video can be developed around an agreed creative direction, but generated outputs may require refinement to achieve the required consistency. That is why we combine generation with professional editing and brand review rather than relying on raw AI outputs alone.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AiVideoEditingFAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-editing-faq"
      aria-labelledby="ai-video-editing-faq-heading"
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
      {/* =====================================================
          SOFT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-260px]

            h-[500px]
            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-[#EEF5FA]/70

            blur-[145px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

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
                AI Video & Editing FAQs
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
              id="ai-video-editing-faq-heading"
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
                AI Video & Editing?
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
              max-w-[470px]

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
            starting an AI video creation or professional video editing
            project.
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
            <span className="h-px w-6 bg-[#C6A77A]" />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]

                text-[#66758A]/60

                sm:text-[9px]
              "
            >
              Clear Questions
            </span>

            <span className="text-[#C6A77A]/50">·</span>

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

            shadow-[0_24px_70px_rgba(11,42,82,0.055)]

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
                    py-5

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
                    xl:py-[22px]

                    ${
                      isActive
                        ? "bg-[#F7F9FB]"
                        : "bg-white hover:bg-[#FAFBFC]"
                    }
                  `}
                >
                  {/* ACTIVE LINE */}

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
                      mb-1.5
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

                      text-[18px]
                      font-medium
                      leading-[1.24]
                      tracking-[-0.02em]

                      transition-all
                      duration-300

                      xl:text-[20px]

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
              min-h-[610px]
              flex-col
              justify-between

              overflow-hidden

              bg-[#0B2A52]

              p-10

              xl:p-12
            "
          >
            {/* SUBTLE BACKGROUND DETAIL */}

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

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                -bottom-[150px]
                -right-[150px]

                h-[360px]
                w-[360px]

                rounded-full

                border
                border-white/[0.05]
              "
            />

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

                  <div className="mt-7 h-px w-10 bg-[#C6A77A]" />

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
                gap-8
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
                  Clear questions.
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
                  Clear answers.
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
            Create · Edit · Refine · Deliver
          </span>

          <span className="h-px flex-1 bg-[#C6A77A]/40" />
        </div>
      </div>
    </section>
  );
}