"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  X,
} from "lucide-react";

const goodFit = [
  "You have something worth building.",
  "You're ready to take digital seriously.",
  "You want growth—not vanity metrics.",
  "You want someone who thinks with you, not just works for you.",
];

export default function WhoItsForSection() {
  return (
    <section
      id="who-its-for"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto max-w-[900px] text-center">
          {/* Label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
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
              duration: 0.6,
            }}
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#C6A77A]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#C6A77A]
                sm:text-[11px]
              "
            >
              Who It&apos;s For
            </span>

            <span className="h-px w-10 bg-[#C6A77A]" />
          </motion.div>

          {/* Heading */}

          <div className="relative mt-7 overflow-visible">
            <div className="overflow-hidden pb-2">
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 45,
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
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  font-[var(--font-new-york)]
                  text-[clamp(2.8rem,4.5vw,4.5rem)]
                  font-medium
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-[#0B2A52]
                "
              >
                Maybe This Is For You.
              </motion.h2>
            </div>

            <div className="overflow-hidden pb-2">
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 45,
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
                  delay: 0.08,
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  font-[var(--font-new-york)]
                  text-[clamp(2.8rem,5vw,5rem)]
                  font-medium
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-[#0B2A52]
                "
              >
                <span className="italic text-[#C6A77A]">
                  Maybe It Isn&apos;t.
                </span>
              </motion.h2>
            </div>
          </div>

          {/* Intro */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.65,
            }}
            className="
              mx-auto
              mt-6
              max-w-[610px]
              text-sm
              leading-7
              text-[#66758A]
              sm:text-base
            "
          >
            We&apos;re not trying to work with everyone.
            <br className="hidden sm:block" />
            We&apos;re looking for businesses that are ready to
            build something meaningful.
          </motion.p>
        </div>

        {/* ===================================================
            FIT AREA
        =================================================== */}

        <div
          className="
            mt-14
            grid
            gap-6
            lg:mt-20
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-8
          "
        >
          {/* =================================================
              GOOD FIT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#DCE5EF]
              bg-white
              p-6
              sm:p-8
              lg:p-10
            "
          >
            {/* Top accent */}

            <div
              className="
                absolute
                left-0
                top-0
                h-[3px]
                w-full
                bg-[#0B2A52]
              "
            />

            {/* Header */}

            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#C6A77A]
                  "
                >
                  The right fit
                </p>

                <h3
                  className="
                    mt-2
                    font-[var(--font-new-york)]
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-[#0B2A52]
                    sm:text-4xl
                  "
                >
                  You&apos;re probably a good fit if...
                </h3>
              </div>

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EEF3F8]
                "
              >
                <Sparkles
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#0B2A52]"
                />
              </div>
            </div>

            {/* Checklist */}

            <div className="mt-8">
              {goodFit.map((item, index) => (
                <motion.div
                  key={item}
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
                    delay: 0.15 + index * 0.1,
                    duration: 0.55,
                  }}
                  className="
                    group
                    flex
                    items-start
                    gap-4
                    border-t
                    border-[#E7ECF2]
                    py-5
                    last:border-b
                  "
                >
                  {/* Check */}

                  <div
                    className="
                      mt-0.5
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0B2A52]
                    "
                  >
                    <Check
                      size={14}
                      strokeWidth={2.2}
                      className="text-white"
                    />
                  </div>

                  {/* Text */}

                  <p
                    className="
                      max-w-[620px]
                      text-[14px]
                      leading-6
                      text-[#344054]
                      transition-colors
                      duration-300
                      group-hover:text-[#0B2A52]
                      sm:text-[15px]
                    "
                  >
                    {item}
                  </p>

                  {/* Number */}

                  <span
                    className="
                      ml-auto
                      hidden
                      pt-1
                      text-[9px]
                      font-semibold
                      tracking-[0.15em]
                      text-[#0B2A52]/30
                      sm:block
                    "
                  >
                    0{index + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              NOT FOR YOU
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[400px]
              flex-col
              justify-between
              overflow-hidden
              rounded-[24px]
              border
              border-[#0B2A52]
              bg-[#0B2A52]
              p-7
              sm:p-9
              lg:p-10
            "
          >
            {/* Decorative circle */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-56
                w-56
                rounded-full
                border
                border-white/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-12
                -top-12
                h-32
                w-32
                rounded-full
                border
                border-[#C6A77A]/30
              "
            />

            {/* Content */}

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                  "
                >
                  <X
                    size={17}
                    strokeWidth={1.7}
                    className="text-[#C6A77A]"
                  />
                </div>

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#C6A77A]
                  "
                >
                  And that&apos;s okay
                </p>
              </div>

              <p
                className="
                  mt-12
                  max-w-[390px]
                  font-[var(--font-new-york)]
                  text-2xl
                  leading-[1.25]
                  tracking-[-0.03em]
                  text-white
                  sm:text-3xl
                "
              >
                If you&apos;re looking for someone to simply
                post three times a week...
              </p>

              <div className="mt-8 h-px w-12 bg-[#C6A77A]" />

              <h3
                className="
                  mt-7
                  max-w-[390px]
                  font-[var(--font-new-york)]
                  text-4xl
                  font-medium
                  italic
                  leading-[1]
                  tracking-[-0.045em]
                  text-[#C6A77A]
                  sm:text-5xl
                "
              >
                We&apos;re probably
                <br />
                not your people.
              </h3>
            </div>

            {/* Bottom */}

            <div className="relative z-10 mt-12 flex items-center gap-3">
              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/45
                "
              >
                We&apos;d rather be honest
              </span>

              <ArrowRight
                size={15}
                strokeWidth={1.4}
                className="text-[#C6A77A]"
              />
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

        <motion.div
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
            mx-auto
            mt-10
            max-w-[720px]
            text-center
          "
        >
          <p
            className="
              font-[var(--font-new-york)]
              text-lg
              leading-7
              tracking-[-0.01em]
              text-[#0B2A52]
              sm:text-xl
            "
          >
            The right partnership starts with knowing{" "}
            <span className="italic text-[#C6A77A]">
              what you actually need.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}