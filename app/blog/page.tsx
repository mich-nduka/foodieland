import { ImageBadge } from "@/components/Badges/Badges"
import { BlogCard } from "@/components/Card/BlogCard"
import { Ad, AdWrapper, IngredientsSideBox, MainArea, MainSection, PageWrapper, Title } from "@/components/Layout/Layout"
import { Newsletter } from "@/components/newsletter"
import { Pagination } from "@/components/Pagination/Pagination"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SectionText } from "@/components/typography"
import { BLOG_POSTS, NEWSLETTER_COPY, SIDEBAR_RECIPES } from "@/data"

function Blog() {
  return (
    <PageWrapper>
      <div className="mt-16 flex flex-col items-center">
        <Title>Blog &amp; Article</Title>
        <SectionText className="text-center">
          Interviews, technique guides and notes from our test kitchen. Longer reads for when you want to know why a
          recipe works, not just how to follow it.
        </SectionText>
        <form
          className="mt-10 flex w-full max-w-2xl flex-col gap-2 rounded-3xl border border-line bg-white p-2 sm:flex-row sm:items-center sm:rounded-full sm:pl-5"
        >
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <Input id="blog-search" type="text" placeholder="Search article, news or recipe..." className="border-0 bg-transparent shadow-none focus-visible:ring-0" />
          <Button type="submit" className="shrink-0">
            Search
          </Button>
        </form>
      </div>
      <MainSection>
        <MainArea>
          {BLOG_POSTS.map(({ title, blogSmallImage, author, authorImage, excerpt }) => (
            <BlogCard
              key={title}
              imageSrc={blogSmallImage}
              title={title}
              subtitle={excerpt}
              width="400px"
              author={author}
              authorImage={authorImage}
            />
          ))}
        </MainArea>
        <IngredientsSideBox>
          {SIDEBAR_RECIPES.map(({ title, image, author }) => (
            <ImageBadge key={title} image={image} title={title} subtitle={`By ${author}`} width="180px" />
          ))}
          <AdWrapper>
            <Ad src="/images/ad-banner.png" alt="ad" />
          </AdWrapper>
        </IngredientsSideBox>
      </MainSection>
      <Pagination />
      <div className="my-8">
        <Newsletter copy={NEWSLETTER_COPY} />
      </div>
    </PageWrapper>
  )
}

export default Blog
