import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      businessName,
      email,
      phone,
      website,
      service,
      challenge,
    } = data;

    if (!name || !email || !service) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and service are required.",
        },
        { status: 400 }
      );
    }

    /*
      IMPORTANT:

      Abhi yaha submission receive ho raha hai.

      Yahi place hai jahan later aap:
      - Resend email
      - Nodemailer
      - HubSpot
      - Zoho CRM
      - Google Sheets
      - Supabase
      - Database

      connect kar sakte ho.
    */

    console.log("NEW FREE AUDIT REQUEST", {
      name,
      businessName,
      email,
      phone,
      website,
      service,
      challenge,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Audit request received successfully.",
    });
  } catch (error) {
    console.error("FREE AUDIT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit audit request.",
      },
      { status: 500 }
    );
  }
}