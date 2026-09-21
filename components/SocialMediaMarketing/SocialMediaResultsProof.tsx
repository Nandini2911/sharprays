"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  BarChart3,
} from "lucide-react";

/* =========================================================
   FONT
========================================================= */

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

/* =========================================================
   TYPES
========================================================= */

type SocialWork = {
  id: string;
  category: string;
  client: string;
  description: string;
  image: string;
  handle: string;
  badge?: string;

  insight?: {
    value: string;
    label: string;
  };
};

/* =========================================================
   DATA
========================================================= */

const socialWorks: SocialWork[] = [
  {
    id: "dts",
    category: "EVENTS & ENTERTAINMENT",
    client: "DTS World",
    description:
      "Social media presence built around events, celebrities, weddings, PR and entertainment-led brand communication.",
    image: "/services/social/dts.png",
    handle: "@doubletrouble_studio",
    badge: "Digital agency",
  },

  {
    id: "rnk",
    category: "AUTOMOTIVE",
    client: "RNK Rentals",
    description:
      "A consistent social presence created to showcase the brand, rental services and automotive experience.",
    image: "/services/social/rnk.png",
    handle: "@rnk_rentacar",
    badge: "Car Rentals",
  },

  {
    id: "shruti",
    category: "PERSONAL BRAND",
    client: "Shruti Chadha",
    description:
      "A refined personal-brand presence built through visual consistency, editorial content and social storytelling.",
    image: "/services/social/shruti.png",
    handle: "@shrutichadha_",
    badge: "Personal Branding",
  },

  {
    id: "butter-chicken",
    category: "FOOD & RESTAURANT",
    client: "Butter Chicken Factory",
    description:
      "Visual social content created to communicate food, offers and the personality of the restaurant brand.",
    image: "/services/social/chicken.png",
    handle: "@butterchickenfactory",
    badge: "Social Content",
  },

  {
    id: "brownie",
    category: "FOOD & PRODUCT",
    client: "Brownie Point",
    description:
      "Product-led social content focused on visual appeal, consistency and memorable digital presentation.",
    image: "/services/social/cake.png",
    handle: "@browniepointindia",
    badge: "Product Content",
  },

  {
    id: "vow-story",
    category: "WEDDINGS & EVENTS",
    client: "Vow Story",
    description:
      "A social presence built around weddings, celebrations and unforgettable event moments — capturing the people, details and stories that make every occasion memorable.",
    image: "/services/social/vow.png",
    handle: "@vowstory",
    badge: "Wedding & Events",
  },
];

/* =========================================================
   MAIN SECTION
========================================================= */

export default function SocialMediaWorkMarquee() {
  const reduceMotion = useReducedMotion();

  const viewportRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);

  const pausedRef = useRef(false);

  const [isDesktop, setIsDesktop] = useState(false);

  /* =======================================================
     RESPONSIVE BREAKPOINT
  ======================================================= */

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const updateBreakpoint = () => {
      setIsDesktop(media.matches);
    };

    updateBreakpoint();

    media.addEventListener("change", updateBreakpoint);

    return () => {
      media.removeEventListener("change", updateBreakpoint);
    };
  }, []);

  /* =======================================================
     SHARP AUTO SCROLL

     Important:
     We are NOT transforming the whole track anymore.

     Native scrollLeft + whole pixel values prevents much
     of the blurry/rasterized appearance that transforms
     can create on text and screenshots.
  ======================================================= */

  useEffect(() => {
    const viewport = viewportRef.current;
    const firstGroup = firstGroupRef.current;

    if (!viewport) return;

    viewport.scrollLeft = 0;

    if (!isDesktop || reduceMotion || !firstGroup) {
      return;
    }

    let animationFrame = 0;
    let previousTime = performance.now();
    let scrollPosition = 0;

    /* slower = cleaner + more premium */
    const speed = 90;

    const getLoopDistance = () => {
      const track = firstGroup.parentElement;

      if (!track) {
        return firstGroup.offsetWidth;
      }

      const styles = window.getComputedStyle(track);

      const gap =
        parseFloat(styles.columnGap || styles.gap || "0") || 0;

      return firstGroup.offsetWidth + gap;
    };

    let loopDistance = getLoopDistance();

    const updateMeasurements = () => {
      loopDistance = getLoopDistance();
    };

    window.addEventListener("resize", updateMeasurements);

    const animate = (currentTime: number) => {
      /*
       * Prevent giant jumps when browser tab becomes inactive.
       */
      const deltaTime = Math.min(
        (currentTime - previousTime) / 1000,
        0.04
      );

      previousTime = currentTime;

      if (!pausedRef.current) {
        scrollPosition += speed * deltaTime;

        /*
         * Seamless reset after first group.
         */
        if (
          loopDistance > 0 &&
          scrollPosition >= loopDistance
        ) {
          scrollPosition -= loopDistance;
        }

        /*
         * VERY IMPORTANT:
         * Round to whole pixels.
         *
         * Fractional movement is one of the reasons text /
         * screenshots can look soft during animation.
         */
        viewport.scrollLeft = Math.round(scrollPosition);
      }

      animationFrame =
        window.requestAnimationFrame(animate);
    };

    animationFrame =
      window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener(
        "resize",
        updateMeasurements
      );
    };
  }, [isDesktop, reduceMotion]);

  /*
   * Desktop needs duplicate group for seamless looping.
   * Mobile only gets one group because it uses manual swipe.
   */
  const groupCount =
    isDesktop && !reduceMotion ? 2 : 1;

  return (
    <section
      id="social-media-work"
      className="
        relative
        overflow-hidden

        bg-white

        py-20
        text-[#0B2A52]

        sm:py-24
        md:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}



      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1450px]

          px-5
          sm:px-7
          md:px-8
          lg:px-12
          xl:px-16
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
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
            duration: reduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[880px]
            text-center
          "
        >
          {/* eyebrow */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3

              sm:gap-4
            "
          >
            <span
              className="
                h-px
                w-7

                bg-gradient-to-r
                from-transparent
                to-[#B79A72]

                sm:w-10
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#B79A72]

                sm:text-[10px]
                sm:tracking-[0.36em]
              "
            >
              Selected Work
            </span>

            <span
              className="
                h-px
                w-7

                bg-gradient-to-l
                from-transparent
                to-[#B79A72]

                sm:w-10
              "
            />
          </div>

          {/* heading */}

          <h2
            style={newYorkFont}
            className="
              mt-6

              text-[2.25rem]
              font-medium
              leading-[1]
              tracking-[-0.045em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Real Brands.{" "}
            <span className="text-[#B79A72]">
              Real Social Work.
            </span>
          </h2>

          {/* description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]

              text-[14px]
              leading-[1.8]
              text-[#647B98]

              sm:mt-6
              sm:text-[15px]

              lg:text-[16px]
            "
          >
            A selection of social profiles we&apos;ve created,
            managed and shaped for brands across different
            industries.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 25,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          delay: reduceMotion ? 0 : 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10

          mt-12

          sm:mt-14
          md:mt-16
          lg:mt-20
        "
      >
        {/* ===================================================
            PORTFOLIO LABEL
        =================================================== */}

        <div
          className="
            mx-auto
            mb-6

            flex
            w-full
            max-w-[1450px]
            items-center
            gap-3

            px-5

            sm:mb-7
            sm:gap-4
            sm:px-7

            md:px-8

            lg:mb-8
            lg:px-12

            xl:px-16
          "
        >
          <span
            className="
              shrink-0

              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#B79A72]

              sm:text-[9px]
              sm:tracking-[0.24em]
            "
          >
            Social Media Portfolio
          </span>

          <span
            className="
              h-px
              flex-1
              bg-[#0B2A52]/10
            "
          />

          {/* mobile label */}

          <span
            className="
              shrink-0

              text-[8px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-[#71879F]

              md:hidden
            "
          >
            Swipe
          </span>

          {/* desktop label */}

          <span
            className="
              hidden
              shrink-0

              text-[8px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#71879F]

              md:block
            "
          >
            Hover to Pause
          </span>
        </div>

        {/* ===================================================
            VIEWPORT
        =================================================== */}

        <div className="relative">
          {/* desktop left fade */}


          {/* desktop right fade */}

          

          <div
            ref={viewportRef}
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
            className="
              overflow-x-auto
              overscroll-x-contain

              scroll-smooth
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              md:overflow-x-hidden
              md:scroll-auto
            "
          >
            {/* ===============================================
                TRACK

                No CSS transform / translate3d here.
            =============================================== */}

            <div
              className="
                flex
                w-max

                gap-4

                px-5
                pb-2

                sm:gap-5
                sm:px-7

                md:gap-6
                md:px-8

                lg:px-12

                xl:px-16
              "
            >
              {Array.from({
                length: groupCount,
              }).map((_, groupIndex) => (
                <div
                  key={`portfolio-group-${groupIndex}`}
                  ref={
                    groupIndex === 0
                      ? firstGroupRef
                      : undefined
                  }
                  aria-hidden={
                    groupIndex === 1
                      ? true
                      : undefined
                  }
                  className="
                    flex
                    shrink-0

                    gap-4

                    sm:gap-5
                    md:gap-6
                  "
                >
                 {socialWorks.map((work) => (
  <SocialCard
    key={`${groupIndex}-${work.id}`}
    work={work}
    isClone={groupIndex === 1}
  />
))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM NOTE
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          mt-8

          flex
          max-w-[1450px]
          items-center
          justify-center
          gap-3

          px-5

          sm:mt-10
          sm:px-7

          lg:mt-12
          lg:px-12
        "
      >
        <span
          className="
            h-px
            w-6
            bg-[#B79A72]

            sm:w-8
          "
        />

        <span
          className="
            text-center

            text-[8px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#71879F]

            sm:tracking-[0.2em]
          "
        >
          Selected Social Media Work
        </span>

        <span
          className="
            h-px
            w-6
            bg-[#B79A72]

            sm:w-8
          "
        />
      </div>
    </section>
  );
}

/* =========================================================
   SOCIAL CARD
========================================================= */

function SocialCard({
  work,
  isClone = false,
}: {
  work: SocialWork;
  isClone?: boolean;
}) {
  const instagramUsername =
    work.handle.replace("@", "");

  return (
    <article
      className="
        group
        relative

        w-[82vw]
        max-w-[330px]
        shrink-0
        snap-center

        overflow-hidden

        rounded-[22px]

        border
        border-[#D9E4EE]

        bg-white

        shadow-[0_10px_30px_rgba(11,42,82,0.055)]

        transition-[border-color,box-shadow,transform]
        duration-500
        ease-out

        hover:border-[#B79A72]/45
        hover:shadow-[0_18px_45px_rgba(11,42,82,0.09)]

        sm:w-[350px]
        sm:max-w-none
        sm:rounded-[24px]

        md:w-[360px]

        lg:w-[380px]

        xl:w-[390px]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          relative

          h-[310px]
          overflow-hidden

          bg-[#EDF3F8]

          sm:h-[365px]
          md:h-[380px]
          lg:h-[400px]
        "
      >
        <Image
          src={work.image}
          alt={`${work.client} Instagram profile`}
          fill
          quality={95}
          sizes="
            (max-width: 639px) 82vw,
            (max-width: 767px) 350px,
            (max-width: 1023px) 360px,
            (max-width: 1279px) 380px,
            390px
          "
          className="
            object-cover
            object-top

            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            md:group-hover:scale-[1.015]
          "
        />

        {/* subtle gradient only */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0

            h-20

            bg-gradient-to-t
            from-[#0B2A52]/20
            to-transparent
          "
        />

        {/* Instagram tag */}

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          flex
          flex-col

          px-5
          pb-6
          pt-5

          sm:px-6
          sm:pb-7
          sm:pt-6

          lg:px-7
        "
      >
        {/* category + badge */}

        <div
          className="
            flex
            min-w-0
            items-start
            justify-between
            gap-3
          "
        >
          <span
            className="
              min-w-0
              pt-1

              text-[8px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#7D92A9]

              sm:text-[9px]
              sm:tracking-[0.18em]
            "
          >
            {work.category}
          </span>

          {work.insight ? (
            <span
              className="
                flex
                shrink-0
                items-center
                gap-1.5

                rounded-full

                border
                border-[#D5E3EF]

                bg-[#F1F7FC]

                px-2.5
                py-1.5

                text-[#0B2A52]

                sm:px-3
              "
            >
              <BarChart3
                size={11}
                strokeWidth={1.8}
                className="text-[#B79A72]"
              />

              <strong
                className="
                  text-[9px]
                  font-semibold
                  sm:text-[10px]
                "
              >
                {work.insight.value}
              </strong>

              <span
                className="
                  text-[8px]
                  font-medium
                  text-[#68829E]

                  sm:text-[9px]
                "
              >
                {work.insight.label}
              </span>
            </span>
          ) : (
            <span
              className="
                shrink-0

                rounded-full

                border
                border-[#D8C3A9]/65

                bg-[#F8F2EB]

                px-2.5
                py-1.5

                text-[8px]
                font-semibold
                text-[#9A744D]

                sm:px-3
                sm:text-[9px]
              "
            >
              {work.badge}
            </span>
          )}
        </div>

        {/* client */}

        <h3
          style={newYorkFont}
          className="
            mt-5

            text-[27px]
            font-medium
            leading-[1.05]
            tracking-[-0.035em]
            text-[#0B2A52]

            sm:mt-6
            sm:text-[29px]

            lg:text-[31px]
          "
        >
          {work.client}
        </h3>

        {/* description */}

        <p
          className="
            mt-4

            text-[13px]
            leading-[1.75]
            text-[#657C95]

            sm:text-[14px]

            md:min-h-[98px]

            lg:text-[15px]
            lg:leading-[1.8]
          "
        >
          {work.description}
        </p>

        {/* divider */}

        <div
          className="
            my-5
            h-px
            w-full

            bg-[#DCE6EF]

            sm:my-6
          "
        />

        {/* footer */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
          "
        >
          {/* handle */}

          <div
            className="
              flex
              min-w-0
              items-center
              gap-2
            "
          >
            <Camera
              size={13}
              strokeWidth={1.5}
              className="
                shrink-0
                text-[#B79A72]
              "
            />

            <span
              className="
                truncate

                text-[9px]
                font-medium
                text-[#8194A8]

                sm:text-[10px]
              "
            >
              {work.handle}
            </span>
          </div>

          {/* link */}

          <a
          
  href={`https://instagram.com/${instagramUsername}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`View ${work.client} Instagram profile`}
  tabIndex={isClone ? -1 : undefined}
            className="
              group/link

              flex
              shrink-0
              items-center
              gap-1.5

              text-[11px]
              font-semibold
              text-[#0B2A52]

              transition-colors
              duration-300

              hover:text-[#B58D61]

              sm:gap-2
              sm:text-[12px]

              lg:text-[13px]
            "
          >
            <span>View Profile</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="
                text-[#B79A72]

                transition-transform
                duration-300

                group-hover/link:translate-x-0.5
                group-hover/link:-translate-y-0.5
              "
            />
          </a>
        </div>
      </div>

      {/* =====================================================
          GOLD HOVER LINE
      ===================================================== */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          left-1/2

          h-[2px]
          w-0
          -translate-x-1/2

          bg-[#B79A72]

          transition-all
          duration-500
          ease-out

          group-hover:w-full
        "
      />
    </article>
  );
}