"use client"

import { Clock, UtensilsCrossed } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type RecipeCardProps = {
  author: string
  authorImage: string
  date: string
  prepTime: string
  cookTime: string
  tag: string
}

export const RecipeCard = ({ author, authorImage, date, prepTime, cookTime, tag }: RecipeCardProps) => {
  const items = [
    {
      label: null,
      value: author,
      sub: date,
      avatar: authorImage,
    },
    { label: "PREP TIME", value: prepTime },
    { label: "COOK TIME", value: cookTime },
    { label: null, value: tag },
  ]
  return (
    <dl className="grid w-full max-w-4xl grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 border-line py-4 sm:px-6 sm:first:pl-0 lg:justify-center lg:border-l lg:first:border-l-0 lg:first:pl-0 lg:first:justify-start max-lg:odd:border-r-0 max-sm:border-b max-sm:last:border-b-0 sm:max-lg:odd:border-r sm:max-lg:[&:nth-child(-n+2)]:border-b"
        >
          {item.avatar ? (
            <Avatar className="size-12">
              <AvatarImage src={item.avatar} alt={item.value} />
              <AvatarFallback>{item.value.slice(0, 1)}</AvatarFallback>
            </Avatar>
          ) : (
            <span aria-hidden className="flex size-12 items-center justify-center rounded-full border border-line bg-cream text-sm">
              {item.label ? <Clock className="size-5" /> : <UtensilsCrossed className="size-5" />}
            </span>
          )}
          <div>
            {item.label && <dt className="text-xs font-bold tracking-wide">{item.label}</dt>}
            <dd className="text-sm font-medium">{item.value}</dd>
            {item.sub && <dd className="text-sm text-muted-classic">{item.sub}</dd>}
          </div>
        </div>
      ))}
    </dl>
  )
}
