"use client"

import Link from "next/link"
import styled from "styled-components"
import { FOOTER_ROUTES } from "@/data"
import { Twitter } from "react-feather"
import { Instagram } from "react-feather"
import { Facebook } from "react-feather"
import { QUERIES } from "@/constants"
import { SectionText } from "../Typography/Typography"

export const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<FooterWrapper>
			<ContentWrapper>
				<LogoWrapper>
					<Logo>Foodieland</Logo>
					<SectionText
						$maxWidth="37.5rem"
						$margin="0"
						style={{ color: "grey" }}
					>
						Recipes worth cooking twice — written for real kitchens,
						everyday ingredients and ordinary weeknights.
					</SectionText>
				</LogoWrapper>
				<LinkWrapper>
					<NavList>
						{FOOTER_ROUTES.map((route, index) => (
							<NavItem key={index}>
								<NavLink href={route.path}>{route.name}</NavLink>
							</NavItem>
						))}
					</NavList>
				</LinkWrapper>
			</ContentWrapper>
			<FooterBottom>
				<TextWrapper>
					<p style={{ color: "grey", textAlign: "center" }}>
						&copy;{currentYear} Foodieland. Powered by{" "}
						<span style={{ color: "#FF7967" }}>Vercel</span>
					</p>
				</TextWrapper>
				<IconWrapper>
					<IconLink href={"/facebook.com"}>
						<Icon>
							<Facebook />
						</Icon>
					</IconLink>
					<IconLink href={"/instagram.com"}>
						<Icon>
							<Instagram />
						</Icon>
					</IconLink>
					<IconLink href={"/x.com"}>
						<Icon>
							<Twitter />
						</Icon>
					</IconLink>
				</IconWrapper>
			</FooterBottom>
		</FooterWrapper>
	)
}

const FooterWrapper = styled.div`
	position: sticky;
	z-index: 100;
	top: 0;
	width: 100%;
	padding: 20px var(--page-gutter);
	border-bottom: 1px solid grey;
	backdrop-filter: blur(20px);
`

const ContentWrapper = styled.nav`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 32px;
	padding-bottom: 48px;
	border-bottom: 1px solid grey;

	@media ${QUERIES.tabletAndSmaller} {
		flex-direction: column;
		align-items: flex-start;
	}
`

const FooterBottom = styled.div`
	font-family: var(--eudoxus-font);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 24px;
	padding: 48px 0;

	@media ${QUERIES.phoneAndSmaller} {
		flex-direction: column;
	}
`
const LogoWrapper = styled.div`
	flex: 1 1 300px;
`
const Logo = styled.span`
	width: 110px;
	height: 30px;
	font-family: var(--lobster-font);
	font-size: 24px;
	font-weight: 400;
	margin-bottom: 16px;
`

const LinkWrapper = styled.div`
	flex: 2 1 260px;
`
const NavList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	list-style: none;
	margin: 0;
	padding: 0;

	@media ${QUERIES.tabletAndSmaller} {
		justify-content: flex-start;
	}
`
const NavLink = styled(Link)`
	display: block;
	color: #000000;
	text-decoration: none;
	font-size: 16px;
	font-weight: 400;
	transition: all 0.3s ease;
	cursor: pointer;
	transition: transform 0.2s ease-in-out;
`

const NavItem = styled.li`
	margin-left: clamp(16px, 3vw, 40px);

	@media ${QUERIES.tabletAndSmaller} {
		margin: 0 clamp(16px, 3vw, 40px) 0 0;
	}

	&:hover ${NavLink} {
		transform: translateY(-2px);
		font-weight: 600;
	}
`
const IconWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: clamp(20px, 4vw, 40px);
`

const Icon = styled.div`
	transition: transform 0.2s ease-in-out;
`

const IconLink = styled(Link)`
	text-decoration: none;
	color: black;

	&:hover ${Icon} {
		transform: scale(1.1);
	}
`

const TextWrapper = styled.div`
	flex: 1 1 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`
