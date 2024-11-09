import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Access the data sent from Zapier
    const data = await req.json();

    // Log the received data
    console.log("Received data from Zapier:", data);

    // Return success response
    return NextResponse.json(
      { message: "Webhook received successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 400 }
    );
  }
}
