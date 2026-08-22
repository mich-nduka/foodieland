"use client"

import Link from "next/link"
import { Heart } from "react-feather"
import styled from "styled-components"
import { Badge, BadgeWrapper } from "../Badges/Badges"
import { CutleryIcon, ClockIcon } from "../Icons/Icons"
import { QUERIES } from "@/constants"

type CardProps = {
	src: string
	title: string
	fill: string
	isAd?: boolean
	background: boolean
	tag?: string
	time?: string
	/** When set, the whole card links through to the recipe page. */
	href?: string
}

const Card = ({
	src,
	title,
	fill,
	isAd,
	background,
	tag,
	time,
	href
}: CardProps) => {
	const card = (
		<CardWrapper
			$isAd={isAd}
			$background={background}
		>
			<CardImageWrapper $isAd={isAd}>
				<CardImage
					src={src}
					alt={title}
				/>
			</CardImageWrapper>
			{!isAd && (
				<>
					<CardTitle>{title}</CardTitle>
					<BadgeWrapper>
						<Badge>
							<ClockIcon
								width={24}
								height={24}
							/>
							<span
								style={{
									marginLeft: "10px",
									color: `rgba(0, 0, 0, 0.6)`
								}}
							>
								{time}
							</span>
						</Badge>
						<Badge>
							<CutleryIcon
								width={24}
								height={24}
							/>
							<span
								style={{
									marginLeft: "10px",
									color: `rgba(0, 0, 0, 0.6)`
								}}
							>
								{tag}
							</span>
						</Badge>
					</BadgeWrapper>
					<IconWrapper>
						<Heart
							size={24}
							fill={fill}
							stroke="none"
						/>
					</IconWrapper>
				</>
			)}
		</CardWrapper>
	)

	return href ? <CardLink href={href}>{card}</CardLink> : card
}

const CardLink = styled(Link)`
	display: block;
	color: inherit;
	text-decoration: none;
	border-radius: 30px;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: translateY(-4px);
	}

	&:focus-visible {
		outline: 2px solid #000000;
		outline-offset: 4px;
	}
`

const CardWrapper = styled.div<{ $isAd?: boolean; $background: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 24px;
	position: relative;
	background: ${(props) =>
		props.$background
			? "#ffffff"
			: `linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%)`};
	border-radius: 30px;
	padding: ${(props) => (props.$isAd ? "0" : "16px")};
	width: 100%;
	max-width: 400px;
	/* Height follows the content instead of clipping it when text wraps. */
	min-height: 434px;
`

const CardImageWrapper = styled.div<{ $isAd?: boolean }>`
	width: 100%;
	${(props) =>
		props.$isAd
			? "height: 100%;"
			: /* Was a fixed 368x250 box; the ratio is what actually matters. */
				"aspect-ratio: 368 / 250;"}
	border-radius: ${(props) => (props.$isAd ? "0" : "16px")};
	overflow: hidden;
`

const CardImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`

const CardTitle = styled.h3`
	text-align: left;
	font-size: 18px;
	max-width: 24ch;
`

const IconWrapper = styled.div`
	position: absolute;
	background-color: white;
	width: 48px;
	height: 48px;
	right: 36px;
	top: 36px;

	@media ${QUERIES.phoneAndSmaller} {
		right: 28px;
		top: 28px;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
`

export default Card
