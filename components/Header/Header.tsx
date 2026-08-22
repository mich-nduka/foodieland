"use client"
import Link from "next/link"
import styled from "styled-components"
import { Facebook, Twitter, Instagram, Menu, X } from "react-feather"
import { useEffect, useState } from "react"
import { QUERIES } from "@/constants"
import type { Route } from "@/types"

const Header = ({ links }: { links: Route[] }) => {
	const [isOpen, setIsOpen] = useState(false)
	// Navigating away closes the panel; done in the click handler rather than an
	// effect on the pathname, which would be a render-cascading anti-pattern.
	const close = () => setIsOpen(false)

	useEffect(() => {
		if (!isOpen) return
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false)
		}
		window.addEventListener("keydown", onKeyDown)
		return () => window.removeEventListener("keydown", onKeyDown)
	}, [isOpen])

	return (
		<HeaderWrapper>
			<NavWrapper>
				<LogoWrapper>
					<Logo>
						Foodieland<Dot>.</Dot>
					</Logo>
				</LogoWrapper>
				<MenuButton
					type="button"
					aria-label={isOpen ? "Close menu" : "Open menu"}
					aria-expanded={isOpen}
					aria-controls="site-nav"
					onClick={() => setIsOpen((open) => !open)}
				>
					{isOpen ? <X /> : <Menu />}
				</MenuButton>
				{/*
				  On desktop this is `display: contents`, so LinkWrapper and
				  IconWrapper stay direct flex children of NavWrapper and the
				  original three-column layout is untouched. Below the tablet
				  breakpoint it becomes the collapsible panel itself.
				*/}
				<Collapsible
					id="site-nav"
					$isOpen={isOpen}
				>
					<LinkWrapper>
						<NavList>
							{links.map((link, index) => (
								<NavItem key={index}>
									<NavLink
										href={link.path}
										onClick={close}
									>
										{link.name}
									</NavLink>
								</NavItem>
							))}
						</NavList>
					</LinkWrapper>
					<IconWrapper>
						<IconLink
							href={"/facebook.com"}
							onClick={close}
						>
							<Icon>
								<Facebook />
							</Icon>
						</IconLink>
						<IconLink
							href={"/instagram.com"}
							onClick={close}
						>
							<Icon>
								<Instagram />
							</Icon>
						</IconLink>
						<IconLink
							href={"/x.com"}
							onClick={close}
						>
							<Icon>
								<Twitter />
							</Icon>
						</IconLink>
					</IconWrapper>
				</Collapsible>
			</NavWrapper>
		</HeaderWrapper>
	)
}

const HeaderWrapper = styled.div`
	position: sticky;
	z-index: 100;
	top: 0;
	width: 100%;
	padding: 20px var(--page-gutter);
	border-bottom: 1px solid grey;
	backdrop-filter: blur(20px);
`

const NavWrapper = styled.nav`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 12px 24px;
`

const MenuButton = styled.button`
	display: none;
	background: none;
	border: none;
	color: inherit;
	cursor: pointer;
	/* Negative margin keeps a 40px tap target without adding visual bulk. */
	padding: 8px;
	margin: -8px;

	@media ${QUERIES.tabletAndSmaller} {
		display: flex;
	}
`

const Collapsible = styled.div<{ $isOpen: boolean }>`
	display: contents;

	@media ${QUERIES.tabletAndSmaller} {
		display: ${(props) => (props.$isOpen ? "flex" : "none")};
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
		flex-basis: 100%;
		padding: 20px 0 8px;
		/* The header is sticky, so a long menu must scroll rather than overflow. */
		max-height: calc(100dvh - 5rem);
		overflow-y: auto;
	}
`
const LogoWrapper = styled.div`
	flex: 1;

	@media ${QUERIES.tabletAndSmaller} {
		flex: 1 1 auto;
	}
`
const Logo = styled.span`
	width: 110px;
	height: 30px;
	font-family: var(--lobster-font);
	font-size: 24px;
	font-weight: 400;
`

const IconWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	gap: clamp(16px, 3vw, 40px);

	@media ${QUERIES.tabletAndSmaller} {
		flex: 0 0 auto;
		justify-content: flex-start;
		gap: 28px;
	}
`

const Icon = styled.div`
	transition: transform 0.2s ease-in-out;
`

const IconLink = styled(Link)`
	text-decoration: none;
	color: black;

	&:hover ${Icon}{
		transform: scale(1.1);
	}
`

const LinkWrapper = styled.div`
	flex: 2;

	@media ${QUERIES.tabletAndSmaller} {
		flex: 0 0 auto;
		width: 100%;
	}
`
const NavList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	list-style: none;
	margin: 0;
	padding: 0;

	@media ${QUERIES.tabletAndSmaller} {
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
	}
`
const NavLink = styled(Link)`
	display: block;
	color: #000000;
	text-decoration: none;
	font-size: 16px;
	font-weight: 400;
	cursor: pointer;
	transition: transform 0.2s ease-in-out;

	/* Full-width rows give each link a comfortable tap target. */
	@media ${QUERIES.tabletAndSmaller} {
		padding: 12px 0;
		font-size: 18px;
	}
`

const NavItem = styled.li`
	margin-left: clamp(16px, 3vw, 40px);

	@media ${QUERIES.tabletAndSmaller} {
		margin: 0;
		width: 100%;
	}

	&:hover ${NavLink} {
		transform: translateY(-2px);
		font-weight: 600;
	}
`

const Dot = styled.span`
	font-size: 24px;
	color: #f2c94c;
	
`

export default Header
