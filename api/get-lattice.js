export default async function handler(req, res) {
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = 'appondFVTjAbYGUxP'; 

    const tableId = 'tbl51JlRNS7Idj67j'; 

    
    const url = `https://api.airtable.com/v0/${baseId}/${tableId}?sort[0][field]=fecha%20y%20hora&sort[0][direction]=desc`;

    try {
        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        
        if (data.error) {
            return res.status(400).json({ error: data.error });
        }

        // Enviamos los registros puros para que la web los maneje
        res.status(200).json(data.records);
    } catch (error) {
        res.status(500).json({ error: "Fallo de conexión" });
    }
}
