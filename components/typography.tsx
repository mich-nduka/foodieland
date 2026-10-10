import { cn } from "@/lib/utils"

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-burgundy uppercase",
        className
      )}
    >
      <span aria-hidden className="inline-block h-px w-8 bg-brass" />
      {children}
    </p>
  )
}

export function SectionHeading({
  className,
  children,
  as: Tag = "h2",
}: {
  className?: string
  children: React.ReactNode
  as?: "h1" | "h2" | "h3"
}) {
  return (
    <Tag
      className={cn(
        "font-display text-balance text-3xl leading-tight font-semibold tracking-tight text-ink md:text-5xl",
        className
      )}
    >
      {children}
    </Tag>
  )
}

export function SectionText({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <p className={cn("mx-auto mt-4 max-w-2xl leading-relaxed text-muted-classic", className)}>{children}</p>
}

export function SubsectionHeading({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h3 className={cn("font-display text-2xl font-semibold tracking-tight text-ink md:text-[2rem]", className)}>
      {children}
    </h3>
  )
}

export function ProseText({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn("leading-[1.8] tracking-[-0.01em] text-ink-soft", className)}>{children}</p>
}

export function ArticleHeading({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h3 className={cn("font-display text-xl font-semibold tracking-tight text-ink md:text-2xl", className)}>
      {children}
    </h3>
  )
}
