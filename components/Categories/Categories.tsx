"use client"

import styled from "styled-components"
import { Button } from "../Button/Button"
import { SectionHeading } from "../Typography/Typography"
import type { Category } from "@/types"
import { QUERIES } from "@/constants"

const Categories = ({ info }: { info: Category[] }) => {
	return (
		<CategoriesWrapper>
			<CategoriesTextWrapper>
				<SectionHeading>Categories</SectionHeading>
				<Button
					$backgroundColor="#E7FAFE"
					$textColor="#000000"
				>
					<span style={{ fontSize: "16px", fontWeight: 600 }}>
						View All Categories
					</span>
				</Button>
			</CategoriesTextWrapper>
			<CategoryCardWrapper>
				{info.map(({ gradient, label, image }) => (
					<CategoryCard
						key={label}
						$colorGradient={gradient}
					>
						<CatergoryCardImageWrapper>
							<CategoryCardImage
								src={image}
								alt={label}
							/>
						</CatergoryCardImageWrapper>
						<span style={{ fontSize: "18px", fontWeight: 600 }}>{label}</span>
					</CategoryCard>
				))}
			</CategoryCardWrapper>
		</CategoriesWrapper>
	)
}

const CategoriesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: var(--section-gap) var(--page-gutter);
	/* The row gap has to clear the image that hangs above each card. */
	gap: clamp(80px, 10vw, 120px) 0;
`

const CategoriesTextWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
`

const CategoryCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: clamp(24px, 4vw, 48px) clamp(16px, 3vw, 40px);

	/* Only spread them edge-to-edge when all six fit on one row. */
	@media (min-width: ${1300 / 16}rem) {
		justify-content: space-between;
		gap: 60px 0;
	}
`

const CategoryCard = styled.div<{ $colorGradient: string }>`
	width: 180px;
	height: 152px;
	background: ${(props) => props.$colorGradient};
	border-radius: 30px;
	text-align: center;

	@media ${QUERIES.phoneAndSmaller} {
		width: 140px;
		height: 128px;
	}
`
const CatergoryCardImageWrapper = styled.div`
	/*
	  Was offset with top/left magic numbers tied to the 180px card. Centring
	  with an auto margin keeps the overhang correct at any card width.
	*/
	width: clamp(72px, 18vw, 100px);
	height: clamp(72px, 18vw, 100px);
	margin: calc(-1 * clamp(36px, 9vw, 50px)) auto 0;
`

const CategoryCardImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: center;
`

export default Categories
