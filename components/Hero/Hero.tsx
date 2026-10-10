"use client"

import Link from "next/link"
import { Play, Clock, UtensilsCrossed } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { UserBadge } from "../Badges/Badges"

export const MainHero = () => {
  return (
    <section className="px-4 pt-6 md:px-8 md:pt-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_1px_2px_rgba(28,25,23,0.06),0_24px_48px_-24px_rgba(28,25,23,0.25)] lg:grid-cols-2">
        <div className="relative flex flex-col justify-center gap-6 bg-cream/60 p-8 md:p-12">
          <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-burgundy via-brass to-burgundy" />
          <img
            src="/images/Badge.png"
            alt=""
            aria-hidden
            className="absolute top-6 right-6 hidden size-24 object-contain md:block lg:size-32"
          />
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-burgundy uppercase">
            <span aria-hidden className="inline-block h-px w-8 bg-brass" />
            Recipe of the week
          </p>
          <h1 className="font-display max-w-xl text-balance text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
            Spicy delicious chicken wings
          </h1>
          <p className="max-w-[50ch] leading-relaxed text-muted-classic">
            Crisp outside, tender inside, and glazed in chilli, garlic and honey. One pan, thirty minutes, and
            ingredients you almost certainly have already.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>
              <Clock className="size-4" /> 30 minutes
            </Badge>
            <Badge>
              <UtensilsCrossed className="size-4" /> Chicken
            </Badge>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-6">
            <UserBadge title="Dianne Russell" subtitle="15 March 2022" />
            <Button asChild size="lg">
              <Link href="/recipes">
                View Recipes <Play className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative min-h-72 lg:min-h-[560px]">
          <img src="/images/hero-image.png" alt="Spicy chicken wings" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export const SubHero = () => {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-2">
      <div>
        <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-burgundy uppercase">
          <span aria-hidden className="inline-block h-px w-8 bg-brass" />
          Our kitchen
        </p>
        <h2 className="font-display mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          Everyone can be a chef in their own kitchen
        </h2>
        <p className="mt-4 max-w-[50ch] leading-relaxed text-muted-classic">
          Every recipe here is written for an ordinary kitchen. No specialist equipment, no ingredients you can only
          find in one shop, and steps you can follow with one hand while the other is stirring.
        </p>
        <Button className="mt-8">Learn More</Button>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-cream to-parchment">
        <img src="/images/male-chef-dressed.png" alt="Chef in whites" className="mx-auto max-h-[560px] w-auto object-contain" />
      </div>
    </section>
  )
}
