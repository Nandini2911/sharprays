"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  FileText,
  Globe2,
  LayoutTemplate,
  MousePointerClick,
  Search,
  Share2,
  Sparkles,
  Video,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type Capability = {
  number: string;
  left: string;
  right: string;
  description: string;
  LeftIcon: LucideIcon;
  RightIcon: LucideIcon;
  tone: "blue" | "gold";
};

/* =========================================================
   DATA
========================================================= */

const capabilities: Capability[] = [
  {
    number: "01",
    left: "WEBSITE",
    right: "SEO",
    description:
      "Structure the experience while creating a stronger search foundation.",
    LeftIcon: Globe2,
    RightIcon: Search,
    tone: "blue",
  },
  {
    number: "02",
    left: "WEBSITE",
    right: "CONTENT",
    description: "Make the design and message work together.",
    LeftIcon: Globe2,
    RightIcon: FileText,
    tone: "gold",
  },
  {
    number: "03",
    left: "PERFORMANCE",
    right: "LANDING PAGES",
    description:
      "Connect campaign traffic with a clearer conversion journey.",
    LeftIcon: MousePointerClick,
    RightIcon: LayoutTemplate,
    tone: "blue",
  },
  {
    number: "04",
    left: "SOCIAL",
    right: "VIDEO",
    description:
      "Turn content ideas into visual communication built for digital platforms.",
    LeftIcon: Share2,
    RightIcon: Video,
    tone: "gold",
  },
  {
    number: "05",
    left: "CONTENT",
    right: "SEO",
    description:
      "Connect useful expertise with relevant search demand.",
    LeftIcon: FileText,
    RightIcon: Search,
    tone: "blue",
  },
  {
    number: "06",
    left: "AI VIDEO",
    right: "PERFORMANCE",
    description:
      "Create more flexible creative for testing and digital campaigns.",
    LeftIcon: Sparkles,
    RightIcon: MousePointerClick,
    tone: "gold",
  },
];

/* =========================================================
   SERVICE CHIP
========================================================= */

function ServiceChip({
  label,
  Icon,
  tone,
}: {
  label: string;
  Icon: LucideIcon;
  tone: "blue" | "gold";
}) {
  const blue = tone === "blue";

  return (
    <div
      className={`
        flex
        min-w-0
        items-center
        gap-3

        rounded-full

        border

        px-4
        py-2.5

        ${
          blue
            ? `
              border-[#BBD2E4]
              bg-[#F1F7FB]
              text-[#0B2A52]
            `
            : `
              border-[#DEC9AA]
              bg-[#FBF6EF]
              text-[#9A7145]
            `
        }
      `}
    >
      <span
        className={`
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center

          rounded-full

          ${
            blue
              ? "bg-white text-[#0B2A52]"
              : "bg-white text-[#A0784E]"
          }
        `}
      >
        <Icon size={15} strokeWidth={1.7} />
      </span>

      <span
        className="
          truncate

          text-[0.62rem]
          font-semibold
          uppercase
          tracking-[0.14em]
        "
      >
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   CONNECTION ROW
========================================================= */

function ConnectionRow({
  item,
  index,
  reduceMotion,
}: {
  item: Capability;
  index: number;
  reduceMotion: boolean;
}) {
  const LeftIcon = item.LeftIcon;
  const RightIcon = item.RightIcon;
  const blue = item.tone === "blue";

  const reverse = index % 2 !== 0;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: reverse ? 28 : -28,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.055,
        ease,
      }}
      className="
        group
        relative

        grid
        gap-5

        border-b
        border-[#0B2A52]/[0.075]

        py-7

        last:border-b-0

        lg:grid-cols-[72px_1fr_1.1fr]
        lg:items-center
        lg:gap-8
      "
    >
      {/* NUMBER */}

      <div className="flex items-center gap-3 lg:block">
        <span
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            font-serif
            text-[0.72rem]
            font-semibold

            ${
              blue
                ? `
                  bg-[#0B2A52]
                  text-white
                `
                : `
                  bg-[#B18458]
                  text-white
                `
            }
          `}
        >
          {item.number}
        </span>

        <span
          className="
            text-[0.48rem]
            font-semibold
            uppercase
            tracking-[0.18em]

            text-[#8A9BA9]

            lg:hidden
          "
        >
          Connected disciplines
        </span>
      </div>

      {/* =====================================================
          CONNECTION
      ===================================================== */}

      <div
        className={`
          flex
          min-w-0
          items-center
          gap-2

          ${reverse ? "lg:flex-row-reverse" : ""}
        `}
      >
        <div className="min-w-0 flex-1">
          <ServiceChip
            label={item.left}
            Icon={LeftIcon}
            tone={blue ? "blue" : "gold"}
          />
        </div>

        {/* CENTER CONNECTOR */}

        <div
          className="
            relative

            flex
            shrink-0
            items-center
            justify-center
          "
        >
          <span
            className="
              absolute
              left-1/2
              top-1/2

              h-px
              w-[72px]

              -translate-x-1/2
              -translate-y-1/2

              bg-[#D6E0E7]
            "
          />

          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.08,
                    rotate: 90,
                  }
            }
            transition={{
              duration: 0.28,
            }}
            className="
              relative
              z-10

              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-full

              border
              border-[#D8C4A6]

              bg-white

              font-serif
              text-[1rem]

              text-[#B18458]

              shadow-[0_5px_15px_rgba(11,42,82,0.055)]
            "
          >
            +
          </motion.div>
        </div>

        <div className="min-w-0 flex-1">
          <ServiceChip
            label={item.right}
            Icon={RightIcon}
            tone={blue ? "gold" : "blue"}
          />
        </div>
      </div>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-5
        "
      >
        <p
          className="
            max-w-[470px]

            text-[0.87rem]
            leading-[1.7]

            text-[#5C7083]
          "
        >
          {item.description}
        </p>

        <motion.span
          whileHover={
            reduceMotion
              ? undefined
              : {
                  x: 4,
                }
          }
          className="
            hidden
            h-8
            w-8
            shrink-0
            items-center
            justify-center

            rounded-full

            border
            border-[#DCE4E9]

            text-[#0B2A52]

            transition-colors
            duration-300

            group-hover:border-[#B79A72]
            group-hover:text-[#B18458]

            sm:flex
          "
        >
          <ArrowRight size={13} />
        </motion.span>
      </div>

      {/* HOVER LINE */}

      <motion.span
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
        style={{
          transformOrigin: reverse ? "right" : "left",
        }}
        className={`
          absolute
          bottom-0

          h-[2px]
          w-[34%]

          ${
            reverse
              ? "right-0"
              : "left-0"
          }

          ${
            blue
              ? "bg-[#0B2A52]"
              : "bg-[#B79A72]"
          }
        `}
      />
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function ConnectedCapabilitiesSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="connected-capabilities"
      aria-labelledby="connected-capabilities-heading"
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
            left-1/2
            top-[27%]

            h-[500px]
            w-[1050px]

            -translate-x-1/2

            rounded-full

            bg-[radial-gradient(circle,rgba(85,150,201,0.07)_0%,rgba(85,150,201,0.02)_45%,transparent_72%)]

            blur-[40px]
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            top-[10%]

            h-[420px]
            w-[420px]

            rounded-full

            border
            border-[#D8E5EE]
          "
        />

        <div
          className="
            absolute
            -right-[100px]
            top-[40px]

            h-[260px]
            w-[260px]

            rounded-full

            border-[38px]
            border-[#F3F7FA]
          "
        />

        <div
          className="
            absolute
            -left-[230px]
            bottom-[5%]

            h-[450px]
            w-[450px]

            rounded-full

            bg-[#B79A72]/[0.055]

            blur-[110px]
          "
        />
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
          max-w-[1380px]

          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            HEADING
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
            max-w-[1020px]

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
                w-11

                bg-[linear-gradient(90deg,transparent,#B79A72)]
              "
            />

            <span
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.3em]

                text-[#9B7650]
              "
            >
              Connected Capabilities
            </span>

            <span
              className="
                h-px
                w-11

                bg-[linear-gradient(90deg,#B79A72,transparent)]
              "
            />
          </div>

          <h2
            id="connected-capabilities-heading"
            className="
              mx-auto
              mt-6
              max-w-[980px]

              font-serif
              text-[2.3rem]
              font-medium
              leading-[1.03]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            One Project Can Need More Than{" "}
            <span
              className="
                font-normal
                italic
                text-[#B18458]
              "
            >
              One Discipline.
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-6
              max-w-[770px]

              space-y-1.5

              text-[0.93rem]
              leading-[1.72]

              text-[#5A6E81]

              sm:text-[0.98rem]
            "
          >
            <p>
              A website may need search strategy. An SEO project may expose
              weak content.
            </p>

            <p>
              A paid campaign may need a better landing page. Social media may
              need stronger video.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            CONNECTION STAGE
        ===================================================== */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            relative

            mx-auto
            mt-14
            max-w-[1160px]

            overflow-hidden

            rounded-[26px]

            border
            border-[#DCE5EB]

            bg-[rgba(255,255,255,0.86)]

            px-5
            sm:px-7
            lg:px-9

            shadow-[0_20px_55px_rgba(11,42,82,0.035)]
          "
        >
          {/* TOP ACCENT */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0

              h-[3px]

              bg-[linear-gradient(90deg,#0B2A52_0%,#739DC0_35%,#B79A72_70%,transparent_100%)]
            "
          />

          {/* FAINT WORD */}

          <span
            className="
              pointer-events-none

              absolute
              -right-5
              top-1/2

              -translate-y-1/2

              font-serif
              text-[7rem]
              leading-none
              tracking-[-0.07em]

              text-[#0B2A52]/[0.018]

              sm:text-[9rem]
              lg:text-[11rem]
            "
          >
            CONNECT
          </span>

          <div className="relative z-10">
            {capabilities.map((item, index) => (
              <ConnectionRow
                key={item.number}
                item={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            PRINCIPLE
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
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[1100px]

            border-y
            border-[#DCE4E9]

            py-9
          "
        >
          <div
            className="
              grid
              gap-7

              lg:grid-cols-[0.3fr_1fr]
              lg:items-center
            "
          >
            {/* LEFT */}

            <div>
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
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-full

                    bg-[#0B2A52]

                    text-white
                  "
                >
                  <Sparkles size={15} />
                </span>

                <span
                  className="
                    text-[0.55rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]

                    text-[#9B7650]
                  "
                >
                  The Principle
                </span>
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <p
                className="
                  font-serif
                  text-[1.85rem]
                  leading-[1.15]
                  tracking-[-0.035em]

                  text-[#0B2A52]

                  sm:text-[2.1rem]
                  lg:text-[2.3rem]
                "
              >
                Use the skills{" "}
                <span
                  className="
                    font-normal
                    italic
                    text-[#B18458]
                  "
                >
                  the problem needs.
                </span>
              </p>

              <div
                className="
                  mt-4

                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                  sm:items-center
                "
              >
                <p
                  className="
                    text-[0.9rem]
                    leading-[1.65]

                    text-[#627487]
                  "
                >
                  Not more services than the project needs.
                </p>

                <span
                  className="
                    hidden
                    h-px
                    flex-1

                    bg-[linear-gradient(90deg,#D8E1E7,transparent)]

                    sm:block
                  "
                />

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      text-[0.48rem]
                      font-semibold
                      uppercase
                      tracking-[0.17em]

                      text-[#8DA0B1]
                    "
                  >
                    Problem
                  </span>

                  <ArrowRight
                    size={11}
                    className="text-[#B18458]"
                  />

                  <span
                    className="
                      text-[0.48rem]
                      font-semibold
                      uppercase
                      tracking-[0.17em]

                      text-[#0B2A52]
                    "
                  >
                    Right disciplines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}