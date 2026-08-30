"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Heart,
  ShieldCheck,
  MousePointer2,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const NAVY = "#0B2A52";
const GOLD = "#C6A77A";
const TEXT = "#344054";
const MUTED = "#66758A";
const BORDER = "#DCE5EF";

const steps = [
  {
    number: "01",
    title: "ATTENTION",
    description:
      "We create content that makes people stop scrolling.",
    icon: Eye,
  },
  {
    number: "02",
    title: "INTEREST",
    description:
      "We spark curiosity and keep your audience engaged.",
    icon: Heart,
  },
  {
    number: "03",
    title: "TRUST",
    description:
      "We build credibility through value, consistency and real connection.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "ACTION",
    description:
      "We guide your audience to take the right step at the right time.",
    icon: MousePointer2,
  },
  {
    number: "05",
    title: "GROWTH",
    description:
      "We turn actions into measurable growth for your business.",
    icon: TrendingUp,
  },
];

export default function DifferenceSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft top glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-240px]
            h-[500px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-white
            blur-3xl
          "
        />

        {/* Left atmosphere */}
        <div
          className="
            absolute
            -left-[280px]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#EEF3F8]
            blur-3xl
          "
        />

        {/* Right atmosphere */}
        <div
          className="
            absolute
            -right-[280px]
            bottom-[5%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#EEF3F8]
            blur-3xl
          "
        />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#0B2A52 1px, transparent 1px), linear-gradient(90deg, #0B2A52 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div
          className="
            overflow-hidden
            rounded-[30px]
            border
            border-white
            bg-white/90
            px-5
            py-9
            shadow-[0_25px_100px_rgba(11,42,82,0.06)]
            backdrop-blur-xl
            sm:px-8
            sm:py-11
            lg:px-12
            lg:py-13
            xl:px-16
          "
        >
          {/* =====================================================
              SECTION LABEL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-center gap-4"
          >
            <span className="h-px w-10 bg-[#C6A77A] sm:w-12" />

            <span
              className="
                font-[var(--font-new-york)]
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#C6A77A]
                sm:text-xs
              "
            >
              THE DIFFERENCE
            </span>

            <span className="h-px w-10 bg-[#C6A77A] sm:w-12" />
          </motion.div>

          {/* =====================================================
              HEADLINE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-7
              max-w-[1000px]
              text-center
              sm:mt-8
            "
          >
            <h2
              className="
                font-[var(--font-new-york)]
                text-[clamp(2rem,5vw,5.4rem)]
                font-medium
                leading-[0.92]
                tracking-[-0.055em]
              "
              style={{ color: NAVY }}
            >
              Pretty Marketing
            </h2>

            <h2
              className="
                mt-2
                font-[var(--font-new-york)]
                text-[clamp(2rem,5vw,5.4rem)]
                font-medium
                leading-[0.92]
                tracking-[-0.055em]
              "
              style={{ color: NAVY }}
            >
              <span
                className="italic"
                style={{ color: GOLD }}
              >
                Isn&apos;t
              </span>{" "}
              Enough.
            </h2>
          </motion.div>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-7
              max-w-[650px]
              text-center
              sm:mt-8
            "
          >
            <p
              className="
                text-base
                leading-7
                sm:text-lg
                sm:leading-8
              "
              style={{ color: TEXT }}
            >
              Beautiful content gets{" "}
              <span
                className="font-semibold"
                style={{ color: NAVY }}
              >
                attention.
              </span>
            </p>

            <p
              className="
                mt-1
                text-base
                leading-7
                sm:text-lg
                sm:leading-8
              "
              style={{ color: TEXT }}
            >
              Smart strategy turns attention into{" "}
              <span
                className="font-semibold"
                style={{ color: NAVY }}
              >
                action.
              </span>
            </p>
          </motion.div>

          {/* =====================================================
              JOURNEY
          ===================================================== */}

          <div className="relative mt-14 sm:mt-18 lg:mt-20">

            {/* ===================================================
                DESKTOP CONNECTING LINE
            =================================================== */}

           

            {/* ===================================================
                MOBILE LINE
            =================================================== */}

          
            {/* ===================================================
                CARDS
            =================================================== */}

            <div className="relative grid gap-5 lg:grid-cols-5 lg:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isGrowth = index === 4;

                return (
                  <motion.div
                    key={step.title}
                    initial={{
                      opacity: 0,
                      y: 65,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.18,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      relative
                      lg:pt-[76px]
                    "
                  >
                    {/* =================================================
                        ICON
                    ================================================= */}

                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        z-20
                        lg:left-1/2
                        lg:-translate-x-1/2
                      "
                    >
                      <div
                        className="
                          flex
                          h-[62px]
                          w-[62px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#DCE5EF]
                          bg-white
                          shadow-[0_10px_30px_rgba(11,42,82,0.08)]
                          sm:h-[66px]
                          sm:w-[66px]
                        "
                      >
                        <div
                          className="
                            flex
                            h-[46px]
                            w-[46px]
                            items-center
                            justify-center
                            rounded-full
                          "
                          style={{
                            backgroundColor: isGrowth
                              ? NAVY
                              : "#EEF3F8",
                          }}
                        >
                          <Icon
                            size={22}
                            strokeWidth={1.7}
                            style={{
                              color: isGrowth
                                ? "#FFFFFF"
                                : NAVY,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        CARD
                    ================================================= */}

                    <div
                      className={`
                        relative
                        min-h-[250px]
                        overflow-hidden
                        rounded-[22px]
                        border
                        px-5
                        pb-6
                        pt-[74px]
                        lg:px-5
                        xl:px-6
                        ${
                          isGrowth
                            ? "border-[#0B2A52] bg-[#0B2A52] shadow-[0_22px_55px_rgba(11,42,82,0.18)]"
                            : "border-[#E3E9F1] bg-white shadow-[0_10px_30px_rgba(11,42,82,0.045)]"
                        }
                      `}
                    >
                      {/* Top accent */}
                      <div
                        className={`
                          absolute
                          left-0
                          right-0
                          top-0
                          h-[2px]
                          ${
                            isGrowth
                              ? "bg-[#C6A77A]"
                              : "bg-[#0B2A52]/15"
                          }
                        `}
                      />

                      {/* Number */}

                      <span
                        className={`
                          font-[var(--font-new-york)]
                          text-[11px]
                          font-semibold
                          tracking-[0.28em]
                          ${
                            isGrowth
                              ? "text-white/60"
                              : "text-[#0B2A52]/55"
                          }
                        `}
                      >
                        {step.number}
                      </span>

                      {/* Title */}

                      <h3
                        className={`
                          mt-3
                          font-[var(--font-new-york)]
                          text-[23px]
                          font-semibold
                          leading-[1]
                          tracking-[-0.025em]
                          xl:text-[25px]
                          ${
                            isGrowth
                              ? "text-white"
                              : "text-[#0B2A52]"
                          }
                        `}
                      >
                        {step.title}
                      </h3>

                      {/* Detail */}

                      <div
                        className="mt-4 h-[2px] w-9 rounded-full"
                        style={{
                          backgroundColor: GOLD,
                        }}
                      />

                      {/* Description */}

                      <p
                        className={`
                          mt-5
                          text-[14px]
                          leading-6
                          ${
                            isGrowth
                              ? "text-white/75"
                              : "text-[#66758A]"
                          }
                        `}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* =================================================
                        DESKTOP ARROW
                    ================================================= */}

                    {!isGrowth && (
                      <div
                        className="
                          absolute
                          right-[-14px]
                          top-[205px]
                          z-30
                          hidden
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#DCE5EF]
                          bg-white
                          lg:flex
                        "
                      >
                        <ArrowRight
                          size={15}
                          strokeWidth={1.8}
                          style={{ color: NAVY }}
                        />
                      </div>
                    )}

                    {/* =================================================
                        MOBILE CONNECTOR
                    ================================================= */}

                    {!isGrowth && (
                      <div
                        className="
                          absolute
                          bottom-[-14px]
                          left-[15px]
                          z-30
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#D8E2ED]
                          bg-white
                          lg:hidden
                        "
                      >
                        <ArrowRight
                          size={13}
                          strokeWidth={1.8}
                          className="rotate-90"
                          style={{ color: NAVY }}
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              BOTTOM PROMISE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
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
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-9
              max-w-[1080px]
              sm:mt-11
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[18px]
                border
                border-[#E0E7EF]
                bg-white
                px-5
                py-4
                shadow-[0_8px_30px_rgba(11,42,82,0.04)]
                sm:px-7
                sm:py-5
              "
            >
              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  text-center
                  sm:flex-row
                  sm:gap-5
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EEF3F8]
                  "
                >
                  <Sparkles
                    size={16}
                    strokeWidth={1.7}
                    style={{ color: NAVY }}
                  />
                </div>

                {/* Statement */}

                <p
                  className="
                    font-[var(--font-new-york)]
                    text-base
                    font-semibold
                    tracking-[-0.01em]
                    sm:text-lg
                  "
                  style={{ color: NAVY }}
                >
                  It&apos;s not just our process.
                  <span
                    className="ml-1"
                    style={{ color: GOLD }}
                  >
                    It&apos;s our promise.
                  </span>
                </p>

                {/* Divider */}

                <span className="hidden h-7 w-px bg-[#DCE5EF] sm:block" />

                {/* Ending */}

                <p
                  className="text-sm sm:text-[15px]"
                  style={{ color: MUTED }}
                >
                  Strategy. Creativity. Data.
                  <span
                    className="ml-1 font-semibold"
                    style={{ color: NAVY }}
                  >
                    That&apos;s how growth happens.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}