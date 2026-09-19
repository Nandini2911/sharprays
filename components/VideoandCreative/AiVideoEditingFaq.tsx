"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type FaqItem = {
  number: string;
  question: string;
  answer: string[];
};

const faqs: FaqItem[] = [
  {
    number: "01",
    question: "What is AI video creation?",
    answer: [
      "AI video creation uses generative artificial intelligence to create or transform moving visual content from inputs such as text, images or existing media.",
      "It can support concept development, generated scenes, animation and other visual production requirements.",
    ],
  },
  {
    number: "02",
    question: "What types of AI video ads can you create?",
    answer: [
      "Depending on the product, audience and campaign objective, AI-assisted advertising can include product hero ads, UGC or influencer-style creative, problem-to-solution ads, product demonstrations, cinematic brand commercials and transformation or before-and-after concepts.",
      "The most suitable format depends on what the audience needs to understand and the action the campaign is designed to generate.",
    ],
  },
  {
    number: "03",
    question: "What is AI video editing?",
    answer: [
      "AI video editing uses AI-assisted tools to support parts of the post-production process.",
      "Depending on the workflow, this can include caption assistance, cleanup, visual enhancement, asset organization or format adaptation.",
      "Creative editing decisions still require judgement around pacing, story, brand and audience.",
    ],
  },
  {
    number: "04",
    question: "What is included in your video editing service?",
    answer: [
      "The exact scope depends on the project.",
      "Editing may include footage selection, cutting, pacing, colour treatment, audio refinement, captions, transitions, graphics, motion, calls to action and platform-specific exports.",
    ],
  },
  {
    number: "05",
    question: "Can you create an entire video using AI?",
    answer: [
      "Yes, certain concepts can be produced primarily with AI-generated assets.",
      "Whether that approach makes sense depends on the message, desired realism, brand requirements and intended use.",
    ],
  },
  {
    number: "06",
    question: "Can you edit footage we already have?",
    answer: [
      "Yes.",
      "Existing footage can be turned into polished videos, short-form clips, ads, social posts or other agreed formats.",
    ],
  },
  {
    number: "07",
    question: "Do you edit Instagram Reels and YouTube Shorts?",
    answer: [
      "Yes.",
      "Vertical short-form editing can be created for Instagram Reels, YouTube Shorts and other suitable social platforms.",
    ],
  },
  {
    number: "08",
    question: "Do you edit YouTube videos?",
    answer: [
      "Yes.",
      "Depending on the agreed scope, YouTube editing can include long-form videos, educational content, interviews, explainers and supporting short-form cutdowns.",
    ],
  },
  {
    number: "09",
    question: "Can you create video ads?",
    answer: [
      "Yes.",
      "Advertising videos can include new edits, AI-assisted visuals, performance variations, different hooks, messages and calls to action.",
    ],
  },
  {
    number: "10",
    question: "Can AI video match our brand?",
    answer: [
      "It can be developed around an agreed creative direction, but generated outputs may require refinement to achieve the required consistency.",
      "That is why we combine generation with professional editing and brand review rather than relying on raw AI outputs alone.",
    ],
  },
  {
    number: "11",
    question: "Can one long video become several short videos?",
    answer: [
      "Often, yes.",
      "Interviews, podcasts, presentations and other long-form recordings can frequently be repurposed into multiple shorter assets where the source material supports it.",
    ],
  },
  {
    number: "12",
    question: "Do you add captions and subtitles?",
    answer: [
      "Yes, where included within the project scope.",
      "Captions can be styled around the intended platform and brand direction.",
    ],
  },
  {
    number: "13",
    question: "Do you provide voiceovers?",
    answer: [
      "Voiceover requirements can be included depending on the project.",
      "The proposal should clarify whether the project uses client-provided audio, licensed talent, synthetic voice or another agreed approach.",
    ],
  },
  {
    number: "14",
    question: "How long does video editing take?",
    answer: [
      "Timelines depend on the amount of source material, final duration, complexity, number of outputs, motion requirements and revision process.",
      "The expected delivery schedule is confirmed once the project scope is clear.",
    ],
  },
  {
    number: "15",
    question: "How much do AI video and editing services cost?",
    answer: [
      "Pricing depends on factors such as video length, number of assets, generation requirements, editing complexity, motion graphics, audio work, platform versions and revisions.",
      "Sharp Rays defines the scope before confirming commercial terms.",
    ],
  },
  {
    number: "16",
    question: "Is AI-generated video good for SEO?",
    answer: [
      "Using AI does not give a video a special ranking advantage.",
      "Search visibility depends more on whether the content is useful, accessible and supported by relevant page information, titles, descriptions and technical implementation.",
    ],
  },
  {
    number: "17",
    question: "Can AI-generated videos appear in Google Search?",
    answer: [
      "Eligible video content can appear across Google Search experiences when Google can access and understand the video and its page.",
      "Appropriate video metadata, useful surrounding content and structured data can support discovery, but visibility is not guaranteed.",
    ],
  },
  {
    number: "18",
    question: "Can AI video help with AI Overviews or generative search?",
    answer: [
      "There is no special AI-video shortcut for appearing in generative search.",
      "The same broader SEO principles remain important: useful content, crawlable pages, clear context, strong internal connections and trustworthy information.",
    ],
  },
  {
    number: "19",
    question: "Do you disclose when AI is used?",
    answer: [
      "Where AI generation materially affects the creative and disclosure would reasonably help the audience understand how the content was produced, that can be discussed as part of the project's publishing requirements.",
    ],
  },
];

/* =========================================================
   FAQ ITEM
========================================================= */

function FaqRow({
  faq,
  index,
  isOpen,
  onToggle,
  reduceMotion,
}: {
  faq: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
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
        amount: 0.3,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : Math.min(index * 0.025, 0.18),
        ease,
      }}
      className="
        group
        relative
        border-b
        border-[#0B2A52]/[0.09]
      "
    >
      {/* QUESTION */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          grid
          w-full
          grid-cols-[50px_1fr_44px]
          items-center
          gap-4
          py-6
          text-left

          sm:grid-cols-[62px_1fr_48px]
          sm:gap-5
          sm:py-7
        "
      >
        {/* NUMBER */}

        <span
          style={newYorkFont}
          className={`
            text-[25px]
            font-light
            leading-none
            tracking-[-0.05em]
            transition-colors
            duration-300

            sm:text-[29px]

            ${
              isOpen
                ? "text-[#B88959]"
                : "text-[#0B2A52]/20 group-hover:text-[#B88959]"
            }
          `}
        >
          {faq.number}
        </span>

        {/* QUESTION */}

        <h3
          style={newYorkFont}
          className={`
            pr-2
            text-[17px]
            font-light
            leading-[1.25]
            tracking-[-0.025em]
            transition-colors
            duration-300

            sm:text-[19px]
            lg:text-[20px]

            ${
              isOpen
                ? "text-[#0B2A52]"
                : "text-[#173A61] group-hover:text-[#0B2A52]"
            }
          `}
        >
          {faq.question}
        </h3>

        {/* TOGGLE */}

        <motion.span
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.3,
            ease,
          }}
          className={`
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300

            ${
              isOpen
                ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                : "border-[#C9DBE8] bg-[#F1F7FB] text-[#0B2A52] group-hover:border-[#0B2A52]/30"
            }
          `}
        >
          <ChevronDown
            size={17}
            strokeWidth={1.5}
          />
        </motion.span>
      </button>

      {/* ANSWER */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: reduceMotion ? 0 : 0.38,
                ease,
              },
              opacity: {
                duration: reduceMotion ? 0 : 0.25,
              },
            }}
            className="overflow-hidden"
          >
            <div
              className="
                grid
                grid-cols-[50px_1fr_44px]
                gap-4
                pb-7

                sm:grid-cols-[62px_1fr_48px]
                sm:gap-5
                sm:pb-8
              "
            >
              <div />

              <div
                className="
                  relative
                  max-w-[760px]
                  border-l
                  border-[#C6A77A]/55
                  pl-5

                  sm:pl-6
                "
              >
                {faq.answer.map((paragraph, paragraphIndex) => (
                  <p
                    key={`${faq.number}-${paragraphIndex}`}
                    style={newYorkFont}
                    className={`
                      text-[13px]
                      leading-[1.7]
                      text-[#48637D]

                      sm:text-[14px]

                      ${paragraphIndex > 0 ? "mt-3" : ""}
                    `}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ACTIVE LINE */}

      <span
        className={`
          absolute
          bottom-0
          left-[66px]
          h-[2px]
          bg-[#C6A77A]
          transition-all
          duration-500

          sm:left-[82px]

          ${isOpen ? "w-16" : "w-0"}
        `}
      />
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AiVideoEditingFaq() {
  const reduceMotion = Boolean(useReducedMotion());
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="ai-video-editing-faq"
      aria-labelledby="ai-video-editing-faq-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFD_48%,#FFFFFF_100%)]
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* LEFT ARC */}

        <div
          className="
            absolute
            -left-[390px]
            top-[16%]
            h-[760px]
            w-[760px]
            rounded-full
            border-[88px]
            border-[#E7F0F7]/60
          "
        />

        <div
          className="
            absolute
            -left-[275px]
            top-[23%]
            h-[530px]
            w-[530px]
            rounded-full
            border
            border-[#C6A77A]/25
          "
        />

        {/* RIGHT ARC */}

        <div
          className="
            absolute
            -right-[360px]
            top-[46%]
            hidden
            h-[720px]
            w-[720px]
            rounded-full
            border-[80px]
            border-[#EDF4F8]/70

            xl:block
          "
        />

        {/* CENTER GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-[34%]
            h-[600px]
            w-[1000px]
            -translate-x-1/2
            rounded-full
            bg-[#EDF5FA]/55
            blur-[150px]
          "
        />

        {/* GHOST FAQ */}

        <span
          style={newYorkFont}
          className="
            absolute
            right-[-20px]
            top-[25%]
            hidden
            rotate-90
            whitespace-nowrap
            text-[170px]
            font-light
            tracking-[-0.07em]
            text-[#0B2A52]/[0.012]

            xl:block
          "
        >
          QUESTIONS
        </span>
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1460px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            TOP META
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
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
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            flex
            items-center
            justify-between
            gap-6
          "
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-11 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.31em]
                text-[#B88959]

                sm:text-[10px]
              "
            >
              AI Video & Video Editing FAQs
            </span>
          </div>

          <div
            className="
              hidden
              items-center
              gap-4

              lg:flex
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.24em]
                text-[#0B2A52]/40
              "
            >
              AI VIDEO / EDITING / SEARCH
            </span>

            <span className="h-px w-10 bg-[#C6A77A]" />
          </div>
        </motion.div>

        {/* =====================================================
            MAIN
        ===================================================== */}

        <div
          className="
            mt-14
            grid
            gap-14

            xl:grid-cols-[0.36fr_0.64fr]
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT INTRO
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              xl:sticky
              xl:top-24
              xl:self-start
            "
          >
            <h2
              id="ai-video-editing-faq-heading"
              style={newYorkFont}
              className="
                max-w-[570px]
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
              Questions Before
              <br />

              <span className="text-[#B88959]">
                We Start Editing?
              </span>
            </h2>

            <p
              style={newYorkFont}
              className="
                mt-7
                max-w-[450px]
                text-[15px]
                leading-[1.7]
                text-[#49637B]

                sm:text-[16px]
              "
            >
              Clear answers to common questions businesses ask about AI video
              creation and professional editing.
            </p>

            {/* VISUAL */}

            <div
              className="
                relative
                mt-10
                max-w-[420px]
                overflow-hidden
                rounded-[28px]
                border
                border-[#C9DDEA]
                bg-[linear-gradient(135deg,#F8FBFE_0%,#EBF4FA_100%)]
                px-7
                py-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[95px]
                  -top-[105px]
                  h-[220px]
                  w-[220px]
                  rounded-full
                  border-[32px]
                  border-white/60
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  items-start
                  gap-5
                "
              >
                <div
                  className="
                    flex
                    h-[62px]
                    w-[62px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                    shadow-[0_12px_30px_rgba(11,42,82,0.18)]
                  "
                >
                  <MessageCircleQuestion
                    size={27}
                    strokeWidth={1.35}
                  />
                </div>

                <div>
                  <span
                    style={newYorkFont}
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.24em]
                      text-[#B88959]
                    "
                  >
                    QUICK ANSWERS
                  </span>

                  <p
                    style={newYorkFont}
                    className="
                      mt-3
                      text-[1.4rem]
                      font-light
                      leading-[1.1]
                      tracking-[-0.035em]
                      text-[#0B2A52]
                    "
                  >
                    Clear information before the first frame gets edited.
                  </p>
                </div>
              </div>
            </div>

            {/* MICROCOPY */}

            <div
              className="
                mt-9
                flex
                items-center
                gap-4
              "
            >
              <Sparkles
                size={15}
                strokeWidth={1.4}
                className="text-[#B88959]"
              />

              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.23em]
                  text-[#0B2A52]/45
                "
              >
                CREATION · EDITING · BRAND · SEARCH
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT FAQ
          ================================================= */}

          <div>
            {/* FAQ HEADER */}

            <div
              className="
                flex
                items-end
                justify-between
                gap-5
                border-b
                border-[#0B2A52]/10
                pb-5
              "
            >
              <div>
                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-[#B88959]
                  "
                >
                  FAQ INDEX
                </span>

                <p
                  style={newYorkFont}
                  className="
                    mt-2
                    text-[13px]
                    text-[#49637B]
                  "
                >
                  Select a question to read the answer.
                </p>
              </div>

              <span
                style={newYorkFont}
                className="
                  text-[2rem]
                  font-light
                  leading-none
                  tracking-[-0.05em]
                  text-[#0B2A52]/15
                "
              >
                19
              </span>
            </div>

            {/* FAQ LIST */}

            <div>
              {faqs.map((faq, index) => (
                <FaqRow
                  key={faq.number}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTER MICROCOPY
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
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
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-[#0B2A52]/[0.07]
            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-4">
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.23em]
                text-[#0B2A52]/45
              "
            >
              Sharp Rays
            </span>

            <span className="text-[7px] text-[#0B2A52]/25">
              /
            </span>

            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.23em]
                text-[#0B2A52]/45
              "
            >
              AI Video & Editing
            </span>

            <span className="h-px w-10 bg-[#B88959]" />
          </div>

          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#B88959]" />

            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.22em]
                text-[#0B2A52]/40
              "
            >
              Clear Questions. Clear Answers.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}