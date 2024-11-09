import { NextRequest, NextResponse } from "next/server";

// Add export for allowed methods
export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    // Add CORS headers
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    const data = await req.json();
    console.log("Received data from Zapier:", data);

    return new NextResponse(
      JSON.stringify({ message: "Webhook received successfully", data }),
      {
        status: 200,
        headers: headers,
      }
    );
  } catch (error) {
    console.error("Error processing webhook:", error);
    // Add more detailed error message
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return new NextResponse(
      JSON.stringify({
        error: "Failed to process webhook",
        details: errorMessage,
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export async function OPTIONS(req: NextRequest) {
  // Add CORS headers to OPTIONS response
  console.log("OPTIONS request received", req);
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
