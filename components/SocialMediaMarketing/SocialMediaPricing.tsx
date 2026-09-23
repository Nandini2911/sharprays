"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Info,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

/* =========================================================
   FONT
========================================================= */

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

/* =========================================================
   DATA
========================================================= */

const plans = [
  {
    name: "Basic",
    tagline: "Build a Consistent Social Presence.",
    description:
      "For startups and small businesses that need a professional, organized and consistent presence on social media.",
    price: "₹14,999",
    highlighted: false,
    inclusions: [
      "1 social media platform",
      "Social media strategy",
      "Monthly content calendar",
      "Up to 12 content pieces per month",
      "Static posts and carousels",
      "Publishing and scheduling",
      "2 edited short-form videos / Reels",
      "Monthly performance report",
    ],
    bestFor:
      "Startups and small businesses that want to move from inconsistent posting to a clearer social media system.",
    cta: "Start With Basic",
  },

  {
    name: "Pro",
    tagline: "Turn Content Into a Connected Growth System.",
    description:
      "For growing brands that need stronger creative, regular short-form content and more active social media management.",
    price: "₹29,999",
    highlighted: true,
    inclusions: [
      "Up to 2 social media platforms",
      "Up to 20 content pieces per month",
      "4–6 edited short-form videos / Reels",
      "Static posts, carousels and stories",
      "Enhanced creative direction",
      "Community engagement",
      "Monthly optimization recommendations",
      "Performance and growth reporting",
      "Monthly strategy review",
    ],
    bestFor:
      "Growing businesses that want social media to play a more consistent role in brand awareness, engagement and business growth.",
    cta: "Choose Pro",
  },

  {
    name: "Premium",
    tagline: "Build a Complete Social Media Engine.",
    description:
      "For brands that need ongoing strategy, creative execution, publishing, community management and deeper performance optimization.",
    price: "₹49,999",
    highlighted: false,
    inclusions: [
      "Up to 3 social media platforms",
      "Up to 30 content pieces per month",
      "8–10 edited short-form videos / Reels",
      "Campaign and launch content",
      "Advanced creative direction",
      "Active community management",
      "Monthly campaign planning",
      "Competitor and content opportunity review",
      "Detailed performance analysis",
    ],
    bestFor:
      "Brands that need a more complete social media function without building a full internal content and management team.",
    cta: "Choose Premium",
  },
];

const quoteFactors = [
  "Number of platforms",
  "Monthly content volume",
  "Reels and video requirements",
  "Creative complexity",
  "Community management",
  "Campaign frequency",
  "Approval workflow",
  "Reporting requirements",
];

const separatelyQuoted = [
  "Advertising spend",
  "Paid media management",
  "Influencer fees",
  "Professional shoots",
  "Models or production crews",
  "Travel expenses",
  "Licensed media",
  "Third-party tools",
];

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   REUSABLE BUTTON
========================================================= */

function GlassButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      style={newYorkFont}
      className="
        group
        relative
        inline-flex
        min-h-[46px]
        items-center
        justify-center
        overflow-hidden

        rounded-[16px]

        border
        border-[#6285AD]/30

        bg-white/80

        px-5
        py-[11px]

        text-[13px]
        font-medium
        tracking-[-0.01em]
        text-[#0B2A52]

        shadow-[0_8px_30px_rgba(11,42,82,0.08)]

        backdrop-blur-[8px]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-[2px]
        hover:border-[#6285AD]/40
        hover:bg-white
        hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

        active:translate-y-0

        sm:min-h-[48px]
        sm:px-6
        sm:py-3
        sm:text-[14px]

        md:text-[15px]
      "
    >
      {/* INNER BORDER */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-[2px]

          rounded-[13px]

          border
          border-white/60
        "
      />

      {/* TOP LIGHT */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-4
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
        "
      />

      {/* TEXT */}

      <span
        className="
          relative
          z-10
          whitespace-nowrap
          text-[#0B2A52]
        "
      >
        {label}
      </span>
    </Link>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function SocialMediaPricing() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="social-media-pricing"
      className="
        relative
        overflow-hidden
        bg-white

        py-20

        sm:py-24
        md:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

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
            left-1/2
            top-[-210px]

            h-[400px]
            w-[700px]

            -translate-x-1/2

            rounded-full

            bg-[#EDF6FC]/70
            blur-[130px]

            sm:w-[850px]
            lg:w-[1000px]
          "
        />

        <div
          className="
            absolute
            -right-[280px]
            top-[42%]

            hidden

            h-[600px]
            w-[600px]

            rounded-full

            border
            border-[#B79A72]/10

            lg:block
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
          max-w-[1450px]

          px-5
          sm:px-7
          md:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            max-w-[930px]
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
                to-[#B79A72]

                sm:w-10
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#B79A72]

                sm:text-[10px]
                sm:tracking-[0.34em]
              "
            >
              Social Media Marketing Pricing
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
              max-w-[900px]

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
            Social Media Support Built Around{" "}
            <span className="text-[#B79A72]">
              Where Your Brand Is Going.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[730px]

              text-[14px]
              leading-[1.8]
              text-[#647B98]

              sm:text-[15px]
              lg:text-[16px]
            "
          >
            Every business needs a different level of social media support.
            Our packages provide a clear starting point while leaving room to
            adapt the final scope around your platforms, content requirements
            and business objectives.
          </p>
        </motion.div>

        {/* =====================================================
            PRICING CARDS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12

            grid
            w-full
            max-w-[1180px]
            grid-cols-1

            gap-4

            sm:mt-14
            sm:gap-5

            md:mt-16

            lg:mt-20
            lg:grid-cols-3
            lg:items-start
          "
        >
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 34,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : index * 0.08,
                ease,
              }}
              className={`
                group
                relative
                overflow-hidden

                rounded-[22px]
                border

                transition-[transform,box-shadow,border-color]
                duration-500
                ease-out

                sm:rounded-[24px]

                ${
                  plan.highlighted
                    ? `
                      border-[#B79A72]/65

                      bg-[linear-gradient(180deg,#F4F9FD_0%,#FFFFFF_38%,#FFFFFF_100%)]

                      shadow-[0_18px_50px_rgba(11,42,82,0.09)]

                      lg:-translate-y-3
                    `
                    : `
                      border-[#D8E4EE]

                      bg-white

                      shadow-[0_10px_34px_rgba(11,42,82,0.05)]

                      hover:-translate-y-1
                      hover:border-[#B79A72]/40

                      hover:shadow-[0_16px_45px_rgba(11,42,82,0.08)]
                    `
                }
              `}
            >
              {/* TOP ACCENT */}

              <div
                aria-hidden="true"
                className={`
                  h-[2px]
                  w-full

                  ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#0B2A52] via-[#6A9BC5] to-[#B79A72]"
                      : "bg-gradient-to-r from-transparent via-[#B79A72]/45 to-transparent"
                  }
                `}
              />

              {/* MOST POPULAR */}

              {plan.highlighted && (
                <div
                  className="
                    absolute
                    right-4
                    top-4

                    flex
                    items-center
                    gap-1.5

                    rounded-full

                    border
                    border-[#B79A72]/30

                    bg-[#FFF9F2]

                    px-2.5
                    py-1.5

                    sm:right-5
                    sm:top-5
                  "
                >
                  <Sparkles
                    size={11}
                    strokeWidth={1.8}
                    className="text-[#B79A72]"
                  />

                  <span
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#9A7145]

                      sm:text-[8px]
                    "
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {/* CONTENT */}

              <div
                className="
                  flex
                  flex-col

                  p-5

                  sm:p-6
                  lg:p-6
                  xl:p-7
                "
              >
                {/* PLAN */}

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#B79A72]
                  "
                >
                  {plan.name}
                </p>

                {/* TITLE */}

                <h3
                  style={newYorkFont}
                  className="
                    mt-5
                    max-w-[310px]

                    text-[24px]
                    font-medium
                    leading-[1.08]
                    tracking-[-0.035em]
                    text-[#0B2A52]

                    sm:text-[25px]
                    lg:text-[25px]
                    xl:text-[27px]
                  "
                >
                  {plan.tagline}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-3.5

                    text-[12.5px]
                    leading-[1.7]
                    text-[#657C95]

                    sm:text-[13px]
                  "
                >
                  {plan.description}
                </p>

                {/* PRICE */}

                <div
                  className="
                    mt-5

                    border-y
                    border-[#DCE6EF]

                    py-5
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.19em]
                      text-[#8093A8]
                    "
                  >
                    Starting from
                  </p>

                  <div
                    className="
                      mt-2

                      flex
                      flex-wrap
                      items-end

                      gap-x-2
                      gap-y-1
                    "
                  >
                    <span
                      style={newYorkFont}
                      className="
                        text-[33px]
                        font-medium
                        leading-none
                        tracking-[-0.04em]
                        text-[#0B2A52]

                        sm:text-[35px]
                        xl:text-[37px]
                      "
                    >
                      {plan.price}
                    </span>

                    <span
                      className="
                        pb-1

                        text-[11px]
                        font-medium
                        text-[#7B90A6]
                      "
                    >
                      / month
                    </span>
                  </div>
                </div>

                {/* INCLUDED */}

                <div className="mt-5">
                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#0B2A52]
                    "
                  >
                    What&apos;s Included
                  </p>

                  <div
                    className="
                      mt-4
                      space-y-2.5

                      sm:space-y-3
                    "
                  >
                    {plan.inclusions.map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-start
                          gap-2.5
                        "
                      >
                        <span
                          className={`
                            mt-[1px]

                            flex
                            h-[17px]
                            w-[17px]
                            shrink-0

                            items-center
                            justify-center

                            rounded-full

                            ${
                              plan.highlighted
                                ? "bg-[#E4F1FA] text-[#0B2A52]"
                                : "bg-[#F6F1EA] text-[#A47A4D]"
                            }
                          `}
                        >
                          <Check
                            size={10}
                            strokeWidth={2}
                          />
                        </span>

                        <span
                          className="
                            text-[12.5px]
                            leading-[1.5]
                            text-[#617991]

                            sm:text-[13px]
                          "
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BEST FOR */}

                <div
                  className="
                    mt-6

                    border-t
                    border-[#DCE6EF]

                    pt-5
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.19em]
                      text-[#B79A72]
                    "
                  >
                    Best For
                  </p>

                  <p
                    className="
                      mt-2.5

                      text-[12px]
                      leading-[1.65]
                      text-[#6B8198]
                    "
                  >
                    {plan.bestFor}
                  </p>
                </div>

                {/* CTA */}

                <div className="pt-6">
                  <GlassButton
                    href="/contact"
                    label={plan.cta}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            CUSTOM PLAN
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
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            relative

            mx-auto
            mt-12

            w-full
            max-w-[1180px]

            overflow-hidden

            rounded-[22px]

            border
            border-[#CFE0ED]

            bg-[linear-gradient(105deg,#EEF7FD_0%,#F8FBFE_52%,#FFF9F3_100%)]

            p-5

            sm:mt-14
            sm:rounded-[24px]
            sm:p-7

            lg:mt-16
            lg:p-8
          "
        >
          {/* DECORATION */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[-100px]
              top-[-120px]

              h-[250px]
              w-[250px]

              rounded-full

              border
              border-[#B79A72]/20
            "
          />

          <div
            className="
              relative
              z-10

              flex
              flex-col

              gap-7

              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-10
            "
          >
            {/* COPY */}

            <div className="max-w-[760px]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal
                  size={14}
                  strokeWidth={1.6}
                  className="text-[#B79A72]"
                />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#B79A72]

                    sm:text-[9px]
                  "
                >
                  Need Something Different?
                </span>
              </div>

              <h3
                style={newYorkFont}
                className="
                  mt-3.5

                  text-[26px]
                  font-medium
                  leading-[1.12]
                  tracking-[-0.035em]
                  text-[#0B2A52]

                  sm:text-[29px]
                  lg:text-[32px]
                "
              >
                Your Social Media Plan Does Not Have to Fit Inside a Package.
              </h3>

              <p
                className="
                  mt-3.5
                  max-w-[690px]

                  text-[13px]
                  leading-[1.75]
                  text-[#657C95]

                  sm:text-[14px]
                "
              >
                Not every business needs the same number of platforms, posts
                or videos. If your requirements sit between packages, we can
                build a custom social media marketing plan around what your
                business actually needs.
              </p>
            </div>

            {/* CTA */}

            <div className="shrink-0">
              <GlassButton
                href="/contact"
                label="Get a Custom Proposal"
              />
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            COMPACT PRICING + SCOPE NOTE
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
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            relative

            mx-auto
            mt-10

            w-full
            max-w-[1180px]

            overflow-hidden

            rounded-[22px]

            border
            border-[#D8E4EE]

            bg-white

            shadow-[0_12px_40px_rgba(11,42,82,0.055)]

            sm:mt-12
            sm:rounded-[24px]

            lg:mt-14
          "
        >
          {/* BACKGROUND */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[linear-gradient(110deg,#F5FAFE_0%,#FFFFFF_50%,#FFF9F3_100%)]
            "
          />

          {/* DECORATIVE CIRCLE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-[110px]
              -top-[120px]

              h-[280px]
              w-[280px]

              rounded-full

              border
              border-[#B79A72]/15
            "
          />

          <div
            className="
              relative
              z-10

              p-5

              sm:p-7
              md:p-8
              lg:p-9
            "
          >
            {/* ===============================================
                TOP
            =============================================== */}

            <div
              className="
                flex
                flex-col
                gap-5

                md:flex-row
                md:items-start
                md:justify-between
                md:gap-10
              "
            >
              <div className="max-w-[720px]">
                {/* LABEL */}

                <div
                  className="
                    flex
                    items-center
                    gap-2.5
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

                      rounded-full

                      bg-[#EDF5FB]

                      text-[#0B2A52]
                    "
                  >
                    <Info
                      size={15}
                      strokeWidth={1.7}
                    />
                  </span>

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-[#B79A72]

                      sm:text-[9px]
                    "
                  >
                    Pricing & Scope
                  </span>
                </div>

                {/* HEADING */}

                <h3
                  style={newYorkFont}
                  className="
                    mt-4
                    max-w-[700px]

                    text-[25px]
                    font-medium
                    leading-[1.1]
                    tracking-[-0.035em]
                    text-[#0B2A52]

                    sm:text-[29px]
                    md:text-[31px]
                  "
                >
                  Clear Scope Before the First Post Goes Live.
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    max-w-[700px]

                    text-[13px]
                    leading-[1.75]
                    text-[#657C95]

                    sm:text-[14px]
                  "
                >
                  Our packages are starting points. Final pricing is confirmed
                  after we understand your platforms, monthly content volume,
                  video requirements, community management needs and the level
                  of ongoing support your business requires.
                </p>
              </div>

              {/* CTA */}

              <div className="shrink-0">
                <GlassButton
                  href="/contact"
                  label="Talk About My Social Media"
                />
              </div>
            </div>

            {/* ===============================================
                PRICING DETAILS
            =============================================== */}

            <div
              className="
                mt-7

                grid
                gap-7

                border-t
                border-[#DCE6EF]

                pt-7

                md:grid-cols-2
                md:gap-10

                lg:mt-8
                lg:gap-14
                lg:pt-8
              "
            >
              {/* WHAT CHANGES PRICE */}

              <div>
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#B79A72]

                    sm:text-[9px]
                  "
                >
                  What Can Change Your Quote
                </p>

                <div
                  className="
                    mt-4

                    grid
                    gap-x-5
                    gap-y-2.5

                    sm:grid-cols-2
                  "
                >
                  {quoteFactors.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-2.5
                      "
                    >
                      <span
                        className="
                          mt-[7px]

                          h-[5px]
                          w-[5px]
                          shrink-0

                          rounded-full

                          bg-[#B79A72]
                        "
                      />

                      <span
                        className="
                          text-[12px]
                          leading-[1.6]
                          text-[#687F96]

                          sm:text-[12.5px]
                        "
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUOTED SEPARATELY */}

              <div
                className="
                  border-t
                  border-[#DCE6EF]

                  pt-7

                  md:border-l
                  md:border-t-0
                  md:pl-10
                  md:pt-0

                  lg:pl-14
                "
              >
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#B79A72]

                    sm:text-[9px]
                  "
                >
                  Usually Quoted Separately
                </p>

                <div
                  className="
                    mt-4

                    grid
                    gap-x-5
                    gap-y-2.5

                    sm:grid-cols-2
                  "
                >
                  {separatelyQuoted.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-2.5
                      "
                    >
                      <span
                        className="
                          mt-[7px]

                          h-[5px]
                          w-[5px]
                          shrink-0

                          rounded-full

                          bg-[#B79A72]
                        "
                      />

                      <span
                        className="
                          text-[12px]
                          leading-[1.6]
                          text-[#687F96]

                          sm:text-[12.5px]
                        "
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===============================================
                FINAL SCOPE
            =============================================== */}

            <div
              className="
                mt-7

                flex
                flex-col
                gap-3

                border-t
                border-[#DCE6EF]

                pt-6

                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:gap-6
              "
            >
              <p
                className="
                  max-w-[820px]

                  text-[12px]
                  leading-[1.7]
                  text-[#657C95]

                  sm:text-[13px]
                "
              >
                Before work begins, your Sharp Rays proposal confirms the
                platforms, deliverables, responsibilities, approval process,
                exclusions and monthly investment — so both sides know exactly
                what is included.
              </p>

              <p
                className="
                  shrink-0

                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#0B2A52]

                  sm:text-right
                "
              >
                Clear Scope. No Guesswork.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            END NOTE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 0.1,
            ease,
          }}
          className="
            mx-auto
            mt-8

            flex
            max-w-[650px]
            items-center
            gap-3

            sm:mt-10
          "
        >
          <span
            className="
              h-px
              flex-1

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]/45
            "
          />

          <span
            className="
              shrink-0

              text-center

              text-[8px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#8295A8]

              sm:text-[9px]
              sm:tracking-[0.24em]
            "
          >
            Strategy · Content · Community · Growth
          </span>

          <span
            className="
              h-px
              flex-1

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]/45
            "
          />
        </motion.div>
      </div>
    </section>
  );
}