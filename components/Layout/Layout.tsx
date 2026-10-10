import { cn } from "@/lib/utils"

export function PageWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}>{children}</div>
}

export function FullBleed({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("my-16", className)}>{children}</div>
}

export function Title({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h1 className={cn("font-display text-balance text-4xl leading-tight font-semibold tracking-tight md:text-6xl", className)}>{children}</h1>
}

export function MainSection({ className, children }: { className?: string; children: React.ReactNode }) {
  return <section className={cn("mt-12 flex flex-col gap-10 lg:flex-row", className)}>{children}</section>
}

export function MainArea({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("flex min-w-0 flex-1 flex-col gap-8", className)}>{children}</div>
}

export function InfoArea({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("flex min-w-0 flex-1 flex-col justify-end gap-6", className)}>{children}</div>
}

export function IngredientsSideBox({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("flex min-w-0 flex-1 flex-col items-stretch gap-6 lg:items-center", className)}>{children}</div>
}

export function AdWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mt-10 w-full max-w-md", className)}>{children}</div>
}

export function Ad({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={cn("w-full rounded-2xl border border-line object-cover", className)} {...props} alt={props.alt ?? "Advertisement"} />
}
