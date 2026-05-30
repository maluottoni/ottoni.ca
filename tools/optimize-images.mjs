import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const resolved = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(resolved) : resolved;
  }));
  return files.flat();
}

const files = (await walk('assets/images')).filter((file) => /\.(jpe?g|png)$/i.test(file));
for (const file of files) {
  if (file.includes('-thumb')) continue;
  const parsed = path.parse(file);
  await sharp(file).resize({ width: 1200, withoutEnlargement: true }).jpeg({ quality: 84, progressive: true }).toFile(path.join(parsed.dir, `${parsed.name}.jpg`));
  await sharp(file).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(parsed.dir, `${parsed.name}.webp`));
  await sharp(file).resize({ width: 400, withoutEnlargement: true }).jpeg({ quality: 76, progressive: true }).toFile(path.join(parsed.dir, `${parsed.name}-thumb.jpg`));
}
