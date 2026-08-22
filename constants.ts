import type { Category } from "@/types"

export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '340deg 65% 47%',
  secondary: '240deg 60% 63%',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
	phone: 600,
	tablet: 1080,
	laptop: 1300
}

/**
 * All of these are `max-width` queries, so each one matches the named device
 * *and everything narrower* — hence "…AndSmaller". Used as:
 *
 *     @media ${QUERIES.tabletAndSmaller} { ... }
 */
export const QUERIES = {
	phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
	tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
	laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`
}


export const THEME = {
  QUERIES,
  COLORS,
  WEIGHTS
}

export const INFO: Category[] = [
	{
		gradient: `linear-gradient(180deg,
    rgba(112, 130, 70, 0) 0%,
		rgba(112, 130, 70, 0.1) 100%)`,
		label: "Breakfast",
		image: "/images/breakfast.png"
	},
	{
		gradient: `linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)`,
		label: "Vegan",
		image: "/images/vegan.png"
	},
	{
		gradient: `linear-gradient(180deg, rgba(255, 102, 102, 0) 0%, rgba(255, 102, 102, 0.1) 100%)`,
		label: "Meat",
		image: "/images/meat.png"
	},
	{
		gradient: `linear-gradient(180deg, rgba(255, 204, 0, 0) 0%, rgba(255, 204, 0, 0.1) 100%)`,
		label: "Dessert",
		image: "/images/dessert.png"
	},
	{
		gradient: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)`,
		label: "Lunch",
		image: "/images/lunch.png"
	},
	{
		gradient: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)`,
		label: "Chocolate",
		image: "/images/chocolate.png"
	}
]