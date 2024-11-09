import { NextRequest, NextResponse } from "next/server";

// Add export for allowed methods
export const dynamic = "force-dynamic";
export const runtime = "edge";

// Define allowed methods
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Received data from Zapier:", data);
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

// Add OPTIONS method handler for CORS preflight requests
export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { status: 200 });
}
