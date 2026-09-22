"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  Braces,
  Check,
  Code2,
  FilePenLine,
  LayoutTemplate,
  MonitorSmartphone,
  PlugZap,
  RefreshCw,
  Route,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  Wrench,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type Service = {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  note?: string;

  bg: string;
  border: string;
  iconBg: string;
  accent: string;
  accentText: string;
  chipBg: string;
};

type PlatformService = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  bestFor: string;
  icon: LucideIcon;
  features: string[];

  bg: string;
  border: string;
  iconBg: string;
  accent: string;
  accentText: string;
};

/* =========================================================
   SERVICES
========================================================= */

const services: Service[] = [
  {
    number: "01",
    category: "Strategy",
    title: "Website Strategy & Architecture",
    subtitle:
      "Decide what the website needs to do before deciding what it should look like.",
    description:
      "We start by understanding the business, audience and actions the website needs to support.",
    icon: Route,
    features: [
      "Business objectives",
      "Audience priorities",
      "Website goals",
      "Page requirements",
      "User journeys",
      "Information architecture",
      "Navigation planning",
      "Conversion paths",
      "Content priorities",
      "Technical requirements",
    ],
    bg: "bg-[#F2F8FE]",
    border: "border-[#A1C7EA]",
    iconBg: "bg-[#DCEEFF]",
    accent: "bg-[#5D9DD4]",
    accentText: "text-[#397EB9]",
    chipBg: "bg-[#E5F2FD]",
  },

  {
    number: "02",
    category: "Experience",
    title: "UX & Interface Design",
    subtitle: "Make every page easier to use.",
    description:
      "Good user experience reduces friction between what someone wants and where they need to go.",
    icon: LayoutTemplate,
    features: [
      "Content hierarchy",
      "Page structure",
      "Navigation",
      "Interaction patterns",
      "Calls to action",
      "Responsive behaviour",
      "Visual consistency",
      "Accessibility",
      "Usability",
    ],
    bg: "bg-[#F6F3FF]",
    border: "border-[#B6AAE3]",
    iconBg: "bg-[#E9E4FF]",
    accent: "bg-[#8C79CF]",
    accentText: "text-[#7560BE]",
    chipBg: "bg-[#ECE7FF]",
  },

  {
    number: "03",
    category: "Custom Build",
    title: "Custom Website Development",
    subtitle:
      "Build around the business — not around a generic template.",
    description:
      "Reusable, maintainable components developed around the agreed design, functionality and business requirements.",
    icon: Braces,
    features: [
      "Custom page layouts",
      "Interactive sections",
      "Reusable components",
      "Dynamic content",
      "Forms",
      "APIs",
      "Third-party integrations",
      "Custom functionality",
      "Analytics implementation",
    ],
    bg: "bg-[#F0FAF5]",
    border: "border-[#96CBB2]",
    iconBg: "bg-[#DDF3E8]",
    accent: "bg-[#67A98A]",
    accentText: "text-[#4F9275]",
    chipBg: "bg-[#E3F4EC]",
  },

  {
    number: "04",
    category: "Modern Frontend",
    title: "Next.js Website Development",
    subtitle:
      "Modern frontends built for performance and flexibility.",
    description:
      "For suitable projects, we use modern frameworks such as Next.js to create fast, component-based experiences.",
    icon: Code2,
    features: [
      "Responsive interfaces",
      "Reusable components",
      "Server-rendered content",
      "SEO-friendly delivery",
      "Optimized images",
      "Modern routing",
      "Interactive experiences",
      "Scalable page systems",
    ],
    note:
      "Technology is selected because it fits the project — not simply because it is fashionable.",
    bg: "bg-[#EFF9FB]",
    border: "border-[#8EC4CD]",
    iconBg: "bg-[#DDF1F4]",
    accent: "bg-[#5AA3B2]",
    accentText: "text-[#438B99]",
    chipBg: "bg-[#E2F3F5]",
  },

  {
    number: "05",
    category: "Responsive",
    title: "Responsive Website Development",
    subtitle: "One experience across different screens.",
    description:
      "Layouts and interactions adapt naturally across desktop, tablet and mobile.",
    icon: MonitorSmartphone,
    features: [
      "Desktop layouts",
      "Tablet behaviour",
      "Mobile interfaces",
      "Flexible navigation",
      "Readable content",
      "Adaptive interactions",
    ],
    note:
      "The experience should remain clear and functional wherever the visitor arrives.",
    bg: "bg-[#FFF6EE]",
    border: "border-[#E0B38E]",
    iconBg: "bg-[#FBE8D7]",
    accent: "bg-[#C88D64]",
    accentText: "text-[#B1754D]",
    chipBg: "bg-[#FBEADF]",
  },

  {
    number: "06",
    category: "Conversion",
    title: "Landing Page Development",
    subtitle:
      "Give campaign traffic somewhere purposeful to go.",
    description:
      "Landing pages are designed around a focused audience, offer or campaign objective.",
    icon: Target,
    features: [
      "Lead generation",
      "Paid advertising",
      "Service campaigns",
      "Product launches",
      "Event registrations",
      "Downloads",
      "Consultation requests",
      "Conversion actions",
    ],
    note:
      "The message, design and next action should work together.",
    bg: "bg-[#FFFBEF]",
    border: "border-[#DBC77B]",
    iconBg: "bg-[#F7EFCF]",
    accent: "bg-[#C6A650]",
    accentText: "text-[#A78A35]",
    chipBg: "bg-[#F8F1D7]",
  },

  {
    number: "07",
    category: "Improve",
    title: "Website Redesign & Redevelopment",
    subtitle: "Keep what works. Improve what doesn’t.",
    description:
      "We identify what should be preserved and what genuinely needs improvement.",
    icon: RefreshCw,
    features: [
      "Outdated interfaces",
      "Confusing structure",
      "Weak mobile experience",
      "Slow performance",
      "Poor content hierarchy",
      "Inconsistent branding",
      "Technical limitations",
      "Conversion friction",
      "Scalability issues",
    ],
    bg: "bg-[#FFF3F6]",
    border: "border-[#DFA7B4]",
    iconBg: "bg-[#F9E2E8]",
    accent: "bg-[#CA8294]",
    accentText: "text-[#B5687C]",
    chipBg: "bg-[#F9E7EB]",
  },

  {
    number: "08",
    category: "Content Management",
    title: "CMS & Content Management",
    subtitle: "Make important updates easier to manage.",
    description:
      "Suitable content can be updated without rebuilding individual pages manually.",
    icon: FilePenLine,
    features: [
      "Editor requirements",
      "Regular updates",
      "Publishing frequency",
      "Content structure",
      "Workflow requirements",
      "Technical complexity",
    ],
    bg: "bg-[#F4F9EE]",
    border: "border-[#A7BF83]",
    iconBg: "bg-[#E6F0DB]",
    accent: "bg-[#83A261]",
    accentText: "text-[#698847]",
    chipBg: "bg-[#EAF2E0]",
  },

  {
    number: "09",
    category: "Connected Systems",
    title: "Integrations & Functionality",
    subtitle:
      "Connect the website to the tools behind the business.",
    description:
      "We plan the systems and connections required behind the customer experience.",
    icon: PlugZap,
    features: [
      "CRM systems",
      "Analytics platforms",
      "Marketing tools",
      "Email platforms",
      "Calendars",
      "Booking systems",
      "Forms",
      "External APIs",
      "Business software",
    ],
    note:
      "Final integrations and responsibilities are confirmed during project planning.",
    bg: "bg-[#F1F6FA]",
    border: "border-[#91A9BE]",
    iconBg: "bg-[#E2ECF4]",
    accent: "bg-[#718FA9]",
    accentText: "text-[#587790]",
    chipBg: "bg-[#E7EEF4]",
  },
];

/* =========================================================
   PLATFORMS
========================================================= */

const platforms: PlatformService[] = [
  {
    id: "ecommerce",
    eyebrow: "E-commerce",
    title: "E-commerce Website Development",
    subtitle:
      "Build a buying experience — not just an online catalogue.",
    description:
      "We design and develop e-commerce experiences around product discovery, buying confidence and a smoother path from interest to purchase.",
    bestFor:
      "Businesses selling products or services directly online.",
    icon: ShoppingBag,
    features: [
      "Product catalogues",
      "Categories & collections",
      "Search & filtering",
      "Shopping cart",
      "Checkout journeys",
      "Payment integrations",
      "Customer accounts",
      "Shipping workflows",
      "Analytics",
    ],
    bg: "bg-[#EDF6FF]",
    border: "border-[#78AEE1]",
    iconBg: "bg-[#D9EAFC]",
    accent: "bg-[#4E91D1]",
    accentText: "text-[#337EBF]",
  },

  {
    id: "shopify",
    eyebrow: "Shopify",
    title: "Shopify Development",
    subtitle:
      "Make Shopify feel like your brand — not a stock theme.",
    description:
      "Shopify can provide a strong foundation while custom sections, content and integrations create a more distinctive customer experience.",
    bestFor:
      "Brands that need a focused, manageable commerce platform.",
    icon: Store,
    features: [
      "Theme customization",
      "Custom sections",
      "Product templates",
      "Collections",
      "Metafields",
      "App integrations",
      "Conversion-focused pages",
      "Responsive storefronts",
      "Analytics setup",
    ],
    bg: "bg-[#EFF9F1]",
    border: "border-[#84BD8B]",
    iconBg: "bg-[#DBF0DE]",
    accent: "bg-[#61A56B]",
    accentText: "text-[#4B9657]",
  },

  {
    id: "wordpress",
    eyebrow: "WordPress",
    title: "WordPress Website Development",
    subtitle:
      "Flexible content management without losing structure.",
    description:
      "WordPress can be a strong fit when content management, editorial flexibility and familiar publishing workflows are important.",
    bestFor:
      "Content-led, service and regularly updated websites.",
    icon: Wrench,
    features: [
      "Custom page structures",
      "Reusable content blocks",
      "CMS architecture",
      "Forms",
      "Plugin integrations",
      "Responsive development",
      "Performance foundations",
      "Technical SEO setup",
      "Editor workflows",
    ],
    bg: "bg-[#F3F2FF]",
    border: "border-[#A5A0DD]",
    iconBg: "bg-[#E5E3FA]",
    accent: "bg-[#8179C7]",
    accentText: "text-[#6D64B6]",
  },
];

/* =========================================================
   SERVICE BAND
========================================================= */

function ServiceBand({
  service,
  index,
  reduceMotion,
}: {
  service: Service;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.article
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
        amount: 0.18,
      }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.04,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -3,
            }
      }
      className={`
        group
        relative
        overflow-hidden

        rounded-[22px]

        border

        ${service.bg}
        ${service.border}

        shadow-[0_9px_26px_rgba(11,42,82,0.03)]

        transition-shadow
        duration-300

        hover:shadow-[0_18px_40px_rgba(11,42,82,0.07)]
      `}
    >
      {/* LEFT ACCENT */}

      <motion.span
        className={`
          absolute
          bottom-0
          left-0
          top-0

          w-[4px]

          ${service.accent}
        `}
        whileHover={
          reduceMotion
            ? undefined
            : {
                width: 7,
              }
        }
      />

      {/* LARGE NUMBER */}

      <span
        className="
          pointer-events-none

          absolute
          -right-3
          -top-8

          font-serif
          text-[7.5rem]
          leading-none
          tracking-[-0.08em]

          text-[#0B2A52]/[0.025]
        "
      >
        {service.number}
      </span>

      <div
        className="
          relative
          z-10

          grid
          gap-6

          p-5
          pl-6

          sm:p-6
          sm:pl-7

          lg:grid-cols-[0.78fr_1.22fr]
          lg:items-center
          lg:gap-8
        "
      >
        {/* =====================================================
            LEFT — SERVICE IDENTITY
        ===================================================== */}

        <div className="min-w-0">
          <div className="flex items-center gap-4">
            <motion.span
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.08,
                      rotate: -5,
                    }
              }
              className={`
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                rounded-[14px]

                ${service.iconBg}

                text-[#0B2A52]
              `}
            >
              <Icon size={20} strokeWidth={1.7} />
            </motion.span>

            <div>
              <span
                className={`
                  block

                  text-[0.58rem]
                  font-semibold
                  uppercase
                  tracking-[0.16em]

                  ${service.accentText}
                `}
              >
                {service.category}
              </span>

              <span
                className="
                  mt-1
                  block

                  text-[0.65rem]
                  font-semibold
                  tracking-[0.12em]

                  text-[#8795A1]
                "
              >
                {service.number} / 09
              </span>
            </div>
          </div>

          <h3
            className="
              mt-5

              max-w-[500px]

              font-serif
              text-[1.45rem]
              font-normal
              leading-[1.12]
              tracking-[-0.03em]

              text-[#0B2A52]

              sm:text-[1.58rem]
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mt-3

              max-w-[510px]

              text-[0.72rem]
              font-semibold
              uppercase
              leading-[1.5]
              tracking-[0.06em]

              text-[#3E5870]
            "
          >
            {service.subtitle}
          </p>

          <p
            className="
              mt-3

              max-w-[530px]

              font-serif
              text-[0.84rem]
              leading-[1.65]

              text-[#5D7287]
            "
          >
            {service.description}
          </p>

          {service.note && (
            <div
              className="
                mt-4

                flex
                items-start
                gap-2.5
              "
            >
              <span
                className={`
                  mt-[7px]

                  h-1.5
                  w-1.5
                  shrink-0

                  rounded-full

                  ${service.accent}
                `}
              />

              <p
                className="
                  max-w-[500px]

                  text-[0.7rem]
                  leading-[1.55]

                  text-[#6D8091]
                "
              >
                {service.note}
              </p>
            </div>
          )}
        </div>

        {/* =====================================================
            RIGHT — FULL SCOPE
        ===================================================== */}

        <div
          className="
            lg:border-l
            lg:border-black/[0.07]
            lg:pl-8
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <div className="flex items-center gap-2.5">
              <Sparkles
                size={14}
                strokeWidth={1.7}
                className={service.accentText}
              />

              <span
                className="
                  text-[0.58rem]
                  font-semibold
                  uppercase
                  tracking-[0.16em]

                  text-[#526A80]
                "
              >
                What&apos;s Included
              </span>
            </div>

            <span
              className={`
                rounded-full

                px-2.5
                py-1.5

                text-[0.56rem]
                font-semibold

                ${service.chipBg}
                ${service.accentText}
              `}
            >
              {service.features.length} items
            </span>
          </div>

          {/* FEATURES */}

          <div
            className="
              mt-4

              grid
              grid-cols-1
              gap-x-3
              gap-y-2

              sm:grid-cols-2
            "
          >
            {service.features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 8,
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
                  duration: 0.28,
                  delay: reduceMotion
                    ? 0
                    : featureIndex * 0.02,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        x: 3,
                      }
                }
                className="
                  group/item

                  flex
                  min-h-[40px]
                  items-center
                  gap-2.5

                  rounded-[11px]

                  border
                  border-transparent

                  px-2.5
                  py-2

                  transition-all
                  duration-300

                  hover:border-black/[0.06]
                  hover:bg-white/75
                "
              >
                <span
                  className={`
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    ${service.chipBg}

                    ${service.accentText}
                  `}
                >
                  <Check size={9} strokeWidth={2.4} />
                </span>

                <span
                  className="
                    text-[0.72rem]
                    font-medium
                    leading-[1.35]

                    text-[#435E76]
                  "
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* HOVER SWEEP */}

      <motion.div
        className={`
          pointer-events-none

          absolute
          bottom-0
          left-0
          top-0

          w-[120px]

          ${service.accent}

          opacity-0
          blur-[55px]

          transition-opacity
          duration-500

          group-hover:opacity-[0.07]
        `}
      />
    </motion.article>
  );
}

/* =========================================================
   PLATFORM SELECTOR
========================================================= */

function PlatformSelectorCard({
  platform,
  active,
  onActivate,
  index,
  reduceMotion,
}: {
  platform: PlatformService;
  active: boolean;
  onActivate: () => void;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = platform.icon;

  return (
    <motion.button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
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
        duration: 0.5,
        delay: reduceMotion ? 0 : index * 0.07,
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

        min-h-[235px]

        overflow-hidden

        rounded-[23px]

        border

        p-6

        text-left

        outline-none

        ${platform.bg}
        ${platform.border}

        ${
          active
            ? "shadow-[0_18px_42px_rgba(11,42,82,0.08)]"
            : "shadow-[0_9px_25px_rgba(11,42,82,0.03)]"
        }
      `}
    >
      <motion.span
        initial={false}
        animate={{
          scaleX: active ? 1 : 0,
        }}
        transition={{
          duration: 0.28,
          ease,
        }}
        style={{
          transformOrigin: "left",
        }}
        className={`
          absolute
          left-0
          right-0
          top-0

          h-[3px]

          ${platform.accent}
        `}
      />

      <div className="flex items-start justify-between gap-4">
        <span
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-[14px]

            ${platform.iconBg}

            text-[#0B2A52]
          `}
        >
          <Icon size={20} strokeWidth={1.7} />
        </span>

        <motion.span
          animate={{
            x: active ? 3 : 0,
          }}
          className={`
            flex
            h-8
            w-8
            items-center
            justify-center

            rounded-full

            ${
              active
                ? "border border-black/[0.08] bg-white text-[#0B2A52]"
                : "text-[#7C8E9E]"
            }
          `}
        >
          <ArrowRight size={13} strokeWidth={1.7} />
        </motion.span>
      </div>

      <span
        className={`
          mt-5
          block

          text-[0.58rem]
          font-semibold
          uppercase
          tracking-[0.18em]

          ${platform.accentText}
        `}
      >
        {platform.eyebrow}
      </span>

      <h4
        className="
          mt-2

          font-serif
          text-[1.5rem]
          leading-[1.1]
          tracking-[-0.03em]

          text-[#0B2A52]
        "
      >
        {platform.title}
      </h4>

      <p
        className="
          mt-3

          text-[0.8rem]
          leading-[1.55]

          text-[#5B7288]
        "
      >
        {platform.bestFor}
      </p>

      <div
        className="
          absolute
          bottom-5
          left-6
          right-6

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[0.52rem]
            font-semibold
            uppercase
            tracking-[0.15em]

            text-[#738697]
          "
        >
          {active ? "Currently selected" : "View capabilities"}
        </span>

        <span
          className={`
            h-2
            w-2

            rounded-full

            ${platform.accent}
          `}
        />
      </div>
    </motion.button>
  );
}

/* =========================================================
   PLATFORM DETAIL
========================================================= */

function PlatformDetailPanel({
  platform,
  reduceMotion,
}: {
  platform: PlatformService;
  reduceMotion: boolean;
}) {
  const Icon = platform.icon;

  return (
    <motion.div
      key={platform.id}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 14,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -10,
      }}
      transition={{
        duration: 0.32,
        ease,
      }}
      className={`
        relative

        overflow-hidden

        rounded-[27px]

        border

        ${platform.bg}
        ${platform.border}
      `}
    >
      {/* WORDMARK */}

      <span
        className="
          pointer-events-none

          absolute
          -right-5
          -top-10

          whitespace-nowrap

          font-serif
          text-[9rem]
          leading-none
          tracking-[-0.07em]

          text-[#0B2A52]/[0.025]
        "
      >
        {platform.eyebrow}
      </span>

      <div
        className="
          relative
          z-10

          grid
          gap-8

          p-6

          sm:p-8

          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-10
          lg:p-9
        "
      >
        {/* LEFT */}

        <div>
          <div className="flex items-center gap-3">
            <span
              className={`
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-[14px]

                ${platform.iconBg}

                text-[#0B2A52]
              `}
            >
              <Icon size={20} strokeWidth={1.7} />
            </span>

            <div>
              <span
                className={`
                  block

                  text-[0.58rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]

                  ${platform.accentText}
                `}
              >
                {platform.eyebrow}
              </span>

              <span
                className="
                  mt-1
                  block

                  text-[0.52rem]
                  font-semibold
                  uppercase
                  tracking-[0.13em]

                  text-[#8997A3]
                "
              >
                Platform capability
              </span>
            </div>
          </div>

          <h4
            className="
              mt-6

              font-serif
              text-[1.85rem]
              leading-[1.07]
              tracking-[-0.04em]

              text-[#0B2A52]

              sm:text-[2.05rem]
            "
          >
            {platform.title}
          </h4>

          <p
            className="
              mt-3

              text-[0.68rem]
              font-semibold
              uppercase
              leading-[1.5]
              tracking-[0.07em]

              text-[#38546E]
            "
          >
            {platform.subtitle}
          </p>

          <p
            className="
              mt-4

              font-serif
              text-[0.88rem]
              leading-[1.7]

              text-[#5B7085]
            "
          >
            {platform.description}
          </p>

          <div
            className="
              mt-5

              rounded-[15px]

              border
              border-black/[0.07]

              bg-white/55

              p-4
            "
          >
            <span
              className="
                text-[0.55rem]
                font-semibold
                uppercase
                tracking-[0.15em]

                text-[#748697]
              "
            >
              Best suited to
            </span>

            <p
              className="
                mt-1.5

                font-serif
                text-[0.82rem]
                leading-[1.5]

                text-[#0B2A52]
              "
            >
              {platform.bestFor}
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div
          className="
            border-t
            border-black/[0.08]

            pt-6

            lg:border-l
            lg:border-t-0
            lg:pl-9
            lg:pt-0
          "
        >
          <div className="flex items-center gap-3">
            <Sparkles
              size={15}
              className={platform.accentText}
            />

            <span
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.16em]

                text-[#60758A]
              "
            >
              What We Can Build Around
            </span>
          </div>

          <div
            className="
              mt-5

              grid
              grid-cols-1
              gap-2.5

              sm:grid-cols-2
            "
          >
            {platform.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 10,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.28,
                  delay: reduceMotion ? 0 : index * 0.025,
                }}
                className="
                  flex
                  min-h-[50px]
                  items-center
                  gap-3

                  rounded-[13px]

                  border
                  border-black/[0.07]

                  bg-white/70

                  px-3
                  py-3

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:bg-white
                "
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    bg-white

                    text-[#0B2A52]
                  "
                >
                  <Check size={10} strokeWidth={2.3} />
                </span>

                <span
                  className="
                    text-[0.75rem]
                    font-medium
                    leading-[1.35]

                    text-[#435E76]
                  "
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function WebsiteDevelopmentServicesSection() {
  const reduceMotion = Boolean(useReducedMotion());

  const [activePlatform, setActivePlatform] =
    useState("ecommerce");

  const selectedPlatform =
    platforms.find(
      (platform) => platform.id === activePlatform,
    ) ?? platforms[0];

  return (
    <section
      id="website-development-services"
      aria-labelledby="website-development-services-heading"
      className="
        relative
        isolate
        overflow-hidden

        bg-white

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="
            absolute
            left-1/2
            top-[3%]

            h-[480px]
            w-[980px]

            -translate-x-1/2

            rounded-full

            bg-[#F6F8FA]

            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[260px]
            bottom-[5%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#B79A72]/[0.035]

            blur-[110px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1380px]

          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
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
                  y: 20,
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
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            max-w-[1050px]
            text-center
          "
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#B79A72]" />

            <span
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.28em]

                text-[#92745C]
              "
            >
              Our Website Development Services
            </span>

            <span className="h-px w-10 bg-[#B79A72]" />
          </div>

          <h2
            id="website-development-services-heading"
            className="
              mx-auto
              mt-6
              max-w-[1050px]

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
            Everything a Strong Business Website Needs.{" "}
            <span
              className="
                font-serif
                font-normal
                italic

                text-[#B18458]
              "
            >
              Connected.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[790px]

              text-[0.92rem]
              leading-[1.72]

              text-[#5A7186]

              sm:text-[0.98rem]
            "
          >
            Strategy, design, development, content and functionality
            work together. Each service below shows exactly what it
            covers without hiding the important details.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICE BANDS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-14

            max-w-[1230px]

            space-y-4

            lg:mt-16
          "
        >
          {services.map((service, index) => (
            <ServiceBand
              key={service.number}
              service={service}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            PLATFORM INTRO
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
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
            duration: 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-20
            max-w-[950px]
            text-center

            sm:mt-24
          "
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B79A72]" />

            <span
              className="
                text-[0.54rem]
                font-semibold
                uppercase
                tracking-[0.23em]

                text-[#92745C]
              "
            >
              Commerce & Platform Development
            </span>

            <span className="h-px w-10 bg-[#B79A72]" />
          </div>

          <h3
            className="
              mx-auto
              mt-5
              max-w-[900px]

              font-serif
              text-[1.9rem]
              leading-[1.1]
              tracking-[-0.035em]

              text-[#0B2A52]

              sm:text-[2.15rem]
              md:text-[2.35rem]
            "
          >
            Different Requirements.{" "}
            <span className="italic text-[#B18458]">
              Different Builds.
            </span>
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-[740px]

              text-[0.88rem]
              leading-[1.7]

              text-[#62778B]
            "
          >
            Hover over E-commerce, Shopify or WordPress and the
            detailed panel below changes instantly.
          </p>
        </motion.div>

        {/* =====================================================
            PLATFORM SELECTORS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-[1230px]

            grid
            grid-cols-1
            gap-4

            md:grid-cols-3
          "
        >
          {platforms.map((platform, index) => (
            <PlatformSelectorCard
              key={platform.id}
              platform={platform}
              index={index}
              active={activePlatform === platform.id}
              onActivate={() =>
                setActivePlatform(platform.id)
              }
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            CHANGING PANEL
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-5
            max-w-[1230px]
          "
        >
          <AnimatePresence mode="wait">
            <PlatformDetailPanel
              key={selectedPlatform.id}
              platform={selectedPlatform}
              reduceMotion={reduceMotion}
            />
          </AnimatePresence>
        </div>

        {/* =====================================================
            END MESSAGE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
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
            duration: 0.6,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[940px]
            text-center
          "
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#B79A72]" />

            <span
              className="
                text-[0.52rem]
                font-semibold
                uppercase
                tracking-[0.21em]

                text-[#92745C]
              "
            >
              The Right Stack for the Right Requirement
            </span>

            <span className="h-px w-9 bg-[#B79A72]" />
          </div>

          <p
            className="
              mx-auto
              mt-4
              max-w-[880px]

              font-serif
              text-[1.35rem]
              leading-[1.35]
              tracking-[-0.025em]

              text-[#0B2A52]

              sm:text-[1.55rem]
            "
          >
            We start with the requirement and choose{" "}
            <span className="italic text-[#B18458]">
              the technology that supports it best.
            </span>
          </p>

          <motion.span
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 4, 0],
                  }
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              mt-6

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
            <ArrowRight size={14} strokeWidth={1.7} />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}