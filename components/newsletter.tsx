"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SectionHeading, SectionText } from "@/components/typography"

export function Newsletter({
  title = "Deliciousness to your inbox",
  copy,
}: {
  title?: string
  copy: string
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-line bg-cream px-6 py-14 text-center md:rounded-[3rem] md:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brass to-transparent" />
      {/* decorative plates */}
      <img
        src="/images/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 hidden w-40 opacity-90 md:block lg:w-72"
      />
      <img src="/images/Photo-plate.png" alt="" aria-hidden className="pointer-events-none absolute right-0 bottom-0 hidden w-40 opacity-90 md:block lg:w-72" />
      <div className="relative mx-auto max-w-2xl">
        <p className="text-xs font-bold tracking-[0.22em] text-burgundy uppercase">The Sunday Letter</p>
        <SectionHeading className="mt-3">{title}</SectionHeading>
        <SectionText>{copy}</SectionText>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-2 rounded-3xl border border-line bg-white p-2 sm:flex-row sm:items-center sm:rounded-full sm:pl-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <Input id="newsletter-email" type="email" placeholder="Your email address..." className="border-0 bg-transparent shadow-none focus-visible:ring-0" />
          <Button type="submit" className="shrink-0">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
