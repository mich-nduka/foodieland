import styled from "styled-components"
import Card from "../Card/Card"
import { GRID_INFO, INSTAGRAM_POSTS, MORE_RECIPES } from "@/data"
import { QUERIES } from "@/constants"

export const RecipeGrid = () => {
	return (
		<Grid
			$columns={3}
			$maxWidth={"1fr"}
		>
			{GRID_INFO.map(({ imageSrc, title, fill, tag, time, slug }) => (
				<Card
					key={title}
					href={slug && `/recipes/${slug}`}
					src={imageSrc}
					title={title}
					fill={fill}
					isAd={title === "Ad Banner"}
					background={false}
					tag={tag}
					time={time}
				/>
			))}
		</Grid>
	)
}

export const CheckOutGrid = () => {
	return (
		<GridWrapper>
			<Grid
				$columns={4}
				$maxWidth={"300px"}
				$gap={"80px"}
			>
				{INSTAGRAM_POSTS.map((post, index) => (
					<GridPost
						key={index}
						src={post.post}
					/>
				))}
			</Grid>
		</GridWrapper>
	)
}

export const MoreRecipesGrid = ({ number }: { number: number }) => {
	return (
		<Grid
			$columns={4}
			$maxWidth={"1fr"}
			$gap={"40px"}
		>
			{MORE_RECIPES.slice(0, number).map(
				({ imageSrc, title, fill, tag, time, slug }) => (
					<Card
						key={title}
						href={slug && `/recipes/${slug}`}
						src={imageSrc}
						title={title}
						fill={fill}
						background={true}
						tag={tag}
						time={time}
					/>
				)
			)}
		</Grid>
	)
}

type GridProps = {
	$columns: number
	$maxWidth: string
	$gap?: string
}

const Grid = styled.div<GridProps>`
	display: grid;
	/*
	  A zero track minimum is deliberate. Any floor here (the original was
	  minmax(400px, 1fr)) makes the row demand columns * floor + gaps no matter
	  how little room the container has, and the grid punches out of the page —
	  3 x 400px + gaps needs ~1290px of content box, which a 1301px viewport
	  does not have once gutters and padding are taken out.

	  The cards cap their own width instead, and justify-items centres them in
	  whatever track they get, so they scale down rather than overflow.
	*/
	grid-template-columns: repeat(
		${(props) => props.$columns},
		minmax(0, ${(props) => props.$maxWidth})
	);
	justify-items: center;
	grid-gap: ${(props) => props.$gap || "45px"};
	margin-top: clamp(48px, 8vw, 100px);
	padding: 0 clamp(0px, 3vw, 40px);

	/* Step the column count down rather than letting tracks be crushed. */
	@media ${QUERIES.laptopAndSmaller} {
		grid-template-columns: repeat(
			${(props) => Math.min(props.$columns, 2)},
			minmax(0, ${(props) => props.$maxWidth})
		);
	}

	@media ${QUERIES.phoneAndSmaller} {
		grid-template-columns: minmax(0, ${(props) => props.$maxWidth});
	}
`

const GridWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`

const GridPost = styled.img`
	width: 100%;
	height: auto;
	aspect-ratio: 300 / 446;
	object-fit: cover;
	object-position: center;
`
