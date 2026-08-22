import type {
	BlogPost,
	InstagramPost,
	Recipe,
	RecipeDetail,
	Route,
	SidebarRecipe
} from "@/types"

// Routes

export const ROUTES: Route[] = [
	{ name: "Home", path: "/" },
	{ name: "Recipes", path: "/recipes" },
	{ name: "Blog", path: "/blog" },
	{ name: "Contact", path: "/contact" },
]

// Footer Routes

export const FOOTER_ROUTES: Route[] = [
	{ name: "Recipes", path: "/recipes" },
	{ name: "Blog", path: "/blog" },
	{ name: "Contact", path: "/contact" },
]


// Instragram Posts

export const INSTAGRAM_POSTS: InstagramPost[] = [
	{ post: "/images/post-1.png" },
	{ post: "/images/post-2.png" },
	{ post: "/images/post-3.png" },
	{ post: "/images/post-4.png" }
]

// Blog Posts

export const BLOG_POSTS: BlogPost[] = [
	{
		title: "Crochet Projects for Noodle Lovers",
		blogSmallImage: "/images/crochet-projects.png",
		blogLargeImage: "/images/crochet-projects-1.png",
		author: "Wade Warren",
		authorImage: "/images/user-1.png",
		excerpt:
			"Ramen-shaped coasters, a bucket hat modelled on a bowl of udon, and a scarf that is unmistakably tagliatelle. We asked six makers why noodles keep turning up in their yarn."
	},
	{
		title: "10 Vegetarian Recipes To Eat This Month",
		blogSmallImage: "/images/vegetarian-recipes.png",
		blogLargeImage: "/images/vegetarian-recipes-1.png",
		author: "Robert Fox",
		authorImage: "/images/user-2.png",
		excerpt:
			"Ten dinners built around what is genuinely good right now — purple sprouting broccoli, the last of the squash, and enough lentils to see you through to spring."
	},
	{
		title: "Full Guide to Becoming a Professional Chef",
		blogSmallImage: "/images/becoming-a-pro-chef.png",
		blogLargeImage: "/images/becoming-a-pro-chef-1.png",
		author: "Dianne Russell",
		authorImage: "/images/user-3.png",
		excerpt:
			"What the job actually involves, what culinary school does and does not teach you, and what you can realistically expect to earn in your first three years on the line."
	},
	{
		title: 'Simple and Delicious Vegetarian Lasagna',
		blogSmallImage: "/images/simple-and-delicious.png",
		blogLargeImage: "/images/simple-and-delicious-1.png",
		author: "Leslie Alexander",
		authorImage: "/images/user-4.png",
		excerpt:
			"No pre-cooked sauce, no bechamel to split, and no soggy middle layer. The whole thing comes together in about twenty minutes of real work, then the oven does the rest."
	},
	{
		title: "Plantain and Pinto Stew with Aji Verde",
		blogSmallImage: "/images/plantain-and-pinto.png",
		blogLargeImage: "/images/plantain-and-pinto-1.png",
		author: "Courtney Henry",
		authorImage: "/images/user-5.png",
		excerpt:
			"A one-pot stew that leans on ripe plantain for sweetness and a sharp herb sauce to cut through it. Keeps for four days, and it is better on the second."
	},
	{
		title: "We are Hiring a Communications Assistant!",
		blogSmallImage: "/images/hiring-ad.png",
		blogLargeImage: "/images/hiring-ad-1.png",
		author: "Albert Flores",
		authorImage: "/images/user-6.png",
		excerpt:
			"A part-time role on our small team, working across the newsletter, our social channels and recipe testing. Applications close at the end of the month."
	}
]


// Sidebar picks, shared by the recipes and blog pages.
// Titles are the full recipe names — these were previously hardcoded in both
// pages pre-truncated with an ellipsis ("Chicken Meatball with Creamy Chees...").

export const SIDEBAR_RECIPES: SidebarRecipe[] = [
	{
		title: "Chicken Meatballs with Cream Cheese",
		image: "/images/chicken-meatballs-1.png",
		author: "Andreas Paula"
	},
	{
		title: "The Creamiest Creamy Chicken and Bacon Pasta",
		image: "/images/creamy-chicken.png",
		author: "Andreas Paula"
	},
	{
		title: "The Best Easy One Pot Chicken and Rice",
		image: "/images/pot-chicken-1.png",
		author: "Andreas Paula"
	}
]

// The newsletter panel appears on five pages; the copy lives here so the
// pages cannot drift apart.

export const NEWSLETTER_COPY =
	"Get one seasonal recipe, its shopping list and a single kitchen tip in your inbox every Friday. No spam, and one click to unsubscribe."

// Recipes with a page of their own at /recipes/[recipe].
// Titles, tags, images and times match the corresponding tiles in GRID_INFO
// and MORE_RECIPES so a card and its detail page never disagree.

export const RECIPES: RecipeDetail[] = [
	{
		slug: "healthy-japanese-fried-rice",
		title: "Healthy Japanese Fried Rice with Asparagus",
		tag: "Healthy",
		excerpt:
			"Chāhan built on cold leftover rice, with asparagus for colour and a soy-mirin glaze that goes in at the very last moment.",
		cardImage: "/images/healthy-japanese-fried-rice.png",
		heroImage: "/images/video-image.png",
		fill: "#FF6363",
		author: "Andreas Paula",
		authorImage: "/images/user-1.png",
		date: "12 November 2021",
		prepTime: "10 Minutes",
		cookTime: "8 Minutes",
		totalTime: "18 minutes",
		intro:
			"Japanese fried rice — chāhan — is built on leftovers, and the one thing it will not forgive is warm rice. Chill it overnight so the grains stay separate instead of steaming into clumps. Everything after that is fast: read the steps through once and get every ingredient within arm's reach before the pan goes on. Asparagus keeps it green and needs barely two minutes, and the soy and mirin go in at the very end so they glaze rather than boil away.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"3 cups cooked short-grain rice, chilled overnight",
					"1 bunch asparagus (about 250g), woody ends trimmed, cut into 2cm pieces",
					"2 large eggs, beaten with a pinch of salt",
					"4 spring onions, white and green parts sliced and kept separate",
					"2 tbsp neutral oil, such as rapeseed or sunflower"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"2 tbsp light soy sauce",
					"1 tbsp mirin",
					"1 tsp toasted sesame oil, stirred through off the heat"
				]
			}
		],
		directions: [
			{
				title: "1. Prepare everything before the pan goes on",
				body: "Fried rice cooks in under five minutes, so there is no time to chop once the pan is hot. Break the chilled rice apart with wet hands until no clumps remain. Beat the eggs, slice the spring onions and keep the white and green parts in separate piles, then stir the soy sauce and mirin together in a small bowl.",
				image: {
					src: "/images/woman-in-kitchen.png",
					alt: "Cook stirring a pan on the hob"
				},
				bodyAfterImage:
					"Set everything within arm's reach of the hob. A wide, heavy pan beats a deep one — more surface area means the rice fries instead of steaming. Get it hot enough that a drop of water skitters and vanishes on contact before you add any oil."
			},
			{
				title: "2. Scramble the eggs and set them aside",
				body: "Add a tablespoon of oil and swirl to coat. Pour in the beaten eggs, let them sit for a few seconds until the edges set, then stir them into large, loose curds. Take them out while they still look slightly underdone — they finish cooking when they go back in, and eggs left in the pan turn rubbery. Tip them onto a plate and set aside."
			},
			{
				title: "3. Fry the rice, then bring it together",
				body: "Add the remaining oil, then the asparagus and the white parts of the spring onion. Stir for about two minutes, until the asparagus is bright green and still has bite. Add the rice, press it flat, and let it sit undisturbed for thirty seconds at a time so it catches and toasts. Pour the soy and mirin around the edge of the pan rather than over the rice, return the eggs, and fold everything together. Off the heat, stir through the sesame oil and the green parts of the spring onion, then serve straight away."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "219.9 kcal" },
			{ nutrient: "Total Fat", unit: "10.7 g" },
			{ nutrient: "Protein", unit: "7.9 g" },
			{ nutrient: "Carbohydrate", unit: "22.3 g" },
			{ nutrient: "Cholesterol", unit: "37.4 mg" }
		],
		nutritionNote:
			"Values are per serving, based on four servings. Treat them as an estimate — your rice, oil and soy sauce will vary."
	},
	{
		slug: "creamy-chicken-and-bacon-pasta",
		title: "The Creamiest Creamy Chicken and Bacon Pasta",
		tag: "Noodles",
		excerpt:
			"A one-pan weeknight pasta that gets its body from starchy cooking water rather than a pint of cream.",
		cardImage: "/images/creamy-bacon-pasta.png",
		heroImage: "/images/creamy-chicken.png",
		fill: "#DBE2E5",
		author: "Leslie Alexander",
		authorImage: "/images/user-4.png",
		date: "4 February 2022",
		prepTime: "10 Minutes",
		cookTime: "20 Minutes",
		totalTime: "30 minutes",
		intro:
			"The mistake most versions of this make is reaching for more cream when the sauce looks thin. What actually thickens it is the starch in the pasta water, so keep a mugful back before you drain and add it a splash at a time. Render the bacon slowly to start with — you want its fat in the pan to cook the chicken in, and rushing that step leaves you with chewy bacon and a dry sauce.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"400g rigatoni or penne",
					"6 rashers streaky bacon, cut into 1cm strips",
					"2 chicken breasts, cut into bite-sized pieces",
					"3 garlic cloves, thinly sliced",
					"100g parmesan, finely grated, plus more to serve"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"150ml double cream",
					"1 mug starchy pasta cooking water, reserved before draining",
					"Black pepper, coarsely ground, to finish"
				]
			}
		],
		directions: [
			{
				title: "1. Render the bacon, then brown the chicken",
				body: "Put the bacon into a cold, wide pan and bring it up to a medium heat. Starting cold gives the fat time to render instead of seizing. When the strips are golden and crisp, lift them out with a slotted spoon and leave the fat behind. Season the chicken well, then brown it in that fat in a single layer — resist stirring for the first two minutes so it takes on colour.",
				image: {
					src: "/images/male-chef-dressed.png",
					alt: "Chef plating a bowl of pasta"
				},
				bodyAfterImage:
					"Add the garlic for the last thirty seconds only. It burns fast in hot bacon fat, and burnt garlic will run through the whole sauce."
			},
			{
				title: "2. Cook the pasta and keep the water",
				body: "Boil the pasta in well-salted water and pull it out two minutes before the packet says. It will finish in the sauce. Before you drain, dip a mug into the pan and keep it — that cloudy water is the thickener, and it is the one thing you cannot get back once it goes down the sink."
			},
			{
				title: "3. Bring it together in the pan",
				body: "Pour the cream into the chicken pan and let it bubble for a minute. Add the drained pasta, the parmesan and a good splash of the reserved water, then toss hard and keep tossing. The sauce will look thin for about twenty seconds and then suddenly come together and cling. Loosen with more water if it tightens too far, scatter the bacon back over, and finish with black pepper and more parmesan."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "648.2 kcal" },
			{ nutrient: "Total Fat", unit: "29.4 g" },
			{ nutrient: "Protein", unit: "38.1 g" },
			{ nutrient: "Carbohydrate", unit: "58.6 g" },
			{ nutrient: "Cholesterol", unit: "112.0 mg" }
		],
		nutritionNote:
			"Values are per serving, based on four servings. Bacon and parmesan vary a lot between brands, so treat these as a guide."
	},
	{
		slug: "one-pot-chicken-and-rice",
		title: "The Best Easy One Pot Chicken and Rice",
		tag: "Snack",
		excerpt:
			"Everything cooks in a single pan, and the rice steams in the stock the chicken skin has just flavoured.",
		cardImage: "/images/pot-chicken.png",
		heroImage: "/images/pot-chicken-1.png",
		fill: "#DBE2E5",
		author: "Robert Fox",
		authorImage: "/images/user-2.png",
		date: "27 September 2021",
		prepTime: "15 Minutes",
		cookTime: "30 Minutes",
		totalTime: "45 minutes",
		intro:
			"This is the recipe to learn if you only ever learn one. Skin-on thighs are doing the work: their fat renders out and becomes the cooking medium for the onions, and the rice then absorbs all of it. The only real rule is that once the lid goes on, you leave it alone. Lifting it to check lets out the steam the rice needs, and you end up with a crunchy top layer and a wet bottom.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"8 bone-in, skin-on chicken thighs",
					"2 cups long-grain rice, rinsed until the water runs clear",
					"1 large onion, finely diced",
					"3 garlic cloves, crushed",
					"3 cups hot chicken stock"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"1 tsp smoked paprika",
					"2 bay leaves",
					"Juice of half a lemon, squeezed over at the end"
				]
			}
		],
		directions: [
			{
				title: "1. Brown the thighs skin-side down",
				body: "Season the thighs generously and lay them skin-side down in a cold, wide casserole. Bring the heat up to medium and leave them for eight to ten minutes without moving them. You are rendering the fat out, not searing, and that takes longer than it feels like it should. When the skin is deep gold and releases from the pan on its own, turn them for a minute and lift them onto a plate.",
				image: {
					src: "/images/woman-in-kitchen-2.png",
					alt: "Cook browning chicken in a heavy casserole"
				},
				bodyAfterImage:
					"There should be a few tablespoons of golden fat left behind. That, plus the browned bits stuck to the base, is the entire flavour base of the dish — do not pour it away."
			},
			{
				title: "2. Soften the onions and toast the rice",
				body: "Cook the onion in the chicken fat over a medium heat until soft and translucent, scraping the base as it goes. Add the garlic and paprika for a minute, then tip in the rinsed rice and stir until every grain is coated and slightly translucent at the edges. Rinsing first matters: it washes off the loose surface starch that otherwise turns the finished dish gluey."
			},
			{
				title: "3. Add the stock, cover, and leave it alone",
				body: "Pour in the hot stock, tuck in the bay leaves, and settle the thighs back on top, skin-side up and proud of the liquid so it stays crisp. Bring it to a simmer, put the lid on and turn the heat to its lowest setting for twenty minutes. Then take it off the heat and leave it, still covered, for ten more. Fluff with a fork, squeeze the lemon over, and serve from the pan."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "587.4 kcal" },
			{ nutrient: "Total Fat", unit: "22.8 g" },
			{ nutrient: "Protein", unit: "34.6 g" },
			{ nutrient: "Carbohydrate", unit: "61.2 g" },
			{ nutrient: "Cholesterol", unit: "141.5 mg" }
		],
		nutritionNote:
			"Values are per serving, based on four servings. Removing the skin before serving cuts roughly 90 kcal per portion."
	},
	{
		slug: "chicken-ramen-soup-with-mushroom",
		title: "Chicken Ramen Soup with Mushroom",
		tag: "Japanese",
		excerpt:
			"A weeknight shortcut bowl: a quick mushroom-and-chicken broth with real depth, ready in under an hour.",
		cardImage: "/images/chicken-ramen-soup.png",
		heroImage: "/images/chicken-ramen-soup.png",
		fill: "#FF6363",
		author: "Courtney Henry",
		authorImage: "/images/user-5.png",
		date: "8 January 2022",
		prepTime: "15 Minutes",
		cookTime: "35 Minutes",
		totalTime: "50 minutes",
		intro:
			"A proper ramen broth takes twelve hours, and this is not that. What it does instead is borrow the two things that make one taste long-cooked: dried shiitake, which bring a savoury depth out of all proportion to the effort, and a broth reduced hard enough to actually coat the noodles. Cook the noodles separately and in plain water — boiling them in the broth clouds it and makes the whole bowl claggy.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"2 chicken thighs, skin on",
					"25g dried shiitake mushrooms, soaked in 300ml boiling water",
					"200g chestnut mushrooms, thickly sliced",
					"2 nests ramen noodles",
					"2 soft-boiled eggs, halved, to serve"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"1 litre chicken stock, plus the strained shiitake soaking liquid",
					"2 tbsp dark soy sauce",
					"1 tbsp white miso paste, loosened with a little hot broth"
				]
			}
		],
		directions: [
			{
				title: "1. Build the broth on the soaking liquid",
				body: "Cover the dried shiitake with boiling water and leave them for twenty minutes. Strain the liquid through a fine sieve — grit settles at the bottom, so pour rather than tip — and keep every drop. Slice the softened mushrooms. Brown the chicken thighs skin-side down in the pan you will make the broth in, then add the stock and the soaking liquid and simmer gently for twenty-five minutes.",
				image: {
					src: "/images/smiling-chef.png",
					alt: "Chef tasting broth from a ladle"
				},
				bodyAfterImage:
					"Keep it at a bare simmer rather than a boil. A rolling boil emulsifies the chicken fat into the liquid and turns a clear broth cloudy."
			},
			{
				title: "2. Season it properly, off the boil",
				body: "Lift out the chicken and shred the meat, discarding the bones. Add the sliced chestnut and shiitake mushrooms to the broth and cook for five minutes. Take the pan off the heat before you add the miso — boiling it flattens the flavour and makes it grainy. Loosen the miso in a ladleful of hot broth first, then stir it back through with the soy sauce and taste."
			},
			{
				title: "3. Cook the noodles apart and assemble hot",
				body: "Boil the noodles in a separate pan of plain water, drain them, and divide them between two warmed bowls — cooking them in the broth would cloud it. Ladle the broth and mushrooms over, pile the shredded chicken on top and add the halved eggs last so the yolks stay intact. Eat it immediately: ramen noodles keep softening in hot liquid and wait for nobody."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "512.6 kcal" },
			{ nutrient: "Total Fat", unit: "18.9 g" },
			{ nutrient: "Protein", unit: "35.2 g" },
			{ nutrient: "Carbohydrate", unit: "48.4 g" },
			{ nutrient: "Cholesterol", unit: "218.3 mg" }
		],
		nutritionNote:
			"Values are per serving, based on two servings. Stock and miso vary widely in salt, so season to taste rather than to the numbers."
	},
	{
		slug: "big-and-juicy-wagyu-beef-cheeseburger",
		title: "Big and Juicy Wagyu Beef Cheeseburger",
		tag: "Snack",
		excerpt:
			"A thin, hard-seared wagyu patty with a lacy crust, melted cheese and nothing on the bun that gets in the way.",
		cardImage: "/images/juicy-wagyu.png",
		heroImage: "/images/big-and-juicy-wagyu.png",
		fill: "#FF6363",
		author: "Wade Warren",
		authorImage: "/images/user-1.png",
		date: "3 March 2022",
		prepTime: "15 Minutes",
		cookTime: "20 Minutes",
		totalTime: "35 minutes",
		intro:
			"Wagyu is fatty enough that a thick pub-style patty renders into something greasy and grey. Go the other way: press it thin, get the pan ferociously hot and cook it in ninety seconds a side. What you are after is the lacy, crisp-edged crust, and that only happens with hard contact and no fiddling. Season at the last possible moment — salt sitting on raw mince draws out moisture and steams the crust away.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"500g wagyu beef mince, roughly 20% fat, fridge cold",
					"4 brioche buns, split and buttered",
					"8 slices mature cheddar or American cheese",
					"1 white onion, sliced paper thin",
					"Flaky salt and coarse black pepper, for the last second"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"3 tbsp mayonnaise",
					"1 tbsp American mustard",
					"1 tbsp finely chopped cornichons"
				]
			}
		],
		directions: [
			{
				title: "1. Shape the patties and leave them cold",
				body: "Divide the mince into eight loose balls and flatten each between two sheets of baking paper until wider than the bun — they shrink hard. Handle the meat as little as you can; compressed mince cooks dense. Stack the patties with the paper between them and put them back in the fridge while the pan heats. Stir the mayonnaise, mustard and cornichons together and toast the buns cut-side down in a dry pan.",
				image: {
					src: "/images/male-chef-dressed.png",
					alt: "Chef assembling a burger"
				},
				bodyAfterImage:
					"Cold patties into a very hot pan is the whole trick. Room-temperature meat overcooks through to the middle before the outside has taken any colour."
			},
			{
				title: "2. Sear hard, season late",
				body: "Get a heavy skillet hotter than feels sensible — it should be just short of smoking. Lay two patties in with plenty of space, press once firmly with a spatula, then leave them completely alone for ninety seconds. Season the raw side only now. Flip, lay two slices of cheese on each, and give it another sixty seconds. Do not press again after the flip; you will squeeze the juice straight out."
			},
			{
				title: "3. Stack while everything is still hot",
				body: "Spread the sauce on both cut faces of the bun. Pile the sliced onion on the base, then double up the patties so the cheese ends up in the middle where it stays molten. Put the lid on and give it thirty seconds to settle — the steam softens the bun into the burger. Cut in half only if you are willing to lose some of the juice, which you probably are not."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "812.4 kcal" },
			{ nutrient: "Total Fat", unit: "52.1 g" },
			{ nutrient: "Protein", unit: "41.7 g" },
			{ nutrient: "Carbohydrate", unit: "38.9 g" },
			{ nutrient: "Cholesterol", unit: "168.2 mg" }
		],
		nutritionNote:
			"Values are per burger, based on four servings with two patties each. Wagyu fat content varies considerably by grade."
	},
	{
		slug: "fresh-lime-roasted-salmon-with-ginger-sauce",
		title: "Fresh Lime Roasted Salmon with Ginger Sauce",
		tag: "Fish",
		excerpt:
			"Salmon roasted hot and fast so the centre stays translucent, with a sharp ginger and lime sauce spooned over at the table.",
		cardImage: "/images/roasted-salmon.png",
		heroImage: "/images/roasted-salmon.png",
		fill: "#DBE2E5",
		author: "Dianne Russell",
		authorImage: "/images/user-3.png",
		date: "19 May 2022",
		prepTime: "10 Minutes",
		cookTime: "15 Minutes",
		totalTime: "25 minutes",
		intro:
			"Almost all overcooked salmon is overcooked because it was cooked gently for a long time. High heat for a short time gives you a set outside and a centre that is still just translucent, which is where the fat stays soft rather than leaking out as white curd. Take it out while you think it needs another two minutes — carryover heat will do those two minutes for you on the plate.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"4 salmon fillets, skin on, about 150g each",
					"2 limes, one zested and juiced, one cut into wedges",
					"1 tbsp olive oil",
					"200g tenderstem broccoli",
					"Sea salt"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"Thumb-sized piece of ginger, finely grated",
					"2 tbsp light soy sauce",
					"1 tbsp honey, loosened with a splash of hot water"
				]
			}
		],
		directions: [
			{
				title: "1. Heat the oven and the tray together",
				body: "Set the oven to 220°C and put the roasting tray in while it comes up. Pat the salmon completely dry — any surface water steams instead of roasting. Rub the fillets with oil, season and scatter over the lime zest. Whisk the ginger, soy and honey together and taste it; it should be sharp enough to make you blink, because it will mellow against the fish.",
				image: {
					src: "/images/woman-in-kitchen.png",
					alt: "Preparing salmon fillets for the oven"
				},
				bodyAfterImage:
					"A preheated tray is the difference between roasting and baking. Fish laid on cold metal sits in its own liquid for the first few minutes and never firms up properly."
			},
			{
				title: "2. Roast hot and pull it early",
				body: "Lay the fillets skin-side down on the hot tray — they should hiss — and tuck the broccoli around them. Roast for ten to twelve minutes depending on thickness. Test with the tip of a knife at the thickest point: it should meet a little resistance and the flesh should still look slightly darker in the very centre. That is done. Fully opaque all the way through is two minutes past done."
			},
			{
				title: "3. Dress it at the table, not in the tray",
				body: "Squeeze the juice of the zested lime over the broccoli while everything is still hot. Move the salmon to plates and spoon the ginger sauce over each fillet just before serving — pour it into the tray and it thins out into the fish juices and loses its edge. Put the lime wedges on the side for anyone who wants more sharpness."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "398.7 kcal" },
			{ nutrient: "Total Fat", unit: "22.4 g" },
			{ nutrient: "Protein", unit: "36.8 g" },
			{ nutrient: "Carbohydrate", unit: "12.1 g" },
			{ nutrient: "Cholesterol", unit: "94.0 mg" }
		],
		nutritionNote:
			"Values are per serving, based on four servings. Farmed and wild salmon differ noticeably in fat content."
	},
	{
		slug: "strawberry-oatmeal-pancake-with-honey-syrup",
		title: "Strawberry Oatmeal Pancake with Honey Syrup",
		tag: "Breakfast",
		excerpt:
			"Oats soaked into the batter give these body without heaviness, and the honey syrup takes about a minute.",
		cardImage: "/images/oatmeal-pancake.png",
		heroImage: "/images/oatmeal-pancake.png",
		fill: "#DBE2E5",
		author: "Leslie Alexander",
		authorImage: "/images/user-4.png",
		date: "21 June 2022",
		prepTime: "10 Minutes",
		cookTime: "10 Minutes",
		totalTime: "20 minutes",
		intro:
			"Oats thrown straight into pancake batter stay gritty. Soak them in the milk for ten minutes first and they soften into the crumb instead, giving you something substantial that still cooks light. The other rule is the usual one: stop mixing while the batter is still lumpy. Every stroke past that develops gluten, and gluten is what turns a pancake rubbery.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"100g rolled oats, soaked in the milk for 10 minutes",
					"250ml whole milk",
					"150g plain flour",
					"2 tsp baking powder",
					"250g strawberries, hulled and quartered"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"4 tbsp runny honey",
					"1 tbsp lemon juice",
					"A pinch of salt, to stop it tasting flat"
				]
			}
		],
		directions: [
			{
				title: "1. Soak the oats, then mix badly on purpose",
				body: "Pour the milk over the oats and leave them for ten minutes while you weigh everything else. Whisk the flour and baking powder together in a separate bowl. Tip the wet into the dry and fold about eight times — no more. The batter should still have visible lumps and dry patches. Let it stand for another five minutes; the flour hydrates and the baking powder gets going.",
				image: {
					src: "/images/woman-in-kitchen-2.png",
					alt: "Folding pancake batter in a bowl"
				},
				bodyAfterImage:
					"If the batter looks smooth and glossy you have gone too far. It is not fixable by resting, so aim to undermix and accept the lumps."
			},
			{
				title: "2. Cook them on a medium pan, not a hot one",
				body: "Heat a non-stick pan over medium and wipe it with the barest film of butter. Drop in spoonfuls and wait for bubbles to appear across the whole surface and the edges to look matte and set — usually two to three minutes. Then flip once. High heat browns the outside before the middle cooks, and the middle of an oat pancake takes longer than you expect."
			},
			{
				title: "3. Warm the syrup and build the stack",
				body: "Warm the honey with the lemon juice and salt in a small pan for under a minute, just until it loosens and pours freely. Do not let it boil or it turns to toffee as it cools. Stack the pancakes with strawberries between the layers so they soften slightly in the residual heat, then pour the syrup over the top and let it run down."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "342.9 kcal" },
			{ nutrient: "Total Fat", unit: "7.2 g" },
			{ nutrient: "Protein", unit: "10.4 g" },
			{ nutrient: "Carbohydrate", unit: "61.8 g" },
			{ nutrient: "Cholesterol", unit: "14.6 mg" }
		],
		nutritionNote:
			"Values are per serving, based on four servings of roughly three pancakes each."
	},
	{
		slug: "fresh-and-healthy-mixed-mayonnaise-salad",
		title: "Fresh and Healthy Mixed Mayonnaise Salad",
		tag: "Healthy",
		excerpt:
			"A crunchy salad held together with a thinned, lemon-sharpened mayonnaise rather than a heavy one.",
		cardImage: "/images/mixed-mayo.png",
		heroImage: "/images/mixed-mayo.png",
		fill: "#FF6363",
		author: "Courtney Henry",
		authorImage: "/images/user-5.png",
		date: "7 July 2022",
		prepTime: "15 Minutes",
		cookTime: "0 Minutes",
		totalTime: "15 minutes",
		intro:
			"Mayonnaise-dressed salads go wrong when the dressing is used neat: it clings in lumps and coats everything in fat. Let it down with lemon juice and a spoonful of water until it pours off the spoon in a ribbon, and it will coat evenly using half as much. Salt the vegetables that hold water and drain them first, or the dressing you carefully thinned will be watered down again on the plate.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"1 small white cabbage, shredded as finely as you can manage",
					"2 carrots, coarsely grated",
					"1 cucumber, halved, seeded and sliced",
					"4 spring onions, finely sliced",
					"A large handful of flat-leaf parsley, roughly chopped"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"6 tbsp good mayonnaise",
					"Juice of 1 lemon, plus 1 tbsp cold water",
					"1 tsp Dijon mustard and plenty of black pepper"
				]
			}
		],
		directions: [
			{
				title: "1. Salt the watery vegetables and wait",
				body: "Toss the shredded cabbage and sliced cucumber with a good teaspoon of salt and leave them in a colander for ten minutes. A surprising amount of liquid comes out. Squeeze them gently in a clean tea towel — not so hard that you bruise them, but firmly enough that they stop dripping. This is the single step that decides whether the salad is crisp tomorrow or a puddle.",
				image: {
					src: "/images/smiling-chef.png",
					alt: "Preparing a bowl of mixed salad"
				},
				bodyAfterImage:
					"Do not rinse the salt off. Most of it leaves with the water, and what stays behind is the seasoning for the whole bowl."
			},
			{
				title: "2. Thin the dressing until it ribbons",
				body: "Whisk the mayonnaise with the mustard, then add the lemon juice a little at a time — going in all at once can split it. Add the water last and keep whisking until the dressing falls off the spoon in a continuous ribbon rather than a blob. Season hard with black pepper and taste. It should be a touch too sharp on its own; the vegetables will blunt it."
			},
			{
				title: "3. Dress it late and lightly",
				body: "Combine the drained cabbage and cucumber with the carrot and spring onion, then pour over about two thirds of the dressing and turn it through with your hands. Add more only if it looks dry. Fold in the parsley at the very end so it stays green, and eat within the hour for maximum crunch — though it is still good, if softer, the next day."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "186.3 kcal" },
			{ nutrient: "Total Fat", unit: "15.8 g" },
			{ nutrient: "Protein", unit: "2.4 g" },
			{ nutrient: "Carbohydrate", unit: "10.7 g" },
			{ nutrient: "Cholesterol", unit: "11.2 mg" }
		],
		nutritionNote:
			"Values are per serving, based on six servings as a side. Most of the fat comes from the mayonnaise."
	},
	{
		slug: "chicken-meatballs-with-cream-cheese",
		title: "Chicken Meatballs with Cream Cheese",
		tag: "Meat",
		excerpt:
			"Chicken mince is lean and dries out fast, so cream cheese goes inside the meatball rather than into the sauce.",
		cardImage: "/images/chicken-meatballs.png",
		heroImage: "/images/chicken-meatballs-1.png",
		fill: "#DBE2E5",
		author: "Albert Flores",
		authorImage: "/images/user-6.png",
		date: "2 August 2022",
		prepTime: "20 Minutes",
		cookTime: "20 Minutes",
		totalTime: "40 minutes",
		intro:
			"Chicken mince has almost none of the fat that keeps a beef meatball tender, which is why most chicken meatballs come out dry and bouncy. The fix is to put the fat inside: a nugget of cold cream cheese sealed in the middle melts as it cooks and bastes the meat from within. Keep everything cold while you work, and use wet hands — chicken mince sticks to dry ones and you end up compacting it.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"500g chicken mince, kept cold",
					"100g cream cheese, cut into 16 cubes and frozen for 10 minutes",
					"50g panko breadcrumbs soaked in 3 tbsp milk",
					"1 egg yolk",
					"2 garlic cloves, crushed, and a handful of chopped chives"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"400g tin chopped tomatoes",
					"1 tsp dried oregano",
					"A pinch of sugar to take the edge off the tomatoes"
				]
			}
		],
		directions: [
			{
				title: "1. Build the mix around soaked breadcrumbs",
				body: "Soak the panko in the milk for five minutes until it turns to paste — this is what holds moisture in a lean mince. Combine it with the chicken, egg yolk, garlic and chives and season well, mixing with a fork rather than your hands so you do not warm the fat. Take the cream cheese cubes out of the freezer only when you are ready to shape.",
				image: {
					src: "/images/male-chef-dressed.png",
					alt: "Rolling meatballs on a board"
				},
				bodyAfterImage:
					"Frozen cheese matters. At fridge temperature it smears into the mince as you wrap it, and you lose the molten centre entirely."
			},
			{
				title: "2. Wrap the cheese completely",
				body: "With wet hands, flatten a heaped tablespoon of the mixture in your palm, sit a cube of cream cheese in the middle and close the meat around it. Roll gently until you cannot see a seam. Any gap will leak, and a leaked meatball is just a dry one sitting in a puddle. You should get sixteen. Chill them for ten minutes if the kitchen is warm."
			},
			{
				title: "3. Brown first, then finish in the sauce",
				body: "Brown the meatballs in a little oil over a medium-high heat, turning them so they colour on most sides — about five minutes. Lift them out, add the tomatoes, oregano and sugar to the pan and scrape up the browned bits. Settle the meatballs back in, cover, and simmer gently for twelve minutes. Do not stir hard; they are more fragile than beef ones and you will break the seal."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "421.6 kcal" },
			{ nutrient: "Total Fat", unit: "21.9 g" },
			{ nutrient: "Protein", unit: "38.4 g" },
			{ nutrient: "Carbohydrate", unit: "16.2 g" },
			{ nutrient: "Cholesterol", unit: "162.7 mg" }
		],
		nutritionNote:
			"Values are per serving, based on four servings of four meatballs each, sauce included."
	},
	{
		slug: "fruity-pancake-with-orange-and-blueberry",
		title: "Fruity Pancake with Orange & Blueberry",
		tag: "Sweet",
		excerpt:
			"Orange zest through the batter and blueberries added in the pan, so they burst without staining everything purple.",
		cardImage: "/images/fruity-pancake.png",
		heroImage: "/images/fruity-pancake.png",
		fill: "#FF6363",
		author: "Robert Fox",
		authorImage: "/images/user-2.png",
		date: "14 September 2022",
		prepTime: "10 Minutes",
		cookTime: "15 Minutes",
		totalTime: "25 minutes",
		intro:
			"Blueberries folded into pancake batter do two unhelpful things: they sink, and they bleed until the whole batch is grey-purple. Drop them onto each pancake once it is already in the pan and neither happens. The orange is doing more work than it looks like — zest carries the aroma, and a squeeze of the juice into the batter reacts with the baking powder for a bit of extra lift.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"200g self-raising flour",
					"1 tsp baking powder",
					"2 eggs, separated",
					"250ml buttermilk, plus the juice of half an orange",
					"200g blueberries, kept aside for the pan"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"Zest of 1 orange, half in the batter and half to finish",
					"3 tbsp maple syrup",
					"A knob of butter for the pan, wiped almost dry"
				]
			}
		],
		directions: [
			{
				title: "1. Whip the whites separately",
				body: "Whisk the flour, baking powder and half the orange zest together. Beat the egg yolks into the buttermilk with the orange juice, then fold that into the dry ingredients until only just combined. In a clean bowl whisk the egg whites to soft peaks and fold them through in two additions, cutting rather than stirring so you keep the air in.",
				image: {
					src: "/images/woman-in-kitchen.png",
					alt: "Whisking egg whites for pancake batter"
				},
				bodyAfterImage:
					"Folded whites are what makes these tall rather than flat. Work quickly once they are in — the batter starts deflating from the moment you stop."
			},
			{
				title: "2. Add the blueberries in the pan",
				body: "Heat a non-stick pan over medium and wipe it with butter until it is barely greased. Spoon in the batter, then immediately scatter a dozen blueberries onto the wet surface of each pancake and press them in lightly. Wait for the edges to set and the top to look matte before flipping. The berries will have burst against the pan on the second side, which is exactly what you want."
			},
			{
				title: "3. Finish with the remaining zest",
				body: "Keep the cooked pancakes in a low oven on a rack rather than a plate — stacked on a plate they steam and go limp. Pour the maple syrup over at the table and scatter the reserved orange zest on top. Adding the zest at the end rather than the start keeps the citrus smell sharp; heat drives most of it off."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "376.2 kcal" },
			{ nutrient: "Total Fat", unit: "8.9 g" },
			{ nutrient: "Protein", unit: "12.6 g" },
			{ nutrient: "Carbohydrate", unit: "63.4 g" },
			{ nutrient: "Cholesterol", unit: "98.3 mg" }
		],
		nutritionNote:
			"Values are per serving, based on four servings. Maple syrup accounts for most of the added sugar."
	},
	{
		slug: "mixed-tropical-fruit-salad-with-superfood-boosts",
		title: "Mixed Tropical Fruit Salad with Superfood Boosts",
		tag: "Healthy",
		excerpt:
			"Ripe tropical fruit, a lime and mint syrup, and seeds added at the table so they stay crunchy.",
		cardImage: "/images/tropical-fruit-salad.png",
		heroImage: "/images/tropical-fruit-salad.png",
		fill: "#FF6363",
		author: "Courtney Henry",
		authorImage: "/images/user-5.png",
		date: "11 October 2022",
		prepTime: "15 Minutes",
		cookTime: "0 Minutes",
		totalTime: "15 minutes",
		intro:
			"A fruit salad is mostly an assembly job, so the only decisions that matter are ripeness and order. Cut the firm fruit first and the soft fruit last, so the soft pieces spend the least time being knocked about. The lime syrup is not optional — acid is what stops a bowl of sweet fruit tasting flat, and it also slows the browning on anything cut.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"1 ripe pineapple, cored and cut into 2cm chunks",
					"1 large mango, cheeks cut off and diced",
					"2 kiwi fruit, peeled and sliced into half-moons",
					"200g strawberries, hulled and halved",
					"1 banana, sliced at the very last moment"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"Juice and zest of 2 limes",
					"1 tbsp honey or agave, whisked in until dissolved",
					"2 tbsp mixed chia and pumpkin seeds, scattered at the table"
				]
			}
		],
		directions: [
			{
				title: "1. Make the syrup before you cut anything",
				body: "Whisk the lime juice, zest and honey together in the bottom of your serving bowl until the honey has completely dissolved — it will not disperse later once fruit is in the way. Having the syrup ready means every piece of fruit can go straight into acid as you cut it, which is what keeps the banana and mango from browning.",
				image: {
					src: "/images/woman-in-kitchen-2.png",
					alt: "Cutting tropical fruit on a board"
				},
				bodyAfterImage:
					"Taste the syrup on its own and make it sharper than seems reasonable. Once five kinds of sweet fruit are in the bowl it will need every bit of that acidity."
			},
			{
				title: "2. Cut firm to soft, turning as you go",
				body: "Start with the pineapple, then the mango, then the kiwi, turning each batch through the syrup before adding the next. Leave the strawberries and banana until the end — strawberries bruise and banana starts breaking down almost immediately. Turn the whole bowl gently two or three times with a large spoon rather than stirring."
			},
			{
				title: "3. Add the seeds at the table",
				body: "Chill the bowl for ten minutes if you have time; cold sharpens the flavours. Scatter the chia and pumpkin seeds over just before it goes out — stirred in early, chia absorbs the syrup and turns gelatinous, and the pumpkin seeds soften. Added at the last moment they stay crunchy against the soft fruit, which is the whole point of them."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "212.5 kcal" },
			{ nutrient: "Total Fat", unit: "4.8 g" },
			{ nutrient: "Protein", unit: "4.1 g" },
			{ nutrient: "Carbohydrate", unit: "42.6 g" },
			{ nutrient: "Cholesterol", unit: "0.0 mg" }
		],
		nutritionNote:
			"Values are per serving, based on six servings. All of the sugar here is from the fruit and the honey."
	},
	{
		slug: "cauliflower-walnut-vegetarian-taco-meat",
		title: "Cauliflower Walnut Vegetarian Taco Meat",
		tag: "Eastern",
		excerpt:
			"Roasted cauliflower and walnuts pulsed to a mince, with enough spice and browning to stand up in a taco.",
		cardImage: "/images/cauliflower-walnut.png",
		heroImage: "/images/cauliflower-walnut.png",
		fill: "#DBE2E5",
		author: "Dianne Russell",
		authorImage: "/images/user-3.png",
		date: "23 October 2022",
		prepTime: "15 Minutes",
		cookTime: "25 Minutes",
		totalTime: "30 minutes",
		intro:
			"Most vegetable taco fillings fail on texture — they go soft and end up as a wet paste in the shell. Roasting the cauliflower and walnuts hard before you chop them drives off water and builds the browned, savoury edges that make it read as mince. Pulse rather than blitz: you are after a coarse, irregular crumb, and three seconds too long turns the whole lot into hummus.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"1 large cauliflower, broken into small florets",
					"120g walnuts",
					"2 tbsp olive oil",
					"1 red onion, finely diced",
					"8 small corn tortillas, warmed"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"2 tsp smoked paprika and 1 tsp ground cumin",
					"1 tbsp tomato purée",
					"1 tbsp soy sauce, for savoury depth"
				]
			}
		],
		directions: [
			{
				title: "1. Roast the cauliflower and walnuts hard",
				body: "Heat the oven to 220°C. Toss the florets with the oil and a good pinch of salt and spread them on a tray in a single layer — crowded, they steam. Roast for eighteen minutes, adding the walnuts for the last six so they toast without burning. You want dark brown edges on the cauliflower, not pale gold. That colour is the flavour.",
				image: {
					src: "/images/smiling-chef.png",
					alt: "Roasted cauliflower on a baking tray"
				},
				bodyAfterImage:
					"Let both cool for five minutes before they go anywhere near the processor. Hot cauliflower steams inside the bowl and turns the crumb damp."
			},
			{
				title: "2. Pulse to a crumb, not a paste",
				body: "Put the walnuts in the food processor first and pulse three or four times until they are coarse gravel. Add the cauliflower and pulse in short bursts, scraping down between each, until it looks like coarse mince. Stop while some pieces are still recognisably bigger than others — the unevenness is what gives it texture in the shell."
			},
			{
				title: "3. Fry it back with the spices",
				body: "Soften the onion in a wide pan, then add the paprika, cumin and tomato purée and cook for a minute until it smells toasted rather than raw. Tip in the cauliflower crumb and the soy sauce and fry over a decent heat for five minutes, spreading it out and letting it catch before stirring. Taste for salt, pile into warm tortillas and eat immediately."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "394.8 kcal" },
			{ nutrient: "Total Fat", unit: "24.6 g" },
			{ nutrient: "Protein", unit: "11.3 g" },
			{ nutrient: "Carbohydrate", unit: "36.2 g" },
			{ nutrient: "Cholesterol", unit: "0.0 mg" }
		],
		nutritionNote:
			"Values are per serving, based on four servings of two tacos each. Walnuts account for most of the fat."
	},
	{
		slug: "rainbow-chicken-salad-with-almond-honey-mustard",
		title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
		tag: "Healthy",
		excerpt:
			"Poached chicken shredded into raw vegetables, with an emulsified honey-mustard dressing that actually clings.",
		cardImage: "/images/rainbow-chicken-salad.png",
		heroImage: "/images/rainbow-chicken-salad.png",
		fill: "#FF6363",
		author: "Wade Warren",
		authorImage: "/images/user-1.png",
		date: "5 November 2022",
		prepTime: "15 Minutes",
		cookTime: "15 Minutes",
		totalTime: "25 minutes",
		intro:
			"Poaching is the right way to cook chicken you intend to shred cold — it stays moist in a way roasted breast does not. Bring the water to a bare simmer, drop the heat and leave it alone; a rolling boil seizes the outside and squeezes the moisture out. Everything else is knife work, and the dressing takes two minutes if you add the oil slowly enough for it to emulsify.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"3 chicken breasts",
					"1 red pepper and 1 yellow pepper, finely sliced",
					"2 carrots, cut into matchsticks",
					"1 small red cabbage, shredded",
					"50g flaked almonds, toasted dry in a pan"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"2 tbsp wholegrain mustard and 1 tbsp honey",
					"2 tbsp cider vinegar",
					"5 tbsp olive oil, added in a thin stream"
				]
			}
		],
		directions: [
			{
				title: "1. Poach the chicken and let it cool in the water",
				body: "Put the breasts in a pan, cover with cold water by a couple of centimetres and season the water generously. Bring it just to the point where bubbles start breaking the surface, then turn the heat off entirely, cover, and leave it for fifteen minutes. Cooling the chicken in its own poaching liquid is what keeps it juicy — lifting it out hot lets it dry as it cools.",
				image: {
					src: "/images/male-chef-dressed.png",
					alt: "Shredding poached chicken with two forks"
				},
				bodyAfterImage:
					"Shred it with two forks along the grain rather than chopping it. Torn edges hold dressing; clean cut cubes shed it."
			},
			{
				title: "2. Emulsify the dressing properly",
				body: "Whisk the mustard, honey and vinegar together first — the mustard is the emulsifier and it needs to be evenly dispersed before any oil goes in. Then add the oil in a thin, steady stream while whisking constantly. It should thicken and turn opaque. Poured in all at once it will separate within a minute and sit in a slick at the bottom of the bowl."
			},
			{
				title: "3. Dress the hard vegetables first",
				body: "Toss the cabbage and carrot with about half the dressing and leave them for five minutes — they are robust enough to soften slightly and take on flavour. Add the peppers, the shredded chicken and the rest of the dressing, turn it all through, and scatter the toasted almonds over at the very end so they keep their snap."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "445.1 kcal" },
			{ nutrient: "Total Fat", unit: "26.3 g" },
			{ nutrient: "Protein", unit: "34.7 g" },
			{ nutrient: "Carbohydrate", unit: "18.9 g" },
			{ nutrient: "Cholesterol", unit: "82.4 mg" }
		],
		nutritionNote:
			"Values are per serving, based on four servings. Roughly half the fat comes from the dressing."
	},
	{
		slug: "barbeque-spicy-sandwiches-with-chips",
		title: "Barbeque Spicy Sandwiches with Chips",
		tag: "Snack",
		excerpt:
			"Slow-cooked barbecue pulled pork piled into soft rolls, with quick pickled onions cutting the richness.",
		cardImage: "/images/barbeque-spicy-sandwich.png",
		heroImage: "/images/barbeque-spicy-sandwich.png",
		fill: "#DBE2E5",
		author: "Albert Flores",
		authorImage: "/images/user-6.png",
		date: "18 November 2022",
		prepTime: "10 Minutes",
		cookTime: "10 Minutes",
		totalTime: "20 minutes",
		intro:
			"This is the fast version, built on shoulder you cooked at the weekend or bought ready-pulled. The part worth getting right is the finish: reheat the meat in a hot dry pan rather than a microwave so some of it crisps, and dress it after that rather than before. Sauce added to cold meat in a cold pan just steams, and you lose the burnt-edge texture that makes the sandwich.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"600g cooked pulled pork shoulder",
					"4 soft brioche or potato rolls",
					"1 red onion, sliced into thin rings",
					"200g kettle chips, to serve alongside",
					"A handful of coriander leaves"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"4 tbsp barbecue sauce, plus more for the buns",
					"1 tsp chipotle paste or hot sauce",
					"3 tbsp cider vinegar, for the quick pickle"
				]
			}
		],
		directions: [
			{
				title: "1. Pickle the onions while the pan heats",
				body: "Put the onion rings in a bowl with the vinegar and a good pinch of salt and sugar, and press them down so they are submerged. Ten minutes is enough to take the raw bite off and turn them bright pink. They are doing a real job here — pulled pork is fatty and sweet, and without something sharp the sandwich becomes cloying by the third bite.",
				image: {
					src: "/images/woman-in-kitchen.png",
					alt: "Crisping pulled pork in a hot pan"
				},
				bodyAfterImage:
					"Do not skip the salt in the pickle. Vinegar alone softens the onion but leaves it tasting thin and harsh."
			},
			{
				title: "2. Crisp the pork before saucing it",
				body: "Get a heavy pan hot and dry, then spread the pork out in it in a thin layer. Leave it undisturbed for two or three minutes so the underside catches and browns, then turn it once. Only now add the barbecue sauce and chipotle, and let it bubble and reduce around the meat for another minute until it clings rather than pools."
			},
			{
				title: "3. Build it so the bun survives",
				body: "Toast the cut faces of the rolls in the same pan — the sealed, slightly crisp surface stops the sauce soaking straight through. Spread a little extra barbecue sauce on the base, pile the pork on, top with a generous tangle of drained pickled onions and the coriander. Serve with the chips on the side, and eat it standing over the sink."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "724.9 kcal" },
			{ nutrient: "Total Fat", unit: "38.2 g" },
			{ nutrient: "Protein", unit: "42.6 g" },
			{ nutrient: "Carbohydrate", unit: "52.1 g" },
			{ nutrient: "Cholesterol", unit: "128.5 mg" }
		],
		nutritionNote:
			"Values are per sandwich, based on four servings including the chips."
	},
	{
		slug: "firecracker-vegan-lettuce-wraps",
		title: "Firecracker Vegan Lettuce Wraps",
		tag: "Vegan",
		excerpt:
			"Crumbled tofu fried hard and tossed in a chilli-garlic glaze, spooned into cold lettuce cups.",
		cardImage: "/images/firecracker-vegan.png",
		heroImage: "/images/firecracker-vegan.png",
		fill: "#DBE2E5",
		author: "Leslie Alexander",
		authorImage: "/images/user-4.png",
		date: "2 December 2022",
		prepTime: "10 Minutes",
		cookTime: "10 Minutes",
		totalTime: "20 minutes",
		intro:
			"Tofu only crisps if the water is out of it, so press it properly — twenty minutes under something heavy, not a hopeful squeeze. Crumbling rather than cubing gives you far more surface area and a texture much closer to mince. The glaze goes on off the heat at the very end: it is mostly sugar, and in a hot pan it goes from glossy to burnt in about fifteen seconds.",
		ingredients: [
			{
				heading: "For main dish",
				items: [
					"400g firm tofu, pressed for 20 minutes and crumbled",
					"2 tbsp cornflour, for dusting",
					"2 tbsp neutral oil",
					"2 baby gem lettuces, leaves separated and chilled",
					"2 spring onions and a handful of coriander, to finish"
				]
			},
			{
				heading: "For the sauce",
				items: [
					"3 tbsp sweet chilli sauce and 1 tbsp sriracha",
					"2 garlic cloves, finely grated",
					"1 tbsp rice vinegar, to stop it being purely sweet"
				]
			}
		],
		directions: [
			{
				title: "1. Press, crumble and dust the tofu",
				body: "Wrap the block in a clean tea towel, sit a chopping board and a couple of tins on top, and leave it for twenty minutes. Crumble it into irregular pieces with your fingers rather than cutting it — ragged edges catch and crisp. Toss the crumbs with the cornflour until lightly dusted all over; that thin coating is what turns crisp rather than the tofu itself.",
				image: {
					src: "/images/woman-in-kitchen-2.png",
					alt: "Crumbling pressed tofu into a hot pan"
				},
				bodyAfterImage:
					"Separate the lettuce leaves now and put them in iced water. Cold, firm cups against hot filling is most of the appeal of this dish."
			},
			{
				title: "2. Fry it in a single layer and leave it be",
				body: "Heat the oil in a wide pan until it shimmers, then add the tofu in one layer and do not touch it for three minutes. It needs uninterrupted contact to brown, and stirring early tears the coating off. Turn it in sections with a fish slice and give it another three or four minutes until most pieces are deep golden and audibly crunchy."
			},
			{
				title: "3. Glaze off the heat and fill the cups",
				body: "Stir the sweet chilli, sriracha, garlic and vinegar together in a bowl. Take the pan off the heat entirely, wait ten seconds, then pour the glaze in and toss quickly — the residual heat is enough to make it cling without burning the sugar. Spoon into the drained lettuce cups and scatter the spring onion and coriander over. Assemble at the table so nothing wilts."
			}
		],
		nutrition: [
			{ nutrient: "Calories", unit: "286.4 kcal" },
			{ nutrient: "Total Fat", unit: "16.7 g" },
			{ nutrient: "Protein", unit: "18.2 g" },
			{ nutrient: "Carbohydrate", unit: "19.8 g" },
			{ nutrient: "Cholesterol", unit: "0.0 mg" }
		],
		nutritionNote:
			"Values are per serving, based on four servings. Sweet chilli sauce accounts for most of the carbohydrate."
	}
]

// Card tiles for the home-page grids. These are selections from RECIPES rather
// than a second copy of the same facts, so a card and its detail page cannot
// disagree about a title, tag or cook time. `image` overrides where a grid uses
// a different crop of the same dish.

const tile = (slug: string, image?: string): Recipe => {
	const recipe = RECIPES.find((entry) => entry.slug === slug)
	if (!recipe) throw new Error(`Unknown recipe slug: ${slug}`)
	return {
		title: recipe.title,
		imageSrc: image ?? recipe.cardImage,
		fill: recipe.fill,
		tag: recipe.tag,
		time: recipe.totalTime,
		slug: recipe.slug
	}
}

/** The only tile that is not a recipe, and the only one that does not link. */
const AD_TILE: Recipe = {
	title: "Ad Banner",
	imageSrc: "/images/ad-banner.png",
	fill: "none"
}

export const GRID_INFO: Recipe[] = [
	tile("big-and-juicy-wagyu-beef-cheeseburger"),
	tile("fresh-lime-roasted-salmon-with-ginger-sauce"),
	tile("strawberry-oatmeal-pancake-with-honey-syrup"),
	tile("fresh-and-healthy-mixed-mayonnaise-salad"),
	tile("chicken-meatballs-with-cream-cheese"),
	AD_TILE,
	tile("fruity-pancake-with-orange-and-blueberry"),
	tile("one-pot-chicken-and-rice"),
	tile("creamy-chicken-and-bacon-pasta")
]

export const MORE_RECIPES: Recipe[] = [
	tile("mixed-tropical-fruit-salad-with-superfood-boosts"),
	tile("big-and-juicy-wagyu-beef-cheeseburger", "/images/big-and-juicy-wagyu.png"),
	tile("healthy-japanese-fried-rice"),
	tile("cauliflower-walnut-vegetarian-taco-meat"),
	tile("rainbow-chicken-salad-with-almond-honey-mustard"),
	tile("barbeque-spicy-sandwiches-with-chips"),
	tile("firecracker-vegan-lettuce-wraps"),
	tile("chicken-ramen-soup-with-mushroom")
]
