import Card from "@/components/Card/Card"
import { PageWrapper, Title } from "@/components/Layout/Layout"
import { Newsletter } from "@/components/newsletter"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"
import { SectionText, SubsectionHeading } from "@/components/typography"
import { NEWSLETTER_COPY, RECIPES } from "@/data"

function Recipes() {
  return (
    <PageWrapper>
      <header className="mt-16 flex flex-col items-center text-center">
        <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-burgundy uppercase">
          <span aria-hidden className="inline-block h-px w-8 bg-brass" />
          Index
        </p>
        <Title className="mt-3">Recipes</Title>
        <SectionText className="text-center">
          Everything we have cooked, written up properly — with the timings, the quantities and the bits that usually go
          wrong.
        </SectionText>
      </header>

      <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2">
        {RECIPES.map((recipe) => (
          <Card
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            src={recipe.cardImage}
            title={recipe.title}
            fill={recipe.fill}
            background={false}
            tag={recipe.tag}
            time={recipe.totalTime}
          />
        ))}
      </div>

      <div className="my-16">
        <Newsletter copy={NEWSLETTER_COPY} />
      </div>

      <SubsectionHeading className="mb-8 text-center">More to explore</SubsectionHeading>
      <MoreRecipesGrid number={4} />
    </PageWrapper>
  )
}

export default Recipes
