"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Brush,
  Check,
  Code2,
  Megaphone,
  MousePointerClick,
  Palette,
  Search,
  Send,
  Users,
  Video,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding",
    slug: "/services/branding",
    description:
      "Build a memorable brand identity with clear positioning, compelling messaging, and a visual system your audience recognizes and trusts.",
    items: [
      "Brand Strategy",
      "Brand Identity",
      "Brand Positioning",
      "Brand Messaging",
    ],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    slug: "/services/social-media-marketing",
    description:
      "Grow your social presence with strategic content, consistent management, and community engagement designed to build attention and brand loyalty.",
    items: [
      "Social Media Strategy",
      "Social Media Management",
      "Content Strategy",
      "Community Management",
    ],
    featured: true,
  },
  {
    icon: Search,
    title: "SEO",
    slug: "/services/seo",
    description:
      "Improve your search engine visibility and attract qualified organic traffic with technical, on-page, local, and keyword-focused SEO.",
    items: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Keyword Research",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    slug: "/services/performance-marketing",
    description:
      "Drive measurable business growth through data-driven paid advertising campaigns focused on qualified leads, sales, conversions, and ROI.",
    items: ["Google Ads", "Meta Ads", "YouTube Ads", "Retargeting"],
  },
  {
    icon: Brush,
    title: "Content Marketing",
    slug: "/services/content-marketing",
    description:
      "Create strategic content that earns attention, communicates your expertise, supports SEO, and keeps your brand relevant across digital channels.",
    items: [
      "Social Content",
      "Copywriting",
      "Blog Content",
      "Creative Content",
    ],
    featured: true,
  },
  {
    icon: Video,
    title: "Video & Creative",
    slug: "/services/video-and-creative",
    description:
      "Create engaging video and visual content that captures attention, communicates your message, and helps your brand stand out online.",
    items: [
      "Video Production",
      "Video Editing",
      "Reels & Shorts",
      "Motion Graphics",
    ],
  },
  {
    icon: Code2,
    title: "Web Development",
    slug: "/services/web-development",
    description:
      "Build fast, responsive, SEO-friendly websites and landing pages designed to deliver great user experiences and turn visitors into customers.",
    items: [
      "Website Design",
      "Web Development",
      "Landing Pages",
      "UI / UX Design",
    ],
  },
  {
    icon: MousePointerClick,
    title: "E-Commerce",
    slug: "/services/e-commerce",
    description:
      "Create high-converting online stores with seamless shopping experiences, optimized product pages, and conversion-focused e-commerce solutions.",
    items: [
      "Shopify Development",
      "E-Commerce Websites",
      "Product Pages",
      "Conversion Optimization",
    ],
    featured: true,
  },
  {
    icon: Send,
    title: "PR & Digital PR",
    slug: "/services/digital-pr",
    description:
      "Increase your brand visibility and credibility through digital PR, media outreach, press coverage, and reputation-building campaigns.",
    items: [
      "Digital PR",
      "Media Outreach",
      "Press Releases",
      "Reputation Building",
    ],
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    slug: "/services/influencer-marketing",
    description:
      "Connect your brand with relevant creators and engaged communities through strategic influencer campaigns, UGC, and brand partnerships.",
    items: [
      "Influencer Strategy",
      "Creator Campaigns",
      "UGC Campaigns",
      "Brand Partnerships",
    ],
  },
  {
    icon: Brain,
    title: "AI Marketing",
    slug: "/services/ai-marketing",
    description:
      "Use AI-powered marketing workflows, creative production, content, and automation to improve efficiency, personalization, and campaign performance.",
    items: [
      "AI Video",
      "AI Creative",
      "AI Content",
      "Marketing Automation",
    ],
    featured: true,
  },
  {
    icon: BarChart3,
    title: "Growth & Analytics",
    slug: "/services/growth-and-analytics",
    description:
      "Turn marketing data into better decisions with analytics, conversion optimization, funnel strategy, tracking, and performance reporting.",
    items: [
      "Analytics & Tracking",
      "Conversion Optimization",
      "Funnel Strategy",
      "Performance Reporting",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-18
        md:py-20
        lg:py-24
        xl:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="
            absolute
            -right-[240px]
            -top-[220px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#6285AD]/[0.05]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-[250px]
            -left-[220px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#C6A77A]/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
            [background-image:linear-gradient(#0B2A52_1px,transparent_1px),linear-gradient(90deg,#0B2A52_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <header
          className="
            mx-auto
            mb-9
            w-full
            text-center
            sm:mb-11
            md:mb-12
            lg:mb-14
          "
        >
          {/* Eyebrow */}

          <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">
            <span className="h-[1.5px] w-7 bg-[#C6A77A] sm:w-9" />

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#C6A77A]
                sm:text-[9px]
              "
            >
              Digital Marketing Services
            </span>

            <span className="h-[1.5px] w-7 bg-[#C6A77A] sm:w-9" />
          </div>

          {/* SEO-friendly H2 */}

          <h2
            id="services-heading"
            className="
              mx-auto
              max-w-[850px]
              font-[var(--font-editorial)]
              text-[clamp(2.2rem,5vw,3.9rem)]
              font-normal
              leading-[1]
              tracking-[-0.055em]
              text-[#0B2A52]
            "
          >
            Digital Marketing Services
            <br />

            <span className="text-[#C6A77A]">
              Built to Grow Your Brand.
            </span>
          </h2>

          {/* Description */}

          <div className="mx-auto mt-5 max-w-[620px] sm:mt-6">
            <div className="mx-auto mb-4 h-px w-9 bg-[#0B2A52]/20" />

            <p
              className="
                text-[11px]
                leading-[1.65]
                text-[#0B2A52]/55
                sm:text-[12px]
                md:text-[13px]
              "
            >
              From SEO and social media marketing to branding, web development,
              paid advertising, content, and analytics — everything you need
              to build visibility, attract the right audience, and grow online.
            </p>
          </div>
        </header>

        {/* =====================================================
            SERVICE CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:gap-5
            md:grid-cols-2
            xl:grid-cols-3
            xl:gap-5
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`
                  group
                  relative
                  flex
                  min-h-[500px]
                  flex-col
                  overflow-hidden
                  rounded-[20px]
                  border
                  p-4
                  transition-all
                  duration-500

                  sm:rounded-[22px]
                  sm:p-5

                  md:min-h-[510px]
                  md:p-5

                  xl:min-h-[485px]
                  xl:rounded-[24px]
                  xl:p-6

                  hover:-translate-y-1
                  hover:shadow-[0_16px_38px_rgba(11,42,82,0.08)]

                  ${
                    service.featured
                      ? `
                        border-[#0B2A52]/30
                        bg-[#FCFCFD]
                        shadow-[0_8px_25px_rgba(11,42,82,0.05)]
                      `
                      : `
                        border-[#0B2A52]/13
                        bg-white
                        shadow-[0_5px_20px_rgba(11,42,82,0.025)]
                      `
                  }
                `}
              >
                {/* TOP LINE */}

                <div
                  className={`
                    absolute
                    left-1/2
                    top-0
                    h-[2px]
                    -translate-x-1/2
                    rounded-b-full
                    transition-all
                    duration-500

                    ${
                      service.featured
                        ? "w-[55%] bg-[#C6A77A]"
                        : "w-0 bg-[#0B2A52] group-hover:w-[45%]"
                    }
                  `}
                />

                {/* =================================================
                    ICON
                ================================================== */}

                <div className="flex justify-center pt-1">
                  <div
                    className={`
                      relative
                      flex
                      h-[66px]
                      w-[66px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-500

                      sm:h-[72px]
                      sm:w-[72px]

                      xl:h-[78px]
                      xl:w-[78px]

                      group-hover:scale-105

                      ${
                        service.featured
                          ? `
                            border-[#C6A77A]/25
                            bg-[#C6A77A]/[0.055]
                          `
                          : `
                            border-[#6285AD]/20
                            bg-[#6285AD]/[0.045]
                          `
                      }
                    `}
                  >
                    <div
                      className={`
                        absolute
                        inset-[6px]
                        rounded-full
                        border

                        ${
                          service.featured
                            ? "border-[#C6A77A]/10"
                            : "border-[#6285AD]/10"
                        }
                      `}
                    />

                    <Icon
                      aria-hidden="true"
                      className="
                        relative
                        z-10
                        h-7
                        w-7
                        text-[#0B2A52]
                        sm:h-8
                        sm:w-8
                      "
                      strokeWidth={1.45}
                    />

                    <span
                      className={`
                        absolute
                        -right-1
                        top-3
                        h-1.5
                        w-1.5
                        rounded-full

                        ${
                          service.featured
                            ? "bg-[#C6A77A]/60"
                            : "bg-[#6285AD]/60"
                        }
                      `}
                    />

                    <span
                      className={`
                        absolute
                        -left-1
                        bottom-4
                        h-1
                        w-1
                        rounded-full

                        ${
                          service.featured
                            ? "bg-[#C6A77A]/40"
                            : "bg-[#6285AD]/40"
                        }
                      `}
                    />
                  </div>
                </div>

                {/* =================================================
                    TITLE + DESCRIPTION
                ================================================== */}

                <div className="mt-4 text-center">
                  <h3
                    className="
                      font-[var(--font-editorial)]
                      text-[23px]
                      font-normal
                      leading-[1.05]
                      tracking-[-0.045em]
                      text-[#0B2A52]

                      sm:text-[25px]
                      md:text-[26px]
                    "
                  >
                    {service.title}
                  </h3>

                  <div className="mt-3 flex justify-center">
                    <span
                      className={`
                        h-[2.5px]
                        w-8
                        rounded-full

                        ${
                          service.featured
                            ? "bg-[#C6A77A]"
                            : "bg-[#6285AD]"
                        }
                      `}
                    />
                  </div>

                  <p
                    className="
                      mx-auto
                      mt-3
                      max-w-[330px]
                      text-[11px]
                      leading-[1.6]
                      text-[#0B2A52]/55

                      sm:mt-4
                      sm:text-[12px]
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* =================================================
                    INCLUDED SERVICES
                ================================================== */}

                <div className="mt-5">
                  <div className="mb-2.5 flex items-center gap-2.5">
                    <span
                      className={`
                        shrink-0
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[0.2em]

                        sm:text-[8px]

                        ${
                          service.featured
                            ? "text-[#C6A77A]"
                            : "text-[#0B2A52]"
                        }
                      `}
                    >
                      Services Included
                    </span>

                    <span
                      className={`
                        h-px
                        flex-1

                        ${
                          service.featured
                            ? "bg-[#C6A77A]/20"
                            : "bg-[#0B2A52]/10"
                        }
                      `}
                    />
                  </div>

                  <div className="space-y-1.5">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className={`
                          flex
                          items-center
                          gap-2
                          rounded-[9px]
                          border
                          px-2.5
                          py-1.5

                          sm:px-3
                          sm:py-2

                          ${
                            service.featured
                              ? `
                                border-[#C6A77A]/17
                                bg-[#C6A77A]/[0.02]
                                hover:border-[#C6A77A]/30
                              `
                              : `
                                border-[#0B2A52]/[0.07]
                                bg-[#FBFCFE]
                                hover:border-[#6285AD]/22
                              `
                          }

                          transition-all
                          duration-300
                        `}
                      >
                        <span
                          className={`
                            flex
                            h-[18px]
                            w-[18px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border

                            sm:h-5
                            sm:w-5

                            ${
                              service.featured
                                ? `
                                  border-[#C6A77A]/40
                                  bg-[#C6A77A]/[0.06]
                                  text-[#C6A77A]
                                `
                                : `
                                  border-[#6285AD]/30
                                  bg-[#6285AD]/[0.04]
                                  text-[#6285AD]
                                `
                            }
                          `}
                        >
                          <Check
                            aria-hidden="true"
                            className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                            strokeWidth={2}
                          />
                        </span>

                        <span
                          className="
                            min-w-0
                            text-[9px]
                            font-medium
                            leading-tight
                            text-[#0B2A52]/65

                            sm:text-[10px]
                            md:text-[11px]
                          "
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    LEARN MORE CTA
                ================================================== */}

                <div className="mt-auto flex justify-center pt-6">
                  <Link
                    href={service.slug}
                    aria-label={`Learn more about ${service.title}`}
                    className={`
                      group/button
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      px-5
                      py-2.5
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      transition-all
                      duration-300

                      sm:px-5
                      sm:py-2.5
                      sm:text-[9px]

                      ${
                        service.featured
                          ? `
                            bg-[#0B2A52]
                            text-white
                            shadow-[0_6px_16px_rgba(11,42,82,0.10)]
                            hover:-translate-y-0.5
                            hover:bg-[#123A6B]
                          `
                          : `
                            border
                            border-[#0B2A52]/20
                            bg-white
                            text-[#0B2A52]
                            hover:-translate-y-0.5
                            hover:border-[#0B2A52]
                            hover:bg-[#0B2A52]
                            hover:text-white
                          `
                      }
                    `}
                  >
                    Learn More

                    <ArrowRight
                      aria-hidden="true"
                      className="
                        h-3
                        w-3
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                      strokeWidth={1.8}
                    />
                  </Link>
                </div>

                {/* BOTTOM LINE */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-t-full
                    transition-all
                    duration-500

                    ${
                      service.featured
                        ? "w-[45%] bg-[#C6A77A]/50"
                        : "w-0 bg-[#6285AD] group-hover:w-[40%]"
                    }
                  `}
                />
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-2
            text-center

            sm:mt-10
            sm:flex-row
            sm:gap-3
          "
        >
          <p
            className="
              font-[var(--font-editorial)]
              text-[14px]
              leading-tight
              tracking-[-0.02em]
              text-[#0B2A52]/60

              sm:text-[16px]
              md:text-[18px]
            "
          >
            Strategy, creativity & technology.
            {" "}
            <span className="text-[#6285AD]">
              Built for measurable growth.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}