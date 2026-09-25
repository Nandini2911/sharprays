"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  CirclePlay,
  Clapperboard,
  Film,
  Layers3,
  Megaphone,
  MonitorSmartphone,
  Package,
  Plus,
  Scissors,
  Sparkles,
  Smartphone,
  Video,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type OutputItem = {
  title: string;
  icon: LucideIcon;

  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
};

/* =========================================================
   OUTPUT DATA
========================================================= */

const outputs: OutputItem[] = [
  {
    title: "Short-form Videos",
    icon: CirclePlay,
    bg: "#F4F9FE",
    border: "#C9DDEF",
    iconBg: "#E2EFFA",
    iconColor: "#0B2A52",
  },
  {
    title: "Social Media Content",
    icon: MonitorSmartphone,
    bg: "#FFF9F1",
    border: "#EAD8BD",
    iconBg: "#F5E7D2",
    iconColor: "#9A6829",
  },
  {
    title: "Advertising Creative",
    icon: Megaphone,
    bg: "#F3FAF6",
    border: "#CEE4D6",
    iconBg: "#DFF0E6",
    iconColor: "#247B5B",
  },
  {
    title: "Product Videos",
    icon: Package,
    bg: "#FFF4F7",
    border: "#EFD3DC",
    iconBg: "#FBE1E8",
    iconColor: "#C33A60",
  },
  {
    title: "Explainers",
    icon: Video,
    bg: "#F4F9FE",
    border: "#C9DDEF",
    iconBg: "#E2EFFA",
    iconColor: "#0B2A52",
  },
  {
    title: "Campaign Variations",
    icon: Layers3,
    bg: "#FFF9F1",
    border: "#EAD8BD",
    iconBg: "#F5E7D2",
    iconColor: "#9A6829",
  },
  {
    title: "Motion-led Visuals",
    icon: Sparkles,
    bg: "#F4F9FE",
    border: "#C9DDEF",
    iconBg: "#E2EFFA",
    iconColor: "#0B2A52",
  },
  {
    title: "Branded Edits",
    icon: Clapperboard,
    bg: "#FFF4F7",
    border: "#EFD3DC",
    iconBg: "#FBE1E8",
    iconColor: "#C33A60",
  },
  {
    title: "Content Cutdowns",
    icon: Scissors,
    bg: "#F3FAF6",
    border: "#CEE4D6",
    iconBg: "#DFF0E6",
    iconColor: "#247B5B",
  },
  {
    title: "Platform-Specific Versions",
    icon: Smartphone,
    bg: "#FFF9F1",
    border: "#EAD8BD",
    iconBg: "#F5E7D2",
    iconColor: "#9A6829",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function AiVideoExplained() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-explained"
      aria-labelledby="ai-video-explained-heading"
      className="
        relative
        isolate
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
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto
          w-full
          max-w-[1450px]

          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-14
          2xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[1040px] text-center">
          {/* EYEBROW */}

          <motion.div
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
              amount: 0.5,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="
              mx-auto
              flex
              w-fit
              items-center
              gap-3
              sm:gap-4
            "
          >
            <span className="h-px w-7 bg-[#B79A72] sm:w-11" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.32em]

                text-[#A4774C]

                sm:text-[10px]
                md:text-[11px]
              "
            >
              AI Video Explained
            </span>

            <span className="h-px w-7 bg-[#B79A72] sm:w-11" />
          </motion.div>

          {/* HEADING */}

          <motion.h2
            id="ai-video-explained-heading"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.05,
              ease,
            }}
            style={newYorkFont}
            className="
              mx-auto
              mt-6
              max-w-[1000px]

              text-[2.2rem]
              font-light
              leading-[1.02]
              tracking-[-0.05em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            What Are AI Video and{" "}
            <span className="text-[#B18458]">
              Video Editing Services?
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[940px]

              text-[13px]

              sm:mt-6
              sm:text-[15px]
              leading-[1.68]

              text-[#49657E]

              md:text-[16px]
            "
          >
            <p>
              AI video services use generative and AI-assisted tools to help
              create, transform or enhance visual content.
            </p>

            <p className="mt-1">
              Professional video editing takes footage, generated visuals,
              audio and other creative assets and turns them into a finished
              story designed for a specific audience, platform and objective.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            SERVICE PANELS
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-8
            max-w-[1240px]

            sm:mt-10
            lg:mt-12
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-5

              lg:grid-cols-2
              lg:gap-12
            "
          >
            {/* =================================================
                AI VIDEO
            ================================================= */}

            <motion.article
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -38,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                ease,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              className="
                relative
                overflow-hidden

                rounded-[24px]

                border
                border-[#BCD9EE]

                bg-[linear-gradient(110deg,#EFF7FD_0%,#F8FCFE_100%)]

                p-6

                shadow-[0_16px_42px_rgba(11,42,82,0.045)]

                sm:p-7
                md:p-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -left-14
                  -top-20

                  h-[230px]
                  w-[230px]

                  rounded-full

                  bg-[#D9EAF7]

                  blur-[62px]
                "
              />

              <div
                className="
                  relative
                  z-10

                  grid
                  gap-6

                  sm:grid-cols-[135px_1fr]
                  sm:items-center
                "
              >
                {/* AI ICON */}

                <div
                  className="
                    flex
                    h-[135px]
                    w-[135px]
                    items-center
                    justify-center

                    rounded-[36px]

                    bg-[linear-gradient(145deg,#DCEBFA,#EBF5FC)]

                    text-[#0B2A52]

                    shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
                  "
                >
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: [0, -5, 0],
                            scale: [1, 1.04, 1],
                          }
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles size={48} strokeWidth={1.35} />
                  </motion.div>
                </div>

                {/* TEXT */}

                <div>
                  <h3
                    style={newYorkFont}
                    className="
                      text-[1.65rem]
                      font-light
                      leading-[1.1]
                      tracking-[-0.035em]

                      text-[#0B2A52]

                      sm:text-[1.85rem]
                    "
                  >
                    AI Video Services
                  </h3>

                  <p
                    style={newYorkFont}
                    className="
                      mt-4
                      max-w-[410px]

                      text-[0.9rem]
                      leading-[1.65]

                      text-[#506C84]

                      sm:text-[0.96rem]
                    "
                  >
                    Use generative and AI-assisted tools to help create,
                    transform or enhance visual content.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* =================================================
                VIDEO EDITING
            ================================================= */}

            <motion.article
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 38,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                ease,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              className="
                relative
                overflow-hidden

                rounded-[24px]

                border
                border-[#E8D2B2]

                bg-[linear-gradient(110deg,#FCF7EF_0%,#FFFCF7_100%)]

                p-6

                shadow-[0_16px_42px_rgba(11,42,82,0.045)]

                sm:p-7
                md:p-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-14
                  -top-20

                  h-[230px]
                  w-[230px]

                  rounded-full

                  bg-[#F3E5D1]

                  blur-[62px]
                "
              />

              <div
                className="
                  relative
                  z-10

                  grid
                  gap-6

                  sm:grid-cols-[1fr_135px]
                  sm:items-center
                "
              >
                {/* TEXT */}

                <div>
                  <h3
                    style={newYorkFont}
                    className="
                      text-[1.65rem]
                      font-light
                      leading-[1.1]
                      tracking-[-0.035em]

                      text-[#0B2A52]

                      sm:text-[1.85rem]
                    "
                  >
                    Video Editing Services
                  </h3>

                  <p
                    style={newYorkFont}
                    className="
                      mt-4
                      max-w-[430px]

                      text-[0.9rem]
                      leading-[1.65]

                      text-[#506C84]

                      sm:text-[0.96rem]
                    "
                  >
                    Take footage, generated visuals, audio and other creative
                    assets and turn them into a finished story for a specific
                    audience, platform and objective.
                  </p>
                </div>

                {/* ICON */}

                <div
                  className="
                    flex
                    h-[135px]
                    w-[135px]
                    items-center
                    justify-center

                    rounded-[36px]

                    bg-[linear-gradient(145deg,#F4E5D0,#FCF5EA)]

                    text-[#7E5728]

                    shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
                  "
                >
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: [0, -5, 0],
                            scale: [1, 1.04, 1],
                          }
                    }
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Film size={48} strokeWidth={1.35} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* =================================================
              PLUS
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.72,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.25,
              ease,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              z-30

              hidden
              h-[78px]
              w-[78px]

              -translate-x-1/2
              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              border-[8px]
              border-white

              bg-[#F4F9FD]

              text-[#0B2A52]

              shadow-[0_12px_30px_rgba(11,42,82,0.09)]

              lg:flex
            "
          >
            <Plus size={28} strokeWidth={1.45} />
          </motion.div>
        </div>

        {/* =====================================================
            CONNECTOR
        ===================================================== */}

        <div
          className="
            relative
            mx-auto

            flex
            h-[52px]
            justify-center
          "
        >
          <motion.span
            initial={{
              scaleY: reduceMotion ? 1 : 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              ease,
            }}
            className="
              h-full
              w-px

              origin-top

              bg-[#B79A72]/65
            "
          />

          <span
            className="
              absolute
              bottom-0

              h-1.5
              w-1.5

              rounded-full

              bg-[#B79A72]
            "
          />
        </div>

        {/* =====================================================
            OUTPUT TITLE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
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
            mx-auto

            flex
            max-w-[680px]
            items-center
            gap-5
          "
        >
          <span className="h-px flex-1 bg-[#B79A72]" />

          <p
            style={newYorkFont}
            className="
              text-center
              text-[8px]
              font-medium
              uppercase
              tracking-[0.27em]

              text-[#A4774C]

              sm:text-[9px]
            "
          >
            Together, They Can Help Businesses Create:
          </p>

          <span className="h-px flex-1 bg-[#B79A72]" />
        </motion.div>

        {/* =====================================================
            COLORFUL OUTPUTS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-7

            grid
            max-w-[1280px]

            grid-cols-1
            gap-3

            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {outputs.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.045,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                style={{
                  backgroundColor: item.bg,
                  borderColor: item.border,
                }}
                className="
                  group
                  relative

                  flex
                  min-h-[88px]
                  items-center
                  gap-4

                  overflow-hidden

                  rounded-[15px]

                  border

                  px-4
                  py-4

                  shadow-[0_8px_25px_rgba(11,42,82,0.025)]

                  transition-shadow
                  duration-300

                  hover:shadow-[0_15px_34px_rgba(11,42,82,0.07)]
                "
              >
                {/* ICON */}

                <motion.span
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                          rotate: 4,
                        }
                  }
                  style={{
                    backgroundColor: item.iconBg,
                    color: item.iconColor,
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center

                    rounded-full
                  "
                >
                  <Icon size={21} strokeWidth={1.55} />
                </motion.span>

                {/* TEXT */}

                <h3
                  style={newYorkFont}
                  className="
                    text-[0.9rem]
                    font-medium
                    leading-[1.26]

                    text-[#0B2A52]

                    xl:text-[0.96rem]
                  "
                >
                  {item.title}
                </h3>

                {/* HOVER GOLD LINE */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-[2px]
                    w-0

                    bg-[#B79A72]

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            SHARP RAYS — OPEN ENDING / NO CARD
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
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
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            mx-auto
            mt-10
            max-w-[980px]

            px-1
            text-center

            sm:mt-12
            sm:px-3

            md:mt-14
          "
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3

              sm:gap-4
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
              style={newYorkFont}
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.22em]

                text-[#A4774C]

                sm:text-[9px]
                sm:tracking-[0.27em]
              "
            >
              At Sharp Rays
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

          {/* MAIN STATEMENT */}

          <h3
            style={newYorkFont}
            className="
              mx-auto
              mt-4
              max-w-[850px]

              text-[1.45rem]
              font-light
              leading-[1.18]
              tracking-[-0.035em]

              text-[#0B2A52]

              min-[390px]:text-[1.6rem]
              sm:mt-5
              sm:text-[1.85rem]
              md:text-[2.05rem]
              lg:text-[2.25rem]
            "
          >
            AI is part of the{" "}
            <span className="font-normal italic text-[#B18458]">
              production toolkit.
            </span>
          </h3>

          {/* SUPPORT COPY */}

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-3
              max-w-[720px]

              text-[0.78rem]
              leading-[1.65]

              text-[#5B7286]

              sm:mt-4
              sm:text-[0.88rem]

              md:text-[0.94rem]
            "
          >
            The final creative direction still starts with the message,
            audience and purpose.
          </p>

          {/* SUPPORTING LINE */}

          
             
        </motion.div>

      </div>
    </section>
  );
}