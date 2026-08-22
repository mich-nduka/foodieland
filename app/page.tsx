"use client"

import styled from "styled-components"
import { MainHero, SubHero } from "@/components/Hero/Hero"
import Categories from "@/components/Categories/Categories"
import {
	CheckOutGrid,
	MoreRecipesGrid,
	RecipeGrid
} from "@/components/SectionGrid/SectionGrid"
import { INFO } from "@/constants"
import { NEWSLETTER_COPY } from "@/data"
import { Button } from "@/components/Button/Button"
import { Instagram } from "react-feather"
import { QUERIES } from "@/constants"
import {
	SectionHeading,
	SectionText
} from "@/components/Typography/Typography"

export default function Home() {
	return (
		<div>
			<main>
				<MainHero />
				{/* Catergories section */}
				<Categories info={INFO} />
				<RecipeSection>
					<SectionHeading>Simple and tasty recipes</SectionHeading>
					<SectionText>
						Weeknight dinners, slow weekend bakes, and everything in between.
						Each one is cooked and re-cooked in our kitchen until it works
						the first time you try it.
					</SectionText>
					<RecipeGrid />
				</RecipeSection>
				<SubHero />
				<InstPostSection>
					<SectionHeading>
						Check out @foodieland on Instagram
					</SectionHeading>
					<SectionText>
						Behind-the-scenes shots, half-eaten plates and the occasional
						kitchen disaster. Follow along to see what we are cooking this
						week.
					</SectionText>
					<CheckOutGrid />
					<Button
						$backgroundColor="#000000"
						$textColor="#ffffff"
						$width="230px"
						$margin="80px 0 0 0"
					>
						<span style={{ fontSize: "16px", marginRight: "10px" }}>
							Visit Our Instagram
						</span>
						<Instagram />
					</Button>
				</InstPostSection>
				<MoreRecipeSection>
					<TextWrapper>
						<SectionHeading style={{ flex: "0 1 600px" }}>
							Try this delicious recipe to make your day
						</SectionHeading>
						<SectionText
							$flex="1 1 320px"
							$margin="0"
						>
							The recipes our readers come back to most — the ones that get
							saved, printed, and eventually splattered with sauce.
						</SectionText>
					</TextWrapper>
					<MoreRecipesGrid number={8} />
				</MoreRecipeSection>
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
			</main>
		</div>
	)
}

const RecipeSection = styled.section`
	margin: var(--section-gap-lg) var(--page-gutter);
	text-align: center;
`

const InstPostSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: var(--section-gap-lg) 0;
	padding: 0 var(--page-gutter) clamp(64px, 12vw, 150px);
	text-align: center;
	background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
	width: 100%;
`

const MoreRecipeSection = styled.section`
	margin: var(--section-gap) var(--page-gutter);
`

const TextWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 24px 40px;
	width: 100%;
	padding: 0 16px;
`

export const InboxSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: var(--section-gap) var(--page-gutter);
	padding: clamp(48px, 8vw, 80px) var(--page-gutter);
	background: #e7f9fd;
	/* Was a fixed 500px, which clipped the copy once it wrapped. */
	min-height: clamp(380px, 45vw, 500px);
	border-radius: clamp(24px, 5vw, 60px);
	position: relative;
	overflow: hidden;
`
export const EmailBoxWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 8px;
	background: #ffffff;
	border-radius: 20px;
	padding: 8px;
	width: 100%;
	max-width: 500px;
	margin-top: clamp(32px, 6vw, 65px);
`

export const InboxImageOneWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	/*
	  These sat at their intrinsic size and swamped the panel on small screens.
	  They're decorative, so they shrink first and drop out on phones.
	*/
	width: clamp(140px, 20vw, 320px);
	pointer-events: none;

	@media ${QUERIES.phoneAndSmaller} {
		display: none;
	}
`
export const InboxImageTwoWrapper = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: clamp(140px, 20vw, 320px);
	pointer-events: none;

	@media ${QUERIES.phoneAndSmaller} {
		display: none;
	}
`

export const InboxImage = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`

export const EmailBox = styled.input`
	flex: 1 1 200px;
	min-width: 0;
	border: none;
	padding: 16px;
	border-radius: 20px;
`
