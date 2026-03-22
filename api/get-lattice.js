export default async function handler(req, res) {
    
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = 'appondFVTjAbYGUxP'; 
    const tableId = 'Bitacora';         

    const url = `https://api.airtable.com/v0/${baseId}/${tableId}?sort[0][field]=fecha&sort[0][direction]=desc`;

    try {
        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        
 
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Fallo de conexión con Airtable" });
    }
}
