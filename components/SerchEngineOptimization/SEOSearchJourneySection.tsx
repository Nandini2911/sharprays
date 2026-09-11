"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const journey = [
  {
    number: "01",
    stage: "SEARCH",
    title: "UNDERSTAND INTENT",
    description:
      "Identify what potential customers are searching for, why they are searching and what information they need.",
    icon: Search,
  },
  {
    number: "02",
    stage: "DISCOVER",
    title: "BECOME VISIBLE",
    description:
      "Create technically accessible, relevant pages that search engines can crawl, understand and index.",
    icon: Compass,
  },
  {
    number: "03",
    stage: "CHOOSE",
    title: "EARN THE CLICK",
    description:
      "Use clear search titles, useful page content and strong positioning to show users why your result deserves attention.",
    icon: MousePointerClick,
  },
  {
    number: "04",
    stage: "TRUST",
    title: "ANSWER THE QUESTION",
    description:
      "Give visitors useful, credible information that demonstrates your understanding of their problem.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    stage: "EXPLORE",
    title: "BUILD CONFIDENCE",
    description:
      "Connect related services, expertise and resources so visitors can understand your business more deeply.",
    icon: Sparkles,
  },
  {
    number: "06",
    stage: "ACT",
    title: "SUPPORT CONVERSION",
    description:
      "Turn relevant organic traffic into enquiries, bookings, calls, signups or other meaningful business action.",
    icon: Target,
  },
];

export default function SEOSearchJourneySection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.85,
        ease,
      },
    },
  };

  return (
    <section
      id="seo-search-journey"
      className="
        relative
        overflow-hidden
        bg-[#FAFBFD]
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-36
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-52
          top-[18%]
          h-[440px]
          w-[440px]
          rounded-full
          bg-[#C6A77A]/[0.09]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-[8%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#0B2A52]/[0.05]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[52%]
          h-[680px]
          w-[980px]
          -translate-x-1/2
          rounded-[50%]
          border
          border-[#0B2A52]/[0.04]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1360px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            staggerChildren: 0.1,
          }}
          className="
            mx-auto
            max-w-[900px]
            text-center
          "
        >
          {/* EYEBROW */}

          <motion.div
            variants={fadeUp}
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-9 bg-[#C6A77A]" />

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.28em]
                text-[#C6A77A]
                sm:text-[10px]
              "
            >
              HOW STRATEGIC SEO WORKS
            </span>

            <span className="h-px w-9 bg-[#C6A77A]" />
          </motion.div>

          {/* MAIN HEADING */}

          <motion.h2
            variants={fadeUp}
            className="
              mt-6
              text-[2.2rem]
              font-medium
              leading-[1.08]
              tracking-[-0.035em]
              text-[#0B2A52]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            From Search to{" "}
            <span className="text-[#C6A77A]">
              Meaningful Action.
            </span>
          </motion.h2>

          {/* INTRO */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[650px]
              text-[13px]
              leading-7
              text-[#0B2A52]/60
              sm:text-sm
            "
          >
            Successful SEO does not end when somebody sees your website in
            Google.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              mt-1
              text-[13px]
              font-medium
              leading-7
              text-[#0B2A52]
              sm:text-sm
            "
          >
            It creates a journey.
          </motion.p>
        </motion.div>

        {/* =======================================================
            DESKTOP JOURNEY
        ======================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-20
            hidden
            max-w-[1240px]
            lg:block
          "
        >
          {/* MAIN JOURNEY LINE */}

          <div
            className="
              absolute
              left-[5%]
              right-[5%]
              top-1/2
              h-px
              -translate-y-1/2
              bg-[#0B2A52]/18
            "
          />

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 2,
              delay: 0.25,
              ease,
            }}
            className="
              absolute
              left-[5%]
              right-[5%]
              top-1/2
              h-[2px]
              origin-left
              -translate-y-1/2
              bg-gradient-to-r
              from-[#0B2A52]
              via-[#C6A77A]
              to-[#0B2A52]
            "
          />

          {/* TRAVEL LIGHT */}

          {!reduceMotion && (
            <motion.div
              initial={{
                left: "5%",
                opacity: 0,
              }}
              whileInView={{
                left: "94%",
                opacity: [0, 1, 1, 0],
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 2.4,
                delay: 0.55,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-1/2
                z-30
                h-2.5
                w-2.5
                -translate-y-1/2
                rounded-full
                bg-[#C6A77A]
                shadow-[0_0_22px_rgba(198,167,122,0.95)]
              "
            />
          )}

          {/* STEPS */}

          <div
            className="
              relative
              grid
              min-h-[620px]
              grid-cols-6
              gap-3
            "
          >
            {journey.map((item, index) => {
              const top = index % 2 === 0;

              return (
                <JourneyStep
                  key={item.number}
                  item={item}
                  index={index}
                  position={top ? "top" : "bottom"}
                  reduceMotion={!!reduceMotion}
                />
              );
            })}
          </div>

          {/* START NODE */}

          <div
            className="
              absolute
              left-[5%]
              top-1/2
              z-30
              flex
              h-4
              w-4
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border-[1.5px]
              border-[#0B2A52]
              bg-white
              shadow-[0_4px_14px_rgba(11,42,82,0.14)]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B2A52]" />
          </div>

          {/* END NODE */}

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.15, 1],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[5%]
              top-1/2
              z-30
              flex
              h-11
              w-11
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border-[1.5px]
              border-[#C6A77A]
              bg-white
              text-[#C6A77A]
              shadow-[0_10px_30px_rgba(198,167,122,0.28)]
            "
          >
            <CheckCircle2
              size={17}
              strokeWidth={1.8}
            />
          </motion.div>
        </div>

        {/* =======================================================
            MOBILE / TABLET JOURNEY
        ======================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-[700px]
            lg:hidden
          "
        >
          {/* VERTICAL LINE */}

          <div
            className="
              absolute
              bottom-10
              left-[19px]
              top-10
              w-px
              bg-[#0B2A52]/18
              sm:left-[23px]
            "
          />

          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.8,
              ease,
            }}
            className="
              absolute
              bottom-10
              left-[19px]
              top-10
              w-[2px]
              origin-top
              bg-gradient-to-b
              from-[#0B2A52]
              via-[#C6A77A]
              to-[#0B2A52]
              sm:left-[23px]
            "
          />

          <div className="space-y-5">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="
                    group
                    relative
                    flex
                    gap-5
                    sm:gap-6
                  "
                >
                  {/* MOBILE NODE */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-[1.5px]
                      border-[#0B2A52]/65
                      bg-white
                      text-[#0B2A52]
                      shadow-[0_7px_20px_rgba(11,42,82,0.10)]
                      transition-all
                      duration-300
                      group-hover:border-[#C6A77A]
                      group-hover:bg-[#0B2A52]
                      group-hover:text-white
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* MOBILE OUTER FRAME */}

                  <div
                    className="
                      relative
                      flex-1
                      rounded-[23px]
                      border-[2px]
                      border-[#0B2A52]/55
                      bg-white
                      p-[5px]
                      shadow-[0_12px_35px_rgba(11,42,82,0.07)]
                      transition-all
                      duration-500
                      group-hover:border-[#0B2A52]/90
                      group-hover:shadow-[0_18px_45px_rgba(11,42,82,0.13)]
                    "
                  >
                    {/* MOBILE INNER FRAME */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[17px]
                        border-[1.5px]
                        border-[#C6A77A]/70
                        bg-gradient-to-br
                        from-white
                        via-[#FFFDFC]
                        to-[#C6A77A]/10
                        p-5
                        transition-all
                        duration-500
                        group-hover:border-[#C6A77A]
                        sm:p-6
                      "
                    >
                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-14
                          -top-14
                          h-36
                          w-36
                          rounded-full
                          bg-[#0B2A52]/[0.04]
                          blur-[40px]
                        "
                      />

                      <span
                        className="
                          relative
                          z-10
                          text-[8px]
                          font-bold
                          tracking-[0.2em]
                          text-[#C6A77A]
                        "
                      >
                        {item.number} — {item.stage}
                      </span>

                      <h3
                        className="
                          relative
                          z-10
                          mt-3
                          text-[15px]
                          font-semibold
                          tracking-[0.04em]
                          text-[#0B2A52]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          relative
                          z-10
                          mt-3
                          text-[12px]
                          leading-6
                          text-[#0B2A52]/65
                          sm:text-[13px]
                        "
                      >
                        {item.description}
                      </p>

                      <div
                        className="
                          absolute
                          bottom-0
                          left-1/2
                          h-[3px]
                          w-[25%]
                          -translate-x-1/2
                          rounded-t-full
                          bg-[#C6A77A]/70
                          transition-all
                          duration-500
                          group-hover:w-[75%]
                          group-hover:bg-[#C6A77A]
                        "
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            FINAL RESULT
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[1080px]
            rounded-[28px]
            border-[2px]
            border-[#0B2A52]/55
            bg-white
            p-[5px]
            shadow-[0_20px_60px_rgba(11,42,82,0.09)]
            lg:mt-20
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[21px]
              border-[1.5px]
              border-[#C6A77A]/70
              bg-gradient-to-r
              from-[#F7FAFD]
              via-white
              to-[#C6A77A]/[0.12]
              px-6
              py-8
              sm:px-9
              lg:px-12
            "
          >
            {/* BACKGROUND CIRCLES */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-20
                h-52
                w-52
                rounded-full
                border
                border-[#0B2A52]/[0.08]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-4
                -top-6
                h-32
                w-32
                rounded-full
                border
                border-[#C6A77A]/30
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[8px]
                    font-bold
                    tracking-[0.22em]
                    text-[#C6A77A]
                  "
                >
                  THE SEARCH JOURNEY
                </p>

                <p
                  className="
                    mt-3
                    max-w-[750px]
                    text-[16px]
                    font-medium
                    leading-8
                    text-[#0B2A52]
                    sm:text-[18px]
                  "
                >
                  Search intent becomes visibility. Visibility earns attention.
                  Trust builds confidence. Confidence supports action.
                </p>
              </div>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: [0, 5, 0],
                      }
                }
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C6A77A]/80
                  bg-[#0B2A52]
                  text-[#C6A77A]
                  shadow-[0_10px_25px_rgba(11,42,82,0.18)]
                "
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   DESKTOP JOURNEY STEP
============================================================= */

function JourneyStep({
  item,
  index,
  position,
  reduceMotion,
}: {
  item: {
    number: string;
    stage: string;
    title: string;
    description: string;
    icon: React.ElementType;
  };
  index: number;
  position: "top" | "bottom";
  reduceMotion: boolean;
}) {
  const Icon = item.icon;
  const isTop = position === "top";

  return (
    <div
      className={`
        relative
        flex
        ${isTop ? "items-start" : "items-end"}
      `}
    >
      {/* =======================================================
          CARD CONNECTOR
      ======================================================== */}

      <motion.div
        initial={{
          scaleY: 0,
        }}
        whileInView={{
          scaleY: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.65,
          delay: 0.65 + index * 0.12,
          ease,
        }}
        className={`
          absolute
          left-1/2
          z-0
          h-[72px]
          w-[1.5px]
          -translate-x-1/2
          bg-gradient-to-b
          from-[#C6A77A]
          via-[#C6A77A]
          to-[#0B2A52]/45

          ${
            isTop
              ? "bottom-1/2 origin-bottom"
              : "top-1/2 origin-top rotate-180"
          }
        `}
      />

      {/* =======================================================
          JOURNEY NODE
      ======================================================== */}

      <motion.span
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
          duration: 0.4,
          delay: 0.75 + index * 0.12,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          flex
          h-5
          w-5
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border-[1.5px]
          border-[#C6A77A]
          bg-white
          shadow-[0_0_0_4px_rgba(198,167,122,0.11),0_6px_18px_rgba(198,167,122,0.30)]
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#C6A77A]
          "
        />
      </motion.span>

      {/* =======================================================
          OUTER CARD
      ======================================================== */}

      <motion.article
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : isTop ? -35 : 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35 + index * 0.12,
          ease,
        }}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: isTop ? -7 : 7,
              }
        }
        className={`
          group
          relative
          z-10
          w-full
          rounded-[25px]

          border-[2px]
          border-[#0B2A52]/60

          bg-white
          p-[5px]

          shadow-[0_14px_40px_rgba(11,42,82,0.09)]

          transition-all
          duration-500

          hover:border-[#0B2A52]/90

          hover:shadow-[0_22px_55px_rgba(11,42,82,0.15),0_0_0_1px_rgba(198,167,122,0.12)]

          ${isTop ? "mb-[350px]" : "mt-[350px]"}
        `}
      >
        {/* =====================================================
            INNER CARD
        ====================================================== */}

        <div
          className="
            relative
            min-h-[215px]
            overflow-hidden
            rounded-[18px]

            border-[1.5px]
            border-[#C6A77A]/75

            bg-gradient-to-br
            from-white
            via-[#FFFDFC]
            to-[#C6A77A]/12

            p-5

            transition-all
            duration-500

            group-hover:border-[#C6A77A]

            group-hover:from-white
            group-hover:via-[#FFFDF9]
            group-hover:to-[#C6A77A]/18
          "
        >
          {/* NAVY GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-[#0B2A52]/[0.04]
              blur-[40px]
              transition-all
              duration-500
              group-hover:bg-[#0B2A52]/[0.09]
            "
          />

          {/* GOLD GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-16
              -left-16
              h-40
              w-40
              rounded-full
              bg-[#C6A77A]/[0.08]
              blur-[40px]
              transition-all
              duration-500
              group-hover:bg-[#C6A77A]/18
            "
          />

          {/* NUMBER + ICON */}

          <div
            className="
              relative
              z-10
              flex
              items-start
              justify-between
            "
          >
            <div>
              <span
                className="
                  text-[8px]
                  font-bold
                  tracking-[0.18em]
                  text-[#C6A77A]
                "
              >
                {item.number}
              </span>

              <div
                className="
                  mt-2
                  h-[2px]
                  w-5
                  bg-[#C6A77A]
                  transition-all
                  duration-500
                  group-hover:w-9
                "
              />
            </div>

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl

                border-[1.5px]
                border-[#0B2A52]/50

                bg-white
                text-[#0B2A52]

                shadow-[0_6px_16px_rgba(11,42,82,0.08)]

                transition-all
                duration-300

                group-hover:border-[#0B2A52]
                group-hover:bg-[#0B2A52]
                group-hover:text-white

                group-hover:shadow-[0_9px_22px_rgba(11,42,82,0.22)]
              "
            >
              <Icon
                size={14}
                strokeWidth={1.7}
              />
            </div>
          </div>

          {/* STAGE */}

          <p
            className="
              relative
              z-10
              mt-5
              text-[8px]
              font-bold
              tracking-[0.2em]
              text-[#C6A77A]
            "
          >
            {item.stage}
          </p>

          {/* TITLE */}

          <h3
            className="
              relative
              z-10
              mt-2
              text-[14px]
              font-semibold
              leading-6
              tracking-[0.02em]
              text-[#0B2A52]
            "
          >
            {item.title}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              relative
              z-10
              mt-3
              text-[11px]
              leading-5
              text-[#0B2A52]/68
            "
          >
            {item.description}
          </p>

          {/* BOTTOM GOLD ACCENT */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-[3px]
              w-[28%]
              -translate-x-1/2
              rounded-t-full
              bg-[#C6A77A]/75

              transition-all
              duration-500

              group-hover:w-[78%]
              group-hover:bg-[#C6A77A]

              group-hover:shadow-[0_-3px_12px_rgba(198,167,122,0.35)]
            "
          />
        </div>
      </motion.article>
    </div>
  );
}