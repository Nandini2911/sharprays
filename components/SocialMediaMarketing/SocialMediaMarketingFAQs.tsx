"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import {
  Plus,
  Minus,
  MessageCircleQuestion,
  ArrowUpRight,
} from "lucide-react";

const faqs = [
  {
    number: "01",
    question:
      "What is included in your social media management service?",
    answer:
      "Your service can include social media strategy, content planning, content creation, publishing, community management and performance reporting. The exact platforms, content volume and responsibilities are confirmed in your proposal before work begins.",
  },
  {
    number: "02",
    question:
      "How much does social media marketing cost?",
    answer:
      "Pricing depends on the number of platforms, content volume, production requirements and level of ongoing management. Your proposal sets out the agreed scope and cost clearly, so you know exactly what is included.",
  },
  {
    number: "03",
    question:
      "Which platforms should my business use?",
    answer:
      "The right platforms depend on your audience, goals, type of business and the kind of content you can realistically maintain. Rather than being everywhere, the focus is on choosing the channels that make the most sense for your brand.",
  },
  {
    number: "04",
    question:
      "Do you create reels, or do we provide footage?",
    answer:
      "Short-form video can be included where agreed. Depending on the project, you may provide footage for editing, or production requirements can be discussed as part of the scope. The exact responsibility is clarified before content production starts.",
  },
  {
    number: "05",
    question:
      "Is paid advertising included?",
    answer:
      "Paid advertising is treated as an optional addition unless it is specifically included in your proposal. Campaign management, creative production and advertising spend are clarified separately so there is no confusion between organic management and paid media.",
  },
  {
    number: "06",
    question:
      "How do you measure progress, and when should we expect it?",
    answer:
      "Progress is measured against the objectives agreed at the start, using relevant metrics such as reach, engagement, audience growth, enquiries or other meaningful outcomes. Social media performance develops over time, so reporting focuses on patterns, learning and continuous improvement rather than promising instant results.",
  },
];

export default function SocialMediaMarketingFAQs() {
  const id = useId();

  const sectionRef = useRef<HTMLElement>(null);

  const [openIndex, setOpenIndex] = useState(0);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);

        observer.disconnect();
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby={`${id}-heading`}
      className="
        relative
        overflow-hidden

        bg-white

        py-20

        text-[#0B2A52]

        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BRAND BACKGROUND ATMOSPHERE
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
        {/* LARGE NAVY GLOW — LEFT */}

        <div
          className="
            absolute

            -left-[380px]
            top-[40px]

            h-[880px]
            w-[880px]

            rounded-full

            bg-[#0B2A52]/[0.07]

            blur-[210px]
          "
        />

        {/* LARGE NAVY GLOW — RIGHT */}

        <div
          className="
            absolute

            -right-[360px]
            top-[260px]

            h-[820px]
            w-[820px]

            rounded-full

            bg-[#0B2A52]/[0.055]

            blur-[220px]
          "
        />

        {/* CENTER NAVY WASH */}

        <div
          className="
            absolute

            left-1/2
            top-[52%]

            h-[580px]
            w-[1050px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#0B2A52]/[0.035]

            blur-[180px]
          "
        />

        {/* GOLD GLOW */}

        <div
          className="
            absolute

            right-[12%]
            top-[24%]

            h-[360px]
            w-[360px]

            rounded-full

            bg-[#B79A72]/[0.10]

            blur-[135px]
          "
        />

        {/* SECOND GOLD GLOW */}

        <div
          className="
            absolute

            left-[10%]
            bottom-[4%]

            h-[300px]
            w-[300px]

            rounded-full

            bg-[#B79A72]/[0.06]

            blur-[120px]
          "
        />

        {/* WHITE CENTER LIGHT */}

        <div
          className="
            absolute

            left-1/2
            top-[48%]

            h-[450px]
            w-[780px]

            -translate-x-1/2

            rounded-full

            bg-white/70

            blur-[130px]
          "
        />

       
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

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
          ================================================== */}

          <div
            className={`
              transition-all

              duration-1000

              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            <div
              className="
                lg:sticky
                lg:top-28
              "
            >
              {/* LABEL */}

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

                    bg-[#B79A72]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold

                    uppercase

                    tracking-[0.22em]

                    text-[#B79A72]
                  "
                >
                  FAQs
                </span>
              </div>

              {/* TITLE */}

              <h2
                id={`${id}-heading`}
                className="
                  mt-6

                  max-w-[540px]

                  text-[40px]
                  font-medium

                  leading-[1.04]

                  tracking-[-0.05em]

                  text-[#0B2A52]

                  sm:text-[48px]
                  md:text-[53px]

                  lg:text-[52px]

                  xl:text-[58px]
                "
              >
                Questions before

                <span
                  className="
                    mt-1
                    block

                    text-[#B79A72]
                  "
                >
                  we get started?
                </span>
              </h2>

              {/* TEXT */}

              <p
                className="
                  mt-6

                  max-w-[430px]

                  text-[14px]
                  leading-7

                  text-[#0B2A52]/58

                  sm:text-[15px]
                "
              >
                Straightforward answers to the questions
                businesses usually ask before choosing a
                social media management partner.
              </p>

              {/* SMALL INFO BLOCK */}

              <div
                className="
                  mt-9

                  inline-flex

                  items-center

                  gap-4

                  rounded-[18px]

                  border
                  border-[#0B2A52]/[0.12]

                  bg-white/65

                  p-2
                  pr-5

                  shadow-[0_16px_35px_-28px_rgba(11,42,82,0.28)]

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:border-[#B79A72]/60
                  hover:bg-white
                "
              >
                <span
                  className="
                    flex

                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-[13px]

                    border
                    border-[#B79A72]/35

                    bg-[#B79A72]/[0.10]

                    text-[#B79A72]
                  "
                >
                  <MessageCircleQuestion
                    size={18}
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

                      tracking-[0.18em]

                      text-[#B79A72]
                    "
                  >
                    Still unsure?
                  </p>

                  <p
                    className="
                      mt-1

                      text-[12px]
                      font-medium

                      text-[#0B2A52]
                    "
                  >
                    Ask before you commit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              FAQ LIST
          ================================================== */}

          <div
            className={`
              transition-all

              delay-150
              duration-[1100ms]

              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }
            `}
          >
            <div
              className="
                overflow-hidden

                rounded-[26px]

                border
                border-[#0B2A52]/[0.12]

                bg-white/75

                shadow-[0_30px_75px_-55px_rgba(11,42,82,0.34)]

                backdrop-blur-xl
              "
            >
              {faqs.map((faq, index) => {
                const isOpen =
                  openIndex === index;

                const panelId = `${id}-faq-panel-${index}`;

                const buttonId = `${id}-faq-button-${index}`;

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
                          ? "bg-[#0B2A52]/[0.025]"
                          : "bg-transparent hover:bg-[#0B2A52]/[0.018]"
                      }
                    `}
                  >
                    {/* OPEN NAVY GLOW */}

                    <div
                      aria-hidden="true"
                      className={`
                        pointer-events-none

                        absolute

                        -right-20
                        -top-20

                        h-48
                        w-48

                        rounded-full

                        bg-[#0B2A52]/[0.07]

                        blur-[55px]

                        transition-opacity

                        duration-500

                        ${
                          isOpen
                            ? "opacity-100"
                            : "opacity-0"
                        }
                      `}
                    />

                    {/* GOLD GLOW */}

                    <div
                      aria-hidden="true"
                      className={`
                        pointer-events-none

                        absolute

                        right-[12%]
                        top-1/2

                        h-28
                        w-28

                        -translate-y-1/2

                        rounded-full

                        bg-[#B79A72]/[0.08]

                        blur-[50px]

                        transition-opacity

                        duration-500

                        ${
                          isOpen
                            ? "opacity-100"
                            : "opacity-0"
                        }
                      `}
                    />

                    {/* ACTIVE LEFT GOLD LINE */}

                    <span
                      aria-hidden="true"
                      className={`
                        absolute

                        bottom-5
                        left-0
                        top-5

                        w-[2px]

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
                        onClick={() =>
                          setOpenIndex(
                            isOpen ? -1 : index
                          )
                        }
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="
                          relative
                          z-10

                          flex
                          w-full

                          items-start

                          gap-5

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
                            mt-1

                            shrink-0

                            text-[9px]
                            font-semibold

                            tracking-[0.16em]

                            transition-colors
                            duration-500

                            ${
                              isOpen
                                ? "text-[#B79A72]"
                                : "text-[#0B2A52]/32"
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

                            text-[18px]
                            font-medium

                            leading-[1.35]

                            tracking-[-0.025em]

                            transition-colors

                            duration-500

                            sm:text-[20px]

                            lg:text-[21px]

                            ${
                              isOpen
                                ? "text-[#0B2A52]"
                                : "text-[#0B2A52]/72"
                            }
                          `}
                        >
                          {faq.question}
                        </span>

                        {/* PLUS / MINUS */}

                        <span
                          className={`
                            flex
                            h-10
                            w-10

                            shrink-0

                            items-center
                            justify-center

                            rounded-full

                            border

                            transition-all

                            duration-500

                            ${
                              isOpen
                                ? "rotate-0 border-[#B79A72]/65 bg-[#B79A72]/[0.12] text-[#B79A72]"
                                : "border-[#0B2A52]/[0.12] bg-white/60 text-[#0B2A52]/55 group-hover:border-[#B79A72]/50 group-hover:bg-[#B79A72]/[0.07] group-hover:text-[#B79A72]"
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
                            relative
                            z-10

                            px-5
                            pb-7

                            sm:px-7
                            sm:pb-8

                            lg:px-8
                          "
                        >
                          <div
                            className="
                              ml-[34px]

                              border-l
                              border-[#B79A72]/45

                              pl-5

                              sm:ml-[42px]
                              sm:pl-6
                            "
                          >
                            <p
                              className="
                                max-w-[650px]

                                text-[13px]
                                leading-7

                                text-[#0B2A52]/58

                                sm:text-[14px]
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

            {/* =================================================
                BOTTOM CTA NOTE
            ================================================== */}

            <div
              className="
                mt-6

                flex

                flex-col

                gap-4

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p
                className="
                  max-w-[520px]

                  text-[11px]
                  leading-6

                  text-[#0B2A52]/48
                "
              >
                Your proposal confirms the final scope,
                responsibilities and commercial details
                before work begins.
              </p>

              <button
                type="button"
                className="
                  group

                  inline-flex

                  w-fit

                  items-center

                  gap-2

                  text-[9px]
                  font-semibold

                  uppercase

                  tracking-[0.17em]

                  text-[#B79A72]

                  transition-colors

                  duration-300

                  hover:text-[#0B2A52]
                "
              >
                Have another question

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="
                    transition-transform

                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM BRAND DETAIL
        ==================================================== */}

        <div
          className="
            mx-auto

            mt-12

            flex

            max-w-[720px]

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

              to-[#B79A72]/55
            "
          />

          <span
            className="
              shrink-0

              text-[8px]
              font-semibold

              uppercase

              tracking-[0.18em]

              text-[#0B2A52]/35
            "
          >
            Clear answers · Clear expectations
          </span>

          <span
            className="
              h-px
              flex-1

              bg-gradient-to-l

              from-transparent

              to-[#B79A72]/55
            "
          />
        </div>
      </div>
    </section>
  );
}