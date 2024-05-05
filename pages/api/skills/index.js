export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const response = await fetch(`${process.env.BASE_URL}/api/skills`, {
      method: "GET",
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
