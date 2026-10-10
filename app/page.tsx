import Link from "next/link"
import Categories from "@/components/Categories/Categories"
import { MainHero, SubHero } from "@/components/Hero/Hero"
import { Newsletter } from "@/components/newsletter"
import { CheckOutGrid, MoreRecipesGrid, RecipeGrid } from "@/components/SectionGrid/SectionGrid"
import { Button } from "@/components/ui/button"
import { Eyebrow, SectionHeading, SectionText } from "@/components/typography"
import { INFO } from "@/constants"
import { NEWSLETTER_COPY } from "@/data"
import { Instagram } from "react-feather"

export default function Home() {
  return (
    <main>
      <MainHero />
      <Categories info={INFO} />

      <section className="mx-auto max-w-7xl px-6 py-8 text-center md:px-10">
        <Eyebrow className="justify-center">From the test kitchen</Eyebrow>
        <SectionHeading>Simple and tasty recipes</SectionHeading>
        <SectionText>
          Weeknight dinners, slow weekend bakes, and everything in between. Each one is cooked and re-cooked in our
          kitchen until it works the first time you try it.
        </SectionText>
        <RecipeGrid />
      </section>

      <SubHero />

      <section className="bg-gradient-to-b from-transparent to-cream/70 px-6 py-16 text-center md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading>Check out @foodieland on Instagram</SectionHeading>
          <SectionText>
            Behind-the-scenes shots, half-eaten plates and the occasional kitchen disaster. Follow along to see what we
            are cooking this week.
          </SectionText>
          <CheckOutGrid />
          <Button className="mt-12" size="lg" asChild>
            <Link href="/">
              Visit Our Instagram <Instagram className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading className="max-w-xl text-left">Try this delicious recipe to make your day</SectionHeading>
          <p className="max-w-sm text-left leading-relaxed text-muted-classic">
            The recipes our readers come back to most — the ones that get saved, printed, and eventually splattered
            with sauce.
          </p>
        </div>
        <MoreRecipesGrid number={8} />
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-4 md:px-10">
        <Newsletter copy={NEWSLETTER_COPY} />
      </div>
    </main>
  )
}
