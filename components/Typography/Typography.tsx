"use client"

import styled from "styled-components"
import { QUERIES } from "@/constants"

/**
 * Section heading — replaces the hardcoded `fontSize: "48px"` that was inlined
 * on every section `<h2>`. Scales from 28px on a phone to 48px on desktop.
 */
export const SectionHeading = styled.h2`
	font-size: clamp(1.75rem, 1.1rem + 2.7vw, 3rem);
	line-height: 1.2;
	text-wrap: balance;
`

/**
 * Heading for a block *inside* a section — "Ingredients", "Directions",
 * "Nutrition Information". These were hardcoded at 32px, which stayed 32px on a
 * 390px phone and outweighed everything around it.
 */
export const SubsectionHeading = styled.h2`
	font-size: clamp(1.5rem, 1.3rem + 0.9vw, 2rem);
	font-weight: bold;
	line-height: 1.25;
	text-wrap: balance;
`

/**
 * Body copy sitting under a `SectionHeading`.
 *
 * These paragraphs previously carried an inline `minWidth: "500px"`, which is
 * what forced the whole page to scroll sideways on anything narrower than a
 * tablet. The measure is now capped from above only, so the text reflows all
 * the way down to a 320px viewport.
 */
export const SectionText = styled.p<{
	$maxWidth?: string
	$align?: string
	$flex?: string
	$margin?: string
}>`
	width: 100%;
	max-width: ${(props) => props.$maxWidth || "50rem"};
	margin: ${(props) => props.$margin || "24px auto"};
	line-height: 1.75;
	color: rgba(0, 0, 0, 0.6);
	${(props) => (props.$align ? `text-align: ${props.$align};` : "")}
	${(props) => (props.$flex ? `flex: ${props.$flex};` : "")}
`

/**
 * Heading for a question or step inside an article ("How did you start out in
 * the food industry?"). Was a hardcoded 24px with a 36px line-height — a fixed
 * line-height stops tracking the font once the font itself becomes fluid.
 */
export const ArticleHeading = styled.h2`
	font-size: clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem);
	font-weight: bold;
	line-height: 1.4;
	letter-spacing: -0.04em;
	text-wrap: balance;
`

/**
 * Long-form body copy — recipe steps and article paragraphs.
 *
 * Justified text needs a wide measure to look right. In the narrow column left
 * on a phone it opens rivers of whitespace between words, so the justification
 * and the hanging indent are both desktop-only.
 */
export const ProseText = styled.p<{
	$indent?: boolean
	$marginTop?: string
}>`
	margin-top: ${(props) => props.$marginTop || "0"};
	margin-left: ${(props) => (props.$indent ? "clamp(0px, 4vw, 34px)" : "0")};
	line-height: 1.75;
	letter-spacing: -0.02em;
	color: rgba(0, 0, 0, 0.6);
	text-align: justify;

	@media ${QUERIES.tabletAndSmaller} {
		text-align: left;
	}
`
