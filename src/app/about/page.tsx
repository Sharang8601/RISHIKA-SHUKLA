import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-grow w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-section-gap space-y-section-gap text-left">
      {/* Hero Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-6 space-y-stack-lg pr-0 md:pr-12">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            The Story Behind the Words.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            I’m Rishika, a writer, curator, and digital minimalist. This space is a reflection of my journey through literature, aesthetics, and the quiet moments in between. I believe in the power of narrative to connect us and the beauty of simplicity to ground us.
          </p>
          <div className="flex gap-stack-md pt-stack-sm flex-wrap">
            <span className="font-label-md text-label-md bg-surface-container-high px-3 py-1 rounded-full text-primary font-medium">Writer</span>
            <span className="font-label-md text-label-md bg-surface-container-high px-3 py-1 rounded-full text-primary font-medium">Curator</span>
            <span className="font-label-md text-label-md bg-surface-container-high px-3 py-1 rounded-full text-primary font-medium">Observer</span>
          </div>
          <div className="pt-4">
            <Link 
              href="/about/journey" 
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:bg-primary-container transition-all duration-300 shadow-sm"
            >
              Explore Milestones
              <span className="material-symbols-outlined text-sm">timeline</span>
            </Link>
          </div>
        </div>
        <div className="md:col-span-6 mt-12 md:mt-0">
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low shadow-sm border border-outline-variant/30 relative">
            <img 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
              alt="Rishika reading" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxkwsB3jPfod0RBxZe3mO-xzIfU2lbm44YNNFlel4pMe6xSwMizWcLSxnECieotQxpZxOr3JAmOsO81x9GK3Jj9xYmjRxesuG17iC_aEhYclPJOiSqb-kExzCO0NrPBtcAQjVVSUfmgXfQRhnItW74Kj_gRNEykh1hOTXdM_nTIPT6zuLGu65ewM3VUAV3r0cn0i-dl4W_VbrZBEBVm15H6ngxpaLHoloXvtIZECLtHl13gMgDMGBbTgwg2jX2an6xaKzXDJ9ndTWj"
            />
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="space-y-stack-lg max-w-3xl mx-auto border-t border-outline-variant pt-section-gap">
        <h2 className="font-headline-md text-headline-md text-on-surface text-center">My Journey</h2>
        
        <div className="space-y-stack-md relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant before:to-transparent">
          {/* Milestone 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant bg-surface-container-lowest text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <span className="material-symbols-outlined text-sm">edit</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="font-label-md text-label-md text-primary mb-1">2023 - Present</div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">The Digital Boutique</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Curating essays on modern minimalism, literary critiques, and visual aesthetics, reaching an audience of thoughtful readers.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant bg-surface-container-lowest text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <span className="material-symbols-outlined text-sm">menu_book</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="font-label-md text-label-md text-primary mb-1">2020 - 2022</div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Literary Explorations</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Deep dive into classic literature and contemporary fiction, forming the foundation of my editorial voice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
