const fs = require('fs');
const https = require('https');
const path = require('path');

const profiles = [
  { name: "Zainal Muzaidin", initials: "ZM" },
  { name: "Mahendra Harimawan", initials: "MH" },
  { name: "Bayu Rahmawan", initials: "BR" },
  { name: "Rizal A Shaleh", initials: "RS" },
  { name: "Andre Bintang", initials: "AB" },
  { name: "Aktriani", initials: "AK" },
  { name: "Andro Ramadhan", initials: "AR" },
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', err => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const generateProfiles = async () => {
  const publicDir = path.join(__dirname, 'public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (let i = 0; i < profiles.length; i++) {
    const profile = profiles[i];
    const filename = `profile${i + 1}.jpg`;
    const filepath = path.join(publicDir, filename);
    
    try {
      const url = `https://ui-avatars.com/api/?name=${profile.initials}&background=F59E0B&color=fff&size=200&bold=true&format=jpg`;
      await downloadImage(url, filepath);
      console.log(`✓ Created ${filename}`);
    } catch (err) {
      console.error(`✗ Failed to create ${filename}:`, err.message);
    }
  }
  
  console.log('\n✓ Semua foto profile dummy berhasil dibuat!');
};

generateProfiles();
