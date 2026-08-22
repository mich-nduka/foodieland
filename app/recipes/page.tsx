"use client"

import styled from "styled-components"
import Card from "@/components/Card/Card"
import { Button } from "@/components/Button/Button"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"
import { NEWSLETTER_COPY, RECIPES } from "@/data"
import { QUERIES } from "@/constants"
import { PageWrapper, Title } from "@/components/Layout/Layout"
import {
	SectionHeading,
	SectionText,
	SubsectionHeading
} from "@/components/Typography/Typography"
import {
	EmailBox,
	EmailBoxWrapper,
	InboxImage,
	InboxImageOneWrapper,
	InboxImageTwoWrapper,
	InboxSection
} from "../page"

function Recipes() {
	return (
		<PageWrapper>
			<Header>
				<Title>Recipes</Title>
				<SectionText $align="center">
					Everything we have cooked, written up properly — with the timings,
					the quantities and the bits that usually go wrong.
				</SectionText>
			</Header>

			<RecipeGrid>
				{RECIPES.map((recipe) => (
					<Card
						key={recipe.slug}
						href={`/recipes/${recipe.slug}`}
						src={recipe.cardImage}
						title={recipe.title}
						fill={recipe.fill}
						background={false}
						tag={recipe.tag}
						time={recipe.totalTime}
					/>
				))}
			</RecipeGrid>

			<InboxSection>
				<SectionHeading>Deliciousness to your inbox</SectionHeading>
				<SectionText
					$maxWidth="37.5rem"
					$align="center"
				>
					{NEWSLETTER_COPY}
				</SectionText>
				<EmailBoxWrapper>
					<EmailBox
						type="email"
						placeholder="Your email address..."
					/>
					<Button
						$backgroundColor="#000000"
						$textColor="#ffffff"
						$width="160px"
					>
						Subscribe
					</Button>
				</EmailBoxWrapper>
				<InboxImageOneWrapper>
					<InboxImage src="/images/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png" />
				</InboxImageOneWrapper>
				<InboxImageTwoWrapper>
					<InboxImage src="/images/Photo-plate.png" />
				</InboxImageTwoWrapper>
			</InboxSection>

			<SubsectionHeading
				style={{
					marginBottom: "clamp(24px, 5vw, 48px)",
					textAlign: "center"
				}}
			>
				More to explore
			</SubsectionHeading>
			<MoreRecipesGrid number={4} />
		</PageWrapper>
	)
}

const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-top: 80px;
`

/*
 * Mirrors the stepped column counts in SectionGrid, but tops out at two so the
 * four full recipes read as a pair of rows rather than a thin single line.
 */
const RecipeGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 400px));
	justify-content: center;
	justify-items: center;
	gap: clamp(32px, 5vw, 45px);
	margin-top: clamp(48px, 8vw, 100px);

	@media ${QUERIES.phoneAndSmaller} {
		grid-template-columns: minmax(0, 400px);
	}
`

export default Recipes
