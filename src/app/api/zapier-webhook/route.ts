import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const rawData = await request.json(); // Parse incoming JSON rawData from Zapier

    console.log(rawData); // Log the data directly since it's already awaited

    // Save the data to the SQLite database
    await prisma.zapierData.create({
      data: {
        data: JSON.stringify(rawData), // Convert JSON to string before storing
      },
    });

    return NextResponse.json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ error: "Error saving data" }, { status: 500 });
  }
}
