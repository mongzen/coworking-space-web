"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

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
      <section className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 border-x border-black/10 lg:grid-cols-12">
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
    </main>
  );
}
