"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Facebook, Instagram, Twitter } from "react-feather"
import type { Route } from "@/types"
import { cn } from "@/lib/utils"

const Header = ({ links }: { links: Route[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div aria-hidden className="h-0.5 bg-gradient-to-r from-transparent via-brass to-transparent" />
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4 md:px-10" aria-label="Site">
        <Link
          href="/"
          className="overflow-hidden rounded-xl border border-line shadow-sm transition-shadow hover:shadow-md"
          onClick={close}
          aria-label="Foodieland — home"
        >
          <Image
            src="/images/foodieland-logo.png"
            alt="Foodieland"
            width={900}
            height={600}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <div id="site-nav" className={cn("w-full md:flex md:w-auto md:items-center md:gap-10", isOpen ? "block" : "hidden")}>
          <ul className="flex flex-col gap-1 py-4 md:flex-row md:items-center md:gap-8 md:py-0">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={close}
                  className="block py-2 text-[13px] font-semibold tracking-[0.14em] text-ink-soft uppercase transition-colors hover:text-burgundy md:py-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 border-t border-line pt-4 md:border-0 md:pt-0">
            {[
              { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
              { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
              { href: "https://x.com", Icon: Twitter, label: "X" },
            ].map(({ href, Icon, label }) => (
              <Link key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} onClick={close} className="text-ink transition-transform hover:-translate-y-0.5 hover:text-burgundy">
                <Icon className="size-[18px]" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
