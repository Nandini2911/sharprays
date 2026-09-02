"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

export default function BeforeYouAskSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="before-you-ask"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          max-w-[1200px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mb-14
            grid
            gap-8
            lg:mb-20
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-end
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A77A]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#C6A77A]
                "
              >
                Before You Ask
              </span>
            </div>

            <h2
              className="
                mt-7
                max-w-[520px]
                font-[var(--font-new-york)]
                text-[clamp(3rem,4vw,4rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.065em]
                text-[#0B2A52]
              "
            >
              Before You{" "}
              <span className="italic text-[#C6A77A]">
                Ask...
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}

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
              text-sm
              leading-7
              text-[#66758A]
              lg:ml-auto
              lg:pb-1
              lg:text-base
            "
          >
            You probably have a few questions.
            <br className="hidden sm:block" />
            We&apos;d rather answer them honestly
            before you even have to ask.
          </motion.p>
        </div>

        {/* =====================================================
            INTERACTIVE FAQ
        ===================================================== */}

        <div
          className="
            grid
            overflow-hidden
            rounded-[28px]
            border
            border-[#DCE5EF]
            bg-white
            lg:grid-cols-[1fr_0.9fr]
          "
        >
          {/* ===================================================
              QUESTIONS
          =================================================== */}

          <div className="border-b border-[#DCE5EF] lg:border-b-0 lg:border-r">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

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
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`
                    group
                    relative
                    cursor-pointer
                    border-b
                    border-[#E6EBF1]
                    px-6
                    py-6
                    transition-all
                    duration-500
                    last:border-b-0
                    sm:px-8
                    sm:py-7
                    lg:px-10
                    ${
                      isActive
                        ? "bg-[#F7F9FB]"
                        : "bg-white"
                    }
                  `}
                >
                  {/* GOLD ACTIVE LINE */}

                  <motion.span
                    animate={{
                      scaleY: isActive ? 1 : 0,
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

                  <div className="flex items-center gap-5">
                    {/* NUMBER */}

                    <span
                      className={`
                        w-7
                        shrink-0
                        text-[10px]
                        font-semibold
                        tracking-[0.15em]
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-[#C6A77A]"
                            : "text-[#0B2A52]/30"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    {/* QUESTION */}

                    <span
                      className={`
                        flex-1
                        font-[var(--font-new-york)]
                        text-[19px]
                        font-medium
                        leading-[1.25]
                        tracking-[-0.02em]
                        transition-all
                        duration-300
                        sm:text-[21px]
                        lg:text-[23px]
                        ${
                          isActive
                            ? "translate-x-1 text-[#0B2A52]"
                            : "text-[#344054]"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                    {/* ARROW */}

                    <motion.div
                      animate={{
                        x: isActive ? 0 : -4,
                        y: isActive ? 0 : 4,
                        opacity: isActive ? 1 : 0.35,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#DCE5EF]
                        bg-white
                      "
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="text-[#0B2A52]"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ===================================================
              ANSWER PANEL
          =================================================== */}

          <div
            className="
              relative
              hidden
              min-h-[520px]
              overflow-hidden
              bg-[#0B2A52]
              lg:flex
              lg:flex-col
              lg:justify-between
              lg:p-12
              xl:p-14
            "
          >
            {/* Decorative typography */}

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

            {/* TOP */}

            <div className="relative z-10">
              <div className="flex items-center justify-between">
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
                    ease: [0.22, 1, 0.36, 1],
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
                    {faqs[activeIndex].question}
                  </h3>

                  <div className="mt-7 h-px w-10 bg-[#C6A77A]" />

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
                    {faqs[activeIndex].answer}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* BOTTOM */}

            <div className="relative z-10 flex items-end justify-between">
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

        {/* =====================================================
            MOBILE ANSWER
        ===================================================== */}

        <div className="mt-4 lg:hidden">
          <motion.div
            key={activeIndex}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              rounded-[22px]
              bg-[#0B2A52]
              p-7
              sm:p-8
            "
          >
            <div className="flex items-center justify-between">
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

            <h3
              className="
                mt-8
                font-[var(--font-new-york)]
                text-2xl
                font-medium
                leading-tight
                tracking-[-0.03em]
                text-white
              "
            >
              {faqs[activeIndex].question}
            </h3>

            <div className="mt-5 h-px w-9 bg-[#C6A77A]" />

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-white/60
              "
            >
              {faqs[activeIndex].answer}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}