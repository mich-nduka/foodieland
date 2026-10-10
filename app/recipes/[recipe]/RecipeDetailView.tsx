"use client"

import Link from "next/link"
import { Fragment } from "react"
import { ImageBadge } from "@/components/Badges/Badges"
import { RecipeCard } from "@/components/Card/RecipeCard"
import { Ad, AdWrapper, IngredientsSideBox, InfoArea, MainArea, MainSection, PageWrapper, Title } from "@/components/Layout/Layout"
import { Newsletter } from "@/components/newsletter"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ProseText, SubsectionHeading } from "@/components/typography"
import { NEWSLETTER_COPY, SIDEBAR_RECIPES } from "@/data"
import type { RecipeDetail } from "@/types"
import { cn } from "@/lib/utils"

const RecipeDetailView = ({ recipe }: { recipe: RecipeDetail }) => {
  return (
    <PageWrapper>
      <div className="mt-10">
        <Button variant="outline" size="sm" asChild>
          <Link href="/recipes">
            <ArrowLeft className="size-4" /> Back to all recipes
          </Link>
        </Button>
      </div>
      <MainSection>
        <MainArea>
          <Title>{recipe.title}</Title>
          <RecipeCard
            author={recipe.author}
            authorImage={recipe.authorImage}
            date={recipe.date}
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
            tag={recipe.tag}
          />
          <div className="aspect-[16/10] max-h-[600px] w-full overflow-hidden rounded-2xl border border-line">
            <img src={recipe.heroImage} alt={recipe.title} className="h-full w-full object-cover" />
          </div>
        </MainArea>
        <InfoArea>
          <div className="flex flex-wrap justify-end gap-8 max-lg:justify-start">
            {["PRINT", "SHARE"].map((action) => (
              <div key={action} className="flex flex-col items-center gap-3">
                <span className="flex size-16 items-center justify-center rounded-full border border-line bg-cream text-lg md:size-20">
                  {action === "PRINT" ? "⎙" : "↗"}
                </span>
                <p className="text-xs font-bold tracking-widest">{action}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col gap-5 rounded-2xl border border-line bg-cream/70 p-6 md:p-8">
            <SubsectionHeading>Nutrition Information</SubsectionHeading>
            {recipe.nutrition.map(({ nutrient, unit }) => (
              <div key={nutrient} className="flex justify-between border-b border-line pb-4">
                <span className="text-lg text-muted-classic">{nutrient}</span>
                <span className="text-lg font-medium">{unit}</span>
              </div>
            ))}
            <p className="mt-6 text-center text-muted-classic">{recipe.nutritionNote}</p>
          </div>
        </InfoArea>
      </MainSection>

      <ProseText className="mt-12">{recipe.intro}</ProseText>

      <section className="mt-20 flex flex-col gap-10 lg:flex-row">
        <div className="min-w-0 flex-[2]">
          <SubsectionHeading className="mb-8">Ingredients</SubsectionHeading>
          {recipe.ingredients.map(({ heading, items }, groupIndex) => (
            <Fragment key={heading}>
              <h3 className={cn("font-display text-xl font-semibold", groupIndex > 0 && "mt-16")}>{heading}</h3>
              {items.map((item) => (
                <Label key={item} className="flex cursor-pointer items-center gap-3 border-b border-line py-5 text-sm font-normal normal-case tracking-normal">
                  <Checkbox name={item} value={item} />
                  <span className="text-ink">{item}</span>
                </Label>
              ))}
            </Fragment>
          ))}
        </div>
        <IngredientsSideBox>
          {SIDEBAR_RECIPES.map(({ title, image, author }) => (
            <ImageBadge key={title} image={image} title={title} subtitle={`By ${author}`} width="180px" />
          ))}
          <AdWrapper>
            <Ad src="/images/ad-banner.png" alt="ad" />
          </AdWrapper>
        </IngredientsSideBox>
      </section>

      <section className="w-full max-w-4xl">
        <SubsectionHeading className="mt-16">Directions</SubsectionHeading>
        {recipe.directions.map((step) => (
          <div key={step.title} className="border-b border-line py-8">
            <Label className="flex cursor-pointer items-center gap-3 text-base font-semibold normal-case tracking-normal">
              <Checkbox name={step.title} value={step.title} />
              <h3 className="font-display text-xl">{step.title}</h3>
            </Label>
            <ProseText className="mt-4 md:pl-9">{step.body}</ProseText>
            {step.image && (
              <div className="mt-8 aspect-[16/10] max-h-[600px] w-full overflow-hidden rounded-3xl border border-line md:ml-9 md:w-[calc(100%-2.25rem)]">
                <img src={step.image.src} alt={step.image.alt} className="h-full w-full object-cover" />
              </div>
            )}
            {step.bodyAfterImage && <ProseText className="mt-6 md:pl-9">{step.bodyAfterImage}</ProseText>}
          </div>
        ))}
      </section>

      <div className="my-16">
        <Newsletter copy={NEWSLETTER_COPY} />
      </div>
      <SubsectionHeading className="mb-8 text-center">You may like these recipe too</SubsectionHeading>
      <MoreRecipesGrid number={4} />
      <Separator className="mt-16" />
    </PageWrapper>
  )
}

export default RecipeDetailView
