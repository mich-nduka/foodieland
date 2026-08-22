import { Footer } from "@/components/Footer/Footer"
import GlobalStyles from "./GlobalStyles"
import Header from "@/components/Header/Header"
import { ROUTES as routes } from "@/data"
import StyledComponentsRegistry from "@/lib/registry"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
	title: "Foodieland",
	description: "A food delivery app"
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					<Header links={routes} />
					{children}
					<GlobalStyles />
					<Footer />
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
