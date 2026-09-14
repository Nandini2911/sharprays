"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Crosshair,
  Eye,
  Lightbulb,
  MonitorUp,
  MousePointerClick,
  RefreshCcw,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type ChannelTone =
  | "google"
  | "pmax"
  | "youtube"
  | "display"
  | "meta"
  | "linkedin"
  | "retarget";

type Channel = {
  number: string;
  title: string;
  description: string;
  job: string;
  icon: LucideIcon;
  tone: ChannelTone;
};

/* =========================================================
   CHANNELS
========================================================= */

const channels: Channel[] = [
  {
    number: "01",
    title: "Google Search",
    description:
      "Capture demand from people actively searching for relevant products or services.",
    job: "Capture Active Demand",
    icon: Search,
    tone: "google",
  },
  {
    number: "02",
    title: "Performance Max",
    description:
      "Use Google's campaign ecosystem to pursue defined conversion goals across eligible Google inventory where the strategy supports it.",
    job: "Pursue Conversion Goals",
    icon: Sparkles,
    tone: "pmax",
  },
  {
    number: "03",
    title: "YouTube",
    description:
      "Use video to reach, educate and reconnect with relevant audiences.",
    job: "Reach. Educate. Reconnect.",
    icon: Video,
    tone: "youtube",
  },
  {
    number: "04",
    title: "Display",
    description:
      "Build visibility or support remarketing across relevant placements.",
    job: "Support Visibility",
    icon: MonitorUp,
    tone: "display",
  },
  {
    number: "05",
    title: "Meta Ads",
    description:
      "Reach and convert audiences across Facebook and Instagram using creative-led advertising.",
    job: "Create & Convert Demand",
    icon: Users,
    tone: "meta",
  },
  {
    number: "06",
    title: "LinkedIn Ads",
    description:
      "For relevant B2B strategies, reach professional audiences based on role, company and other business context.",
    job: "Reach B2B Audiences",
    icon: BriefcaseBusiness,
    tone: "linkedin",
  },
  {
    number: "07",
    title: "Retargeting",
    description:
      "Reconnect with people who already know something about your business.",
    job: "Reconnect With Intent",
    icon: RefreshCcw,
    tone: "retarget",
  },
];

const leftChannels = [channels[0], channels[2], channels[4]];
const rightChannels = [channels[1], channels[3], channels[5]];
const retargeting = channels[6];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ChannelStrategySection() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="channel-strategy"
      aria-labelledby="channel-strategy-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          PREMIUM THEME BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(135deg,#FFFFFF_0%,#FCFDFE_34%,#F3F8FC_70%,#FFFFFF_100%)]
          "
        />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  backgroundPosition: [
                    "0% 40%",
                    "100% 50%",
                    "65% 100%",
                    "0% 40%",
                  ],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse at 16% 40%,
                rgba(210,232,248,0.46) 0%,
                rgba(239,248,253,0.10) 39%,
                transparent 69%
              ),
              radial-gradient(
                ellipse at 84% 34%,
                rgba(202,226,243,0.42) 0%,
                rgba(239,247,252,0.08) 39%,
                transparent 67%
              ),
              radial-gradient(
                ellipse at 50% 92%,
                rgba(221,237,249,0.32) 0%,
                transparent 60%
              )
            `,
            backgroundSize: "160% 160%",
          }}
          className="absolute inset-0"
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
          max-w-[1420px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="mx-auto max-w-[960px] text-center">
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
              amount: 0.7,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.62,
              ease,
            }}
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-9 bg-[#B67D49]" />

            <span
              className="
                text-[0.66rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#4E7597]
                sm:text-[0.7rem]
              "
            >
              Paid Media Channels
            </span>

            <span className="h-px w-9 bg-[#B67D49]" />
          </motion.div>

          <motion.h2
            id="channel-strategy-heading"
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
              amount: 0.55,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.82,
              delay: reduceMotion ? 0 : 0.05,
              ease,
            }}
            className="
              mt-5
              text-[2.3rem]
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
            Be Where the{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                text-[#4D82AE]
              "
            >
              Opportunity Is.
            </span>
          </motion.h2>

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
              amount: 0.6,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.72,
              delay: reduceMotion ? 0 : 0.11,
              ease,
            }}
            className="
              mx-auto
              mt-6
              max-w-[800px]
              text-[0.98rem]
              leading-[1.7]
              text-[#506981]
              sm:text-[1rem]
            "
          >
            <p>
              Not every advertising platform makes sense for every business.
            </p>

            <p className="mt-1">
              The right media mix depends on where demand exists, where your
              audience spends attention and what action you need them to take.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP CHANNEL ECOSYSTEM
        ===================================================== */}

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
            amount: 0.15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.1,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-14
            hidden
            max-w-[1260px]
            lg:grid
            lg:grid-cols-[1fr_1.06fr_1fr]
            lg:items-start
            lg:gap-x-16
          "
        >
          {/* =================================================
              LEFT CHANNELS
          ================================================= */}

          <div className="space-y-5 pt-2">
            {leftChannels.map((channel, index) => (
              <ChannelCard
                key={channel.number}
                channel={channel}
                index={index}
                side="left"
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              CENTER SYSTEM
          ================================================= */}

          <div className="relative">
            <ChannelStrategyCore reduceMotion={reduceMotion} />

            {/* RETARGETING */}

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
                amount: 0.45,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : 0.2,
                ease,
              }}
              className="
                relative
                mx-auto
                mt-6
                max-w-[410px]
              "
            >
              {/* VERTICAL CONNECTION */}

              <div
                className="
                  absolute
                  -top-6
                  left-1/2
                  flex
                  h-6
                  -translate-x-1/2
                  flex-col
                  items-center
                "
              >
                <span
                  className="
                    h-full
                    w-px
                    bg-[#C8A06F]
                  "
                />

                <span
                  className="
                    absolute
                    -top-1
                    h-2
                    w-2
                    rounded-full
                    bg-[#C59A63]
                    shadow-[0_0_0_4px_rgba(197,154,99,0.10)]
                  "
                />
              </div>

              <div
                className="
                  group
                  rounded-[1.1rem]
                  border
                  border-[#C9DAE7]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_14px_38px_rgba(11,42,82,0.07)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#88B4D2]
                  hover:shadow-[0_18px_46px_rgba(11,42,82,0.10)]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E8F2FA]
                      text-[#0D558D]
                    "
                  >
                    <RefreshCcw
                      size={20}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-[0.7rem]
                          text-[#A07349]
                        "
                      >
                        07
                      </span>

                      <h3
                        className="
                          text-[0.92rem]
                          font-semibold
                          text-[#0B2A52]
                        "
                      >
                        Retargeting
                      </h3>
                    </div>

                    <p
                      className="
                        mt-1.5
                        text-[0.72rem]
                        leading-[1.5]
                        text-[#597087]
                      "
                    >
                      Reconnect with people who already know something about
                      your business.
                    </p>
                  </div>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0B2A52]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowRight
                      size={13}
                      strokeWidth={1.8}
                    />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT CHANNELS
          ================================================= */}

          <div className="space-y-5 pt-2">
            {rightChannels.map((channel, index) => (
              <ChannelCard
                key={channel.number}
                channel={channel}
                index={index}
                side="right"
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            MOBILE / TABLET VERSION
        ===================================================== */}

        <div className="mt-12 lg:hidden">
          <ChannelStrategyCore reduceMotion={reduceMotion} />

          <div
            className="
              mt-6
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {channels.map((channel, index) => (
              <ChannelCard
                key={channel.number}
                channel={channel}
                index={index}
                side="none"
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            OUR APPROACH
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 34,
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
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[1280px]
            overflow-hidden
            rounded-[1.6rem]
            border
            border-[#C8D9E6]
            bg-gradient-to-r
            from-[#F3F8FC]
            via-white
            to-[#ECF5FC]
            shadow-[0_22px_65px_rgba(11,42,82,0.06)]
            lg:mt-20
          "
        >
          <div
            className="
              grid
              lg:grid-cols-[1.18fr_0.82fr]
              lg:items-stretch
            "
          >
            {/* ===============================================
                LEFT MESSAGE
            =============================================== */}

            <div
              className="
                px-6
                py-8
                sm:px-8
                lg:px-10
                lg:py-10
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <span className="h-px w-9 bg-[#B67D49]" />

                <span
                  className="
                    text-[0.58rem]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#9B6F43]
                  "
                >
                  Our Approach
                </span>
              </div>

              <h3
                className="
                  mt-6
                  max-w-[720px]
                  font-serif
                  text-[1.6rem]
                  font-medium
                  leading-[1.3]
                  tracking-[-0.032em]
                  text-[#0B2A52]
                  sm:text-[1.85rem]
                  lg:text-[2rem]
                "
              >
                We don’t recommend channels because they are popular.
                <br />

                <span
                  className="
                    font-normal
                    italic
                    text-[#B67D49]
                  "
                >
                  We recommend them because they have a job to do.
                </span>
              </h3>
            </div>

            {/* ===============================================
                PRINCIPLES
            =============================================== */}

            <div
              className="
                border-t
                border-[#D5E2EB]
                bg-white/45
                px-6
                py-7
                sm:px-8
                lg:border-l
                lg:border-t-0
                lg:px-8
                lg:py-10
              "
            >
              <div
                className="
                  grid
                  gap-7
                  sm:grid-cols-3
                  lg:h-full
                  lg:items-center
                "
              >
                <OutcomeItem
                  icon={Search}
                  label="Demand Led"
                  text="Follow real demand."
                />

                <OutcomeItem
                  icon={Users}
                  label="Audience Aligned"
                  text="Meet attention where it exists."
                />

                <OutcomeItem
                  icon={Crosshair}
                  label="Outcome Focused"
                  text="Give every channel a purpose."
                />
              </div>
            </div>
          </div>

          {/* ===============================================
              BOTTOM MICRO STRIP
          =============================================== */}

          <div
            className="
              flex
              flex-col
              gap-4
              border-t
              border-[#D5E2EB]
              px-6
              py-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-8
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Lightbulb
                size={14}
                strokeWidth={1.7}
                className="text-[#1763A0]"
              />

              <span
                className="
                  text-[0.52rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#6E879C]
                "
              >
                Strategy before platform selection
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#8A9CAB]
                "
              >
                Attention
              </span>

              <ArrowRight
                size={11}
                className="text-[#B67D49]"
              />

              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#8A9CAB]
                "
              >
                Opportunity
              </span>

              <ArrowRight
                size={11}
                className="text-[#B67D49]"
              />

              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#0D568E]
                "
              >
                Growth
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CHANNEL CARD
========================================================= */

function ChannelCard({
  channel,
  index,
  side,
  reduceMotion,
}: {
  channel: Channel;
  index: number;
  side: "left" | "right" | "none";
  reduceMotion: boolean | null;
}) {
  const Icon = channel.icon;
  const theme = getChannelTheme(channel.tone);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x:
          reduceMotion || side === "none"
            ? 0
            : side === "left"
              ? -28
              : 28,
        y: reduceMotion ? 0 : 10,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay:
          reduceMotion
            ? 0
            : index * 0.06,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className="
        group
        relative
        min-h-[154px]
        rounded-[1rem]
        border
        border-[#D0DEE8]
        bg-white/95
        p-5
        shadow-[0_12px_32px_rgba(11,42,82,0.06)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#A8C4D8]
        hover:shadow-[0_18px_46px_rgba(11,42,82,0.10)]
      "
    >
      {/* =====================================================
          DESKTOP CONNECTOR
      ===================================================== */}

      {side !== "none" && (
        <div
          className={`
            pointer-events-none
            absolute
            top-1/2
            hidden
            -translate-y-1/2
            lg:block

            ${side === "left" ? "-right-10" : "-left-10"}
          `}
        >
          <span
            className="
              block
              h-px
              w-10
              bg-[#C5A06F]
            "
          />

          <span
            className={`
              absolute
              top-1/2
              h-2
              w-2
              -translate-y-1/2
              rounded-full
              bg-[#C39A63]
              shadow-[0_0_0_4px_rgba(195,154,99,0.10)]

              ${
                side === "left"
                  ? "right-[-3px]"
                  : "left-[-3px]"
              }
            `}
          />
        </div>
      )}

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          flex
          items-start
          gap-4
        "
      >
        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-[0.75rem]
            border
            transition-transform
            duration-300
            group-hover:scale-105

            ${theme.icon}
          `}
        >
          <Icon
            size={20}
            strokeWidth={1.7}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div
            className="
              flex
              items-center
              justify-between
              gap-3
            "
          >
            <div>
              <span
                className="
                  font-serif
                  text-[0.62rem]
                  text-[#9A7A5A]
                "
              >
                {channel.number}
              </span>

              <h3
                className="
                  mt-1
                  text-[0.95rem]
                  font-semibold
                  tracking-[-0.02em]
                  text-[#0B2A52]
                "
              >
                {channel.title}
              </h3>
            </div>

            <MiniSignalBars />
          </div>

          <p
            className="
              mt-2.5
              max-w-[270px]
              text-[0.72rem]
              leading-[1.55]
              text-[#536C84]
            "
          >
            {channel.description}
          </p>
        </div>
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div
        className="
          mt-4
          flex
          items-center
          justify-between
          gap-4
          border-t
          border-[#E7EDF2]
          pt-3
        "
      >
        <span
          className="
            text-[0.47rem]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#8397A8]
          "
        >
          {channel.job}
        </span>

        <span
          className="
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            text-white
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
          style={{
            background: theme.accent,
          }}
        >
          <ArrowRight
            size={11}
            strokeWidth={1.9}
          />
        </span>
      </div>
    </motion.article>
  );
}

/* =========================================================
   CENTER STRATEGY HUB
========================================================= */

function ChannelStrategyCore({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  const bars = [36, 49, 61, 69, 92];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 25,
        scale: reduceMotion ? 1 : 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        min-h-[475px]
        overflow-hidden
        rounded-[1.4rem]
        border
        border-[#164A75]
        bg-gradient-to-br
        from-[#0B2A52]
        via-[#0B3C68]
        to-[#0D5487]
        p-6
        shadow-[0_28px_75px_rgba(11,42,82,0.22)]
        sm:p-7
      "
    >
      {/* =====================================================
          SUBTLE INTERNAL ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-24
          h-72
          w-72
          rounded-full
          bg-[#2C78AD]/25
          blur-[80px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          left-[10%]
          h-64
          w-64
          rounded-full
          bg-[#89B9D9]/10
          blur-[75px]
        "
      />

      {/* CONNECTOR NODES */}

      {[22, 50, 78].map((top) => (
        <div
          key={`left-${top}`}
          style={{
            top: `${top}%`,
          }}
          className="
            absolute
            -left-[5px]
            hidden
            h-2.5
            w-2.5
            -translate-y-1/2
            rounded-full
            border-2
            border-[#0B3760]
            bg-[#C79B61]
            lg:block
          "
        />
      ))}

      {[22, 50, 78].map((top) => (
        <div
          key={`right-${top}`}
          style={{
            top: `${top}%`,
          }}
          className="
            absolute
            -right-[5px]
            hidden
            h-2.5
            w-2.5
            -translate-y-1/2
            rounded-full
            border-2
            border-[#0B3760]
            bg-[#C79B61]
            lg:block
          "
        />
      ))}

      {/* =====================================================
          TOP
      ===================================================== */}

      <div className="relative">
        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div>
            <p
              className="
                font-serif
                text-[1.55rem]
                font-medium
                tracking-[-0.035em]
                text-white
                sm:text-[1.7rem]
              "
            >
              Channel Strategy
            </p>

            <p
              className="
                mt-2
                text-[0.5rem]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#BFD4E5]
              "
            >
              Right Channels. Real Opportunity.
            </p>
          </div>

          <span
            className="
              text-[0.8rem]
              tracking-[0.18em]
              text-white/45
            "
          >
            •••
          </span>
        </div>

        {/* =====================================================
            CORE ANALYTICS
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            gap-7
            sm:grid-cols-[1fr_0.8fr]
            sm:items-end
          "
        >
          {/* CHART */}

          <div>
            <div
              className="
                relative
                flex
                h-[170px]
                items-end
                gap-3
                border-b
                border-l
                border-white/15
                px-3
                pb-2
              "
            >
              {bars.map((height, index) => (
                <motion.span
                  key={index}
                  initial={{
                    height: reduceMotion ? `${height}%` : 0,
                  }}
                  whileInView={{
                    height: `${height}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay:
                      reduceMotion
                        ? 0
                        : index * 0.08,
                  }}
                  className={`
                    flex-1
                    rounded-t-[3px]

                    ${
                      index === bars.length - 1
                        ? "bg-gradient-to-t from-[#B67D49] to-[#E1B67A]"
                        : "bg-gradient-to-t from-[#3D78A7] to-[#9CC7E3]"
                    }
                  `}
                />
              ))}
            </div>

            <div
              className="
                mt-3
                flex
                justify-between
                text-[0.42rem]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-white/35
              "
            >
              <span>Demand</span>
              <span>Reach</span>
              <span>Action</span>
            </div>
          </div>

          {/* OPPORTUNITY */}

          <div
            className="
              border-l
              border-white/12
              pl-5
            "
          >
            <p
              className="
                text-[0.49rem]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#B8CEE0]
              "
            >
              Higher Opportunity
            </p>

            <p
              className="
                mt-4
                font-serif
                text-[2rem]
                font-medium
                text-[#E4B175]
                sm:text-[2.2rem]
              "
            >
              +42%
            </p>

            <p
              className="
                mt-2
                max-w-[150px]
                text-[0.62rem]
                leading-[1.5]
                text-white/62
              "
            >
              Avg. conversion lift across better-aligned channel decisions.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CALLOUT
        ===================================================== */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-4
            rounded-[0.9rem]
            border
            border-white/10
            bg-white/[0.09]
            px-4
            py-4
            backdrop-blur-lg
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#D7A96D]/40
              bg-[#D7A96D]/10
              text-[#E0AF70]
            "
          >
            <Target
              size={17}
              strokeWidth={1.7}
            />
          </div>

          <p
            className="
              flex-1
              text-[0.66rem]
              font-medium
              leading-[1.5]
              text-white/72
            "
          >
            A tailored media mix for measurable growth.
          </p>

          <ArrowRight
            size={15}
            strokeWidth={1.7}
            className="text-white/75"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   OUTCOME ITEM
========================================================= */

function OutcomeItem({
  icon: Icon,
  label,
  text,
}: {
  icon: LucideIcon;
  label: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <div
        className="
          mx-auto
          flex
          h-10
          w-10
          items-center
          justify-center
          text-[#0B4A80]
        "
      >
        <Icon
          size={22}
          strokeWidth={1.6}
        />
      </div>

      <p
        className="
          mt-3
          text-[0.5rem]
          font-semibold
          uppercase
          leading-[1.5]
          tracking-[0.2em]
          text-[#315D82]
        "
      >
        {label}
      </p>

      <p
        className="
          mx-auto
          mt-2
          max-w-[145px]
          text-[0.62rem]
          leading-[1.5]
          text-[#7A8D9E]
        "
      >
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   MINI SIGNAL
========================================================= */

function MiniSignalBars() {
  return (
    <div
      className="
        flex
        h-7
        items-end
        gap-[3px]
      "
    >
      {[35, 55, 78].map((height) => (
        <span
          key={height}
          style={{
            height: `${height}%`,
          }}
          className="
            w-[4px]
            rounded-t-[1px]
            bg-[#9FC4DF]
          "
        />
      ))}
    </div>
  );
}

/* =========================================================
   CHANNEL THEMES
========================================================= */

function getChannelTheme(tone: ChannelTone) {
  const themes: Record<
    ChannelTone,
    {
      icon: string;
      accent: string;
    }
  > = {
    google: {
      icon:
        "border-[#BAD7EA] bg-[#EEF7FD] text-[#1763A0]",
      accent: "#1763A0",
    },

    pmax: {
      icon:
        "border-[#C6DAEC] bg-[#EEF6FD] text-[#2579BD]",
      accent: "#2579BD",
    },

    youtube: {
      icon:
        "border-[#E7C3C3] bg-[#FFF3F3] text-[#D83E3E]",
      accent: "#C84A4A",
    },

    display: {
      icon:
        "border-[#C2D8EA] bg-[#EFF7FD] text-[#3D7FBD]",
      accent: "#377CB6",
    },

    meta: {
      icon:
        "border-[#BBD6EA] bg-[#EDF6FD] text-[#1767B0]",
      accent: "#1767B0",
    },

    linkedin: {
      icon:
        "border-[#B8D4E6] bg-[#EEF7FC] text-[#176095]",
      accent: "#176095",
    },

    retarget: {
      icon:
        "border-[#BED5E5] bg-[#EEF6FC] text-[#0D568E]",
      accent: "#0D568E",
    },
  };

  return themes[tone];
}