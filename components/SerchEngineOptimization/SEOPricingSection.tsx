"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Gift,
  Search,
  Target,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   DATA
========================================================= */

const plans = [
  {
    name: "Basic",
    price: "₹14,999",
    tagline: "Build the Right Search Foundation.",
    icon: Search,
    items: [
      "SEO Audit",
      "Keyword & Search Intent Research",
      "Technical SEO Checks",
      "Up to 5 Priority Pages / Month",
      "Internal Linking Improvements",
      "Monthly Tracking & Report",
    ],
    bonus:
      "Free Search Console & Analytics Review",
    bestFor:
      "Startups & smaller websites",
    cta: "Start With Basic",
  },

  {
    name: "Pro",
    price: "₹29,999",
    tagline:
      "Turn Search Visibility Into Consistent Growth.",
    icon: Target,
    items: [
      "Everything in Basic",
      "Advanced Keyword & Competitor Research",
      "Up to 10 Priority Pages / Month",
      "Content Gap & Content Optimization",
      "Technical SEO Monitoring",
      "AI Search Recommendations",
      "Monthly Strategy Review",
    ],
    bonus:
      "2 SEO Content Briefs + Opportunity Report",
    bestFor:
      "Growing businesses",
    cta: "Choose Pro",
    popular: true,
  },

  {
    name: "Premium",
    price: "₹49,999",
    tagline:
      "Build a Complete Organic Growth System.",
    icon: BarChart3,
    items: [
      "Everything in Pro",
      "Up to 20 Priority Pages / Month",
      "Advanced SEO Strategy",
      "Content Cluster Planning",
      "Local SEO Support",
      "AI Search & Overview Optimization",
      "Priority Support",
    ],
    bonus:
      "Competitor Growth Report + Strategy Session",
    bestFor:
      "Competitive & larger websites",
    cta: "Choose Premium",
  },
];

/* =========================================================
   MAIN
========================================================= */

export default function SEOPricingSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-pricing"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        text-[#0B2A52]

        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-280px]

            h-[500px]
            w-[850px]

            -translate-x-1/2

            rounded-full

            bg-[#EAF4FC]/70
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -right-[280px]
            top-[48%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#C6A77A]/[0.07]
            blur-[150px]
          "
        />
      </div>

      {/* CONTAINER */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1340px]

          px-5
          sm:px-7
          md:px-8
          lg:px-12
        "
      >
        {/* =====================================================
            HEADER
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
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
            <span className="h-px w-8 bg-[#C6A77A]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.27em]
                text-[#C6A77A]

                sm:text-[10px]
              "
            >
              SEO Pricing
            </span>

            <span className="h-px w-8 bg-[#C6A77A]" />
          </div>

          <h2
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[850px]

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
            SEO Plans Built Around How Far You Want to{" "}
            <span className="text-[#C6A77A]">
              Grow.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[700px]

              text-[13px]
              leading-6
              text-[#61778D]

              sm:text-[14px]
            "
          >
            Choose a starting point based on your website,
            competition and growth goals.
          </p>
        </motion.div>

        {/* =====================================================
            SMALL OFFER STRIP
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-8

            flex
            max-w-[900px]

            flex-col
            items-center
            justify-center

            gap-2

            rounded-[16px]

            border
            border-[#C6A77A]/25

            bg-[#FFF9EF]

            px-4
            py-3.5

            text-center

            sm:flex-row
            sm:gap-3
          "
        >
          <Gift
            size={14}
            strokeWidth={1.7}
            className="
              shrink-0
              text-[#B88E55]
            "
          />

          <p
            className="
              text-[10.5px]
              font-medium
              leading-5
              text-[#0B2A52]

              sm:text-[11px]
            "
          >
            <strong>
              New Client Offer:
            </strong>{" "}
            Free SEO Growth Audit + 30-Minute Strategy Call with
            any plan.
          </p>
        </motion.div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-8

            grid
            max-w-[1180px]
            grid-cols-1

            gap-4

            md:grid-cols-2
            md:gap-5

            xl:grid-cols-3
          "
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.name}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion
                    ? 0
                    : 0.65,
                  delay: reduceMotion
                    ? 0
                    : index * 0.07,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                className={`
                  group
                  relative

                  flex
                  flex-col

                  overflow-hidden

                  rounded-[22px]

                  border

                  bg-white

                  p-5

                  shadow-[0_12px_35px_rgba(11,42,82,0.045)]

                  transition-all
                  duration-300

                  sm:p-6

                  ${
                    plan.popular
                      ? `
                        border-[#3976B6]/50
                        shadow-[0_18px_45px_rgba(57,118,182,0.1)]
                      `
                      : `
                        border-[#D6E2EC]
                        hover:border-[#B7CCDC]
                      `
                  }

                  ${
                    plan.name ===
                    "Premium"
                      ? "md:col-span-2 xl:col-span-1"
                      : ""
                  }
                `}
              >
                {/* BG */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    inset-0

                    ${
                      plan.popular
                        ? `
                          bg-gradient-to-br
                          from-[#EDF6FD]
                          via-white
                          to-white
                        `
                        : `
                          bg-gradient-to-br
                          from-white
                          to-[#F7FAFC]
                        `
                    }
                  `}
                />

                {/* MOST POPULAR */}

                {plan.popular && (
                  <span
                    className="
                      absolute
                      right-4
                      top-4
                      z-20

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

                <div className="relative z-10">
                  {/* PLAN */}

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
                        h-9
                        w-9
                        shrink-0

                        items-center
                        justify-center

                        rounded-[11px]

                        ${
                          plan.popular
                            ? "bg-[#0B2A52] text-white"
                            : "bg-[#EAF4FC] text-[#0B2A52]"
                        }
                      `}
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.65}
                      />
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#C6A77A]
                      "
                    >
                      {plan.name}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    style={newYorkFont}
                    className="
                      mt-4
                      max-w-[350px]

                      text-[23px]
                      font-medium
                      leading-[1.08]
                      tracking-[-0.03em]
                      text-[#0B2A52]

                      sm:text-[25px]
                    "
                  >
                    {plan.tagline}
                  </h3>

                  {/* PRICE */}

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
                        text-[34px]
                        font-medium
                        leading-none
                        tracking-[-0.045em]
                        text-[#0B2A52]

                        sm:text-[38px]
                      "
                    >
                      {plan.price}
                    </span>

                    <span
                      className="
                        pb-1

                        text-[10px]
                        text-[#61778D]
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
                      text-[#C6A77A]
                    "
                  >
                    Starting From
                  </span>

                  {/* KEY INCLUSIONS */}

                  <div className="mt-5">
                    {plan.items.map(
                      (item) => (
                        <div
                          key={item}
                          className="
                            flex
                            items-start
                            gap-2.5

                            py-1.5
                          "
                        >
                          <Check
                            size={12}
                            strokeWidth={1.8}
                            className="
                              mt-[3px]
                              shrink-0
                              text-[#3976B6]
                            "
                          />

                          <span
                            className="
                              text-[10.5px]
                              leading-5
                              text-[#5F758B]

                              sm:text-[11px]
                            "
                          >
                            {item}
                          </span>
                        </div>
                      ),
                    )}
                  </div>

                  {/* BONUS */}

                  <div
                    className="
                      mt-5

                      flex
                      items-start
                      gap-2.5

                      rounded-[12px]

                      bg-[#FFF8ED]

                      px-3
                      py-2.5
                    "
                  >
                    <Gift
                      size={12}
                      strokeWidth={1.7}
                      className="
                        mt-[2px]
                        shrink-0
                        text-[#B88E55]
                      "
                    />

                    <p
                      className="
                        text-[9.5px]
                        font-medium
                        leading-5
                        text-[#0B2A52]
                      "
                    >
                      <span className="text-[#A77D45]">
                        Bonus:
                      </span>{" "}
                      {plan.bonus}
                    </p>
                  </div>

                  {/* BEST FOR */}

                  <p
                    className="
                      mt-4

                      text-[9.5px]
                      leading-5
                      text-[#61778D]
                    "
                  >
                    <strong className="text-[#0B2A52]">
                      Best for:
                    </strong>{" "}
                    {plan.bestFor}
                  </p>
                </div>

                {/* CTA */}

                <div
                  className="
                    relative
                    z-10

                    mt-auto
                    pt-5
                  "
                >
                  <Link
                    href="/contact"
                    className={`
                      group/button

                      flex
                      min-h-[44px]
                      w-full

                      items-center
                      justify-center
                      gap-2

                      rounded-[13px]

                      border

                      px-4
                      py-2.5

                      text-[11.5px]
                      font-medium

                      transition-all
                      duration-300

                      ${
                        plan.popular
                          ? `
                            border-[#0B2A52]
                            bg-[#0B2A52]
                            text-white

                            hover:-translate-y-0.5
                            hover:shadow-[0_9px_24px_rgba(11,42,82,0.15)]
                          `
                          : `
                            border-[#6285AD]/30
                            bg-white
                            text-[#0B2A52]

                            hover:-translate-y-0.5
                            hover:border-[#6285AD]/45
                          `
                      }
                    `}
                  >
                    {plan.cta}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-300

                        group-hover/button:translate-x-0.5
                        group-hover/button:-translate-y-0.5
                      "
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM FREE AUDIT CTA
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
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-10

            flex
            max-w-[950px]

            flex-col
            items-center
            justify-between

            gap-5

            rounded-[18px]

            border
            border-[#D5E2EC]

            bg-[linear-gradient(110deg,#EEF7FD_0%,#FFFFFF_55%,#FFF9EF_100%)]

            px-5
            py-5

            text-center

            sm:px-6

            md:flex-row
            md:text-left
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#C6A77A]
              "
            >
              Not Sure Which Plan Fits?
            </p>

            <h3
              style={newYorkFont}
              className="
                mt-1.5

                text-[21px]
                font-medium
                tracking-[-0.025em]
                text-[#0B2A52]

                sm:text-[23px]
              "
            >
              Start With a Free SEO Audit.
            </h3>
          </div>

          <Link
            href="/contact"
            className="
              group

              inline-flex
              min-h-[44px]
              w-full

              items-center
              justify-center
              gap-2

              rounded-[13px]

              border
              border-[#6285AD]/30

              bg-white

              px-5
              py-2.5

              text-[11.5px]
              font-medium
              text-[#0B2A52]

              shadow-[0_7px_22px_rgba(11,42,82,0.06)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-[0_9px_25px_rgba(98,133,173,0.13)]

              sm:w-auto
            "
          >
            Get My Free SEO Audit

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </motion.div>

        {/* SMALL NOTE */}

        <p
          className="
            mx-auto
            mt-5
            max-w-[750px]

            text-center

            text-[9px]
            leading-5
            text-[#61778D]
          "
        >
          Final scope is confirmed after reviewing your website,
          competition and SEO opportunities.
        </p>
      </div>
    </section>
  );
}