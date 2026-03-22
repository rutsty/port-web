export default async function handler(req, res) {
  
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = 'appondFVTjAbYGUxP/tbl51JlRNS7Idj67j/viw9kUg0WhUFaBunY'; // Tu ID de la base
    const tableId = 'Bitacora';         // El nombre de tu tabla

    const url = `https://api.airtable.com/v0/${baseId}/${tableId}?sort[0][field]=fecha&sort[0][direction]=desc`;

    try {
        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        
        // Devolvemos la lista de registros limpia a tu web
        res.status(200).json(data.records);
    } catch (error) {
        res.status(500).json({ error: "Error al sintonizar con Airtable" });
    }
}
