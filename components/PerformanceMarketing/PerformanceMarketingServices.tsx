"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Camera,
  CheckCircle2,
  Images,
  Lightbulb,
  Megaphone,
  MousePointerClick,
  RefreshCcw,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

/* =========================================================
   SERVICES DATA
========================================================= */

type Service = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  tone: "blue" | "warm";
  note?: string;
  noteLabel?: string;
  wide?: boolean;
  brand?: "google" | "social";
};

const services: Service[] = [
  {
    number: "01",
    title: "Paid Media Strategy",
    subtitle: "Start With the Business Goal.",
    description:
      "Before choosing campaigns or budgets, we define what paid media is expected to achieve.",
    items: [
      "Business objectives",
      "Target audiences",
      "Offers",
      "Customer journey",
      "Advertising channels",
      "Campaign structure",
      "Conversion goals",
      "Budget priorities",
      "Measurement requirements",
    ],
    icon: Target,
    tone: "blue",
  },
  {
    number: "02",
    title: "Google Ads Management",
    subtitle: "Capture Existing Demand.",
    description:
      "Google Ads can help put your business in front of people actively searching for relevant products, services or solutions.",
    items: [
      "Google Search campaigns",
      "Performance Max",
      "Display advertising",
      "YouTube campaigns",
      "Remarketing",
      "Shopping campaigns where relevant",
      "Lead generation campaigns",
    ],
    note:
      "Campaign selection depends on your business, available data and advertising objectives.",
    icon: Search,
    tone: "warm",
    brand: "google",
  },
  {
    number: "03",
    title: "Paid Social Advertising",
    subtitle: "Create Demand Where Your Audience Spends Attention.",
    description:
      "Paid social can help businesses expand reach, generate demand and reconnect with potential customers.",
    items: [
      "Meta Ads",
      "Instagram advertising",
      "Facebook advertising",
      "LinkedIn Ads where relevant",
      "Audience testing",
      "Lead-generation campaigns",
      "Retargeting",
      "Creative testing",
    ],
    icon: Megaphone,
    tone: "blue",
    brand: "social",
  },
  {
    number: "04",
    title: "Performance Creative",
    subtitle: "Better Targeting Still Needs a Reason to Stop.",
    description:
      "Advertising creative plays a major role in whether an audience notices, understands and acts on an offer.",
    items: [
      "Static ads",
      "Carousel ads",
      "Short-form video concepts",
      "Ad copy",
      "Hooks",
      "Headlines",
      "Calls to action",
      "Creative variations",
      "Campaign messaging",
    ],
    note:
      "We develop creative around the audience, offer and stage of the journey rather than simply producing more variations.",
    icon: Images,
    tone: "warm",
  },
  {
    number: "05",
    title: "Landing Page Optimization",
    subtitle: "The Click Is Only Half the Job.",
    description:
      "An effective campaign can still underperform if the page people reach creates friction.",
    items: [
      "Message consistency",
      "Page hierarchy",
      "Offer clarity",
      "Calls to action",
      "Trust signals",
      "Mobile experience",
      "Form friction",
      "Conversion paths",
    ],
    note:
      "Make the next action easier to understand and easier to take.",
    noteLabel: "THE OBJECTIVE",
    icon: MousePointerClick,
    tone: "blue",
  },
  {
    number: "06",
    title: "Conversion Tracking & Measurement",
    subtitle: "Measure What Matters.",
    description:
      "Performance marketing requires a clear definition of what counts as a meaningful result.",
    items: [
      "Purchases",
      "Qualified leads",
      "Form submissions",
      "Calls",
      "Bookings",
      "Sign-ups",
      "Downloads",
      "Other valuable actions",
    ],
    note:
      "Measurement gives campaigns stronger information for understanding performance and deciding what should be optimized next.",
    icon: BarChart3,
    tone: "warm",
  },
  {
    number: "07",
    title: "Retargeting",
    subtitle: "Reconnect With Existing Interest.",
    description:
      "Not every potential customer converts during the first interaction.",
    items: [
      "Visited your website",
      "Viewed important pages",
      "Engaged with content",
      "Interacted with advertisements",
      "Started but did not complete an action",
    ],
    note:
      "Where appropriate, we use retargeting as part of the wider customer journey rather than repeatedly showing the same message to everyone.",
    icon: RefreshCcw,
    tone: "blue",
  },
  {
    number: "08",
    title: "Campaign Optimization",
    subtitle: "Improve the Economics, Not Just the Dashboard.",
    description: "Campaigns require ongoing decisions.",
    items: [
      "Audience performance",
      "Budget allocation",
      "Search behaviour",
      "Lead quality",
      "Creative performance",
      "Cost per result",
      "Conversion rates",
      "Conversion value",
      "Campaign structure",
      "Landing-page behaviour",
    ],
    note:
      "The objective is continuous improvement rather than constant activity.",
    icon: TrendingUp,
    tone: "warm",
    wide: true,
  },
];

/* =========================================================
   MAIN SECTION
========================================================= */

export default function PerformanceMarketingServices() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="performance-services"
      aria-labelledby="performance-services-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* left warm shape */}
        <div
          className="
            absolute
            -left-[150px]
            top-[40px]
            h-[310px]
            w-[310px]
            rounded-full
            bg-[#F7F0E7]
            opacity-80
          "
        />

        {/* top right blue shape */}
        <div
          className="
            absolute
            right-[4%]
            top-[-120px]
            h-[360px]
            w-[440px]
            rotate-[18deg]
            rounded-[90px]
            bg-[#EAF3F9]
            opacity-80
          "
        />

        {/* right rings */}
        <div
          className="
            absolute
            -right-[230px]
            top-[250px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#8DB5D2]/30
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            top-[300px]
            h-[400px]
            w-[400px]
            rounded-full
            border
            border-[#8DB5D2]/25
          "
        />

        <div
          className="
            absolute
            bottom-[-230px]
            right-[-140px]
            h-[480px]
            w-[480px]
            rounded-full
            border
            border-[#B88652]/35
          "
        />

        <div
          className="
            absolute
            bottom-[-170px]
            right-[-90px]
            h-[380px]
            w-[380px]
            rounded-full
            border
            border-[#8DB5D2]/25
          "
        />

        {/* soft glow */}
        <div
          className="
            absolute
            left-[18%]
            top-[240px]
            h-[380px]
            w-[480px]
            rounded-full
            bg-[#EAF4FB]/55
            blur-[130px]
          "
        />
      </div>

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            HERO / INTRO AREA
        ===================================================== */}

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -24,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.7,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                ease,
              }}
              className="
                mb-6
                flex
                items-center
                gap-4
              "
            >
              <span className="h-px w-8 bg-[#B47B45]" />

              <span
                className="
                  text-[0.66rem]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#365F8F]
                  sm:text-[0.7rem]
                "
              >
                Our Performance Marketing Services
              </span>
            </motion.div>

            <motion.h2
              id="performance-services-heading"
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
                amount: 0.55,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: reduceMotion ? 0 : 0.05,
                ease,
              }}
              className="
                max-w-[700px]
                text-[2.3rem]
                font-medium
                leading-[1.03]
                tracking-[-0.045em]
                text-[#082B59]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Everything Behind
              <br />
              Better Paid Performance.
              <br />

              <span
                className="
                  font-serif
                  font-normal
                  italic
                  tracking-[-0.025em]
                  text-[#B38150]
                "
              >
                Connected.
              </span>
            </motion.h2>

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
                amount: 0.5,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : 0.14,
                ease,
              }}
              className="
                mt-7
                max-w-[570px]
                text-[0.98rem]
                leading-[1.75]
                text-[#48627E]
              "
            >
              <p>
                Performance does not come from one campaign setting.
              </p>

              <p>
                It comes from bringing strategy, media buying, creative,
                landing experiences and measurement together.
              </p>
            </motion.div>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scaleX: 0,
                    }
              }
              whileInView={{
                opacity: 1,
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.25,
                ease,
              }}
              className="
                mt-7
                h-px
                max-w-[460px]
                origin-left
                bg-gradient-to-r
                from-[#0B447D]
                via-[#82A7C6]
                to-transparent
              "
            />

            <motion.p
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                    }
              }
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.34,
              }}
              className="
                mt-5
                text-[0.6rem]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#365D87]
              "
            >
              Strategy · Execution · Optimization · Growth
            </motion.p>
          </div>

          {/* =====================================================
              DASHBOARD VISUAL
          ===================================================== */}

          <PerformanceDashboard reduceMotion={reduceMotion} />
        </div>

        {/* =====================================================
            SERVICE GRID
        ===================================================== */}

        <div
          className="
            mt-20
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM DECORATIVE MESSAGE
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
            amount: 0.6,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            ml-auto
            mt-12
            hidden
            w-fit
            items-start
            gap-5
            lg:flex
          "
        >
          <span className="mt-2 h-px w-10 bg-[#B38150]" />

          <p
            className="
              text-[0.58rem]
              font-semibold
              uppercase
              leading-[1.8]
              tracking-[0.26em]
              text-[#42668E]
            "
          >
            Strategy
            <br />
            Ads
            <br />
            Creative
            <br />
            Conversions
            <br />
            Growth
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   PERFORMANCE DASHBOARD
========================================================= */

function PerformanceDashboard({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 45,
              scale: 0.97,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
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
        mx-auto
        min-h-[390px]
        w-full
        max-w-[650px]
        sm:min-h-[430px]
      "
    >
      {/* handwritten-style note */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -5, 0],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-0
          top-0
          hidden
          rotate-[-8deg]
          sm:block
        "
      >
        <p
          className="
            font-serif
            text-[0.78rem]
            italic
            leading-[1.2]
            text-[#244F80]
          "
        >
          Turn
          <br />
          attention into
          <br />
          real results
        </p>

        <div className="mt-1 h-px w-16 rotate-[-18deg] bg-[#244F80]" />
      </motion.div>

      {/* large dashboard wrapper */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -5, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[4%]
          top-[55px]
          w-[78%]
          rounded-[24px]
          border
          border-[#DCE7EF]
          bg-white/90
          p-4
          shadow-[0_25px_70px_rgba(11,42,82,0.10)]
          backdrop-blur-xl
          sm:left-[5%]
          sm:w-[80%]
        "
      >
        <div
          className="
            grid
            gap-4
            sm:grid-cols-[1.08fr_0.92fr]
          "
        >
          {/* Revenue */}
          <div
            className="
              rounded-[18px]
              bg-[#F7FAFD]
              p-4
            "
          >
            <p
              className="
                text-[0.55rem]
                font-medium
                text-[#637A92]
              "
            >
              Total Revenue
            </p>

            <div className="mt-1 flex items-end justify-between gap-3">
              <p
                className="
                  text-[1.35rem]
                  font-bold
                  tracking-[-0.03em]
                  text-[#0B2A52]
                "
              >
                $128,450
              </p>

              <span
                className="
                  rounded-md
                  bg-[#E7F7EE]
                  px-2
                  py-1
                  text-[0.52rem]
                  font-semibold
                  text-[#21845D]
                "
              >
                ↗ +32%
              </span>
            </div>

            <div className="mt-6 h-[95px] w-full">
              <svg
                viewBox="0 0 300 100"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="performanceChartFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#4399E3"
                      stopOpacity="0.22"
                    />
                    <stop
                      offset="100%"
                      stopColor="#4399E3"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <motion.path
                  d="
                    M0,82
                    C20,68 30,70 48,75
                    C70,82 78,65 98,56
                    C120,46 135,43 152,51
                    C170,59 183,59 198,44
                    C220,23 236,37 252,26
                    C272,13 284,14 300,7
                    L300,100
                    L0,100
                    Z
                  "
                  fill="url(#performanceChartFill)"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 1,
                  }}
                />

                <motion.path
                  d="
                    M0,82
                    C20,68 30,70 48,75
                    C70,82 78,65 98,56
                    C120,46 135,43 152,51
                    C170,59 183,59 198,44
                    C220,23 236,37 252,26
                    C272,13 284,14 300,7
                  "
                  fill="none"
                  stroke="#378FE0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          pathLength: 0,
                        }
                  }
                  whileInView={{
                    pathLength: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 1.7,
                    ease,
                  }}
                />
              </svg>
            </div>

            <div
              className="
                mt-1
                flex
                justify-between
                text-[0.46rem]
                text-[#8B9BAD]
              "
            >
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          {/* campaign performance */}
          <div
            className="
              rounded-[18px]
              bg-[#F8FBFD]
              p-4
            "
          >
            <p
              className="
                text-[0.55rem]
                font-semibold
                text-[#24486C]
              "
            >
              Campaign Performance
            </p>

            <div
              className="
                mt-6
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  relative
                  h-[82px]
                  w-[82px]
                  shrink-0
                  rounded-full
                "
                style={{
                  background:
                    "conic-gradient(#0B4177 0deg 151deg, #358DD2 151deg 252deg, #69B3EC 252deg 317deg, #CDE5F6 317deg 360deg)",
                }}
              >
                <div
                  className="
                    absolute
                    inset-[14px]
                    rounded-full
                    bg-white
                  "
                />
              </div>

              <div className="min-w-0 flex-1 space-y-2">
                <ChartLegend
                  color="#0B4177"
                  label="Search"
                  value="42%"
                />

                <ChartLegend
                  color="#358DD2"
                  label="Social"
                  value="28%"
                />

                <ChartLegend
                  color="#69B3EC"
                  label="Display"
                  value="18%"
                />

                <ChartLegend
                  color="#CDE5F6"
                  label="Other"
                  value="12%"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* conversion floating card */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 7, 0],
              }
        }
        transition={{
          duration: 5.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[18px]
          right-[16%]
          z-20
          w-[190px]
          rounded-[18px]
          border
          border-[#D9E6F0]
          bg-white
          p-4
          shadow-[0_18px_45px_rgba(11,42,82,0.11)]
          sm:right-[14%]
        "
      >
        <p
          className="
            text-[0.54rem]
            font-medium
            text-[#627990]
          "
        >
          Conversions
        </p>

        <div className="mt-1 flex items-end justify-between gap-4">
          <div>
            <p
              className="
                text-[1.2rem]
                font-bold
                text-[#0B2A52]
              "
            >
              1,024
            </p>

            <span
              className="
                mt-1
                inline-block
                rounded
                bg-[#E9F8EF]
                px-1.5
                py-0.5
                text-[0.46rem]
                font-semibold
                text-[#21815C]
              "
            >
              ↗ +18%
            </span>
          </div>

          <div className="flex h-12 items-end gap-1">
            {[17, 28, 21, 38, 31, 48].map((height, index) => (
              <motion.span
                key={index}
                initial={
                  reduceMotion
                    ? false
                    : {
                        height: 0,
                      }
                }
                whileInView={{
                  height,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="
                  block
                  w-[5px]
                  rounded-t
                  bg-[#429AE0]
                "
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* gold conversion block */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -7, 0],
              }
        }
        transition={{
          duration: 6.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[55px]
          right-0
          z-30
          hidden
          w-[145px]
          rounded-[18px]
          bg-gradient-to-br
          from-[#B89565]
          to-[#9E7748]
          p-4
          text-white
          shadow-[0_18px_45px_rgba(110,77,41,0.20)]
          sm:block
        "
      >
        <p
          className="
            font-serif
            text-[1.02rem]
            font-medium
            leading-[1.1]
          "
        >
          More
          <br />
          Customers
        </p>

        <div
          className="
            mt-3
            flex
            items-center
            justify-between
          "
        >
          <span className="text-[0.52rem] text-white/80">
            Real Growth
          </span>

          <span
            className="
              grid
              h-7
              w-7
              place-items-center
              rounded-full
              bg-[#F0D7B3]
              text-[#76542F]
            "
          >
            <ArrowRight size={12} />
          </span>
        </div>
      </motion.div>

      {/* small dot */}
      <div
        className="
          absolute
          bottom-[38px]
          left-[2%]
          h-10
          w-10
          rounded-full
          bg-[#DCE8F1]
          shadow-[inset_0_0_15px_rgba(11,42,82,0.04)]
        "
      />
    </motion.div>
  );
}

/* =========================================================
   CHART LEGEND
========================================================= */

function ChartLegend({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-2
        text-[0.48rem]
      "
    >
      <div className="flex items-center gap-2">
        <span
          className="
            h-2
            w-2
            rounded-[2px]
          "
          style={{
            backgroundColor: color,
          }}
        />

        <span className="text-[#516A82]">
          {label}
        </span>
      </div>

      <span
        className="
          font-semibold
          text-[#1F466B]
        "
      >
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
  index,
  reduceMotion,
}: {
  service: Service;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = service.icon;
  const ease = [0.22, 1, 0.36, 1] as const;

  const isBlue = service.tone === "blue";

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 38,
              x:
                index % 3 === 0
                  ? -18
                  : index % 3 === 2
                    ? 18
                    : 0,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.16,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.72,
        delay: reduceMotion ? 0 : (index % 3) * 0.08,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
            }
      }
      className={`
        group
        relative
        flex
        min-h-[620px]
        flex-col
        overflow-hidden
        rounded-[20px]
        border
        p-6
        transition-all
        duration-500
        sm:p-7

        ${
          isBlue
            ? `
                border-[#C6DCEB]
                bg-[#F3F9FD]
                hover:border-[#78A9CB]
                hover:shadow-[0_22px_60px_rgba(24,92,143,0.11)]
              `
            : `
                border-[#E2D5C6]
                bg-[#FCF9F5]
                hover:border-[#C29A6C]
                hover:shadow-[0_22px_60px_rgba(126,85,43,0.10)]
              `
        }

        ${
          service.wide
            ? `
                lg:col-span-2
                lg:min-h-[430px]
              `
            : ""
        }
      `}
    >
      {/* card glow */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-[230px]
          w-[230px]
          rounded-full
          opacity-0
          blur-[70px]
          transition-opacity
          duration-500
          group-hover:opacity-100

          ${
            isBlue
              ? "bg-[#BFDDF1]/70"
              : "bg-[#EBD5BB]/60"
          }
        `}
      />

      {/* number */}
      <span
        className="
          absolute
          right-5
          top-5
          font-serif
          text-[0.85rem]
          text-[#697D90]
        "
      >
        {service.number}
      </span>

      {/* icon / brand */}
      <div className="relative z-10">
        {service.brand === "google" ? (
          <GoogleBadge />
        ) : service.brand === "social" ? (
          <SocialBadge />
        ) : (
          <div
            className={`
              grid
              h-14
              w-14
              place-items-center
              rounded-full
              border
              bg-white
              shadow-[0_7px_18px_rgba(11,42,82,0.06)]

              ${
                isBlue
                  ? "border-[#BED7E8] text-[#0B477B]"
                  : "border-[#E2D3C3] text-[#0B3766]"
              }
            `}
          >
            <Icon size={25} strokeWidth={1.65} />
          </div>
        )}
      </div>

      {/* title */}
      <h3
        className="
          relative
          z-10
          mt-5
          max-w-[430px]
          font-serif
          text-[1.42rem]
          font-semibold
          leading-[1.08]
          tracking-[-0.025em]
          text-[#082B59]
        "
      >
        {service.title}
      </h3>

      <p
        className="
          relative
          z-10
          mt-2
          max-w-[470px]
          text-[0.92rem]
          font-medium
          leading-[1.4]
          text-[#214E79]
        "
      >
        {service.subtitle}
      </p>

      <p
        className="
          relative
          z-10
          mt-4
          max-w-[540px]
          text-[0.84rem]
          leading-[1.55]
          text-[#516A82]
        "
      >
        {service.description}
      </p>

      {/* checklist */}
      <div
        className={`
          relative
          z-10
          mt-5
          grid
          gap-x-8
          gap-y-1.5

          ${
            service.wide
              ? "sm:grid-cols-2"
              : "grid-cols-1"
          }
        `}
      >
        {service.items.map((item) => (
          <div
            key={item}
            className="
              flex
              items-start
              gap-2.5
            "
          >
            <CheckCircle2
              size={14}
              strokeWidth={1.7}
              className="
                mt-[2px]
                shrink-0
                text-[#163F68]
              "
            />

            <span
              className="
                text-[0.77rem]
                leading-[1.35]
                text-[#3F5C78]
              "
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* optional highlight note */}
      {service.note &&
        (service.noteLabel ? (
          <div
            className="
              relative
              z-10
              mt-5
              flex
              gap-3
              rounded-[15px]
              border
              border-[#E5D8C9]
              bg-[#FEFAF4]
              px-4
              py-3.5
            "
          >
            <span
              className="
                grid
                h-8
                w-8
                shrink-0
                place-items-center
                rounded-full
                bg-white
                text-[#B17A43]
              "
            >
              <Lightbulb size={16} strokeWidth={1.7} />
            </span>

            <div>
              <p
                className="
                  text-[0.46rem]
                  font-bold
                  tracking-[0.16em]
                  text-[#A07043]
                "
              >
                {service.noteLabel}
              </p>

              <p
                className="
                  mt-1
                  text-[0.76rem]
                  font-medium
                  leading-[1.4]
                  text-[#254A6C]
                "
              >
                {service.note}
              </p>
            </div>
          </div>
        ) : (
          <p
            className="
              relative
              z-10
              mt-5
              text-[0.73rem]
              leading-[1.5]
              text-[#687E92]
            "
          >
            {service.note}
          </p>
        ))}

      {/* bottom */}
      <div
        className="
          relative
          z-10
          mt-auto
          flex
          items-center
          justify-between
          pt-7
        "
      >
        <a
          href="#contact"
          className="
            group/link
            inline-flex
            items-center
            gap-3
            text-[0.76rem]
            font-semibold
            text-[#0B315D]
          "
        >
          Learn More

          <ArrowRight
            size={14}
            strokeWidth={1.6}
            className="
              transition-transform
              duration-300
              group-hover/link:translate-x-1
            "
          />
        </a>

        <span
          className={`
            grid
            h-9
            w-9
            place-items-center
            rounded-full
            text-white
            shadow-[0_8px_20px_rgba(11,42,82,0.12)]
            transition-all
            duration-300
            group-hover:rotate-[-8deg]
            group-hover:scale-105

            ${
              isBlue
                ? "bg-[#274E73]"
                : "bg-[#B38A52]"
            }
          `}
        >
          <ArrowRight size={14} strokeWidth={1.7} />
        </span>
      </div>
    </motion.article>
  );
}

/* =========================================================
   GOOGLE BADGE
========================================================= */

function GoogleBadge() {
  return (
    <div
      className="
        grid
        h-14
        w-14
        place-items-center
        rounded-full
        border
        border-[#E1D7CB]
        bg-white
        shadow-[0_7px_18px_rgba(11,42,82,0.06)]
      "
    >
      <span
        className="
          text-[1.65rem]
          font-bold
          leading-none
          text-[#4285F4]
        "
      >
        G
      </span>
    </div>
  );
}

/* =========================================================
   SOCIAL BADGE
========================================================= */

function SocialBadge() {
  return (
    <div
      className="
        flex
        h-14
        items-center
        gap-3
      "
    >
      <div
        className="
          grid
          h-12
          w-12
          place-items-center
          rounded-full
          border
          border-[#C6DBEA]
          bg-white
          text-[#1976D2]
          shadow-[0_7px_18px_rgba(11,42,82,0.05)]
        "
      >
        <span
          className="
            text-[1.35rem]
            font-semibold
          "
        >
          ∞
        </span>
      </div>

      <Camera
        size={24}
        strokeWidth={1.8}
        className="text-[#D54679]"
      />

      <div
        className="
          grid
          h-7
          w-7
          place-items-center
          rounded-[4px]
          bg-[#174A7E]
          text-white
        "
      >
        <span className="text-[0.78rem] font-bold leading-none">in</span>
      </div>
    </div>
  );
}