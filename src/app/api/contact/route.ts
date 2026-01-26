import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { ContactEmail } from "@/emails/contact-email";

const Schema = z.object({
  name: z.string().min(2, "Name is too short."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = Schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Server email config is missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const { name, email, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Portfolio Collaboration: ${name}`,
      replyTo: email,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error("Resend send failed:", error);
      return NextResponse.json(
        { ok: false, error: error.message ?? "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact form error:", e);
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
