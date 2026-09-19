"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Clapperboard,
  Gem,
  Heart,
  Lightbulb,
  Settings,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   DATA
========================================================= */

type FormatItem = {
  number: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  listTitle?: string;
  items?: string[];
  flow?: string[];
  focus: string[];
};

const formats: FormatItem[] = [
  {
    number: "01",
    title: "Product Hero Ad",
    subtitle: "MAKE THE PRODUCT THE STAR",
    icon: Gem,
    description: "Polished, product-focused, visually premium.",
    listTitle: "Best for:",
    items: [
      "Beauty",
      "Skincare",
      "Fashion",
      "Food",
      "Technology",
      "E-commerce",
      "Product Launches",
    ],
    focus: ["PRODUCT", "DETAIL", "DESIRE", "BRAND"],
  },
  {
    number: "02",
    title: "UGC / Influencer-Style Ad",
    subtitle: "MAKE THE MESSAGE FEEL HUMAN",
    icon: Users,
    description: "Conversational, social-first, relatable content.",
    items: [
      "Talking-head storytelling",
      "Product reactions",
      "Testimonials",
      "Demonstrations",
      "Voiceovers",
      "Captions",
    ],
    focus: ["HOOK", "RELATABILITY", "PROOF", "ACTION"],
  },
  {
    number: "03",
    title: "Problem → Solution Ad",
    subtitle: "SHOW THE PROBLEM. MAKE THE SOLUTION CLEAR.",
    icon: Lightbulb,
    description: "A recognized problem leads to a solution and benefit.",
    flow: ["PROBLEM", "TENSION", "SOLUTION", "BENEFIT", "ACTION"],
    focus: ["PAIN", "RELEVANCE", "SOLUTION", "BENEFIT"],
  },
  {
    number: "04",
    title: "Product Demo / Feature Ad",
    subtitle: "DON’T JUST SAY WHAT IT DOES. SHOW IT.",
    icon: Settings,
    description:
      "Demonstration-led explanation of features, benefits, use cases, workflows, comparisons, results.",
    focus: ["SHOW", "EXPLAIN", "PROVE", "ACT"],
  },
  {
    number: "05",
    title: "Cinematic Brand Commercial",
    subtitle: "BUILD A WORLD AROUND THE BRAND.",
    icon: Clapperboard,
    description:
      "Atmospheric, story-driven, emotionally led brand perception piece.",
    items: [
      "Story-driven scenes",
      "Stylized environments",
      "Product moments",
      "Cinematic lighting",
      "Sound design",
      "Visual metaphors",
    ],
    focus: ["MOOD", "STORY", "IDENTITY", "MEMORY"],
  },
  {
    number: "06",
    title: "Transformation / Before–After Ad",
    subtitle: "MAKE THE CHANGE EASY TO SEE.",
    icon: BarChart3,
    description:
      "Show a visible change from starting point to desired result.",
    flow: ["BEFORE", "CHANGE", "AFTER", "PROOF"],
    focus: ["BEFORE", "CHANGE", "AFTER", "PROOF"],
  },
];

const desktopPositions = [
  {
    left: "1.5%",
    top: "334px",
    width: "17.1%",
  },
  {
    left: "18.9%",
    top: "272px",
    width: "16.4%",
  },
  {
    left: "35.5%",
    top: "213px",
    width: "16.1%",
  },
  {
    left: "52.2%",
    top: "163px",
    width: "15.7%",
  },
  {
    left: "68.6%",
    top: "117px",
    width: "15.4%",
  },
  {
    left: "84.1%",
    top: "88px",
    width: "14.9%",
  },
];

/* =========================================================
   SMALL HELPERS
========================================================= */

function FocusRow({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-2"
        >
          <span
            className="
              text-[6px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#456C96]

              2xl:text-[7px]
            "
          >
            {item}
          </span>

          {index < items.length - 1 && (
            <span className="h-[3px] w-[3px] rounded-full bg-[#829FBC]" />
          )}
        </div>
      ))}
    </div>
  );
}

function FlowRow({
  items,
}: {
  items: string[];
}) {
  return (
    <div
      className="
        mt-3
        flex
        flex-wrap
        items-center
        gap-x-1.5
        gap-y-2
      "
    >
      {items.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-1.5"
        >
          <span
            className="
              rounded-full
              bg-[#EDF5FC]
              px-2
              py-[5px]

              text-[5.5px]
              font-semibold
              uppercase
              tracking-[0.04em]
              text-[#315B88]

              2xl:text-[6px]
            "
          >
            {item}
          </span>

          {index < items.length - 1 && (
            <ArrowRight
              size={9}
              strokeWidth={1.4}
              className="text-[#6795C6]"
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   DESKTOP FORMAT
========================================================= */

function DesktopFormat({
  item,
  index,
  reduceMotion,
}: {
  item: FormatItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;
  const position = desktopPositions[index];

  return (
    <motion.article
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
        amount: 0.18,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.68,
        delay: reduceMotion ? 0 : index * 0.07,
        ease,
      }}
      className="absolute z-20"
      style={{
        left: position.left,
        top: position.top,
        width: position.width,
      }}
    >
      {/* =====================================================
          NUMBER / ICON
      ===================================================== */}

      <div className="relative flex h-[84px] items-center">
        <span
          style={newYorkFont}
          className="
            relative
            z-10

            text-[3.6rem]
            font-light
            leading-none
            tracking-[-0.065em]

            text-[#75A1D0]

            2xl:text-[4.2rem]
          "
        >
          {item.number}
        </span>

        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.06,
                  rotate: 4,
                }
          }
          className="
            relative
            z-20

            -ml-[2px]

            flex
            h-[70px]
            w-[70px]
            shrink-0
            items-center
            justify-center

            rounded-full

            border
            border-[#D7B56F]

            bg-white

            shadow-[0_12px_28px_rgba(11,42,82,0.09)]

            2xl:h-[76px]
            2xl:w-[76px]
          "
        >
          <span
            className="
              absolute
              inset-[7px]

              rounded-full

              border
              border-[#D6E4EF]
            "
          />

          <Icon
            size={24}
            strokeWidth={1.4}
            className="
              relative
              z-10
              text-[#0B2A52]
            "
          />
        </motion.div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mt-2

          min-h-[300px]

          border-l
          border-[#D8C8AE]

          pl-5
          pr-2
        "
      >
        <h3
          style={newYorkFont}
          className="
            max-w-[230px]

            text-[1rem]
            font-semibold
            uppercase
            leading-[1.02]
            tracking-[-0.025em]

            text-[#0B2A52]

            2xl:text-[1.08rem]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-3

            text-[6.5px]
            font-semibold
            uppercase
            leading-[1.6]
            tracking-[0.2em]

            text-[#A67A3E]

            2xl:text-[7px]
          "
        >
          {item.subtitle}
        </p>

        <p
          style={newYorkFont}
          className="
            mt-4
            max-w-[220px]

            text-[0.68rem]
            leading-[1.42]

            text-[#3C5872]

            2xl:text-[0.74rem]
          "
        >
          {item.description}
        </p>

        {/* LIST */}

        {item.items && (
          <div className="mt-4">
            {item.listTitle && (
              <>
                <div className="mb-3 h-px w-8 bg-[#C9A86E]" />

                <p
                  style={newYorkFont}
                  className="
                    text-[0.76rem]
                    font-semibold
                    text-[#386B9D]
                  "
                >
                  {item.listTitle}
                </p>
              </>
            )}

            {index === 0 ? (
              <p
                style={newYorkFont}
                className="
                  mt-1
                  max-w-[215px]

                  text-[0.64rem]
                  leading-[1.4]

                  text-[#3D5D78]

                  2xl:text-[0.68rem]
                "
              >
                {item.items.join(", ")}
              </p>
            ) : (
              <ul className="mt-2 space-y-[1px]">
                {item.items.map((listItem) => (
                  <li
                    key={listItem}
                    className="
                      flex
                      items-start
                      gap-2
                    "
                  >
                    <span
                      className="
                        mt-[5px]

                        h-[4px]
                        w-[4px]

                        shrink-0

                        rounded-full

                        bg-[#0B2A52]
                      "
                    />

                    <span
                      style={newYorkFont}
                      className="
                        text-[0.63rem]
                        leading-[1.28]

                        text-[#3B5B76]

                        2xl:text-[0.67rem]
                      "
                    >
                      {listItem}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* FLOW */}

        {item.flow && (
          <div className="mt-4">
            <div className="h-px w-8 bg-[#C9A86E]" />
            <FlowRow items={item.flow} />
          </div>
        )}

        {/* FOCUS */}

        <div className="mt-5">
          <p
            style={newYorkFont}
            className="
              text-[0.76rem]
              font-semibold
              text-[#3C70A5]
            "
          >
            Creative focus:
          </p>

          <FocusRow items={item.focus} />
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MOBILE FORMAT
========================================================= */

function MobileFormat({
  item,
  index,
  reduceMotion,
}: {
  item: FormatItem;
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
              y: 24,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : index * 0.04,
        ease,
      }}
      className="
        relative

        grid
        grid-cols-[64px_1fr]
        gap-5
      "
    >
      <div
        className="
          relative
          flex
          justify-center
        "
      >
        {index < formats.length - 1 && (
          <span
            className="
              absolute
              bottom-[-40px]
              top-[64px]

              w-px

              bg-[#B8D6F0]
            "
          />
        )}

        <div
          className="
            relative
            z-10

            flex
            h-[60px]
            w-[60px]
            items-center
            justify-center

            rounded-full

            border
            border-[#D6B46F]

            bg-white

            text-[#0B2A52]

            shadow-[0_10px_28px_rgba(11,42,82,0.08)]
          "
        >
          <Icon size={20} strokeWidth={1.45} />
        </div>
      </div>

      <div
        className="
          border-b
          border-[#0B2A52]/10
          pb-10
        "
      >
        <span
          style={newYorkFont}
          className="
            text-[2.5rem]
            font-light
            leading-none

            text-[#75A1D0]
          "
        >
          {item.number}
        </span>

        <h3
          style={newYorkFont}
          className="
            mt-2

            text-[1.25rem]
            font-semibold
            uppercase
            leading-[1.04]
            tracking-[-0.025em]

            text-[#0B2A52]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-2

            text-[7px]
            font-semibold
            uppercase
            leading-[1.65]
            tracking-[0.18em]

            text-[#A67A3E]
          "
        >
          {item.subtitle}
        </p>

        <p
          style={newYorkFont}
          className="
            mt-4

            text-[0.82rem]
            leading-[1.52]

            text-[#425F78]
          "
        >
          {item.description}
        </p>

        {item.items && (
          <div className="mt-4">
            {item.listTitle && (
              <p
                style={newYorkFont}
                className="
                  font-semibold
                  text-[#386B9D]
                "
              >
                {item.listTitle}
              </p>
            )}

            <div
              className="
                mt-2

                grid
                grid-cols-1
                gap-1.5

                sm:grid-cols-2
              "
            >
              {item.items.map((listItem) => (
                <div
                  key={listItem}
                  className="
                    flex
                    items-start
                    gap-2
                  "
                >
                  <span
                    className="
                      mt-[7px]

                      h-1
                      w-1

                      shrink-0

                      rounded-full

                      bg-[#0B2A52]
                    "
                  />

                  <span
                    style={newYorkFont}
                    className="
                      text-[0.76rem]
                      leading-[1.4]

                      text-[#425F78]
                    "
                  >
                    {listItem}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {item.flow && <FlowRow items={item.flow} />}

        <div className="mt-5">
          <p
            style={newYorkFont}
            className="
              font-semibold
              text-[#386B9D]
            "
          >
            Creative focus:
          </p>

          <FocusRow items={item.focus} />
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AiVideoAdFormats() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-ad-formats"
      aria-labelledby="ai-video-ad-formats-heading"
      className="
        relative
        isolate
        overflow-hidden

        bg-white

        pt-16
        sm:pt-20
        lg:pt-24
      "
    >
      {/* =====================================================
          BACKGROUND CURVES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* TOP RIGHT CURVE */}

        <div
          className="
            absolute
            -right-[280px]
            -top-[580px]

            h-[1080px]
            w-[1080px]

            rounded-full

            bg-[radial-gradient(circle_at_center,rgba(229,240,250,0.95)_0%,rgba(244,249,253,0.68)_52%,rgba(255,255,255,0)_72%)]
          "
        />

        {/* CENTRAL PALE BLUE */}

        <div
          className="
            absolute
            left-[60%]
            top-[290px]

            h-[580px]
            w-[1050px]

            -translate-x-1/2

            rounded-[50%]

            bg-[#E9F4FD]/65

            blur-[35px]
          "
        />
      </div>

      {/* =====================================================
          TOP NAV-LIKE META
      ===================================================== */}

      <div
        className="
          mx-auto

          flex
          max-w-[1560px]
          items-start
          justify-between
          gap-8

          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        <div>
          <div className="flex items-center gap-4">
            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.34em]

                text-[#0B2A52]

                sm:text-[10px]
              "
            >
              AI VIDEO AD FORMATS
            </span>

            <span className="h-px w-12 bg-[#B79A72]" />
          </div>

          <p
            className="
              mt-4

              text-[9px]
              font-medium
              uppercase
              tracking-[0.38em]

              text-[#6090C1]

              sm:text-[10px]
            "
          >
            AI AD CREATIVE
          </p>
        </div>

        <div
          className="
            hidden
            items-start
            gap-7

            lg:flex
          "
        >
          <div
            className="
              flex
              items-center
              gap-3

              text-[7px]
              font-medium
              uppercase
              tracking-[0.24em]

              text-[#7595B7]
            "
          >
            <span>IDEAS</span>
            <ArrowRight size={8} strokeWidth={1.4} />
            <span>FORMATS</span>
            <ArrowRight size={8} strokeWidth={1.4} />
            <span>RESULTS</span>
          </div>

          <span className="mt-[4px] h-px w-14 bg-[#B79A72]" />

          <p
            className="
              text-[7px]
              font-medium
              uppercase
              leading-[1.7]
              tracking-[0.28em]

              text-[#6B8DAD]
            "
          >
            A BRIGHTER
            <br />
            BRAND TOMORROW
          </p>
        </div>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-8

          grid
          max-w-[1560px]
          gap-10

          px-5
          sm:px-8
          md:px-10
          lg:px-14

          xl:grid-cols-[0.54fr_0.46fr]
          xl:px-16
        "
      >
        {/* LEFT */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -35,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
        >
          <h2
            id="ai-video-ad-formats-heading"
            style={newYorkFont}
            className="
              max-w-[720px]

              text-[2.2rem]
              font-light
              leading-[0.97]
              tracking-[-0.055em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Different Products
            <br />
            Need Different Ways
            <br />
            to Sell the{" "}
            <span className="text-[#A97C52]">
              Idea.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mt-6
              max-w-[565px]

              text-[14px]
              leading-[1.52]

              text-[#4A6680]

              sm:text-[16px]
            "
          >
            Not every product needs the same style of video ad.
            <br className="hidden sm:block" />
            The right format depends on what the audience needs
            <br className="hidden sm:block" />
            to see, understand or believe before taking action.
          </p>

          <span className="mt-6 block h-px w-9 bg-[#B79A72]" />

          <p
            className="
              mt-4

              text-[7px]
              font-medium
              uppercase
              leading-[1.8]
              tracking-[0.28em]

              text-[#6690B8]
            "
          >
            SAME PRODUCT.
            <br />
            DIFFERENT PERSPECTIVES.
            <br />
            BIGGER OPPORTUNITIES.
          </p>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
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
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.08,
            ease,
          }}
          className="
            relative
            hidden

            min-h-[150px]

            xl:block
          "
        >
          <div
            className="
              absolute
              left-[10%]
              top-[4%]
            "
          >
            <p
              style={newYorkFont}
              className="
                text-[1.65rem]
                font-light
                italic
                leading-[1.08]
                tracking-[-0.035em]

                text-[#0B2A52]
              "
            >
              One Product.
              <br />
              Multiple Creative Angles.
            </p>

            <span className="mt-5 block h-[2px] w-10 bg-[#B79A72]" />
          </div>

          <div
            className="
              absolute
              right-[10%]
              top-[12%]

              border-l
              border-[#CDBD9F]

              pl-7
            "
          >
            <p
              className="
                text-[7px]
                font-semibold
                uppercase
                leading-[1.8]
                tracking-[0.27em]

                text-[#5C83A9]
              "
            >
              SIX FORMATS.
              <br />
              A STRONGER BRAND.
            </p>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          DESKTOP CURVED FORMAT JOURNEY
      ===================================================== */}

      <div
        className="
          relative

          mx-auto
          -mt-2

          hidden

          h-[780px]
          max-w-[1600px]

          xl:block
        "
      >
        {/* LARGE SOFT WAVE */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[80px]
            top-[112px]

            h-[530px]
            w-[1740px]

            rotate-[-4deg]

            rounded-[50%]

            bg-[linear-gradient(180deg,rgba(230,243,253,0.92)_0%,rgba(245,250,254,0.62)_58%,rgba(255,255,255,0)_100%)]
          "
        />

        {/* =================================================
            MAIN BLUE PATH + GOLD EXIT
        ================================================= */}

        <svg
          viewBox="0 0 1600 480"
          preserveAspectRatio="none"
          fill="none"
          className="
            pointer-events-none
            absolute
            left-0
            top-[112px]
            z-10

            h-[390px]
            w-full
          "
        >
          {/* BLUE PATH */}

          <motion.path
            d="
              M0 350
              C90 290 150 330 225 300
              C300 270 335 298 410 267
              C485 236 520 267 596 230
              C672 195 715 225 790 190
              C865 155 915 187 995 148
              C1075 109 1120 145 1200 111
              C1270 80 1320 102 1382 76
            "
            stroke="#4E8ED2"
            strokeWidth="1.7"
            initial={{
              pathLength: reduceMotion ? 1 : 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 1.8,
              ease,
            }}
          />

          {/* GOLD RISE */}

          <motion.path
            d="
              M1195 112
              C1270 62 1340 88 1410 60
              C1480 34 1530 3 1570 -28
            "
            stroke="#B18445"
            strokeWidth="1.55"
            initial={{
              pathLength: reduceMotion ? 1 : 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 1.3,
              delay: reduceMotion ? 0 : 0.5,
              ease,
            }}
          />

          {/* GOLD DOTS */}

          {[
            [125, 315],
            [392, 273],
            [660, 204],
            [910, 164],
            [1185, 115],
            [1450, 44],
          ].map(([cx, cy], index) => (
            <motion.circle
              key={index}
              cx={cx}
              cy={cy}
              r="4.5"
              fill="#B18445"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion
                  ? 0
                  : 0.25 + index * 0.09,
              }}
            />
          ))}

          {/* ARROW HEAD */}

          <path
            d="
              M1571 -29
              L1548 -23
              L1562 -8
              Z
            "
            fill="#B18445"
          />
        </svg>

        {/* RIGHT MICRO COPY */}

        <div
          className="
            absolute
            right-[1.4%]
            top-[190px]
            z-20

            text-[6.5px]
            font-medium
            uppercase
            leading-[1.8]
            tracking-[0.27em]

            text-[#7195B7]
          "
        >
          DIFFERENT
          <br />
          ANGLES
          <br />
          HIGHER
          <br />
          POTENTIAL
        </div>

        {/* FORMAT BLOCKS */}

        {formats.map((item, index) => (
          <DesktopFormat
            key={item.number}
            item={item}
            index={index}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      {/* =====================================================
          TABLET / MOBILE
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-14

          max-w-[900px]

          space-y-9

          px-5
          pb-16

          sm:px-8
          md:px-10

          xl:hidden
        "
      >
        <div
          className="
            rounded-[28px]

            border
            border-[#D6E4EF]

            bg-[#F4F9FD]

            px-6
            py-7
          "
        >
          <span
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.21em]

              text-[#A97C52]
            "
          >
            ONE PRODUCT. MULTIPLE CREATIVE ANGLES.
          </span>

          <h3
            style={newYorkFont}
            className="
              mt-3

              text-[1.65rem]
              font-light
              italic
              leading-[1.08]
              tracking-[-0.035em]

              text-[#0B2A52]
            "
          >
            Six formats. Six different communication jobs.
          </h3>
        </div>

        {formats.map((item, index) => (
          <MobileFormat
            key={item.number}
            item={item}
            index={index}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      {/* =====================================================
          BOTTOM AREA
      ===================================================== */}

      <div
        className="
          relative
          mt-[-4px]

          overflow-hidden

          bg-[#F0F7FD]

          pb-16
          pt-12

          lg:pb-20
          lg:pt-14
        "
      >
        {/* WHITE CURVED CUTOUT */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[8%]
            -top-[265px]

            h-[340px]
            w-[116%]

            rounded-[50%]

            bg-white
          "
        />

        <div
          className="
            relative
            z-10

            mx-auto

            grid
            max-w-[1540px]
            gap-14

            px-5
            sm:px-8
            md:px-10
            lg:px-14

            xl:grid-cols-[0.64fr_0.36fr]
            xl:items-end
            xl:px-16
          "
        >
          {/* =================================================
              SIX CREATIVE GOALS
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
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
              duration: reduceMotion ? 0 : 0.75,
              ease,
            }}
          >
            <div
              className="
                flex
                flex-col
                gap-7

                lg:flex-row
                lg:items-center
              "
            >
              <div
                className="
                  shrink-0

                  lg:border-r
                  lg:border-[#CBBB9F]
                  lg:pr-8
                "
              >
                <p
                  className="
                    text-[7px]
                    font-medium
                    uppercase
                    leading-[1.9]
                    tracking-[0.26em]

                    text-[#628AB2]
                  "
                >
                  SIX CREATIVE GOALS.
                  <br />
                  ONE BIGGER RESULT.
                </p>
              </div>

              <div
                className="
                  grid
                  flex-1
                  grid-cols-2
                  gap-6

                  sm:grid-cols-3
                  lg:grid-cols-6
                "
              >
                {[
                  {
                    icon: Heart,
                    title: "Create Desire",
                  },
                  {
                    icon: Users,
                    title: "Build Relatability",
                  },
                  {
                    icon: Target,
                    title: "Create Relevance",
                  },
                  {
                    icon: BookOpen,
                    title: "Improve Understanding",
                  },
                  {
                    icon: BarChart3,
                    title: "Strengthen Perception",
                  },
                  {
                    icon: Sparkles,
                    title: "Show Visible Change",
                  },
                ].map((goal, index) => {
                  const Icon = goal.icon;

                  return (
                    <div
                      key={goal.title}
                      className="
                        relative
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.4}
                        className="
                          shrink-0
                          text-[#B18445]
                        "
                      />

                      <span
                        className="
                          text-[6.5px]
                          font-semibold
                          uppercase
                          leading-[1.45]
                          tracking-[0.12em]

                          text-[#466D94]
                        "
                      >
                        {goal.title}
                      </span>

                      {index < 5 && (
                        <ArrowRight
                          size={10}
                          strokeWidth={1.3}
                          className="
                            absolute
                            -right-4
                            hidden
                            text-[#B18445]

                            lg:block
                          "
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FINAL MESSAGE
          ================================================= */}

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
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.08,
              ease,
            }}
          >
            <h3
              style={newYorkFont}
              className="
                max-w-[620px]

                text-[2rem]
                font-light
                leading-[0.96]
                tracking-[-0.05em]

                text-[#0B2A52]

                sm:text-[2.35rem]
                lg:text-[2.55rem]
              "
            >
              Don&apos;t Just Create More Ads.
              <br />
              Create Better Angles to{" "}
              <span className="text-[#A97C52]">
                Test.
              </span>
            </h3>

            <div
              className="
                mt-5

                flex
                items-center
                gap-5
              "
            >
              <span className="h-px w-12 bg-[#B79A72]" />

              <span
                className="
                  text-[6.5px]
                  font-medium
                  uppercase
                  tracking-[0.26em]

                  text-[#7397B9]
                "
              >
                MORE PERSPECTIVE. A STRONGER TOMORROW.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}