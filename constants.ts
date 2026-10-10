import type { Category } from "@/types"

/**
 * Modern classic theme tokens. Styling itself lives in Tailwind
 * (`app/globals.css` `@theme`); these are kept for data-driven UI only.
 */
export const CLASSIC_THEME = {
  colors: {
    paper: "#FAF7F0",
    cream: "#F5EFE3",
    parchment: "#EFE6D3",
    ink: "#1C1917",
    muted: "#6B6259",
    burgundy: "#7C2D2D",
    brass: "#C9A227",
    line: "#E7DEC9",
  },
  fonts: {
    display: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif",
    sans: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif",
  },
} as const

export const INFO: Category[] = [
  {
    gradient: `linear-gradient(180deg,
    rgba(112, 130, 70, 0) 0%,
		rgba(112, 130, 70, 0.1) 100%)`,
    label: "Breakfast",
    image: "/images/breakfast.png",
  },
  {
    gradient: `linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)`,
    label: "Vegan",
    image: "/images/vegan.png",
  },
  {
    gradient: `linear-gradient(180deg, rgba(255, 102, 102, 0) 0%, rgba(255, 102, 102, 0.1) 100%)`,
    label: "Meat",
    image: "/images/meat.png",
  },
  {
    gradient: `linear-gradient(180deg, rgba(255, 204, 0, 0) 0%, rgba(255, 204, 0, 0.1) 100%)`,
    label: "Dessert",
    image: "/images/dessert.png",
  },
  {
    gradient: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)`,
    label: "Lunch",
    image: "/images/lunch.png",
  },
  {
    gradient: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)`,
    label: "Chocolate",
    image: "/images/chocolate.png",
  },
]
