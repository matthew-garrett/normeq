import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Access the data sent from Zapier
    const data: any = req.body;

    // Log the received data
    console.log("Received data from Zapier:", data);

    // You can handle the data here (e.g., save to a database, update the UI, etc.)

    // Respond with a success message
    res.status(200).json({ message: "Webhook received successfully", data });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
