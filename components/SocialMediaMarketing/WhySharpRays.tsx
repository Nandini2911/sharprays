"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const questions = [
  {
    number: "01",
    text: "Who are we trying to reach?",
    imageIndex: 0,
  },
  {
    number: "02",
    text: "What should they understand about your brand?",
    imageIndex: 1,
  },
  {
    number: "03",
    text: "What makes your business worth paying attention to?",
    imageIndex: 0,
  },
  {
    number: "04",
    text: "What should your brand become known for?",
    imageIndex: 2,
  },
  {
    number: "05",
    text: "What action should the audience take next?",
    imageIndex: 2,
  },
];

const photos = [
  {
    src: "/services/social/content-strategy.png",
    alt: "Creative team discussing social media strategy",
    label: "Audience + Purpose",
  },
  {
    src: "/services/social/strategy-team.png",
    alt: "Strategist reviewing audience and brand direction",
    label: "Message + Meaning",
  },
  {
    src: "/services/social/content-system.png",
    alt: "Creative content arranged into a consistent brand system",
    label: "Recognition + Action",
  },
];

export default function WhySharpRays() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeQuestion, setActiveQuestion] = useState(0);

  const isVisible = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const reduceMotion = useReducedMotion();

  const activeImage =
    questions[activeQuestion].imageIndex;

  return (
    <section
      ref={sectionRef}
      id="why-sharp-rays"
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
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

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
            -left-[350px]
            top-[160px]
            h-[650px]
            w-[650px]
            rounded-full
            border
            border-[#0B2A52]/[0.035]
          "
        />

        <div
          className="
            absolute
            -right-[300px]
            bottom-[-230px]
            h-[560px]
            w-[560px]
            rounded-full
            border
            border-[#B79A72]/10
          "
        />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================== */}

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
        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 40,
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
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[980px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-[#B79A72]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#B79A72]
              "
            >
              Why Sharp Rays
            </span>

            <span className="h-px w-10 bg-[#B79A72]" />
          </div>

          <h2
            className="
              mt-6
              text-[2.25rem]
              font-medium
              leading-[1.07]
              tracking-[-0.045em]
              text-[#0B2A52]
              sm:text-[2.75rem]
              md:text-[3.15rem]
              lg:text-[3.55rem]
            "
          >
            We Don&apos;t Start by Asking,{" "}
            <span className="font-normal text-[#B79A72]">
              “What Should We Post?”
            </span>
          </h2>
        </motion.header>

        {/* =======================================================
            WRONG QUESTION → BETTER QUESTIONS
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: reduceMotion ? 0 : 0.8,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-12
            flex
            max-w-[970px]
            flex-col
            items-center
          "
        >
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#0B2A52]/32
            "
          >
            The first question is not
          </p>

          <div className="relative mt-3">
            <p
              className="
                text-[19px]
                font-medium
                tracking-[-0.02em]
                text-[#0B2A52]/30
                sm:text-[22px]
              "
            >
              What should we post?
            </p>

            <motion.span
              initial={{
                scaleX: 0,
              }}
              animate={
                isVisible
                  ? {
                      scaleX: 1,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-[-4%]
                top-1/2
                h-[2px]
                w-[108%]
                origin-left
                -rotate-2
                bg-[#B79A72]
              "
            />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
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
              duration: reduceMotion ? 0 : 0.6,
              delay: 0.8,
            }}
            className="
              mt-6
              flex
              flex-col
              items-center
              gap-2
            "
          >
            <span className="h-8 w-px bg-[#B79A72]/50" />

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#B79A72]/40
                bg-white
                text-[#B79A72]
              "
            >
              <ArrowDown
                size={14}
                strokeWidth={1.5}
              />
            </span>

            <span
              className="
                mt-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#0B2A52]
              "
            >
              We start here
            </span>
          </motion.div>
        </motion.div>

        {/* =======================================================
            STRATEGY TABLE EXPERIENCE
        ======================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-[1160px]
            lg:mt-16
          "
        >
          {/* =====================================================
              DESKTOP
          ====================================================== */}

          <div
            className="
              hidden
              min-h-[700px]
              lg:block
            "
          >
            {/* ===================================================
                PHOTO 01
            ==================================================== */}

            <motion.button
              type="button"
              onMouseEnter={() => setActiveQuestion(0)}
              onFocus={() => setActiveQuestion(0)}
              onClick={() => setActiveQuestion(0)}
              initial={{
                opacity: 0,
                x: -45,
                rotate: -4,
              }}
              animate={
                isVisible
                  ? {
                      opacity: activeImage === 0 ? 1 : 0.48,
                      x: 0,
                      rotate: activeImage === 0 ? -2 : -5,
                      scale: activeImage === 0 ? 1.04 : 0.96,
                      zIndex: activeImage === 0 ? 30 : 10,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-[5%]
                top-[55px]
                h-[360px]
                w-[43%]
                overflow-hidden
                border-[8px]
                border-white
                bg-white
                shadow-[0_24px_60px_rgba(11,42,82,0.13)]
                outline-none
              "
            >
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                sizes="520px"
                className="
                  object-cover
                  object-center
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  bg-white
                  px-4
                  py-2.5
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#0B2A52]
                  "
                >
                  {photos[0].label}
                </p>
              </div>
            </motion.button>

            {/* ===================================================
                PHOTO 02
            ==================================================== */}

            <motion.button
              type="button"
              onMouseEnter={() => setActiveQuestion(1)}
              onFocus={() => setActiveQuestion(1)}
              onClick={() => setActiveQuestion(1)}
              initial={{
                opacity: 0,
                y: 45,
                rotate: 4,
              }}
              animate={
                isVisible
                  ? {
                      opacity: activeImage === 1 ? 1 : 0.48,
                      y: 0,
                      rotate: activeImage === 1 ? 2 : 5,
                      scale: activeImage === 1 ? 1.04 : 0.96,
                      zIndex: activeImage === 1 ? 30 : 10,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-[34%]
                top-[155px]
                h-[390px]
                w-[35%]
                overflow-hidden
                border-[8px]
                border-white
                bg-white
                shadow-[0_24px_60px_rgba(11,42,82,0.13)]
                outline-none
              "
            >
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                sizes="420px"
                className="
                  object-cover
                  object-center
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  bg-white
                  px-4
                  py-2.5
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#0B2A52]
                  "
                >
                  {photos[1].label}
                </p>
              </div>
            </motion.button>

            {/* ===================================================
                PHOTO 03
            ==================================================== */}

            <motion.button
              type="button"
              onMouseEnter={() => setActiveQuestion(3)}
              onFocus={() => setActiveQuestion(3)}
              onClick={() => setActiveQuestion(3)}
              initial={{
                opacity: 0,
                x: 45,
                rotate: -3,
              }}
              animate={
                isVisible
                  ? {
                      opacity: activeImage === 2 ? 1 : 0.48,
                      x: 0,
                      rotate: activeImage === 2 ? -1 : -4,
                      scale: activeImage === 2 ? 1.04 : 0.96,
                      zIndex: activeImage === 2 ? 30 : 10,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                right-[4%]
                top-[65px]
                h-[350px]
                w-[34%]
                overflow-hidden
                border-[8px]
                border-white
                bg-white
                shadow-[0_24px_60px_rgba(11,42,82,0.13)]
                outline-none
              "
            >
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                sizes="420px"
                className="
                  object-cover
                  object-center
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  bg-white
                  px-4
                  py-2.5
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#0B2A52]
                  "
                >
                  {photos[2].label}
                </p>
              </div>
            </motion.button>

            {/* ===================================================
                QUESTION 01
            ==================================================== */}

            <QuestionPrompt
              question={questions[0]}
              active={activeQuestion === 0}
              className="
                left-0
                top-[8px]
              "
              isVisible={isVisible}
              reduceMotion={reduceMotion}
              delay={0.35}
              onActivate={() => setActiveQuestion(0)}
            />

            {/* QUESTION 02 */}

            <QuestionPrompt
              question={questions[1]}
              active={activeQuestion === 1}
              className="
                right-[1%]
                top-[5px]
              "
              isVisible={isVisible}
              reduceMotion={reduceMotion}
              delay={0.45}
              onActivate={() => setActiveQuestion(1)}
            />

            {/* QUESTION 03 */}

            <QuestionPrompt
              question={questions[2]}
              active={activeQuestion === 2}
              className="
                left-[2%]
                bottom-[82px]
              "
              isVisible={isVisible}
              reduceMotion={reduceMotion}
              delay={0.55}
              onActivate={() => setActiveQuestion(2)}
            />

            {/* QUESTION 04 */}

            <QuestionPrompt
              question={questions[3]}
              active={activeQuestion === 3}
              className="
                left-[39%]
                bottom-[12px]
              "
              isVisible={isVisible}
              reduceMotion={reduceMotion}
              delay={0.65}
              onActivate={() => setActiveQuestion(3)}
            />

            {/* QUESTION 05 */}

            <QuestionPrompt
              question={questions[4]}
              active={activeQuestion === 4}
              className="
                right-[1%]
                bottom-[92px]
              "
              isVisible={isVisible}
              reduceMotion={reduceMotion}
              delay={0.75}
              onActivate={() => setActiveQuestion(4)}
            />
          </div>

          {/* =====================================================
              MOBILE / TABLET
          ====================================================== */}

          <div className="lg:hidden">
            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
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
                duration: reduceMotion ? 0 : 0.8,
              }}
              className="
                relative
                aspect-[4/3]
                overflow-hidden
                border-[6px]
                border-white
                shadow-[0_20px_55px_rgba(11,42,82,0.12)]
              "
            >
              <Image
                src={photos[activeImage].src}
                alt={photos[activeImage].alt}
                fill
                sizes="100vw"
                className="
                  object-cover
                  object-center
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  bg-white
                  px-4
                  py-2.5
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#0B2A52]
                  "
                >
                  {photos[activeImage].label}
                </p>
              </div>
            </motion.div>

            {/* QUESTIONS */}

            <div
              className="
                mt-7
                border-t
                border-[#0B2A52]/10
              "
            >
              {questions.map((question, index) => {
                const active =
                  activeQuestion === index;

                return (
                  <button
                    key={question.number}
                    type="button"
                    onClick={() =>
                      setActiveQuestion(index)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      gap-4
                      border-b
                      border-[#0B2A52]/10
                      py-5
                      text-left
                    "
                  >
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
                        text-[9px]
                        font-semibold
                        transition-all
                        duration-300
                        ${
                          active
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                            : "border-[#0B2A52]/15 bg-white text-[#B79A72]"
                        }
                      `}
                    >
                      {question.number}
                    </span>

                    <p
                      className={`
                        flex-1
                        text-[15px]
                        font-medium
                        leading-6
                        transition-colors
                        duration-300
                        sm:text-[17px]
                        ${
                          active
                            ? "text-[#0B2A52]"
                            : "text-[#0B2A52]/58"
                        }
                      `}
                    >
                      {question.text}
                    </p>

                    {active ? (
                      <Check
                        size={16}
                        className="text-[#B79A72]"
                      />
                    ) : (
                      <ArrowRight
                        size={15}
                        className="text-[#0B2A52]/20"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =======================================================
            CONTENT DIRECTION
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            duration: reduceMotion ? 0 : 0.85,
            delay: 0.8,
          }}
          className="
            mx-auto
            mt-14
            max-w-[900px]
            text-center
            lg:mt-10
          "
        >
          <span
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#B79A72]/40
              text-[#B79A72]
            "
          >
            <Sparkles
              size={17}
              strokeWidth={1.5}
            />
          </span>

          <p
            className="
              mt-5
              text-[20px]
              font-medium
              tracking-[-0.025em]
              text-[#0B2A52]
              sm:text-[23px]
            "
          >
            Those answers give your content direction.
          </p>

          <p
            className="
              mx-auto
              mt-4
              max-w-[750px]
              text-[14px]
              leading-7
              text-[#0B2A52]/55
              sm:text-[15px]
            "
          >
            Because a strong social media presence is not created by
            publishing more for the sake of publishing.
          </p>
        </motion.div>

        {/* =======================================================
            FINAL MESSAGE
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            duration: reduceMotion ? 0 : 0.9,
            delay: 0.95,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-[1080px]
            border-y
            border-[#0B2A52]/12
            py-12
            text-center
            sm:mt-16
            sm:py-14
          "
        >
          <motion.span
            initial={{
              scaleX: 0,
            }}
            animate={
              isVisible
                ? {
                    scaleX: 1,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: 1.15,
            }}
            className="
              mx-auto
              mb-7
              block
              h-[3px]
              w-16
              origin-center
              bg-[#B79A72]
            "
          />

          <p
            className="
              mx-auto
              max-w-[900px]
              text-[24px]
              font-medium
              leading-[1.4]
              tracking-[-0.032em]
              text-[#0B2A52]
              sm:text-[29px]
              md:text-[32px]
              lg:text-[35px]
            "
          >
            It is created by making every piece of content part of{" "}
            <span className="text-[#B79A72]">
              something bigger.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP QUESTION PROMPT
========================================================== */

type QuestionPromptProps = {
  question: {
    number: string;
    text: string;
  };
  active: boolean;
  className: string;
  isVisible: boolean;
  reduceMotion: boolean | null;
  delay: number;
  onActivate: () => void;
};

function QuestionPrompt({
  question,
  active,
  className,
  isVisible,
  reduceMotion,
  delay,
  onActivate,
}: QuestionPromptProps) {
  return (
    <motion.button
      type="button"
      initial={{
        opacity: 0,
        y: 20,
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
        delay,
      }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`
        group
        absolute
        z-40
        max-w-[315px]
        text-left
        outline-none
        ${className}
      `}
    >
      <div
        className={`
          relative
          flex
          items-center
          gap-4
          border
          px-5
          py-4
          shadow-[0_12px_35px_rgba(11,42,82,0.08)]
          transition-all
          duration-400
          ${
            active
              ? "border-[#B79A72] bg-white"
              : "border-[#0B2A52]/10 bg-white/95"
          }
        `}
      >
        <span
          className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            text-[9px]
            font-semibold
            transition-all
            duration-400
            ${
              active
                ? "bg-[#0B2A52] text-white"
                : "border border-[#0B2A52]/12 text-[#B79A72]"
            }
          `}
        >
          {question.number}
        </span>

        <p
          className={`
            text-[14px]
            font-medium
            leading-6
            tracking-[-0.015em]
            transition-colors
            duration-300
            ${
              active
                ? "text-[#0B2A52]"
                : "text-[#0B2A52]/62"
            }
          `}
        >
          {question.text}
        </p>
      </div>
    </motion.button>
  );
}