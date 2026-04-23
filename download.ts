import https from 'https';
import fs from 'fs';
import path from 'path';

const urls = [
  "https://storage.googleapis.com/aistudio-yeti-prod-uploads/626fb3bd-70ab-48e0-bb15-af0762ea132b/dammnation2.png",
  "https://storage.googleapis.com/aistudio-yeti-prod-uploads/055ab9cb-87bb-4e89-a2a4-566ca692b1ae/castigo.png",
  "https://storage.googleapis.com/aistudio-yeti-prod-uploads/635af75d-3571-460b-ba6f-fd7419e612cb/PASUGAMA.jpg",
  "https://storage.googleapis.com/aistudio-yeti-prod-uploads/eddc4cf6-ba46-4c74-95d0-99c54eec2035/05.jpg",
  "https://storage.googleapis.com/aistudio-yeti-prod-uploads/270af9d0-ff07-4e55-9336-3914aeecc868/08.jpg",
  "https://storage.googleapis.com/aistudio-yeti-prod-uploads/d3ed6f44-77ee-4573-aee3-bc6218fdbae3/02.jpg",
  "https://storage.googleapis.com/aistudio-yeti-prod-uploads/5f284e36-7c6d-4d7a-af1d-72aa4e3ff3db/03.jpg"
];

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

urls.forEach((url, index) => {
  const fileName = url.split('/').pop() || 'image-' + index + '.jpg';
  const filePath = path.join(publicDir, fileName);
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded ' + fileName);
      });
    } else {
      console.log('Failed to download ' + fileName + ': ' + res.statusCode);
    }
  }).on('error', (err) => {
    console.error('Error downloading ' + fileName + ': ' + err.message);
  });
});
