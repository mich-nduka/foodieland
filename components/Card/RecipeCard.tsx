"use client"

import styled from "styled-components"
import { BadgeWrapper, IconWrapper, TextBlock, UserBadge } from "../Badges/Badges"
import { ClockIcon, CutleryIcon } from "../Icons/Icons"
import { QUERIES } from "@/constants"

type RecipeCardProps = {
	author: string
	authorImage: string
	date: string
	prepTime: string
	cookTime: string
	tag: string
}

/** The meta strip above a recipe: who wrote it, when, and how long it takes. */
export const RecipeCard = ({
	author,
	authorImage,
	date,
	prepTime,
	cookTime,
	tag
}: RecipeCardProps) => {
	return (
		<FlexWrapper>
			<FlexItem>
				<UserBadge
					title={author}
					subtitle={date}
					image={authorImage}
				/>
			</FlexItem>
			<FlexItem>
				<BadgeWrapper>
					<IconWrapper>
						<ClockIcon
							width={24}
							height={24}
						/>
					</IconWrapper>
					<TextBlock>
						<h2 style={{ fontSize: "12px", fontWeight: "bold" }}>
							PREP TIME
						</h2>
						<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)` }}>
							{prepTime}
						</p>
					</TextBlock>
				</BadgeWrapper>
			</FlexItem>
			<FlexItem>
				<BadgeWrapper>
					<IconWrapper>
						<ClockIcon
							width={24}
							height={24}
						/>
					</IconWrapper>
					<TextBlock>
						<h2 style={{ fontSize: "12px", fontWeight: "bold" }}>
							COOK TIME
						</h2>
						<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)` }}>
							{cookTime}
						</p>
					</TextBlock>
				</BadgeWrapper>
			</FlexItem>
			<FlexItem>
				<BadgeWrapper>
					<IconWrapper>
						<CutleryIcon
							width={24}
							height={24}
						/>
					</IconWrapper>
					<TextBlock>
						<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)` }}>
							{tag}
						</p>
					</TextBlock>
				</BadgeWrapper>
			</FlexItem>
		</FlexWrapper>
	)
}

const FlexWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 24px 0;
	width: 100%;
	max-width: 1024px;

	> *:not(:last-child) {
		border-right: 1px solid #ccc;
	}

	> :nth-child(2),
	> :nth-child(3),
	> :nth-child(4) {
		justify-content: center;
	}

	/* Two per row: a divider only belongs between the pair, not after it. */
	@media ${QUERIES.tabletAndSmaller} {
		> :nth-child(2),
		> :nth-child(3),
		> :nth-child(4) {
			justify-content: flex-start;
		}
		> *:nth-child(even) {
			border-right: none;
		}
	}

	/* One per row: the vertical dividers become horizontal rules. */
	@media ${QUERIES.phoneAndSmaller} {
		gap: 0;

		> *:not(:last-child) {
			border-right: none;
			border-bottom: 1px solid #ccc;
		}
		> * {
			padding: 16px 0;
		}
	}
`

/*
 * Track sizing lives here rather than on `FlexWrapper > *`. That selector ties
 * with this component's own class on specificity, and styled-components emits
 * this block later, so the child rule would silently win the tie.
 */
const FlexItem = styled.div`
	flex: 1;
	min-width: 0;
	display: flex;

	@media ${QUERIES.tabletAndSmaller} {
		flex: 1 1 50%;
	}

	@media ${QUERIES.phoneAndSmaller} {
		flex: 1 1 100%;
	}
`
