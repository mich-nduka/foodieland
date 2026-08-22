"use client"

import styled from "styled-components"
import { QUERIES } from "@/constants"
import { Button } from "../Button/Button"
import { PlayCircle } from "react-feather"
import { Badge, BadgeWrapper, UserBadge } from "../Badges/Badges"
import { CutleryIcon, ClockIcon } from "../Icons/Icons"

export const MainHero = () => {
	return (
		<MainHeroSection>
			<LeftDecor />
			<MainHeroWrapper>
				<MainHeroTextWrapper>
					<MainHeroTitle>Spicy delicious chicken wings</MainHeroTitle>
					<MainSubText>
						Crisp outside, tender inside, and glazed in chilli, garlic and
						honey. One pan, thirty minutes, and ingredients you almost
						certainly have already.
					</MainSubText>
					<BadgeWrapper>
						<Badge>
							<ClockIcon
								width={24}
								height={24}
							/>
							<span style={{ marginLeft: "10px" }}>30 minutes</span>
						</Badge>
						<Badge>
							<CutleryIcon
								width={24}
								height={24}
							/>
							<span style={{ marginLeft: "10px" }}>Chicken</span>
						</Badge>
					</BadgeWrapper>
					<MainBadgeWrapper>
						<MainBadge
							src="/images/Badge.png"
							alt="badge"
						/>
					</MainBadgeWrapper>
					<FlexWrapper>
						<UserBadge
							title={"Dianne Russell"}
							subtitle={"15 March 2022"}
						/>
						<Button
							$backgroundColor="#000000"
							$textColor="#ffffff"
							$width="200px"
						>
							<span style={{ fontSize: "16px", marginRight: "10px" }}>
								View Recipes
							</span>
							<PlayCircle size={24} />
						</Button>
					</FlexWrapper>
				</MainHeroTextWrapper>
				<MainHeroImageWrapper>
					<MainHeroImage
						src="/images/hero-image.png"
						alt="hero"
					/>
				</MainHeroImageWrapper>
			</MainHeroWrapper>
			<RightDecor />
		</MainHeroSection>
	)
}

export const SubHero = () =>{
	return (
		<SubHeroSection>
			<SubHeroWrapper>
				<SubHeroTextWrapper>
					<SubHeroTitle>
						Everyone can be a chef in their own kitchen
					</SubHeroTitle>
					<MainSubText>
						Every recipe here is written for an ordinary kitchen. No
						specialist equipment, no ingredients you can only find in one
						shop, and steps you can follow with one hand while the other is
						stirring.
					</MainSubText>
					<Button
						$backgroundColor="#000000"
						$textColor="#ffffff"
						$width="150px"
						$margin="80px 0 0 0"
					>
						<span style={{ fontSize: "16px", marginRight: "10px" }}>
							Learn More
						</span>
					</Button>
				</SubHeroTextWrapper>
				<SubHeroImageWrapper>
					<GradientDecor />
					<SubHeroImage
						src="/images/male-chef-dressed.png"
						alt="hero"
					/>
				</SubHeroImageWrapper>
			</SubHeroWrapper>
		</SubHeroSection>
	)
}

const MainHeroSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 40px;
	gap: 40px;

	/* The side rails are pure decoration — they're the first thing to go. */
	@media ${QUERIES.laptopAndSmaller} {
		gap: 0;
	}
`
const SubHeroSection = styled(MainHeroSection)`
	justify-content: center;
	margin-top: var(--section-gap);
`

const MainHeroWrapper = styled.div`
	display: flex;
	width: 100%;
	max-width: 1440px;
	/*
	  min-height, not height: at wide-but-not-huge widths the headline wraps to
	  four lines and the centred column grew taller than a fixed 640px box,
	  spilling up under the sticky header instead of pushing the hero taller.
	*/
	min-height: clamp(320px, 50vw, 640px);
	margin: 0 16px;

	/* Side-by-side text and image stop fitting well below the laptop range. */
	@media ${QUERIES.laptopAndSmaller} {
		flex-direction: column;
		margin: 0 var(--page-gutter);
	}
`

const SubHeroWrapper = styled(MainHeroWrapper)`
	justify-content: center;
	align-items: center;
	gap: clamp(24px, 4vw, 60px);
`

const MainHeroTextWrapper = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #e7fafe;
	border-radius: 64px 0 0 64px;
	padding: clamp(24px, 4vw, 50px);
	gap: 24px;

	/* Once stacked, the rounded corners belong on the top edge, not the left. */
	@media ${QUERIES.laptopAndSmaller} {
		border-radius: clamp(24px, 5vw, 64px) clamp(24px, 5vw, 64px) 0 0;
	}
`

const SubHeroTextWrapper = styled(MainHeroTextWrapper)`
	background-color: #ffffff;
	border-radius: 0;
	padding: 0;
`

const MainHeroImageWrapper = styled.div`
	position: relative;
	flex: 0 2 660px;
	border-radius: 0 64px 64px 0;
	overflow: hidden;

	@media ${QUERIES.laptopAndSmaller} {
		flex: 0 0 auto;
		aspect-ratio: 16 / 10;
		border-radius: 0 0 clamp(24px, 5vw, 64px) clamp(24px, 5vw, 64px);
	}
`

const SubHeroImageWrapper = styled(MainHeroImageWrapper)`
	position: relative;
	flex: 1;
	height: clamp(280px, 45vw, 567px);
	border-radius: 30px;

	@media ${QUERIES.laptopAndSmaller} {
		width: 100%;
		aspect-ratio: auto;
		border-radius: 30px;
	}
`

const MainHeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: right center;
`
const SubHeroImage = styled(MainHeroImage)`
	height: 100%;
	position: absolute;
	left: -10px;
	/* z-index: 1; */
	object-fit: contain;
	object-position: center;
`

const MainHeroTitle = styled.h1`
	font-size: clamp(2.25rem, 1rem + 4.6vw, 5.25rem);
	font-weight: 700;
	width: 100%;
	max-width: 600px;
	line-height: 1.1;
	text-wrap: balance;

	/*
	  Stacked, the badge tucks into the panel's top-right corner rather than
	  overhanging it, so the headline keeps clear of that corner. The panel is
	  still wide at these sizes, so reserving the strip costs nothing.
	*/
	@media ${QUERIES.laptopAndSmaller} {
		/*
		  The 600px cap sizes the headline against the narrow text column of the
		  side-by-side layout. Stacked, the panel spans the full page width, so
		  keeping the cap left the headline at 4 lines across 40% of the panel.
		*/
		max-width: none;
		padding-right: clamp(120px, 20vw, 170px);
	}

	/*
	  On a phone that same reservation eats nearly half the line box and the
	  headline collapses into a narrow column. The seal is decorative and
	  illegible at this size, so it goes and the headline gets the full width.
	*/
	@media ${QUERIES.phoneAndSmaller} {
		padding-right: 0;
	}
`

const SubHeroTitle = styled(MainHeroTitle)`
	font-size: clamp(2rem, 1rem + 3.4vw, 4rem);
`

const MainSubText = styled.p`
	font-size: 16px;
	width: 100%;
	max-width: 50ch;
	line-height: 1.75;
	color: rgba(0, 0, 0, 0.6);
`

const MainBadgeWrapper = styled.div`
	position: absolute;
	top: 50px;
	right: -50px;
	bottom: 440px;
	z-index: 1;

	/*
	  The badge hangs 50px past the panel's right edge. That overhang is what
	  pushed the page wider than the viewport on small screens, so pull it back
	  inside once there's no room to spare.
	*/
	@media ${QUERIES.laptopAndSmaller} {
		top: 16px;
		right: 16px;
		bottom: auto;
	}

	@media ${QUERIES.phoneAndSmaller} {
		display: none;
	}
`

const MainBadge = styled.img`
	width: clamp(80px, 12vw, 150px);
	height: clamp(80px, 12vw, 150px);
	object-fit: contain;
`

const LeftDecor = styled.div`
	flex-basis: 80px;
	height: clamp(300px, 50vw, 600px);
	background-color: #e7fafe;
	border-radius: 0 32px 32px 0;

	@media ${QUERIES.laptopAndSmaller} {
		display: none;
	}
`
const RightDecor = styled.div`
	flex-basis: 80px;
	height: clamp(300px, 50vw, 600px);
	background-color: #e7fafe;
	border-radius: 32px 0 0 32px;

	@media ${QUERIES.laptopAndSmaller} {
		display: none;
	}
`

const GradientDecor = styled.div`
	background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
	position: absolute;
	width: min(100%, 651px);
	height: clamp(300px, 40vw, 500px);
	top: 68px;
	right: -35px;
	z-index: -2;
	border-radius: 30px;
`
const FlexWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
	margin-top: clamp(40px, 7vw, 100px);
`
