"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  MousePointer2,
  MessageSquareText,
  Target,
  TrendingUp,
} from "lucide-react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const objectives = [
  {
    id: "awareness",
    number: "01",
    label: "Brand Awareness",
    short: "Awareness",
    metric: "Reach & Recognition",
    description:
      "Success may mean reaching more of the right people and building stronger brand recognition.",
    icon: Eye,
  },
  {
    id: "engagement",
    number: "02",
    label: "Engagement",
    short: "Engagement",
    metric: "Meaningful Interaction",
    description:
      "Success may mean stronger responses, saves, shares, messages and audience participation.",
    icon: MessageSquareText,
  },
  {
    id: "traffic",
    number: "03",
    label: "Website Traffic",
    short: "Traffic",
    metric: "Qualified Visits",
    description:
      "Success may mean moving relevant social media attention toward your website.",
    icon: MousePointer2,
  },
  {
    id: "enquiries",
    number: "04",
    label: "Qualified Enquiries",
    short: "Enquiries",
    metric: "Business Conversations",
    description:
      "Success may mean creating more relevant enquiries and meaningful sales conversations.",
    icon: Target,
  },
  {
    id: "conversions",
    number: "05",
    label: "Campaign Conversions",
    short: "Conversions",
    metric: "Measurable Action",
    description:
      "Success may mean campaign actions such as leads, signups, purchases or other agreed conversions.",
    icon: TrendingUp,
  },
];

/* =========================================================
   ADD ONLY REAL / VERIFIED CASE STUDIES HERE
========================================================= */

const caseStudies: CaseStudy[] = [
  /*
  {
    client: "Real Client Name",
    challenge: "What was happening before working with Sharp Rays.",
    strategy: "What Sharp Rays changed and why.",
    execution: "Content, platform and campaign activity.",
    result: "Real measurable and verified outcome.",
    quote: "Real client testimonial.",
  },
  */
];

type CaseStudy = {
  client: string;
  challenge: string;
  strategy: string;
  execution: string;
  result: string;
  quote?: string;
};

export default function SocialMediaResultsProof() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeObjective, setActiveObjective] = useState(0);

  const isVisible = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const reduceMotion = useReducedMotion();

  const active = objectives[activeObjective];
  const ActiveIcon = active.icon;

  return (
    <section
      ref={sectionRef}
      id="social-media-results"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-32
      "
    >
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-[340px]
            top-[220px]
            h-[640px]
            w-[640px]
            rounded-full
            border
            border-[#0B2A52]/[0.035]
          "
        />

        <div
          className="
            absolute
            -right-[260px]
            bottom-[-180px]
            h-[520px]
            w-[520px]
            rounded-full
            border
            border-[#B79A72]/10
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[940px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-9 bg-[#B79A72]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#B79A72]
              "
            >
              Our Work
            </span>

            <span className="h-px w-9 bg-[#B79A72]" />
          </div>

          <h2
            className="
              mt-6
              text-[2.2rem]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              text-[#0B2A52]
              sm:text-[2.65rem]
              md:text-[3rem]
              lg:text-[3.35rem]
            "
          >
            What Does Successful Social Media Marketing{" "}
            <span className="font-normal text-[#B79A72]">
              Look Like?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[700px]
              text-[17px]
              font-medium
              leading-7
              text-[#0B2A52]
              sm:text-[19px]
            "
          >
            Success depends on the objective.
          </p>
        </motion.header>

        {/* =======================================================
            SUCCESS EXPLANATION
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-10
            max-w-[900px]
            text-center
          "
        >
          <p
            className="
              text-[14px]
              leading-7
              text-[#0B2A52]/58
              sm:text-[15px]
            "
          >
            For one business, success may mean stronger brand awareness and
            engagement.
          </p>

          <p
            className="
              mt-1
              text-[14px]
              leading-7
              text-[#0B2A52]/58
              sm:text-[15px]
            "
          >
            For another, it may mean website visits, qualified enquiries or
            campaign conversions.
          </p>
        </motion.div>

        {/* =======================================================
            OBJECTIVE LENS
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-16
            max-w-[1140px]
            sm:mt-20
          "
        >
          {/* TOP META */}

          <div className="flex items-center gap-4">
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#B79A72]
              "
            >
              Define Success
            </span>

            <span className="h-px flex-1 bg-[#0B2A52]/10" />

            <span
              className="
                hidden
                text-[9px]
                font-medium
                uppercase
                tracking-[0.17em]
                text-[#0B2A52]/30
                sm:block
              "
            >
              Objective → Metric → Evaluation
            </span>
          </div>

          {/* =====================================================
              DESKTOP
          ====================================================== */}

          <div
            className="
              mt-10
              hidden
              grid-cols-[0.78fr_1.22fr]
              gap-14
              lg:grid
            "
          >
            {/* OBJECTIVES */}

            <div
              className="
                border-t
                border-[#0B2A52]/10
              "
            >
              {objectives.map((item, index) => {
                const Icon = item.icon;
                const selected = activeObjective === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() =>
                      setActiveObjective(index)
                    }
                    onFocus={() =>
                      setActiveObjective(index)
                    }
                    onClick={() =>
                      setActiveObjective(index)
                    }
                    className="
                      group
                      relative
                      block
                      w-full
                      overflow-hidden
                      border-b
                      border-[#0B2A52]/10
                      text-left
                      outline-none
                    "
                  >
                    <motion.span
                      animate={{
                        scaleY: selected ? 1 : 0,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[3px]
                        origin-bottom
                        bg-[#B79A72]
                      "
                    />

                    <motion.div
                      animate={{
                        x: selected ? 8 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        relative
                        flex
                        min-h-[94px]
                        items-center
                        gap-5
                        py-5
                        pl-3
                        pr-2
                      "
                    >
                      <span
                        className={`
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-300
                          ${
                            selected
                              ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                              : "border-[#0B2A52]/15 bg-white text-[#0B2A52]"
                          }
                        `}
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                        />
                      </span>

                      <div className="flex-1">
                        <span
                          className="
                            text-[9px]
                            font-semibold
                            tracking-[0.18em]
                            text-[#B79A72]
                          "
                        >
                          {item.number}
                        </span>

                        <p
                          className={`
                            mt-1
                            text-[17px]
                            font-medium
                            tracking-[-0.018em]
                            transition-colors
                            duration-300
                            ${
                              selected
                                ? "text-[#0B2A52]"
                                : "text-[#0B2A52]/58"
                            }
                          `}
                        >
                          {item.label}
                        </p>
                      </div>

                      <ArrowRight
                        size={15}
                        strokeWidth={1.5}
                        className={`
                          transition-all
                          duration-300
                          ${
                            selected
                              ? "translate-x-0 text-[#B79A72] opacity-100"
                              : "-translate-x-2 text-[#0B2A52]/20 opacity-0"
                          }
                        `}
                      />
                    </motion.div>
                  </button>
                );
              })}
            </div>

            {/* ===================================================
                ACTIVE RESULT LENS
            ==================================================== */}

            <div
              className="
                relative
                flex
                min-h-[540px]
                items-center
                justify-center
                overflow-hidden
                border
                border-[#0B2A52]/10
                bg-white
              "
            >
              {/* CROSSHAIR */}

              <span
                className="
                  absolute
                  left-1/2
                  top-0
                  h-full
                  w-px
                  -translate-x-1/2
                  bg-[#0B2A52]/[0.045]
                "
              />

              <span
                className="
                  absolute
                  left-0
                  top-1/2
                  h-px
                  w-full
                  -translate-y-1/2
                  bg-[#0B2A52]/[0.045]
                "
              />

              {/* LARGE RINGS */}

              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  h-[380px]
                  w-[380px]
                  rounded-full
                  border
                  border-dashed
                  border-[#B79A72]/25
                "
              />

              <div
                className="
                  absolute
                  h-[310px]
                  w-[310px]
                  rounded-full
                  border
                  border-[#0B2A52]/10
                "
              />

              <div
                className="
                  absolute
                  h-[250px]
                  w-[250px]
                  rounded-full
                  border
                  border-[#0B2A52]/[0.07]
                "
              />

              {/* ACTIVE CONTENT */}

              <motion.div
                key={active.id}
                initial={{
                  opacity: 0,
                  y: 18,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                }}
                className="
                  relative
                  z-20
                  flex
                  max-w-[430px]
                  flex-col
                  items-center
                  px-8
                  text-center
                "
              >
                <span
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-[#B79A72]
                    shadow-[0_16px_40px_rgba(11,42,82,0.14)]
                  "
                >
                  <ActiveIcon
                    size={23}
                    strokeWidth={1.5}
                  />
                </span>

                <p
                  className="
                    mt-6
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#B79A72]
                  "
                >
                  {active.label}
                </p>

                <h3
                  className="
                    mt-3
                    text-[29px]
                    font-medium
                    leading-[1.15]
                    tracking-[-0.035em]
                    text-[#0B2A52]
                    xl:text-[32px]
                  "
                >
                  {active.metric}
                </h3>

                <p
                  className="
                    mt-5
                    text-[14px]
                    leading-7
                    text-[#0B2A52]/55
                    sm:text-[15px]
                  "
                >
                  {active.description}
                </p>

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span className="h-px w-7 bg-[#B79A72]" />

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#0B2A52]/35
                    "
                  >
                    Measure What Matters
                  </span>

                  <span className="h-px w-7 bg-[#B79A72]" />
                </div>
              </motion.div>

              {/* CORNER LABEL */}

              <div
                className="
                  absolute
                  bottom-5
                  right-6
                  text-right
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#0B2A52]/25
                  "
                >
                  Success Lens
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    font-semibold
                    text-[#B79A72]
                  "
                >
                  {active.number} / 05
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              MOBILE
          ====================================================== */}

          <div className="mt-8 lg:hidden">
            <div
              className="
                flex
                gap-2
                overflow-x-auto
                pb-3
              "
            >
              {objectives.map((item, index) => {
                const selected = activeObjective === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setActiveObjective(index)
                    }
                    className={`
                      shrink-0
                      border
                      px-4
                      py-3
                      text-[12px]
                      font-medium
                      transition-all
                      duration-300
                      ${
                        selected
                          ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                          : "border-[#0B2A52]/10 bg-white text-[#0B2A52]/60"
                      }
                    `}
                  >
                    {item.short}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                mt-5
                border
                border-[#0B2A52]/10
                p-7
                text-center
              "
            >
              <span
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B2A52]
                  text-[#B79A72]
                "
              >
                <ActiveIcon
                  size={20}
                  strokeWidth={1.5}
                />
              </span>

              <p
                className="
                  mt-5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#B79A72]
                "
              >
                {active.label}
              </p>

              <h3
                className="
                  mt-2
                  text-[24px]
                  font-medium
                  tracking-[-0.03em]
                "
              >
                {active.metric}
              </h3>

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-7
                  text-[#0B2A52]/55
                "
              >
                {active.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* =======================================================
            MEASUREMENT PHILOSOPHY
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: 0.75,
          }}
          className="
            mx-auto
            mt-16
            max-w-[1000px]
            border-y
            border-[#0B2A52]/10
            py-10
            sm:mt-20
          "
        >
          <div
            className="
              grid
              gap-7
              md:grid-cols-[auto_1fr]
              md:items-start
            "
          >
            <span
              className="
                flex
                h-13
                w-13
                shrink-0
                items-center
                justify-center
                bg-[#0B2A52]
                p-4
                text-[#B79A72]
              "
            >
              <BarChart3
                size={19}
                strokeWidth={1.5}
              />
            </span>

            <div>
              <p
                className="
                  text-[18px]
                  font-medium
                  leading-7
                  tracking-[-0.02em]
                  text-[#0B2A52]
                  sm:text-[21px]
                "
              >
                We avoid measuring every brand against the same vanity metrics.
              </p>

              <p
                className="
                  mt-3
                  max-w-[800px]
                  text-[14px]
                  leading-7
                  text-[#0B2A52]/55
                  sm:text-[15px]
                "
              >
                We identify the metrics that matter to your objectives and
                evaluate performance against the agreed strategy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            VERIFIED CASE STUDIES
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: 0.9,
          }}
          className="
            mx-auto
            mt-20
            max-w-[1140px]
            sm:mt-24
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              border-b
              border-[#0B2A52]/10
              pb-7
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#B79A72]
                "
              >
                Verified Proof
              </p>

              <h3
                className="
                  mt-3
                  text-[28px]
                  font-medium
                  tracking-[-0.035em]
                  text-[#0B2A52]
                  sm:text-[34px]
                "
              >
                Real work. Real outcomes.
              </h3>
            </div>

            <p
              className="
                max-w-[430px]
                text-[13px]
                leading-6
                text-[#0B2A52]/45
                sm:text-right
                sm:text-[14px]
              "
            >
              Sharp Rays case studies should only be published here when the
              client, work and results can be verified.
            </p>
          </div>

          {/* =====================================================
              CASE STUDIES AVAILABLE
          ====================================================== */}

          {caseStudies.length > 0 ? (
            <div className="divide-y divide-[#0B2A52]/10">
              {caseStudies.map((study, index) => (
                <CaseStudyRow
                  key={`${study.client}-${index}`}
                  study={study}
                  index={index}
                />
              ))}
            </div>
          ) : (
            /* ===================================================
                CLEAN EMPTY STATE
            ==================================================== */

            <div
              className="
                grid
                min-h-[300px]
                place-items-center
                border-b
                border-[#0B2A52]/10
                py-16
                text-center
              "
            >
              <div className="max-w-[570px]">
                <span
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B79A72]/40
                    text-[#B79A72]
                  "
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={1.5}
                  />
                </span>

                <p
                  className="
                    mt-5
                    text-[18px]
                    font-medium
                    tracking-[-0.02em]
                    text-[#0B2A52]
                    sm:text-[20px]
                  "
                >
                  Proof should be verified, not invented.
                </p>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-[500px]
                    text-[14px]
                    leading-7
                    text-[#0B2A52]/48
                  "
                >
                  Add real Sharp Rays case studies here as verified client
                  outcomes become available.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   CASE STUDY ROW
============================================================= */

function CaseStudyRow({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  return (
    <article
      className="
        group
        relative
        grid
        gap-8
        py-10
        lg:grid-cols-[0.62fr_1.38fr]
        lg:gap-14
        lg:py-14
      "
    >
      {/* CLIENT / RESULT */}

      <div>
        <p
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#B79A72]
          "
        >
          Case Study {String(index + 1).padStart(2, "0")}
        </p>

        <h4
          className="
            mt-3
            text-[26px]
            font-medium
            tracking-[-0.03em]
            text-[#0B2A52]
            sm:text-[30px]
          "
        >
          {study.client}
        </h4>

        <div
          className="
            mt-8
            border-l-[3px]
            border-[#B79A72]
            pl-5
          "
        >
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0B2A52]/35
            "
          >
            Verified Result
          </p>

          <p
            className="
              mt-2
              text-[18px]
              font-medium
              leading-7
              text-[#0B2A52]
              sm:text-[20px]
            "
          >
            {study.result}
          </p>
        </div>
      </div>

      {/* STORY */}

      <div
        className="
          grid
          gap-x-8
          gap-y-7
          sm:grid-cols-2
        "
      >
        <CaseStudyDetail
          label="Challenge"
          value={study.challenge}
        />

        <CaseStudyDetail
          label="Strategy"
          value={study.strategy}
        />

        <CaseStudyDetail
          label="Execution"
          value={study.execution}
        />

        {study.quote && (
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#B79A72]
              "
            >
              Client Quote
            </p>

            <blockquote
              className="
                mt-3
                text-[15px]
                font-medium
                italic
                leading-7
                text-[#0B2A52]/70
              "
            >
              “{study.quote}”
            </blockquote>
          </div>
        )}
      </div>

      <span
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-[#B79A72]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </article>
  );
}

function CaseStudyDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[#B79A72]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-3
          text-[14px]
          leading-7
          text-[#0B2A52]/58
          sm:text-[15px]
        "
      >
        {value}
      </p>
    </div>
  );
}