"use client"

import Link from "next/link"
import { Clock, Heart, UtensilsCrossed } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type CardProps = {
  src: string
  title: string
  fill: string
  isAd?: boolean
  background: boolean
  tag?: string
  time?: string
  href?: string
}

const CardComponent = ({ src, title, fill, isAd, background, tag, time, href }: CardProps) => {
  const card = (
    <Card
      className={cn(
        "group relative flex w-full max-w-sm flex-col gap-4 p-4",
        !background && "bg-gradient-to-b from-white to-cream"
      )}
    >
      <div className={cn("w-full overflow-hidden rounded-2xl", isAd ? "h-full" : "aspect-[368/250]")}>
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      {!isAd && (
        <>
          <h3 className="font-display text-left text-lg leading-snug font-semibold">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {time && (
              <Badge>
                <Clock className="size-3.5" /> {time}
              </Badge>
            )}
            {tag && (
              <Badge>
                <UtensilsCrossed className="size-3.5" /> {tag}
              </Badge>
            )}
          </div>
          <div className="absolute top-7 right-7 flex size-12 items-center justify-center rounded-full border border-line bg-white shadow">
            <Heart className="size-5" fill={fill} stroke="none" aria-label="Save recipe" />
          </div>
        </>
      )}
    </Card>
  )

  return href ? (
    <Link href={href} className="block rounded-3xl transition-transform hover:-translate-y-1 focus-visible:outline-none">
      {card}
    </Link>
  ) : (
    card
  )
}

export default CardComponent
