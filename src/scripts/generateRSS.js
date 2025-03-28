import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateRSS = () => {
  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Noticias de Turismo y Digitalización - Corazón Canario</title>
      <link>https://tu-sitio-web.com/rss.xml</link>
      <description>Últimas noticias sobre turismo y digitalización en Canarias</description>
      
      <item>
        <title>Canarias lanza experiencia náutica innovadora</title>
        <link>https://cadenaser.com/canarias/2025/03/21/canarias-experiencia-nautica</link>
        <description>Una nueva propuesta turística que combina ciencia y tradición en las aguas de Canarias.</description>
        <pubDate>Sun, 23 Mar 2025 10:00:00 GMT</pubDate>
      </item>

      <item>
        <title>Gran Canaria lidera digitalización turística</title>
        <link>https://www.grancanaria.com/turismo/digitalizacion</link>
        <description>La isla apuesta por el turismo inteligente con innovaciones digitales.</description>
        <pubDate>Sat, 22 Mar 2025 12:00:00 GMT</pubDate>
      </item>
      
    </channel>
  </rss>`;

  // Construir la ruta absoluta a la carpeta public
  const outputPath = path.join(__dirname, "../../public/rss.xml");

  // Escribir el archivo RSS en la carpeta public
  fs.writeFileSync(outputPath, rssContent);
  console.log(`✅ RSS generado en ${outputPath}`);
};

generateRSS();