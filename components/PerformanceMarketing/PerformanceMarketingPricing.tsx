"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import {
  ArrowUpRight,
  BarChart3,
  Check,
  Layers3,
  Megaphone,
  Target,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

/* =========================================================
   FONT + MOTION
========================================================= */

const newYorkFont = {
  fontFamily:
    '"New York", "Bodoni Moda", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  items: string[];
  bestFor: string;
  cta: string;
  icon: LucideIcon;
  popular?: boolean;
};

/* =========================================================
   PRICING DATA
========================================================= */

const plans: Plan[] = [
  {
    name: "Basic",
    subtitle: "Start With Smarter Paid Media.",
    price: "₹14,999",

    items: [
      "1 Advertising Platform",
      "Campaign Setup & Management",
      "Audience & Keyword Targeting",
      "Conversion Tracking",
      "Ongoing Campaign Optimization",
      "Monthly Performance Report",
    ],

    bestFor:
      "Businesses starting or testing paid advertising.",

    cta: "Start With Basic",

    icon: Target,
  },

  {
    name: "Pro",
    subtitle: "Build a Stronger Performance System.",
    price: "₹29,999",

    items: [
      "Up to 2 Advertising Platforms",
      "Campaign Strategy & Management",
      "Conversion Tracking",
      "Retargeting Campaigns",
      "Creative & Audience Testing",
      "Ongoing Budget Optimization",
      "Monthly Strategy Review",
    ],

    bestFor:
      "Growing businesses focused on generating consistent leads or sales.",

    cta: "Choose Pro",

    icon: BarChart3,

    popular: true,
  },

  {
    name: "Premium",
    subtitle: "Scale What Performs.",
    price: "₹49,999",

    items: [
      "Multi-Channel Paid Media",
      "Advanced Campaign Strategy",
      "Conversion & Attribution Tracking",
      "Retargeting & Audience Segmentation",
      "Creative Performance Testing",
      "Landing Page Recommendations",
      "Advanced Performance Analysis",
      "Priority Strategy Support",
    ],

    bestFor:
      "Businesses ready to scale paid media across multiple campaigns or channels.",

    cta: "Choose Premium",

    icon: Layers3,
  },
];

/* =========================================================
   MAIN SECTION
========================================================= */

export default function PerformanceMarketingPricing() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="performance-marketing-pricing"
      aria-labelledby="performance-pricing-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-20
        text-[#0B2A52]

        sm:py-24
        lg:py-28
        xl:py-32
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
          -z-20
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-300px]

            h-[560px]
            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-[#E8F3FB]/75
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            -right-[300px]
            top-[45%]

            h-[560px]
            w-[560px]

            rounded-full

            bg-[#F1E3D4]/35
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -left-[260px]
            bottom-[8%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#DDEDF8]/45
            blur-[160px]
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
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 24,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            max-w-[920px]
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
            "
          >
           <span
            className="
              h-px
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.27em]
                text-[#B79A72]

                sm:text-[10px]
              "
            >
              Performance Marketing Pricing
            </span>

            <span
            className="
              h-px
              w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />

          </div>

          {/* heading */}

          <h2
            id="performance-pricing-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-6
              max-w-[900px]

              text-[2.2rem]
              font-medium
              leading-[1.04]
              tracking-[-0.045em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Choose the Right Level of{" "}
            <span className="text-[#B79A72]">
              Paid Growth Support.
            </span>
          </h2>

          {/* description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[700px]

              text-[13px]
              leading-7
              text-[#536C83]

              sm:text-[14px]
              md:text-[15px]
            "
          >
            Clear management plans built around your advertising
            channels, campaign complexity and growth objectives.
          </p>
        </motion.div>

        {/* =====================================================
            PRICING GRID
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12

            grid
            max-w-[1180px]
            grid-cols-1

            gap-5

            sm:mt-14

            md:grid-cols-2

            lg:mt-16
            xl:grid-cols-3
          "
        >
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            CUSTOM PLAN
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 22,
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
            relative

            mx-auto
            mt-10
            max-w-[1080px]

            overflow-hidden

            rounded-[22px]

            border
            border-[#C7D9E6]

            bg-[linear-gradient(110deg,#F1F8FD_0%,#FFFFFF_55%,#FCF5EE_100%)]

            px-5
            py-6

            shadow-[0_14px_40px_rgba(11,42,82,0.05)]

            sm:px-7
            sm:py-7

            md:flex
            md:items-center
            md:justify-between
            md:gap-10

            lg:px-9
          "
        >
          {/* accent */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -right-[90px]
              -top-[110px]

              h-[240px]
              w-[240px]

              rounded-full

              border
              border-[#B67D49]/15
            "
          />

          <div
            className="
              relative
              z-10
              max-w-[700px]
            "
          >
            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#B67D49]
              "
            >
              Need a Custom Plan?
            </span>

            <h3
              style={newYorkFont}
              className="
                mt-2

                text-[24px]
                font-medium
                leading-[1.12]
                tracking-[-0.03em]
                text-[#0B2A52]

                sm:text-[27px]
              "
            >
              Your Media Strategy Should Match Your Opportunity.
            </h3>

            <p
              className="
                mt-3
                max-w-[650px]

                text-[12px]
                leading-6
                text-[#5B7187]

                sm:text-[13px]
              "
            >
              Have a larger advertising budget, different platform
              mix or more complex campaign requirements? We can build
              a custom performance marketing plan around your
              objectives.
            </p>
          </div>

          <div
            className="
              relative
              z-10

              mt-5
              shrink-0

              md:mt-0
            "
          >
            <GlassButton
              href="/contact"
              label="Get a Custom Proposal"
            />
          </div>
        </motion.div>

        {/* =====================================================
            IMPORTANT NOTE
        ===================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-8
            max-w-[1080px]

            rounded-[18px]

            border
            border-[#D7E3EC]

            bg-white/80

            px-5
            py-5

            shadow-[0_8px_28px_rgba(11,42,82,0.035)]

            sm:px-6
          "
        >
          <div
            className="
              flex
              flex-col

              gap-4

              sm:flex-row
              sm:items-start
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

                bg-[#EAF4FB]

                text-[#0D5A93]
              "
            >
              <Megaphone
                size={15}
                strokeWidth={1.7}
              />
            </span>

            <div>
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#B67D49]
                "
              >
                Important
              </span>

              <p
                className="
                  mt-1.5

                  text-[11.5px]
                  font-medium
                  leading-6
                  text-[#0B2A52]

                  sm:text-[12.5px]
                "
              >
                Advertising spend is{" "}
                <strong>not included</strong> in the management fee
                and is paid separately to the advertising platforms.
              </p>

              <p
                className="
                  mt-1

                  text-[10.5px]
                  leading-5
                  text-[#60768B]

                  sm:text-[11.5px]
                "
              >
                Final pricing may vary based on monthly ad spend,
                number of platforms, campaign complexity, creative
                requirements and tracking setup.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PLATFORM LINE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: reduceMotion ? 1 : 0.9,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            mx-auto
            mt-8

            flex
            max-w-[720px]

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
              to-[#8CB4D0]/50
            "
          />

          <span
            className="
              shrink-0

              text-[7.5px]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-[#536F8A]

              sm:text-[8.5px]
            "
          >
            Google Ads · Meta Ads · YouTube · LinkedIn Ads
          </span>

          <span
            className="
              h-px
              flex-1

              bg-gradient-to-l
              from-transparent
              to-[#B67D49]/45
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   PRICING CARD
========================================================= */

function PricingCard({
  plan,
  index,
  reduceMotion,
}: {
  plan: Plan;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = plan.icon;

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : index * 0.07,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className={`
        group
        relative

        flex
        min-w-0
        flex-col

        overflow-hidden

        rounded-[22px]

        border

        p-5

        transition-all
        duration-500

        sm:p-6

        ${
          plan.popular
            ? `
              border-[#78AED3]

              bg-gradient-to-br
              from-[#F3F9FD]
              via-white
              to-[#EDF6FC]

              shadow-[0_20px_55px_rgba(39,119,183,0.11)]
            `
            : `
              border-[#D6E2EB]

              bg-white

              shadow-[0_12px_36px_rgba(11,42,82,0.045)]

              hover:border-[#ABC7DA]
              hover:shadow-[0_18px_45px_rgba(11,42,82,0.075)]
            `
        }

        ${
          plan.name === "Premium"
            ? "md:col-span-2 xl:col-span-1"
            : ""
        }
      `}
    >
      {/* soft glow */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          -right-[80px]
          -top-[100px]

          h-[220px]
          w-[220px]

          rounded-full

          blur-[60px]

          transition-opacity
          duration-500

          ${
            plan.popular
              ? "bg-[#CBE4F5]/60"
              : "bg-[#DDEBF5]/45 opacity-0 group-hover:opacity-100"
          }
        `}
      />

      {/* =====================================================
          TOP
      ===================================================== */}

      <div
        className="
          relative
          z-10
        "
      >
        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className={`
                flex
                h-10
                w-10
                shrink-0

                items-center
                justify-center

                rounded-[12px]

                ${
                  plan.popular
                    ? "bg-[#0B2A52] text-white"
                    : "bg-[#E9F3FA] text-[#0D5A93]"
                }
              `}
            >
              <Icon
                size={16}
                strokeWidth={1.7}
              />
            </span>

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.19em]
                text-[#B67D49]
              "
            >
              {plan.name}
            </span>
          </div>

          {plan.popular && (
            <span
              className="
                rounded-full

                bg-[#0B2A52]

                px-3
                py-1.5

                text-[7px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-white
              "
            >
              Most Popular
            </span>
          )}
        </div>

        {/* headline */}

        <h3
          style={newYorkFont}
          className="
            mt-5

            text-[23px]
            font-medium
            leading-[1.1]
            tracking-[-0.03em]
            text-[#0B2A52]

            sm:text-[25px]
          "
        >
          {plan.subtitle}
        </h3>

        {/* price */}

        <div
          className="
            mt-5

            flex
            flex-wrap
            items-end

            gap-1.5
          "
        >
          <span
            style={newYorkFont}
            className="
              text-[35px]
              font-medium
              leading-none
              tracking-[-0.045em]
              text-[#0B2A52]

              sm:text-[39px]
            "
          >
            {plan.price}
          </span>

          <span
            className="
              pb-1
              text-[10px]
              text-[#637A8E]
            "
          >
            / month
          </span>
        </div>

        <span
          className="
            mt-1.5
            block

            text-[7px]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-[#B67D49]
          "
        >
          Starting From
        </span>

        {/* =====================================================
            INCLUSIONS
        ===================================================== */}

        <div className="mt-5">
          <span
            className="
              text-[7.5px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#0B2A52]/40
            "
          >
            Includes
          </span>

          <div className="mt-3 space-y-1">
            {plan.items.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-start
                  gap-2.5
                  py-1
                "
              >
                <Check
                  size={12}
                  strokeWidth={1.9}
                  className="
                    mt-[3px]
                    shrink-0
                    text-[#2477B4]
                  "
                />

                <span
                  className="
                    text-[10.5px]
                    leading-5
                    text-[#536D84]

                    sm:text-[11px]
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BEST FOR
        ===================================================== */}

        <div
          className="
            mt-5

            rounded-[13px]

            bg-[#F5F9FC]

            px-3.5
            py-3
          "
        >
          <span
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.17em]
              text-[#B67D49]
            "
          >
            Best For
          </span>

          <p
            className="
              mt-1

              text-[10px]
              leading-5
              text-[#60768B]

              sm:text-[10.5px]
            "
          >
            {plan.bestFor}
          </p>
        </div>
      </div>

      {/* =====================================================
          CTA
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mt-auto
          pt-5
        "
      >
        <GlassButton
          href="/contact"
          label={plan.cta}
          full
        />
      </div>
    </motion.article>
  );
}

/* =========================================================
   GLASS CTA
========================================================= */

function GlassButton({
  href,
  label,
  full = false,
}: {
  href: string;
  label: string;
  full?: boolean;
}) {
  return (
    <Link
      href={href}
      style={newYorkFont}
      className={`
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

        ${
          full
            ? "w-full"
            : "w-full sm:w-auto"
        }
      `}
    >
      {/* inner border */}

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

      {/* inner light */}

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

      <ArrowUpRight
        size={13}
        strokeWidth={1.5}
        className="
          relative
          z-10
          ml-2

          transition-transform
          duration-300

          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
      />
    </Link>
  );
}