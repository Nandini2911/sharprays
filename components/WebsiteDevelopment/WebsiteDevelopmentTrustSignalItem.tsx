"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  FileText,
  Fingerprint,
  IdCard,
  LockKeyhole,
  MessageSquareQuote,
  SearchCheck,
  ShieldCheck,
  UsersRound,
  Workflow,
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


/* =========================================================
   DATA
========================================================= */

const trustLayers: TrustLayer[] = [
  {
    number: "01",
    eyebrow: "Identity",
    title: "Show Who Is Behind the Business.",
    description:
      "Make it clear who you are, how to reach you and who stands behind the work.",
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
    title: "Explain What You Do Clearly.",
    description:
      "Clear services and processes help visitors know what to expect.",
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
    title: "Support Claims With Real Proof.",
    description:
      "Use real experience, results and customer proof to support your claims.",
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
    title: "Show Professional Responsibility.",
    description:
      "Privacy, policies and secure delivery strengthen trust in the experience.",
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
        min-h-[46px]
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
        py-5

        transition-colors
        duration-500

        hover:bg-white/80

        sm:px-6
        sm:py-6
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

        py-16
        sm:py-20
        lg:py-24
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
              <span
            className="
              h-px
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />

            <span
              className="
                text-[10px]
             
                uppercase
                tracking-[0.29em]

                text-[#B79A72]
              "
            >
              More Than a Polished Interface
            </span>

        <span
            className="
              h-px
              w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />
          </div>

          <h2
            id="trust-by-design-heading"
            className="
              mx-auto
              mt-6
              max-w-[1050px]

              text-[2.2rem]
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
            A Strong Website Makes Your Business{" "}
            <span
              className="
                font-serif
                font-normal
                italic

                text-[#B79A72]
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
            Trust comes from clear, consistent signals.
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
            Identity, clarity, proof and responsibility help visitors decide
            whether your business feels credible.
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
            mt-10
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
                Four signals that make a website feel{" "}
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
            mt-6
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
      </div>
    </section>
  );
}