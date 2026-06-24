import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-section-gap grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center min-h-[819px]">
        <div className="flex flex-col gap-stack-md">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background">
            Hi, I'm Rishika 👋<br />
            <span className="text-primary">Writer, Dreamer &amp; Storyteller.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mt-stack-sm">
            Exploring life through words, capturing moments of clarity in a chaotic world. Join me on a journey of self-discovery, mindful living, and creative expression.
          </p>
          <div className="flex gap-stack-md mt-stack-md">
            <Link 
              className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm text-center" 
              href="/blogs"
            >
              Read Blogs
            </Link>
            <Link 
              className="border border-outline px-8 py-3 rounded-full font-label-md text-label-md text-on-background hover:bg-surface-container-low transition-colors text-center" 
              href="/about"
            >
              About Me
            </Link>
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)] group">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Portrait of Rishika Shukla" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtkGkBm68KZRbVQ7aAZ1wguyxHD8rWNkbnQN3vTn5eZc2fhV-YvcwzjnKxdoz_0RhCbViiLdm6CGfSUha55_dECJN4pRLFnPLcnt2xAla7IJ3osv3UcAWtmSzZq2FsdXo2c7pFb6nm77zKlNfNixYlU3CPSWVHP8m0vpqxIGsZZQ5vWTTO6pb436Q1-zY0inGjNijUrYkWQDVKR_0k79YhFjk25U-bWxwMj4mqy9BH1VF7ZsFTmBzlbXjKsEp6Nd0GvW0-xSNXeaCb"
          />
        </div>
      </section>

      {/* Featured Blog */}
      <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-gutter">
        <div className="max-w-container-max mx-auto">
          <div className="flex items-center gap-stack-sm mb-stack-lg">
            <span className="h-[1px] w-12 bg-primary"></span>
            <h2 className="font-headline-sm text-headline-sm text-on-background uppercase tracking-widest text-xs">Featured</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)] group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <div className="md:col-span-7 h-full overflow-hidden">
              <img 
                className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105" 
                alt="Serene cityscape" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVAZ-g_NIU0CVBYSlYXBksdJEetYHcQRChHakAifN56WHlGjk0McG3m57HHvb6oPWK5Y9iqs4y79RFWM7GqcT0b-ojbgARNRkI69cLbhgxZTRXMiY4laghxofvavj4fSaShKNHygCbbyG2pvZjTEtMarpry_uPAaC4Isr74a0KlrVoK9kZ96oF7zprVWQB6VUiIArcX79JpEQAyKEkiBDTWBqX-MuE_7p4fMbLcgFrNz6lBLpG4m18-ARsiFHbTqCVXc3nDdsTY1mH"
              />
            </div>
            <div className="md:col-span-5 p-stack-lg flex flex-col gap-stack-md">
              <div className="flex items-center gap-stack-sm text-on-surface-variant font-caption text-caption uppercase tracking-wider flex-wrap">
                <span className="bg-surface-container py-1 px-3 rounded-full text-primary font-medium">Travel &amp; Lifestyle</span>
                <span>•</span>
                <span>Oct 24, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background group-hover:text-primary transition-colors">
                <Link href="/blogs/finding-stillness">
                  The Art of Finding Stillness in a Bustling City
                </Link>
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                In the constant rush of urban life, learning to pause is a radical act. Here are my thoughts on carving out quiet moments amidst the noise, and how it transforms our daily experience.
              </p>
              <Link 
                className="inline-flex items-center gap-2 text-primary font-label-md text-label-md mt-stack-md group/link w-fit" 
                href="/blogs/finding-stillness"
              >
                Read Article 
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap">
        <h2 className="font-headline-md text-headline-md text-center mb-stack-lg">Explore Topics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-md">
          {/* Category 1 */}
          <Link className="group relative aspect-square rounded-lg overflow-hidden border border-surface-variant shadow-sm hover:shadow-md transition-shadow" href="/blogs?category=Lifestyle">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9meCxlAvECOdTsEK7fTJ7eJlvkFBKC63YIomFJA23J_sWwDxMb78GBmtQI-4D-IbyiBI4ExGcJFJ0lOiseyI0P-Bosw1ff-71U6DwUkL3iDQAcLzMm0jic2babanwvrU_oD7yyR1ZNdxygizLMtAGup0GhOZI8Xl3RSLLG1xtavniQt7MfKM7y-A6IEIjhAaAom6GE9ujdJW-ySYTDQP-NhrsH0SxyAyA4b0Qeg3WEuqBWd6kkfIXWDKRtfLgXme6uB391B-nniRX')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-stack-md w-full">
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Lifestyle</h3>
              <p className="font-caption text-caption text-surface-variant mt-1">24 Articles</p>
            </div>
          </Link>
          {/* Category 2 */}
          <Link className="group relative aspect-square rounded-lg overflow-hidden border border-surface-variant shadow-sm hover:shadow-md transition-shadow" href="/blogs?category=Travel">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDX6c1WvGvlctrLtiQnC0tYPTBS17SZqlFr-JfzE9WS6-dJ7yC-Rj__0KWIUmhxS-X45tjI5Bdu1AYx5Pf1rcbvLGyujlIi7saXxLfIWZwI9qIXOWOZohoJe7hOWmO10S2GnOijoctC_CE0v4F77ADYd6bme4l958cHAS5_MdxTg8hYn_WKSJVjr84ci0FQmGdHhw_Pkac8eBYCUfQqW4EncQQYjgZ772RJGvO9As_TneUcMJuSo6_1zxO0ya809h4gxJZ0knKEvf1c')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-stack-md w-full">
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Travel</h3>
              <p className="font-caption text-caption text-surface-variant mt-1">18 Articles</p>
            </div>
          </Link>
          {/* Category 3 */}
          <Link className="group relative aspect-square rounded-lg overflow-hidden border border-surface-variant shadow-sm hover:shadow-md transition-shadow" href="/blogs?category=Books">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAv9idSdsUiVejH4FQh7D4QmF5_0P9NAwdS9Ea2B3W2ZKC3ilCqJKV4EL-tqsAXRNuAWK7TLJcDgp8qq2J2w11QcclWPwyJrqIFHikolmn8_tEsHS7elBZf6GFlJpr9zf9My-mIGLskyu1eHKvaRYY0QbyqBesN_z4kAUJLVGaAlHkVtCYlaNffOMwsejTbfC_Ku3bVCcqqrBy2Ed0BOdJQlyK--XloetiL4H7kXxXYpaKMf6_VPAheiAnOb-7mxtM_BLOz2cJILt92')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-stack-md w-full">
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Books</h3>
              <p className="font-caption text-caption text-surface-variant mt-1">32 Articles</p>
            </div>
          </Link>
          {/* Category 4 */}
          <Link className="group relative aspect-square rounded-lg overflow-hidden border border-surface-variant shadow-sm hover:shadow-md transition-shadow" href="/blogs?category=Self-Growth">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCReV4mwws8vQnN_jSEUYEPUvUg6AQyVS61-K3aCx-i4YX8baTfaf0uH2zMiMhs8hfVRzE9zxKkYUB23uCEKjmjYqjR39qwU0mW1ZVzEsno6-6Loi12jXo4lPXH7qz_CEIo2kygcdQlQf0ar1A5gwmk4OwuB1xNJlmoNbG-h42XfzPdbr6q2modIrt-ARqPXdCLfetQyKsKNPc1nzgdHDhpUbNmez47eINHkSr2hhT6qm3gRzfdSP178d36fhwusMnROOT_yyskwWiP')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-stack-md w-full">
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Self Growth</h3>
              <p className="font-caption text-caption text-surface-variant mt-1">15 Articles</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap" id="blogs">
        <div className="flex justify-between items-end mb-stack-lg border-b border-surface-variant pb-stack-md">
          <h2 className="font-headline-md text-headline-md">Latest Writings</h2>
          <Link className="text-primary hover:text-primary-container font-label-md text-label-md transition-colors" href="/blogs">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          {/* Article 1 */}
          <Link href="/blogs/minimalist-home" className="group flex flex-col gap-stack-sm cursor-pointer text-left">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-surface-variant mb-2">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Minimalist home space" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE2wMsjWnSiB0mPtx45Xw4oZN_gShu5X-g_HkFx9GCzugOCAr9NgM9hl-6e5j9R5pNPT_tpaFCNAFkoxMN6kaFdqmeui3fBkjYvA1S70_obKGkloibEpUT7ao5em2FB5aEno09L2SKCeag_snVDPS5iCKoTNxf3Zh05VhJ2K_XOg7ThHe7vh3HYTo3WF8vb_MdjQh3W2rX9HXmlkYTnVogNd25dCeVqFNqo2cotnKSx_v4XmUS33vFF0tcIb5n7UHXdkDBg21GABvS"
              />
            </div>
            <div className="flex items-center gap-stack-sm text-on-surface-variant font-caption text-caption uppercase tracking-wider">
              <span className="text-primary font-medium">Lifestyle</span>
              <span>•</span>
              <span>Oct 18, 2024</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-background group-hover:text-primary transition-colors leading-tight">
              Curating a Minimalist Home Space
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-1">
              Simple principles for creating an environment that fosters peace and creativity.
            </p>
          </Link>
          {/* Article 2 */}
          <Link href="/blogs/old-town-corners" className="group flex flex-col gap-stack-sm cursor-pointer text-left">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-surface-variant mb-2">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Old town streets" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFSF-uIcX4CghyCM-Dw2ukF72i8IKoCRSBA7sX7l0ffExu8IdCcU7mKdBANUkMZuepb50Cb-kJJctFWglD_rEfmd24vrj2hjzHDwtygsKYI0lKfkjClHwmEm3j9GvDH_H91chdeGGuC8vceccgdcFuyZJllPLmDmgRpOPJo2q0xbsmuecqAdmBMrIVCqRBFdnUH5y3bWdnHA-4ikSxQSoQqdEB1cocJ4ZgdGxgSjDOiLDSYUUUJE1OJeqYsRM-yMmqz1IvhevmFG7Y"
              />
            </div>
            <div className="flex items-center gap-stack-sm text-on-surface-variant font-caption text-caption uppercase tracking-wider">
              <span className="text-primary font-medium">Travel</span>
              <span>•</span>
              <span>Oct 12, 2024</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-background group-hover:text-primary transition-colors leading-tight">
              Hidden Corners of Old Town
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-1">
              Wandering through forgotten streets and discovering the magic in everyday architecture.
            </p>
          </Link>
          {/* Article 3 */}
          <Link href="/blogs/daily-journaling" className="group flex flex-col gap-stack-sm cursor-pointer text-left">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-surface-variant mb-2">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Journal on table" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgVolQeQcI5NEkGMdi98VXBv9rz6mErtAvB1mhzZdq3F40dG_lXo-A8DN4ptTULtr96JcWefgH42rsM7JkaWjPxuyE2z_JO9uGRiOewezMWJmXywPNoorFbkI6t4BTpPiG54ZdE1mjx1SoMPpvSw6AHOFW15Bw2eY3_5DuNWTCqFPiMjo15K8XEFxT6Xrg2utQHmhTprAQSqkyp6BUwaE789dbK1v-NHG-DmedF5R8MUISbaQTrytS1ObQZVBBpP5Th3HTt6pz3IQB"
              />
            </div>
            <div className="flex items-center gap-stack-sm text-on-surface-variant font-caption text-caption uppercase tracking-wider">
              <span className="text-primary font-medium">Self Growth</span>
              <span>•</span>
              <span>Oct 05, 2024</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-background group-hover:text-primary transition-colors leading-tight">
              The Practice of Daily Journaling
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-1">
              How putting pen to paper can clarify your thoughts and ground your daily intentions.
            </p>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-surface-container py-section-gap px-margin-mobile md:px-gutter" id="about">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div className="order-2 md:order-1 flex flex-col gap-stack-md">
            <h2 className="font-headline-md text-headline-md text-on-background">Behind the Words</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              I believe that every experience, no matter how small, holds a story worth telling. My writing is an attempt to capture the ephemeral beauty of everyday life, blending personal reflection with a broader curiosity about the world.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              When I'm not writing, you can find me exploring local coffee shops, getting lost in a good book, or planning my next quiet getaway.
            </p>
            <Link 
              className="mt-stack-sm border-b-2 border-primary text-primary font-label-md text-label-md w-fit pb-1 hover:text-primary-container hover:border-primary-container transition-colors" 
              href="/about"
            >
              Read Full Story
            </Link>
          </div>
          <div className="order-1 md:order-2 relative aspect-[3/4] md:aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-4 border border-primary rounded-xl translate-x-4 translate-y-4"></div>
            <img 
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-sm z-10" 
              alt="Rishika holding tea" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu1jMXqNR9J5WQWfXCUicLnQt4lvWpF-GrbPWZVDhfwE9uQ8OY6PWQSvk7NrDiW56uBIdtU7JoIII0ee0T321GPUl7BZtFZ7P1BGcTnbhMIT2340M6wWUVaeoprmtdNWUAei2_DoaH0_YESLIeuYVGD_I6lO2_ZvpAKrTlf7iGwcME10-dK3deznOFb4Sdfjo-UklDjQSg-ufghzMZbsoF2Bo_SXsgoLd0EtJ8tU6CVBUm2P4hvu6xBVbTw9_NlElrqJfEqCYIu7ov"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap">
        <div className="bg-surface-container-low rounded-2xl p-stack-lg md:p-section-gap text-center border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="max-w-2xl mx-auto flex flex-col gap-stack-md items-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-2">mail</span>
            <h2 className="font-headline-md text-headline-md text-on-background">Letters from Rishika</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Join my inner circle. Get monthly reflections, reading recommendations, and exclusive stories delivered straight to your inbox.
            </p>
            <form className="w-full max-w-md mt-stack-md flex flex-col sm:flex-row gap-stack-sm">
              <input 
                className="flex-1 px-4 py-3 rounded-full border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow font-body-md text-body-md" 
                placeholder="Your email address" 
                type="email" 
                required
              />
              <button 
                className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors whitespace-nowrap shadow-sm cursor-pointer" 
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <p className="font-caption text-caption text-outline mt-2">No spam, ever. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </>
  );
}
