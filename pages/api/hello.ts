// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Send initial message to client
  res.write("data: Hello, client!\n\n");

  // Set interval to send messages to client
  const intervalId = setInterval(() => {
    res.write("data: This is a message from the server!\n\n");
  }, 5000);
}
