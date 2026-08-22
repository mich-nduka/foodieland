"use client"

import { useState, type FormEvent } from "react"
import styled from "styled-components"
import { Title } from "@/components/Layout/Layout"
import { ContactNotConfiguredError, sendContactMessage } from "@/lib/contact"
import { Button } from "@/components/Button/Button"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"
import { NEWSLETTER_COPY } from "@/data"
import { QUERIES } from "@/constants"
import {
	SectionHeading,
	SectionText,
	SubsectionHeading
} from "@/components/Typography/Typography"
import {
	EmailBox,
	EmailBoxWrapper,
	InboxImage,
	InboxImageOneWrapper,
	InboxImageTwoWrapper,
	InboxSection
} from "../page"

type Status =
	| { state: "idle" }
	| { state: "sending" }
	| { state: "sent" }
	| { state: "error"; message: string }

function Contact() {
	const [status, setStatus] = useState<Status>({ state: "idle" })

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		// Without this the form does a native GET to the current URL, reloading
		// the page and putting whatever it can reach into the query string.
		event.preventDefault()

		const form = event.currentTarget
		setStatus({ state: "sending" })

		try {
			await sendContactMessage(new FormData(form))
			form.reset()
			setStatus({ state: "sent" })
		} catch (error) {
			setStatus({
				state: "error",
				message:
					error instanceof ContactNotConfiguredError
						? "This form is not connected to a mailbox yet, so your message has not been sent."
						: "Something went wrong sending your message. Please try again."
			})
		}
	}

	return (
		<ContactSection>
			<MainContentWrapper>
				<Title>Contact Us</Title>
				<ContactFormWrapper>
					<ImageWrapper
						$height="500px"
						$margin="64px 0 80px 0px"
					>
						<Thumbnail
							src="/images/smiling-chef.png"
							alt="Chef smiling in a kitchen"
						/>
					</ImageWrapper>
					<ContactFormGrid onSubmit={handleSubmit}>
						<ItemWrapper>
							<FieldLabel htmlFor="contact-name">NAME</FieldLabel>
							<NameInput
								id="contact-name"
								name="name"
								type="text"
								autoComplete="name"
								required
								placeholder="Enter your name..."
							/>
						</ItemWrapper>
						<ItemWrapper>
							<FieldLabel htmlFor="contact-email">EMAIL ADDRESS</FieldLabel>
							<EmailInput
								id="contact-email"
								name="email"
								type="email"
								autoComplete="email"
								required
								placeholder="Your email address..."
							/>
						</ItemWrapper>
						<ItemWrapper>
							<FieldLabel htmlFor="contact-subject">SUBJECT</FieldLabel>
							<SubjectInput
								id="contact-subject"
								name="subject"
								type="text"
								required
								placeholder="Enter subject..."
							/>
						</ItemWrapper>
						<ItemWrapper>
							<FieldLabel htmlFor="contact-enquiry">ENQUIRY TYPE</FieldLabel>
							<EnquiryInput
								id="contact-enquiry"
								name="enquiry"
								defaultValue="General Enquiry"
							>
								<option value="General Enquiry">General Enquiry</option>
								<option value="Advertising">Advertising</option>
								<option value="Order Enquiry">Order Enquiry</option>
								<option value="Delivery Enquiry">Delivery Enquiry</option>
							</EnquiryInput>
						</ItemWrapper>
						<MessageWrapper>
							<FieldLabel htmlFor="contact-message">MESSAGE</FieldLabel>
							<MessageInput
								id="contact-message"
								name="message"
								required
								placeholder="Message"
							/>
						</MessageWrapper>
						<SubmitRow>
							<SubmitButton
								type="submit"
								disabled={status.state === "sending"}
								$textColor="white"
								$backgroundColor="black"
							>
								{status.state === "sending" ? "Sending..." : "Send Message"}
							</SubmitButton>
							{/* Announced to assistive tech as the state changes. */}
							<StatusMessage
								role="status"
								aria-live="polite"
								$isError={status.state === "error"}
							>
								{status.state === "sent" &&
									"Thanks — we will get back to you within a couple of days."}
								{status.state === "error" && status.message}
							</StatusMessage>
						</SubmitRow>
					</ContactFormGrid>
				</ContactFormWrapper>
			</MainContentWrapper>
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
		</ContactSection>
	)
}

const ContactSection = styled.div`
	margin: 0 var(--page-gutter);
`

/* Cancels the page gutter so this block runs edge to edge. */
const FullBleed = styled.div`
	margin: 0 calc(-1 * var(--page-gutter)) var(--section-gap);
`

const MainContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 80px;
`

const ContactFormWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 80px;
	gap: 40px;

	/* The chef photo drops below the form rather than squeezing it. */
	@media ${QUERIES.tabletAndSmaller} {
		flex-direction: column-reverse;
		align-items: stretch;
	}
`

const ContactFormGrid = styled.form`
	flex: 3;
	min-width: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: "name email" "subject enquiry" "message message" "submit submit";
	grid-gap: 30px 20px;
	margin-top: 40px;

	/* Paired fields get a full row each once there's no room for two columns. */
	@media ${QUERIES.phoneAndSmaller} {
		grid-template-columns: 1fr;
		grid-template-areas: "name" "email" "subject" "enquiry" "message" "submit";
	}
`

const NameInput = styled.input`
	height: 60px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 16px;
	min-width: 0;
	grid-area: name;
`
const EmailInput = styled.input`
	height: 60px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 16px;
	min-width: 0;
	grid-area: email;
`

const SubjectInput = styled.input`
	height: 60px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 16px;
	min-width: 0;
	grid-area: subject;
`

const EnquiryInput = styled.select`
	height: 60px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 16px;
	min-width: 0;
	grid-area: enquiry;
	color: rgba(0, 0, 0, 0.6);
`
const MessageInput = styled.textarea`
	width: 100%;
	height: 250px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 16px;
`

const SubmitRow = styled.div`
	grid-area: submit;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 16px 24px;
`

const SubmitButton = styled(Button)`
	width: 100%;
	max-width: 180px;
	flex-shrink: 0;

	&:disabled {
		opacity: 0.6;
		cursor: progress;
		transform: none;
	}
`

const StatusMessage = styled.p<{ $isError: boolean }>`
	flex: 1 1 240px;
	min-width: 0;
	font-size: 14px;
	line-height: 1.5;
	color: ${(props) => (props.$isError ? "#B3261E" : "rgba(0, 0, 0, 0.6)")};

	/* Empty while idle — but it must stay mounted for aria-live to announce. */
	&:empty {
		display: none;
	}
`

const ImageWrapper = styled.div<{
	$width?: string
	$height?: string
	$margin?: string
}>`
	width: ${(props) => props.$width || "100%"};
	height: ${(props) => props.$height || "800px"};
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	margin: ${(props) => props.$margin || " 64px 0 80px 0px"};
	background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
	flex: 1;
	min-width: 0;

	@media ${QUERIES.tabletAndSmaller} {
		height: auto;
		aspect-ratio: 4 / 5;
		max-height: 60vh;
		margin: 0 0 40px;
	}
`

const Thumbnail = styled.img`
	position: absolute;
	bottom: 0;
	left: 30px;
	width: 85%;
	object-fit: cover;
	object-position: center;
`

const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

/*
 * These were <h6> elements, which look right but are not associated with any
 * field: screen readers announced the inputs unlabelled and clicking the text
 * did nothing. A real <label htmlFor> fixes both and keeps the appearance.
 */
const FieldLabel = styled.label`
	font-size: 13px;
	font-weight: 700;
	letter-spacing: 0.02em;
	color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
`

const MessageWrapper = styled(ItemWrapper)`
	grid-area: message;
`

export default Contact
