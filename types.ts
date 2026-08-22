export type Route = {
	name: string
	path: string
}

export type Recipe = {
	title: string
	imageSrc: string
	fill: string
	/** Absent for the ad-banner tile in `GRID_INFO`. */
	tag?: string
	/** Total time, shown on the card. Absent for the ad-banner tile. */
	time?: string
	/** Present when the recipe has a page of its own; makes the card a link. */
	slug?: string
}

export type Category = {
	gradient: string
	label: string
	image: string
}

export type InstagramPost = {
	post: string
}

export type Nutrient = {
	nutrient: string
	unit: string
}

export type BlogPost = {
	title: string
	blogSmallImage: string
	blogLargeImage: string
	author: string
	authorImage: string
	/** Standfirst shown on the blog index card. */
	excerpt: string
}

export type IngredientGroup = {
	heading: string
	items: string[]
}

export type SidebarRecipe = {
	title: string
	image: string
	author: string
}

export type RecipeStep = {
	title: string
	body: string
	/** Optional photo dropped between the two halves of a step. */
	image?: { src: string; alt: string }
	bodyAfterImage?: string
}

/** A recipe with a page of its own at /recipes/[recipe]. */
export type RecipeDetail = {
	slug: string
	title: string
	tag: string
	excerpt: string
	cardImage: string
	heroImage: string
	fill: string
	author: string
	authorImage: string
	date: string
	prepTime: string
	cookTime: string
	totalTime: string
	intro: string
	ingredients: IngredientGroup[]
	directions: RecipeStep[]
	nutrition: Nutrient[]
	nutritionNote: string
}
