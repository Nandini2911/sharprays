"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   COMBINED EXPORT
============================================================ */

export default function SEOClosingSections() {
  return (
    <>
      <SEOFinalAnswerSection />
      <SEOFinalCTASection />
    </>
  );
}

/* ============================================================
   SECTION 16 — FINAL ANSWER BLOCK
============================================================ */

export function SEOFinalAnswerSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-final-answer"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-36
      "
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-72
            top-[10%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#3976B6]/[0.045]
            blur-[165px]
          "
        />

        <div
          className="
            absolute
            -right-72
            bottom-[5%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#C6A77A]/[0.075]
            blur-[165px]
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
        {/* =====================================================
            MAIN FRAME
        ====================================================== */}

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
            amount: 0.18,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            relative
            mx-auto
            max-w-[1180px]
            overflow-hidden
            rounded-[34px]
            border
            border-[#0B2A52]/[0.12]
            bg-gradient-to-br
            from-[#F5FAFE]
            via-white
            to-[#FBF3E6]
            shadow-[0_28px_80px_rgba(11,42,82,0.055)]
          "
        >
          {/* DECORATIVE BLOBS */}

          <div
            className="
              pointer-events-none
              absolute
              -left-24
              -top-24
              h-[300px]
              w-[300px]
              rounded-full
              border
              border-[#3976B6]/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -bottom-20
              h-[280px]
              w-[280px]
              rounded-full
              border
              border-[#C6A77A]/15
            "
          />

          <div
            className="
              relative
              z-10
              grid
              lg:grid-cols-[1.15fr_0.85fr]
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div
              className="
                px-7
                py-10
                sm:px-10
                sm:py-12
                lg:px-14
                lg:py-14
              "
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#C6A77A]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.23em]
                    text-[#C6A77A]
                  "
                >
                  SEO SERVICES WITH SHARP RAYS
                </span>
              </div>

              <h2
                className="
                  mt-6
                  max-w-[650px]
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
                Looking for an{" "}
                <span className="text-[#C6A77A]">
                  SEO Partner?
                </span>
              </h2>

              <p
                className="
                  mt-7
                  max-w-[690px]
                  text-[14px]
                  leading-7
                  text-[#0B2A52]/62
                  sm:text-[15px]
                "
              >
                Sharp Rays helps businesses improve search visibility through
                technical SEO, keyword and search intent strategy, on-page
                optimization, content and ongoing performance analysis.
              </p>

              <p
                className="
                  mt-4
                  max-w-[690px]
                  text-[14px]
                  leading-7
                  text-[#0B2A52]/62
                  sm:text-[15px]
                "
              >
                Whether you need to fix an existing website, strengthen
                important service pages or build a longer-term organic search
                strategy, we start by identifying where SEO can create
                meaningful business value.
              </p>

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.18,
                  ease,
                }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-[#0B2A52]
                    via-[#164A82]
                    to-[#3976B6]
                    px-6
                    py-3.5
                    text-[11px]
                    font-semibold
                    tracking-[0.08em]
                    text-white
                    shadow-[0_14px_35px_rgba(11,42,82,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_42px_rgba(11,42,82,0.24)]
                  "
                >
                  Talk to an SEO Specialist

                  <ArrowRight
                    size={15}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </motion.div>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================== */}

            <div
              className="
                relative
                border-t
                border-[#0B2A52]/10
                px-7
                py-10
                sm:px-10
                lg:border-l
                lg:border-t-0
                lg:px-10
                lg:py-14
              "
            >
              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.19em]
                  text-[#0B2A52]/38
                "
              >
                WHAT WE CONNECT
              </span>

              <h3
                className="
                  mt-3
                  max-w-[390px]
                  [font-family:Georgia,'Times_New_Roman',serif]
                  text-[27px]
                  font-normal
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#0B2A52]
                "
              >
                Search opportunity with business value.
              </h3>

              {/* FLOW */}

              <div
                className="
                  relative
                  mt-9
                  space-y-5
                "
              >
                {[
                  {
                    label: "SEARCH DEMAND",
                    text: "What your audience is already looking for.",
                    icon: Search,
                  },
                  {
                    label: "RELEVANT PAGES",
                    text: "Where your website should answer that intent.",
                    icon: Target,
                  },
                  {
                    label: "BUSINESS VALUE",
                    text: "Where visibility can support meaningful growth.",
                    icon: TrendingUp,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        x: reduceMotion ? 0 : 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                        ease,
                      }}
                      className="
                        relative
                        flex
                        gap-4
                      "
                    >
                      {/* connector */}

                      {index < 2 && (
                        <span
                          className="
                            absolute
                            left-[21px]
                            top-[46px]
                            h-[34px]
                            w-px
                            bg-gradient-to-b
                            from-[#3976B6]/25
                            to-[#C6A77A]/35
                          "
                        />
                      )}

                      <div
                        className={`
                          relative
                          z-10
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border-[4px]
                          border-white
                          shadow-[0_0_0_1px_rgba(11,42,82,0.09)]

                          ${
                            index === 2
                              ? "bg-[#C6A77A] text-white"
                              : "bg-[#EAF4FC] text-[#3976B6]"
                          }
                        `}
                      >
                        <Icon
                          size={15}
                          strokeWidth={1.7}
                        />
                      </div>

                      <div className="pt-1">
                        <span
                          className="
                            text-[8px]
                            font-semibold
                            tracking-[0.16em]
                            text-[#C6A77A]
                          "
                        >
                          {item.label}
                        </span>

                        <p
                          className="
                            mt-1
                            max-w-[300px]
                            text-[13px]
                            leading-6
                            text-[#0B2A52]/60
                          "
                        >
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* RESULT */}

              <div
                className="
                  mt-9
                  flex
                  items-center
                  gap-4
                  border-t
                  border-[#0B2A52]/10
                  pt-6
                "
              >
                <div
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
                  <Check
                    size={14}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <span
                    className="
                      text-[8px]
                      font-semibold
                      tracking-[0.15em]
                      text-[#C6A77A]
                    "
                  >
                    THE OUTCOME
                  </span>

                  <p
                    className="
                      mt-1
                      text-[13px]
                      font-medium
                      text-[#0B2A52]
                    "
                  >
                    Search visibility with a reason behind it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 17 — FINAL CTA
============================================================ */

export function SEOFinalCTASection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-final-cta"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND HALF CIRCLES
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* LEFT HALF-CIRCLE SYSTEM */}

        <div
          className="
            absolute
            -left-[330px]
            top-1/2
            h-[660px]
            w-[660px]
            -translate-y-1/2
            rounded-full
            border
            border-[#3976B6]/[0.08]
          "
        />

        <div
          className="
            absolute
            -left-[250px]
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            border
            border-[#3976B6]/[0.07]
          "
        />

        <div
          className="
            absolute
            -left-[175px]
            top-1/2
            h-[350px]
            w-[350px]
            -translate-y-1/2
            rounded-full
            border
            border-[#3976B6]/[0.06]
          "
        />

        {/* RIGHT HALF-CIRCLE SYSTEM */}

        <div
          className="
            absolute
            -right-[330px]
            top-1/2
            h-[660px]
            w-[660px]
            -translate-y-1/2
            rounded-full
            border
            border-[#C6A77A]/10
          "
        />

        <div
          className="
            absolute
            -right-[250px]
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            border
            border-[#C6A77A]/[0.09]
          "
        />

        <div
          className="
            absolute
            -right-[175px]
            top-1/2
            h-[350px]
            w-[350px]
            -translate-y-1/2
            rounded-full
            border
            border-[#C6A77A]/[0.08]
          "
        />

        {/* CENTER GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[780px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#3976B6]/[0.045]
            blur-[125px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[58%]
            h-[320px]
            w-[620px]
            -translate-x-1/2
            rounded-full
            bg-[#C6A77A]/[0.055]
            blur-[125px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            max-w-[980px]
            text-center
          "
        >
          {/* EYEBROW */}

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C6A77A]" />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.26em]
                text-[#C6A77A]
              "
            >
              YOUR NEXT MOVE
            </span>

            <span className="h-px w-10 bg-[#C6A77A]" />
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-7
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
            Ready to Be{" "}
            <span className="text-[#C6A77A]">
              Easier to Find?
            </span>
          </h2>

          {/* COPY */}

          <motion.div
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
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease,
            }}
            className="
              mx-auto
              mt-7
              max-w-[760px]
            "
          >
            <p
              className="
                text-[17px]
                font-medium
                leading-7
                text-[#0B2A52]
                sm:text-[18px]
              "
            >
              Your customers are already searching.
            </p>

            <p
              className="
                mx-auto
                mt-4
                max-w-[700px]
                text-[14px]
                leading-7
                text-[#0B2A52]/62
                sm:text-[15px]
              "
            >
              The opportunity is to make sure your business gives them
              something worth finding.
            </p>

            <p
              className="
                mx-auto
                mt-3
                max-w-[760px]
                text-[14px]
                leading-7
                text-[#0B2A52]/62
                sm:text-[15px]
              "
            >
              Let&apos;s build an SEO strategy around the searches, pages and
              opportunities that matter most to your growth.
            </p>
          </motion.div>

          {/* =================================================
              CTA BUTTON
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 16,
              scale: reduceMotion ? 1 : 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease,
            }}
            className="mt-9"
          >
            <Link
              href="/contact"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-[#0B2A52]
                via-[#185590]
                to-[#3976B6]
                px-7
                py-4
                text-[11px]
                font-semibold
                tracking-[0.08em]
                text-white
                shadow-[0_16px_40px_rgba(11,42,82,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_48px_rgba(11,42,82,0.26)]
              "
            >
              {/* button light */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -left-[40%]
                  top-0
                  h-full
                  w-[35%]
                  -skew-x-12
                  bg-white/15
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <span className="relative z-10">
                Improve My Search Visibility
              </span>

              <span
                className="
                  relative
                  z-10
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  transition-all
                  duration-300
                  group-hover:bg-white
                  group-hover:text-[#0B2A52]
                "
              >
                <ArrowRight
                  size={14}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </span>
            </Link>
          </motion.div>

          {/* =================================================
              SUPPORTING LINE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: reduceMotion ? 1 : 0.85,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.28,
              ease,
            }}
            className="
              mx-auto
              mt-10
              flex
              max-w-[660px]
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-transparent
                to-[#3976B6]/35
              "
            />

            <div className="flex items-center gap-3">
              <Sparkles
                size={12}
                strokeWidth={1.6}
                className="text-[#C6A77A]"
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.18em]
                  text-[#0B2A52]/48
                  sm:text-[10px]
                "
              >
                DISCOVER · OPTIMIZE · RANK · GROW
              </span>
            </div>

            <span
              className="
                h-px
                flex-1
                bg-gradient-to-l
                from-transparent
                to-[#C6A77A]/45
              "
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            BOTTOM DECORATIVE SIGNAL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.75,
            delay: 0.35,
            ease,
          }}
          className="
            mx-auto
            mt-16
            flex
            max-w-[430px]
            items-center
            justify-center
            gap-3
          "
        >
          {[0, 1, 2, 3].map((item) => (
            <span
              key={item}
              className={`
                rounded-full
                ${
                  item === 3
                    ? "h-2 w-12 bg-[#C6A77A]"
                    : "h-2 w-2 bg-[#3976B6]/30"
                }
              `}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}