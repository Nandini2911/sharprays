"use client";

import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  FileText,
  Globe2,
  Link2,
  MessageSquareText,
  Network,
  ScanText,
  Search,
  Sparkles,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

/* =========================================================
   FONT
========================================================= */

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

/* =========================================================
   ANIMATION
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type FocusItem = {
  number: string;
  title: string;
  icon: LucideIcon;
};

/* =========================================================
   DATA
========================================================= */

const focusItems: FocusItem[] = [
  {
    number: "01",
    title: "Clear business/entity information",
    icon: Building2,
  },
  {
    number: "02",
    title: "Direct answers to useful questions",
    icon: MessageSquareText,
  },
  {
    number: "03",
    title: "Strong topical relationships",
    icon: Network,
  },
  {
    number: "04",
    title: "Original expert-led content",
    icon: BadgeCheck,
  },
  {
    number: "05",
    title: "Logical internal linking",
    icon: Link2,
  },
  {
    number: "06",
    title: "Crawlable text",
    icon: ScanText,
  },
  {
    number: "07",
    title: "Structured business information",
    icon: FileText,
  },
  {
    number: "08",
    title: "Consistent brand information",
    icon: Globe2,
  },
];

/* =========================================================
   MAIN SECTION
========================================================= */

export default function SEOForAISearchSection() {
  const reduceMotion = useReducedMotion();

  const leftItems = focusItems.slice(0, 4);
  const rightItems = focusItems.slice(4);

  return (
    <section
      id="seo-ai-search"
      className="
        relative
        overflow-hidden

        bg-white

        py-20
        text-[#0B2A52]

        sm:py-24
        md:py-28
        lg:py-32
        xl:py-36
      "
    >
     
      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1320px]

          px-5
          sm:px-7
          md:px-8
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 28,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            max-w-[960px]

            text-center
          "
        >
          {/* EYEBROW */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3

              sm:gap-4
            "
          >
            <span
              className="
                h-px
                w-7

                bg-gradient-to-r
                from-transparent
                to-[#C6A77A]

                sm:w-10
              "
            />

            <span
              className="
                text-[9px]
              
                uppercase
                tracking-[0.26em]
                text-[#C6A77A]

                sm:text-[10px]
                sm:tracking-[0.34em]
              "
            >
              Search Is Evolving
            </span>

            <span
              className="
                h-px
                w-7

                bg-gradient-to-l
                from-transparent
                to-[#B79A72]

                sm:w-10
              "
            />
          </div>

          {/* HEADING */}

          <h2
            style={newYorkFont}
            className="
              mx-auto
              mt-6
              max-w-[930px]

              text-[2.6rem]
              font-medium
              leading-[1]
              tracking-[-0.045em]
              text-[#0B2A52]

              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            SEO for Google Search, AI Overviews and{" "}
            <span className="text-[#B79A72]">
              Generative Discovery.
            </span>
          </h2>

          {/* COPY */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[780px]

              text-[13px]
              leading-[1.8]
              text-[#61758D]

              sm:text-[14px]
              md:text-[15px]
            "
          >
            People increasingly discover information through traditional
            results and AI-assisted search experiences.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-[830px]

              text-[13px]
              leading-[1.8]
              text-[#61758D]

              sm:text-[14px]
              md:text-[15px]
            "
          >
            The format is changing, but the foundation remains similar:
            useful information, clear site structure, crawlable content,
            credible evidence and strong topic relationships.
          </p>
        </motion.div>

        {/* =====================================================
            SECTION LABEL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.08,
            ease,
          }}
          className="
            mx-auto
            mt-12

            flex
            max-w-[1160px]

            items-center
            gap-4

            sm:mt-14
            lg:mt-18
          "
        >
          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#C6A77A]

              sm:text-[9px]
            "
          >
            Our Focus
          </span>

          <span
            className="
              h-px
              flex-1

              bg-[#0B2A52]/10
            "
          />

          <span
            className="
              hidden

              text-[8px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#0B2A52]/30

              sm:block
            "
          >
            One SEO Foundation
          </span>
        </motion.div>

        {/* =====================================================
            DESKTOP CONNECTED LAYOUT
        ===================================================== */}

        <div
          className="
            relative

            mx-auto
            mt-8

            hidden
            max-w-[1160px]

            lg:grid
            lg:grid-cols-[1fr_260px_1fr]
            lg:items-center
            lg:gap-8

            xl:grid-cols-[1fr_290px_1fr]
            xl:gap-10
          "
        >
          {/* =================================================
              LEFT FOCUS
          ================================================= */}

          <div className="space-y-2">
            {leftItems.map((item, index) => (
              <FocusRow
                key={item.number}
                item={item}
                index={index}
                side="left"
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              CENTER CORE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.86,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="
              relative

              flex
              items-center
              justify-center
            "
          >
            {/* OUTER ORBIT */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none

                absolute

                h-[270px]
                w-[270px]

                rounded-full

                border
                border-dashed
                border-[#C6A77A]/25

                xl:h-[300px]
                xl:w-[300px]
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-[-4px]

                  h-2
                  w-2

                  -translate-x-1/2

                  rounded-full

                  bg-[#C6A77A]
                "
              />
            </motion.div>

            {/* INNER ORBIT */}

            <div
              className="
                pointer-events-none

                absolute

                h-[225px]
                w-[225px]

                rounded-full

                border
                border-[#0B2A52]/[0.07]

                xl:h-[250px]
                xl:w-[250px]
              "
            />

            {/* CORE */}

            <div
              className="
                relative
                z-10

                flex
                h-[180px]
                w-[180px]

                flex-col
                items-center
                justify-center

                rounded-full

                border
                border-[#D6E2EC]

                bg-white

                p-6

                text-center

                shadow-[0_25px_65px_rgba(11,42,82,0.10)]

                xl:h-[200px]
                xl:w-[200px]
              "
            >
              {/* INNER RING */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  inset-[7px]

                  rounded-full

                  border
                  border-[#C6A77A]/30
                "
              />

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.08, 1],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  bg-[#EDF5FB]

                  text-[#0B2A52]
                "
              >
                <Search
                  size={17}
                  strokeWidth={1.7}
                />
              </motion.div>

              <span
                className="
                  mt-4

                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#C6A77A]
                "
              >
                One Foundation
              </span>

              <p
                style={newYorkFont}
                className="
                  mt-2

                  text-[20px]
                  font-medium
                  leading-[1.05]
                  tracking-[-0.03em]
                  text-[#0B2A52]

                  xl:text-[22px]
                "
              >
                Strong SEO
              </p>

              <p
                className="
                  mt-2

                  max-w-[130px]

                  text-[9px]
                  leading-[1.55]
                  text-[#70859B]
                "
              >
                Useful, clear and discoverable information.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT FOCUS
          ================================================= */}

          <div className="space-y-2">
            {rightItems.map((item, index) => (
              <FocusRow
                key={item.number}
                item={item}
                index={index}
                side="right"
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              CONNECTING LINES
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              left-[40.5%]
              right-[40.5%]
              top-1/2

              -translate-y-1/2
            "
          >
            <div
              className="
                h-px
                w-full

                bg-gradient-to-r
                from-[#0B2A52]/10
                via-[#C6A77A]/55
                to-[#0B2A52]/10
              "
            />
          </div>
        </div>

        {/* =====================================================
            MOBILE + TABLET
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-7
            max-w-[760px]

            lg:hidden
          "
        >
          {/* CORE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              ease,
            }}
            className="
              relative

              mx-auto

              flex
              h-[145px]
              w-[145px]

              flex-col
              items-center
              justify-center

              rounded-full

              border
              border-[#C6A77A]/35

              bg-white

              text-center

              shadow-[0_18px_48px_rgba(11,42,82,0.08)]

              sm:h-[160px]
              sm:w-[160px]
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                inset-[6px]

                rounded-full

                border
                border-[#0B2A52]/[0.07]
              "
            />

            <span
              className="
                flex
                h-9
                w-9

                items-center
                justify-center

                rounded-full

                bg-[#EDF5FB]

                text-[#0B2A52]
              "
            >
              <Search
                size={15}
                strokeWidth={1.7}
              />
            </span>

            <span
              className="
                mt-3

                text-[7px]
                font-semibold
                uppercase
                tracking-[0.19em]
                text-[#C6A77A]
              "
            >
              One Foundation
            </span>

            <p
              style={newYorkFont}
              className="
                mt-1

                text-[17px]
                font-medium
                text-[#0B2A52]
              "
            >
              Strong SEO
            </p>
          </motion.div>

          {/* CONNECTOR */}

          <div
            className="
              mx-auto

              h-9
              w-px

              bg-gradient-to-b
              from-[#C6A77A]
              to-[#0B2A52]/10
            "
          />

          {/* ITEMS */}

          <div
            className="
              grid
              grid-cols-1

              gap-2

              sm:grid-cols-2
              sm:gap-3
            "
          >
            {focusItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 18,
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
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : index * 0.04,
                    ease,
                  }}
                  className="
                    group

                    flex
                    min-h-[74px]

                    items-center
                    gap-3

                    border-b
                    border-[#0B2A52]/10

                    py-4

                    sm:min-h-[88px]
                    sm:px-4
                    sm:py-5
                  "
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0

                      items-center
                      justify-center

                      rounded-[11px]

                      border
                      border-[#D9E4ED]

                      bg-white

                      text-[#0B2A52]

                      shadow-[0_5px_16px_rgba(11,42,82,0.04)]
                    "
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.6}
                    />
                  </span>

                  <div className="min-w-0">
                    <span
                      className="
                        text-[7px]
                        font-semibold
                        tracking-[0.17em]
                        text-[#C6A77A]
                      "
                    >
                      {item.number}
                    </span>

                    <p
                      className="
                        mt-1

                        text-[12.5px]
                        font-medium
                        leading-[1.45]
                        text-[#0B2A52]

                        sm:text-[13px]
                      "
                    >
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            FOUNDATION NOTE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            mt-10
            max-w-[900px]

            text-center

            sm:mt-12
            lg:mt-14
          "
        >
          <p
            className="
              mx-auto
              max-w-[760px]

              text-[13px]
              leading-[1.8]
              text-[#61758D]

              sm:text-[14px]
            "
          >
            We strengthen the underlying website first so its expertise,
            services and information are easier to understand wherever search
            happens.
          </p>

          <div
            className="
              mx-auto
              mt-5

              flex
              max-w-[520px]

              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                flex-1

                bg-gradient-to-r
                from-transparent
                to-[#C6A77A]/50
              "
            />

            <span
              className="
                shrink-0

                text-[7px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#0B2A52]/35

                sm:text-[8px]
              "
            >
              One Website · Multiple Discovery Surfaces
            </span>

            <span
              className="
                h-px
                flex-1

                bg-gradient-to-l
                from-transparent
                to-[#C6A77A]/50
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 28,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative

            mx-auto
            mt-12

            max-w-[1160px]

            overflow-hidden

            rounded-[22px]

            border
            border-[#D5E1EB]

            bg-[linear-gradient(110deg,#EDF6FC_0%,#FFFFFF_52%,#FFF7EB_100%)]

            shadow-[0_18px_55px_rgba(11,42,82,0.06)]

            sm:mt-14
            sm:rounded-[26px]

            lg:mt-16
          "
        >
          {/* DECORATION */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -left-[130px]
              top-1/2

              h-[290px]
              w-[290px]

              -translate-y-1/2

              rounded-full

              border
              border-[#0B2A52]/[0.05]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -right-[110px]
              top-1/2

              h-[280px]
              w-[280px]

              -translate-y-1/2

              rounded-full

              border
              border-[#C6A77A]/15
            "
          />

          {/* CONTENT */}

          <div
            className="
              relative
              z-10

              grid

              gap-6

              px-5
              py-7

              sm:px-7
              sm:py-8

              md:grid-cols-[auto_1fr]
              md:items-center
              md:gap-8
              md:px-9

              lg:px-11
              lg:py-9
            "
          >
            {/* LABEL */}

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
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  bg-[#0B2A52]

                  text-white

                  shadow-[0_8px_24px_rgba(11,42,82,0.15)]
                "
              >
                <Sparkles
                  size={15}
                  strokeWidth={1.6}
                />
              </span>

              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#C6A77A]

                    sm:text-[9px]
                  "
                >
                  The Principle
                </p>

                <p
                  className="
                    mt-1

                    text-[9px]
                    text-[#0B2A52]/38
                  "
                >
                  Source-first SEO
                </p>
              </div>
            </div>

            {/* MESSAGE */}

            <h3
              style={newYorkFont}
              className="
                text-[25px]
                font-medium
                leading-[1.1]
                tracking-[-0.035em]
                text-[#0B2A52]

                sm:text-[28px]

                md:text-right
                md:text-[30px]

                lg:text-[33px]
              "
            >
              Don&apos;t Write for AI.{" "}
              <span className="text-[#C6A77A]">
                Become a Source Worth Using.
              </span>
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP FOCUS ROW
========================================================= */

function FocusRow({
  item,
  index,
  side,
  reduceMotion,
}: {
  item: FocusItem;
  index: number;
  side: "left" | "right";
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  const isLeft = side === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: reduceMotion
          ? 0
          : isLeft
            ? -28
            : 28,
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
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.07,
        ease,
      }}
      className={`
        group
        relative

        flex
        min-h-[82px]

        items-center

        border-b
        border-[#0B2A52]/10

        py-4

        ${isLeft ? "justify-end" : "justify-start"}
      `}
    >
      {/* LEFT SIDE */}

      {isLeft && (
        <>
          <div className="min-w-0 text-right">
            <span
              className="
                text-[7px]
                font-semibold
                tracking-[0.18em]
                text-[#C6A77A]
              "
            >
              {item.number}
            </span>

            <p
              className="
                mt-1

                text-[13px]
                font-medium
                leading-[1.45]
                text-[#0B2A52]

                xl:text-[14px]
              "
            >
              {item.title}
            </p>
          </div>

          <div
            className="
              mx-4

              h-px
              w-8
              shrink-0

              bg-[#0B2A52]/12

              transition-all
              duration-400

              group-hover:w-12
              group-hover:bg-[#C6A77A]
            "
          />

          <span
            className="
              flex
              h-10
              w-10
              shrink-0

              items-center
              justify-center

              rounded-[12px]

              border
              border-[#D8E3EC]

              bg-white

              text-[#0B2A52]/65

              shadow-[0_5px_18px_rgba(11,42,82,0.04)]

              transition-all
              duration-300

              group-hover:border-[#C6A77A]/45
              group-hover:bg-[#FFF9F1]
              group-hover:text-[#C6A77A]
            "
          >
            <Icon
              size={16}
              strokeWidth={1.6}
            />
          </span>
        </>
      )}

      {/* RIGHT SIDE */}

      {!isLeft && (
        <>
          <span
            className="
              flex
              h-10
              w-10
              shrink-0

              items-center
              justify-center

              rounded-[12px]

              border
              border-[#D8E3EC]

              bg-white

              text-[#0B2A52]/65

              shadow-[0_5px_18px_rgba(11,42,82,0.04)]

              transition-all
              duration-300

              group-hover:border-[#C6A77A]/45
              group-hover:bg-[#FFF9F1]
              group-hover:text-[#C6A77A]
            "
          >
            <Icon
              size={16}
              strokeWidth={1.6}
            />
          </span>

          <div
            className="
              mx-4

              h-px
              w-8
              shrink-0

              bg-[#0B2A52]/12

              transition-all
              duration-400

              group-hover:w-12
              group-hover:bg-[#C6A77A]
            "
          />

          <div className="min-w-0">
            <span
              className="
                text-[7px]
                font-semibold
                tracking-[0.18em]
                text-[#C6A77A]
              "
            >
              {item.number}
            </span>

            <p
              className="
                mt-1

                text-[13px]
                font-medium
                leading-[1.45]
                text-[#0B2A52]

                xl:text-[14px]
              "
            >
              {item.title}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
}