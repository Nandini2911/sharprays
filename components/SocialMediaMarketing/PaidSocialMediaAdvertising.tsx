"use client";

import { useRef } from "react";
import {
  Activity,
  BarChart3,
  Crosshair,
  FileText,
  Megaphone,
  Palette,
  Settings2,
} from "lucide-react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const paidServices = [
  {
    number: "01",
    title: "Campaign Planning",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Audience Targeting",
    icon: Crosshair,
  },
  {
    number: "03",
    title: "Campaign Setup",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Advertising Creative",
    icon: Palette,
  },
  {
    number: "05",
    title: "Performance Monitoring",
    icon: Activity,
  },
  {
    number: "06",
    title: "Campaign Optimization",
    icon: BarChart3,
  },
  {
    number: "07",
    title: "Reporting",
    icon: FileText,
  },
];

const desktopPositions = [
  "left-[1%] top-[165px]",
  "left-[16%] top-[55px]",
  "left-[31%] top-[190px]",
  "left-[45%] top-[75px]",
  "left-[59%] top-[200px]",
  "left-[74%] top-[70px]",
  "right-[0%] top-[165px]",
];

export default function PaidSocialMediaAdvertising() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isVisible = useInView(sectionRef, {
    once: true,
    margin: "-110px",
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="paid-social-media-advertising"
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
          SUBTLE BACKGROUND LINES
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
            left-[-170px]
            top-[240px]
            h-[1px]
            w-[420px]
            rotate-[-18deg]
            bg-[#0B2A52]/[0.035]
          "
        />

        <div
          className="
            absolute
            right-[-160px]
            top-[420px]
            h-[1px]
            w-[380px]
            rotate-[16deg]
            bg-[#B79A72]/10
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
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
            y: 42,
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
            max-w-[920px]
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
            <span className="h-px w-9 bg-[#B79A72]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#B79A72]
                sm:text-[10px]
              "
            >
              Optional Service
            </span>

            <span className="h-px w-9 bg-[#B79A72]" />
          </div>

          <h2
            className="
              mt-6
              text-[2.2rem]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              sm:text-[2.65rem]
              md:text-[3rem]
              lg:text-[3.35rem]
            "
          >
            Social Media Advertising When Organic Reach Needs{" "}
            <span className="font-normal text-[#B79A72]">
              Extra Support.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[720px]
              text-[13px]
              leading-7
              text-[#0B2A52]/52
              sm:text-[14px]
            "
          >
            Paid social media advertising can be added when your objectives
            require additional reach, traffic, enquiries or campaign
            distribution.
          </p>
        </motion.header>

        {/* =======================================================
            JOURNEY LABEL
        ======================================================== */}

        <motion.div
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
            delay: 0.2,
            duration: reduceMotion ? 0 : 0.7,
          }}
          className="
            mt-16
            flex
            items-center
            justify-center
            gap-4
            sm:mt-20
          "
        >
          <span className="h-px max-w-[170px] flex-1 bg-[#0B2A52]/10" />

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#0B2A52]/35
            "
          >
            Paid Social Campaign Flow
          </span>

          <span className="h-px max-w-[170px] flex-1 bg-[#0B2A52]/10" />
        </motion.div>

        {/* =======================================================
            DESKTOP CAMPAIGN PATH
        ======================================================== */}

        <div
          className="
            relative
            mt-8
            hidden
            h-[380px]
            lg:block
          "
        >
          {/* -----------------------------------------------------
              SVG PATH
          ------------------------------------------------------ */}

          <svg
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
            className="
              absolute
              left-0
              top-[20px]
              h-[285px]
              w-full
              overflow-visible
            "
          >
            {/* BASE PATH */}

            <path
              d="
                M 20 180
                C 100 180, 120 60, 210 60
                C 300 60, 300 205, 390 205
                C 480 205, 490 80, 580 80
                C 670 80, 670 215, 760 215
                C 850 215, 850 70, 940 70
                C 1030 70, 1040 180, 1180 180
              "
              fill="none"
              stroke="#DCE6F1"
              strokeWidth="2"
            />

            {/* DRAWING PATH */}

            <motion.path
              d="
                M 20 180
                C 100 180, 120 60, 210 60
                C 300 60, 300 205, 390 205
                C 480 205, 490 80, 580 80
                C 670 80, 670 215, 760 215
                C 850 215, 850 70, 940 70
                C 1030 70, 1040 180, 1180 180
              "
              fill="none"
              stroke="#0B2A52"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={
                isVisible
                  ? {
                      pathLength: 1,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 2.2,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </svg>

          {/* -----------------------------------------------------
              MOVING DOT
          ------------------------------------------------------ */}

          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              initial={{
                left: "0%",
                top: "190px",
                opacity: 0,
              }}
              animate={
                isVisible
                  ? {
                      left: [
                        "1%",
                        "17%",
                        "32%",
                        "47%",
                        "61%",
                        "76%",
                        "96%",
                      ],
                      top: [
                        "190px",
                        "80px",
                        "215px",
                        "95px",
                        "225px",
                        "85px",
                        "190px",
                      ],
                      opacity: [0, 1, 1, 1, 1, 1, 0],
                    }
                  : {}
              }
              transition={{
                duration: 5.5,
                delay: 1.1,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              className="
                absolute
                z-30
                h-3
                w-3
                rounded-full
                bg-[#B79A72]
                shadow-[0_0_0_6px_rgba(183,154,114,0.13)]
              "
            />
          )}

          {/* -----------------------------------------------------
              SERVICE NODES
          ------------------------------------------------------ */}

          {paidServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.94,
                }}
                animate={
                  isVisible
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion
                    ? 0
                    : 0.55 + index * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  absolute
                  z-20
                  ${desktopPositions[index]}
                `}
              >
                <div
                  className="
                    relative
                    w-[152px]
                    cursor-default
                    rounded-[20px]
                    border
                    border-[#7D9FC5]/25
                    bg-white
                    p-3
                    shadow-[0_12px_32px_rgba(11,42,82,0.055)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#0B2A52]
                    hover:bg-[#0B2A52]
                    hover:shadow-[0_20px_45px_rgba(11,42,82,0.16)]
                    xl:w-[168px]
                    xl:p-4
                  "
                >
                  {/* TOP */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
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
                        rounded-xl
                        bg-[#EAF1F8]
                        text-[#0B2A52]
                        transition-all
                        duration-500
                        group-hover:bg-white/10
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.5}
                      />
                    </span>

                    <span
                      className="
                        text-[8px]
                        font-semibold
                        tracking-[0.15em]
                        text-[#B79A72]
                      "
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-[12px]
                      font-medium
                      leading-5
                      text-[#0B2A52]
                      transition-colors
                      duration-500
                      group-hover:text-white
                      xl:text-[13px]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* GOLD ACCENT */}

                  <span
                    className="
                      mt-4
                      block
                      h-[2px]
                      w-5
                      rounded-full
                      bg-[#B79A72]
                      transition-all
                      duration-500
                      group-hover:w-11
                    "
                  />

                  {/* PULSE */}

                  <span
                    className="
                      absolute
                      -bottom-[7px]
                      left-1/2
                      h-[13px]
                      w-[13px]
                      -translate-x-1/2
                      rounded-full
                      border-[3px]
                      border-white
                      bg-[#789BC2]
                      transition-all
                      duration-500
                      group-hover:scale-125
                      group-hover:bg-[#B79A72]
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =======================================================
            MOBILE / TABLET PATH
        ======================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-10
            max-w-[620px]
            lg:hidden
          "
        >
          {/* VERTICAL PATH */}

          <motion.span
            initial={{
              scaleY: 0,
            }}
            animate={
              isVisible
                ? {
                    scaleY: 1,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 1.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-5
              left-[21px]
              top-5
              w-px
              origin-top
              bg-[#0B2A52]/18
            "
          />

          <div className="space-y-3">
            {paidServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={
                    isVisible
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion
                      ? 0
                      : 0.4 + index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-4
                  "
                >
                  {/* NODE */}

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-[43px]
                      w-[43px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-[5px]
                      border-white
                      bg-[#E7EFF8]
                      text-[#0B2A52]
                      shadow-[0_5px_18px_rgba(11,42,82,0.08)]
                      transition-all
                      duration-500
                      group-hover:bg-[#0B2A52]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.5}
                    />
                  </span>

                  {/* ROW */}

                  <div
                    className="
                      flex
                      min-h-[74px]
                      flex-1
                      items-center
                      justify-between
                      gap-4
                      rounded-[18px]
                      border
                      border-[#0B2A52]/[0.075]
                      bg-white
                      px-5
                      py-4
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:border-[#789BC2]/40
                      group-hover:shadow-[0_12px_35px_rgba(11,42,82,0.07)]
                    "
                  >
                    <h3
                      className="
                        text-[13px]
                        font-medium
                        text-[#0B2A52]
                      "
                    >
                      {service.title}
                    </h3>

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.15em]
                        text-[#B79A72]
                      "
                    >
                      {service.number}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            COMMERCIAL DETAILS
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
            duration: reduceMotion ? 0 : 0.9,
            delay: 1.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-12
            max-w-[1080px]
            border-y
            border-[#0B2A52]/10
            lg:mt-4
          "
        >
          <div
            className="
              grid
              lg:grid-cols-2
            "
          >
            {/* AD BUDGET */}

            <div
              className="
                relative
                px-5
                py-7
                sm:px-8
                lg:border-r
                lg:border-[#0B2A52]/10
                lg:px-10
                lg:py-9
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <span
                  className="
                    mt-1
                    h-2
                    w-2
                    shrink-0
                    rounded-full
                    bg-[#B79A72]
                  "
                />

                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#B79A72]
                    "
                  >
                    Advertising Budget
                  </p>

                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-6
                      text-[#0B2A52]/58
                      sm:text-[14px]
                    "
                  >
                    Advertising budgets are separate from management fees unless
                    clearly stated otherwise.
                  </p>
                </div>
              </div>
            </div>

            {/* PRODUCTION */}

            <div
              className="
                relative
                border-t
                border-[#0B2A52]/10
                px-5
                py-7
                sm:px-8
                lg:border-t-0
                lg:px-10
                lg:py-9
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <span
                  className="
                    mt-1
                    h-2
                    w-2
                    shrink-0
                    rounded-full
                    bg-[#789BC2]
                  "
                />

                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#B79A72]
                    "
                  >
                    Before Campaign Begins
                  </p>

                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-6
                      text-[#0B2A52]/58
                      sm:text-[14px]
                    "
                  >
                    Creative production requirements and advertising spend are
                    confirmed before a campaign begins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            BOTTOM
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 1.3,
            duration: reduceMotion ? 0 : 0.8,
          }}
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-8 bg-[#0B2A52]/10" />

          <span
            className="
              text-center
              text-[8px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#0B2A52]/32
            "
          >
            Plan · Target · Launch · Create · Monitor · Optimize · Report
          </span>

          <span className="h-px w-8 bg-[#0B2A52]/10" />
        </motion.div>
      </div>
    </section>
  );
}