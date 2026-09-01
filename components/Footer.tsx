"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

/* ===========================================================
   NAVIGATION
=========================================================== */

const exploreLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Strategy", href: "#strategy" },
  { label: "Social", href: "#social" },
  { label: "Performance", href: "#performance" },
  { label: "SEO", href: "#seo" },
];

/* ===========================================================
   SOCIAL ICONS
=========================================================== */

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.12 3.6a2.12 2.12 0 1 1 0 4.24 2.12 2.12 0 0 1 0-4.24ZM3.3 8.9h3.65v11.75H3.3V8.9Zm5.9 0h3.5v1.6h.05c.49-.93 1.68-1.9 3.46-1.9 3.7 0 4.38 2.43 4.38 5.59v6.46h-3.65v-5.73c0-1.37-.03-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03v5.83H9.2V8.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.35"
        cy="6.65"
        r="0.85"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/* ===========================================================
   SOCIAL LINKS
=========================================================== */

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
  {
    label: "hello@sharprays.com",
    href: "mailto:hello@sharprays.com",
    icon: Mail,
  },
  {
    label: "+91 123 456 7890",
    href: "tel:+911234567890",
    icon: Phone,
  },
];

/* ===========================================================
   FOOTER
=========================================================== */

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] text-[#0B2A52]">

      {/* =====================================================
          TOP DECORATIVE LINE
      ===================================================== */}

      <div className="mx-auto max-w-[1440px] px-6 pt-8 sm:px-8 md:pt-10 lg:px-12 xl:px-16">
        <div className="flex items-center">

          <div className="h-px flex-1 bg-[#0B2A52]/10" />

          <span
            className="
              mx-4
              h-[6px]
              w-[6px]
              shrink-0
              rounded-full
              bg-[#C6A77A]
              sm:mx-6
            "
          />

          <div className="h-px flex-1 bg-[#0B2A52]/10" />

        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        <div
          className="
            grid
            grid-cols-2
            gap-x-8
            gap-y-14
            py-14
            sm:gap-x-12
            sm:py-16
            lg:grid-cols-[1.45fr_0.75fr_0.8fr_0.95fr_1.35fr]
            lg:gap-12
            lg:py-20
            xl:gap-16
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            className="col-span-2 lg:col-span-1"
          >

            {/* Logo */}

            <a
              href="#"
              className="
                group
                inline-flex
                items-center
                gap-3.5
              "
            >

              {/* Logo Mark */}

              <span
                className="
                  relative
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center
                  overflow-hidden
                  bg-[#0B2A52]
                  transition-transform
                  duration-300
                  group-hover:scale-[1.03]
                "
              >

                {/* Gold diagonal */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[20px]
                    w-[20px]
                    bg-[#C6A77A]
                  "
                  style={{
                    clipPath:
                      "polygon(0 100%, 100% 100%, 100% 0)",
                  }}
                />

                {/* White diagonal */}

                <span
                  className="
                    absolute
                    right-0
                    top-0
                    h-full
                    w-[1px]
                    rotate-[45deg]
                    bg-white/80
                  "
                />

                {/* S */}

                <span
                  className="
                    relative
                    z-10
                    font-[var(--font-new-york)]
                    text-[19px]
                    font-medium
                    text-white
                  "
                >
                  S
                </span>

              </span>

              {/* Logo text */}

              <span
                className="
                  text-[18px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#0B2A52]
                  sm:text-[19px]
                "
              >
                SHARPRAYS
              </span>

            </a>

            {/* Gold accent */}

            <div
              className="
                mt-7
                h-[2px]
                w-8
                bg-[#C6A77A]
              "
            />

            {/* Description */}

            <p
              className="text-[clamp(1rem,1.15vw,1.125rem)] leading-[1.65] 
                mt-5
                max-w-[270px]
                
                leading-[1.75]
                /65
                
              "
            >
              Digital growth,
              <br />
              without the guesswork.
            </p>

          </motion.div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <FooterColumn
            title="Explore"
            links={exploreLinks}
            delay={0.05}
          />

          {/* =================================================
              SERVICES
          ================================================= */}

          <FooterColumn
            title="Services"
            links={serviceLinks}
            delay={0.1}
          />

          {/* =================================================
              CONNECT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: 0.15,
            }}
          >

            <FooterHeading>
              Connect
            </FooterHeading>

            <div className="mt-6 flex flex-col gap-4">

              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-3
                      text-[12px]
                      text-[#0B2A52]/65
                      transition-colors
                      duration-300
                      hover:text-[#0B2A52]
                      sm:text-[13px]
                    "
                  >

                    {/* Icon */}

                    <span
                      className="
                        flex
                        h-[28px]
                        w-[28px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#0B2A52]/[0.045]
                        text-[#0B2A52]/65
                        transition-all
                        duration-300
                        group-hover:bg-[#C6A77A]/20
                        group-hover:text-[#0B2A52]
                      "
                    >
                      <Icon />
                    </span>

                    <span>
                      {item.label}
                    </span>

                  </a>
                );
              })}

            </div>

          </motion.div>

          {/* =================================================
              NEWSLETTER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: 0.2,
            }}
          >

            <FooterHeading>
              Let&apos;s Stay In Touch
            </FooterHeading>

            {/* Description */}

            <p
              className="text-[clamp(1rem,1.15vw,1.125rem)] leading-[1.65] 
                mt-6
                max-w-[270px]
                
                leading-[1.75]
                /60
                
              "
            >
              Get insights, ideas, and strategies
              <br className="hidden sm:block" />
              that help you grow.
            </p>

            {/* Newsletter */}

            <form
              onSubmit={(e) => e.preventDefault()}
              className="
                group
                mt-6
                flex
                h-[44px]
                w-full
                max-w-[300px]
                overflow-hidden
                rounded-[3px]
                border
                border-[#0B2A52]/12
                bg-white
                transition-all
                duration-300
                focus-within:border-[#C6A77A]
                focus-within:shadow-[0_8px_30px_rgba(11,42,82,0.07)]
              "
            >

              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-4
                  text-[12px]
                  text-[#0B2A52]
                  outline-none
                  placeholder:text-[#0B2A52]/35
                "
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="
                  flex
                  w-[48px]
                  shrink-0
                  items-center
                  justify-center
                  bg-[#0B2A52]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#C6A77A]
                  hover:text-[#0B2A52]
                "
              >
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

            </form>

          </motion.div>

        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}

        <div className="h-px w-full bg-[#0B2A52]/10" />

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            py-7
            text-[11px]
            text-[#0B2A52]/50
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-6
            sm:text-[12px]
          "
        >

          {/* Copyright */}

          <p>
            © 2026 SHARPRAYS. All rights reserved.
          </p>

          {/* Center */}

          <p
            className="text-[clamp(1rem,1.15vw,1.125rem)] leading-[1.65] 
              order-3
              flex
              items-center
              gap-1.5
              sm:order-2
            "
          >
            Made with intention.

            <span className="text-[#C6A77A]">
              ♥
            </span>
          </p>

          {/* Legal */}

          <div
            className="
              order-2
              flex
              flex-wrap
              items-center
              gap-3
              sm:order-3
              sm:gap-4
            "
          >

            <a
              href="#privacy"
              className="
                transition-colors
                duration-200
                hover:text-[#0B2A52]
              "
            >
              Privacy Policy
            </a>

            <span className="text-[#0B2A52]/20">
              •
            </span>

            <a
              href="#terms"
              className="
                transition-colors
                duration-200
                hover:text-[#0B2A52]
              "
            >
              Terms &amp; Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

/* ===========================================================
   FOOTER COLUMN
=========================================================== */

function FooterColumn({
  title,
  links,
  delay = 0,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.55,
        delay,
      }}
    >

      <FooterHeading>
        {title}
      </FooterHeading>

      <div className="mt-6 flex flex-col gap-4">

        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="
              group
              flex
              w-fit
              items-center
              text-[12px]
              text-[#0B2A52]/65
              transition-colors
              duration-300
              hover:text-[#0B2A52]
              sm:text-[13px]
            "
          >

            <span
              className="
                relative
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              {link.label}

              {/* Hover underline */}

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-px
                  w-0
                  bg-[#C6A77A]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </span>

          </a>
        ))}

      </div>

    </motion.div>
  );
}

/* ===========================================================
   FOOTER HEADING
=========================================================== */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      className="text-[clamp(1rem,1.15vw,1.125rem)] leading-[1.65] 
        
        font-semibold
        uppercase
        tracking-[0.2em]
        
        
      "
    >
      {children}
    </p>
  );
}