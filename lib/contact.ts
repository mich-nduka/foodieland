/**
 * Delivering a contact message needs somewhere to deliver it to, and this
 * project has no backend. Set `NEXT_PUBLIC_CONTACT_ENDPOINT` to an API route, a
 * server action or a form service (Formspree, Basin, Formspark) and the page
 * starts working with no other changes.
 *
 * Until that is set the form deliberately reports that it is not connected
 * rather than showing a success message, so a visitor is never told their
 * message was sent when it was not.
 */
export class ContactNotConfiguredError extends Error {
	constructor() {
		super("No contact endpoint is configured.")
		this.name = "ContactNotConfiguredError"
	}
}

export async function sendContactMessage(data: FormData): Promise<void> {
	const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT

	if (!endpoint) throw new ContactNotConfiguredError()

	const response = await fetch(endpoint, {
		method: "POST",
		headers: { Accept: "application/json" },
		body: data
	})

	if (!response.ok) {
		throw new Error(`Contact endpoint responded with ${response.status}`)
	}
}
