import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type AuthorMetaDataProps = {
  author: string
  authorImage: string
}

type BlogCardProps = AuthorMetaDataProps & {
  imageSrc: string
  title: string
  subtitle: string
  width?: string
}

export const BlogCard = ({ imageSrc, title, subtitle, width, author, authorImage }: BlogCardProps) => {
  return (
    <article className="flex flex-col gap-6 md:flex-row">
      <div className="w-full shrink-0 overflow-hidden rounded-2xl border border-line md:max-w-sm" style={width ? { maxWidth: width } : undefined}>
        <img src={imageSrc} alt={title} className="aspect-[4/3] w-full object-cover" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <Link href={`/blog/${title}`} className="font-display text-balance text-xl font-semibold tracking-tight hover:text-burgundy md:text-2xl">
          {title}
        </Link>
        <p className="mt-2 max-w-[80ch] text-sm leading-relaxed text-muted-classic">{subtitle}</p>
        <AuthorMetaData author={author} authorImage={authorImage} />
      </div>
    </article>
  )
}

export const AuthorMetaData = ({ author, authorImage }: AuthorMetaDataProps) => {
  return (
    <div className="mt-6 flex flex-wrap items-center">
      <div className="flex min-w-0 flex-none items-center gap-3 border-r border-line pr-6">
        <Avatar className="size-10">
          <AvatarImage src={authorImage} alt={author} />
          <AvatarFallback>{author.slice(0, 1)}</AvatarFallback>
        </Avatar>
        <p className="font-semibold">{author}</p>
      </div>
      <div className="px-6">
        <p className="text-sm text-muted-classic">12 November 2021</p>
      </div>
    </div>
  )
}
