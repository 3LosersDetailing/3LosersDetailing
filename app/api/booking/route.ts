import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      fullName,
      phone,
      email,
      address,
      city,
      zipCode,
      vehicleMake,
      vehicleModel,
      vehicleYear,
      service,
      appointmentDate,
      appointmentTime,
      notes
    } = body

    // Validation
    if (
      !fullName ||
      !phone ||
      !email ||
      !address ||
      !city ||
      !zipCode ||
      !vehicleMake ||
      !vehicleModel ||
      !vehicleYear ||
      !service ||
      !appointmentDate ||
      !appointmentTime
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send email via Resend
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["threelosersdetailing@outlook.com"],
      subject: `New Booking - ${fullName}`,
      html: `
        <h2>New Booking Request</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Address:</b> ${address}, ${city}, ${zipCode}</p>
        <p><b>Vehicle:</b> ${vehicleMake} ${vehicleModel} ${vehicleYear}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Date:</b> ${appointmentDate}</p>
        <p><b>Time:</b> ${appointmentTime}</p>
        <p><b>Notes:</b> ${notes || "None"}</p>
      `,
    })

    console.log("RESEND RESPONSE:", result)

    return NextResponse.json({
      success: true,
      message: "Booking sent successfully",
    })

  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2))

    return NextResponse.json(
      { error: error.message || "Failed to send booking" },
      { status: 500 }
    )
  }
  
}
