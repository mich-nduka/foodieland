import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "react-feather"
import { FOOTER_ROUTES } from "@/data"

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div aria-hidden className="h-1 bg-gradient-to-r from-burgundy via-brass to-burgundy" />
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="flex flex-wrap items-start justify-between gap-10 border-b border-white/10 pb-12">
          <div className="max-w-sm">
            <Image
              src="/images/foodieland-logo.png"
              alt="Foodieland"
              width={900}
              height={600}
              className="w-44 rounded-2xl ring-1 ring-white/10"
            />
            <p className="mt-4 leading-relaxed text-paper/70">
              Recipes worth cooking twice — written for real kitchens, everyday ingredients and ordinary weeknights.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {FOOTER_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link href={route.path} className="text-sm font-semibold tracking-[0.14em] uppercase text-paper/80 transition-colors hover:text-brass-soft">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
          <p className="text-sm text-paper/60">
            &copy;{currentYear} Foodieland. Powered by <span className="text-brass-soft">Vercel</span>
          </p>
          <div className="flex items-center gap-5">
            {[
              { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
              { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
              { href: "https://x.com", Icon: Twitter, label: "X" },
            ].map(({ href, Icon, label }) => (
              <Link key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-paper/70 transition-transform hover:-translate-y-0.5 hover:text-brass-soft">
                <Icon className="size-[18px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
