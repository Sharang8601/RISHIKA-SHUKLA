import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-primary font-headline-sm text-headline-sm font-body-md text-body-md font-label-md text-label-md w-full bg-surface-container-low flat no shadows mt-section-gap border-t border-surface-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-section-gap">
        <div className="col-span-1 md:col-span-2">
          <Link className="font-headline-sm text-headline-sm text-primary block mb-stack-sm" href="/">
            Rishika Shukla
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Exploring life through words. A digital space dedicated to thoughtful living, travel, and the beauty of the everyday.
          </p>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-background mb-stack-sm font-semibold uppercase tracking-wider">Links</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-300" href="/sitemap">
                Sitemap
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-300" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-background mb-stack-sm font-semibold uppercase tracking-wider">Social</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-300" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-300" href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                Pinterest
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-300" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-surface-variant py-stack-md text-center">
        <p className="font-caption text-caption text-on-surface-variant">© 2024 Rishika Shukla. All rights reserved.</p>
      </div>
    </footer>
  );
}
