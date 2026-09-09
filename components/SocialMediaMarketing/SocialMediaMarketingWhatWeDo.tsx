"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  Compass,
  MessageCircle,
  PenTool,
  Send,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

type Service = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  includeLabel: string;
  items: string[];
  footer?: string;
  icon: ElementType;

  color: string;
  soft: string;
  lighter: string;
  dark: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Social Media Strategy",
    shortTitle: "Strategy",
    description:
      "We establish the direction behind your social media presence before deciding what needs to be posted.",
    includeLabel: "This can include:",
    items: [
      "Audience priorities",
      "Platform selection",
      "Brand positioning",
      "Social media objectives",
      "Brand voice",
      "Content pillars",
      "Creative direction",
    ],
    icon: Compass,

    color: "#6386D8",
    soft: "#DDE7FF",
    lighter: "#F2F6FF",
    dark: "#263E78",
  },

  {
    number: "02",
    title: "Content Strategy & Planning",
    shortTitle: "Planning",
    description:
      "We turn your social media strategy into a structured content system.",
    includeLabel: "Your plan can include:",
    items: [
      "Content themes",
      "Publishing priorities",
      "Content formats",
      "Campaign ideas",
      "Content calendars",
      "Approval schedules",
    ],
    icon: CalendarDays,

    color: "#8B74CB",
    soft: "#E8E1FA",
    lighter: "#F7F4FD",
    dark: "#4D397F",
  },

  {
    number: "03",
    title: "Social Media Content Creation",
    shortTitle: "Creation",
    description:
      "We create content designed around your brand, audience and agreed strategy.",
    includeLabel: "Depending on your scope, content may include:",
    items: [
      "Social media graphics",
      "Carousels",
      "Captions and social copy",
      "Stories",
      "Short-form video concepts",
      "Reels and video content",
      "Campaign creatives",
    ],
    icon: PenTool,

    color: "#D98170",
    soft: "#F8DED8",
    lighter: "#FFF5F2",
    dark: "#854437",
  },

  {
    number: "04",
    title: "Publishing & Social Media Management",
    shortTitle: "Management",
    description:
      "We help keep your selected social media channels consistent and organized.",
    includeLabel: "This can include:",
    items: [
      "Content scheduling",
      "Publishing",
      "Platform management",
      "Profile coordination",
      "Publishing quality checks",
    ],
    icon: Send,

    color: "#55A99D",
    soft: "#D9F0EC",
    lighter: "#F1FAF8",
    dark: "#286C63",
  },

  {
    number: "05",
    title: "Community Management",
    shortTitle: "Community",
    description:
      "Social media should create conversation, not simply broadcast information.",
    includeLabel:
      "Where included in your scope, community management can cover:",
    items: [
      "Comment responses",
      "Direct message handling",
      "Audience interaction",
      "Basic community monitoring",
      "Escalation of important enquiries",
    ],
    icon: MessageCircle,

    color: "#CF7595",
    soft: "#F4DDE6",
    lighter: "#FFF5F8",
    dark: "#7B3D55",
  },

  {
    number: "06",
    title: "Social Media Reporting & Optimization",
    shortTitle: "Reporting",
    description:
      "Performance data helps us understand what your audience is responding to and what should happen next.",
    includeLabel: "Reporting may cover relevant metrics such as:",
    items: [
      "Reach",
      "Engagement",
      "Profile activity",
      "Audience growth",
      "Content performance",
      "Website activity",
      "Enquiries or conversions where measurable",
    ],
    footer:
      "We use those insights to identify patterns, improve content decisions and refine future activity.",
    icon: BarChart3,

    color: "#C79A4B",
    soft: "#F4E8CC",
    lighter: "#FFF9EC",
    dark: "#76571F",
  },
];

export default function SocialMediaMarketingServices() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isVisible = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);

  const active = services[activeIndex];
  const ActiveIcon = active.icon;

  /* ============================================================
      AUTO CHANGE
  ============================================================ */

  useEffect(() => {
    if (!isVisible || reduceMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === services.length - 1 ? 0 : current + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, [isVisible, reduceMotion]);

  const dynamicStyles = {
    "--active-color": active.color,
    "--active-soft": active.soft,
    "--active-light": active.lighter,
    "--active-dark": active.dark,
  } as CSSProperties;

  return (
    <section
      ref={sectionRef}
      id="social-media-marketing-services"
      style={dynamicStyles}
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
          DYNAMIC BACKGROUND
      ========================================================== */}

      <motion.div
        animate={{
          background: `radial-gradient(
            circle at 50% 55%,
            ${active.soft} 0%,
            rgba(255,255,255,0) 56%
          )`,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60
        "
      />

      {/* LARGE BACKGROUND WORD */}

      <AnimatePresence mode="wait">
        <motion.div
          key={active.shortTitle}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 0.035,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[36%]
            -translate-x-1/2
            whitespace-nowrap
            text-[115px]
            font-semibold
            uppercase
            tracking-[-0.07em]
            text-[#0B2A52]
            sm:text-[180px]
            lg:text-[260px]
          "
        >
          {active.shortTitle}
        </motion.div>
      </AnimatePresence>

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =======================================================
            HEADER
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
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[900px]
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
            <motion.span
              animate={{
                backgroundColor: active.color,
              }}
              transition={{
                duration: 0.5,
              }}
              className="h-px w-9"
            />

            <motion.span
              animate={{
                color: active.color,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.27em]
                sm:text-[10px]
              "
            >
              Our Social Media Marketing Services
            </motion.span>

            <motion.span
              animate={{
                backgroundColor: active.color,
              }}
              transition={{
                duration: 0.5,
              }}
              className="h-px w-9"
            />
          </div>

          <h2
            className="
              mt-6
              text-[2.2rem]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              sm:text-[2.7rem]
              md:text-[3.1rem]
              lg:text-[3.5rem]
            "
          >
            Everything Your Social Presence Needs.{" "}
            <motion.span
              animate={{
                color: active.color,
              }}
              transition={{
                duration: 0.5,
              }}
              className="font-normal"
            >
              Connected.
            </motion.span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[720px]
              text-[13px]
              leading-7
              text-[#0B2A52]/50
              sm:text-[14px]
            "
          >
            Our social media management services can cover strategy, planning,
            creative execution, publishing, audience engagement and reporting.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-[680px]
              text-[12px]
              leading-6
              text-[#0B2A52]/35
              sm:text-[13px]
            "
          >
            The final scope depends on your business, platforms, objectives and
            content requirements.
          </p>
        </motion.div>

        {/* =======================================================
            SERVICE SELECTOR
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-14
            grid
            grid-cols-2
            gap-2
            sm:grid-cols-3
            lg:mt-20
            lg:grid-cols-6
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const selected = index === activeIndex;

            return (
              <motion.button
                key={service.number}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border
                  px-4
                  py-4
                  text-left
                  transition-all
                  duration-500
                  sm:px-5
                  sm:py-5
                "
                animate={{
                  backgroundColor: selected
                    ? service.color
                    : service.lighter,

                  borderColor: selected
                    ? service.color
                    : `${service.color}30`,

                  boxShadow: selected
                    ? `0 18px 45px ${service.color}28`
                    : "0 10px 30px rgba(11,42,82,0.025)",
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                {/* BACKGROUND GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    opacity-0
                    blur-[25px]
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                  style={{
                    backgroundColor: service.soft,
                  }}
                />

                {/* TOP */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <motion.span
                    animate={{
                      color: selected
                        ? "rgba(255,255,255,.55)"
                        : `${service.dark}80`,
                    }}
                    className="
                      text-[8px]
                      font-semibold
                      tracking-[0.18em]
                    "
                  >
                    {service.number}
                  </motion.span>

                  <motion.span
                    animate={{
                      backgroundColor: selected
                        ? "rgba(255,255,255,.16)"
                        : service.soft,

                      color: selected
                        ? "#ffffff"
                        : service.dark,
                    }}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                    "
                  >
                    <Icon
                      size={13}
                      strokeWidth={1.5}
                    />
                  </motion.span>
                </div>

                {/* TITLE */}

                <motion.p
                  animate={{
                    color: selected
                      ? "#ffffff"
                      : service.dark,
                  }}
                  className="
                    relative
                    z-10
                    mt-5
                    text-[12px]
                    font-medium
                    leading-5
                    sm:text-[13px]
                  "
                >
                  {service.shortTitle}
                </motion.p>

                {/* ACTIVE LINE */}

                <motion.div
                  animate={{
                    width: selected ? "100%" : "20%",
                    backgroundColor: selected
                      ? "rgba(255,255,255,.75)"
                      : service.color,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    relative
                    z-10
                    mt-4
                    h-[2px]
                    rounded-full
                  "
                />
              </motion.button>
            );
          })}
        </motion.div>

        {/* =======================================================
            ACTIVE SERVICE PANEL
        ======================================================== */}

        <motion.div
          animate={{
            backgroundColor: active.lighter,
            borderColor: `${active.color}40`,
            boxShadow: `0 35px 100px ${active.color}18`,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-5
            overflow-hidden
            rounded-[28px]
            border
            sm:rounded-[34px]
            lg:mt-6
          "
        >
          {/* =====================================================
              DECORATION
          ====================================================== */}

          <motion.div
            animate={{
              backgroundColor: active.soft,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              pointer-events-none
              absolute
              -right-[100px]
              -top-[100px]
              h-[340px]
              w-[340px]
              rounded-full
              blur-[75px]
            "
          />

          <motion.div
            animate={{
              borderColor: `${active.color}25`,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              pointer-events-none
              absolute
              -bottom-[180px]
              -left-[160px]
              h-[420px]
              w-[420px]
              rounded-full
              border
            "
          />

          <motion.div
            animate={{
              borderColor: `${active.color}20`,
            }}
            className="
              pointer-events-none
              absolute
              -bottom-[100px]
              -left-[80px]
              h-[260px]
              w-[260px]
              rounded-full
              border
            "
          />

          {/* =====================================================
              CONTENT GRID
          ====================================================== */}

          <div
            className="
              relative
              z-10
              grid
              min-h-[520px]
              lg:grid-cols-[0.72fr_1.28fr]
            "
          >
            {/* ===================================================
                LEFT ACTIVE IDENTITY
            ==================================================== */}

            <div
              className="
                relative
                flex
                flex-col
                justify-between
                border-b
                border-[#0B2A52]/[0.06]
                p-6
                sm:p-8
                lg:border-b-0
                lg:border-r
                lg:p-10
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.number}
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* ICON */}

                  <motion.div
                    animate={{
                      backgroundColor: active.color,
                      boxShadow: `0 15px 40px ${active.color}35`,
                    }}
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-[18px]
                      text-white
                    "
                  >
                    <ActiveIcon
                      size={21}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* NUMBER */}

                  <motion.p
                    animate={{
                      color: active.color,
                    }}
                    className="
                      mt-10
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                    "
                  >
                    Service {active.number}
                  </motion.p>

                  {/* HEADING */}

                  <h3
                    className="
                      mt-4
                      max-w-[410px]
                      text-[2rem]
                      font-medium
                      leading-[1.1]
                      tracking-[-0.045em]
                      text-[#0B2A52]
                      sm:text-[2.35rem]
                      lg:text-[2.55rem]
                    "
                  >
                    {active.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[420px]
                      text-[13px]
                      leading-7
                      text-[#0B2A52]/52
                    "
                  >
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* PROGRESS */}

              <div className="mt-10">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-[#0B2A52]/30
                    "
                  >
                    Connected Service
                  </span>

                  <span
                    className="
                      text-[8px]
                      text-[#0B2A52]/30
                    "
                  >
                    {active.number} / 06
                  </span>
                </div>

                <div
                  className="
                    mt-3
                    h-[3px]
                    overflow-hidden
                    rounded-full
                    bg-[#0B2A52]/[0.06]
                  "
                >
                  <motion.div
                    animate={{
                      width: `${((activeIndex + 1) / services.length) * 100}%`,
                      backgroundColor: active.color,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="
                      h-full
                      rounded-full
                    "
                  />
                </div>
              </div>
            </div>

            {/* ===================================================
                RIGHT CONTENT
            ==================================================== */}

            <div
              className="
                flex
                flex-col
                justify-center
                p-6
                sm:p-8
                lg:p-10
                xl:p-12
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active.number}-content`}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* LABEL */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <motion.span
                      animate={{
                        backgroundColor: active.color,
                      }}
                      className="
                        h-px
                        w-8
                      "
                    />

                    <motion.p
                      animate={{
                        color: active.dark,
                      }}
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                      "
                    >
                      {active.includeLabel}
                    </motion.p>
                  </div>

                  {/* ITEMS */}

                  <div
                    className="
                      mt-6
                      grid
                      gap-3
                      sm:grid-cols-2
                    "
                  >
                    {active.items.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{
                          opacity: 0,
                          y: 16,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.05,
                        }}
                        whileHover={{
                          y: -3,
                        }}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          rounded-[16px]
                          border
                          bg-white/75
                          px-4
                          py-4
                          shadow-[0_10px_30px_rgba(11,42,82,0.03)]
                          backdrop-blur-xl
                          transition-shadow
                          duration-300
                          hover:shadow-[0_18px_40px_rgba(11,42,82,0.07)]
                        "
                        style={{
                          borderColor: `${active.color}28`,
                        }}
                      >
                        <motion.span
                          animate={{
                            backgroundColor: active.soft,
                            color: active.dark,
                          }}
                          className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                          "
                        >
                          <Check
                            size={11}
                            strokeWidth={2}
                          />
                        </motion.span>

                        <span
                          className="
                            text-[11px]
                            leading-5
                            text-[#0B2A52]/62
                            sm:text-[12px]
                          "
                        >
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* REPORTING FOOTER */}

                  {active.footer && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      className="
                        mt-6
                        rounded-[18px]
                        border
                        bg-white/60
                        px-5
                        py-4
                      "
                      style={{
                        borderColor: `${active.color}30`,
                      }}
                    >
                      <p
                        className="
                          text-[12px]
                          leading-6
                          text-[#0B2A52]/55
                        "
                      >
                        {active.footer}
                      </p>
                    </motion.div>
                  )}

                  {/* NEXT */}

                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#0B2A52]/[0.06]
                      pt-6
                    "
                  >
                    <p
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-[#0B2A52]/28
                      "
                    >
                      Everything works together
                    </p>

                    <motion.button
                      type="button"
                      onClick={() =>
                        setActiveIndex((current) =>
                          current === services.length - 1
                            ? 0
                            : current + 1
                        )
                      }
                      animate={{
                        backgroundColor: active.color,
                        boxShadow: `0 10px 30px ${active.color}35`,
                      }}
                      whileHover={{
                        scale: 1.06,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="
                        group
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        text-white
                      "
                    >
                      <ArrowRight
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                        "
                      />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            BOTTOM CONNECTED FLOW
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
            delay: 0.55,
            duration: 0.8,
          }}
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
          "
        >
          {services.map((service, index) => (
            <button
              key={service.number}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                bg-white
                px-3
                py-2
                shadow-[0_8px_25px_rgba(11,42,82,0.025)]
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                borderColor:
                  index === activeIndex
                    ? service.color
                    : `${service.color}22`,
              }}
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                "
                style={{
                  backgroundColor: service.color,
                }}
              />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.13em]
                "
                style={{
                  color:
                    index === activeIndex
                      ? service.dark
                      : "#8290A0",
                }}
              >
                {service.shortTitle}
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}