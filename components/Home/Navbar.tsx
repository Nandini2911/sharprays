"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

/* =========================================================
   SERVICES

   Replace these with your actual services.
   Each service has its own individual page.
========================================================= */

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
    label: "Performance Marketing / Paid Media",
    href: "/services/performance-marketing",
  },
  {
    label: "Website Development & Management",
    href: "/services/website-development",
  },
  {
    label: "AI Video & Video Editing",
    href: "/services/video-and-creative",
  },
  {
    label: "AI Automation",
    href: "/services/AI-Automation",
  }
  
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /* =========================================================
     ACTIVE PAGE
  ========================================================= */

  const isHome = pathname === "/";

  const isAbout =
    pathname === "/about" ||
    pathname.startsWith("/about/");

  const isServices =
    pathname === "/services" ||
    pathname.startsWith("/services/");

  const isWork =
    pathname === "/work" ||
    pathname.startsWith("/work/");

  const isContact =
    pathname === "/contact" ||
    pathname.startsWith("/contact/");

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR BORDER ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes navbarBorder {
          0% {
            stroke-dashoffset: 0;
          }

          100% {
            stroke-dashoffset: -100;
          }
        }
      `}</style>

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-[100]">
        <nav
          className="
            relative
            mx-auto
            flex
            h-[92px]
            w-full
            items-center
            px-6
            sm:px-8
            lg:px-12
            xl:px-16
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            aria-label="Sharp Rays Home"
            className="
              group
              relative
              z-[110]
              flex
              shrink-0
              items-center
              transition-transform
              duration-300
              hover:scale-[1.015]
            "
          >
            <img
              src="/logo/sharp-rays-logo.png"
              alt="Sharp Rays"
              className="
                h-[100px]
                w-auto
                object-contain
                sm:h-[100px]
                lg:h-[100px]
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-[105]
              hidden
              -translate-x-1/2
              -translate-y-1/2
              items-center
              gap-10
              lg:flex
              xl:gap-11
            "
          >
            {/* =================================================
                HOME
            ================================================= */}

            <NavLink
              href="/"
              label="Home"
              active={isHome}
            />

            {/* =================================================
                ABOUT
            ================================================= */}

            <NavLink
              href="/about"
              label="About"
              active={isAbout}
            />

            {/* =================================================
                SERVICES
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
                style={{
                  ...newYorkFont,
                  color: isServices
                    ? "#6285AD"
                    : "#0B2A52",
                }}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  text-[16px]
                  font-medium
                  tracking-[-0.01em]
                  transition-colors
                  duration-300
                  xl:text-[17px]
                "
              >
                <span>Services</span>

                {/* Arrow */}

                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  aria-hidden="true"
                  className={`
                    transition-transform
                    duration-300
                    ${
                      servicesOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                >
                  <path
                    d="M2.2 4L5.5 7.2L8.8 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Active underline */}

                <span
                  className={`
                    absolute
                    -bottom-[10px]
                    left-1/2
                    h-[1px]
                    -translate-x-1/2
                    bg-[#6285AD]
                    transition-all
                    duration-300
                    ${
                      isServices
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                    }
                  `}
                />
              </button>

              {/* =================================================
                  SERVICES DROPDOWN
              ================================================= */}

              <div
                className={`
                  absolute
                  left-1/2
                  top-full
                  mt-5
                  w-[300px]
                  -translate-x-1/2
                  rounded-[18px]
                  border
                  border-[#6285AD]/15
                  bg-white
                  p-3
                  shadow-[0_20px_60px_rgba(11,42,82,0.15)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  ${
                    servicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }
                `}
              >
                {/* Dropdown heading */}

                <div className="mb-2 px-3 pt-2">
                  <span
                    style={newYorkFont}
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-[#6285AD]
                    "
                  >
                    Our Services
                  </span>
                </div>

                {/* Service items */}

                <div className="flex flex-col">
                  {services.map(
                    (service, index) => {
                      const serviceActive =
                        pathname === service.href;

                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() =>
                            setServicesOpen(false)
                          }
                          style={newYorkFont}
                          className={`
                            group
                            flex
                            items-center
                            justify-between
                            rounded-[12px]
                            px-3
                            py-3
                            transition-all
                            duration-300
                            ${
                              serviceActive
                                ? "bg-[#6285AD]/[0.07]"
                                : "hover:bg-[#6285AD]/[0.07]"
                            }
                          `}
                        >
                          <span
                            className={`
                              text-[14px]
                              font-medium
                              transition-all
                              duration-300
                              ${
                                serviceActive
                                  ? "translate-x-1 text-[#6285AD]"
                                  : "text-[#0B2A52] group-hover:translate-x-1 group-hover:text-[#6285AD]"
                              }
                            `}
                          >
                            {service.label}
                          </span>

                          <span
                            className={`
                              text-[11px]
                              transition-all
                              duration-300
                              ${
                                serviceActive
                                  ? "translate-x-1 text-[#6285AD]"
                                  : "text-[#0B2A52]/30 group-hover:translate-x-1 group-hover:text-[#6285AD]"
                              }
                            `}
                          >
                            →
                          </span>
                        </Link>
                      );
                    }
                  )}
                </div>

                {/* View all */}

                <div
                  className="
                    mt-2
                    border-t
                    border-[#0B2A52]/[0.08]
                    pt-2
                  "
                >
                  <Link
                    href="/services"
                    onClick={() =>
                      setServicesOpen(false)
                    }
                    style={newYorkFont}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-[12px]
                      px-3
                      py-3
                      text-[13px]
                      font-medium
                      text-[#6285AD]
                      transition-all
                      duration-300
                      hover:bg-[#6285AD]/[0.07]
                    "
                  >
                    <span>
                      View All Services
                    </span>

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* =================================================
                WORK
            ================================================= */}

            <NavLink
              href="/work"
              label="Work"
              active={isWork}
            />

            {/* =================================================
                CONTACT
            ================================================= */}

            <NavLink
              href="/contact"
              label="Contact"
              active={isContact}
            />
          </div>

          {/* =================================================
              LET'S TALK BUTTON
          ================================================= */}

          <Link
            href="/contact"
            style={newYorkFont}
            className="
              group
              absolute
              right-6
              top-1/2
              z-[110]
              hidden
              h-[54px]
              -translate-y-1/2
              items-center
              gap-3
              overflow-hidden
              rounded-[16px]
              border
              border-[#6285AD]/30
              bg-white/80
              px-6
              text-[16px]
              font-medium
              tracking-[-0.01em]
              text-[#0B2A52]
              shadow-[0_8px_30px_rgba(11,42,82,0.08)]
              backdrop-blur-[8px]
              transition-all
              duration-300
              hover:bg-white
              hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]
              lg:flex
              lg:right-12
              xl:right-16
            "
          >
            {/* Soft border */}

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[16px]
                border
                border-[#6285AD]/25
              "
            />

            {/* Animated border */}

            <svg
              className="
                pointer-events-none
                absolute
                inset-0
                h-full
                w-full
              "
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="1"
                width="98"
                height="98"
                rx="16"
                ry="16"
                fill="none"
                stroke="#6285AD"
                strokeWidth="1.8"
                pathLength="100"
                strokeDasharray="20 80"
                strokeLinecap="round"
                className="
                  animate-[navbarBorder_2.8s_linear_infinite]
                "
              />
            </svg>

            {/* Text */}

            <span
              className="
                relative
                z-10
                whitespace-nowrap
                !text-[#0B2A52]
              "
            >
              Let's Talk
            </span>

            {/* Arrow circle */}

            <span
              className="
                relative
                z-10
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#0B2A52]
                text-white
                transition-all
                duration-300
                group-hover:translate-x-1
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 7H11.5M7.8 3.3L11.5 7L7.8 10.7"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
              absolute
              right-5
              top-1/2
              z-[120]
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              bg-transparent
              sm:right-7
              lg:hidden
            "
          >
            <div
              className="
                flex
                w-[23px]
                flex-col
                gap-[6px]
              "
            >
              {/* Top line */}

              <span
                className={`
                  h-[1.5px]
                  w-full
                  bg-[#0B2A52]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "translate-y-[3.75px] rotate-45"
                      : ""
                  }
                `}
              />

              {/* Bottom line */}

              <span
                className={`
                  h-[1.5px]
                  w-full
                  bg-[#0B2A52]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "-translate-y-[3.75px] -rotate-45"
                      : ""
                  }
                `}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE FULLSCREEN MENU
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[90]
          bg-[#02091B]
          transition-all
          duration-500
          lg:hidden
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <div
          className="
            flex
            min-h-screen
            flex-col
            justify-center
            px-7
            pt-20
            sm:px-12
          "
        >
          {/* =================================================
              MOBILE BRAND
          ================================================= */}

          <div
            style={newYorkFont}
            className="
              mb-10
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-white/50
            "
          >
            Sharp Rays
          </div>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

          <div className="flex flex-col">
            {/* HOME */}

            <MobileNavLink
              label="Home"
              href="/"
              index={1}
              active={isHome}
              onClick={closeMobileMenu}
            />

            {/* ABOUT */}

            <MobileNavLink
              label="About"
              href="/about"
              index={2}
              active={isAbout}
              onClick={closeMobileMenu}
            />

            {/* =================================================
                MOBILE SERVICES
            ================================================= */}

            <div
              className="
                border-b
                border-white/[0.08]
              "
            >
              <button
                type="button"
                onClick={() =>
                  setServicesOpen(!servicesOpen)
                }
                style={{
                  ...newYorkFont,
                  color: isServices
                    ? "#6285AD"
                    : "#FFFFFF",
                }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  py-[19px]
                "
              >
                <span
                  className="
                    text-[36px]
                    font-medium
                    leading-none
                    tracking-[-0.04em]
                    transition-all
                    duration-300
                    sm:text-[42px]
                  "
                >
                  Services
                </span>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`
                    transition-transform
                    duration-300
                    ${
                      servicesOpen
                        ? "rotate-180 text-[#6285AD]"
                        : "text-white/30"
                    }
                  `}
                >
                  <path
                    d="M4 7L9 12L14 7"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* MOBILE SERVICE LIST */}

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    servicesOpen
                      ? "max-h-[600px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                {services.map(
                  (service, index) => {
                    const serviceActive =
                      pathname === service.href;

                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMobileMenu}
                        style={newYorkFont}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          py-3
                          pl-3
                          text-white/65
                          transition-all
                          duration-300
                          hover:pl-5
                          hover:text-[#6285AD]
                        "
                      >
                        <span
                          className={`
                            text-[16px]
                            ${
                              serviceActive
                                ? "text-[#6285AD]"
                                : ""
                            }
                          `}
                        >
                          {service.label}
                        </span>

                        <span
                          className="
                            mr-2
                            text-[10px]
                            text-white/20
                          "
                        >
                          0{index + 1}
                        </span>
                      </Link>
                    );
                  }
                )}

                {/* View all */}

                <Link
                  href="/services"
                  onClick={closeMobileMenu}
                  style={newYorkFont}
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    pl-3
                    text-[14px]
                    font-medium
                    text-[#6285AD]
                  "
                >
                  View All Services →
                </Link>
              </div>
            </div>

            {/* WORK */}

            <MobileNavLink
              label="Work"
              href="/work"
              index={4}
              active={isWork}
              onClick={closeMobileMenu}
            />

            {/* CONTACT */}

            <MobileNavLink
              label="Contact"
              href="/contact"
              index={5}
              active={isContact}
              onClick={closeMobileMenu}
            />
          </div>

          {/* =================================================
              MOBILE CTA
          ================================================= */}

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            style={newYorkFont}
            className="
              group
              mt-10
              flex
              w-fit
              items-center
              gap-3
              text-[18px]
              font-medium
              text-white
            "
          >
            <span
              className="
                transition-colors
                duration-300
                group-hover:text-[#6285AD]
              "
            >
              Start a Project
            </span>

            <span
              className="
                text-[22px]
                leading-none
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:text-[#6285AD]
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   DESKTOP NAVIGATION LINK
========================================================= */

function NavLink({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        ...newYorkFont,
        color: active
          ? "#6285AD"
          : "#0B2A52",
      }}
      className="
        group
        relative
        whitespace-nowrap
        text-[16px]
        font-medium
        tracking-[-0.01em]
        transition-colors
        duration-300
        xl:text-[17px]
      "
    >
      <span>{label}</span>

      {/* =================================================
          ACTIVE / HOVER UNDERLINE
      ================================================= */}

      <span
        className={`
          absolute
          -bottom-[10px]
          left-1/2
          h-[1px]
          -translate-x-1/2
          bg-[#6285AD]
          transition-all
          duration-300
          ${
            active
              ? "w-5 opacity-100"
              : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
          }
        `}
      />
    </Link>
  );
}

/* =========================================================
   MOBILE NAVIGATION LINK
========================================================= */

function MobileNavLink({
  label,
  href,
  index,
  active = false,
  onClick,
}: {
  label: string;
  href: string;
  index: number;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        ...newYorkFont,
        color: active
          ? "#6285AD"
          : "#FFFFFF",
      }}
      className="
        group
        flex
        items-center
        justify-between
        border-b
        border-white/[0.08]
        py-[19px]
      "
    >
      <span
        className="
          text-[36px]
          font-medium
          leading-none
          tracking-[-0.04em]
          transition-all
          duration-300
          sm:text-[42px]
        "
      >
        {label}
      </span>

      <span
        className="
          text-[10px]
          tracking-[0.18em]
          text-white/25
          transition-colors
          duration-300
          group-hover:text-[#6285AD]
        "
      >
        0{index}
      </span>
    </Link>
  );
}