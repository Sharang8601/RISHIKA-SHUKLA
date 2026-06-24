"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Reading Progress Indicator */}
      <div className="reading-progress-container">
        <div 
          className="reading-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header Container */}
      <header className="bg-background text-primary font-headline-md text-headline-md font-body-md text-body-md font-label-md text-label-md w-full top-0 sticky border-b border-outline-variant flat no shadows z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-20">
          <Link 
            className="font-headline-sm text-headline-sm font-semibold text-primary hover:opacity-80 transition-opacity duration-300" 
            href="/"
          >
            Rishika Shukla
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-stack-lg items-center">
            {navLinks.map((link) => {
              const isActive = 
                link.href === "/" 
                  ? pathname === "/" 
                  : pathname.startsWith(link.href);
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-label-md text-label-md pb-1 transition-all duration-300 hover:opacity-80 ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-stack-md">
            <button 
              aria-label="Search"
              className="text-on-surface-variant hover:text-primary transition-colors material-symbols-outlined p-2 rounded-full hover:bg-surface-container-low"
            >
              search
            </button>
            <button className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity">
              Subscribe
            </button>
            {/* Mobile Menu Toggle */}
            <button 
              aria-label="Toggle Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-on-surface-variant material-symbols-outlined p-2"
            >
              {isMobileMenuOpen ? "close" : "menu"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-outline-variant bg-background w-full py-4 px-margin-mobile absolute top-20 left-0 shadow-md flex flex-col gap-4 z-40">
            {navLinks.map((link) => {
              const isActive = 
                link.href === "/" 
                  ? pathname === "/" 
                  : pathname.startsWith(link.href);
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-label-md text-label-md py-2 border-b border-outline-variant/30 ${
                    isActive ? "text-primary font-bold" : "text-on-surface-variant"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button className="bg-primary text-on-primary w-full py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity mt-2">
              Subscribe
            </button>
          </div>
        )}
      </header>
    </>
  );
}
