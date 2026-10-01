import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clean(value: unknown, max = 4000) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot. Bots often fill every field.
    if (clean(body.websiteConfirm, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const company = clean(body.company, 200);
    const website = clean(body.website, 300);
    const message = clean(body.message, 5000);
    const budget = clean(body.budget, 120);
    const timeline = clean(body.timeline, 120);
    const source = clean(body.source, 120);
    const selectedPlan = clean(body.selectedPlan, 160);
    const enquiryNeed = clean(body.enquiryNeed, 200);

    const services = Array.isArray(body.services)
      ? body.services
          .map((service: unknown) => clean(service, 120))
          .filter(Boolean)
          .slice(0, 10)
      : [];

    if (!name || !email || !message || services.length === 0) {
      return NextResponse.json(
        {
          message:
            "Please complete your name, email, service selection and project details.",
        },
        { status: 400 },
      );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { message: "Email service is not configured yet." },
        { status: 500 },
      );
    }

    const toEmail =
      process.env.CONTACT_TO_EMAIL?.trim() || "hello@sharprays.com";

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      "Sharp Rays Website <onboarding@resend.dev>";

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company || "Not provided"),
      website: escapeHtml(website || "Not provided"),
      services: escapeHtml(services.join(", ")),
      selectedPlan: escapeHtml(selectedPlan || "Not selected"),
      enquiryNeed: escapeHtml(enquiryNeed || "Not specified"),
      message: escapeHtml(message).replaceAll("\n", "<br />"),
      budget: escapeHtml(budget || "Not provided"),
      timeline: escapeHtml(timeline || "Not provided"),
      source: escapeHtml(source || "Not provided"),
    };

    const subjectParts = [
      "New Sharp Rays enquiry",
      services[0] || "",
      selectedPlan || enquiryNeed || "",
    ].filter(Boolean);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: subjectParts.join(" — "),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;color:#0B2A52;">
          <h1 style="font-size:24px;margin:0 0 20px;">New website enquiry</h1>

          <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
            <tr><td style="padding:8px 0;font-weight:700;width:180px;">Name</td><td>${safe.name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Email</td><td>${safe.email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Company / Brand</td><td>${safe.company}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Website</td><td>${safe.website}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Services</td><td>${safe.services}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Plan</td><td>${safe.selectedPlan}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Enquiry context</td><td>${safe.enquiryNeed}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Budget</td><td>${safe.budget}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Timeline</td><td>${safe.timeline}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Found Sharp Rays via</td><td>${safe.source}</td></tr>
          </table>

          <div style="margin-top:24px;padding:18px;border:1px solid #D8E3E9;border-radius:12px;background:#F8FAFC;">
            <strong style="display:block;margin-bottom:8px;">Project / enquiry details</strong>
            <div style="font-size:14px;line-height:1.7;color:#405A79;">${safe.message}</div>
          </div>

          <p style="margin-top:24px;font-size:12px;color:#60758A;">
            Reply to this email to respond directly to ${safe.name}.
          </p>
        </div>
      `,
      text: [
        "New Sharp Rays website enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company / Brand: ${company || "Not provided"}`,
        `Website: ${website || "Not provided"}`,
        `Services: ${services.join(", ")}`,
        `Plan: ${selectedPlan || "Not selected"}`,
        `Enquiry context: ${enquiryNeed || "Not specified"}`,
        `Budget: ${budget || "Not provided"}`,
        `Timeline: ${timeline || "Not provided"}`,
        `Found Sharp Rays via: ${source || "Not provided"}`,
        "",
        "Project / enquiry details:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "We couldn’t send your enquiry. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Something went wrong while sending your enquiry." },
      { status: 500 },
    );
  }
}
