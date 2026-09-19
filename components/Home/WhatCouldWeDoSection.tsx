"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  BarChart3,
  Code2,
  Video,
  Brain,
} from "lucide-react";

const BRAND = "#0B2A52";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   SERVICES
   CONTENT UPDATED ONLY
   UI / STYLE / COLORS REMAIN SAME
========================================================= */

const services = [
  {
    icon: Megaphone,

    title: "Social Media Marketing",

    slug: "/services/social-media-marketing",

    image: "/whatwedo/social-media1.png",

    description:
      "Build a stronger and more recognizable social presence through strategy, content, publishing, community engagement, and ongoing social media management.",

    items: [
      "Social Media Strategy",
      "Content Planning",
      "Social Media Management",
      "Community Engagement",
    ],
  },

  {
    icon: Search,

    title: "Search Engine Optimization (SEO)",

    slug: "/services/seo",

    image: "/seo.webp",

    description:
      "Improve your organic search visibility with technical SEO, keyword and search intent strategy, on-page optimization, content, and ongoing performance analysis.",

    items: [
      "Technical SEO",
      "Keyword Strategy",
      "On-Page SEO",
      "Organic Growth",
    ],
  },

  {
    icon: BarChart3,

    title: "Performance Marketing / Paid Media",

    slug: "/services/performance-marketing",

    image: "/whatwedo/performance-maketing.png",

    description:
      "Generate measurable leads, sales, and business growth through paid advertising campaigns built around targeting, creative testing, tracking, and conversion performance.",

    items: [
      "Google Ads",
      "Meta Ads",
      "Paid Social",
      "Conversion Tracking",
    ],
  },

  {
    icon: Code2,

    title: "Website Development & Management",

    slug: "/services/web-development",

    image: "/whatwedo/web.png",

    description:
      "Plan, design, develop, and manage responsive websites built for clearer user journeys, strong performance, search visibility, and meaningful business actions.",

    items: [
      "Website Strategy",
      "UX / UI Design",
      "Web Development",
      "Website Management",
    ],
  },

  {
    icon: Video,

    title: "AI Video & Video Editing",

    slug: "/services/ai-video-and-video-editing",

    image: "/whatwedo/video-creative.png",

    description:
      "Create, edit, and adapt video content using modern production workflows, AI-assisted creative tools, motion, captions, and platform-ready post-production.",

    items: [
      "AI Video Creation",
      "Video Editing",
      "Reels & Shorts",
      "Motion & Graphics",
    ],
  },

  {
    icon: Brain,

    title: "AI Automation",

    slug: "/services/ai-automation",

    image: "/whatwedo/ai.webp",

    description:
      "Use practical AI automation to reduce repetitive work, connect marketing workflows, organize information, and help teams operate more efficiently.",

    items: [
      "Marketing Automation",
      "AI Workflows",
      "Lead Automation",
      "Process Automation",
    ],
  },
];

/* =========================================================
   EACH CARD GETS ITS OWN ACCENT
   SAME COLORS — NOT CHANGED
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
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[220px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#F4F7FB]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[700px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#F7F9FC]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
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
            mb-9
            max-w-4xl
            text-center
            sm:mb-10
            lg:mb-12
          "
        >
          {/* Label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="
              mb-5
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
                text-[11px]
            
                uppercase
                tracking-[0.28em]
                sm:text-xs
              "
              style={{
                color: "#B79A72",
              }}
            >
              Our Services
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
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease,
            }}
            className="
              font-[var(--font-new-york)]
              text-4xl
              font-medium
              leading-[1.02]
              tracking-[-0.035em]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
            style={{
              color: BRAND,
            }}
          >
            Digital Marketing Services
            <br />

            <span className="text-[#C6A77A]">
              That Drive Real Growth
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              delay: 0.28,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-7

              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
            style={{
              color: "#64748B",
            }}
          >
            SHARPRAYS helps businesses strengthen their digital presence through
            social media marketing, SEO, paid media, website development,
            AI-powered video production, and practical AI automation.
          </motion.p>
        </motion.div>

        {/* ===================================================
            SERVICE GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:grid-cols-3

            xl:gap-6
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            const accent =
              accents[index % accents.length];

            return (
              <motion.article
                key={service.slug}
                initial={{
                  opacity: 0,
                  y: 65,
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
                  duration: 0.8,
                  delay: index * 0.08,
                  ease,
                }}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  bg-white
                  transition-all
                  duration-500

                  hover:-translate-y-1
                "
                style={{
                  border: `1.5px solid ${accent.border}`,
                  boxShadow: `0 12px 40px ${accent.border}10`,
                }}
              >
                {/* =================================================
                    IMAGE AREA
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08 + 0.1,
                    ease,
                  }}
                  className="
                    relative
                    mx-3
                    mt-3
                    flex
                    h-[215px]
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[22px]
                  "
                  style={{
                    backgroundColor: accent.soft,
                  }}
                >
                  {/* Soft decorative circle */}

                  <div
                    className="
                      absolute
                      -right-12
                      -top-12
                      h-36
                      w-36
                      rounded-full
                      opacity-60
                    "
                    style={{
                      backgroundColor: `${accent.border}12`,
                    }}
                  />

                  <div
                    className="
                      absolute
                      -bottom-16
                      -left-12
                      h-40
                      w-40
                      rounded-full
                      opacity-50
                    "
                    style={{
                      backgroundColor: `${accent.border}10`,
                    }}
                  />

                  {/* Service image */}

                  <div
                    className="
                      relative
                      z-10
                      h-[200px]
                      w-[200px]
                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-[1.06]
                    "
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="
                        (max-width: 640px) 80vw,
                        (max-width: 1024px) 40vw,
                        240px
                      "
                      className="object-contain"
                    />
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      shadow-sm
                    "
                    style={{
                      color: accent.icon,
                      border: `1px solid ${accent.border}35`,
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>
                </motion.div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 35,
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
                    duration: 0.7,
                    delay: index * 0.08 + 0.2,
                    ease,
                  }}
                  className="
                    flex
                    flex-1
                    flex-col
                    px-6
                    pb-5
                    pt-5
                    sm:px-7
                  "
                >
                  {/* Title */}

                  <h3
                    className="
                      font-[var(--font-new-york)]
                      text-[27px]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.025em]
                    "
                    style={{
                      color: BRAND,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Accent line */}

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.08 + 0.35,
                      ease,
                    }}
                    style={{
                      transformOrigin: "left",
                      backgroundColor: accent.border,
                    }}
                    className="
                      my-4
                      h-[2px]
                      w-10
                      rounded-full
                    "
                  />

                  {/* Description */}

                  <p
                    className="
                      text-[15px]
                      leading-6
                    "
                    style={{
                      color: "#64748B",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* =================================================
                      SERVICE ITEMS
                  ================================================= */}

                  <div
                    className="
                      mt-5
                      grid
                      grid-cols-2
                      gap-x-4
                      gap-y-2.5
                    "
                  >
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-start
                          gap-2
                        "
                      >
                        <span
                          className="
                            mt-[7px]
                            h-1
                            w-1
                            shrink-0
                            rounded-full
                          "
                          style={{
                            backgroundColor:
                              accent.border,
                          }}
                        />

                        <span
                          className="
                            text-[12px]
                            leading-[1.45]
                          "
                          style={{
                            color: "#64748B",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* =================================================
                      EXPLORE MORE
                  ================================================= */}

                  <Link
                    href={service.slug}
                    className="
                      mt-auto
                      flex
                      items-center
                      gap-3
                      pt-5
                      text-[14px]
                      font-semibold
                      transition-all
                      duration-300
                    "
                    style={{
                      color: accent.border,
                    }}
                  >
                    <span>Explore More</span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300

                        group-hover:translate-x-1
                      "
                      style={{
                        borderColor:
                          `${accent.border}45`,
                      }}
                    >
                      <span className="text-lg leading-none">
                        →
                      </span>
                    </span>
                  </Link>
                </motion.div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-full
                    opacity-70
                  "
                  style={{
                    backgroundColor: accent.border,
                  }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}