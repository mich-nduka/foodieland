"use client"

import { useState, type FormEvent } from "react"
import { Title } from "@/components/Layout/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Newsletter } from "@/components/newsletter"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"
import { SectionText, SubsectionHeading } from "@/components/typography"
import { ContactNotConfiguredError, sendContactMessage } from "@/lib/contact"
import { NEWSLETTER_COPY } from "@/data"
import { cn } from "@/lib/utils"

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string }

function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
            : "Something went wrong sending your message. Please try again.",
      })
    }
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
      <div className="mt-16 flex flex-col items-center justify-center">
        <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-burgundy uppercase">
          <span aria-hidden className="inline-block h-px w-8 bg-brass" />
          Say hello
        </p>
        <Title className="mt-3">Contact Us</Title>
        <div className="mt-16 flex w-full flex-col-reverse items-stretch gap-10 lg:flex-row lg:items-center">
          <div className="min-w-0 flex-1 overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-cream to-parchment">
            <img src="/images/smiling-chef.png" alt="Chef smiling in a kitchen" className="mx-auto aspect-[4/5] max-h-[60vh] w-auto object-contain" />
          </div>
          <form onSubmit={handleSubmit} className="grid min-w-0 flex-[3] grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Enter your name..." />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-email">Email address</Label>
              <Input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="Your email address..." />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-subject">Subject</Label>
              <Input id="contact-subject" name="subject" type="text" required placeholder="Enter subject..." />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-enquiry">Enquiry type</Label>
              <Select id="contact-enquiry" name="enquiry" defaultValue="General Enquiry">
                <option value="General Enquiry">General Enquiry</option>
                <option value="Advertising">Advertising</option>
                <option value="Order Enquiry">Order Enquiry</option>
                <option value="Delivery Enquiry">Delivery Enquiry</option>
              </Select>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea id="contact-message" name="message" required placeholder="Message" className="min-h-60" />
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <Button type="submit" disabled={status.state === "sending"} className="w-full max-w-44">
                {status.state === "sending" ? "Sending..." : "Send Message"}
              </Button>
              <p
                role="status"
                aria-live="polite"
                className={cn(
                  "min-w-0 flex-1 text-sm leading-relaxed",
                  status.state === "error" ? "text-destructive" : "text-muted-classic",
                  status.state === "idle" && "hidden"
                )}
              >
                {status.state === "sent" && "Thanks — we will get back to you within a couple of days."}
                {status.state === "error" && status.message}
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="my-16">
        <Newsletter copy={NEWSLETTER_COPY} />
        <SubsectionHeading className="mt-16 mb-8 text-center">Check out the delicious recipe</SubsectionHeading>
        <MoreRecipesGrid number={4} />
      </div>
    </div>
  )
}

export default Contact
