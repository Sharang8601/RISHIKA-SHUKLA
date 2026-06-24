"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

// Mock data reflecting the articles in the Stitch design
const ALL_ARTICLES = [
  {
    id: "featured",
    title: "The Evolution of Minimalist Interfaces in Modern Web Apps",
    excerpt: "Exploring how negative space, deliberate typography choices, and subtle micro-interactions are replacing cluttered dashboards. We dive into the psychological benefits of reducing cognitive load for end users.",
    category: "Design",
    date: "Oct 12, 2024",
    readTime: "8 min read",
    isFeatured: true,
    slug: "minimalist-interfaces",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUNuUM_m_PsXBYOYq16CqlMy5QI9KEx22D-y3tn4LuuGW2LEdnKMhdxLD3xtRIZPf9qo8_GVXnDLSG2ig6b4WpbD8chRMlXLC8r-_O963cV0rrjVbQmdZErMPrSJ-hpQHvXHwqH2FrQEwWoYU7kAGloMuKQs7G9unI_wsY8AMnN47xV1zAcdj-E02U02xhpjr4B1HjreEOAxqkJzKViclYPe2LStVM5xUkJrnPWLfSBzfYFnvADSBPvaTiX6ux8uKIddy5cQCv6FMj",
  },
  {
    id: "std-1",
    title: "Building Resilient Frontend Architectures",
    excerpt: "Strategies for handling state and side effects in complex single-page applications.",
    category: "Technology",
    date: "Oct 08, 2024",
    readTime: "6 min read",
    slug: "frontend-architectures",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5RrAzK1KdyVzCGMCOn-L0oqMuzV7opjnf3U7ZhvVjbHdC1slbOC8o6E6cXOuK9eTLmbA5LLHwlHb0MIPVHe64rnPeUCDXHNYnAqMPW5k24n46ytz76vHxb292XQEh_m3Z0Cg5eAT2TYqRs2zUip8FF9mGLvTmXgvxoQaaVS60-r1ZioSRT3toOZUgAHH4b6YwcOPGZRWuAhN3Qyp3qyFoNMaGD5VApc5DWLmJEQvFEnjkdTvsSPlnnCodo5Ys1C0rur3Twfno-A8J",
  },
  {
    id: "std-2",
    title: "Curating a Mindful Travel Experience",
    excerpt: "How to slow down and document your journeys without experiencing screen fatigue.",
    category: "Lifestyle",
    date: "Sep 28, 2024",
    readTime: "5 min read",
    slug: "mindful-travel",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_-2IKyHSs6Run1b7_PvNnZUGdGcaki_9cMGl7PVSeex7b8NFgtjKmS2JY58eSFldFCi60VL9zLyBIgcSTJAWnNeeW87vE47gheDuPZ7O2_9TO9EyfimtMm46zu9nyNPjSnAvxfUpFeiKsThXhxpI53hzATDIyCmQ4yxVxCFbFK-zDThPRvYJhkr_dvlTKHQqdV8XCKqLJ4j9XiTs-Fb5DaKKr0LrsJkA9_d46d1wXFEi64kUuRw54zo5f_0f5HVMe6Lr0MzuMKnzG",
  },
  {
    id: "quote-card",
    title: "\"Design is not just what it looks like and feels like. Design is how it works.\"",
    author: "Steve Jobs",
    category: "Thoughts",
    date: "Sep 20, 2024",
    slug: "design-philosophy",
    isQuote: true,
  },
  {
    id: "std-4",
    title: "Grid Systems in Architectural UI",
    excerpt: "Borrowing principles from physical architecture to create stable digital layouts.",
    category: "Design",
    date: "Sep 15, 2024",
    readTime: "7 min read",
    slug: "grid-systems",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsLl6SxePk9J1JZUoFQTLXHdLg2acVrsgTEMWqpkq2irZtHnMsDUO4NfHEgsUF1yj8OPmCzbgnmTehnT5h9JuF0xbsCKFGME-ZmPdBQDE1MUgaKWyR3rEEx_Ckk7kkQdzu6a1j32eoMaFE-2dR1HPJHKrvIBgntIgw84Uole0L6RrmoUfdqVnENfstWYKie82G9o4sDSW2pKnyWPCdjPBgK7ySvn6Ix2cAXncCW_I_hQghon1_mk1TZdf9pVffD9PFnuAf4vzPl_ta",
  },
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const categories = ["All", "Design", "Technology", "Lifestyle"];

  const filteredArticles = useMemo(() => {
    return ALL_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.excerpt &&
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-section-gap">
      {/* Header & Search/Filter Section */}
      <section className="mb-section-gap flex flex-col items-center text-center">
        <h1 className="font-display-lg text-display-lg mb-stack-md">The Archive</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
          Explore a curated collection of essays, tutorials, and insights on design, technology, and lifestyle.
        </p>

        <div className="w-full max-w-3xl bg-surface-container-lowest p-stack-md rounded-xl border border-surface-container-high shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row gap-stack-md items-center">
          <div className="relative flex-grow w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary font-body-md text-body-md text-on-surface placeholder:text-outline transition-all outline-none"
              placeholder="Search articles..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-stack-sm w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary-fixed text-on-primary-fixed border-transparent"
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high border-outline-variant"
                }`}
              >
                {cat === "All" ? "All Topics" : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full max-w-3xl flex justify-between items-center mt-stack-md px-2">
          <span className="font-label-md text-label-md text-on-surface-variant">
            Showing {filteredArticles.length} articles
          </span>
          <div className="flex items-center gap-2">
            <span className="font-label-md text-label-md text-on-surface-variant">Sort by:</span>
            <select
              className="bg-transparent border-none font-label-md text-label-md text-primary focus:ring-0 cursor-pointer p-0 pr-6 outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
            </select>
          </div>
        </div>
      </section>

      {/* Bento Grid Articles */}
      {filteredArticles.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
          {filteredArticles.map((article) => {
            if (article.isFeatured) {
              return (
                <article
                  key={article.id}
                  className="md:col-span-8 group cursor-pointer border border-surface-container-high rounded-xl overflow-hidden bg-surface-container-lowest hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col text-left"
                >
                  <Link href={`/blogs/${article.slug}`} className="block w-full h-80 overflow-hidden bg-surface-container-low relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      alt={article.title}
                      src={article.imgUrl}
                    />
                    <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-md text-label-md text-[10px] uppercase tracking-wider font-bold">
                      Featured
                    </div>
                  </Link>
                  <div className="p-stack-lg flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-stack-sm mb-stack-sm">
                        <span className="font-label-md text-label-md text-primary-container">{article.category}</span>
                        <span className="text-outline-variant text-xs">•</span>
                        <span className="font-caption text-caption text-on-surface-variant">{article.date}</span>
                      </div>
                      <h2 className="font-headline-md text-headline-md mb-stack-sm group-hover:text-primary transition-colors">
                        <Link href={`/blogs/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-stack-md">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-stack-sm mt-auto">
                      <Link href={`/blogs/${article.slug}`} className="font-label-md text-label-md font-semibold text-primary flex items-center group-hover:translate-x-1 transition-transform">
                        Read Article <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            if (article.isQuote) {
              return (
                <article
                  key={article.id}
                  className="md:col-span-4 group cursor-pointer border border-surface-container-high rounded-xl overflow-hidden bg-primary-fixed-dim text-on-primary-fixed hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col text-left"
                >
                  <div className="p-stack-lg flex-grow flex flex-col justify-center h-full min-h-[300px]">
                    <div className="flex items-center gap-stack-sm mb-stack-sm">
                      <span className="font-label-md text-label-md font-semibold text-primary">{article.category}</span>
                      <span className="text-primary/50 text-xs">•</span>
                      <span className="font-caption text-caption text-on-primary-fixed/80">{article.date}</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-stack-sm leading-tight italic">
                      {article.title}
                    </h3>
                    <p className="font-body-md text-body-md mt-4 text-on-primary-fixed/80">— {article.author}</p>
                    <Link href={`/blogs/${article.slug}`} className="mt-stack-lg font-label-md text-label-md flex items-center group-hover:translate-x-1 transition-transform font-semibold text-primary">
                      Read Essay <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={article.id}
                className="md:col-span-4 group cursor-pointer border border-surface-container-high rounded-xl overflow-hidden bg-surface-container-lowest hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col text-left"
              >
                <Link href={`/blogs/${article.slug}`} className="block w-full h-48 overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    alt={article.title}
                    src={article.imgUrl}
                  />
                </Link>
                <div className="p-stack-md flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-stack-sm mb-stack-sm">
                      <span className="font-label-md text-label-md text-primary-container">{article.category}</span>
                      <span className="text-outline-variant text-xs">•</span>
                      <span className="font-caption text-caption text-on-surface-variant">{article.date}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm mb-stack-sm group-hover:text-primary transition-colors leading-tight">
                      <Link href={`/blogs/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-stack-md">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        <div className="text-center py-12 text-on-surface-variant">
          <span className="material-symbols-outlined text-4xl mb-2">sentiment_dissatisfied</span>
          <p className="font-body-lg text-body-lg">No articles found matching your criteria.</p>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-stack-sm mt-section-gap">
        <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-50" disabled>
          <span className="material-symbols-outlined text-sm">arrow_back</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md">1</button>
        <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-md text-label-md">2</button>
        <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-md text-label-md">3</button>
        <span className="text-outline-variant px-2">...</span>
        <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label-md text-label-md">8</button>
        <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </main>
  );
}
