"use client";

import { useEffect, useRef } from "react";
import ThreeAnimation from "@/components/ThreeAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JourneyPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Hero Title & Desc animations on page load
    gsap.fromTo(
      ".journey-hero-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
    );
    
    gsap.fromTo(
      ".journey-hero-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
    );

    // 2. Grow the active vertical line on scroll
    gsap.fromTo(
      ".timeline-line-active",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 30%",
          end: "bottom 70%",
          scrub: true,
        }
      }
    );

    // 3. Staggered reveal of each milestone row
    const rows = gsap.utils.toArray<HTMLElement>(".milestone-row");
    rows.forEach((row) => {
      const dot = row.querySelector(".timeline-dot");
      const content = row.querySelector(".milestone-content");
      const img = row.querySelector(".milestone-img-wrapper");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });

      // Animate dot (color changes, scale up and glows)
      tl.fromTo(
        dot,
        { scale: 0.8, backgroundColor: "var(--color-secondary-fixed-dim)", boxShadow: "0 0 0 rgba(183, 0, 82, 0)" },
        { 
          scale: 1.4, 
          backgroundColor: "var(--color-primary)", 
          boxShadow: "0 0 15px rgba(183, 0, 82, 0.6)", 
          duration: 0.5, 
          ease: "power2.out" 
        }
      );

      // Determine text layout offset
      const isFlexRow = row.classList.contains("md:flex-row");
      const contentX = isFlexRow ? -40 : 40;

      // Reveal text
      tl.fromTo(
        content,
        { opacity: 0, x: contentX },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );

      // Reveal Image with curtain clip-path effect
      tl.fromTo(
        img,
        { opacity: 0, y: 30, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        { opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, ease: "power3.inOut" },
        "-=0.6"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="relative min-h-screen flex flex-col bg-background text-on-background antialiased selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      {/* Background WebGL & Three.js Canvas Layer */}
      <ThreeAnimation />

      {/* Main Content Content */}
      <main className="flex-grow relative z-10 pt-32 pb-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        
        {/* Hero Section */}
        <section className="min-h-[50vh] flex flex-col justify-center items-center text-center mb-section-gap">
          <h1 className="journey-hero-title font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-md">
            The Journey
          </h1>
          <p className="journey-hero-desc font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A retrospective of spaces, stories, and the evolution of a digital aesthetic.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="relative w-full timeline-section">
          {/* Central Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-outline-variant/30 -translate-x-1/2">
            <div className="timeline-line-active w-full h-full bg-primary origin-top scale-y-0"></div>
          </div>
          {/* Left Line (Mobile) */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-outline-variant/30">
            <div className="timeline-line-active w-full h-full bg-primary origin-top scale-y-0"></div>
          </div>

          {/* Milestone 2024 (Left Text / Right Image) */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-section-gap milestone-row group">
            {/* Dot */}
            <div className="timeline-dot absolute left-4 md:left-1/2 w-3.5 h-3.5 bg-secondary-fixed-dim rounded-full -translate-x-[6px] md:-translate-x-1/2 mt-2 md:mt-0 z-10 ring-4 ring-background transition-all duration-300"></div>
            
            {/* Content Left */}
            <div className="milestone-content w-full md:w-[45%] pl-12 md:pl-0 md:pr-12 text-left md:text-right">
              <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">2024</h2>
              <h3 className="font-label-md text-label-md text-on-surface mb-stack-md tracking-widest uppercase">The Digital Boutique</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Launching a curated space for modern minimalism. A culmination of literary depth and structural clarity, bringing high-fashion sophistication to the digital canvas.
              </p>
            </div>
            
            {/* Image Right */}
            <div className="milestone-img-wrapper w-full md:w-[45%] pl-12 md:pl-0 mt-stack-lg md:mt-0">
              <div className="aspect-[4/5] bg-surface-container-high rounded border border-outline-variant/30 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt="Minimalist digital workspace setup" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqxOZThb8wT_aD3EVKwq4zR4v4lPhctvexBPpeQjYVN3lBF2BVqsH9aWccc4MQkKb0NRAFZCrhFy2v4goQmcfHUhx3bTUzrRLVTWFM78H4Qk89mY7D4q-XgcL3lxBGCWniTjhzyyovWAPBnHuaPrr79H_l33OkXxdWw5AOHnackBgRkX6vkyh1aklZs2eYvFd59lWlxkI4_UhOKtdbVjwxugx9-r-hrHgmeVPjGIY1KTqEeGn-qfbDcSVMEToq8Tvrni4KdE2bNJZ0"
                />
              </div>
            </div>
          </div>

          {/* Milestone 2023 (Right Text / Left Image) */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-section-gap milestone-row group">
            {/* Dot */}
            <div className="timeline-dot absolute left-4 md:left-1/2 w-3.5 h-3.5 bg-secondary-fixed-dim rounded-full -translate-x-[6px] md:-translate-x-1/2 mt-2 md:mt-0 z-10 ring-4 ring-background transition-all duration-300"></div>
            
            {/* Content Right */}
            <div className="milestone-content w-full md:w-[45%] pl-12 md:pl-12 text-left">
              <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">2023</h2>
              <h3 className="font-label-md text-label-md text-on-surface mb-stack-md tracking-widest uppercase">Architectural Musings</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                A year of exploring the intersection of space and story. Documenting the quiet corners of the world where design meets human experience, told through a lens of stark, beautiful restraint.
              </p>
            </div>
            
            {/* Image Left */}
            <div className="milestone-img-wrapper w-full md:w-[45%] pl-12 md:pl-0 mt-stack-lg md:mt-0">
              <div className="aspect-[4/3] bg-surface-container-high rounded border border-outline-variant/30 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt="Modern art gallery interior" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL58J97T7FOpq5aua2FugDASK7XztU5peNfA6Z1GgG0odPBQMIsCRJ289k7LSqgl7B7w6arARN6dxtphr6ZhY5174JnKzGGlqBMMYrjgEC-yvM-sn70sUQ4ajm7jD-IhNtWFXn3LR0CUMEsIwAxWpcHMLpkpUgCHuGtcKkIDON5jNo9PzMvXTIv_fOxea3UwB9LzRjYs0BMKa3X44cJZT3j4UzAVcVPwTOladbjCLtMFjDGZX1b6YhM9nCpsq7Wtg74YeV5DQXiPBG"
                />
              </div>
            </div>
          </div>

          {/* Milestone 2022 (Left Text / Right Image) */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-section-gap milestone-row group">
            {/* Dot */}
            <div className="timeline-dot absolute left-4 md:left-1/2 w-3.5 h-3.5 bg-secondary-fixed-dim rounded-full -translate-x-[6px] md:-translate-x-1/2 mt-2 md:mt-0 z-10 ring-4 ring-background transition-all duration-300"></div>
            
            {/* Content Left */}
            <div className="milestone-content w-full md:w-[45%] pl-12 md:pl-0 md:pr-12 text-left md:text-right">
              <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">2022</h2>
              <h3 className="font-label-md text-label-md text-on-surface mb-stack-md tracking-widest uppercase">The First Chapter</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Where the journey into digital storytelling began. A raw, unpolished collection of initial thoughts, sketches, and visual experiments that laid the foundation for a defined brand aesthetic.
              </p>
            </div>
            
            {/* Image Right */}
            <div className="milestone-img-wrapper w-full md:w-[45%] pl-12 md:pl-0 mt-stack-lg md:mt-0">
              <div className="aspect-square bg-surface-container-high rounded border border-outline-variant/30 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale" 
                  alt="Leather-bound notebook and pen" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATs36FVnC6qiF2QXNQD_IV6C_BPc9NwZDfaFSH64Vcx_l055jnnYtPcHZ0mbf8bqMes0EJH4AL_RG3qthF0kb5xMvEp46q3ozkSlSWgx-cblqIQ_9f1rEJCuDlWpxhCcfKqSJl36_lHDL1BvyH2YsPX7GrBiwOEaao0AQfURa7Gvve-8NhmAVe4MK2JgX3G_L3sLSa1__v_1qfbiNuO3U8rjmcGfbmxRk_jLpc8FsV_kv6DY7lbLXu52R-afqgMNrqCtYQLIbeiUVU"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
