import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { RECIPES } from "@/data"
import RecipeDetailView from "./RecipeDetailView"

type Params = { params: Promise<{ recipe: string }> }

/*
 * Prerenders one static page per recipe at build time. Unlike the blog route —
 * which matches on the post title and relies on the URL-encoded spaces round
 * tripping — recipes are addressed by an explicit slug held in the data.
 */
export function generateStaticParams() {
	return RECIPES.map(({ slug }) => ({ recipe: slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
	const { recipe: slug } = await params
	const recipe = RECIPES.find((entry) => entry.slug === slug)

	if (!recipe) return { title: "Recipe not found" }

	return {
		title: `${recipe.title} — Foodieland`,
		description: recipe.excerpt
	}
}

export default async function RecipePage({ params }: Params) {
	const { recipe: slug } = await params
	const recipe = RECIPES.find((entry) => entry.slug === slug)

	if (!recipe) notFound()

	return <RecipeDetailView recipe={recipe} />
}
