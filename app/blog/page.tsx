"use client"
import styled from "styled-components"
import {
	Ad,
	AdWrapper,
	IngredientsSideBox,
	MainArea,
	MainSection,
	Title
} from "@/components/Layout/Layout"
import {
	EmailBox,
	EmailBoxWrapper,
	InboxImage,
	InboxImageOneWrapper,
	InboxImageTwoWrapper,
	InboxSection
} from "../page"
import { Button } from "@/components/Button/Button"
import { ImageBadge } from "@/components/Badges/Badges"
import { BlogCard } from "@/components/Card/BlogCard"
import { BLOG_POSTS, NEWSLETTER_COPY, SIDEBAR_RECIPES } from "@/data"
import { Pagination } from "@/components/Pagination/Pagination"
import { QUERIES } from "@/constants"
import {
	SectionHeading,
	SectionText
} from "@/components/Typography/Typography"

function Blog() {
	return (
		<BlogSection>
			<BlogTextWrapper>
				<Title>Blog & Article</Title>
				<SectionText
					$align="center"
					$margin="40px auto 0"
					style={{ color: "#ccc" }}
				>
					Interviews, technique guides and notes from our test kitchen. Longer
					reads for when you want to know why a recipe works, not just how to
					follow it.
				</SectionText>
				<SearchBoxWrapper>
					<EmailBox
						type="text"
						placeholder="Search article, news or recipe..."
					/>
					<Button
						$backgroundColor="#000000"
						$textColor="#ffffff"
						$width="160px"
					>
						Search
					</Button>
				</SearchBoxWrapper>
			</BlogTextWrapper>
			<MainSection>
				<MainArea>
					{BLOG_POSTS.map(
						({ title, blogSmallImage, author, authorImage, excerpt }) => (
							<BlogCard
								key={title}
								imageSrc={blogSmallImage}
								title={title}
								subtitle={excerpt}
								width={"400px"}
								author={author}
								authorImage={authorImage}
							/>
						)
					)}
				</MainArea>
				<SideBox>
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
				</SideBox>
			</MainSection>
			<Pagination />
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
		</BlogSection>
	)
}

const BlogSection = styled.section`
	margin: 0 var(--page-gutter);
`
const SearchBoxWrapper = styled(EmailBoxWrapper)`
	border: #ccc 1px solid;
	margin-top: 80px;
	width: 100%;
	max-width: 700px;
`
const BlogTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 80px;
`

const SideBox = styled(IngredientsSideBox)`
	@media ${QUERIES.tabletAndSmaller} {
		align-items: stretch;
	}
`

export default Blog
