"use client"

import styled from "styled-components"
import { QUERIES } from "@/constants"

/*
 * Shared page scaffolding. These previously lived in `app/recipes/page.tsx` and
 * were imported across the blog, blog post and contact pages — which meant
 * those pages pulled in a route module just to reach a styled component, and
 * the recipes route could not be restructured without breaking them.
 */

export const PageWrapper = styled.div`
	margin: 0 var(--page-gutter);
`

/* Cancels the page gutter so a block runs edge to edge. */
export const FullBleed = styled.div`
	margin: 0 calc(-1 * var(--page-gutter)) var(--section-gap);
`

export const Title = styled.h1`
	font-size: clamp(2rem, 1rem + 3.4vw, 4rem);
	line-height: 1.15;
	text-wrap: balance;
`

export const MainSection = styled.section`
	display: flex;
	margin-top: 80px;
	gap: 40px;

	@media ${QUERIES.tabletAndSmaller} {
		flex-direction: column;
	}
`

export const MainArea = styled.div`
	flex: 2;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 50px;
`

export const InfoArea = styled.div`
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 24px;
`

export const IngredientsSideBox = styled.div`
	flex: 1;
	min-width: 0;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;

	/*
	  Must stay last: a media query adds no specificity, so this only beats the
	  align-items above it by source order.
	  Stacked, the sidebar spans the page and centring leaves its cards ragged.
	*/
	@media ${QUERIES.tabletAndSmaller} {
		align-items: stretch;
	}
`

export const AdWrapper = styled.div`
	width: 100%;
	max-width: 400px;
	margin-top: 80px;
`

export const Ad = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`
