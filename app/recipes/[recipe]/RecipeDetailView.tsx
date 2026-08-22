"use client"

import { ImageBadge } from "@/components/Badges/Badges"
import { RecipeCard } from "@/components/Card/RecipeCard"
import { PrintIcon, ShareIcon } from "@/components/Icons/Icons"
import { NEWSLETTER_COPY, SIDEBAR_RECIPES } from "@/data"
import { Fragment } from "react"
import styled from "styled-components"
import {
	EmailBox,
	EmailBoxWrapper,
	InboxImage,
	InboxImageOneWrapper,
	InboxImageTwoWrapper,
	InboxSection
} from "@/app/page"
import { Button } from "@/components/Button/Button"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"
import { QUERIES } from "@/constants"
import {
	AdWrapper,
	Ad,
	IngredientsSideBox,
	InfoArea,
	MainArea,
	MainSection,
	PageWrapper,
	Title
} from "@/components/Layout/Layout"
import {
	ProseText,
	SectionHeading,
	SectionText,
	SubsectionHeading
} from "@/components/Typography/Typography"
import type { RecipeDetail } from "@/types"

const RecipeDetailView = ({ recipe }: { recipe: RecipeDetail }) => {
	return (
		<PageWrapper>
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
					<VideoWrapper>
						<Thumbnail
							src={recipe.heroImage}
							alt={recipe.title}
						/>
					</VideoWrapper>
				</MainArea>
				<InfoArea>
					<FlexWrapper>
						<FlexItemWrapper>
							<IconWrapper>
								<PrintIcon
									width={24}
									height={24}
								/>
							</IconWrapper>
							<p>PRINT</p>
						</FlexItemWrapper>
						<FlexItemWrapper>
							<IconWrapper>
								<ShareIcon
									width={24}
									height={24}
								/>
							</IconWrapper>
							<p>SHARE</p>
						</FlexItemWrapper>
					</FlexWrapper>
					<InfoBox>
						<SubsectionHeading style={{ marginBottom: "24px" }}>
							Nutrition Information
						</SubsectionHeading>
						{recipe.nutrition.map(({ nutrient, unit }) => (
							<FactBox key={nutrient}>
								<span
									style={{
										color: `rgba(0, 0, 0, 0.6)`,
										fontSize: "18px"
									}}
								>
									{nutrient}
								</span>
								<span style={{ fontSize: "18px" }}>{unit}</span>
							</FactBox>
						))}
						<p
							style={{
								marginTop: "clamp(32px, 8vw, 90px)",
								textAlign: "center",
								color: `rgba(0, 0, 0, 0.6)`
							}}
						>
							{recipe.nutritionNote}
						</p>
					</InfoBox>
				</InfoArea>
			</MainSection>
			<ProseText $marginTop="clamp(40px, 8vw, 80px)">{recipe.intro}</ProseText>
			<IngredientsSection>
				<IngredientsMainBox>
					<SubsectionHeading style={{ marginBottom: "clamp(24px, 5vw, 48px)" }}>
						Ingredients
					</SubsectionHeading>
					{recipe.ingredients.map(({ heading, items }, groupIndex) => (
						<Fragment key={heading}>
							<h3 style={groupIndex > 0 ? { marginTop: "64px" } : undefined}>
								{heading}
							</h3>
							{items.map((item) => (
								<CheckboxLabel key={item}>
									<Input
										type="checkbox"
										name={item}
										value={item}
									/>{" "}
									<span>{item}</span>
								</CheckboxLabel>
							))}
						</Fragment>
					))}
				</IngredientsMainBox>
				<IngredientsSideBox>
					{SIDEBAR_RECIPES.map(({ title, image, author }) => (
						<ImageBadge
							key={title}
							image={image}
							title={title}
							subtitle={`By ${author}`}
							width={"180px"}
						/>
					))}
					<AdWrapper>
						<Ad
							src="/images/ad-banner.png"
							alt="ad"
						/>
					</AdWrapper>
				</IngredientsSideBox>
			</IngredientsSection>
			<DirectionsSection>
				<SubsectionHeading style={{ marginTop: "clamp(48px, 9vw, 88px)" }}>
					Directions
				</SubsectionHeading>
				{recipe.directions.map((step) => (
					<Step key={step.title}>
						<CheckboxLabel
							$flexDirection={"column"}
							$alignItems={"flex-start"}
							$borderBottom={"none"}
						>
							<StepHeading>
								<Input
									type="checkbox"
									name={step.title}
									value={step.title}
								/>{" "}
								<h3>{step.title}</h3>
							</StepHeading>
							<ProseText $indent>{step.body}</ProseText>
						</CheckboxLabel>
						{step.image && (
							<ImageWrapper>
								<Thumbnail
									src={step.image.src}
									alt={step.image.alt}
								/>
							</ImageWrapper>
						)}
						{step.bodyAfterImage && (
							<ProseText $indent>{step.bodyAfterImage}</ProseText>
						)}
					</Step>
				))}
			</DirectionsSection>
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
				You may like these recipe too
			</SubsectionHeading>
			<MoreRecipesGrid number={4} />
		</PageWrapper>
	)
}

const Step = styled.div`
	border-bottom: 1px solid #ccc;
	padding-bottom: 48px;
`

const StepHeading = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

const FlexWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 200px;
	gap: 32px;
	justify-content: flex-end;

	/* Nothing to align against once the sidebar is stacked underneath. */
	@media ${QUERIES.tabletAndSmaller} {
		height: auto;
		justify-content: flex-start;
	}
`

const FlexItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`

const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: clamp(20px, 4vw, 32px);
	background-color: #e7fafe;
	border-radius: 10px;
	width: 100%;
	/* min-height, so the nutrition rows can't be clipped when they wrap. */
	min-height: 600px;
`

const FactBox = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: #ccc 1px solid;
	padding-bottom: 16px;
`

const VideoWrapper = styled.div`
	width: 100%;
	/* Ratio instead of a fixed 600px so the frame never letterboxes. */
	aspect-ratio: 16 / 10;
	max-height: 600px;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
`

const ImageWrapper = styled.div`
	width: 100%;
	aspect-ratio: 16 / 10;
	max-height: 600px;
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	margin: 48px 0 48px clamp(0px, 3vw, 34px);
`

const Thumbnail = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`

const IngredientsSection = styled.section`
	display: flex;
	gap: 40px;
	margin-top: 80px;

	@media ${QUERIES.tabletAndSmaller} {
		flex-direction: column;
	}
`

const IngredientsMainBox = styled.div`
	flex: 2;
	min-width: 0;
`

const DirectionsSection = styled.section`
	width: 100%;
	max-width: 1135px;
`

const IconWrapper = styled.div`
	flex: 0 0 auto;
	width: clamp(56px, 10vw, 80px);
	height: clamp(56px, 10vw, 80px);
	background-color: #e7fafe;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Input = styled.input`
	&[type="checkbox"] {
		appearance: none; /* Remove default style */
		width: 24px; /* Adjust size */
		height: 24px; /* Adjust size */
		/*
		  These sit in a flex row next to the item text. Without this they are
		  shrinkable flex items, and once the text wraps (which it always does on
		  a phone) the circles get squeezed into ellipses.
		*/
		flex-shrink: 0;
		border-radius: 50%; /* Make it circular */
		border: 2px solid #ccc; /* Border color */
		background-color: white; /* Default background */
		cursor: pointer;
		position: relative;
		transition: background-color 0.3s, border-color 0.3s; /* Add transitions */
	}

	&[type="checkbox"]:checked {
		background-color: #000; /* Background color when checked */
		border-color: #000; /* Border color when checked */
	}

	&:checked + span {
		text-decoration: line-through; /* Add strikethrough when checked */
		color: #ccc; /* Change text color when checked */
	}

	&[type="checkbox"]:checked::after {
		content: "✔";
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		transform: scale(1.2);
	}
`

const CheckboxLabel = styled.label<{
	$alignItems?: string
	$flexDirection?: string
	$borderBottom?: string
}>`
	display: flex;
	align-items: ${(props) => props.$alignItems || "center"};
	flex-direction: ${(props) => props.$flexDirection || "row"};
	gap: 10px;
	width: 100%;
	padding: clamp(16px, 4vw, 27px) 0;
	border-bottom: ${(props) => props.$borderBottom || "1px solid #ccc"};
`

export default RecipeDetailView
