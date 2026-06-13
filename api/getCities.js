// api/getCities.js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.rajaongkir.com/starter/city", {
      headers: { key: process.env.RAJAONGKIR_API_KEY }
    });

    const data = await response.json();
    // Ambil hasil daftar kota
    res.status(200).json(data.rajaongkir.results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
