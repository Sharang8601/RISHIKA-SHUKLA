"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-md">
            Get in Touch
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Whether you have a question, a project in mind, or just want to say hello, I'd love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-start">
          
          {/* Contact Info Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-stack-lg">
            <div className="bg-surface-container-low p-stack-lg rounded-xl border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
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

            <div className="bg-surface-container-low p-stack-lg rounded-xl border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
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
            <div className="hidden md:block rounded-xl overflow-hidden h-48 border border-outline-variant">
              <img 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" 
                alt="Serene workspace setup" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjnUWCnm5fygqxFSVjGFEwAxE5hn6kXIsm178lb90eLfAAXMYPVwEKHM_T2jxDC-ZdeqpauzWFbpdkPkfhwtd9LaZc1QzE9rl2SC8QqFSAcGWSEN3AOIWAE5k-_Me5eD41ijGVvdCJeQ6RbNUO5c4k9fy5whmqDEA2If99ooH4C81zI7Q0sRwso0cKOYphk_E9b_nPX6f9l5cE5xq065i4JVHQuwN4L17x66sQzur2lXKwYvg0S6_9_8g0A6zKh3PAGJD9aNpApOmL"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-8 bg-surface p-stack-lg md:p-12 rounded-xl border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden">
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
                <div className="flex flex-col gap-stack-sm">
                  <label className="font-label-md text-label-md text-on-background uppercase tracking-wider" htmlFor="name">Name</label>
                  <input 
                    className="bg-transparent border-0 border-b border-outline-variant px-0 py-2 focus:ring-0 focus:border-primary font-body-md text-body-md text-on-background transition-colors placeholder:text-on-surface-variant/50 outline-none" 
                    id="name" 
                    name="name" 
                    placeholder="Jane Doe" 
                    required 
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-stack-sm">
                  <label className="font-label-md text-label-md text-on-background uppercase tracking-wider" htmlFor="email">Email</label>
                  <input 
                    className="bg-transparent border-0 border-b border-outline-variant px-0 py-2 focus:ring-0 focus:border-primary font-body-md text-body-md text-on-background transition-colors placeholder:text-on-surface-variant/50 outline-none" 
                    id="email" 
                    name="email" 
                    placeholder="jane@example.com" 
                    required 
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-stack-sm">
                  <label className="font-label-md text-label-md text-on-background uppercase tracking-wider" htmlFor="message">Message</label>
                  <textarea 
                    className="bg-transparent border-0 border-b border-outline-variant px-0 py-2 focus:ring-0 focus:border-primary font-body-md text-body-md text-on-background transition-colors resize-none placeholder:text-on-surface-variant/50 outline-none" 
                    id="message" 
                    name="message" 
                    placeholder="How can I help you?" 
                    required 
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>
                <button 
                  className="self-start mt-stack-sm bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50" 
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
