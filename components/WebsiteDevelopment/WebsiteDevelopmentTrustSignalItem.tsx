"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  Eye,
  FileCheck2,
  FileText,
  Fingerprint,
  IdCard,
  LockKeyhole,
  MessageSquareQuote,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type Signal = {
  title: string;
  icon: LucideIcon;
};

type TrustLayer = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  signals: Signal[];
  tone: "navy" | "gold";
};

type PrincipleItem = {
  number: string;
  title: string;
  subtitle: string;
  tone: "navy" | "gold";
};

/* =========================================================
   DATA
========================================================= */

const trustLayers: TrustLayer[] = [
  {
    number: "01",
    eyebrow: "Identity",
    title: "Make the Business Behind the Website Visible.",
    description:
      "Visitors should quickly understand who the business is, how to reach it and who stands behind the work.",
    tone: "navy",
    signals: [
      {
        title: "Clear company information",
        icon: Building2,
      },
      {
        title: "Real contact details",
        icon: IdCard,
      },
      {
        title: "Team or founder information",
        icon: UsersRound,
      },
      {
        title: "Consistent branding",
        icon: Fingerprint,
      },
    ],
  },

  {
    number: "02",
    eyebrow: "Clarity",
    title: "Explain Enough to Remove Unnecessary Doubt.",
    description:
      "Clear services and transparent processes help visitors understand what the business does and what working with it may involve.",
    tone: "gold",
    signals: [
      {
        title: "Service explanations",
        icon: FileText,
      },
      {
        title: "Transparent processes",
        icon: Workflow,
      },
    ],
  },

  {
    number: "03",
    eyebrow: "Evidence",
    title: "Give Credibility Something Concrete to Stand On.",
    description:
      "Experience, proof and genuine customer evidence help people judge whether the business can support the claims it makes.",
    tone: "navy",
    signals: [
      {
        title: "Relevant experience",
        icon: BriefcaseBusiness,
      },
      {
        title: "Case studies",
        icon: SearchCheck,
      },
      {
        title: "Verified results",
        icon: BadgeCheck,
      },
      {
        title: "Client testimonials",
        icon: MessageSquareQuote,
      },
    ],
  },

  {
    number: "04",
    eyebrow: "Responsibility",
    title: "Show That the Business Takes Trust Seriously.",
    description:
      "Privacy information, policies and secure delivery strengthen the professional signals around the website experience.",
    tone: "gold",
    signals: [
      {
        title: "Privacy information",
        icon: ShieldCheck,
      },
      {
        title: "Terms and policies",
        icon: FileCheck2,
      },
      {
        title: "Secure website delivery",
        icon: LockKeyhole,
      },
    ],
  },
];

const principleItems: PrincipleItem[] = [
  {
    number: "01",
    title: "Real Information",
    subtitle: "Be identifiable.",
    tone: "navy",
  },
  {
    number: "02",
    title: "Clear Evidence",
    subtitle: "Support the claims.",
    tone: "gold",
  },
  {
    number: "03",
    title: "Transparent Details",
    subtitle: "Reduce uncertainty.",
    tone: "navy",
  },
  {
    number: "04",
    title: "Secure Experience",
    subtitle: "Respect the visitor.",
    tone: "gold",
  },
];

/* =========================================================
   SIGNAL ROW
========================================================= */

function SignalRow({
  signal,
  tone,
  index,
  reduceMotion,
}: {
  signal: Signal;
  tone: "navy" | "gold";
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = signal.icon;
  const navy = tone === "navy";

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 8,
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
        duration: 0.38,
        delay: reduceMotion ? 0 : index * 0.04,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              x: 3,
            }
      }
      className="
        group/signal

        flex
        min-h-[51px]
        items-center
        gap-3

        border-b
        border-black/[0.055]

        py-3

        last:border-b-0
      "
    >
      <span
        className={`
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center

          rounded-[9px]

          transition-all
          duration-300

          ${
            navy
              ? `
                bg-[#EAF1F6]
                text-[#0B2A52]

                group-hover/signal:bg-[#0B2A52]
                group-hover/signal:text-white
              `
              : `
                bg-[#F6EEE3]
                text-[#A07850]

                group-hover/signal:bg-[#B79A72]
                group-hover/signal:text-white
              `
          }
        `}
      >
        <Icon size={14} strokeWidth={1.8} />
      </span>

      <span
        className="
          flex-1

          text-[0.77rem]
          font-medium
          leading-[1.4]

          text-[#405C75]
        "
      >
        {signal.title}
      </span>

      <span
        className={`
          h-[5px]
          w-[5px]
          rounded-full

          opacity-30

          transition-all
          duration-300

          group-hover/signal:scale-150
          group-hover/signal:opacity-100

          ${navy ? "bg-[#0B2A52]" : "bg-[#B79A72]"}
        `}
      />
    </motion.div>
  );
}

/* =========================================================
   TRUST COLUMN
========================================================= */

function TrustColumn({
  layer,
  index,
  reduceMotion,
}: {
  layer: TrustLayer;
  index: number;
  reduceMotion: boolean;
}) {
  const navy = layer.tone === "navy";

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.58,
        delay: reduceMotion ? 0 : index * 0.06,
        ease,
      }}
      className="
        group/column

        relative
        h-full
        overflow-hidden

        px-5
        py-6

        transition-colors
        duration-500

        hover:bg-white/80

        sm:px-6
        sm:py-7
      "
    >
      {/* HOVER WASH */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover/column:opacity-100

          ${
            navy
              ? "bg-[linear-gradient(180deg,rgba(234,242,248,0.75),transparent)]"
              : "bg-[linear-gradient(180deg,rgba(249,243,234,0.9),transparent)]"
          }
        `}
      />

      <div className="relative z-10">
        {/* NUMBER */}

        <div className="flex items-start justify-between gap-4">
          <span
            className={`
              font-serif
              text-[3.7rem]
              leading-none
              tracking-[-0.07em]

              sm:text-[4.15rem]

              ${
                navy
                  ? "text-[#0B2A52]"
                  : "text-[#B18458]"
              }
            `}
          >
            {layer.number}
          </span>

          <span
            className={`
              mt-2

              text-[0.52rem]
              font-semibold
              uppercase
              tracking-[0.19em]

              ${
                navy
                  ? "text-[#52718A]"
                  : "text-[#9D7752]"
              }
            `}
          >
            {layer.eyebrow}
          </span>
        </div>

        {/* ACCENT */}

        <div className="mt-5 flex items-center gap-2">
          <motion.span
            initial={{
              width: 24,
            }}
            whileHover={{
              width: 60,
            }}
            transition={{
              duration: 0.35,
              ease,
            }}
            className={`
              h-[2px]

              ${navy ? "bg-[#0B2A52]" : "bg-[#B79A72]"}
            `}
          />

          <span className="h-px flex-1 bg-[#DFE5E9]" />
        </div>

        {/* TITLE */}

        <h3
          className="
            mt-5

            font-serif
            text-[1.32rem]
            leading-[1.13]
            tracking-[-0.03em]

            text-[#0B2A52]

            sm:text-[1.43rem]
          "
        >
          {layer.title}
        </h3>

        {/* COPY */}

        <p
          className="
            mt-3

            text-[0.79rem]
            leading-[1.65]

            text-[#62768A]
          "
        >
          {layer.description}
        </p>

        {/* SIGNALS */}

        <div
          className="
            mt-5

            border-t
            border-[#DDE3E8]

            pt-4
          "
        >
          <div
            className="
              mb-1
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-[0.49rem]
                font-semibold
                uppercase
                tracking-[0.17em]

                text-[#768897]
              "
            >
              Trust signals
            </span>

            <span
              className={`
                text-[0.55rem]
                font-semibold

                ${
                  navy
                    ? "text-[#0B2A52]"
                    : "text-[#A07850]"
                }
              `}
            >
              {String(layer.signals.length).padStart(2, "0")}
            </span>
          </div>

          {layer.signals.map((signal, signalIndex) => (
            <SignalRow
              key={signal.title}
              signal={signal}
              tone={layer.tone}
              index={signalIndex}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>

      {/* BOTTOM ACCENT */}

      <motion.span
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.55,
          delay: reduceMotion ? 0 : index * 0.05,
          ease,
        }}
        style={{
          transformOrigin: "left",
        }}
        className={`
          absolute
          bottom-0
          left-0
          right-0

          h-[3px]

          ${navy ? "bg-[#0B2A52]" : "bg-[#B79A72]"}
        `}
      />
    </motion.article>
  );
}

/* =========================================================
   RESPONSIBILITY — NEW DESIGN
========================================================= */

function ResponsibilityBlock({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
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
        duration: 0.65,
        ease,
      }}
      className="
        relative

        mx-auto
        mt-16
        max-w-[1160px]

        overflow-hidden
      "
    >
      {/* =====================================================
          TOP LABEL
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          gap-5

          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        <div>
          <div className="flex items-center gap-3">
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                bg-[#0B2A52]

                text-white
              "
            >
              <ShieldCheck size={16} strokeWidth={1.7} />
            </span>

            <span
              className="
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.22em]

                text-[#A07850]
              "
            >
              Design Has a Responsibility
            </span>
          </div>

          <p
            className="
              mt-4

              text-[0.76rem]
              leading-[1.6]

              text-[#758696]
            "
          >
            Good design can strengthen perception. It should never invent trust.
          </p>
        </div>

        <span
          className="
            hidden

            font-serif
            text-[3.5rem]
            leading-none

            text-[#0B2A52]/[0.045]

            sm:block
          "
        >
          01
        </span>
      </div>

      {/* =====================================================
          MAIN RESPONSIBILITY COMPOSITION
      ===================================================== */}

      <div
        className="
          relative

          mt-7

          grid
          gap-0

          border-y
          border-[#D9E1E7]

          lg:grid-cols-[0.78fr_1.22fr]
        "
      >
        {/* =================================================
            LEFT — REVEAL
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
          viewport={{ once: true }}
          transition={{
            duration: 0.58,
            delay: 0.06,
            ease,
          }}
          className="
            relative

            overflow-hidden

            border-b
            border-[#D9E1E7]

            py-8
            pr-6

            lg:border-b-0
            lg:border-r
            lg:py-10
            lg:pr-10
          "
        >
          {/* GLOW */}

          <div
            className="
              pointer-events-none

              absolute
              -left-20
              top-1/2

              h-44
              w-44

              -translate-y-1/2

              rounded-full

              bg-[#0B2A52]/[0.055]

              blur-[55px]
            "
          />

          <div className="relative z-10">
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full

                  bg-[#EAF1F6]

                  text-[#0B2A52]
                "
              >
                <Eye size={15} strokeWidth={1.8} />
              </span>

              <span
                className="
                  text-[0.54rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]

                  text-[#54738C]
                "
              >
                Design should reveal
              </span>
            </div>

            <h3
              className="
                mt-5
                max-w-[440px]

                font-serif
                text-[1.65rem]
                leading-[1.1]
                tracking-[-0.035em]

                text-[#0B2A52]

                sm:text-[1.85rem]
              "
            >
              Make what is already{" "}
              <span className="italic text-[#B18458]">
                credible
              </span>{" "}
              easier to understand.
            </h3>

            <div
              className="
                mt-6

                flex
                flex-wrap
                gap-2
              "
            >
              {[
                "Real information",
                "Useful proof",
                "Clear context",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2

                    rounded-full

                    bg-[#EEF4F8]

                    px-3
                    py-2

                    text-[0.63rem]
                    font-semibold

                    text-[#48647C]
                  "
                >
                  <Check
                    size={9}
                    strokeWidth={2.3}
                    className="text-[#0B2A52]"
                  />

                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =================================================
            RIGHT — DO NOT DISGUISE
        ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 30,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.58,
            delay: 0.12,
            ease,
          }}
          className="
            relative

            overflow-hidden

            py-8

            lg:py-10
            lg:pl-10
          "
        >
          {/* GOLD SWEEP */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    x: "110%",
                  }
            }
            whileInView={{
              x: "-20%",
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease,
            }}
            className="
              pointer-events-none

              absolute
              right-[-12%]
              top-1/2

              h-[190px]
              w-[70%]

              -translate-y-1/2
              -skew-x-[14deg]

              bg-[#B79A72]/[0.055]
            "
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full

                  bg-[#F6EEE3]

                  text-[#A07850]
                "
              >
                <X size={14} strokeWidth={2} />
              </span>

              <span
                className="
                  text-[0.54rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]

                  text-[#A07850]
                "
              >
                Design should never disguise
              </span>
            </div>

            <p
              className="
                mt-5
                max-w-[680px]

                font-serif
                text-[1.65rem]
                leading-[1.13]
                tracking-[-0.035em]

                text-[#0B2A52]

                sm:text-[1.9rem]
                lg:text-[2.05rem]
              "
            >
              We do not use design to make unsupported claims look{" "}
              <span
                className="
                  italic
                  text-[#B18458]
                "
              >
                more convincing.
              </span>
            </p>

            {/* BOTTOM TRACE */}

            <div
              className="
                mt-7

                flex
                items-center
                gap-3
              "
            >
              <motion.span
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease,
                }}
                style={{
                  transformOrigin: "left",
                }}
                className="
                  h-[2px]
                  w-24

                  bg-[#B79A72]
                "
              />

              <span
                className="
                  text-[0.58rem]
                  font-semibold
                  uppercase
                  tracking-[0.15em]

                  text-[#788A99]
                "
              >
                Credibility before decoration
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PRINCIPLE EQUATION — NEW DESIGN
========================================================= */

function PrincipleEquation({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease,
      }}
      className="
        relative

        mx-auto
        mt-20
        max-w-[1160px]
      "
    >
      {/* =====================================================
          PRINCIPLE HEADER
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          gap-5

          md:flex-row
          md:items-end
          md:justify-between
        "
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#B79A72]" />

            <span
              className="
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.23em]

                text-[#A07850]
              "
            >
              Our Principle
            </span>
          </div>

          <h3
            className="
              mt-4
              max-w-[820px]

              font-serif
              text-[2rem]
              leading-[1.07]
              tracking-[-0.04em]

              text-[#0B2A52]

              sm:text-[2.35rem]
              md:text-[2.6rem]
            "
          >
            Good design should make{" "}
            <span
              className="
                italic
                text-[#B18458]
              "
            >
              genuine credibility
            </span>{" "}
            easier to see.
          </h3>
        </div>

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [0, 7, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            hidden
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            border
            border-[#D6E0E7]

            bg-white

            text-[#0B2A52]

            shadow-[0_7px_20px_rgba(11,42,82,0.05)]

            md:flex
          "
        >
          <Sparkles size={17} />
        </motion.div>
      </div>

      {/* =====================================================
          EQUATION
      ===================================================== */}

      <div
        className="
          relative
          mt-10
        "
      >
        {/* BASE CONNECTION */}

        <div
          className="
            pointer-events-none

            absolute
            left-[7%]
            right-[7%]
            top-[31px]

            hidden
            h-px

            bg-[#D6E0E7]

            lg:block
          "
        />

        {/* ANIMATED CONNECTION */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  scaleX: 0,
                }
          }
          whileInView={{
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 1.1,
            ease,
          }}
          style={{
            transformOrigin: "left",
          }}
          className="
            pointer-events-none

            absolute
            left-[7%]
            right-[7%]
            top-[31px]

            hidden
            h-px

            bg-[linear-gradient(90deg,#0B2A52_0%,#B79A72_45%,#0B2A52_75%,#B79A72_100%)]

            lg:block
          "
        />

        {/* STEPS */}

        <div
          className="
            relative
            z-10

            grid
            grid-cols-1
            gap-3

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {principleItems.map((item, index) => {
            const navy = item.tone === "navy";

            return (
              <motion.div
                key={item.number}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 16,
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
                  duration: 0.48,
                  delay: reduceMotion ? 0 : index * 0.08,
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
                  group/item
                  relative

                  text-center
                "
              >
                {/* NODE */}

                <span
                  className={`
                    relative
                    z-10

                    mx-auto

                    flex
                    h-[62px]
                    w-[62px]
                    items-center
                    justify-center

                    rounded-full

                    border-[5px]
                    border-white

                    font-serif
                    text-[0.8rem]
                    font-semibold

                    shadow-[0_7px_20px_rgba(11,42,82,0.09)]

                    transition-all
                    duration-300

                    ${
                      navy
                        ? `
                          bg-[#0B2A52]
                          text-white

                          group-hover/item:scale-110
                        `
                        : `
                          bg-[#B79A72]
                          text-white

                          group-hover/item:scale-110
                        `
                    }
                  `}
                >
                  {item.number}
                </span>

                {/* CONTENT */}

                <div className="mt-5">
                  <h4
                    className="
                      font-serif
                      text-[1.05rem]
                      leading-[1.2]

                      text-[#0B2A52]
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-1.5

                      text-[0.68rem]
                      leading-[1.5]

                      text-[#748797]
                    "
                  >
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          RESULT
      ===================================================== */}

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
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: 0.25,
          ease,
        }}
        className="
          relative

          mt-11

          flex
          flex-col
          items-center
        "
      >
        {/* ARROW */}

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            border
            border-[#D7E1E8]

            bg-white

            text-[#B18458]

            shadow-[0_6px_18px_rgba(11,42,82,0.045)]
          "
        >
          <ArrowRight
            size={14}
            className="rotate-90"
          />
        </div>

        {/* RESULT LABEL */}

        <div
          className="
            mt-5

            flex
            items-center
            gap-3
          "
        >
          <span className="h-px w-12 bg-[#0B2A52]" />

          <span
            className="
              text-[0.53rem]
              font-semibold
              uppercase
              tracking-[0.2em]

              text-[#A07850]
            "
          >
            The Result
          </span>

          <span className="h-px w-12 bg-[#B79A72]" />
        </div>

        {/* RESULT COPY */}

        <p
          className="
            mt-4

            text-center

            font-serif
            text-[1.7rem]
            leading-[1.15]
            tracking-[-0.03em]

            text-[#0B2A52]

            sm:text-[1.95rem]
          "
        >
          Credibility that feels{" "}
          <span
            className="
              italic
              text-[#B18458]
            "
          >
            natural, visible and earned.
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TrustByDesignSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="trust-by-design"
      aria-labelledby="trust-by-design-heading"
      className="
        relative
        isolate
        overflow-hidden

        bg-white

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-[300px]
            top-[8%]

            h-[560px]
            w-[560px]

            rounded-full

            bg-[#EEF4F8]

            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-[260px]
            top-[42%]

            h-[520px]
            w-[520px]

            rounded-full

            bg-[#B79A72]/[0.045]

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[2%]
            left-1/2

            h-[300px]
            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-[#F5F8FA]

            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1380px]

          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            max-w-[1040px]

            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#B79A72]" />

            <span
              className="
                text-[0.59rem]
                font-semibold
                uppercase
                tracking-[0.29em]

                text-[#92745C]
              "
            >
              More Than a Polished Interface
            </span>

            <span className="h-px w-10 bg-[#B79A72]" />
          </div>

          <h2
            id="trust-by-design-heading"
            className="
              mx-auto
              mt-6
              max-w-[1050px]

              text-[2.3rem]
              font-medium
              leading-[1.04]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            A Strong Website Makes the Business Behind It{" "}
            <span
              className="
                font-serif
                font-normal
                italic

                text-[#B18458]
              "
            >
              Feel Real.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[760px]

              text-[0.96rem]
              leading-[1.7]

              text-[#526A80]
            "
          >
            Trust is created through many small signals working together.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-[820px]

              text-[0.9rem]
              leading-[1.72]

              text-[#6B7E90]
            "
          >
            Identity, clarity, evidence and responsibility help visitors judge
            whether the business behind the website feels credible and worth
            engaging with.
          </p>
        </motion.div>

        {/* =====================================================
            FRAME INTRO
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[1180px]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5

              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <span
                className="
                  text-[0.54rem]
                  font-semibold
                  uppercase
                  tracking-[0.21em]

                  text-[#A07850]
                "
              >
                The Trust Framework
              </span>

              <h3
                className="
                  mt-3

                  max-w-[720px]

                  font-serif
                  text-[1.7rem]
                  leading-[1.12]
                  tracking-[-0.035em]

                  text-[#0B2A52]

                  sm:text-[1.95rem]
                "
              >
                Four things visitors need before credibility feels{" "}
                <span
                  className="
                    italic
                    text-[#B18458]
                  "
                >
                  natural.
                </span>
              </h3>
            </div>

            <div
              className="
                hidden
                items-center
                gap-2

                sm:flex
              "
            >
              <span className="h-px w-14 bg-[#0B2A52]" />
              <span className="h-2 w-2 rounded-full bg-[#B79A72]" />
              <span className="h-px w-14 bg-[#D7C3A5]" />
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TRUST FRAMEWORK
        ===================================================== */}

        <motion.div
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            relative

            mx-auto
            mt-8
            max-w-[1180px]

            overflow-hidden

            rounded-[24px]

            border
            border-[#D8E1E7]

            bg-[#FAFCFD]

            shadow-[0_15px_42px_rgba(11,42,82,0.035)]
          "
        >
          {/* TOP ACCENTS */}

          <span
            className="
              absolute
              left-0
              top-0

              h-[3px]
              w-1/2

              bg-[#0B2A52]
            "
          />

          <span
            className="
              absolute
              right-0
              top-0

              h-[3px]
              w-1/2

              bg-[#B79A72]
            "
          />

          {/* COLUMNS */}

          <div
            className="
              grid
              grid-cols-1

              md:grid-cols-2

              xl:grid-cols-4
            "
          >
            {trustLayers.map((layer, index) => (
              <div
                key={layer.number}
                className="
                  border-b
                  border-[#DDE4E9]

                  md:[&:nth-child(odd)]:border-r

                  xl:border-b-0
                  xl:border-r

                  xl:last:border-r-0
                "
              >
                <TrustColumn
                  layer={layer}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            NEW RESPONSIBILITY
        ===================================================== */}

        <ResponsibilityBlock reduceMotion={reduceMotion} />

        {/* =====================================================
            NEW PRINCIPLE
        ===================================================== */}

        <PrincipleEquation reduceMotion={reduceMotion} />
      </div>
    </section>
  );
}