import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function BadgeWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("flex flex-wrap gap-2", className)}>{children}</div>
}

export { Badge }

export function UserBadge({ title, subtitle, image }: { title: string; subtitle: string; image?: string }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-14">
        <AvatarImage src={image || "/images/user.png"} alt={title} />
        <AvatarFallback>{title.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
        <p className="text-[15px] font-semibold">{title}</p>
        <p className="text-sm text-muted-classic">{subtitle}</p>
      </div>
    </div>
  )
}

export function ImageBadge({
  title,
  subtitle,
  image,
  width,
}: {
  title: string
  subtitle: string
  image: string
  width?: string
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-full max-w-28 shrink-0 overflow-hidden rounded-xl border border-line sm:max-w-44" style={width ? { maxWidth: width } : undefined}>
        <img src={image} alt={title} className="aspect-square w-full object-cover" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
        <p className="font-display text-lg leading-snug font-semibold">{title}</p>
        <p className="mt-1 text-sm text-muted-classic">{subtitle}</p>
      </div>
    </div>
  )
}

export function IconWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-full border border-line bg-cream", className)}>
      {children}
    </div>
  )
}
