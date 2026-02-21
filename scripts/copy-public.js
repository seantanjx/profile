/**
 * Copies profile data and static assets into public/ so the Vite build
 * is self-contained. Run before build so dist/ includes everything
 * needed for deployment (e.g. gh-pages).
 */
import { cpSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');

function copyDir(src, dest) {
  if (!existsSync(src)) return;
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
}

function copyFile(src, dest) {
  if (!existsSync(src)) return;
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest);
}

mkdirSync(publicDir, { recursive: true });
copyDir(join(root, 'profile'), join(publicDir, 'profile'));
copyDir(join(root, 'images'), join(publicDir, 'images'));
copyFile(join(root, 'manifest.json'), join(publicDir, 'manifest.json'));
copyFile(join(root, 'robots.txt'), join(publicDir, 'robots.txt'));

console.log('Copied profile/, images/, manifest.json, robots.txt → public/');
