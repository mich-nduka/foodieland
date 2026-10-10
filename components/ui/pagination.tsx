import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav role="navigation" aria-label="pagination" className={cn("mx-auto flex w-full justify-center", className)} {...props} />
)

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-wrap items-center justify-center gap-2", className)} {...props} />
  )
)
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("", className)} {...props} />
)
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & React.ComponentProps<"button">

const PaginationLink = ({ className, isActive, ...props }: PaginationLinkProps) => (
  <button
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({ variant: isActive ? "default" : "secondary", size: "icon" }),
      "size-11 rounded-2xl font-serif",
      className
    )}
    {...props}
  />
)

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<"button">) => (
  <button aria-label="Go to previous page" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "size-11 rounded-2xl", className)} {...props}>
    <ChevronLeft className="size-4" />
  </button>
)

const PaginationNext = ({ className, ...props }: React.ComponentProps<"button">) => (
  <button aria-label="Go to next page" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "size-11 rounded-2xl", className)} {...props}>
    <ChevronRight className="size-4" />
  </button>
)

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex size-11 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="size-4" />
  </span>
)

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
