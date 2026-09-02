"use client";

import { useState } from "react";
import Link from "next/link";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          DESKTOP / MOBILE NAVBAR
          
          FULLY TRANSPARENT
          NO CARD
          NO BACKGROUND
          NO NAVBAR BORDER
          NO SHADOW
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50">
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
              z-20
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
                lg:h-100px]
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION

              POSITIONED ABSOLUTELY SO IT IS ALWAYS
              PERFECTLY CENTERED ON THE SCREEN
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              hidden
              -translate-x-1/2
              -translate-y-1/2
              items-center
              gap-10
              lg:flex
              xl:gap-11
            "
          >
            <NavLink
              href="/"
              label="Home"
              active
            />

            <NavLink
              href="/about"
              label="About"
            />

            <NavLink
              href="/services"
              label="Services"
            />

            <NavLink
              href="/work"
              label="Work"
            />

            <NavLink
              href="/contact"
              label="Contact"
            />
          </div>

          {/* =================================================
              LET'S TALK
              
              POSITIONED AT RIGHT
          ================================================= */}

          <Link
            href="/contact"
            style={newYorkFont}
            className="
              group
              absolute
              right-6
              top-1/2
              hidden
              h-[54px]
              -translate-y-1/2
              items-center
              gap-3
              overflow-hidden
              rounded-[16px]
              border
              border-white/40
              bg-white/30
              px-6
              text-[16px]
              font-medium
              tracking-[-0.01em]
              text-[#6285AD]
              shadow-[0_8px_30px_rgba(11,42,82,0.08)]
              backdrop-blur-[6px]
              transition-all
              duration-300
              hover:bg-white/40
              hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]
              lg:flex
              lg:right-12
              xl:right-16
            "
          >
            {/* =================================================
                SOFT BASE BORDER
            ================================================= */}

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

            {/* =================================================
                ANIMATED BLUE BORDER
            ================================================= */}

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

            {/* =================================================
                TEXT
            ================================================= */}

            <span
              className="
                relative
                z-10
                whitespace-nowrap
                text-[#0B2A52]
                transition-colors
                duration-300
              "
            >
              Let's Talk
            </span>

            {/* =================================================
                CIRCLE ARROW
            ================================================= */}

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
                group-hover:bg-[border-[#0B2A52/25
]
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

              COMPLETELY TRANSPARENT
          ================================================= */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              absolute
              right-5
              top-1/2
              z-30
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
          z-40
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
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Work", "/work"],
              ["Contact", "/contact"],
            ].map(([label, href], index) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={newYorkFont}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.08]
                  py-[19px]
                  text-white
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
                    group-hover:translate-x-2
                    group-hover:text-[#6285AD]
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
                  0{index + 1}
                </span>
              </Link>
            ))}
          </div>

          {/* =================================================
              MOBILE CTA
          ================================================= */}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
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
   NAVIGATION LINK
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
      style={newYorkFont}
      className="
        group
        relative
        whitespace-nowrap
        text-[16px]
        font-medium
        tracking-[-0.01em]
        text-[#0B2A52]
        transition-colors
        duration-300
        hover:text-[#6285AD]
        xl:text-[17px]
      "
    >
      <span>
        {label}
      </span>

      {/* =================================================
          ACTIVE / HOVER LINE
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