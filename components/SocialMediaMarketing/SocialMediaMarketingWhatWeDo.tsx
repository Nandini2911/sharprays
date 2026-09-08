"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Compass, PenTool, MessageCircle, Megaphone, BarChart3 } from "lucide-react";

const stages = [
  {
    number: "01", title: "Strategy", short: "A clearer direction.",
    eyebrow: "BUILD THE FOUNDATION", headline: "Every great presence starts with a point of view.",
    description: "We get to know your audience, sharpen your positioning and build a content direction that gives every post a purpose.",
    items: ["Audience research", "Brand positioning", "Content pillars"],
    image: "/services/insta/meeting1.png", icon: Compass,
  },
  {
    number: "02", title: "Content", short: "Worth stopping for.",
    eyebrow: "MAKE THEM STOP", headline: "Creative that earns attention. And feels like you.",
    description: "From the first frame to the final caption, we create distinctive social content that makes your brand easier to recognise and remember.",
    items: ["Posts & carousels", "Reels", "Stories & captions"],
    image: "/services/insta/meeting2.png", icon: PenTool,
  },
  {
    number: "03", title: "Community", short: "Closer connections.",
    eyebrow: "BUILD RELATIONSHIPS", headline: "Turn an audience into a conversation.",
    description: "We help your brand show up, listen and respond with intention—building stronger relationships with the people behind the profiles.",
    items: ["Comment management", "Conversations", "Audience engagement"],
    image: "/services/insta/meeting3.png", icon: MessageCircle,
  },
  {
    number: "04", title: "Distribution", short: "The right kind of reach.",
    eyebrow: "REACH THE RIGHT PEOPLE", headline: "Good ideas deserve to go further.",
    description: "We bring organic publishing, paid amplification and partnerships together to put your strongest content in front of the right people.",
    items: ["Organic publishing", "Paid amplification", "Partnerships"],
    image: "/services/insta/meeting4.png", icon: Megaphone,
  },
  {
    number: "05", title: "Optimization", short: "Better with every insight.",
    eyebrow: "LEARN & GET BETTER", headline: "A stronger next move, backed by insight.",
    description: "We look beyond the surface numbers, test what matters and use each result to refine your content and improve the next campaign.",
    items: ["Performance analysis", "Creative testing", "Ongoing refinement"],
    image: "/services/insta/meeting5.png", icon: BarChart3,
  },
];

export default function SocialMediaMarketingWhatWeDo() {
  const id = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const active = stages[activeStage];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const section = sectionRef.current;
    const panel = imageRef.current;
    const revealAll = () => {
      setIsVisible(true);
      setIsImageVisible(true);
    };
    if (!section || !panel || !('IntersectionObserver' in window)) {
      revealAll();
      return;
    }
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) {
      revealAll();
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target === section) setIsVisible(true);
        if (entry.target === panel) setIsImageVisible(true);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -48px 0px' });
    // Paint the starting positions before triggering even on an initial viewport load.
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        observer.observe(section);
        observer.observe(panel);
      });
    });
    const onMotionChange = () => {
      if (motion.matches) {
        revealAll();
        observer.disconnect();
      }
    };
    motion.addEventListener('change', onMotionChange);
    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      observer.disconnect();
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby={`${id}-heading`}
      onFocusCapture={() => { setIsVisible(true); setIsImageVisible(true); }}
      className="overflow-hidden bg-white py-16 text-[#0B2A52] antialiased sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <header className={`mx-auto max-w-[800px] text-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="mb-5 flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-[#B79A72] " />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B79A72] ">Our expertise</span>
            <span aria-hidden="true" className="h-px w-8 bg-[#B79A72] " />
          </div>
          <h2 id={`${id}-heading`} className="text-[40px]  leading-[1.08] tracking-[-0.045em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
            Built to be seen.<br />
            <span className="font-serif font-normal  text-[#B79A72] ">Made to matter.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[540px] text-[14px] leading-7 text-[#617080] sm:text-[15px]">
            A distinctive presence takes more than posting. We bring five disciplines together to make your brand part of the conversation.
          </p>
        </header>

        <div className="mt-10 grid items-stretch gap-6 sm:mt-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] lg:gap-12">
          <div role="group" aria-label="Explore our social media services" className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-5 lg:gap-0">
            {stages.map((stage, index) => {
              const selected = activeStage === index;
              const delays = ['delay-100', 'delay-150', 'delay-200', 'delay-300', 'delay-500'];
              return (
                <div key={stage.number} className={`min-w-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${delays[index]} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    aria-controls={`${id}-details`}
                    onPointerEnter={(event) => { if (event.pointerType === 'mouse') setActiveStage(index); }}
                    onFocus={() => setActiveStage(index)}
                    onClick={() => setActiveStage(index)}
                    className={`group relative flex h-full min-h-14 w-full items-center gap-2 rounded-lg border px-3 py-4 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AD8B5E] motion-reduce:transition-none sm:gap-3 sm:px-4 lg:min-h-[104px] lg:gap-4 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:px-5 ${selected ? 'border-[#0B2A52] bg-[#0B2A52] text-white' : 'border-[#DEE0DC] bg-transparent text-[#0B2A52] hover:bg-[#F0EEE8]'}`}
                  >
                    <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-[3px] rounded-l-lg transition-opacity duration-300 motion-reduce:transition-none lg:rounded-none ${selected ? 'bg-[#C8AC81] opacity-100' : 'opacity-0'}`} />
                    <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <span className="text-[13px] font-medium tracking-[-0.025em] sm:text-[15px] lg:text-[25px]">{stage.title}</span>
                      <span className={`hidden text-[12px] leading-5 lg:block ${selected ? 'text-[#CAD4DF]' : 'text-[#617080]'}`}>{stage.short}</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.5} className={`hidden shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none lg:block ${selected ? 'text-[#D7BF9C]' : 'text-[#7A8791]'}`} />
                  </button>
                </div>
              );
            })}
          </div>

          <div
            ref={imageRef}
            id={`${id}-details`}
            role="region"
            aria-label={`${active.title} service details`}
            className={`min-w-0 overflow-hidden rounded-xl border border-[#E5E5DF] bg-white shadow-[0_16px_50px_-30px_rgba(11,42,82,0.22)] transition-all delay-200 duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${isImageVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0 sm:translate-x-24'}`}
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-[#0B2A52] sm:aspect-[16/10]">
              {stages.map((stage, index) => (
                <img
                  key={stage.image}
                  src={stage.image}
                  alt=""
                  decoding="async"
                  aria-hidden="true"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:transition-none ${index === activeStage ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
                />
              ))}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061B30]/70 via-transparent to-[#061B30]/10" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-2 text-[11px] font-medium text-[#0B2A52] sm:left-6 sm:top-6">
                <ActiveIcon size={15} strokeWidth={1.5} aria-hidden="true" />{active.title}
              </span>
              <div aria-hidden="true" className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-6 sm:bottom-6">
                <span className="text-[9px] font-medium uppercase tracking-[0.18em]">The Sharprays approach</span>
                <span className="text-[27px] font-light tabular-nums">{active.number}<span className="ml-1 text-[11px] text-white/80">/ 05</span></span>
              </div>
            </div>

            {/* Shared grid track reserves room for every service, preventing jumps. */}
            <div className="grid p-5 sm:p-7 lg:p-8">
              {stages.map((stage, index) => (
                <div key={stage.number} aria-hidden={index !== activeStage} className={`col-start-1 row-start-1 min-w-0 transition-opacity duration-300 motion-reduce:transition-none ${index === activeStage ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'}`}>
                  <p className="text-[9px] font-semibold uppercase leading-5 tracking-[0.18em] text-[#B79A72]">{stage.eyebrow}</p>
                  <h3 className="mt-2 text-[25px] font-medium leading-[1.22] tracking-[-0.035em] sm:text-[29px]">{stage.headline}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#617080]">{stage.description}</p>
                  <ul aria-label="Included services" className="mt-5 flex list-none flex-wrap gap-x-4 gap-y-2 border-t border-[#E8E8E2] pt-4">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11px] leading-5 text-[#425569]">
                        <span aria-hidden="true" className="h-1 w-1 shrink-0 rotate-45 bg-[#B79A72] " />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
