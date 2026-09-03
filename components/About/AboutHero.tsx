"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutPage() {
  const [screen, setScreen] = useState({
    mobile: false,
    tablet: false,
    smallLaptop: false,
    largeDesktop: false,
    ultraWide: false,
  });

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;

      setScreen({
        mobile: width < 600,
        tablet: width >= 600 && width < 1024,
        smallLaptop: width >= 1024 && width < 1280,
        largeDesktop: width >= 1800 && width < 3000,
        ultraWide: width >= 3000,
      });
    };

    updateScreen();

    window.addEventListener("resize", updateScreen);

    return () => {
      window.removeEventListener("resize", updateScreen);
    };
  }, []);

  const isMobile = screen.mobile;
  const isTablet = screen.tablet;
  const isSmallLaptop = screen.smallLaptop;
  const isLargeDesktop = screen.largeDesktop;
  const isUltraWide = screen.ultraWide;

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: isMobile || isTablet ? "auto" : "100svh",
        overflow: "hidden",
        background: "#ffffff",
        isolation: "isolate",
      }}
    >
      {/* =====================================================
          FULL BACKGROUND IMAGE
      ====================================================== */}

      <img
        src="/about/about_hero.png"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: isMobile
            ? "60% center"
            : isTablet
            ? "58% center"
            : "center center",
          zIndex: -3,
          display: "block",
        }}
      />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: isUltraWide
            ? "2300px"
            : isLargeDesktop
            ? "2000px"
            : "1800px",
          minHeight: isMobile || isTablet ? "auto" : "100svh",
          margin: "0 auto",
          display: isMobile || isTablet ? "flex" : "grid",
          flexDirection: isMobile || isTablet ? "column" : undefined,
          gridTemplateColumns: isUltraWide
            ? "0.9fr 1.1fr"
            : isLargeDesktop
            ? "0.9fr 1.1fr"
            : isSmallLaptop
            ? "0.98fr 1.02fr"
            : "0.95fr 1.05fr",
          alignItems: isMobile || isTablet ? "flex-start" : "center",
          padding: isMobile
            ? "75px 22px 0"
            : isTablet
            ? "80px 6% 35px"
            : isSmallLaptop
            ? "60px 5% 50px"
            : isUltraWide
            ? "100px 100px 80px"
            : isLargeDesktop
            ? "90px 7% 70px"
            : "clamp(70px, 7vw, 125px) clamp(30px, 6.5vw, 110px) clamp(50px, 5vw, 90px)",
          boxSizing: "border-box",
        }}
      >
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: isUltraWide
              ? "820px"
              : isLargeDesktop
              ? "800px"
              : isTablet
              ? "620px"
              : "760px",
            paddingTop:
              isMobile || isTablet
                ? "0"
                : isSmallLaptop
                ? "15px"
                : "clamp(10px, 3vw, 50px)",
            boxSizing: "border-box",
          }}
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease,
              delay: 0.1,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile
                ? "11px"
                : isTablet
                ? "13px"
                : "clamp(13px, 1.4vw, 22px)",
              marginBottom: isMobile
                ? "22px"
                : isTablet
                ? "22px"
                : "clamp(22px, 2.2vw, 34px)",
            }}
          >
            <span
              style={{
                width: isMobile
                  ? "30px"
                  : isTablet
                  ? "35px"
                  : "clamp(30px, 3vw, 48px)",
                height: "2px",
                flexShrink: 0,
                background: "#b89a6a",
              }}
            />

            <p
              style={{
                margin: 0,
                color: "#b89a6a",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: isMobile
                  ? "11px"
                  : isTablet
                  ? "12px"
                  : "clamp(11px, 0.75vw, 15px)",
                letterSpacing: isMobile
                  ? "2.5px"
                  : "clamp(2.5px, 0.35vw, 5px)",
                lineHeight: 1.2,
                fontWeight: 600,
              }}
            >
              ABOUT SHARPRAYS
            </p>
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 55,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease,
              delay: 0.22,
            }}
            style={{
              margin: 0,
              color: "#0b2a52",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: isMobile
                ? "clamp(39px, 11vw, 52px)"
                : isTablet
                ? "clamp(44px, 7vw, 58px)"
                : isSmallLaptop
                ? "clamp(45px, 4.5vw, 58px)"
                : isUltraWide
                ? "86px"
                : isLargeDesktop
                ? "clamp(68px, 3.8vw, 86px)"
                : "clamp(48px, 3.2vw, 66px)",
              lineHeight: isMobile ? "1.01" : "0.99",
              fontWeight: 500,
              letterSpacing: isMobile
                ? "-2px"
                : "clamp(-3.5px, -0.22vw, -1.5px)",
            }}
          >
            We Don’t Just
            <br />
            Do Marketing.
            <br />

            <span
              style={{
                color: "#b89a6a",
              }}
            >
              We Build Meaningful
            </span>

            <br />

            <span
              style={{
                color: "#b89a6a",
              }}
            >
              Growth Engines.
            </span>
          </motion.h1>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scaleX: 1,
            }}
            transition={{
              duration: 0.75,
              ease,
              delay: 0.48,
            }}
            style={{
              width: isMobile
                ? "32px"
                : isTablet
                ? "36px"
                : "clamp(32px, 3vw, 46px)",
              height: "2px",
              marginTop: isMobile
                ? "23px"
                : "clamp(22px, 2vw, 31px)",
              marginBottom: isMobile
                ? "17px"
                : "clamp(17px, 1.7vw, 24px)",
              background: "#0b2a52",
              transformOrigin: "left center",
            }}
          />

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease,
              delay: 0.56,
            }}
            style={{
              width: "100%",
              maxWidth: isUltraWide
                ? "620px"
                : isTablet
                ? "520px"
                : isSmallLaptop
                ? "480px"
                : "560px",
              margin: 0,
              color: "#35445a",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: isMobile
                ? "14px"
                : isTablet
                ? "14px"
                : isUltraWide
                ? "18px"
                : "clamp(14px, 0.95vw, 17px)",
              lineHeight: isMobile ? "1.6" : "1.65",
            }}
          >
            SHARPRAYS is a digital growth company built
            for brands that want more than activity, more
            than attention, and more than another agency
            on their vendor list.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease,
              delay: 0.68,
            }}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "stretch" : "center",
              flexWrap: isMobile ? "nowrap" : "wrap",
              gap: isMobile
                ? "10px"
                : "clamp(10px, 1vw, 17px)",
              width: isMobile ? "100%" : "auto",
              marginTop: isMobile
                ? "24px"
                : "clamp(24px, 2.4vw, 34px)",
            }}
          >
            {/* PRIMARY BUTTON */}

            <motion.a
              href="#people"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
              }}
              style={{
                width: isMobile
                  ? "100%"
                  : isTablet
                  ? "185px"
                  : isSmallLaptop
                  ? "195px"
                  : "clamp(190px, 13vw, 220px)",
                minHeight: isMobile ? "52px" : "54px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                padding: "0 clamp(18px, 1.5vw, 25px)",
                borderRadius: "999px",
                background: "#0b2a52",
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "clamp(13px, 0.82vw, 15px)",
                fontWeight: 600,
                boxSizing: "border-box",
              }}
            >
              <span>Meet the People</span>

              <ArrowRight
                size={19}
                color="#c5a873"
                style={{
                  flexShrink: 0,
                }}
              />
            </motion.a>

            {/* SECONDARY BUTTON */}

            <motion.a
              href="#approach"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
              }}
              style={{
                width: isMobile
                  ? "100%"
                  : isTablet
                  ? "170px"
                  : isSmallLaptop
                  ? "180px"
                  : "clamp(175px, 12vw, 200px)",
                minHeight: isMobile ? "52px" : "54px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                padding: "0 clamp(18px, 1.5vw, 25px)",
                borderRadius: "999px",
                border: "1px solid rgba(58,76,99,0.55)",
                background: "rgba(255,255,255,0.38)",
                color: "#0b2a52",
                textDecoration: "none",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "clamp(13px, 0.82vw, 15px)",
                fontWeight: 600,
                boxSizing: "border-box",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }}
            >
              <span>Our Approach</span>

              <ArrowRight
                size={19}
                color="#b89a6a"
                style={{
                  flexShrink: 0,
                }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* ===================================================
            RIGHT TRANSPARENT IMAGE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.15,
            ease,
            delay: 0.3,
          }}
          style={{
            position: "relative",

            width: isMobile
              ? "calc(100% + 44px)"
              : isTablet
              ? "100%"
              : "100%",

            height: isMobile
              ? "390px"
              : isTablet
              ? "470px"
              : isSmallLaptop
              ? "600px"
              : isUltraWide
              ? "850px"
              : isLargeDesktop
              ? "820px"
              : "min(76vh, 760px)",

            marginLeft: isMobile ? "-22px" : "0",

            marginTop: isMobile
              ? "8px"
              : isTablet
              ? "-10px"
              : "0",

            display: "flex",
            alignItems: "flex-end",
            justifyContent:
              isMobile || isTablet
                ? "center"
                : "flex-end",

            pointerEvents: "none",
            zIndex: 4,
            flexShrink: 0,
          }}
        >
          <motion.img
            src="/about/about_right.png"
            alt=""
            initial={{
              scale: 0.96,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 1.4,
              delay: 0.3,
              ease,
            }}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition:
                isMobile || isTablet
                  ? "center bottom"
                  : "right bottom",
              transformOrigin: "right bottom",
            }}
          />
        </motion.div>
      </section>
    </main>
  );
}