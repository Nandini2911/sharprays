"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowRight, Heart, Mail, Phone } from "lucide-react";

/* ================================================================
   DATA
================================================================ */

const services = [
  {
    label: "Social Media Marketing",
    href: "/services/social-media-marketing",
  },
  {
    label: "Search Engine Optimization (SEO)",
    href: "/services/search-engine-optimization",
  },
  {
    label: "Performance Marketing/ Paid Media",
    href: "/services/performance-marketing",
  },
  {
    label: "Website Development & Management",
    href: "/services/website-development",
  },
  {
    
    label: "AI Video & Video Editing",
    href: "/services/ai-video-video-editing",
  },
  {
    label: "AI Automation",
    href: "/services/ai-automation",
  },
];

const exploreLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/* ================================================================
   FOOTER
================================================================ */

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(180deg,#F8FAFD_0%,#F4F7FB_48%,#EEF4FA_100%)]
        text-[#0B2A52]
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[220px]
          -top-[240px]
          h-[720px]
          w-[720px]
          rounded-full
          bg-[radial-gradient(circle,rgba(11,42,82,0.075)_0%,rgba(11,42,82,0.025)_40%,transparent_72%)]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[280px]
          -left-[220px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(circle,rgba(183,154,114,0.10)_0%,rgba(183,154,114,0.025)_44%,transparent_72%)]
          blur-3xl
        "
      />

      {/* =========================================================
          LOGO WATERMARK
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[6%]
          top-[15px]
          hidden
          h-[270px]
          w-[350px]
          overflow-hidden
          opacity-[0.05]
          lg:block
        "
      >
        <Image
          src="/logo/sharp-rays-logo.png"
          alt=""
          width={1500}
          height={500}
          className="
            absolute
            left-0
            top-1/2
            h-auto
            w-[1460px]
            max-w-none
            -translate-y-1/2
            object-contain
          "
        />
      </div>

      {/* =========================================================
          MAIN WRAPPER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1760px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* =======================================================
            TOP INTRO
        ======================================================= */}

        <div
          className="
            flex
            min-h-[220px]
            items-start
            justify-between
            gap-10
            pt-20
            sm:min-h-[240px]
            sm:pt-24
            lg:min-h-[270px]
            lg:pt-28
          "
        >
          {/* LEFT */}

          <div className="flex items-start gap-5 sm:gap-6">
            <span
              className="
                mt-[13px]
                block
                h-px
                w-10
                shrink-0
                bg-[#B79A72]
                sm:w-12
              "
            />

            <p
              className="
                font-serif
                text-[11px]
                font-semibold
                uppercase
                leading-[1.8]
                tracking-[0.34em]
                text-[#0B2A52]
                sm:text-[12px]
              "
            >
              Let&apos;s Build
              <br />
              What&apos;s Next
            </p>
          </div>

          {/* RIGHT */}

          <div
            className="
              hidden
              items-center
              gap-6
              md:flex
              lg:gap-7
              lg:pr-5
              2xl:pr-10
            "
          >
            <span className="h-[58px] w-px bg-[#0B2A52]/15" />

            <span
              className="
                font-serif
                text-[28px]
                leading-none
                text-[#B79A72]
              "
            >
              ✦
            </span>

            <p
              className="
                font-serif
                text-[11px]
                font-semibold
                uppercase
                leading-[1.7]
                tracking-[0.32em]
                text-[#0B2A52]
                sm:text-[12px]
              "
            >
              Ideas
              <br />
              Strategy
              <br />
              Impact
            </p>
          </div>
        </div>

        {/* =======================================================
            MAIN FOOTER GRID
        ======================================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            xl:grid-cols-[1.15fr_1.25fr_0.72fr_0.95fr]
            2xl:grid-cols-[1.05fr_1.15fr_0.65fr_0.9fr_1.28fr]
          "
        >
          {/* =====================================================
              BRAND
          ===================================================== */}

          <div
            className="
              border-b
              border-[#0B2A52]/10
              pb-12

              sm:pb-14

              lg:border-r
              lg:px-8
              lg:pb-14
              lg:first:pl-0

              xl:border-b-0
              xl:px-10
              xl:first:pl-0

              2xl:px-11
            "
          >
            <Link
              href="/"
              aria-label="Sharp Rays Home"
              className="inline-flex"
            >
              <Image
                src="/logo/sharp-rays-logo.png"
                alt="Sharp Rays"
                width={360}
                height={110}
                className="
                  h-auto
                  w-[240px]
                  object-contain
                  object-left
                  sm:w-[275px]
                  xl:w-[285px]
                "
              />
            </Link>

            <GoldLine className="mt-8" />

            <h3
              className="
                mt-7
                max-w-[320px]
                font-serif
                text-[27px]
                leading-[1.15]
                tracking-[-0.025em]
                text-[#0B2A52]
                sm:text-[29px]
                xl:text-[30px]
              "
            >
              Digital growth,
              <br />
              without the guesswork.
            </h3>

            <p
              className="
                mt-5
                max-w-[345px]
                text-[14px]
                leading-[1.8]
                text-[#0B2A52]/65
                sm:text-[15px]
              "
            >
              We blend strategy, creativity and technology to help ambitious
              brands grow in a smarter, more meaningful way.
            </p>

            {/* SOCIAL ICONS */}

            <div className="mt-8 flex items-center gap-3.5">
              <SocialIcon
                href="https://www.linkedin.com/"
                label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialIcon>

              <SocialIcon
                href="https://www.instagram.com/"
                label="Instagram"
              >
                <InstagramIcon />
              </SocialIcon>

              <SocialIcon
                href="https://www.youtube.com/"
                label="YouTube"
              >
                <YouTubeIcon />
              </SocialIcon>
            </div>

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.27em]
                text-[#0B2A52]/85
              "
            >
              <span>Brands</span>
              <Dot />
              <span>People</span>
              <Dot />
              <span>Progress</span>
            </div>
          </div>

          {/* =====================================================
              SERVICES
          ===================================================== */}

          <div
            className="
              border-b
              border-[#0B2A52]/10
              py-12

              sm:py-14

              lg:border-r
              lg:px-9
              lg:py-0
              lg:pb-14

              xl:border-b-0
              xl:px-10
              xl:pb-0

              2xl:px-11
            "
          >
            <FooterHeading>Our Services</FooterHeading>

            <GoldLine />

            <nav className="mt-8 space-y-[22px]">
              {services.map((service) => (
                <ServiceFooterLink
                  key={service.label}
                  href={service.href}
                >
                  {service.label}
                </ServiceFooterLink>
              ))}
            </nav>
          </div>

          {/* =====================================================
              EXPLORE
          ===================================================== */}

          <div
            className="
              border-b
              border-[#0B2A52]/10
              py-12

              sm:py-14

              lg:border-r
              lg:px-9

              xl:border-b-0
              xl:px-10
              xl:py-0

              2xl:px-9
            "
          >
            <FooterHeading>Explore</FooterHeading>

            <GoldLine />

            <nav className="mt-8 space-y-[22px]">
              {exploreLinks.map((item) => (
                <FooterTextLink
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </FooterTextLink>
              ))}
            </nav>
          </div>

          {/* =====================================================
              CONNECT
          ===================================================== */}

          <div
            className="
              border-b
              border-[#0B2A52]/10
              py-12

              sm:py-14

              lg:px-9

              xl:border-b-0
              xl:border-r
              xl:px-10
              xl:py-0

              2xl:px-10
            "
          >
            <FooterHeading>Connect</FooterHeading>

            <GoldLine />

            <div className="mt-8 space-y-5">
              <ContactItem
                href="https://www.linkedin.com/"
                icon={<LinkedInIcon />}
              >
                LinkedIn
              </ContactItem>

              <ContactItem
                href="https://www.instagram.com/"
                icon={<InstagramIcon />}
              >
                Instagram
              </ContactItem>

              <ContactItem
                href="mailto:hello@sharprays.com"
                icon={
                  <Mail
                    className="h-[16px] w-[16px]"
                    strokeWidth={1.8}
                  />
                }
              >
                hello@sharprays.com
              </ContactItem>

              <ContactItem
                href="tel:+911234567890"
                icon={
                  <Phone
                    className="h-[16px] w-[16px]"
                    strokeWidth={1.8}
                  />
                }
              >
                +91 123 456 7890
              </ContactItem>
            </div>

            <div className="mt-10 h-px w-10 bg-[#B79A72]" />

            <p
              className="
                mt-6
                max-w-[220px]
                font-serif
                text-[16px]
                italic
                leading-[1.6]
                text-[#0B2A52]/60
              "
            >
              Let&apos;s turn good ideas into great outcomes.
            </p>
          </div>

          {/* =====================================================
              NEWSLETTER
          ===================================================== */}

          <div
            className="
              col-span-1
              pt-12

              sm:pt-14

              lg:col-span-2

              xl:col-span-4
              xl:pt-16

              2xl:col-span-1
              2xl:pl-12
              2xl:pt-0
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-[#0B2A52]/[0.12]
                bg-white/75
                shadow-[0_24px_70px_rgba(11,42,82,0.055)]
                backdrop-blur-sm

                2xl:min-h-[440px]
              "
            >
              {/* BACKGROUND DETAIL */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-[140px]
                  -top-[150px]
                  h-[320px]
                  w-[320px]
                  rounded-full
                  bg-[radial-gradient(circle,rgba(11,42,82,0.055)_0%,transparent_68%)]
                "
              />

              <div
                className="
                  relative
                  grid
                  grid-cols-1
                  gap-10
                  p-7

                  sm:p-9

                  md:grid-cols-[1fr_1fr]
                  md:items-center
                  md:p-10

                  xl:grid-cols-[0.95fr_1.05fr]
                  xl:gap-16
                  xl:p-12

                  2xl:block
                  2xl:p-9
                "
              >
                {/* NEWSLETTER CONTENT */}

                <div>
                  <FooterHeading>
                    Let&apos;s Stay In Touch
                  </FooterHeading>

                  <GoldLine />

                  <h3
                    className="
                      mt-7
                      max-w-[500px]
                      font-serif
                      text-[27px]
                      leading-[1.2]
                      tracking-[-0.025em]
                      text-[#0B2A52]

                      sm:text-[30px]
                      lg:text-[32px]
                      2xl:text-[27px]
                    "
                  >
                    Get insights, ideas, and strategies that help you grow.
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[470px]
                      text-[14px]
                      leading-[1.75]
                      text-[#0B2A52]/58
                      2xl:hidden
                    "
                  >
                    Useful thinking on digital growth, creative, technology and
                    smarter ways to move your business forward.
                  </p>
                </div>

                {/* NEWSLETTER FORM */}

                <div className="relative">
                  <form
                    className="
                      flex
                      w-full
                      max-w-[580px]
                      overflow-hidden
                      rounded-[9px]
                      border
                      border-[#0B2A52]/15
                      bg-white
                      shadow-[0_8px_25px_rgba(11,42,82,0.035)]
                    "
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <label
                      htmlFor="footer-email"
                      className="sr-only"
                    >
                      Your email address
                    </label>

                    <input
                      id="footer-email"
                      type="email"
                      placeholder="Your email address"
                      className="
                        min-w-0
                        flex-1
                        bg-transparent
                        px-5
                        py-[18px]
                        text-[14px]
                        text-[#0B2A52]
                        outline-none
                        placeholder:text-[#0B2A52]/35
                        sm:px-6
                      "
                    />

                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="
                        group
                        flex
                        w-[68px]
                        shrink-0
                        items-center
                        justify-center
                        bg-[#0B2A52]
                        text-white
                        transition-colors
                        duration-300
                        hover:bg-[#133B6D]
                        sm:w-[74px]
                      "
                    >
                      <ArrowRight
                        className="
                          h-[19px]
                          w-[19px]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                        strokeWidth={1.5}
                      />
                    </button>
                  </form>

                  <p
                    className="
                      mt-4
                      text-[13px]
                      text-[#0B2A52]/55
                    "
                  >
                    No spam. Just the good stuff.
                  </p>

                  {/* SIGNATURE */}

                  <div
                    aria-hidden="true"
                    className="
                      mt-10
                      flex
                      items-end
                      justify-end

                      md:mt-8

                      2xl:absolute
                      2xl:bottom-[-135px]
                      2xl:right-0
                    "
                  >
                    <div className="text-right">
                      <p
                        className="
                          -rotate-[7deg]
                          font-serif
                          text-[39px]
                          italic
                          leading-[0.82]
                          tracking-[-0.05em]
                          text-[#0B2A52]/20
                          sm:text-[44px]
                          2xl:text-[40px]
                        "
                      >
                        Grow
                        <br />
                        Brighter
                      </p>

                      <span
                        className="
                          ml-auto
                          mt-5
                          block
                          h-px
                          w-10
                          bg-[#B79A72]
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            DIVIDER
        ======================================================= */}

        <div
          className="
            mt-16
            h-px
            w-full
            bg-[#0B2A52]/12
            sm:mt-20
          "
        />

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <div
          className="
            relative
            flex
            flex-col
            gap-6
            py-8
            text-[13px]
            text-[#0B2A52]/65

            sm:py-9

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p>© 2026 SHARPRAYS. All rights reserved.</p>

          <p
            className="
              flex
              items-center
              gap-2

              lg:absolute
              lg:left-1/2
              lg:-translate-x-1/2
            "
          >
            Made with intention.

            <Heart
              className="
                h-[14px]
                w-[14px]
                fill-[#B79A72]
                text-[#B79A72]
              "
              strokeWidth={1.3}
            />
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-5
              sm:gap-7
            "
          >
            <FooterTextLink href="/privacy-policy">
              Privacy Policy
            </FooterTextLink>

            <Dot />

            <FooterTextLink href="/terms-and-conditions">
              Terms & Conditions
            </FooterTextLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   SERVICE LINK
   GOLD LINE APPEARS ONLY WHEN CURSOR IS ON TEXT
================================================================ */

function ServiceFooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const [textHovered, setTextHovered] = useState(false);

  return (
    <Link
      href={href}
      className="
        flex
        items-center
        justify-between
        gap-6
        text-[14px]
        leading-[1.55]
        sm:text-[15px]
      "
    >
      {/* TEXT AREA */}

      <span
        className="relative inline-block cursor-pointer pb-[7px]"
        onMouseEnter={() => setTextHovered(true)}
        onMouseLeave={() => setTextHovered(false)}
      >
        <span
          className="
            block
            transition-colors
            duration-300
            ease-out
          "
          style={{
            color: textHovered ? "#B79A72" : "#0B2A52",
          }}
        >
          {children}
        </span>

        {/* GOLD LINE */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            block
            h-[2px]
            bg-[#B79A72]
            transition-all
            duration-300
            ease-out
          "
          style={{
            width: textHovered ? "100%" : "0%",
            opacity: textHovered ? 1 : 0,
          }}
        />
      </span>

      {/* ARROW */}

      <ArrowRight
        className="
          h-[15px]
          w-[15px]
          shrink-0
          transition-all
          duration-300
          ease-out
        "
        strokeWidth={1.5}
        style={{
          color: textHovered
            ? "#B79A72"
            : "rgba(11,42,82,0.42)",

          transform: textHovered
            ? "translateX(5px)"
            : "translateX(0px)",
        }}
      />
    </Link>
  );
}

/* ================================================================
   EXPLORE + BOTTOM LINKS
================================================================ */

function FooterTextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="block w-fit"
    >
      <span
        className="
          relative
          inline-block
          cursor-pointer
          pb-[7px]
        "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="
            block
            transition-colors
            duration-300
            ease-out
          "
          style={{
            color: hovered ? "#B79A72" : "#0B2A52",
          }}
        >
          {children}
        </span>

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            block
            h-[2px]
            bg-[#B79A72]
            transition-all
            duration-300
            ease-out
          "
          style={{
            width: hovered ? "100%" : "0%",
            opacity: hovered ? 1 : 0,
          }}
        />
      </span>
    </Link>
  );
}

/* ================================================================
   CONTACT ITEM
================================================================ */

function ContactItem({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        flex
        w-fit
        items-center
        gap-3.5
        text-[14px]
      "
    >
      {/* ICON */}

      <span
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#0B2A52]/[0.07]
          bg-white/60
          text-[#0B2A52]
          transition-all
          duration-300
      "
      >
        {icon}
      </span>

      {/* TEXT */}

      <span
        className="
          relative
          inline-block
          cursor-pointer
          pb-[7px]
        "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="
            block
            transition-colors
            duration-300
            ease-out
          "
          style={{
            color: hovered ? "#B79A72" : "#0B2A52",
          }}
        >
          {children}
        </span>

        {/* GOLD LINE */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            block
            h-[2px]
            bg-[#B79A72]
            transition-all
            duration-300
            ease-out
          "
          style={{
            width: hovered ? "100%" : "0%",
            opacity: hovered ? 1 : 0,
          }}
        />
      </span>
    </a>
  );
}

/* ================================================================
   FOOTER HEADING
================================================================ */

function FooterHeading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p
      className="
        text-[11px]
        font-semibold
        uppercase
        tracking-[0.29em]
        text-[#0B2A52]
        sm:text-[12px]
      "
    >
      {children}
    </p>
  );
}

/* ================================================================
   GOLD LINE
================================================================ */

function GoldLine({
  className = "mt-5",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        ${className}
        h-[2px]
        w-9
        bg-[#B79A72]
      `}
    />
  );
}

/* ================================================================
   DOT
================================================================ */

function Dot() {
  return (
    <span
      className="
        block
        h-[5px]
        w-[5px]
        shrink-0
        rounded-full
        bg-[#B79A72]
      "
    />
  );
}

/* ================================================================
   SOCIAL ICON
================================================================ */

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-[#0B2A52]/[0.07]
        bg-white/65
        text-[#0B2A52]
        shadow-[0_5px_18px_rgba(11,42,82,0.035)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#0B2A52]
        hover:bg-[#0B2A52]
        hover:text-white
        hover:shadow-[0_10px_25px_rgba(11,42,82,0.13)]
      "
    >
      {children}
    </a>
  );
}

/* ================================================================
   LINKEDIN ICON
================================================================ */

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.25 3.5A1.75 1.75 0 1 1 5.25 7a1.75 1.75 0 0 1 0-3.5ZM3.75 8.5h3v11.75h-3V8.5Zm5 0h2.875v1.6h.04c.4-.76 1.38-1.96 3.84-1.96 4.105 0 4.865 2.7 4.865 6.215v5.895h-3v-5.23c0-1.25-.025-2.855-1.74-2.855-1.74 0-2.005 1.36-2.005 2.765v5.32h-3V8.5Z" />
    </svg>
  );
}

/* ================================================================
   INSTAGRAM ICON
================================================================ */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.4"
        cy="6.6"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/* ================================================================
   YOUTUBE ICON
================================================================ */

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.55 7.17a2.86 2.86 0 0 0-2.01-2.02C17.76 4.67 12 4.67 12 4.67s-5.76 0-7.54.48A2.86 2.86 0 0 0 2.45 7.17C1.97 8.95 1.97 12 1.97 12s0 3.05.48 4.83a2.86 2.86 0 0 0 2.01 2.02c1.78.48 7.54.48 7.54.48s5.76 0 7.54-.48a2.86 2.86 0 0 0 2.01-2.02c.48-1.78.48-4.83.48-4.83s0-3.05-.48-4.83ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}