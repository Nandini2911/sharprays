"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Package,
  Play,
  RefreshCw,
  Scissors,
  Settings,
  Sparkles,
  Type,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
  border: string;
  iconBg: string;
};

const topServices: ServiceItem[] = [
  {
    number: "01",
    title: "AI Video Creation",
    description:
      "Turn ideas into visuals without starting from a blank screen.",
    icon: Sparkles,
    accent: "#4D91DF",
    soft: "#F5FAFF",
    border: "#BFD9F7",
    iconBg: "#DDEEFF",
  },
  {
    number: "02",
    title: "Professional Video Editing",
    description: "Turn raw material into something worth watching.",
    icon: Scissors,
    accent: "#B97B35",
    soft: "#FFF9F2",
    border: "#E8D5BA",
    iconBg: "#F8E7D1",
  },
  {
    number: "03",
    title: "Short-Form Video Editing",
    description: "Make every second work harder.",
    icon: Play,
    accent: "#7453D8",
    soft: "#F9F6FF",
    border: "#D8CDF5",
    iconBg: "#E9E0FF",
  },
  {
    number: "04",
    title: "Social Media Video Editing",
    description: "Create content that feels native to the feed.",
    icon: Users,
    accent: "#149A88",
    soft: "#F3FCFA",
    border: "#C2E8E2",
    iconBg: "#D6F4EF",
  },
  {
    number: "05",
    title: "Advertising & Performance Video",
    description: "Creative designed to be tested.",
    icon: BarChart3,
    accent: "#D25057",
    soft: "#FFF6F7",
    border: "#F2CDCF",
    iconBg: "#FADFE1",
  },
];

const bottomServices: ServiceItem[] = [
  {
    number: "06",
    title: "AI Product & Concept Videos",
    description: "Show the idea before traditional production exists.",
    icon: Package,
    accent: "#4D91DF",
    soft: "#F5FAFF",
    border: "#BFD9F7",
    iconBg: "#DDEEFF",
  },
  {
    number: "07",
    title: "Motion Graphics & Visual Effects",
    description: "Give information movement.",
    icon: Sparkles,
    accent: "#B97B35",
    soft: "#FFF9F2",
    border: "#E8D5BA",
    iconBg: "#F8E7D1",
  },
  {
    number: "08",
    title: "Video Repurposing",
    description: "One recording. Multiple opportunities.",
    icon: RefreshCw,
    accent: "#7453D8",
    soft: "#F9F6FF",
    border: "#D8CDF5",
    iconBg: "#E9E0FF",
  },
  {
    number: "09",
    title: "Captions, Subtitles & Text Treatment",
    description: "Make the message work with or without sound.",
    icon: Type,
    accent: "#149A88",
    soft: "#F3FCFA",
    border: "#C2E8E2",
    iconBg: "#D6F4EF",
  },
  {
    number: "10",
    title: "AI-Assisted Enhancement",
    description: "Improve the material you already have.",
    icon: Settings,
    accent: "#D25057",
    soft: "#FFF6F7",
    border: "#F2CDCF",
    iconBg: "#FADFE1",
  },
];

function ServiceCard({
  item,
  index,
  reduceMotion,
}: {
  item: ServiceItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 30,
              scale: 0.98,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.06,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
            }
      }
      style={{
        backgroundColor: item.soft,
        borderColor: item.border,
      }}
      className="
        group
        relative
        flex
        min-h-[285px]
        flex-col
        overflow-hidden
        rounded-[72px_72px_58px_58px]
        border
        px-5
        pb-5
        pt-6
        text-center
        shadow-[0_16px_45px_rgba(11,42,82,0.035)]
        transition-shadow
        duration-300

        hover:shadow-[0_24px_55px_rgba(11,42,82,0.075)]

        sm:min-h-[300px]
        sm:px-6

        lg:min-h-[310px]
      "
    >
      {/* NUMBER */}

      <span
        style={{
          ...newYorkFont,
          color: item.accent,
        }}
        className="
          absolute
          left-4
          top-5

          text-[1.4rem]
          font-light
          leading-none

          sm:left-5
          sm:text-[1.55rem]
        "
      >
        {item.number}
      </span>

      {/* ICON */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -4, 0],
              }
        }
        transition={{
          duration: 3.6 + index * 0.15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundColor: item.iconBg,
          color: "#0B2A52",
        }}
        className="
          mx-auto
          flex
          h-[62px]
          w-[62px]
          items-center
          justify-center
          rounded-full

          sm:h-[68px]
          sm:w-[68px]
        "
      >
        <Icon size={25} strokeWidth={1.55} />
      </motion.div>

      {/* TITLE */}

      <h3
        style={newYorkFont}
        className="
          mx-auto
          mt-5
          max-w-[220px]

          text-[1.15rem]
          font-medium
          leading-[1.04]
          tracking-[-0.035em]

          text-[#0B2A52]

          sm:text-[1.28rem]
        "
      >
        {item.title}
      </h3>

      {/* DESCRIPTION */}

      <p
        style={newYorkFont}
        className="
          mx-auto
          mt-4
          max-w-[220px]

          text-[0.74rem]
          leading-[1.5]

          text-[#48637C]

          sm:text-[0.78rem]
        "
      >
        {item.description}
      </p>

      {/* ARROW */}

      <motion.span
        whileHover={
          reduceMotion
            ? undefined
            : {
                x: 3,
              }
        }
        style={{
          backgroundColor: item.iconBg,
          color: "#0B2A52",
        }}
        className="
          mx-auto
          mt-auto

          flex
          h-9
          w-9
          items-center
          justify-center

          rounded-full

          transition-transform
          duration-300
        "
      >
        <ArrowRight size={14} strokeWidth={1.8} />
      </motion.span>

      {/* SUBTLE INNER GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-8
          top-0

          h-24

          rounded-full

          bg-white/60

          blur-[35px]
        "
      />
    </motion.article>
  );
}

export default function AiVideoEditingServices() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-editing-services"
      aria-labelledby="ai-video-editing-services-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white

        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* TOP LEFT */}

        <div
          className="
            absolute
            -left-[210px]
            -top-[230px]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#EAF4FD]

            blur-[10px]
          "
        />

        {/* TOP RIGHT */}

        <div
          className="
            absolute
            -right-[260px]
            -top-[170px]

            h-[530px]
            w-[530px]

            rounded-full

            border
            border-[#C9DFF4]

            bg-[#F2F8FD]/70
          "
        />

        {/* BOTTOM LEFT */}

        <div
          className="
            absolute
            -bottom-[260px]
            -left-[220px]

            h-[600px]
            w-[600px]

            rounded-full

            bg-[#E9F4FC]
          "
        />

        {/* BOTTOM RIGHT */}

        <div
          className="
            absolute
            -bottom-[260px]
            -right-[260px]

            h-[620px]
            w-[620px]

            rounded-full

            bg-[#EDF6FD]
          "
        />
      </div>

      {/* =====================================================
          SIDE MICROCOPY
      ===================================================== */}

      <div
        className="
          absolute
          left-[3.8%]
          top-[6%]
          hidden
          xl:block
        "
      >
        <span className="block h-px w-10 bg-[#B79A72]" />

        <p
          style={newYorkFont}
          className="
            mt-4

            text-[8px]
            uppercase
            leading-[2]
            tracking-[0.27em]

            text-[#284A69]
          "
        >
          Ideas
          <br />
          Visuals
          <br />
          Stories
          <br />
          Real Impact
        </p>

        <span className="mt-4 block h-px w-7 bg-[#B79A72]" />
      </div>

      <div
        className="
          absolute
          right-[4.4%]
          top-[4.8%]
          hidden
          xl:block
        "
      >
        <p
          style={newYorkFont}
          className="
            text-[8px]
            uppercase
            leading-[2]
            tracking-[0.27em]

            text-[#284A69]
          "
        >
          AI
          <br />
          Meets
          <br />
          Creativity
          <br />
          For A Brighter
          <br />
          Tomorrow
        </p>

        <span className="mt-4 block h-px w-10 bg-[#B79A72]" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1500px]

          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
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
            ease,
          }}
          className="
            mx-auto
            max-w-[1050px]
            text-center
          "
        >
          {/* EYEBROW */}

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
              style={newYorkFont}
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.32em]

                text-[#0B2A52]

                sm:text-[10px]
              "
            >
              Our Services
            </span>

            <span className="h-px w-10 bg-[#B79A72]" />
          </div>

          {/* HEADING */}

          <h2
            id="ai-video-editing-services-heading"
            style={newYorkFont}
            className="
              mt-5

              text-[2.1rem]
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
            From Prompt to{" "}
            <span className="text-[#B18458]">
              Publish.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-4
              max-w-[760px]

              text-[14px]
              leading-[1.65]

              text-[#425E79]

              sm:text-[15px]
              md:text-[16px]
            "
          >
            We combine generative tools, traditional editing and creative
            direction based on what the project actually needs.
          </p>
        </motion.div>

        {/* =====================================================
            TOP SERVICES
        ===================================================== */}

        <div
          className="
            relative
            mt-12

            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2
            md:gap-6

            lg:grid-cols-5
            lg:gap-5

            xl:gap-6
          "
        >
          {topServices.map((item, index) => (
            <ServiceCard
              key={item.number}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            TOP WAVE
        ===================================================== */}

        <div
          className="
            relative
            z-20

            -mt-7
            hidden
            h-[90px]

            lg:block
          "
        >
          <svg
            viewBox="0 0 1400 100"
            preserveAspectRatio="none"
            className="h-full w-full"
            fill="none"
          >
            <motion.path
              d="
                M0 60
                C80 20 145 18 220 58
                C300 100 365 95 440 55
                C520 15 590 15 665 55
                C745 95 815 92 890 52
                C970 15 1040 20 1115 60
                C1190 100 1270 98 1400 55
              "
              stroke="#B79A72"
              strokeOpacity="0.6"
              strokeWidth="1.2"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.4,
                ease,
              }}
            />

            <motion.path
              d="
                M0 66
                C90 25 150 25 225 65
                C305 107 375 101 450 61
                C530 23 600 22 675 62
                C750 102 825 100 900 60
                C985 21 1055 25 1130 65
                C1205 105 1280 103 1400 62
              "
              stroke="#4D91DF"
              strokeOpacity="0.34"
              strokeWidth="1.1"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.6,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
            />

            {[
              [80, 40, "#0B2A52"],
              [380, 78, "#B97B35"],
              [650, 38, "#7453D8"],
              [890, 43, "#149A88"],
              [1190, 78, "#D25057"],
            ].map(([cx, cy, fill], index) => (
              <motion.circle
                key={index}
                cx={Number(cx)}
                cy={Number(cy)}
                r="4"
                fill={String(fill)}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: reduceMotion ? 0 : 0.35 + index * 0.08,
                }}
              />
            ))}
          </svg>
        </div>

        {/* =====================================================
            CENTER CREATIVE MESSAGE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            relative
            z-10

            mx-auto
            -mt-3
            max-w-[830px]

            overflow-hidden

            px-5
            py-9

            text-center

            sm:py-11
            lg:-mt-8
          "
        >
          {/* BIG SOFT SHAPE */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              -z-10

              h-[330px]
              w-[750px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-[50%]

              bg-[radial-gradient(circle_at_center,#EAF4FD_0%,#F5FAFE_45%,transparent_72%)]
            "
          />

          <p
            style={newYorkFont}
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.31em]

              text-[#0B2A52]

              sm:text-[9px]
            "
          >
            AI Video & Editing Services
          </p>

          <h3
            style={newYorkFont}
            className="
              mt-4

              text-[2rem]
              font-light
              leading-[1.04]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.5rem]
              md:text-[2.9rem]
              lg:text-[3.2rem]
            "
          >
            Create What&apos;s{" "}
            <span className="text-[#B18458]">
              Next.
            </span>
          </h3>

          <div
            className="
              mx-auto
              mt-5

              flex
              max-w-[580px]
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-9 bg-[#B79A72]" />

            <p
              style={newYorkFont}
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.3em]

                text-[#355675]

                sm:text-[8px]
              "
            >
              Idea · Create · Edit · Publish · Grow
            </p>

            <span className="h-px w-9 bg-[#B79A72]" />
          </div>
        </motion.div>

        {/* =====================================================
            DECORATIVE HANDWRITTEN COPY
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -20,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            absolute
            left-[2.7%]
            top-[48%]

            hidden

            -rotate-[8deg]

            xl:block
          "
        >
          <p
            className="
              text-[1.7rem]
              italic
              leading-[0.92]

              text-[#3F70B0]
            "
            style={{
              fontFamily:
                "'Brush Script MT', 'Segoe Script', cursive",
            }}
          >
            Ideas
            <br />
            Into
            <br />
            Impact
          </p>

          <span
            className="
              mt-4
              block
              h-px
              w-20
              rotate-[-12deg]
              bg-[#B79A72]
            "
          />
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 20,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            absolute
            right-[1.8%]
            top-[48%]

            hidden

            rotate-[8deg]

            xl:block
          "
        >
          <p
            className="
              text-right
              text-[1.55rem]
              italic
              leading-[0.92]

              text-[#3F70B0]
            "
            style={{
              fontFamily:
                "'Brush Script MT', 'Segoe Script', cursive",
            }}
          >
            Same
            <br />
            Content
            <br />
            More
            <br />
            Possibilities
          </p>

          <span
            className="
              ml-auto
              mt-4
              block
              h-px
              w-20
              rotate-[10deg]
              bg-[#B79A72]
            "
          />
        </motion.div>

        {/* =====================================================
            BOTTOM WAVE
        ===================================================== */}

        <div
          className="
            relative
            z-20

            -mb-7
            hidden
            h-[88px]

            lg:block
          "
        >
          <svg
            viewBox="0 0 1400 100"
            preserveAspectRatio="none"
            className="h-full w-full"
            fill="none"
          >
            <motion.path
              d="
                M0 48
                C80 15 150 20 225 58
                C305 100 375 96 450 54
                C530 16 600 20 675 59
                C750 98 825 98 900 56
                C980 18 1055 20 1130 58
                C1210 100 1290 94 1400 50
              "
              stroke="#4D91DF"
              strokeOpacity="0.45"
              strokeWidth="1.1"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.5,
                ease,
              }}
            />

            <motion.path
              d="
                M0 55
                C85 24 150 28 225 65
                C305 106 375 102 450 61
                C530 23 600 25 675 66
                C750 104 825 104 900 62
                C980 24 1055 27 1130 65
                C1210 107 1290 102 1400 57
              "
              stroke="#B79A72"
              strokeOpacity="0.42"
              strokeWidth="1"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.7,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
            />

            {[
              [90, 29, "#0B2A52"],
              [380, 81, "#B97B35"],
              [650, 38, "#7453D8"],
              [900, 39, "#149A88"],
              [1200, 78, "#D25057"],
            ].map(([cx, cy, fill], index) => (
              <motion.circle
                key={index}
                cx={Number(cx)}
                cy={Number(cy)}
                r="4"
                fill={String(fill)}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: reduceMotion ? 0 : 0.3 + index * 0.08,
                }}
              />
            ))}
          </svg>
        </div>

        {/* =====================================================
            BOTTOM SERVICES
        ===================================================== */}

        <div
          className="
            relative

            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2
            md:gap-6

            lg:grid-cols-5
            lg:gap-5

            xl:gap-6
          "
        >
          {bottomServices.map((item, index) => (
            <ServiceCard
              key={item.number}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative
            mt-8

            overflow-hidden

            rounded-[24px]

            bg-[#0B2A52]

            px-6
            py-6

            shadow-[0_24px_70px_rgba(11,42,82,0.17)]

            sm:px-8
            lg:px-10
          "
        >
          {/* CTA BACKGROUND DETAILS */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[130px]
              -bottom-[160px]

              h-[310px]
              w-[430px]

              rotate-[18deg]

              rounded-[45%]

              bg-[#265586]/55
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[110px]
              -top-[160px]

              h-[320px]
              w-[390px]

              rounded-[45%]

              bg-[#1D4673]/70
            "
          />

          <div
            className="
              relative
              z-10

              grid
              gap-6

              lg:grid-cols-[230px_1fr_auto_110px]
              lg:items-center
            "
          >
            {/* LEFT */}

            <div
              className="
                hidden
                border-r
                border-white/25

                pr-8

                lg:block
              "
            >
              <p
                style={newYorkFont}
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  leading-[2]
                  tracking-[0.28em]

                  text-white/70
                "
              >
                Better Videos
                <br />
                Stronger Brands
                <br />
                Real Results
              </p>
            </div>

            {/* CENTER */}

            <div className="lg:text-center">
              <h3
                style={newYorkFont}
                className="
                  text-[1.55rem]
                  font-light
                  leading-[1.1]
                  tracking-[-0.035em]

                  text-white

                  sm:text-[1.85rem]
                  md:text-[2rem]
                "
              >
                Let&apos;s Create Something Remarkable.
              </h3>

              <span
                className="
                  mx-auto
                  mt-4
                  hidden
                  h-px
                  w-14
                  bg-[#D5A765]

                  lg:block
                "
              />
            </div>

            {/* BUTTON */}

            <a
              href="/contact"
              style={newYorkFont}
              className="
                group

                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-5

                rounded-full

                bg-[linear-gradient(110deg,#F4D09B,#D9A75E)]

                px-7
                py-3

                text-[0.78rem]
                font-medium

                text-[#0B2A52]

                shadow-[0_12px_30px_rgba(0,0,0,0.14)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_17px_38px_rgba(0,0,0,0.18)]
              "
            >
              Start Your Project

              <ArrowRight
                size={14}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </a>

            {/* RIGHT */}

            <div
              className="
                hidden
                border-l
                border-white/25

                pl-8

                lg:block
              "
            >
              <p
                style={newYorkFont}
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  leading-[1.9]
                  tracking-[0.25em]

                  text-white/65
                "
              >
                Plan
                <br />
                Produce
                <br />
                Publish
                <br />
                Grow
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}