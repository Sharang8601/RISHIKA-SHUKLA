"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Set up mock content based on Stitch design detail
  const blogData = {
    category: "Design Theory",
    date: "October 24, 2024",
    readTime: "8 min read",
    title: "The Architecture of Silence: Designing Whitespace in Digital Environments.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD8HKDHYd2v997yd3Ey7O367Z61lgH4C7LctZiP6VNt0xZ5ChwYER1D7aAivGyFuO7gsTEKxXJBhSRhOm13L7nsO_3qFZXQEV7qpXvDMS4Vf5IxVWp2QX30-lIq14rBqOrFwICyewoVqJZYE_AoaxWJk5eY_yMBMmFWxsN_6VDd_1tA2aWpG0IpEPCsidNeRzAnZaNx74rlUFBJq5pjvFljtBusBLAH2olesW8CySd6HS1XFoad2_35TqoRjy77mUV6sZa-bTV2vmE",
    caption: "Photography by Studio Blanc. Curated space highlighting intentional emptiness.",
    author: {
      name: "Rishika Shukla",
      role: "Lead Designer & Author",
      avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfm9ZlhoRMRvzQps6dqnox00ZNzu445MT76VGweqX-vKcmKP1fkTbuMYFu_2Ohtg5wxsEUxrswcnY1gRy72vj9MkgtWidsUo94vZxt-Z4cpQusbZuC330DYumsyZ-GYaekOpHeapf8jsMU3KdudXTy3igqugkwyxkezrG6xLFbmQJSeLcWqjuetKMyWti1Iqzd71stZH9zw4DDWGK6TcXaC2sJOyWSIubtieTQjSmG4XRyh0HvX7kcAYXzA-XMMnt-LYRXCiufe7Kk",
      bio: "Exploring the intersection of minimalist aesthetics, digital typography, and human-centric layout design."
    }
  };

  return (
    <main className="w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto pt-stack-lg md:pt-[60px] pb-section-gap">
      <article className="mb-section-gap">
        {/* Header Block */}
        <header className="mb-stack-lg md:mb-[60px] text-center md:text-left max-w-3xl mx-auto md:mx-0">
          <div className="flex items-center justify-center md:justify-start space-x-stack-sm mb-stack-md flex-wrap">
            <span className="inline-block bg-surface-container text-primary font-label-md text-label-md px-4 py-1.5 rounded-full uppercase tracking-widest text-[10px]">
              {blogData.category}
            </span>
            <span className="text-on-surface-variant font-caption text-caption">•</span>
            <span className="text-on-surface-variant font-caption text-caption">{blogData.date}</span>
            <span className="text-on-surface-variant font-caption text-caption">•</span>
            <span className="text-on-surface-variant font-caption text-caption">{blogData.readTime}</span>
          </div>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-background mb-stack-lg leading-tight">
            {blogData.title}
          </h1>

          {/* Mobile Author Info */}
          <div className="flex items-center justify-center md:justify-start space-x-stack-sm md:hidden mb-stack-md border-y border-outline-variant py-stack-sm">
            <img 
              className="w-10 h-10 rounded-full object-cover" 
              alt={blogData.author.name} 
              src={blogData.author.avatarUrl}
            />
            <div className="text-left">
              <p className="font-label-md text-label-md text-on-background m-0">{blogData.author.name}</p>
              <p className="font-caption text-caption text-on-surface-variant m-0">{blogData.author.role}</p>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <figure className="w-full mb-stack-lg md:mb-[80px]">
          <img 
            className="w-full h-[400px] md:h-[600px] object-cover rounded-xl shadow-sm" 
            alt="Minimalist room" 
            src={blogData.imgUrl}
          />
          <figcaption className="mt-3 text-center font-caption text-caption text-on-surface-variant italic">
            {blogData.caption}
          </figcaption>
        </figure>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
          
          {/* Left Column: Share Panel (Desktop Sticky) */}
          <aside className="hidden lg:flex lg:col-span-1 flex-col items-center sticky top-[120px] h-fit space-y-stack-md pt-2">
            <p className="font-caption text-caption text-outline mb-2 uppercase tracking-widest transform -rotate-90 origin-center whitespace-nowrap mb-12">
              Share
            </p>
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors duration-300 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">share</span>
            </button>
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                isBookmarked 
                  ? "bg-primary border-primary text-on-primary" 
                  : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
            </button>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 mt-4 cursor-pointer ${
                isLiked 
                  ? "bg-primary border-primary text-on-primary" 
                  : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
            </button>
          </aside>

          {/* Center Column: Main Body text */}
          <div className="lg:col-span-7 xl:col-span-7 text-left">
            <p className="font-body-lg text-body-lg text-on-background mb-stack-lg leading-relaxed first-letter:float-left first-letter:text-[4rem] first-letter:pr-3 first-letter:font-headline-md first-letter:text-primary first-letter:leading-[0.8] first-line:tracking-widest first-line:uppercase">
              In the relentless cacophony of the modern digital experience, true luxury is no longer defined by abundance, but by absence. The deliberate application of whitespace—often misunderstood as merely 'empty space'—is the architectural foundation of elevated typography and sophisticated user interfaces. It is the silence between the notes that creates the music.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed">
              When we approach layout design, particularly for reading-focused environments, we must treat the canvas with the same reverence a curator treats a gallery wall. Overcrowding diminishes the impact of individual elements. By embracing a generous margin strategy and strict vertical rhythm, we allow the eye to rest, facilitating a deeper, more immersive cognitive engagement with the narrative material.
            </p>

            <h2 className="font-headline-md text-headline-md text-on-background mt-section-gap mb-stack-md">
              The Cognitive Weight of Clutter
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed">
              Research in visual processing confirms what editorial designers have intuitively known for decades: dense, unbroken blocks of text invoke cognitive strain. A minimalist aesthetic is not merely a stylistic choice; it is an empathetic gesture towards the reader.
            </p>

            <blockquote className="my-stack-lg pl-stack-lg border-l-4 border-primary italic bg-surface-container-lowest p-stack-md rounded-r-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
              <p className="font-headline-sm text-headline-sm text-on-background leading-snug">
                "Whitespace is like air: it is necessary for design to breathe. Without it, the visual hierarchy suffocates under its own weight."
              </p>
            </blockquote>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed">
              Implementing this requires discipline. It means resisting the urge to fill every void with secondary features or lateral navigation. Instead, we elevate the primary content by stripping away the non-essential, utilizing subtle tonal shifts in background colors (like moving from a pure white `surface-container-lowest` to a warm `surface`) to delineate sections without introducing harsh, visually aggressive borders.
            </p>

            {/* Principles Box */}
            <div className="my-stack-lg p-stack-lg bg-surface-container-low rounded-xl border border-outline-variant">
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-stack-sm">
                Key Principles for Implementation
              </h3>
              <ul className="list-none space-y-3 mt-stack-md">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1 text-[18px]">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    <strong>Macro Whitespace:</strong> The large spaces between major layout elements (margins, section gaps).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1 text-[18px]">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    <strong>Micro Whitespace:</strong> The small spaces between minor elements (line height, letter spacing, padding inside buttons).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1 text-[18px]">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    <strong>Active Whitespace:</strong> Space intentionally left blank for a better structure and to emphasize content.
                  </span>
                </li>
              </ul>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed">
              Ultimately, designing with whitespace is an exercise in restraint. It is about confidently presenting a singular idea and trusting the reader's attention to hold onto it when it isn't competing with peripheral noise.
            </p>

            {/* Mobile Share Indicator */}
            <div className="flex lg:hidden justify-center items-center space-x-stack-md py-stack-lg mt-stack-lg border-t border-outline-variant">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mr-2">Share</span>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </button>
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                  isBookmarked ? "bg-primary border-primary text-on-primary" : "border-outline-variant text-on-surface-variant"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
              </button>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                  isLiked ? "bg-primary border-primary text-on-primary" : "border-outline-variant text-on-surface-variant"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar (Desktop Sticky) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 pl-4 sticky top-[120px] h-fit text-left">
            {/* Author Profile Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg mb-stack-lg text-center flex flex-col items-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] transition-shadow duration-300 group">
              <img 
                className="w-24 h-24 rounded-full object-cover mb-stack-md border-2 border-surface-container-high group-hover:border-primary transition-colors duration-300" 
                alt={blogData.author.name} 
                src={blogData.author.avatarUrl}
              />
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-1">{blogData.author.name}</h3>
              <p className="font-label-md text-label-md text-primary mb-stack-md">{blogData.author.role}</p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md text-sm leading-relaxed">
                {blogData.author.bio}
              </p>
              <Link 
                href="/about"
                className="w-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md py-2.5 rounded-full hover:bg-primary-fixed-dim transition-colors duration-300 text-center"
              >
                View Profile
              </Link>
            </div>

            {/* Topics Widget */}
            <div className="mb-stack-lg">
              <h4 className="font-label-md text-label-md text-on-background uppercase tracking-widest mb-stack-md pb-2 border-b border-outline-variant">
                Topics
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Design Theory", "Typography", "Case Studies", "Minimalism", "UX"].map((topic) => (
                  <Link 
                    key={topic}
                    href={`/blogs?category=${topic.replace(" ", "-")}`}
                    className="inline-block bg-surface-container-highest text-on-surface-variant hover:bg-primary-fixed hover:text-on-primary-fixed font-label-md text-label-md px-4 py-1.5 rounded-full transition-colors duration-200 text-xs"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Essays List */}
            <div>
              <h4 className="font-label-md text-label-md text-on-background uppercase tracking-widest mb-stack-md pb-2 border-b border-outline-variant">
                Recent Essays
              </h4>
              <ul className="space-y-stack-md">
                <li className="group cursor-pointer">
                  <Link href="/blogs/typography-trust" className="block">
                    <h5 className="font-headline-sm text-[18px] text-on-background group-hover:text-primary transition-colors duration-200 mb-1 leading-tight">
                      The Typography of Trust in E-commerce
                    </h5>
                    <p className="font-caption text-caption text-outline">Oct 12 • 5 min read</p>
                  </Link>
                </li>
                <li className="group cursor-pointer pt-stack-sm border-t border-surface-container-high">
                  <Link href="/blogs/dark-mode-color" className="block">
                    <h5 className="font-headline-sm text-[18px] text-on-background group-hover:text-primary transition-colors duration-200 mb-1 leading-tight">
                      Color Theory for Dark Mode Interfaces
                    </h5>
                    <p className="font-caption text-caption text-outline">Sep 28 • 11 min read</p>
                  </Link>
                </li>
                <li className="group cursor-pointer pt-stack-sm border-t border-surface-container-high">
                  <Link href="/blogs/asymmetric-layouts" className="block">
                    <h5 className="font-headline-sm text-[18px] text-on-background group-hover:text-primary transition-colors duration-200 mb-1 leading-tight">
                      Beyond the Grid: Asymmetric Layouts
                    </h5>
                    <p className="font-caption text-caption text-outline">Sep 15 • 7 min read</p>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="mt-section-gap pt-section-gap border-t border-outline-variant">
        <h2 className="font-display-lg-mobile md:font-display-lg text-on-background mb-stack-lg text-center">
          Continue Reading
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-stack-lg max-w-4xl mx-auto">
          {/* Related Card 1 */}
          <Link 
            href="/blogs/structural-elegance" 
            className="group block border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest hover:bg-secondary-container transition-colors duration-300 text-left"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                alt="Architecture detail" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJrDVHqszk2X79jhy0fH3CPD2G8HYe4ywrfikb2Hx9hZy-XdBNknSbcnW9SYpOCS5xV6eiaZMYC9V1SQgnyma8oVF05SSkTDgfrvw-fRhng4XxhEiePj9L8Oxhi9CWkuYBfcfI4uGfWbkhrnDow41juUqVPxefNlPqYjgNydrySgi65wzYXWrFufZPGmDoYeMCjETRch9BR90pfGSZAqpHLxGZO7dbh_cbmVzQ8DpuaUNjgNcwEr3Us4IQmz_sfJt6EqQ9Tj79opk4"
              />
            </div>
            <div className="p-stack-md">
              <span className="inline-block text-primary font-label-md text-[10px] uppercase tracking-widest mb-2">Architecture</span>
              <h3 className="font-headline-md text-[22px] text-on-background mb-2 leading-tight">
                Structural Elegance in Digital Forms
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                Translating the physical principles of modern architecture into sustainable and beautiful digital frameworks.
              </p>
            </div>
          </Link>
          {/* Related Card 2 */}
          <Link 
            href="/blogs/analog-mind" 
            className="group block border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest hover:bg-secondary-container transition-colors duration-300 text-left"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                alt="Fountain pen and journal" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsOv4VMUVkvg-ZfVXmNXDGz9rN8ih9sFDuSYwCRRjKJcotCce84DiakEi5WSv-DRi558iY7LhwfyHJQOL5temMs2dIU8mAzyniXcUuxtFXalfiEYU__pPMLnDURq1LWuQ3rsCfYWEYICIg5cZX8iowzX-VAOII0OvYa50q3ggoPOTvR2rje5X59I-CpHFF--W-4l7IcUpuyrqFA61B8ushOZABKObhhrhMWRt13dp8BjwaVDCfjTC3FUzWnQ0gNOjn0nx_sSHP6R_5"
              />
            </div>
            <div className="p-stack-md">
              <span className="inline-block text-primary font-label-md text-[10px] uppercase tracking-widest mb-2">Process</span>
              <h3 className="font-headline-md text-[22px] text-on-background mb-2 leading-tight">
                The Analog Mind in a Digital Workflow
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                Why sketching on paper remains an irreplaceable step in the creation of premium user interfaces.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
