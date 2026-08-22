import styled from "styled-components"
import { QUERIES } from "@/constants"

type UserBadgeProps = {
	title: string
	subtitle: string
	image?: string
}

type ImageBadgeProps = {
	title: string
	subtitle: string
	image: string
	width?: string
}

export const UserBadge = ({ title, subtitle, image }: UserBadgeProps) => {
	return (
		<BadgeWrapper>
			<UserImageWrapper>
				<UserImage
					src={image || "/images/user.png"}
					alt={title}
				/>
			</UserImageWrapper>
			<TextBlock>
				<h2 style={{ fontSize: "18px" }}>{title}</h2>
				<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)` }}>
					{subtitle}
				</p>
			</TextBlock>
		</BadgeWrapper>
	)
}

export const ImageBadge = ({ title, subtitle, image, width }: ImageBadgeProps) => {
	return (
		<BadgeWrapper>
			<ImageWrapper $width={width}>
				<Image
					src={image}
					alt={title}
				/>
			</ImageWrapper>
			<TextWrapper>
				<h2 style={{ fontSize: "18px" }}>{title}</h2>
				<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)`, marginTop: "16px" }}>
					{subtitle}
				</p>
			</TextWrapper>
		</BadgeWrapper>
	)
}

export const BadgeWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`

export const Badge = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.05);
	border-radius: 30px;
	padding: 8px 16px;
`

const UserImageWrapper = styled.div`
	flex: 0 0 auto;
	width: 70px;
	height: 70px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ImageWrapper = styled.div<{ $width?: string }>`
	/* $width becomes an upper bound so the badge can shrink on narrow screens. */
	width: 100%;
	max-width: ${props => props.$width || "100px"};
	flex-shrink: 0;
	border-radius: 10px;
	overflow: hidden;

	/*
	  A fixed 180px thumbnail is over half the width of a phone-width sidebar,
	  leaving too little for the title beside it.
	*/
	@media ${QUERIES.phoneAndSmaller} {
		max-width: min(${props => props.$width || "100px"}, 40%);
	}
`

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`

export const IconWrapper = styled.div`
	border-radius: 0;
	flex: 0 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
`

const UserImage = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`

export const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	justify-content: center;
	/*
	  Was flex-basis: 100%, which is harmless in a nowrap row but drops the
	  text onto its own line the moment BadgeWrapper is allowed to wrap.
	  Growing from a zero basis fills the same space without forcing a break.
	*/
	flex: 1 1 0;
	min-width: 0;
`
const TextWrapper = styled(TextBlock)`
	/*
	  Grows from a zero basis rather than a 200px one. Flex line-breaking uses
	  the *hypothetical* main size, so a 200px basis pushed this onto its own row
	  next to a 180px thumbnail in any container under ~400px — the text ended up
	  below the image with the row's right half empty.
	*/
	flex: 1 1 0;
`