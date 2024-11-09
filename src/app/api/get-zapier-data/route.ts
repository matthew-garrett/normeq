import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.zapierData.findMany({
      orderBy: { timestamp: "desc" }, // Get the most recent data first
      take: 10, // Limit to 10 records, adjust as needed
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return NextResponse.json(
      { error: "Error retrieving data" },
      { status: 500 }
    );
  }
}
