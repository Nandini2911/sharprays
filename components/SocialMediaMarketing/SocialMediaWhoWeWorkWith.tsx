"use client";

import { useRef } from "react";
import {
  ArrowRight,
  BarChart3,
  Compass,
  Layers3,
  MessageCircle,
  PenTool,
} from "lucide-react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const audienceFit = [
  "Have been posting without a clear strategy.",
  "Need a more consistent brand presence.",
  "Do not have the internal resources to manage content regularly.",
  "Want stronger creative direction.",
  "Need help planning and managing social media content.",
  "Want their social presence to support wider marketing and business objectives.",
  "Need clearer reporting and content insights.",
];

export default function SocialMediaWhoWeWorkWith() {
  /* =========================================================
     SEPARATE VIEWPORT TRIGGERS
  ========================================================= */

  const topRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const finalRef = useRef<HTMLDivElement | null>(null);

  const topVisible = useInView(topRef, {
    once: true,
    amount: 0.18,
  });

  const mapVisible = useInView(mapRef, {
    once: true,
    amount: 0.12,
  });

  const finalVisible = useInView(finalRef, {
    once: true,
    amount: 0.25,
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="who-we-work-with"
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
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            x: -70,
          }}
          animate={
            topVisible
              ? {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            -left-[350px]
            top-[120px]
            h-[650px]
            w-[650px]
            rounded-full
            border
            border-[#0B2A52]/[0.035]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            x: 70,
          }}
          animate={
            topVisible
              ? {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 1.3,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            -right-[260px]
            bottom-[-220px]
            h-[520px]
            w-[520px]
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
            TOP AREA
        ======================================================== */}

        <div
          ref={topRef}
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -90,
              y: 25,
            }}
            animate={
              topVisible
                ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={
                topVisible
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: 0.08,
              }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{
                  scaleX: 0,
                }}
                animate={
                  topVisible
                    ? {
                        scaleX: 1,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: 0.15,
                }}
                className="
                  h-px
                  w-9
                  origin-left
                  bg-[#B79A72]
                "
              />

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
                Who We Work With
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={
                topVisible
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-6
                max-w-[650px]
                text-[2.2rem]
                font-medium
                leading-[1.08]
                tracking-[-0.045em]
                sm:text-[2.65rem]
                md:text-[3rem]
                lg:text-[3.35rem]
              "
            >
              Social Media Marketing for Businesses That Want{" "}
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={
                  topVisible
                    ? {
                        opacity: 1,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: 0.35,
                }}
                className="font-normal text-[#B79A72]"
              >
                More Direction.
              </motion.span>
            </motion.h2>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 22,
              }}
              animate={
                topVisible
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: 0.27,
              }}
              className="
                mt-6
                max-w-[580px]
                text-[13px]
                leading-7
                text-[#0B2A52]/55
                sm:text-[14px]
              "
            >
              Our social media management service can be a good fit for
              businesses that:
            </motion.p>

            {/* SCATTERED → DIRECTION */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                topVisible
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: 0.38,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#0B2A52]/30
                "
              >
                Scattered Activity
              </span>

              <motion.span
                initial={{
                  scaleX: 0,
                }}
                animate={
                  topVisible
                    ? {
                        scaleX: 1,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: 0.5,
                }}
                className="
                  h-px
                  w-8
                  origin-left
                  bg-[#B79A72]
                "
              />

              <motion.div
                animate={
                  !reduceMotion && topVisible
                    ? {
                        x: [0, 4, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
              >
                <ArrowRight
                  size={13}
                  strokeWidth={1.5}
                  className="text-[#B79A72]"
                />
              </motion.div>

              <motion.span
                initial={{
                  scaleX: 0,
                }}
                animate={
                  topVisible
                    ? {
                        scaleX: 1,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: 0.58,
                }}
                className="
                  h-px
                  w-8
                  origin-left
                  bg-[#B79A72]
                "
              />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#0B2A52]
                "
              >
                Clear Direction
              </span>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
              y: 35,
              scale: 0.93,
            }}
            animate={
              topVisible
                ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[580px]
            "
          >
            <div
              className="
                relative
                min-h-[470px]
                overflow-hidden
                rounded-[32px]
                border
                border-[#0B2A52]/10
                bg-white
                p-6
                shadow-[0_30px_80px_rgba(11,42,82,0.08)]
                sm:min-h-[520px]
                sm:p-8
              "
            >
              {/* TOP META */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={
                  topVisible
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: 0.45,
                }}
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={
                      !reduceMotion && topVisible
                        ? {
                            scale: [1, 1.5, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.3,
                    }}
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#B79A72]
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#0B2A52]/38
                    "
                  >
                    Brand Direction
                  </span>
                </div>

                <span
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.16em]
                    text-[#B79A72]
                  "
                >
                  01 → 02
                </span>
              </motion.div>

              {/* =================================================
                  SCATTERED CONTENT
              ================================================== */}

              <div
                className="
                  absolute
                  left-6
                  top-[115px]
                  w-[42%]
                  sm:left-8
                "
              >
                {/* POST 01 */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -80,
                    y: -45,
                    rotate: -18,
                    scale: 0.76,
                  }}
                  animate={
                    topVisible
                      ? {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          rotate: -8,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.85,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    w-[150px]
                    border
                    border-[#0B2A52]/12
                    bg-white
                    p-3
                    shadow-[0_12px_28px_rgba(11,42,82,0.07)]
                    sm:w-[175px]
                  "
                >
                  <motion.div
                    animate={
                      !reduceMotion && topVisible
                        ? {
                            y: [0, -4, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#0B2A52]/10
                        "
                      >
                        <PenTool
                          size={11}
                          strokeWidth={1.5}
                        />
                      </span>

                      <span className="h-[5px] w-14 bg-[#0B2A52]/10" />
                    </div>

                    <div
                      className="
                        mt-3
                        h-[64px]
                        border
                        border-[#0B2A52]/[0.06]
                      "
                    />

                    <div className="mt-3 space-y-2">
                      <span className="block h-[5px] w-full bg-[#0B2A52]/10" />
                      <span className="block h-[5px] w-[65%] bg-[#0B2A52]/10" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* POST 02 */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -65,
                    y: 40,
                    rotate: 18,
                    scale: 0.75,
                  }}
                  animate={
                    topVisible
                      ? {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          rotate: 7,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.85,
                    delay: 0.67,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    -mt-5
                    ml-14
                    w-[145px]
                    border
                    border-[#B79A72]/35
                    bg-white
                    p-3
                    shadow-[0_12px_28px_rgba(11,42,82,0.07)]
                    sm:w-[170px]
                  "
                >
                  <motion.div
                    animate={
                      !reduceMotion && topVisible
                        ? {
                            y: [0, 5, 0],
                            x: [0, 2, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 4.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.7,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle
                        size={13}
                        strokeWidth={1.5}
                        className="text-[#B79A72]"
                      />

                      <span className="h-[5px] w-16 bg-[#0B2A52]/10" />
                    </div>

                    <div className="mt-3 space-y-2">
                      <span className="block h-[5px] w-full bg-[#0B2A52]/10" />
                      <span className="block h-[5px] w-[78%] bg-[#0B2A52]/10" />
                      <span className="block h-[5px] w-[48%] bg-[#0B2A52]/10" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* POST 03 */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -50,
                    y: 75,
                    rotate: -16,
                    scale: 0.72,
                  }}
                  animate={
                    topVisible
                      ? {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          rotate: -4,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.85,
                    delay: 0.82,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    -mt-2
                    ml-2
                    w-[135px]
                    border
                    border-[#0B2A52]/10
                    bg-white
                    p-3
                    shadow-[0_12px_28px_rgba(11,42,82,0.06)]
                    sm:w-[155px]
                  "
                >
                  <BarChart3
                    size={14}
                    strokeWidth={1.5}
                    className="text-[#0B2A52]"
                  />

                  <div
                    className="
                      mt-4
                      flex
                      items-end
                      gap-2
                    "
                  >
                    <motion.span
                      initial={{
                        height: 0,
                      }}
                      animate={
                        topVisible
                          ? {
                              height: 20,
                            }
                          : {}
                      }
                      transition={{
                        delay: 0.95,
                        duration: 0.4,
                      }}
                      className="w-3 bg-[#0B2A52]/10"
                    />

                    <motion.span
                      initial={{
                        height: 0,
                      }}
                      animate={
                        topVisible
                          ? {
                              height: 36,
                            }
                          : {}
                      }
                      transition={{
                        delay: 1.05,
                        duration: 0.4,
                      }}
                      className="w-3 bg-[#B79A72]"
                    />

                    <motion.span
                      initial={{
                        height: 0,
                      }}
                      animate={
                        topVisible
                          ? {
                              height: 24,
                            }
                          : {}
                      }
                      transition={{
                        delay: 1.15,
                        duration: 0.4,
                      }}
                      className="w-3 bg-[#0B2A52]/15"
                    />

                    <motion.span
                      initial={{
                        height: 0,
                      }}
                      animate={
                        topVisible
                          ? {
                              height: 44,
                            }
                          : {}
                      }
                      transition={{
                        delay: 1.25,
                        duration: 0.4,
                      }}
                      className="w-3 bg-[#0B2A52]"
                    />
                  </div>
                </motion.div>
              </div>

              {/* =================================================
                  DIRECTION ARROW
              ================================================== */}

              <div
                className="
                  absolute
                  left-[46%]
                  top-1/2
                  z-20
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 0,
                    rotate: -90,
                  }}
                  animate={
                    topVisible
                      ? {
                          scale: 1,
                          opacity: 1,
                          rotate: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: 0.98,
                    type: reduceMotion ? undefined : "spring",
                    stiffness: 180,
                    damping: 16,
                  }}
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B79A72]
                    text-white
                    shadow-[0_12px_28px_rgba(183,154,114,0.25)]
                  "
                >
                  <motion.div
                    animate={
                      !reduceMotion && topVisible
                        ? {
                            x: [0, 4, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  >
                    <ArrowRight
                      size={17}
                      strokeWidth={1.6}
                    />
                  </motion.div>
                </motion.div>

                {!reduceMotion && topVisible && (
                  <>
                    <motion.span
                      animate={{
                        scale: [1, 1.55],
                        opacity: [0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-[#B79A72]
                      "
                    />

                    <motion.span
                      animate={{
                        scale: [1, 1.9],
                        opacity: [0.18, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.35,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-[#B79A72]/60
                      "
                    />
                  </>
                )}
              </div>

              {/* =================================================
                  ORGANIZED BRAND
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                  scale: 0.9,
                }}
                animate={
                  topVisible
                    ? {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.95,
                  delay: 1.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-[60px]
                  right-6
                  top-[95px]
                  w-[45%]
                  sm:right-8
                "
              >
                <motion.div
                  animate={
                    !reduceMotion && topVisible
                      ? {
                          y: [0, -4, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.8,
                  }}
                  className="
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    border
                    border-[#0B2A52]
                    bg-[#0B2A52]
                    p-5
                    text-white
                    shadow-[0_25px_60px_rgba(11,42,82,0.18)]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <motion.span
                      initial={{
                        scale: 0,
                        rotate: -70,
                      }}
                      animate={
                        topVisible
                          ? {
                              scale: 1,
                              rotate: 0,
                            }
                          : {}
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.65,
                        delay: 1.35,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                      "
                    >
                      <Compass
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#B79A72]"
                      />
                    </motion.span>

                    <span
                      className="
                        text-[7px]
                        font-semibold
                        tracking-[0.18em]
                        text-[#B79A72]
                      "
                    >
                      DIRECTION
                    </span>
                  </div>

                  <div className="my-auto">
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={
                        topVisible
                          ? {
                              opacity: 1,
                              y: 0,
                            }
                          : {}
                      }
                      transition={{
                        delay: 1.4,
                      }}
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/40
                      "
                    >
                      Organized Social Presence
                    </motion.p>

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 22,
                      }}
                      animate={
                        topVisible
                          ? {
                              opacity: 1,
                              y: 0,
                            }
                          : {}
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.7,
                        delay: 1.48,
                      }}
                      className="
                        mt-3
                        text-[20px]
                        font-medium
                        leading-[1.12]
                        tracking-[-0.035em]
                        sm:text-[24px]
                      "
                    >
                      Clear.
                      <br />
                      Consistent.
                      <br />

                      <span className="text-[#B79A72]">
                        Intentional.
                      </span>
                    </motion.p>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        icon: Compass,
                        text: "Strategy",
                      },
                      {
                        icon: Layers3,
                        text: "Consistency",
                      },
                      {
                        icon: BarChart3,
                        text: "Insights",
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.text}
                          initial={{
                            opacity: 0,
                            x: 20,
                          }}
                          animate={
                            topVisible
                              ? {
                                  opacity: 1,
                                  x: 0,
                                }
                              : {}
                          }
                          transition={{
                            duration: reduceMotion ? 0 : 0.5,
                            delay: 1.58 + index * 0.09,
                          }}
                          className="
                            flex
                            items-center
                            gap-2
                            border-t
                            border-white/10
                            pt-2
                          "
                        >
                          <Icon
                            size={10}
                            strokeWidth={1.5}
                            className="text-[#B79A72]"
                          />

                          <span
                            className="
                              text-[8px]
                              tracking-[0.14em]
                              text-white/55
                            "
                          >
                            {item.text}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BRAND FIT DIRECTION MAP
        ======================================================== */}

        <motion.div
          ref={mapRef}
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.98,
          }}
          animate={
            mapVisible
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.95,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-16
            max-w-[1180px]
            sm:mt-20
          "
        >
          {/* MAP TITLE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={
              mapVisible
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: 0.05,
            }}
            className="flex items-center gap-4"
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#B79A72]
                sm:text-[11px]
              "
            >
              A Good Fit If
            </span>

            <motion.span
              initial={{
                scaleX: 0,
              }}
              animate={
                mapVisible
                  ? {
                      scaleX: 1,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: 0.12,
              }}
              className="
                h-px
                flex-1
                origin-left
                bg-[#0B2A52]/10
              "
            />

            <span
              className="
                hidden
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#0B2A52]/30
                sm:block
              "
            >
              07 Brand Signals
            </span>
          </motion.div>

          {/* =====================================================
              DESKTOP MAP
          ====================================================== */}

          <div
            className="
              relative
              mt-12
              hidden
              min-h-[590px]
              grid-cols-[1fr_220px_1fr]
              items-center
              gap-5
              lg:grid
            "
          >
            {/* CENTER LINE */}

            <motion.span
              initial={{
                scaleY: 0,
              }}
              animate={
                mapVisible
                  ? {
                      scaleY: 1,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 1.25,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-1/2
                top-[28px]
                h-[530px]
                w-px
                -translate-x-1/2
                origin-top
                bg-[#0B2A52]/10
              "
            />

            {/* ===================================================
                LEFT SIGNALS
            ==================================================== */}

            <div className="space-y-14">
              {audienceFit.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -110,
                    y: 18,
                  }}
                  animate={
                    mapVisible
                      ? {
                          opacity: 1,
                          x: 0,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    delay: reduceMotion
                      ? 0
                      : 0.18 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[112px]
                    items-center
                  "
                >
                  <div
                    className="
                      flex
                      w-full
                      items-center
                      justify-end
                      gap-6
                      border-b
                      border-[#0B2A52]/10
                      py-6
                      transition-all
                      duration-500
                      group-hover:border-[#B79A72]/60
                    "
                  >
                    <div className="text-right">
                      <span
                        className="
                          text-[10px]
                          font-semibold
                          tracking-[0.18em]
                          text-[#B79A72]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p
                        className="
                          mt-3
                          ml-auto
                          max-w-[420px]
                          text-[16px]
                          font-medium
                          leading-7
                          tracking-[-0.015em]
                          text-[#0B2A52]/70
                          transition-all
                          duration-400
                          group-hover:-translate-x-1
                          group-hover:text-[#0B2A52]
                          xl:text-[17px]
                        "
                      >
                        {item}
                      </p>
                    </div>

                    {/* NODE */}

                    <motion.span
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={
                        mapVisible
                          ? {
                              scale: 1,
                              opacity: 1,
                            }
                          : {}
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.55,
                        delay: reduceMotion
                          ? 0
                          : 0.3 + index * 0.12,
                      }}
                      className="
                        relative
                        z-20
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#0B2A52]/15
                        bg-white
                        shadow-[0_7px_20px_rgba(11,42,82,0.035)]
                        transition-all
                        duration-400
                        group-hover:border-[#B79A72]
                        group-hover:shadow-[0_10px_25px_rgba(183,154,114,0.12)]
                      "
                    >
                      <span
                        className="
                          h-[6px]
                          w-[6px]
                          rounded-full
                          bg-[#0B2A52]
                          transition-all
                          duration-400
                          group-hover:scale-150
                          group-hover:bg-[#B79A72]
                        "
                      />
                    </motion.span>
                  </div>

                  {/* CONNECTOR */}

                  <motion.span
                    initial={{
                      scaleX: 0,
                    }}
                    animate={
                      mapVisible
                        ? {
                            scaleX: 1,
                          }
                        : {}
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.7,
                      delay: reduceMotion
                        ? 0
                        : 0.42 + index * 0.12,
                    }}
                    className="
                      absolute
                      -right-[110px]
                      top-1/2
                      h-px
                      w-[110px]
                      origin-left
                      bg-[#0B2A52]/12
                      transition-colors
                      duration-400
                      group-hover:bg-[#B79A72]
                    "
                  />
                </motion.div>
              ))}
            </div>

            {/* ===================================================
                CENTER BRAND DIRECTION
            ==================================================== */}

            <div
              className="
                relative
                z-20
                flex
                h-full
                items-center
                justify-center
              "
            >
              {/* OUTER RING */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.55,
                }}
                animate={
                  mapVisible
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: 0.43,
                }}
                className="
                  absolute
                  h-[195px]
                  w-[195px]
                  rounded-full
                  border
                  border-[#0B2A52]/10
                  bg-white
                "
              />

              {/* SECOND RING */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.55,
                }}
                animate={
                  mapVisible
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: 0.5,
                }}
                className="
                  absolute
                  h-[166px]
                  w-[166px]
                  rounded-full
                  border
                  border-[#0B2A52]/[0.06]
                "
              />

              {/* ROTATING GOLD RING */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.65,
                }}
                animate={
                  mapVisible
                    ? {
                        opacity: 1,
                        scale: 1,
                        rotate: reduceMotion ? 0 : 360,
                      }
                    : {}
                }
                transition={{
                  opacity: {
                    duration: reduceMotion ? 0 : 0.55,
                    delay: 0.55,
                  },
                  scale: {
                    duration: reduceMotion ? 0 : 0.75,
                    delay: 0.55,
                  },
                  rotate: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="
                  absolute
                  h-[148px]
                  w-[148px]
                  rounded-full
                  border
                  border-dashed
                  border-[#B79A72]/40
                "
              />

              {/* CENTER */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.45,
                  rotate: -25,
                }}
                animate={
                  mapVisible
                    ? {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: 0.62,
                  type: reduceMotion ? undefined : "spring",
                  stiffness: 150,
                  damping: 16,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.05,
                      }
                }
                className="
                  relative
                  z-30
                  flex
                  h-[125px]
                  w-[125px]
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B2A52]
                  text-center
                  shadow-[0_20px_50px_rgba(11,42,82,0.16)]
                "
              >
                <motion.div
                  animate={
                    !reduceMotion && mapVisible
                      ? {
                          rotate: [0, 7, -7, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 1.3,
                  }}
                >
                  <Compass
                    size={24}
                    strokeWidth={1.4}
                    className="text-[#B79A72]"
                  />
                </motion.div>

                <span
                  className="
                    mt-3
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white
                  "
                >
                  Brand
                </span>

                <span
                  className="
                    mt-1
                    text-[8px]
                    uppercase
                    tracking-[0.16em]
                    text-white/55
                  "
                >
                  Direction
                </span>
              </motion.div>

              {/* WHERE YOU ARE */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={
                  mapVisible
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: 0.78,
                }}
                className="
                  absolute
                  left-[-42px]
                  top-[74px]
                  flex
                  -translate-x-full
                  items-center
                  gap-3
                  bg-white
                  py-1
                  pl-2
                "
              >
                <span
                  className="
                    whitespace-nowrap
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#B79A72]
                  "
                >
                  Where You Are
                </span>

                <motion.span
                  initial={{
                    scaleX: 0,
                  }}
                  animate={
                    mapVisible
                      ? {
                          scaleX: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: 0.88,
                  }}
                  className="
                    h-px
                    w-12
                    origin-left
                    bg-[#B79A72]/30
                  "
                />
              </motion.div>

              {/* WHERE YOU WANT TO GO */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={
                  mapVisible
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: 0.85,
                }}
                className="
                  absolute
                  bottom-[72px]
                  right-[-40px]
                  flex
                  translate-x-full
                  items-center
                  gap-3
                  bg-white
                  py-1
                  pr-2
                "
              >
                <motion.span
                  initial={{
                    scaleX: 0,
                  }}
                  animate={
                    mapVisible
                      ? {
                          scaleX: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: 0.95,
                  }}
                  className="
                    h-px
                    w-12
                    origin-right
                    bg-[#0B2A52]/15
                  "
                />

                <span
                  className="
                    whitespace-nowrap
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.19em]
                    text-[#0B2A52]
                  "
                >
                  Where You Want To Go
                </span>
              </motion.div>
            </div>

            {/* ===================================================
                RIGHT SIGNALS
            ==================================================== */}

            <div className="space-y-7">
              {audienceFit.slice(3).map((item, index) => {
                const actualIndex = index + 3;

                return (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 110,
                      y: 18,
                    }}
                    animate={
                      mapVisible
                        ? {
                            opacity: 1,
                            x: 0,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: reduceMotion
                        ? 0
                        : 0.22 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[105px]
                      items-center
                    "
                  >
                    {/* CONNECTOR */}

                    <motion.span
                      initial={{
                        scaleX: 0,
                      }}
                      animate={
                        mapVisible
                          ? {
                              scaleX: 1,
                            }
                          : {}
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.7,
                        delay: reduceMotion
                          ? 0
                          : 0.46 + index * 0.1,
                      }}
                      className="
                        absolute
                        -left-[110px]
                        top-1/2
                        h-px
                        w-[110px]
                        origin-right
                        bg-[#0B2A52]/12
                        transition-colors
                        duration-400
                        group-hover:bg-[#B79A72]
                      "
                    />

                    <div
                      className="
                        flex
                        w-full
                        items-center
                        gap-6
                        border-b
                        border-[#0B2A52]/10
                        py-6
                        transition-all
                        duration-500
                        group-hover:border-[#B79A72]/60
                      "
                    >
                      {/* NODE */}

                      <motion.span
                        initial={{
                          scale: 0,
                          opacity: 0,
                        }}
                        animate={
                          mapVisible
                            ? {
                                scale: 1,
                                opacity: 1,
                              }
                            : {}
                        }
                        transition={{
                          duration: reduceMotion ? 0 : 0.55,
                          delay: reduceMotion
                            ? 0
                            : 0.32 + index * 0.1,
                        }}
                        className="
                          relative
                          z-20
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#0B2A52]/15
                          bg-white
                          shadow-[0_7px_20px_rgba(11,42,82,0.035)]
                          transition-all
                          duration-400
                          group-hover:border-[#B79A72]
                          group-hover:shadow-[0_10px_25px_rgba(183,154,114,0.12)]
                        "
                      >
                        <span
                          className="
                            h-[6px]
                            w-[6px]
                            rounded-full
                            bg-[#0B2A52]
                            transition-all
                            duration-400
                            group-hover:scale-150
                            group-hover:bg-[#B79A72]
                          "
                        />
                      </motion.span>

                      <div>
                        <span
                          className="
                            text-[10px]
                            font-semibold
                            tracking-[0.18em]
                            text-[#B79A72]
                          "
                        >
                          {String(actualIndex + 1).padStart(2, "0")}
                        </span>

                        <p
                          className="
                            mt-3
                            max-w-[430px]
                            text-[16px]
                            font-medium
                            leading-7
                            tracking-[-0.015em]
                            text-[#0B2A52]/70
                            transition-all
                            duration-400
                            group-hover:translate-x-1
                            group-hover:text-[#0B2A52]
                            xl:text-[17px]
                          "
                        >
                          {item}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              MOBILE / TABLET
          ====================================================== */}

          <div className="relative mt-9 lg:hidden">
            {/* VERTICAL LINE */}

            <motion.span
              initial={{
                scaleY: 0,
              }}
              animate={
                mapVisible
                  ? {
                      scaleY: 1,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 1.2,
                delay: 0.15,
              }}
              className="
                absolute
                bottom-7
                left-[23px]
                top-7
                w-px
                origin-top
                bg-[#0B2A52]/10
              "
            />

            <div className="space-y-2">
              {audienceFit.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -35 : 35,
                    y: 18,
                  }}
                  animate={
                    mapVisible
                      ? {
                          opacity: 1,
                          x: 0,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion
                      ? 0
                      : 0.18 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-5
                  "
                >
                  {/* NODE */}

                  <motion.span
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={
                      mapVisible
                        ? {
                            scale: 1,
                            opacity: 1,
                          }
                        : {}
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.5,
                      delay: reduceMotion
                        ? 0
                        : 0.25 + index * 0.08,
                    }}
                    className="
                      relative
                      z-10
                      flex
                      h-[47px]
                      w-[47px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#0B2A52]/15
                      bg-white
                      text-[9px]
                      font-semibold
                      text-[#B79A72]
                      shadow-[0_5px_15px_rgba(11,42,82,0.03)]
                      transition-all
                      duration-400
                      group-hover:border-[#0B2A52]
                      group-hover:bg-[#0B2A52]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>

                  {/* TEXT */}

                  <div
                    className="
                      flex
                      min-h-[88px]
                      flex-1
                      items-center
                      border-b
                      border-[#0B2A52]/10
                      py-5
                      transition-colors
                      duration-400
                      group-hover:border-[#B79A72]/60
                    "
                  >
                    <p
                      className="
                        text-[14px]
                        font-medium
                        leading-6
                        text-[#0B2A52]/68
                        transition-colors
                        duration-300
                        group-hover:text-[#0B2A52]
                        sm:text-[15px]
                        sm:leading-7
                      "
                    >
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MOBILE DIRECTION */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.7,
                rotate: -15,
              }}
              animate={
                mapVisible
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: 0.78,
                type: reduceMotion ? undefined : "spring",
              }}
              className="
                relative
                z-20
                mx-auto
                mt-10
                flex
                w-fit
                items-center
                gap-4
                bg-white
                px-5
              "
            >
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B2A52]
                  text-[#B79A72]
                "
              >
                <Compass
                  size={18}
                  strokeWidth={1.5}
                />
              </span>

              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#B79A72]
                  "
                >
                  Brand Direction
                </p>

                <p
                  className="
                    mt-1
                    text-[12px]
                    font-medium
                    text-[#0B2A52]
                  "
                >
                  From activity to intention.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* =======================================================
            FINAL STATEMENT
        ======================================================== */}

        <motion.div
          ref={finalRef}
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.98,
          }}
          animate={
            finalVisible
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[1000px]
            border-y
            border-[#0B2A52]/12
            py-9
            sm:mt-20
            sm:py-10
          "
        >
          <div
            className="
              grid
              gap-5
              sm:grid-cols-[auto_1fr]
              sm:gap-7
            "
          >
            {/* ICON */}

            <motion.span
              initial={{
                opacity: 0,
                x: -40,
                scale: 0.7,
                rotate: -30,
              }}
              animate={
                finalVisible
                  ? {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      rotate: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: 0.08,
                type: reduceMotion ? undefined : "spring",
                stiffness: 170,
                damping: 15,
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                bg-[#0B2A52]
                text-white
              "
            >
              <motion.div
                animate={
                  !reduceMotion && finalVisible
                    ? {
                        rotate: [0, 8, -8, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 0.8,
                }}
              >
                <Compass
                  size={18}
                  strokeWidth={1.5}
                />
              </motion.div>
            </motion.span>

            {/* CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 45,
              }}
              animate={
                finalVisible
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#B79A72]
                "
              >
                Start With Direction
              </p>

              <p
                className="
                  mt-3
                  max-w-[800px]
                  text-[14px]
                  leading-7
                  text-[#0B2A52]/65
                  sm:text-[15px]
                "
              >
                Whether you are developing your social presence from the
                beginning or improving an existing one, the first step is
                understanding where your brand is now and where you want it
                to go.
              </p>
            </motion.div>
          </div>

          {/* BOTTOM LINE */}

          <motion.span
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={
              finalVisible
                ? {
                    scaleX: 1,
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-0
              left-1/2
              h-[2px]
              w-[150px]
              origin-center
              -translate-x-1/2
              bg-[#B79A72]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}