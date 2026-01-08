import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const projectRoot = path.resolve('./');
const srcPics = path.join(projectRoot, 'src', 'assets', 'pics');

// files to process and responsive widths
const images = [
  { file: 'savedTJ.png', name: 'savedTJ' },
  { file: 'Tumelo12.jpg', name: 'Tumelo12' },
];

const widths = [480, 768, 1200];

async function run() {
  if (!fs.existsSync(srcPics)) {
    console.error('Source pics folder not found:', srcPics);
    process.exit(1);
  }

  for (const img of images) {
    const inPath = path.join(srcPics, img.file);
    if (!fs.existsSync(inPath)) {
      console.warn('Skipping missing file:', inPath);
      continue;
    }

    for (const w of widths) {
      const outName = `${img.name}-${w}.webp`;
      const outPath = path.join(srcPics, outName);
      try {
        await sharp(inPath).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
        console.log('Wrote', outPath);
      } catch (err) {
        console.error('Failed to convert', inPath, '->', outPath, err);
      }
    }

    // also write a default single webp (largest)
    const defaultOut = path.join(srcPics, `${img.name}.webp`);
    try {
      await sharp(inPath).webp({ quality: 80 }).toFile(defaultOut);
      console.log('Wrote default', defaultOut);
    } catch (err) {
      console.error('Failed to write default webp for', inPath, err);
    }
  }
}

run();
