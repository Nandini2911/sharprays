
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Eye,
  Pencil,
  BarChart3,
} from "lucide-react";

export default function BeliefSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [width, setWidth] = useState(1440);
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const beliefs = [
    {
      icon: Eye,
      title: "Attention is not the goal.",
      text: "It’s the beginning.",
    },
    {
      icon: Pencil,
      title: "Creativity is not the strategy.",
      text: "It needs somewhere to go.",
    },
    {
      icon: BarChart3,
      title: "Growth is not one big moment.",
      text: "It’s a system built over time.",
    },
  ];

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const mobile = width < 600;
  const tablet = width >= 600 && width < 1024;
  const desktop = width >= 1024;

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#ffffff",
        padding: mobile
          ? "60px 20px 70px"
          : tablet
          ? "75px 5% 80px"
          : "90px 5% 95px",
        boxSizing: "border-box",
      }}
    >
      {/* TOP SOFT SHAPE */}

      <div
        style={{
          position: "absolute",
          top: mobile ? "-180px" : "-220px",
          left: mobile ? "-220px" : "-180px",
          width: mobile ? "500px" : "650px",
          height: mobile ? "500px" : "650px",
          borderRadius: "50%",
          background:"#ffffff",
          pointerEvents: "none",
          transform: visible
            ? "translate3d(12px, 8px, 0)"
            : "translate3d(-20px, -15px, 0)",
          transition: "transform 2s ease",
        }}
      />

      {/* BOTTOM BLUE SHAPE */}

      <div
        style={{
          position: "absolute",
          left: mobile ? "-180px" : "-120px",
          bottom: mobile ? "-230px" : "-260px",
          width: mobile ? "600px" : "760px",
          height: mobile ? "360px" : "430px",
          borderRadius: "50%",
          background:"#ffffff",
          transform: visible
            ? "rotate(-10deg) translateX(8px)"
            : "rotate(-12deg) translateX(-20px)",
          transition: "transform 2.2s ease",
          pointerEvents: "none",
        }}
      />

      {/* GOLD CURVE */}

      <div
        style={{
          position: "absolute",
          left: mobile ? "-180px" : "-80px",
          bottom: mobile ? "20px" : "50px",
          width: mobile ? "500px" : "650px",
          height: mobile ? "140px" : "180px",
          borderTop: "1px solid rgba(200,148,50,0.45)",
          borderRadius: "50%",
          transform: "rotate(17deg)",
          opacity: visible ? 1 : 0,
          transition: "opacity 1.2s ease 0.4s",
          pointerEvents: "none",
        }}
      />

      {/* MAIN CONTAINER */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1380px",
          margin: "0 auto",
          display: desktop ? "grid" : "flex",
          gridTemplateColumns: desktop ? "42% 58%" : undefined,
          flexDirection: desktop ? undefined : "column",
          gap: mobile ? "45px" : tablet ? "55px" : "65px",
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            paddingTop: desktop ? "10px" : "0",
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(35px)",
            transition:
              "opacity 0.8s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* EYEBROW */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: mobile ? "10px" : "12px",
              marginBottom: mobile
                ? "25px"
                : tablet
                ? "28px"
                : "30px",
            }}
          >
           

            <span
              style={{
                width: mobile ? "22px" : "28px",
                height: "1px",
                background: "#B79A72",
              }}
            />

            <span
              style={{
                color: "#B79A72",
                
                fontSize: mobile ? "12px" : "14px",
                fontWeight: 500,
                letterSpacing: mobile ? "2px" : "2.5px",
                
              }}
            >
              THE BELIEF
            </span>
          </div>

          {/* HEADING */}

          <h2
            style={{
              margin: 0,
              maxWidth: desktop ? "560px" : "650px",
              color: "#0B2A52",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: mobile
                ? "33px"
                : tablet
                ? "40px"
                : width >= 1800
                ? "53px"
                : "48px",
              lineHeight: 1.08,
              fontWeight: 500,
              letterSpacing: mobile ? "-1px" : "-1.5px",
            }}
          >
            We Believe
           
            Marketing
            <br />
            Should Mean
            <br />

            <span
              style={{
                color: "#B79A72",
                position: "relative",
              }}
            >
              Something.
            </span>
          </h2>

          {/* GOLD LINE */}

          <div
            style={{
              width: mobile ? "42px" : "50px",
              height: "2px",
              background: "#C89432",
              marginTop: mobile ? "24px" : "28px",
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition:
                "transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.35s",
            }}
          />

          {/* SUPPORTING TEXT */}

          <p
            style={{
              maxWidth: mobile ? "100%" : "390px",
              margin: mobile ? "25px 0 0" : "28px 0 0",
              color: "#697588",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: mobile
                ? "14px"
                : tablet
                ? "15px"
                : "15px",
              lineHeight: 1.7,
            }}
          >
            The work should have a reason behind it.
            Every idea, every message and every growth
            decision should move something forward.
          </p>
        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            width: "100%",
            maxWidth: "760px",
          }}
        >
          {/* BELIEFS */}

          {beliefs.map((belief, index) => {
            const Icon = belief.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={belief.title}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: mobile
                    ? "58px 1fr"
                    : tablet
                    ? "68px 1fr"
                    : "78px 1fr",
                  gap: mobile
                    ? "16px"
                    : tablet
                    ? "20px"
                    : "22px",
                  alignItems: "center",
                  padding:
                    index === 0
                      ? mobile
                        ? "0 0 25px"
                        : "0 0 30px"
                      : mobile
                      ? "25px 0"
                      : "30px 0",
                  borderBottom:
                    index !== beliefs.length - 1
                      ? "1px solid rgba(11,42,82,0.11)"
                      : "none",

                  opacity: visible ? 1 : 0,

                  transform: visible
                    ? "translateY(0)"
                    : "translateY(45px)",

                  transition: `
                    opacity 0.7s ease ${index * 0.16}s,
                    transform 0.8s cubic-bezier(0.22,1,0.36,1) ${
                      index * 0.16
                    }s
                  `,
                }}
              >
                {/* ICON */}

                <div
                  style={{
                    width: mobile
                      ? "54px"
                      : tablet
                      ? "62px"
                      : "70px",
                    height: mobile
                      ? "54px"
                      : tablet
                      ? "62px"
                      : "70px",
                    borderRadius: "50%",
                    background: isActive
                      ? "#0B2A52"
                      : "rgba(255,255,255,0.92)",
                    border: isActive
                      ? "1px solid #0B2A52"
                      : "1px solid rgba(11,42,82,0.08)",
                    boxShadow: isActive
                      ? "0 12px 30px rgba(11,42,82,0.18)"
                      : "0 8px 25px rgba(11,42,82,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    transform: isActive
                      ? "translateY(-3px) scale(1.04)"
                      : "translateY(0) scale(1)",
                    transition:
                      "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <Icon
                    size={mobile ? 23 : tablet ? 26 : 29}
                    color={isActive ? "#ffffff" : "#0B2A52"}
                    strokeWidth={1.5}
                    style={{
                      transform: isActive
                        ? "rotate(-8deg) scale(1.08)"
                        : "rotate(0) scale(1)",
                      transition:
                        "transform 0.35s ease, color 0.35s ease",
                    }}
                  />

                  {/* GOLD DOT */}

                  <span
                    style={{
                      position: "absolute",
                      right: mobile ? "6px" : "8px",
                      top: mobile ? "6px" : "8px",
                      width: mobile ? "5px" : "6px",
                      height: mobile ? "5px" : "6px",
                      borderRadius: "50%",
                      background: "#C89432",
                      transform: isActive
                        ? "scale(1.5)"
                        : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                {/* CONTENT */}

                <div>
                  <h3
                    style={{
                      margin: 0,
                      color: "#0B2A52",
                      fontFamily:
                        "Georgia, 'Times New Roman', serif",
                      fontSize: mobile
                        ? "19px"
                        : tablet
                        ? "22px"
                        : width >= 1800
                        ? "27px"
                        : "25px",
                      lineHeight: 1.3,
                      fontWeight: 600,
                      letterSpacing: "-0.3px",
                      transform: isActive
                        ? "translateX(5px)"
                        : "translateX(0)",
                      transition:
                        "transform 0.35s ease",
                    }}
                  >
                    {belief.title}
                  </h3>

                  <p
                    style={{
                      margin: mobile ? "6px 0 0" : "7px 0 0",
                      color: isActive
                        ? "#0B2A52"
                        : "#647084",
                      fontFamily:
                        "Georgia, 'Times New Roman', serif",
                      fontSize: mobile
                        ? "15px"
                        : tablet
                        ? "17px"
                        : width >= 1800
                        ? "21px"
                        : "19px",
                      lineHeight: 1.4,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {belief.text}
                  </p>

                  {/* INTERACTIVE GOLD LINE */}

                  <div
                    style={{
                      width: isActive ? "62px" : "32px",
                      height: "2px",
                      marginTop: mobile ? "12px" : "14px",
                      background: "#C89432",
                      transition:
                        "width 0.4s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* FINAL STATEMENT */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: mobile ? "14px" : "18px",
              marginTop: mobile ? "35px" : "42px",
              marginLeft: mobile ? "0" : "6px",
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(25px)",
              transition:
                "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
            }}
          >
            <div
              style={{
                width: "2px",
                height: mobile ? "58px" : "68px",
                background: "#0B2A52",
                flexShrink: 0,
              }}
            />

            <p
              style={{
                margin: 0,
                color: "#536176",
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontSize: mobile
                  ? "17px"
                  : tablet
                  ? "19px"
                  : width >= 1800
                  ? "24px"
                  : "22px",
                lineHeight: 1.45,
              }}
            >
              That’s how we think about{" "}
              <span
                style={{
                  color: "#C89432",
                  fontWeight: 600,
                }}
              >
                every project
              </span>{" "}
              we take on.
            </p>
          </div>
        </div>
      </div>

      {/* DECORATIVE DOTS */}

      <div
        style={{
          position: "absolute",
          left: mobile ? "4%" : "6%",
          bottom: mobile ? "30px" : "55px",
          width: mobile ? "70px" : "90px",
          height: mobile ? "45px" : "55px",
          backgroundImage:
            "radial-gradient(#C89432 1.3px, transparent 1.3px)",
          backgroundSize: mobile ? "18px 17px" : "22px 20px",
          opacity: visible ? 0.5 : 0,
          transform: visible
            ? "translateY(0)"
            : "translateY(15px)",
          transition:
            "opacity 1s ease 0.8s, transform 1s ease 0.8s",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: mobile ? "3%" : "5%",
          bottom: mobile ? "35px" : "70px",
          width: mobile ? "75px" : "100px",
          height: mobile ? "55px" : "70px",
          backgroundImage:
            "radial-gradient(#0B2A52 1.2px, transparent 1.2px)",
          backgroundSize: mobile ? "19px 18px" : "22px 20px",
          opacity: visible ? 0.12 : 0,
          transition: "opacity 1s ease 1s",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
