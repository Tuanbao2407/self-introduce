const https = require('https');
const fs = require('fs');
const path = require('path');

// Public sample MP3. If you'd like a different file, replace this URL.
// Using SoundHelix sample which allows direct download.
const AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
const outDir = path.join(__dirname, '..', 'public', 'audio');
const outFile = path.join(outDir, 'background-music.mp3');

function mkdirIfNeeded(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error('Request Failed. Status Code: ' + res.statusCode));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  try {
    console.log('Creating output directory:', outDir);
    mkdirIfNeeded(outDir);
    console.log('Downloading sample audio...');
    await download(AUDIO_URL, outFile);
    console.log('Saved audio to:', outFile);
    console.log('\nNow run `npm run dev` and the player will fallback to /audio/background-music.mp3');
  } catch (err) {
    console.error('Failed to fetch audio:', err.message);
    process.exitCode = 1;
  }
})();
