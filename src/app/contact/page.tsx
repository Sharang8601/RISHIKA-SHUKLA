"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // 1. Header Reveals
    const tl = gsap.timeline();

    tl.fromTo(
      ".contact-header-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 }
    );

    tl.fromTo(
      ".contact-header-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // 2. Sidebar cards reveal
    tl.fromTo(
      ".contact-sidebar-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15 },
      "-=0.7"
    );

    // 3. Form container reveal
    tl.fromTo(
      ".contact-form-container",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    );

    // 4. Staggered input label reveals and border lines drawing
    tl.fromTo(
      ".contact-input-group label",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 },
      "-=0.6"
    );

    tl.fromTo(
      ".contact-base-line",
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: "power2.out", stagger: 0.15 },
      "-=0.5"
    );

    tl.fromTo(
      ".contact-submit-btn",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );
  }, [submitted]); // Re-run when submitted state changes back to form

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <main className="flex-grow w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-section-gap text-left">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-section-gap">
          <h1 className="contact-header-title font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-md">
            Get in Touch
          </h1>
          <p className="contact-header-desc font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Whether you have a question, a project in mind, or just want to say hello, I'd love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-start">
          
          {/* Contact Info Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-stack-lg">
            <div className="contact-sidebar-card bg-surface-container-low p-stack-lg rounded-xl border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-stack-md">Direct Contact</h3>
              <div className="flex items-center gap-stack-sm mb-stack-sm flex-wrap">
                <span className="material-symbols-outlined text-primary">mail</span>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors break-all" href="mailto:hello@rishikashukla.com">
                  hello@rishikashukla.com
                </a>
              </div>
              <div className="flex items-center gap-stack-sm">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="font-body-md text-body-md text-on-surface-variant">San Francisco, CA</span>
              </div>
            </div>

            <div className="contact-sidebar-card bg-surface-container-low p-stack-lg rounded-xl border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-stack-md">Socials</h3>
              <div className="flex flex-col gap-stack-sm">
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-sm">link</span> Instagram
                </a>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-sm">link</span> Pinterest
                </a>
                <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-sm">link</span> LinkedIn
                </a>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="contact-sidebar-card hidden md:block rounded-xl overflow-hidden h-48 border border-outline-variant">
              <img 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" 
                alt="Serene workspace setup" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjnUWCnm5fygqxFSVjGFEwAxE5hn6kXIsm178lb90eLfAAXMYPVwEKHM_T2jxDC-ZdeqpauzWFbpdkPkfhwtd9LaZc1QzE9rl2SC8QqFSAcGWSEN3AOIWAE5k-_Me5eD41ijGVvdCJeQ6RbNUO5c4k9fy5whmqDEA2If99ooH4C81zI7Q0sRwso0cKOYphk_E9b_nPX6f9l5cE5xq065i4JVHQuwN4L17x66sQzur2lXKwYvg0S6_9_8g0A6zKh3PAGJD9aNpApOmL"
              />
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="contact-form-container md:col-span-8 bg-surface p-stack-lg md:p-12 rounded-xl border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container opacity-5 rounded-full blur-3xl"></div>
            
            {submitted ? (
              <div className="relative z-10 flex flex-col items-center justify-center text-center py-12 space-y-4">
                <span className="material-symbols-outlined text-5xl text-primary animate-bounce">check_circle</span>
                <h3 className="font-headline-sm text-headline-sm text-on-background">Message Sent Successfully!</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                  Thank you for reaching out. I appreciate you taking the time to write, and I will get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-stack-lg relative z-10">
                <div className="flex flex-col gap-stack-sm relative contact-input-group">
                  <label className="font-label-md text-label-md text-on-background uppercase tracking-wider" htmlFor="name">Name</label>
                  <input 
                    className="peer bg-transparent border-0 px-0 py-2 focus:ring-0 font-body-md text-body-md text-on-background placeholder:text-on-surface-variant/50 outline-none w-full" 
                    id="name" 
                    name="name" 
                    placeholder="Jane Doe" 
                    required 
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                  {/* Base Line (draws on load) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-outline-variant origin-left scale-x-0 contact-base-line"></div>
                  {/* Focus Line (active on focus) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left scale-x-0 transition-transform duration-300 peer-focus:scale-x-100"></div>
                </div>

                <div className="flex flex-col gap-stack-sm relative contact-input-group">
                  <label className="font-label-md text-label-md text-on-background uppercase tracking-wider" htmlFor="email">Email</label>
                  <input 
                    className="peer bg-transparent border-0 px-0 py-2 focus:ring-0 font-body-md text-body-md text-on-background placeholder:text-on-surface-variant/50 outline-none w-full" 
                    id="email" 
                    name="email" 
                    placeholder="jane@example.com" 
                    required 
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                  {/* Base Line (draws on load) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-outline-variant origin-left scale-x-0 contact-base-line"></div>
                  {/* Focus Line (active on focus) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left scale-x-0 transition-transform duration-300 peer-focus:scale-x-100"></div>
                </div>

                <div className="flex flex-col gap-stack-sm relative contact-input-group">
                  <label className="font-label-md text-label-md text-on-background uppercase tracking-wider" htmlFor="message">Message</label>
                  <textarea 
                    className="peer bg-transparent border-0 px-0 py-2 focus:ring-0 font-body-md text-body-md text-on-background resize-none placeholder:text-on-surface-variant/50 outline-none w-full" 
                    id="message" 
                    name="message" 
                    placeholder="How can I help you?" 
                    required 
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                  {/* Base Line (draws on load) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-outline-variant origin-left scale-x-0 contact-base-line"></div>
                  {/* Focus Line (active on focus) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left scale-x-0 transition-transform duration-300 peer-focus:scale-x-100"></div>
                </div>

                <button 
                  className="contact-submit-btn self-start mt-stack-sm bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
