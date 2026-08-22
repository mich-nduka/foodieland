import Link from "next/link"
import styled from "styled-components"
import { QUERIES } from "@/constants"

type AuthorMetaDataProps = {
	author: string
	authorImage: string
}

type BlogCardProps = AuthorMetaDataProps & {
	imageSrc: string
	title: string
	subtitle: string
	width?: string
}

export const BlogCard = ({
	imageSrc,
	title,
	subtitle,
	width,
	author,
	authorImage
}: BlogCardProps) => {
	const linkTitle = title.replaceAll("%20", "-").toLowerCase()
	console.log(linkTitle)
	return (
		<CardWrapper>
			<ImageWrapper $width={width}>
				<Image src={imageSrc} />
			</ImageWrapper>
			<TextBlock>
				<TextLink href={`/blog/${title}`}>
					<h2 style={{ fontSize: "clamp(1.125rem, 1rem + 0.6vw, 1.5rem)", maxWidth: "40ch" }}>
						{title}
					</h2>
				</TextLink>

				<Subtitle>{subtitle}</Subtitle>
				<AuthorMetaData author={author} authorImage={authorImage} />
			</TextBlock>
		</CardWrapper>
	)
}

export const AuthorMetaData = ({ author, authorImage }: AuthorMetaDataProps) => {
  return (
		<UserInfoWrapper>
			<UserInfoItem>
				<UserImageWrapper>
					<Image src={authorImage} />
				</UserImageWrapper>
				<p style={{ fontWeight: "bold" }}>{author}</p>
			</UserInfoItem>
			<UserInfoItem>
				<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)` }}>
					12 November 2021
				</p>
			</UserInfoItem>
		</UserInfoWrapper>
  )
}

/* Justified text opens rivers of whitespace in a narrow column. */
const Subtitle = styled.p`
	font-size: 14px;
	color: rgba(0, 0, 0, 0.6);
	margin-top: 16px;
	max-width: 80ch;
	line-height: 1.6;
	text-align: justify;

	@media ${QUERIES.tabletAndSmaller} {
		text-align: left;
	}
`

const CardWrapper = styled.div`
	display: flex;
	gap: clamp(20px, 3vw, 40px);

	@media ${QUERIES.tabletAndSmaller} {
		flex-direction: column;
	}
`
const ImageWrapper = styled.div<{ $width?: string }>`
	width: 100%;
	max-width: ${(props) => props.$width || "100px"};
	flex-shrink: 0;
	border-radius: 10px;
	overflow: hidden;

	@media ${QUERIES.tabletAndSmaller} {
		max-width: none;
	}
`
const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-basis: 100%;
`
const TextLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`
const UserImageWrapper = styled.div`
	flex: 0 0 auto;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`
const UserInfoWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 30px;

	> *:first-child {
		border-right: #ccc 1px solid;
	}
	> *:last-child {
		padding: 0 32px;
	}

	/* Once these stack, a right-hand divider reads as a stray line. */
	@media ${QUERIES.phoneAndSmaller} {
		gap: 8px;

		> *:first-child {
			border-right: none;
		}
		> *:last-child {
			padding: 0;
		}
	}
`
const UserInfoItem = styled.div`
	min-width: 0;
	flex: 0 1 200px;
	display: inline-flex;
	align-items: center;
	gap: 0 16px;
`
