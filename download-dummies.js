const fs = require('fs');
const https = require('https');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect (picsum redirects to actual image URL)
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', (err) => {
          fs.unlink(filepath, () => {});
          reject(err);
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const images = [
  { file: 'logo.png', url: 'https://ui-avatars.com/api/?name=TAM&background=e8c547&color=1e120c&size=200&bold=true&format=png' },
  { file: 'bg.webp', url: 'https://picsum.photos/seed/bg/1920/1080' },
  { file: 'card.webp', url: 'https://picsum.photos/seed/card/800/600' },
  { file: 'contractor_bg.png', url: 'https://picsum.photos/seed/contractor/800/600' },
  { file: 'interior_bg.png', url: 'https://picsum.photos/seed/interior/800/600' },
  { file: 'trading_bg.png', url: 'https://picsum.photos/seed/trading/800/600' },
];

for (let i = 1; i <= 6; i++) {
  images.push({ file: `step${i}_bg.png`, url: `https://picsum.photos/seed/step${i}/600/400` });
}
for (let i = 1; i <= 3; i++) {
  images.push({ file: `prod${i}_bg.png`, url: `https://picsum.photos/seed/prod${i}/600/400` });
}

const main = async () => {
  for (const img of images) {
    const filepath = path.join(publicDir, img.file);
    try {
      await downloadImage(img.url, filepath);
      console.log(`✓ Created dummy ${img.file}`);
    } catch (err) {
      console.error(`✗ Failed to create ${img.file}:`, err.message);
    }
  }
  console.log('✓ All dummy images downloaded successfully!');
};

main();
