import style from "styled-components"

export const Pagination = () => {
  return (
		<FlexWidthWrapper>
			<PaginationWrapper>
				<PageButton>1</PageButton>
				<PageButton>2</PageButton>
				<PageButton>3</PageButton>
				<PageButton>4</PageButton>
				<PageButton>5</PageButton>
				<PageButton>...</PageButton>
				<PageButton>10</PageButton>
			</PaginationWrapper>
		</FlexWidthWrapper>
  )
}
const FlexWidthWrapper = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: clamp(48px, 7vw, 80px) 0 var(--section-gap) 0;
`

const PaginationWrapper = style.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(8px, 2vw, 16px);

  > *:first-child {
    background-color: #000;
    color: #fff;
  }
`
const PageButton = style.button`
  background-color: #fff;
  width: clamp(44px, 9vw, 64px);
  height: clamp(44px, 9vw, 64px);
  border: #ccc solid 1px;
  border-radius: 16px;
  padding: 0;
  font-size: clamp(0.875rem, 0.8rem + 0.4vw, 1.125rem);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`