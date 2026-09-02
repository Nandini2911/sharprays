"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Palette,
  Megaphone,
  Search,
  BarChart3,
  Brush,
  Video,
  Code2,
  MousePointerClick,
  Send,
  Users,
  Brain,
} from "lucide-react";

const BRAND = "#0B2A52";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    slug: "/services/social-media-marketing",
    image: "/whatwedo/social-media1.png",
    description:
      "Grow your social presence with strategic content, consistent management, and community engagement designed to build attention and brand loyalty.",
    items: [
      "Social Media Strategy",
      "Social Media Management",
      "Content Strategy",
      "Community Management",
    ],
  },
  {
    icon: Search,
    title: "SEO",
    slug: "/services/seo",
    image: "/seo.webp",
    description:
      "Improve your search engine visibility and attract qualified organic traffic with technical, on-page, off-page, local, and keyword-focused SEO.",
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
    image: "/whatwedo/performance-maketing.png",
    description:
      "Drive measurable business growth through data-driven paid advertising campaigns focused on qualified leads, sales, conversions, and ROI.",
    items: ["Google Ads", "Meta Ads", "YouTube Ads", "Retargeting"],
  },
  {
    icon: Brush,
    title: "Content Marketing",
    slug: "/services/content-marketing",
    image: "/whatwedo/content-marketing.png",
    description:
      "Create strategic content that earns attention, communicates your expertise, supports SEO, and keeps your brand relevant across digital channels.",
    items: [
      "Social Content",
      "Copywriting",
      "Blog Content",
      "Creative Content",
    ],
  },
  {
    icon: Video,
    title: "Video & Creative",
    slug: "/services/video-and-creative",
    image: "/whatwedo/video-creative.png",
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
    image: "/whatwedo/web.png",
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
    icon: Send,
    title: "PR & Digital PR",
    slug: "/services/digital-pr",
    image: "/whatwedo/pr.png",
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
    icon: Brain,
    title: "AI Marketing",
    slug: "/services/ai-marketing",
    image: "/whatwedo/ai.webp",
    description:
      "Use AI-powered marketing workflows, creative production, content, and automation to improve efficiency, personalization, and campaign performance.",
    items: [
      "AI Video",
      "AI Creative",
      "AI Content",
      "Marketing Automation",
    ],
  },
];

/* =========================================================
   EACH CARD GETS ITS OWN ACCENT
========================================================= */

const accents = [
  {
    border: "#F43F8F",
    soft: "#FFF1F7",
    icon: "#E11D68",
  },
  {
    border: "#059669",
    soft: "#ECFDF5",
    icon: "#059669",
  },
  {
    border: "#EA580C",
    soft: "#FFF7ED",
    icon: "#EA580C",
  },
  {
    border: "#E11D48",
    soft: "#FFF1F2",
    icon: "#E11D48",
  },
  {
    border: "#0891B2",
    soft: "#ECFEFF",
    icon: "#0891B2",
  },
  {
    border: "#0F766E",
    soft: "#F0FDFA",
    icon: "#0F766E",
  },
  {
    border: "#DB2777",
    soft: "#FDF2F8",
    icon: "#DB2777",
  },
  {
    border: "#2563EB",
    soft: "#EFF6FF",
    icon: "#2563EB",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[220px] h-[360px] w-[360px] rounded-full bg-[#F4F7FB]" />

      <div className="pointer-events-none absolute right-[-180px] top-[700px] h-[420px] w-[420px] rounded-full bg-[#F7F9FC]" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <div className="mx-auto mb-9 max-w-4xl text-center sm:mb-10 lg:mb-12">

          {/* Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B79A72]" />

            <span
              className="text-[11px] font-semibold uppercase tracking-[0.28em] sm:text-xs"
              style={{ color: "#B79A72" }}
            >
              Our Services
            </span>

            <span className="h-px w-10 bg-[#B79A72]" />
          </div>

        {/* Heading */}

<h2
  className="font-[var(--font-new-york)] text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-4xl md:text-5xl lg:text-[58px]"
  style={{ color: BRAND }}
>
  Digital Marketing Services
  <br />
  <span className="text-[#C6A77A]">
  That Drive Real Growth
  </span>
</h2>

{/* Description */}

<p
  className="mx-auto mt-5 max-w-3xl text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8"
  style={{ color: "#64748B" }}
>
  SHARPRAYS is a digital marketing agency helping businesses increase
  online visibility, attract qualified audiences, and turn attention
  into measurable growth. Our services include SEO, social media
  marketing, performance marketing, content marketing, web
  development, digital PR, video and creative, and AI marketing.
</p>        </div>

        {/* ===================================================
            SERVICE GRID
        =================================================== */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const accent = accents[index % accents.length];

            return (
              <article
                key={service.slug}
                className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white transition-all duration-500 hover:-translate-y-1"
                style={{
                  border: `1.5px solid ${accent.border}`,
                  boxShadow: `0 12px 40px ${accent.border}10`,
                }}
              >
                {/* =================================================
                    IMAGE AREA
                ================================================= */}

                <div
                  className="relative mx-3 mt-3 flex h-[215px] shrink-0 items-center justify-center overflow-hidden rounded-[22px]"
                  style={{
                    backgroundColor: accent.soft,
                  }}
                >
                  {/* Soft decorative circle */}

                  <div
                    className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-60"
                    style={{
                      backgroundColor: `${accent.border}12`,
                    }}
                  />

                  <div
                    className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full opacity-50"
                    style={{
                      backgroundColor: `${accent.border}10`,
                    }}
                  />

                  {/* Service image */}

                  <div className="relative z-10 h-[200px] w-[200px] transition-transform duration-700 ease-out group-hover:scale-[1.06]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 240px"
                      className="object-contain"
                    />
                  </div>

                  {/* Icon */}

                  <div
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm"
                    style={{
                      color: accent.icon,
                      border: `1px solid ${accent.border}35`,
                    }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="px-6 pb-5 pt-5 sm:px-7">

                  {/* Title */}

                  <h3
                    className="font-[var(--font-new-york)] text-[27px] font-semibold leading-[1.05] tracking-[-0.025em]"
                    style={{ color: BRAND }}
                  >
                    {service.title}
                  </h3>

                  {/* Accent line */}

                  <div
                    className="my-4 h-[2px] w-10 rounded-full"
                    style={{
                      backgroundColor: accent.border,
                    }}
                  />

                  {/* Description */}

                  <p
                    className="text-[15px] leading-6"
                    style={{ color: "#64748B" }}
                  >
                    {service.description}
                  </p>

                  {/* =================================================
                      EXPLORE MORE
                  ================================================= */}

                  <Link
                    href={service.slug}
                    className="mt-4 flex items-center gap-3 text-[14px] font-semibold transition-all duration-300"
                    style={{ color: accent.border }}
                  >
                    <span>Explore More</span>

                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        borderColor: `${accent.border}45`,
                      }}
                    >
                      <span className="text-lg leading-none">
                        →
                      </span>
                    </span>
                  </Link>
                </div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <div
                  className="absolute bottom-0 left-0 h-[3px] w-full opacity-70"
                  style={{
                    backgroundColor: accent.border,
                  }}
                />
              </article>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

      </div>
    </section>
  );
}