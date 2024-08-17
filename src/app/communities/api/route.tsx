import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// Your code here

	// Example: Return a JSON response
	res.status(200).json({ message: "Hello from the API route!" });
}
