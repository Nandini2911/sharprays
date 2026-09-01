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
    pt-16
    pb-0
    sm:pt-20
    lg:pt-24
      "
    >
      {/* =========================================================
          PURE WHITE BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 z-0 bg-white" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            relative
            overflow-visible
            rounded-[30px]
            border
            border-[#E7ECF2]
            bg-white
            px-5
            py-9
            shadow-[0_20px_70px_rgba(11,42,82,0.035)]
            sm:px-8
            sm:py-11
            lg:px-12
            lg:py-14
            xl:px-16
          "
        >
          {/* =====================================================
              SECTION LABEL
          ===================================================== */}

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
            className="
              relative
              z-30
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 48,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="h-px bg-[#C6A77A]"
            />

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

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 48,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="h-px bg-[#C6A77A]"
            />
          </motion.div>

          {/* =====================================================
              HEADLINE
          ===================================================== */}

          <div
            className="
              relative
              z-30
              mx-auto
              mt-8
              max-w-[1050px]
              text-center
              sm:mt-9
            "
          >
            {/* First line */}

            <div className="relative overflow-hidden pb-2">
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  z-30
                  font-[var(--font-new-york)]
                 text-[clamp(1.8rem,3.2vw,3rem)]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.06em]
                  text-[#0B2A52]
                "
              >
                Pretty Marketing
              </motion.h2>
            </div>

            {/* Second line */}

            <div className="relative overflow-hidden pb-2">
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: 0.08,
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  z-30
                  mt-1
                  font-[var(--font-new-york)]
                  text-[clamp(2.8rem,5vw,5.4rem)]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.06em]
                  text-[#0B2A52]
                "
              >
                <span className="italic text-[#C6A77A]">
                  Isn&apos;t
                </span>{" "}
                Enough.
              </motion.h2>
            </div>
          </div>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

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
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              mx-auto
              mt-7
              max-w-[650px]
              text-center
              sm:mt-8
            "
          >
            <p
              className="text-[clamp(1rem,1.15vw,1.125rem)] leading-[1.65] 
                
                leading-7
                
                sm:leading-8
              "
              style={{
                color: TEXT,
              }}
            >
              Beautiful content gets{" "}
              <span
                className="font-semibold"
                style={{
                  color: NAVY,
                }}
              >
                attention.
              </span>
            </p>

            <p
              className="text-[clamp(1rem,1.15vw,1.125rem)] leading-[1.65] 
                mt-1
                
                leading-7
                
                sm:leading-8
              "
              style={{
                color: TEXT,
              }}
            >
              Smart strategy turns attention into{" "}
              <span
                className="font-semibold"
                style={{
                  color: NAVY,
                }}
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
                CARDS
            =================================================== */}

            <div
              className="
                relative
                grid
                gap-5
                lg:grid-cols-5
                lg:gap-4
              "
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isGrowth = index === 4;

                return (
                  <motion.div
                    key={step.title}
                    initial={{
                      opacity: 0,
                      y: 55,
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

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.1 + 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
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
                          shadow-[0_10px_30px_rgba(11,42,82,0.07)]
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
                    </motion.div>

                    {/* =================================================
                        CARD
                    ================================================= */}

                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                      className={`
                        relative
                        min-h-[250px]
                        overflow-hidden
                        rounded-[22px]
                        border
                        px-5
                        pb-6
                        pt-[74px]
                        transition-shadow
                        duration-300
                        lg:px-5
                        xl:px-6
                        ${
                          isGrowth
                            ? "border-[#0B2A52] bg-[#0B2A52] shadow-[0_22px_55px_rgba(11,42,82,0.18)]"
                            : "border-[#E3E9F1] bg-white shadow-[0_10px_30px_rgba(11,42,82,0.045)] hover:shadow-[0_18px_45px_rgba(11,42,82,0.09)]"
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
                              : "text-[#0B2A52]/50"
                          }
                        `}
                      >
                        {step.number}
                      </span>

                      {/* Title */}

                      <h3
                        className={`text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.12] 
                          mt-3
                          font-[var(--font-new-york)]
                          
                          font-semibold
                          leading-[1]
                          tracking-[-0.025em]
                          
                          ${
                            isGrowth
                              ? "text-white"
                              : ""
                          }
                        `}
                      >
                        {step.title}
                      </h3>

                      {/* Gold detail */}

                      <div
                        className="
                          mt-4
                          h-[2px]
                          w-9
                          rounded-full
                          bg-[#C6A77A]
                        "
                      />

                      {/* Description */}

                      <p
                        className={`text-[clamp(1rem,1.15vw,1.125rem)] leading-[1.65] 
                          mt-5
                          
                          leading-6
                          ${
                            isGrowth
                              ? "text-white/75"
                              : ""
                          }
                        `}
                      >
                        {step.description}
                      </p>
                    </motion.div>

                    {/* =================================================
                        DESKTOP ARROW
                    ================================================= */}

                    {!isGrowth && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.3,
                        }}
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
                          className="text-[#0B2A52]"
                        />
                      </motion.div>
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
                          className="
                            rotate-90
                            text-[#0B2A52]
                          "
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
              y: 40,
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
              relative
              z-10
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
                shadow-[0_8px_30px_rgba(11,42,82,0.035)]
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
                    className="text-[#0B2A52]"
                  />
                </div>

                {/* Statement */}

                <p
                  className="text-[clamp(1rem,1.15vw,1.125rem)] leading-[1.65] 
                    font-[var(--font-new-york)]
                    
                    font-semibold
                    tracking-[-0.01em]
                    
                    
                  "
                >
                  It&apos;s not just our process.
                  <span className="ml-1 text-[#C6A77A]">
                    It&apos;s our promise.
                  </span>
                </p>

                {/* Divider */}

                <span
                  className="
                    hidden
                    h-7
                    w-px
                    bg-[#DCE5EF]
                    sm:block
                  "
                />

                {/* Ending */}

                <p
                  className="text-[clamp(1rem,1.15vw,1.125rem)] leading-[1.65] 
                    
                    
                    
                  "
                >
                  Strategy. Creativity. Data.
                  <span className="ml-1 font-semibold text-[#0B2A52]">
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