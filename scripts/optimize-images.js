import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const projectRoot = path.resolve('./');
const srcPics = path.join(projectRoot, 'src', 'assets', 'pics');

const files = [
  'savedTJ.png',
  'Tumelo12.jpg'
];

async function run() {
  if (!fs.existsSync(srcPics)) {
    console.error('Source pics folder not found:', srcPics);
    process.exit(1);
  }

  for (const file of files) {
    const inPath = path.join(srcPics, file);
    if (!fs.existsSync(inPath)) {
      console.warn('Skipping missing file:', inPath);
      continue;
    }

    const outName = file.replace(/\.(png|jpe?g)$/i, '.webp');
    const outPath = path.join(srcPics, outName);

    try {
      await sharp(inPath)
        .webp({ quality: 80 })
        .toFile(outPath);
      console.log('Wrote', outPath);
    } catch (err) {
      console.error('Failed to convert', inPath, err);
    }
  }
}

run();
