"use client"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/typography"
import type { Category } from "@/types"

const CLASSIC_TINTS: Record<string, string> = {
  Breakfast: "bg-[#f7ecd4]",
  Vegan: "bg-[#e9efe0]",
  Meat: "bg-[#f6e0dc]",
  Dessert: "bg-[#f9eecb]",
  Lunch: "bg-[#efeae0]",
  Chocolate: "bg-[#e9ddd2]",
}

const Categories = ({ info }: { info: Category[] }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-burgundy uppercase">
            <span aria-hidden className="inline-block h-px w-8 bg-brass" />
            Browse
          </p>
          <SectionHeading className="mt-2">Categories</SectionHeading>
        </div>
        <Button variant="secondary">View All Categories</Button>
      </div>
      <div className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-14 lg:justify-between">
        {info.map(({ label, image }) => (
          <div
            key={label}
            className={`w-36 rounded-3xl border border-line pt-0 pb-5 text-center shadow-sm transition-transform hover:-translate-y-1 md:w-44 ${CLASSIC_TINTS[label] ?? "bg-cream"}`}
          >
            <div className="mx-auto -mt-9 size-20 overflow-hidden rounded-full border-4 border-paper bg-white shadow md:size-24">
              <img src={image} alt={label} className="h-full w-full object-contain" />
            </div>
            <p className="font-display mt-3 text-lg font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
