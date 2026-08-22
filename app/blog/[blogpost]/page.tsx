"use client"

import {
	EmailBox,
	EmailBoxWrapper,
	InboxImage,
	InboxImageOneWrapper,
	InboxImageTwoWrapper,
	InboxSection
} from "@/app/page"
import { Title } from "@/components/Layout/Layout"
import { Button } from "@/components/Button/Button"
import { AuthorMetaData } from "@/components/Card/BlogCard"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"
import { BLOG_POSTS, NEWSLETTER_COPY } from "@/data"
import { notFound, useParams } from "next/navigation"
import { Facebook } from "react-feather"
import { Instagram } from "react-feather"
import { Twitter } from "react-feather"
import styled from "styled-components"
import { QUERIES } from "@/constants"
import {
	ArticleHeading,
	ProseText,
	SectionHeading,
	SectionText,
	SubsectionHeading
} from "@/components/Typography/Typography"

const BlogPostPage = () => {
	const { blogpost } = useParams<{ blogpost: string }>()
	const postTitle = blogpost.replaceAll("%20", " ")
	const post = BLOG_POSTS.find((post) => post.title === postTitle)

	if (!post) notFound()

	const { title, author, authorImage, blogLargeImage } = post

	return (
		<BlogPage>
			<HeadContentWrapper>
				<Title>{title}</Title>
				<AuthorMetaData
					author={author}
					authorImage={authorImage}
				/>
				<SectionText
					$maxWidth="100ch"
					$align="center"
					$margin="48px auto 0"
				>
					We spoke to head chef Andreas Paula about twenty years on the line,
					why he still cooks on his days off, and the advice he gives every
					commis who walks through the door.
				</SectionText>
			</HeadContentWrapper>
			<ImageWrapper>
				<Thumbnail
					src={blogLargeImage}
					alt={title}
				/>
			</ImageWrapper>
			<MainArea>
				<MainContent>
					<TextBlock>
						<ArticleHeading style={{ marginBottom: "24px" }}>
							How did you start out in the food industry?
						</ArticleHeading>
						<ProseText>
							I washed dishes in a hotel kitchen the summer I turned
							sixteen, entirely by accident — a friend dropped out and I
							took the shift. I stayed four years. Nobody teaches you
							anything for the first six months; you earn your way into
							being taught. By the time I was allowed near a pan I already
							knew how the room worked, and that mattered more than any
							technique I picked up later.
						</ProseText>
					</TextBlock>
					<TextBlock $margin="80px 0 40px 80px">
						<ArticleHeading style={{ marginBottom: "24px" }}>
							What do you like most about your job?{" "}
						</ArticleHeading>
						<ProseText>
							Service itself. Two hundred plates go out over three hours
							and there is no room to think about anything else, which is a
							rare thing in ordinary life. I also like that the work is
							finished at the end of every night. You clean down, you go
							home, and tomorrow starts empty.
						</ProseText>
					</TextBlock>
					<TextBlock $margin="40px 0 40px 80px">
						<ArticleHeading>
							Do you cook at home on your days off?
						</ArticleHeading>
						<ImageWrapper
							$width="100%"
							$height="600px"
							$margin="32px 0 0 0"
						>
							<Thumbnail
								src="/images/woman-in-kitchen.png"
								alt={title}
							/>
						</ImageWrapper>
						<ProseText>
							Constantly, but nothing like what we do at work. On a day off
							it is one pan, something braised, and no garnish at all.
							Cooking for other people professionally makes you very
							protective of your right to cook badly for yourself.
						</ProseText>
					</TextBlock>
					<TextBlock $margin="20px 0 40px 80px">
						<ArticleHeading style={{ marginBottom: "24px" }}>
							What would your advice be to young people looking to get their
							foot in the door?
						</ArticleHeading>
						<ProseText>
							Turn up early, stay late for the first year, and be the
							person who asks what needs doing before being told. That is
							genuinely most of it — kitchens are small and people notice.
							Then learn to sharpen your own knives. You would be amazed how
							many people never bother, and it changes how you work.
						</ProseText>
					</TextBlock>
					<Decor>
						<p
							style={{
								fontStyle: "italic",
								fontSize: "clamp(1.25rem, 1rem + 1.4vw, 2.25rem)",
								lineHeight: 1.4,
								// "semibold" is not a valid CSS font-weight keyword.
								fontWeight: 600
							}}
						>
							{" "}
							“Nobody teaches you anything for the first six months. You
							earn your way into being taught.”
						</p>
					</Decor>
					<TextBlock $margin="80px 0 40px 80px">
						<ArticleHeading
							style={{ marginBottom: "24px", maxWidth: "50ch" }}
						>
							What is the biggest misconception that people have about being
							a professional chef?
						</ArticleHeading>
						<ProseText>
							That it is creative work most of the time. It is not. It is
							repetition, consistency and cleaning, and the creative part is
							maybe an hour a week if you are lucky. The people who last are
							the ones who find the repetition satisfying, not the ones
							chasing invention.
						</ProseText>
					</TextBlock>
				</MainContent>
				<SocialsWrapper>
					<h5>SHARE THIS ON:</h5>
					<Facebook />
					<Instagram />
					<Twitter />
				</SocialsWrapper>
			</MainArea>
			<FullBleed>
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
					Check out the delicious recipe
				</SubsectionHeading>
				<MoreRecipesGrid number={4} />
			</FullBleed>
		</BlogPage>
	)
}

const BlogPage = styled.div`
	margin: 0 var(--page-gutter);
`

/*
 * Cancels the page gutter so this block runs edge to edge. It reads the same
 * custom property the gutter is set from, so the two can't drift apart the way
 * a hardcoded -80px did.
 */
const FullBleed = styled.div`
	margin: 0 calc(-1 * var(--page-gutter)) var(--section-gap);
`

const HeadContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 80px;
	margin-bottom: 64px;
`

const ImageWrapper = styled.div<{
	$width?: string
	$height?: string
	$margin?: string
}>`
	width: ${(props) => props.$width || "100%"};
	height: ${(props) => props.$height || "800px"};
	max-height: 80vh;
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	margin: ${(props) => props.$margin || " 64px 0 80px 0px"};

	/* A fixed 800px hero is taller than most phones; fall back to a ratio. */
	@media ${QUERIES.tabletAndSmaller} {
		height: auto;
		aspect-ratio: 3 / 2;
	}
`

const TextBlock = styled.div<{ $margin?: string }>`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-basis: 100%;
	margin: ${(props) => props.$margin || "0 80px"};

	/* The generous indents these carry are a desktop-only luxury. */
	@media ${QUERIES.tabletAndSmaller} {
		margin: 32px 0;
	}
`

const Thumbnail = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`
const MainArea = styled.div`
	display: flex;
	gap: 50px;

	@media ${QUERIES.tabletAndSmaller} {
		flex-direction: column-reverse;
		gap: 32px;
	}
`
const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 3;
	min-width: 0;
`
const SocialsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	flex: 1;

	/* Runs as a row under the article once the column layout collapses. */
	@media ${QUERIES.tabletAndSmaller} {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
`

const Decor = styled.div`
	width: 100%;
	max-width: 920px;
	margin: 0 clamp(0px, 3vw, 40px);
	background: linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
	padding: clamp(24px, 4vw, 40px);
`

export default BlogPostPage
