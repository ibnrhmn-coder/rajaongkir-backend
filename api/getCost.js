// api/getCost.js
export default async function handler(req, res) {
  try {
    const { origin, destination, weight, courier } = req.body;

    const response = await fetch("https://api.rajaongkir.com/starter/cost", {
      method: "POST",
      headers: {
        key: process.env.RAJAONGKIR_API_KEY,
        "content-type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({ origin, destination, weight, courier })
    });

    const data = await response.json();
    res.status(200).json(data.rajaongkir.results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
