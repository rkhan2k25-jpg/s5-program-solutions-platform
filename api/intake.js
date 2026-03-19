export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // For now just log it (we’ll connect DB next)
    console.log("New Intake:", data);

    return res.status(200).json({ message: "Success" });
  }

  res.status(405).json({ message: "Method not allowed" });
}
