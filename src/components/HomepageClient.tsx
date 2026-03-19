"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Coffee,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";

type Stat = { label: string; value: string };
type FeatureImage = { imageURL: string };

type HomepageClientProps = {
  heroTitle: string;
  heroDescription: string;
  stats: Stat[];
  featuredImages: FeatureImage[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonLabel: string;
};

type ParsedCounter = {
  target: number;
  suffix: string;
};

function parseValue(value: string): ParsedCounter {
  const numeric = Number.parseInt(value.replace(/\D/g, ""), 10);
  return {
    target: Number.isNaN(numeric) ? 0 : numeric,
    suffix: value.replace(/[\d\s]/g, ""),
  };
}

function StatCounter({
  value,
  label,
  shouldStart,
}: {
  value: string;
  label: string;
  shouldStart: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const parsed = useMemo(() => parseValue(value), [value]);

  useEffect(() => {
    if (!shouldStart) return;

    const duration = 1400;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setDisplayValue(Math.floor(parsed.target * progress));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [parsed.target, shouldStart]);

  return (
    <div className="border-t border-black/10 pt-6 md:pt-7">
      <p className="text-[88px] font-light leading-[0.96] md:text-[116px]">
        {displayValue}
        {parsed.suffix}
      </p>
      <p className="mt-3 text-[30px] font-light leading-[1.17] text-black/80 md:text-[22px]">
        {label}
      </p>
    </div>
  );
}

function RevealImage({
  imageURL,
  alt,
  priority = false,
}: {
  imageURL: string;
  alt: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.4 }}
      animate={inView ? { clipPath: "inset(0 0 0% 0)", opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full w-full overflow-hidden"
    >
      <Image
        src={imageURL}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
      />
    </motion.div>
  );
}

function LogoMark() {
  return (
    <svg
      width="149"
      height="72"
      viewBox="0 0 149 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-auto md:h-[72px]"
    >
      <path
        d="M47.5191 10.1899C42.7997 7.01649 37.2871 5.22578 31.6037 5.01998C25.9204 4.81418 20.2926 6.20149 15.3561 9.02525C10.4196 11.849 6.37085 15.9967 3.66716 21C0.96347 26.0033 -0.287495 31.6629 0.0555318 37.3397C0.398559 43.0164 2.32191 48.4842 5.6084 53.1255C8.89489 57.7668 13.4136 61.3969 18.6542 63.6057C23.8949 65.8144 29.6487 66.514 35.2659 65.6253C40.8831 64.7367 46.14 62.2952 50.4429 58.5766L34.94 40.6376C33.982 41.4655 32.8116 42.0091 31.5611 42.2069C30.3105 42.4048 29.0295 42.249 27.8627 41.7573C26.696 41.2655 25.69 40.4574 24.9583 39.424C24.2266 38.3907 23.7984 37.1734 23.722 35.9096C23.6457 34.6457 23.9242 33.3857 24.5261 32.2718C25.128 31.1579 26.0294 30.2345 27.1285 29.6058C28.2275 28.9772 29.4804 28.6683 30.7457 28.7141C32.011 28.7599 33.2383 29.1586 34.289 29.8651L47.5191 10.1899Z"
        fill="url(#paint0_radial_2030_2)"
      />
      <path
        d="M64.56 25.432C66.7627 25.432 68.704 25.908 70.384 26.86C72.064 27.812 73.3613 29.128 74.276 30.808C75.1907 32.488 75.648 34.392 75.648 36.52C75.648 38.704 74.948 40.72 73.548 42.568C72.1667 44.416 70.4493 45.8813 68.396 46.964C66.3427 48.028 64.4013 48.56 62.572 48.56C60.388 48.56 58.456 48.0933 56.776 47.16C55.1147 46.208 53.8173 44.892 52.884 43.212C51.9693 41.532 51.512 39.628 51.512 37.5C51.512 35.316 52.2027 33.3 53.584 31.452C54.9653 29.5853 56.6827 28.12 58.736 27.056C60.7893 25.9733 62.7307 25.432 64.56 25.432ZM62.936 28.932C61.9467 28.932 61.0413 29.2493 60.22 29.884C59.3987 30.5 58.7453 31.3587 58.26 32.46C57.7933 33.5613 57.56 34.7933 57.56 36.156C57.56 37.7987 57.8027 39.292 58.288 40.636C58.7733 41.98 59.5107 43.0533 60.5 43.856C61.508 44.6587 62.74 45.06 64.196 45.06C65.1853 45.06 66.0907 44.752 66.912 44.136C67.7333 43.5013 68.3867 42.6333 68.872 41.532C69.3573 40.4307 69.6 39.1987 69.6 37.836C69.6 36.1933 69.3573 34.7 68.872 33.356C68.3867 31.9933 67.64 30.92 66.632 30.136C65.624 29.3333 64.392 28.932 62.936 28.932ZM110.584 47.972H103.892V37.556L101.568 35.736H97.5083V44.836L101.876 45.928L100.868 47.972H92.3283V35.736H85.9443V44.836L90.3123 45.928L89.3043 47.972H78.2723V46.18L80.7643 44.052V35.736H77.8803V33.664H80.7643V32.432C80.7643 30.9573 81.2403 29.576 82.1923 28.288C83.163 27 84.3577 25.9827 85.7763 25.236C87.2137 24.4707 88.5857 24.088 89.8923 24.088C90.7323 24.088 91.703 24.2187 92.8043 24.48C93.9057 24.7227 94.8203 25.0213 95.5483 25.376C96.351 24.7227 97.2097 24.2093 98.1243 23.836C99.0577 23.4627 99.9443 23.276 100.784 23.276C102.091 23.276 103.454 23.3507 104.872 23.5C106.31 23.6493 107.299 23.864 107.84 24.144C108.344 24.3867 108.736 24.7413 109.016 25.208C109.296 25.6747 109.436 26.1787 109.436 26.72C109.436 27.2987 109.231 27.84 108.82 28.344C108.428 28.8293 107.924 29.2213 107.308 29.52C106.711 29.8187 106.132 29.968 105.572 29.968C104.546 29.968 103.631 29.4267 102.828 28.344C102.362 27.672 101.895 27.224 101.428 27C100.98 26.776 100.327 26.664 99.4683 26.664C98.8523 26.664 98.367 26.9253 98.0123 27.448C97.6577 27.9707 97.4803 28.7267 97.4803 29.716V33.692H101.904L107.084 32.32H109.044V45.144L111.592 45.928L110.584 47.972ZM92.3283 31.62C92.3283 30.9667 92.4123 30.332 92.5803 29.716C92.0203 29.0067 91.3857 28.456 90.6763 28.064C89.967 27.672 89.2577 27.476 88.5483 27.476C87.7643 27.476 87.1297 27.7467 86.6443 28.288C86.1777 28.8107 85.9443 29.5573 85.9443 30.528V33.664H90.5363L92.3283 33.692V31.62ZM122.155 32.572C123.07 32.572 124.124 32.684 125.319 32.908C126.514 33.1133 127.391 33.3467 127.951 33.608V39.068H125.963C125.272 38.1347 124.488 37.4067 123.611 36.884C122.734 36.3427 121.81 36.072 120.839 36.072C120.223 36.072 119.738 36.38 119.383 36.996C119.028 37.5933 118.851 38.452 118.851 39.572C118.851 40.9907 119.15 42.176 119.747 43.128C120.363 44.0613 121.231 44.528 122.351 44.528C123.602 44.528 125.422 43.996 127.811 42.932L128.651 44.668L124.731 47.804C123.611 48.1213 122.276 48.28 120.727 48.28C119.327 48.28 118.067 47.9627 116.947 47.328C115.827 46.6747 114.95 45.788 114.315 44.668C113.699 43.548 113.391 42.2973 113.391 40.916C113.391 39.4227 113.839 38.0413 114.735 36.772C115.65 35.484 116.788 34.4667 118.151 33.72C119.532 32.9547 120.867 32.572 122.155 32.572ZM140.816 32.572C142.832 32.572 144.391 33.3373 145.492 34.868C146.612 36.38 147.154 38.5173 147.116 41.28H137.12C137.326 42.2693 137.708 43.0627 138.268 43.66C138.828 44.2387 139.556 44.528 140.452 44.528C141.778 44.528 143.71 43.9587 146.248 42.82L147.088 44.556L143.056 47.804C141.88 48.1213 140.471 48.28 138.828 48.28C137.428 48.28 136.168 47.9627 135.048 47.328C133.928 46.6747 133.051 45.788 132.416 44.668C131.8 43.548 131.492 42.2973 131.492 40.916C131.492 39.4227 131.978 38.0413 132.948 36.772C133.919 35.484 135.132 34.4667 136.588 33.72C138.044 32.9547 139.454 32.572 140.816 32.572ZM139.304 36.072C138.539 36.072 137.96 36.3333 137.568 36.856C137.195 37.36 136.99 38.144 136.952 39.208H141.936C141.824 38.144 141.572 37.36 141.18 36.856C140.788 36.3333 140.163 36.072 139.304 36.072Z"
        fill="black"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2030_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(30 35) rotate(90) scale(33.5)"
        >
          <stop offset="0.285" stopColor="#030303" />
          <stop offset="1" stopColor="white" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function StarBurst() {
  return (
    <svg
      width="283"
      height="364"
      viewBox="0 0 283 364"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-[130px] md:w-[170px] lg:w-[220px]"
    >
      <path
        d="M182.717 0L192.158 132.995L249.005 12.3913L209.765 139.816L306.34 47.8919L223.719 152.537L346.98 101.707L232.136 169.439L365.434 166.569L233.878 188.241L359.212 233.717L228.711 206.402L329.153 294.083L217.332 221.47L279.318 339.515L201.278 231.41L216.435 363.876L182.717 234.88L148.999 363.876L164.157 231.41L86.1169 339.515L148.103 221.47L36.2811 294.083L136.724 206.402L6.22221 233.717L131.556 188.241L0 166.569L133.299 169.439L18.4548 101.707L141.715 152.537L59.0941 47.8919L155.669 139.816L116.429 12.3913L173.276 132.995L182.717 0Z"
        fill="#D9D9D9"
        fillOpacity="0.35"
      />
    </svg>
  );
}

function CommunityCardIcon({ type }: { type: "cube" | "badge" | "blocks" }) {
  if (type === "cube") {
    return (
      <svg viewBox="0 0 51 51" className="h-full w-full" aria-hidden="true">
        <path
          d="M25.5 3.2 7 13.8v23.5L25.5 47.8 44 37.3V13.8L25.5 3.2Zm0 4 14.9 8.5-14.9 8.6-14.9-8.6L25.5 7.2Zm-16 12.1 14.5 8.4v16.8L9.5 36.1V19.3Zm31.9 0v16.8l-14.5 8.4V27.7l14.5-8.4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "badge") {
    return (
      <svg viewBox="0 0 51 51" className="h-full w-full" aria-hidden="true">
        <path
          d="M25.5 3.8 31 11l8.9 2.8-5.4 7v8.9l-9-2.8-9 2.8v-8.9l-5.4-7L20 11l5.5-7.2Zm-6 24.9h4.4V47h-4.4V28.7Zm8.1 0H32V47h-4.4V28.7Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 51 51" className="h-full w-full" aria-hidden="true">
      <path
        d="M8 9h16v16H8V9Zm19 0h16v16H27V9ZM8 28h16v16H8V28Zm19 0h16v16H27V28Z"
        fill="currentColor"
      />
    </svg>
  );
}

type CommunityCard = {
  title: string;
  description: string;
  icon: "cube" | "badge" | "blocks";
};

const communityCards: CommunityCard[] = [
  {
    title: "100 + Renowned\nCompanies",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.",
    icon: "cube",
  },
  {
    title: "3 Building’s Available\nFor Co.",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.",
    icon: "badge",
  },
  {
    title: "10 + Communities\nConnected",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.",
    icon: "blocks",
  },
];

const needsCards = [
  {
    title: "Private Meeting Room",
    description: "Quiet rooms designed for pitches, calls, and focused team sessions.",
    imageURL:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cafe Corner",
    description: "A relaxed zone for short breaks, casual chats, and coffee between tasks.",
    imageURL:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Open Lounge Setup",
    description: "Flexible seating that adapts to workshops, visitors, and creative reviews.",
    imageURL:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Team Work Suite",
    description: "Roomier layouts for growing teams that need comfort and structure every day.",
    imageURL:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
  },
];

const officeLeaseBenefits = [
  {
    title: "High-speed internet",
    description: "Fast and stable Wi-Fi throughout the building for daily work and video calls.",
    icon: Wifi,
  },
  {
    title: "Private storage",
    description: "Keep documents, devices, and supplies secure with dedicated lockable storage.",
    icon: ShieldCheck,
  },
  {
    title: "Meeting rooms",
    description: "Reserve polished spaces for presentations, interviews, and internal sessions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Community events",
    description: "Join networking meetups, workshops, and curated activities with other members.",
    icon: Users,
  },
  {
    title: "Daily refreshments",
    description: "Coffee, tea, and pantry essentials are available to keep the day moving.",
    icon: Coffee,
  },
  {
    title: "Business support",
    description: "Reception assistance and a premium front-of-house experience for your clients.",
    icon: Sparkles,
  },
];

const workspaceGallery = [
  {
    title: "Meeting Space",
    imageURL:
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Main Office",
    imageURL:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Consultant Space",
    imageURL:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Work Space",
    imageURL:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
];

const membershipPlans = [
  {
    name: "Remote Worker",
    price: "Rs. 22,000/-",
    features: [
      "Access to shared lounges and hot desks during working hours",
      "Business address and mail handling for daily operations",
      "Flexible booking credits for meeting rooms each month",
    ],
  },
  {
    name: "Outlying Worker",
    price: "Rs. 45,000/-",
    features: [
      "Dedicated desk with extended access for consistent routines",
      "Storage, printing, and faster room-booking priority included",
      "Designed for hybrid teams or founders commuting into the city",
    ],
  },
  {
    name: "Resident",
    price: "Rs. 78,000/-",
    features: [
      "Private member benefits with all-day workspace access",
      "Priority reservations, guest passes, and concierge-style support",
      "A premium setup for teams that want a stable long-term base",
    ],
  },
];

const DESIGN_WIDTH = 1728;
const vw = (pixel: number) => `calc(100vw*${pixel}/${DESIGN_WIDTH})`;

function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SpinningInfoCircle() {
  const labels = ["INFO", "MORE", "INFO", "MORE", "INFO", "MORE", "INFO", "MORE"];

  return (
    <div className="relative mx-auto flex h-[110px] w-[110px] items-center justify-center rounded-full border border-white/45 md:h-[130px] md:w-[130px] lg:h-[calc(100vw*138/1728)] lg:w-[calc(100vw*138/1728)]">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {labels.map((label, index) => {
          const angle = index * 45;

          return (
            <span
              key={`${label}-${index}`}
              className="absolute left-1/2 top-1/2 origin-center text-[7px] font-lato font-normal tracking-[0.08em] text-white/55 md:text-[8px] lg:text-[calc(100vw*8/1728)]"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${vw(61)}) rotate(-${angle}deg)`,
              }}
            >
              {label}
            </span>
          );
        })}
      </motion.div>

      <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#5b5b5b] md:h-[78px] md:w-[78px] lg:h-[calc(100vw*82/1728)] lg:w-[calc(100vw*82/1728)]">
        <div className="h-7 w-7 rounded-full bg-[#ececec] md:h-8 md:w-8 lg:h-[calc(100vw*32/1728)] lg:w-[calc(100vw*32/1728)]" />
      </div>
    </div>
  );
}

function CommunityCardSwiper({ cards }: { cards: CommunityCard[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = window.setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const cardWidth = container.querySelector("article")?.clientWidth ?? 0;
      const step = cardWidth + 24;

      if (container.scrollLeft + step >= maxScrollLeft - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      container.scrollBy({ left: step, behavior: "smooth" });
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:gap-[calc(100vw*44/1728)]"
      >
        {cards.map((card) => (
          <article
            key={card.title}
            className="min-h-[420px] min-w-[300px] snap-start border border-white/50 px-7 py-8 md:min-h-[531px] md:min-w-[390px] md:px-9 md:py-10 lg:min-h-[calc(100vw*531/1728)] lg:min-w-[calc(100vw*420/1728)] lg:px-[calc(100vw*41/1728)] lg:py-[calc(100vw*42/1728)]"
          >
            <div className="h-8 w-8 text-white md:h-11 md:w-11 lg:h-[calc(100vw*51/1728)] lg:w-[calc(100vw*51/1728)]">
              <CommunityCardIcon type={card.icon} />
            </div>

            <h3 className="mt-8 whitespace-pre-line font-lato text-[30px] font-normal leading-[1.17] md:text-[28px] lg:mt-[calc(100vw*52/1728)] lg:text-[calc(100vw*32/1728)]">
              {card.title}
            </h3>

            <p className="mt-8 max-w-[300px] font-lato text-[22px] leading-[1.54] text-white/95 md:text-[24px] lg:mt-[calc(100vw*42/1728)] lg:max-w-[calc(100vw*300/1728)] lg:text-[calc(100vw*22/1728)]">
              {card.description}
            </p>

            <button className="group mt-8 flex items-center gap-4 font-lato text-[24px] font-bold leading-[1.17] lg:mt-[calc(100vw*48/1728)] lg:text-[calc(100vw*24/1728)]">
              Learn More
              <span className="h-[2px] w-10 bg-white transition group-hover:w-14 lg:w-[calc(100vw*43/1728)] lg:group-hover:w-[calc(100vw*54/1728)]" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export function HomepageClient(props: HomepageClientProps) {
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setStartCounter(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const stats = props.stats.slice(0, 4);
  const images = props.featuredImages.slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <section className="mx-auto grid min-h-screen w-full grid-cols-1 border-x border-black/10 lg:grid-cols-12">
        <header className="flex items-center justify-between gap-4 border-b border-black/10 px-6 py-5 lg:col-span-12 lg:px-12 lg:py-6">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <LogoMark />
          </motion.div>

          <nav className="hidden items-center gap-12 font-lato text-[24px] font-normal md:flex">
            <a href="#about" className="transition hover:opacity-60">
              About
            </a>
            <a href="#membership" className="transition hover:opacity-60">
              Membership
            </a>
            <a href="#feature" className="transition hover:opacity-60">
              Feature
            </a>
            <a href="#location" className="transition hover:opacity-60">
              Location
            </a>
          </nav>

          <div className="flex items-center gap-6">
            <button className="h-12 w-[150px] border border-black bg-black px-4 font-lato text-[24px] font-bold leading-none text-white transition hover:bg-transparent hover:text-black md:h-16 md:w-[214px]">
              Book Now
            </button>
            <span className="hidden text-[14px] leading-[0.7] tracking-[0.25em] lg:block">
              ●<br />●<br />●
            </span>
          </div>
        </header>

        <div className="order-2 border-t border-black/10 lg:order-1 lg:col-span-3 lg:border-r lg:border-t-0">
          <div className="h-[180px] border-b border-black/10 md:h-[240px]" />
          <div className="relative h-[320px] md:h-[420px] lg:h-[calc(100%-240px)]">
            <RevealImage
              imageURL={
                images[0]?.imageURL ||
                "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80"
              }
              alt="Coworking lounge"
            />
          </div>
        </div>

        <div
          className="order-1 border-t border-black/10 px-6 py-8 md:px-10 lg:order-2 lg:col-span-6 lg:border-r lg:px-12 lg:py-14"
          id="about"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl font-italiana text-[68px] leading-[0.98] md:text-[96px] lg:text-[150px]"
          >
            {props.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-lg font-lato text-[24px] font-normal leading-[1.17] text-black/75 md:mt-8"
          >
            {props.heroDescription}
          </motion.p>

          <div
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
            id="feature"
          >
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                shouldStart={startCounter}
              />
            ))}
          </div>
        </div>

        <aside
          className="order-3 border-t border-black/10 lg:col-span-3 lg:border-t-0"
          id="location"
        >
          <div className="relative flex h-[180px] items-end justify-end border-b border-black/10 pr-6 md:h-[240px] md:pr-10">
            <StarBurst />
          </div>
          <div className="relative h-[320px] border-b border-black/10 md:h-[420px] lg:h-[540px]">
            <RevealImage
              imageURL={
                images[1]?.imageURL ||
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
              }
              alt="Open office"
              priority
            />
          </div>
          <div
            className="flex h-[120px] items-center justify-center"
            id="membership"
          >
            <button className="group flex items-center gap-5 font-italiana text-[28px] leading-[1.17]">
              <span className="relative inline-block px-1">
                Explore
                <span className="absolute -bottom-2 left-1/2 h-[9px] w-[56px] -translate-x-1/2 rounded-[999px] border border-[#d9d9d9]/90" />
                <span className="absolute -bottom-2 left-[38%] h-[9px] w-[18px] rounded-[999px] border border-[#d9d9d9]/90" />
                <span className="absolute -bottom-2 left-[56%] h-[9px] w-[18px] rounded-[999px] border border-[#d9d9d9]/90" />
              </span>
              <span className="h-px w-[77px] bg-black transition group-hover:w-[92px]" />
            </button>
          </div>
        </aside>
      </section>

      <section className="relative overflow-hidden bg-black text-white">
        <div className="mx-auto w-full border-x border-white/30">
          <div
            className="grid min-h-[760px] grid-cols-1 lg:grid-cols-[calc(100vw*318/1728)_1fr]"
            style={{ minHeight: vw(786) }}
          >
            <div className="relative hidden border-r border-white/30 lg:block">
              <div style={{ marginTop: vw(154) }}>
                <SpinningInfoCircle />
              </div>

              <div
                className="absolute bottom-[15vw] -right-[6.2vw] flex items-center justify-center rounded-full border-[1.5px] border-white/90 px-[2.8vw] text-center font-lato font-bold leading-[1.54] text-white/90 bg-black"
                style={{ width: vw(346), height: vw(346), fontSize: vw(18) }}
              >
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
              </div>
            </div>

            <div className="px-6 py-16 md:px-10 lg:px-[calc(100vw*200/1728)] lg:py-[calc(100vw*96/1728)]">
              <h2 className="text-center font-italiana text-[52px] leading-[1.17] md:text-[84px] lg:text-[calc(100vw*120/1728)]">
                A Community
                <br />
                At Work
              </h2>

              <div className="mt-12 lg:mt-[calc(100vw*90/1728)]">
                <CommunityCardSwiper cards={communityCards} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f7f7f7]" id="spaces">
        <div className="mx-auto w-full border-x border-black/10 px-6 py-14 md:px-10 lg:max-w-[1728px] lg:px-[clamp(34px,4vw,78px)] lg:py-[clamp(72px,7vw,110px)]">
          <div className="grid items-start gap-6 md:gap-8 xl:grid-cols-[minmax(250px,0.82fr)_minmax(280px,1fr)_minmax(280px,1fr)] xl:gap-[clamp(18px,1.8vw,34px)]">
            <FadeIn className="max-w-[360px] pt-2 xl:pt-6">
              <h2 className="font-italiana text-[clamp(3.2rem,7vw,5.9rem)] leading-[0.92] tracking-[-0.04em]">
                A Space
                <br />
                To Make
                <br />
                Your Own
              </h2>
              <p className="mt-5 max-w-[24rem] font-lato text-[clamp(0.92rem,1.4vw,1.08rem)] leading-[1.85] text-black/70 lg:mt-8">
                Crafted for teams that want a polished office atmosphere without losing warmth, flexibility, or personality.
              </p>
              <motion.a
                href="#tour"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex items-center justify-center bg-black px-7 py-3 font-lato text-sm font-bold tracking-[0.04em] text-white transition hover:bg-black/85 lg:mt-8"
              >
                Explore
              </motion.a>
            </FadeIn>

            <FadeIn delay={0.08} className="relative aspect-[0.77] min-h-[320px] overflow-hidden bg-black/5 sm:min-h-[420px] xl:min-h-[clamp(420px,35vw,610px)]">
              <Image
                src={
                  images[0]?.imageURL ||
                  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                }
                alt="Open-plan office interior"
                fill
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </FadeIn>

            <FadeIn delay={0.16} className="relative aspect-[0.77] min-h-[320px] overflow-hidden bg-black/5 sm:min-h-[420px] xl:min-h-[clamp(420px,35vw,610px)]">
              <Image
                src={
                  images[1]?.imageURL ||
                  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                }
                alt="Coworking lounge"
                fill
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f7f7f7]" id="feature">
        <div className="mx-auto w-full border-x border-black/10 px-6 py-16 md:px-10 lg:max-w-[1728px] lg:px-[clamp(42px,5vw,96px)] lg:py-[clamp(88px,8vw,138px)]">
          <FadeIn className="mx-auto max-w-[600px] text-center">
            <h2 className="font-italiana text-[clamp(3.1rem,6.7vw,5.6rem)] leading-[0.94] tracking-[-0.04em]">
              Space To Suit
              <br />
              Your Needs
            </h2>
          </FadeIn>

          <div className="relative mt-14 grid gap-8 md:grid-cols-2 xl:mt-20 xl:grid-cols-4 xl:gap-[clamp(24px,2.4vw,44px)]">
            <motion.a
              href="#membership"
              whileHover={{ x: 6 }}
              className="hidden items-center gap-3 font-lato text-sm font-bold uppercase tracking-[0.18em] text-black/70 xl:absolute xl:left-1/2 xl:top-[36%] xl:flex xl:-translate-x-1/2"
            >
              Explore More
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            {needsCards.map((card, index) => (
              <FadeIn
                key={card.title}
                delay={index * 0.08}
                className={index % 2 === 1 ? "xl:translate-y-16" : ""}
              >
                <article className="group">
                  <div className="relative aspect-[1.02] overflow-hidden bg-black/5">
                    <Image
                      src={card.imageURL}
                      alt={card.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 max-w-[17rem]">
                    <h3 className="font-italiana text-[clamp(1.5rem,2.1vw,2.2rem)] leading-[1] tracking-[-0.03em]">
                      {card.title}
                    </h3>
                    <p className="mt-3 font-lato text-[0.98rem] leading-[1.75] text-black/70">
                      {card.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f7f7f7]" id="amenities">
        <div className="mx-auto grid w-full gap-12 border-x border-black/10 px-6 py-16 md:px-10 lg:max-w-[1728px] lg:grid-cols-[minmax(260px,0.92fr)_1fr] lg:px-[clamp(42px,5vw,96px)] lg:py-[clamp(88px,8vw,132px)]">
          <FadeIn className="max-w-[320px]">
            <h2 className="font-italiana text-[clamp(3rem,5.8vw,5rem)] leading-[0.96] tracking-[-0.04em]">
              Included In Your Office Lease
            </h2>
          </FadeIn>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 md:gap-y-10 lg:gap-x-16">
            {officeLeaseBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <FadeIn key={benefit.title} delay={index * 0.05}>
                  <article className="flex gap-4 border-t border-black/10 pt-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-lato text-[1.05rem] font-bold tracking-[0.01em]">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 max-w-[24rem] font-lato text-[0.95rem] leading-[1.75] text-black/68">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-black text-white" id="tour">
        <div className="mx-auto w-full border-x border-white/20 px-6 py-16 text-center md:px-10 lg:max-w-[1728px] lg:px-12 lg:py-[clamp(90px,9vw,136px)]">
          <FadeIn className="mx-auto max-w-[620px]">
            <h2 className="font-italiana text-[clamp(3rem,5.6vw,5.2rem)] leading-[0.94] tracking-[-0.04em]">
              {props.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-[34rem] font-lato text-[0.98rem] leading-[1.85] text-white/72 lg:text-[1.05rem]">
              {props.ctaDescription}
            </p>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center border border-white/40 px-8 py-3 font-lato text-sm font-bold tracking-[0.15em] text-white transition hover:bg-white hover:text-black"
            >
              {props.ctaButtonLabel}
            </motion.a>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f7f7f7]">
        <div className="mx-auto w-full border-x border-black/10 px-6 py-16 md:px-10 lg:max-w-[1728px] lg:px-[clamp(42px,5vw,96px)] lg:py-[clamp(88px,8vw,132px)]">
          <FadeIn className="mx-auto max-w-[560px] text-center">
            <h2 className="font-italiana text-[clamp(3rem,5.8vw,5.1rem)] leading-[0.96] tracking-[-0.04em]">
              See Your
              <br />
              Working Space
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:mt-20 xl:grid-cols-4 xl:gap-[clamp(28px,2.5vw,52px)]">
            {workspaceGallery.map((space, index) => (
              <FadeIn
                key={space.title}
                delay={index * 0.07}
                className={index % 2 === 1 ? "xl:translate-y-16" : ""}
              >
                <article className="group flex items-center gap-4 xl:flex-col xl:items-start">
                  <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden bg-black/5 sm:h-[118px] sm:w-[118px] lg:h-[132px] lg:w-[132px]">
                    <Image
                      src={space.imageURL}
                      alt={space.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <h3 className="font-lato text-[1rem] font-medium tracking-[0.01em] text-black/80 xl:mt-4">
                    {space.title}
                  </h3>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-black text-white" id="membership">
        <div className="mx-auto w-full border-x border-white/20 px-6 py-16 md:px-10 lg:max-w-[1728px] lg:px-[clamp(42px,5vw,96px)] lg:py-[clamp(88px,8vw,132px)]">
          <FadeIn className="max-w-[540px]">
            <h2 className="font-italiana text-[clamp(3rem,5.7vw,5rem)] leading-[0.96] tracking-[-0.04em]">
              Our Memberships
            </h2>
          </FadeIn>

          <div className="mt-10 space-y-6 lg:mt-14">
            {membershipPlans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.08}>
                <article className="grid gap-6 border-t border-white/15 py-8 lg:grid-cols-[220px_1fr_190px] lg:items-start lg:gap-10 lg:py-10">
                  <h3 className="font-lato text-[2rem] leading-[1.05] lg:text-[2.3rem]">
                    {plan.name}
                  </h3>

                  <ul className="space-y-3 font-lato text-[0.96rem] leading-[1.75] text-white/74">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-[0.6rem] h-[5px] w-[5px] shrink-0 rounded-full bg-white/75" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-left font-lato text-[2rem] font-light leading-[1.02] tracking-[-0.03em] lg:text-right lg:text-[3rem]">
                    {plan.price}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f7f7f7]" id="contact">
        <div className="mx-auto grid w-full gap-0 border-x border-black/10 md:grid-cols-4 lg:max-w-[1728px]">
          <div className="flex min-h-[180px] items-center justify-center border-b border-black/10 p-8 md:border-b-0 md:border-r">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-[118px] w-[118px] items-center justify-center rounded-full border border-dashed border-black/20">
                <LogoMark />
              </div>
            </motion.div>
          </div>

          <FadeIn className="min-h-[180px] border-b border-black/10 p-8 md:border-b-0 md:border-r">
            <h3 className="font-italiana text-[2rem] leading-none">Interested?</h3>
            <div className="mt-5 space-y-3 font-lato text-[0.98rem] leading-[1.7] text-black/72">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                hello@office-space.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                +94 77 123 4567
              </p>
              <a href="#tour" className="inline-flex items-center gap-2 pt-2 font-bold text-black">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          <FadeIn className="min-h-[180px] border-b border-black/10 p-8 md:border-b-0 md:border-r">
            <h3 className="font-italiana text-[2rem] leading-none">Find Us</h3>
            <div className="mt-5 space-y-3 font-lato text-[0.98rem] leading-[1.7] text-black/72">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                24 Corporate Avenue, Colombo 03, Sri Lanka
              </p>
              <p>Monday to Saturday, 8:00 AM to 8:00 PM</p>
              <a href="#about" className="inline-flex items-center gap-2 pt-2 font-bold text-black">
                Explore
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          <FadeIn className="min-h-[180px] p-8">
            <h3 className="font-italiana text-[2rem] leading-none">Interested?</h3>
            <div className="mt-5 space-y-3 font-lato text-[0.98rem] leading-[1.7] text-black/72">
              <p>Membership options for freelancers, teams, and growing companies.</p>
              <p>Schedule a visit and find the setup that fits your routine.</p>
              <a href="#membership" className="inline-flex items-center gap-2 pt-2 font-bold text-black">
                See Plans
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="border-t border-black/10 px-6 py-4 text-center font-lato text-[0.82rem] uppercase tracking-[0.14em] text-black/55">
          Premium Coworking Experience
        </div>
      </footer>
    </main>
  );
}
