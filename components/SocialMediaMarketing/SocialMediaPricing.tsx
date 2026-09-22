"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Sparkles,
  SlidersHorizontal,
  Info,
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
      "Caption writing",
      "Basic creative direction",
      "Publishing and scheduling",
      "2 edited short-form videos / Reels",
      "Basic community monitoring",
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
      "Everything in Basic",
      "Up to 2 social media platforms",
      "Up to 20 content pieces per month",
      "4–6 edited short-form videos / Reels",
      "Static posts, carousels and stories",
      "Content pillar development",
      "Platform-specific content planning",
      "Enhanced creative direction",
      "Publishing and scheduling",
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
      "Everything in Pro",
      "Up to 3 social media platforms",
      "Up to 30 content pieces per month",
      "8–10 edited short-form videos / Reels",
      "Campaign and launch content",
      "Advanced creative direction",
      "Platform-specific content variations",
      "Active community management",
      "Monthly campaign planning",
      "Competitor and content opportunity review",
      "Detailed performance analysis",
      "Regular strategy calls",
      "Priority support",
    ],
    bestFor:
      "Brands that need a more complete social media function without building a full internal content and management team.",
    cta: "Choose Premium",
  },
];

const pricingFactors = [
  "Number of social media platforms",
  "Monthly content volume",
  "Video editing requirements",
  "Creative complexity",
  "Community management requirements",
  "Campaign frequency",
  "Approval workflow",
  "Reporting requirements",
];

const exclusions = [
  "Paid advertising spend",
  "Paid media management",
  "Influencer fees",
  "Professional photography",
  "Professional video shoots",
  "Models, locations or production crews",
  "Travel expenses",
  "Stock or licensed media",
  "Third-party tools or subscriptions",
  "Advanced animation or production-heavy video",
];

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   REUSABLE BUTTON
   SAME STYLE FOR EVERY CTA
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
      {/* SOFT INNER BORDER */}

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

      {/* INNER TOP LIGHT */}

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
   SECTION
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
          BACKGROUND DETAILS
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
          {/* eyebrow */}

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

          {/* heading */}

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

          {/* description */}

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
              {/* top accent */}

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

              {/* Most Popular */}

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

              {/* content */}

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
                {/* name */}

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

                {/* title */}

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

                {/* description */}

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

                {/* price */}

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

                {/* What's Included */}

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
                    {plan.inclusions.map((item, itemIndex) => (
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
                          className={`
                            text-[12.5px]
                            leading-[1.5]

                            sm:text-[13px]

                            ${
                              itemIndex === 0 &&
                              item.startsWith("Everything")
                                ? "font-semibold text-[#0B2A52]"
                                : "text-[#617991]"
                            }
                          `}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* best for */}

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
          {/* decoration */}

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
            {/* copy */}

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

            {/* button */}

            <div className="shrink-0">
              <GlassButton
                href="/contact"
                label="Get a Custom Proposal"
              />
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PRICING DETAILS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12

            grid
            w-full
            max-w-[1180px]

            gap-8

            border-y
            border-[#DCE6EF]

            py-9

            sm:mt-14
            sm:py-10

            lg:mt-16
            lg:grid-cols-2
            lg:gap-12
            lg:py-12
          "
        >
          {/* =================================================
              PRICING FACTORS
          ================================================= */}

          <div>
            <div
              className="
                flex
                items-start
                gap-3
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
                <SlidersHorizontal
                  size={16}
                  strokeWidth={1.6}
                />
              </span>

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
                  Pricing Variables
                </p>

                <h3
                  style={newYorkFont}
                  className="
                    mt-1

                    text-[21px]
                    font-medium
                    leading-[1.2]
                    tracking-[-0.025em]
                    text-[#0B2A52]

                    sm:text-[23px]
                  "
                >
                  What Can Affect Pricing?
                </h3>
              </div>
            </div>

            <div
              className="
                mt-6

                grid
                gap-x-5
                gap-y-2.5

                sm:grid-cols-2
              "
            >
              {pricingFactors.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-3
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
                      text-[12.5px]
                      leading-[1.6]
                      text-[#687F96]

                      sm:text-[13px]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              EXCLUSIONS
          ================================================= */}

          <div
            className="
              border-t
              border-[#DCE6EF]

              pt-8

              lg:border-l
              lg:border-t-0
              lg:pl-12
              lg:pt-0
            "
          >
            <div
              className="
                flex
                items-start
                gap-3
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

                  bg-[#FAF4ED]

                  text-[#B18455]
                "
              >
                <Info
                  size={16}
                  strokeWidth={1.7}
                />
              </span>

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
                  Quoted Separately
                </p>

                <h3
                  style={newYorkFont}
                  className="
                    mt-1

                    text-[21px]
                    font-medium
                    leading-[1.2]
                    tracking-[-0.025em]
                    text-[#0B2A52]

                    sm:text-[23px]
                  "
                >
                  Not Included Unless Agreed Separately
                </h3>
              </div>
            </div>

            <div
              className="
                mt-6

                grid
                gap-x-5
                gap-y-2.5

                sm:grid-cols-2
              "
            >
              {exclusions.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-3
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
                      text-[12.5px]
                      leading-[1.6]
                      text-[#687F96]

                      sm:text-[13px]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 26,
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
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[850px]

            text-center

            sm:mt-16
            lg:mt-20
          "
        >
          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-[#B79A72]
            "
          >
            Clear Scope. Clear Pricing.
          </p>

          <h3
            style={newYorkFont}
            className="
              mt-5

              text-[29px]
              font-medium
              leading-[1.1]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[33px]
              lg:text-[37px]
            "
          >
            Know What You&apos;re Paying For{" "}
            <span className="text-[#B79A72]">
              Before We Start.
            </span>
          </h3>

          <p
            className="
              mx-auto
              mt-5
              max-w-[700px]

              text-[13px]
              leading-[1.8]
              text-[#657C95]

              sm:text-[14px]
            "
          >
            Every Sharp Rays proposal clearly defines the platforms,
            deliverables, responsibilities, approval process and agreed scope
            before work begins.
          </p>

          {/* benefits */}

          <div
            className="
              mt-5

              flex
              flex-wrap
              items-center
              justify-center

              gap-x-5
              gap-y-2

              text-[9px]
              font-semibold
              uppercase
              tracking-[0.13em]
              text-[#7C90A6]

              sm:text-[10px]
            "
          >
            <span>No unnecessary activity.</span>

            <span
              aria-hidden="true"
              className="
                hidden

                h-1
                w-1

                rounded-full
                bg-[#B79A72]

                sm:block
              "
            />

            <span>No unclear deliverables.</span>
          </div>

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]

              text-[13px]
              font-medium
              leading-[1.7]
              text-[#0B2A52]

              sm:text-[14px]
            "
          >
            Just the level of social media support your business actually
            needs.
          </p>

          {/* final button */}

          <div className="mt-7">
            <GlassButton
              href="/contact"
              label="Talk About My Social Media"
            />
          </div>

          <p
            className="
              mt-6

              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#8295A8]

              sm:text-[9px]
              sm:tracking-[0.27em]
            "
          >
            Strategy · Content · Community · Growth
          </p>
        </motion.div>
      </div>
    </section>
  );
}