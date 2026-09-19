"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How much does working with you cost?",
    answer:
      "It depends on what your business actually needs. We start by understanding your goals, scope, and priorities before recommending the right approach and investment.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Once we understand your requirements and agree on the scope, we can move quickly. We'll define the priorities, timeline, and next steps so everyone knows exactly what happens next.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups and growing businesses that have something worth building and are serious about creating meaningful, sustainable digital growth.",
  },
  {
    question: "What happens after I contact you?",
    answer:
      "We start with a conversation. We learn about your business, what's working, what's not, and where you want to go. Then we'll tell you honestly how we think we can help.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "We don't promise numbers we can't control. What we do promise is thoughtful strategy, strong execution, transparency, and decisions backed by data.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function BeforeYouAskSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="before-you-ask"
      className="
        relative
        overflow-hidden
        bg-white

        py-16
        sm:py-20
        md:py-24
        lg:py-28
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
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.7,
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
                  uppercase
                  tracking-[0.22em]
                  text-[#B79A72]

                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                Before You Ask
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
                max-w-[620px]

                font-[var(--font-new-york)]

                text-[2.15rem]
                font-normal
                leading-[0.95]
                tracking-[-0.055em]
                text-[#0B2A52]

                sm:mt-6
                sm:text-[2.6rem]

                md:text-[2.95rem]

                lg:mt-7
                lg:text-[3.1rem]

                xl:text-[3.35rem]
              "
            >
              Before You{" "}
              <span className="italic text-[#C6A77A]">
                Ask...
              </span>
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              max-w-[430px]

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
            You probably have a few questions.
            <br className="hidden sm:block" />
            We&apos;d rather answer them honestly before you even have to ask.
          </motion.p>
        </div>

        {/* =========================================================
            MOBILE + TABLET VERSION

            NO HOVER
            NO ACTIVE STATE
            QUESTION + ANSWER TOGETHER
        ========================================================= */}

        <div
          className="
            block
            lg:hidden
          "
        >
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
              <div
                key={faq.question}
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
                    0{index + 1}
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
              </div>
            ))}
          </div>

          {/* MOBILE END NOTE */}

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
              Honest answers
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
              No agency jargon
            </span>
          </div>
        </div>

        {/* =========================================================
            DESKTOP VERSION
            HOVER INTERACTION
        ========================================================= */}

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
          {/* =====================================================
              DESKTOP QUESTIONS
          ===================================================== */}

          <div
            className="
              border-r
              border-[#DCE5EF]
            "
          >
            {faqs.map((faq, index) => {
              const isActive =
                activeIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                  className={`
                    group
                    relative

                    cursor-pointer

                    border-b
                    border-[#E6EBF1]

                    px-8
                    py-7

                    transition-all
                    duration-500

                    last:border-b-0

                    lg:px-10

                    ${
                      isActive
                        ? "bg-[#F7F9FB]"
                        : "bg-white"
                    }
                  `}
                >
                  {/* ACTIVE GOLD LINE */}

                  <motion.span
                    animate={{
                      scaleY:
                        isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.35,
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

                  {/* QUESTION */}

                  <span
                    className={`
                      block

                      font-[var(--font-new-york)]

                      text-[23px]
                      font-medium

                      leading-[1.25]

                      tracking-[-0.02em]

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "translate-x-1 text-[#0B2A52]"
                          : "text-[#344054]"
                      }
                    `}
                  >
                    {faq.question}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* =====================================================
              DESKTOP ANSWER PANEL
          ===================================================== */}

          <div
            className="
              relative

              flex
              min-h-[520px]
              flex-col
              justify-between

              overflow-hidden

              bg-[#0B2A52]

              p-12

              xl:p-14
            "
          >
            {/* DECORATIVE QUESTION MARK */}

            <span
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
                  0{activeIndex + 1}
                </span>
              </div>

              <div className="mt-12">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                >
                  <h3
                    className="
                      max-w-[440px]

                      font-[var(--font-new-york)]

                      text-[28px]
                      font-medium

                      leading-[1.15]

                      tracking-[-0.03em]

                      text-white

                      xl:text-[34px]
                    "
                  >
                    {
                      faqs[activeIndex]
                        .question
                    }
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

                      text-sm
                      leading-7
                      text-white/60

                      xl:text-[15px]
                    "
                  >
                    {
                      faqs[activeIndex]
                        .answer
                    }
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
                  Honest answers.
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
                  No agency jargon.
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
                0{activeIndex + 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}