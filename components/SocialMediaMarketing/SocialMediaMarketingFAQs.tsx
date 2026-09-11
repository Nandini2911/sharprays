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

const faqs = [
  {
    number: "01",
    question: "What does a social media marketing agency do?",
    answer:
      "A social media marketing agency helps businesses plan, create, manage and improve their presence across social platforms. Services may include social media strategy, content creation, publishing, community management, paid advertising and performance reporting.",
  },
  {
    number: "02",
    question: "What is included in social media management?",
    answer:
      "Social media management can include strategy, content planning, content creation, scheduling, publishing, community engagement and reporting. The exact deliverables depend on the platforms, content volume and responsibilities included in your plan.",
  },
  {
    number: "03",
    question: "How much does social media marketing cost?",
    answer:
      "Social media marketing costs vary depending on the number of platforms, volume and type of content, video production requirements, community management, paid advertising and level of ongoing support. Sharp Rays confirms the final price after defining the required scope.",
  },
  {
    number: "04",
    question: "Which social media platform is best for my business?",
    answer:
      "The best platform depends on your audience, industry and goals. Instagram may suit highly visual brands, while LinkedIn can be more relevant for many B2B businesses. The right strategy focuses on the platforms where your audience and business objectives overlap.",
  },
  {
    number: "05",
    question: "Do you create social media content?",
    answer:
      "Yes. Content creation can be included within a Sharp Rays social media management plan. Depending on the agreed scope, this may include graphics, carousels, captions, stories and short-form video content.",
  },
  {
    number: "06",
    question: "Do you create Instagram Reels and short-form videos?",
    answer:
      "Short-form video can be included depending on your package and production requirements. The proposal clarifies whether Sharp Rays creates the complete video, works with footage supplied by your team or requires separate production.",
  },
  {
    number: "07",
    question: "Do you manage comments and direct messages?",
    answer:
      "Community management can be included in your service. The exact responsibilities, response expectations and escalation process are agreed before management begins.",
  },
  {
    number: "08",
    question: "Is paid social media advertising included?",
    answer:
      "Paid advertising is available as an additional service where required. Campaign management, creative production and advertising spend are defined separately in your proposal.",
  },
  {
    number: "09",
    question: "How do you measure social media performance?",
    answer:
      "The metrics used depend on your objectives. They may include reach, engagement, audience growth, profile activity, website traffic, enquiries, leads or conversions where tracking is available.",
  },
  {
    number: "10",
    question: "How long does social media marketing take to work?",
    answer:
      "There is no universal timeline. Performance depends on factors such as your starting position, industry, audience, content quality, publishing consistency, offer and objectives. We monitor relevant indicators over time rather than promising unrealistic overnight results.",
  },
  {
    number: "11",
    question: "Can Sharp Rays manage more than one social media platform?",
    answer:
      "Yes. Your strategy can cover multiple platforms when they are relevant to your business. The final number of channels and responsibilities is confirmed in your service proposal.",
  },
  {
    number: "12",
    question: "Do I approve content before it is published?",
    answer:
      "Yes. The review and approval process is agreed before work begins so your team knows how and when content will be approved before publishing.",
  },
];

export default function SocialMediaMarketingFAQs() {
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
      id="social-media-marketing-faq"
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

        <div
          className="
            absolute
            -right-[300px]
            bottom-[80px]
            h-[580px]
            w-[580px]
            rounded-full
            border
            border-[#B79A72]/10
          "
        />

        <div
          className="
            absolute
            left-[5%]
            top-[42%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#0B2A52]/[0.025]
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            right-[4%]
            top-[20%]
            h-[250px]
            w-[250px]
            rounded-full
            bg-[#B79A72]/[0.055]
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
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
              y: 20,
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
                <span className="h-px w-9 bg-[#B79A72]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#B79A72]
                  "
                >
                  Frequently Asked Questions
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
                    text-[#B79A72]
                  "
                >
                  Social Media Marketing?
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
                Clear answers to the questions businesses commonly ask before
                choosing a social media marketing partner.
              </p>

              {/* SMALL CONTACT BLOCK */}

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
                  hover:border-[#B79A72]/55
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
                    text-[#B79A72]
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
                      text-[#B79A72]
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

              {/* INDEX */}

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
                    text-[44px]
                    leading-none
                    text-[#0B2A52]/[0.07]
                  "
                >
                  12
                </span>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#B79A72]
                    "
                  >
                    Common Questions
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      text-[#0B2A52]/38
                    "
                  >
                    Strategy to publishing and reporting
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
              x: 35,
              y: 25,
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
                          ? "bg-[#0B2A52]/[0.022]"
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
                        bg-[#B79A72]
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
                                ? "text-[#B79A72]"
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
                                ? "border-[#0B2A52] bg-[#0B2A52] text-[#B79A72]"
                                : "border-[#0B2A52]/12 bg-white text-[#0B2A52]/45 group-hover:border-[#B79A72]/55 group-hover:text-[#B79A72]"
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
                              border-[#B79A72]/45
                              pl-5
                              sm:ml-[40px]
                              sm:pl-6
                            "
                          >
                            <p
                              className="
                                max-w-[680px]
                                text-[14px]
                                leading-7
                                text-[#0B2A52]/58
                                sm:text-[15px]
                              "
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* BOTTOM QUESTION LINK */}

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
                  text-[#B79A72]
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
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-14
            flex
            max-w-[720px]
            items-center
            gap-4
          "
        >
          <span className="h-px flex-1 bg-[#B79A72]/40" />

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
            Clear Answers · Clear Expectations
          </span>

          <span className="h-px flex-1 bg-[#B79A72]/40" />
        </div>
      </div>
    </section>
  );
}