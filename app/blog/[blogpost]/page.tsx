"use client"

import Link from "next/link"
import { Title } from "@/components/Layout/Layout"
import { AuthorMetaData } from "@/components/Card/BlogCard"
import { Newsletter } from "@/components/newsletter"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"
import { Button } from "@/components/ui/button"
import { ArticleHeading, ProseText, SectionText, SubsectionHeading } from "@/components/typography"
import { BLOG_POSTS, NEWSLETTER_COPY } from "@/data"
import { notFound, useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Facebook, Instagram, Twitter } from "react-feather"

const BlogPostPage = () => {
  const { blogpost } = useParams<{ blogpost: string }>()
  const postTitle = blogpost.replaceAll("%20", " ")
  const post = BLOG_POSTS.find((post) => post.title === postTitle)

  if (!post) notFound()

  const { title, author, authorImage, blogLargeImage } = post

  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
      <div className="mt-10">
        <Button variant="outline" size="sm" asChild>
          <Link href="/blog">
            <ArrowLeft className="size-4" /> Back to all articles
          </Link>
        </Button>
      </div>
      <div className="mt-10 mb-12 flex flex-col items-center justify-center text-center">
        <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-burgundy uppercase">
          <span aria-hidden className="inline-block h-px w-8 bg-brass" />
          Interview
        </p>
        <Title className="mt-3 max-w-4xl">{title}</Title>
        <div className="mt-6 flex justify-center">
          <AuthorMetaData author={author} authorImage={authorImage} />
        </div>
        <SectionText className="mt-8 max-w-3xl text-center">
          We spoke to head chef Andreas Paula about twenty years on the line, why he still cooks on his days off, and
          the advice he gives every commis who walks through the door.
        </SectionText>
      </div>
      <div className="h-auto max-h-[80vh] w-full overflow-hidden rounded-3xl border border-line md:aspect-[3/2] lg:aspect-auto lg:h-[520px]">
        <img src={blogLargeImage} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="mt-12 flex flex-col-reverse gap-8 lg:flex-row">
        <div className="flex min-w-0 flex-[3] flex-col">
          <div className="mx-0 my-0 flex flex-col gap-2 md:mx-20">
            <ArticleHeading>How did you start out in the food industry?</ArticleHeading>
            <ProseText>
              I washed dishes in a hotel kitchen the summer I turned sixteen, entirely by accident — a friend dropped
              out and I took the shift. I stayed four years. Nobody teaches you anything for the first six months; you
              earn your way into being taught. By the time I was allowed near a pan I already knew how the room worked,
              and that mattered more than any technique I picked up later.
            </ProseText>
          </div>
          <div className="mx-0 my-10 flex flex-col gap-2 md:mx-20">
            <ArticleHeading>What do you like most about your job?</ArticleHeading>
            <ProseText>
              Service itself. Two hundred plates go out over three hours and there is no room to think about anything
              else, which is a rare thing in ordinary life. I also like that the work is finished at the end of every
              night. You clean down, you go home, and tomorrow starts empty.
            </ProseText>
          </div>
          <div className="mx-0 my-6 flex flex-col gap-4 md:mx-20">
            <ArticleHeading>Do you cook at home on your days off?</ArticleHeading>
            <div className="h-72 w-full overflow-hidden rounded-3xl border border-line md:h-[420px]">
              <img src="/images/woman-in-kitchen.png" alt={title} className="h-full w-full object-cover" />
            </div>
            <ProseText>
              Constantly, but nothing like what we do at work. On a day off it is one pan, something braised, and no
              garnish at all. Cooking for other people professionally makes you very protective of your right to cook
              badly for yourself.
            </ProseText>
          </div>
          <div className="mx-0 my-6 flex flex-col gap-2 md:mx-20">
            <ArticleHeading>What would your advice be to young people looking to get their foot in the door?</ArticleHeading>
            <ProseText>
              Turn up early, stay late for the first year, and be the person who asks what needs doing before being
              told. That is genuinely most of it — kitchens are small and people notice. Then learn to sharpen your own
              knives. You would be amazed how many people never bother, and it changes how you work.
            </ProseText>
          </div>
          <blockquote className="mx-0 my-8 border-l-4 border-brass bg-cream/60 px-8 py-6 md:mx-10">
            <p className="font-display text-xl leading-relaxed italic md:text-3xl">
              “Nobody teaches you anything for the first six months. You earn your way into being taught.”
            </p>
          </blockquote>
          <div className="mx-0 my-6 flex flex-col gap-2 md:mx-20">
            <ArticleHeading>What is the biggest misconception that people have about being a professional chef?</ArticleHeading>
            <ProseText>
              That it is creative work most of the time. It is not. It is repetition, consistency and cleaning, and the
              creative part is maybe an hour a week if you are lucky. The people who last are the ones who find the
              repetition satisfying, not the ones chasing invention.
            </ProseText>
          </div>
        </div>
        <aside className="flex flex-1 flex-row flex-wrap items-center justify-center gap-5 lg:flex-col">
          <h5 className="w-full text-center text-xs font-bold tracking-widest lg:w-auto">SHARE THIS ON:</h5>
          <Facebook className="size-5 cursor-pointer hover:text-burgundy" />
          <Instagram className="size-5 cursor-pointer hover:text-burgundy" />
          <Twitter className="size-5 cursor-pointer hover:text-burgundy" />
        </aside>
      </div>
      <div className="my-16">
        <Newsletter copy={NEWSLETTER_COPY} />
        <SubsectionHeading className="mt-16 mb-8 text-center">Check out the delicious recipe</SubsectionHeading>
        <MoreRecipesGrid number={4} />
      </div>
    </div>
  )
}

export default BlogPostPage
