"use client";

import { useRef, useState } from "react";
import {
  ArrowDown,
  BriefcaseBusiness,
  Building2,
  Check,
  Crosshair,
  Layers3,
  Users,
} from "lucide-react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const criteria = [
  {
    number: "01",
    title: "Audience",
    icon: Users,
    platforms: [0, 1, 2],
  },
  {
    number: "02",
    title: "Industry",
    icon: Building2,
    platforms: [1, 2],
  },
  {
    number: "03",
    title: "Business Model",
    icon: BriefcaseBusiness,
    platforms: [0, 1, 2],
  },
  {
    number: "04",
    title: "Content Capabilities",
    icon: Layers3,
    platforms: [0, 3],
  },
  {
    number: "05",
    title: "Objectives",
    icon: Crosshair,
    platforms: [0, 1, 2, 3],
  },
];

const platforms = [
  {
    mark: "IG",
    name: "Instagram",
  },
  {
    mark: "FB",
    name: "Facebook",
  },
  {
    mark: "IN",
    name: "LinkedIn",
  },
  {
    mark: "+",
    name: "Other",
  },
];

export default function SocialMediaPlatformStrategy() {
  const headerRef = useRef<HTMLElement | null>(null);
  const principleRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);

  const [activeCriterion, setActiveCriterion] = useState(0);

  /* =========================================================
     EACH BLOCK HAS ITS OWN VIEWPORT TRIGGER
  ========================================================= */

  const headerVisible = useInView(headerRef, {
    once: true,
    amount: 0.25,
  });

  const principleVisible = useInView(principleRef, {
    once: true,
    amount: 0.35,
  });

  const boardVisible = useInView(boardRef, {
    once: true,
    amount: 0.1,
  });

  const resultVisible = useInView(resultRef, {
    once: true,
    amount: 0.25,
  });

  const copyVisible = useInView(copyRef, {
    once: true,
    amount: 0.35,
  });

  const reduceMotion = useReducedMotion();

  const activePlatforms =
    criteria[activeCriterion].platforms;

  return (
    <section
      id="social-media-platforms"
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
            scale: 0.82,
            x: -70,
          }}
          animate={
            headerVisible
              ? {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 1.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            -left-[360px]
            top-[180px]
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
            scale: 0.82,
            x: 70,
          }}
          animate={
            resultVisible
              ? {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 1.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            -right-[300px]
            bottom-[-240px]
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
          ref={headerRef}
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.98,
          }}
          animate={
            headerVisible
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
            mx-auto
            max-w-[930px]
            text-center
          "
        >
          {/* LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={
              headerVisible
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: 0.08,
            }}
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <motion.span
              initial={{
                scaleX: 0,
              }}
              animate={
                headerVisible
                  ? {
                      scaleX: 1,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: 0.16,
              }}
              className="
                h-px
                w-9
                origin-right
                bg-[#B79A72]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#B79A72]
              "
            >
              Social Media Platforms
            </span>

            <motion.span
              initial={{
                scaleX: 0,
              }}
              animate={
                headerVisible
                  ? {
                      scaleX: 1,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: 0.16,
              }}
              className="
                h-px
                w-9
                origin-left
                bg-[#B79A72]
              "
            />
          </motion.div>

          {/* HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={
              headerVisible
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
              text-[2.2rem]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              text-[#0B2A52]
              sm:text-[2.65rem]
              md:text-[3rem]
              lg:text-[3.35rem]
            "
          >
            Which Social Media Platforms Should{" "}
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={
                headerVisible
                  ? {
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: 0.36,
              }}
              className="font-normal text-[#B79A72]"
            >
              Your Business Use?
            </motion.span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={
              headerVisible
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.28,
            }}
            className="
              mx-auto
              mt-6
              max-w-[780px]
              text-[14px]
              leading-7
              text-[#0B2A52]/60
              sm:text-[15px]
            "
          >
            The best social media platform depends on your audience,
            industry, business model, content capabilities and objectives.
          </motion.p>
        </motion.header>

        {/* =======================================================
            STRATEGIC PRINCIPLE
        ======================================================== */}

        <motion.div
          ref={principleRef}
          initial={{
            opacity: 0,
            y: 55,
          }}
          animate={
            principleVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-12
            max-w-[980px]
            border-y
            border-[#0B2A52]/10
            py-7
            text-center
            sm:mt-14
          "
        >
          <motion.p
            initial={{
              opacity: 0,
              x: -45,
            }}
            animate={
              principleVisible
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.08,
            }}
            className="
              text-[17px]
              font-medium
              leading-7
              tracking-[-0.018em]
              text-[#0B2A52]
              sm:text-[19px]
            "
          >
            Being active everywhere is not always the strongest strategy.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              x: 45,
            }}
            animate={
              principleVisible
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.16,
            }}
            className="
              mx-auto
              mt-2
              max-w-[720px]
              text-[14px]
              leading-7
              text-[#0B2A52]/52
              sm:text-[15px]
            "
          >
            We focus on selecting channels where your brand has a clear
            reason to participate.
          </motion.p>
        </motion.div>

        {/* =======================================================
            PLATFORM FIT BOARD
        ======================================================== */}

        <motion.div
          ref={boardRef}
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.98,
          }}
          animate={
            boardVisible
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
            max-w-[1120px]
            sm:mt-20
          "
        >
          {/* =====================================================
              BOARD HEADER
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={
              boardVisible
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
            className="
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#B79A72]
              "
            >
              Platform Fit
            </span>

            <motion.span
              initial={{
                scaleX: 0,
              }}
              animate={
                boardVisible
                  ? {
                      scaleX: 1,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.8,
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
                text-[10px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-[#0B2A52]/30
                sm:block
              "
            >
              Strategy Before Channels
            </span>
          </motion.div>

          {/* =====================================================
              DESKTOP STRATEGY BOARD
          ====================================================== */}

          <div
            className="
              relative
              mt-12
              hidden
              min-h-[650px]
              lg:block
            "
          >
            {/* ===================================================
                TOP THREE FACTORS
            ==================================================== */}

            <div
              className="
                grid
                grid-cols-3
                gap-7
              "
            >
              {criteria.slice(0, 3).map((item, index) => {
                const Icon = item.icon;
                const isActive =
                  activeCriterion === index;

                return (
                  <motion.button
                    key={item.title}
                    type="button"
                    initial={{
                      opacity: 0,
                      y: -75,
                      scale: 0.9,
                    }}
                    animate={
                      boardVisible
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
                        : 0.16 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() =>
                      setActiveCriterion(index)
                    }
                    onFocus={() =>
                      setActiveCriterion(index)
                    }
                    onClick={() =>
                      setActiveCriterion(index)
                    }
                    className="
                      group
                      relative
                      text-center
                      outline-none
                    "
                  >
                    {/* ICON */}

                    <motion.span
                      initial={{
                        scale: 0,
                      }}
                      animate={
                        boardVisible
                          ? {
                              scale: 1,
                            }
                          : {}
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.55,
                        delay: reduceMotion
                          ? 0
                          : 0.28 + index * 0.1,
                        type: reduceMotion
                          ? undefined
                          : "spring",
                        stiffness: 180,
                        damping: 15,
                      }}
                      className={`
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-500

                        ${
                          isActive
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white shadow-[0_14px_35px_rgba(11,42,82,0.14)]"
                            : "border-[#0B2A52]/15 bg-white text-[#0B2A52]"
                        }
                      `}
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.5}
                      />
                    </motion.span>

                    <span
                      className="
                        mt-4
                        block
                        text-[10px]
                        font-semibold
                        tracking-[0.18em]
                        text-[#B79A72]
                      "
                    >
                      {item.number}
                    </span>

                    <p
                      className={`
                        mt-2
                        text-[18px]
                        font-medium
                        tracking-[-0.018em]
                        transition-colors
                        duration-400

                        ${
                          isActive
                            ? "text-[#0B2A52]"
                            : "text-[#0B2A52]/62"
                        }
                      `}
                    >
                      {item.title}
                    </p>

                    {/* CONNECTING LINE */}

                    <motion.span
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={
                        boardVisible
                          ? {
                              height: isActive ? 92 : 70,
                              opacity: 1,
                              backgroundColor: isActive
                                ? "#B79A72"
                                : "rgba(11,42,82,0.10)",
                            }
                          : {}
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.65,
                        delay: reduceMotion
                          ? 0
                          : 0.38 + index * 0.09,
                      }}
                      className="
                        absolute
                        left-1/2
                        top-[118px]
                        w-px
                        -translate-x-1/2
                      "
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* ===================================================
                CENTER PLATFORM FIT
            ==================================================== */}

            <div
              className="
                absolute
                left-1/2
                top-[285px]
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              {/* OUTER RING */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.55,
                }}
                animate={
                  boardVisible
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.85,
                  delay: 0.45,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[225px]
                  w-[225px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#0B2A52]/10
                "
              />

              {/* ROTATING GOLD RING */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={
                  boardVisible
                    ? {
                        opacity: 1,
                        scale: 1,
                        rotate: reduceMotion
                          ? 0
                          : 360,
                      }
                    : {}
                }
                transition={{
                  opacity: {
                    duration: reduceMotion ? 0 : 0.55,
                    delay: 0.52,
                  },
                  scale: {
                    duration: reduceMotion ? 0 : 0.8,
                    delay: 0.52,
                  },
                  rotate: {
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[190px]
                  w-[190px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-dashed
                  border-[#B79A72]/30
                "
              />

              {/* CENTER */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.4,
                  rotate: -30,
                }}
                animate={
                  boardVisible
                    ? {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: 0.58,
                  type: reduceMotion
                    ? undefined
                    : "spring",
                  stiffness: 155,
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
                  z-20
                  flex
                  h-[150px]
                  w-[150px]
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
                    !reduceMotion &&
                    boardVisible
                      ? {
                          rotate: [
                            0,
                            7,
                            -7,
                            0,
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 1.4,
                  }}
                >
                  <Crosshair
                    size={26}
                    strokeWidth={1.4}
                    className="text-[#B79A72]"
                  />
                </motion.div>

                <p
                  className="
                    mt-3
                    text-[14px]
                    font-semibold
                    tracking-[-0.01em]
                    text-white
                  "
                >
                  Platform Fit
                </p>

                <span
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-[0.17em]
                    text-white/45
                  "
                >
                  Strategic Match
                </span>
              </motion.div>
            </div>

            {/* ===================================================
                LOWER TWO FACTORS
            ==================================================== */}

            <div
              className="
                absolute
                left-1/2
                top-[380px]
                grid
                w-[680px]
                -translate-x-1/2
                grid-cols-2
                gap-40
              "
            >
              {criteria.slice(3).map((item, index) => {
                const actualIndex = index + 3;

                const Icon = item.icon;

                const isActive =
                  activeCriterion === actualIndex;

                return (
                  <motion.button
                    key={item.title}
                    type="button"
                    initial={{
                      opacity: 0,
                      y: 75,
                      scale: 0.9,
                    }}
                    animate={
                      boardVisible
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
                        : 0.32 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() =>
                      setActiveCriterion(actualIndex)
                    }
                    onFocus={() =>
                      setActiveCriterion(actualIndex)
                    }
                    onClick={() =>
                      setActiveCriterion(actualIndex)
                    }
                    className="
                      group
                      relative
                      text-center
                      outline-none
                    "
                  >
                    {/* UP LINE */}

                    <motion.span
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={
                        boardVisible
                          ? {
                              height: isActive ? 70 : 50,
                              opacity: 1,
                              backgroundColor: isActive
                                ? "#B79A72"
                                : "rgba(11,42,82,0.10)",
                            }
                          : {}
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.65,
                        delay: reduceMotion
                          ? 0
                          : 0.44 + index * 0.1,
                      }}
                      className="
                        absolute
                        bottom-[115px]
                        left-1/2
                        w-px
                        -translate-x-1/2
                      "
                    />

                    <motion.span
                      initial={{
                        scale: 0,
                      }}
                      animate={
                        boardVisible
                          ? {
                              scale: 1,
                            }
                          : {}
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.55,
                        delay: reduceMotion
                          ? 0
                          : 0.42 + index * 0.1,
                        type: reduceMotion
                          ? undefined
                          : "spring",
                      }}
                      className={`
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-500

                        ${
                          isActive
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white shadow-[0_14px_35px_rgba(11,42,82,0.14)]"
                            : "border-[#0B2A52]/15 bg-white text-[#0B2A52]"
                        }
                      `}
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.5}
                      />
                    </motion.span>

                    <span
                      className="
                        mt-4
                        block
                        text-[10px]
                        font-semibold
                        tracking-[0.18em]
                        text-[#B79A72]
                      "
                    >
                      {item.number}
                    </span>

                    <p
                      className={`
                        mt-2
                        text-[18px]
                        font-medium
                        tracking-[-0.018em]
                        transition-colors
                        duration-400

                        ${
                          isActive
                            ? "text-[#0B2A52]"
                            : "text-[#0B2A52]/62"
                        }
                      `}
                    >
                      {item.title}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            {/* ===================================================
                DOWN ARROW
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.7,
              }}
              animate={
                boardVisible
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: 0.75,
              }}
              className="
                absolute
                left-1/2
                top-[505px]
                flex
                -translate-x-1/2
                flex-col
                items-center
              "
            >
              <motion.span
                initial={{
                  scaleY: 0,
                }}
                animate={
                  boardVisible
                    ? {
                        scaleY: 1,
                      }
                    : {}
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: 0.74,
                }}
                className="
                  h-14
                  w-px
                  origin-top
                  bg-[#B79A72]
                "
              />

              <motion.span
                animate={
                  !reduceMotion &&
                  boardVisible
                    ? {
                        y: [0, 4, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: 1.4,
                }}
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
                  size={15}
                  strokeWidth={1.5}
                />
              </motion.span>
            </motion.div>
          </div>

          {/* =====================================================
              MOBILE / TABLET CRITERIA
          ====================================================== */}

          <div className="mt-10 lg:hidden">
            <div className="space-y-3">
              {criteria.map((item, index) => {
                const Icon = item.icon;

                const isActive =
                  activeCriterion === index;

                return (
                  <motion.button
                    key={item.title}
                    type="button"
                    initial={{
                      opacity: 0,
                      x:
                        index % 2 === 0
                          ? -40
                          : 40,
                      y: 15,
                    }}
                    animate={
                      boardVisible
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
                        : 0.15 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() =>
                      setActiveCriterion(index)
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      gap-4
                      border
                      px-4
                      py-4
                      text-left
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "border-[#B79A72] bg-[#0B2A52]"
                          : "border-[#0B2A52]/10 bg-white"
                      }
                    `}
                  >
                    <motion.span
                      initial={{
                        scale: 0,
                      }}
                      animate={
                        boardVisible
                          ? {
                              scale: 1,
                            }
                          : {}
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        delay: reduceMotion
                          ? 0
                          : 0.22 + index * 0.08,
                      }}
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border

                        ${
                          isActive
                            ? "border-white/15 text-[#B79A72]"
                            : "border-[#0B2A52]/12 text-[#0B2A52]"
                        }
                      `}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                      />
                    </motion.span>

                    <div>
                      <span
                        className="
                          text-[9px]
                          font-semibold
                          tracking-[0.17em]
                          text-[#B79A72]
                        "
                      >
                        {item.number}
                      </span>

                      <p
                        className={`
                          mt-1
                          text-[16px]
                          font-medium

                          ${
                            isActive
                              ? "text-white"
                              : "text-[#0B2A52]"
                          }
                        `}
                      >
                        {item.title}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            PLATFORM RESULT
        ======================================================== */}

        <motion.div
          ref={resultRef}
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.98,
          }}
          animate={
            resultVisible
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
            mx-auto
            mt-10
            max-w-[900px]
            lg:-mt-5
          "
        >
          {/* RESULT HEADING */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              resultVisible
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.08,
            }}
            className="text-center"
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#B79A72]
              "
            >
              Recommended Platform Mix
            </p>

            <p
              className="
                mt-3
                text-[22px]
                font-medium
                tracking-[-0.03em]
                text-[#0B2A52]
                sm:text-[26px]
              "
            >
              Not everywhere. Where it makes sense.
            </p>
          </motion.div>

          {/* =====================================================
              PLATFORMS
          ====================================================== */}

          <div
            className="
              mt-9
              grid
              grid-cols-2
              gap-4
              sm:grid-cols-4
            "
          >
            {platforms.map((platform, index) => {
              const isMatched =
                activePlatforms.includes(index);

              return (
                <motion.div
                  key={platform.name}
                  initial={{
                    opacity: 0,
                    y: 55,
                    scale: 0.82,
                  }}
                  animate={
                    resultVisible
                      ? {
                          opacity: 1,
                          y: isMatched ? -6 : 0,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion
                      ? 0
                      : 0.16 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-center"
                >
                  <motion.div
                    animate={
                      resultVisible
                        ? {
                            scale: isMatched
                              ? 1.07
                              : 1,
                            borderColor: isMatched
                              ? "#B79A72"
                              : "rgba(11,42,82,0.14)",
                            backgroundColor: isMatched
                              ? "#0B2A52"
                              : "#FFFFFF",
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.35,
                    }}
                    className="
                      relative
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      sm:h-24
                      sm:w-24
                    "
                  >
                    <span
                      className={`
                        text-[14px]
                        font-semibold
                        tracking-[0.08em]
                        transition-colors
                        duration-300

                        ${
                          isMatched
                            ? "text-white"
                            : "text-[#0B2A52]"
                        }
                      `}
                    >
                      {platform.mark}
                    </span>

                    {isMatched &&
                      resultVisible && (
                        <motion.span
                          initial={{
                            opacity: 0,
                            scale: 0,
                            rotate: -45,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                          }}
                          transition={{
                            delay:
                              0.35 +
                              index * 0.08,
                            type: reduceMotion
                              ? undefined
                              : "spring",
                          }}
                          className="
                            absolute
                            -right-1
                            -top-1
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            bg-[#B79A72]
                            text-white
                          "
                        >
                          <Check
                            size={12}
                            strokeWidth={1.8}
                          />
                        </motion.span>
                      )}
                  </motion.div>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={
                      resultVisible
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: reduceMotion
                        ? 0
                        : 0.55,
                      delay: reduceMotion
                        ? 0
                        : 0.3 + index * 0.08,
                    }}
                    className={`
                      mt-4
                      text-[15px]
                      font-medium
                      transition-colors
                      duration-300
                      sm:text-[16px]

                      ${
                        isMatched
                          ? "text-[#0B2A52]"
                          : "text-[#0B2A52]/48"
                      }
                    `}
                  >
                    {platform.name}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>

          {/* ACTIVE FACTOR */}

          <motion.p
            key={activeCriterion}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={
              resultVisible
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.45,
            }}
            className="
              mt-8
              text-center
              text-[13px]
              font-medium
              text-[#0B2A52]/45
              sm:text-[14px]
            "
          >
            Platform fit changes according to your{" "}
            <span className="text-[#B79A72]">
              {criteria[
                activeCriterion
              ].title.toLowerCase()}
            </span>
            .
          </motion.p>
        </motion.div>

        {/* =======================================================
            FINAL PLATFORM COPY
        ======================================================== */}

        <motion.div
          ref={copyRef}
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.98,
          }}
          animate={
            copyVisible
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[980px]
            border-y
            border-[#0B2A52]/10
            py-9
            text-center
            sm:mt-20
          "
        >
          <motion.p
            initial={{
              opacity: 0,
              x: -55,
            }}
            animate={
              copyVisible
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.08,
            }}
            className="
              mx-auto
              max-w-[800px]
              text-[14px]
              leading-7
              text-[#0B2A52]/58
              sm:text-[15px]
            "
          >
            Depending on your requirements, your strategy may include
            platforms such as Instagram, Facebook, LinkedIn and other
            relevant social networks.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              x: 55,
            }}
            animate={
              copyVisible
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.16,
            }}
            className="
              mx-auto
              mt-4
              max-w-[760px]
              text-[15px]
              font-medium
              leading-7
              text-[#0B2A52]
              sm:text-[16px]
            "
          >
            Your recommended platform mix is discussed during the strategy
            and planning process.
          </motion.p>

          <motion.span
            initial={{
              scaleX: 0,
            }}
            animate={
              copyVisible
                ? {
                    scaleX: 1,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: 0.28,
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