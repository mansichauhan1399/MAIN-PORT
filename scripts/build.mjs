import { cpSync, mkdirSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist/src/components', { recursive: true });
mkdirSync('dist/src/lib', { recursive: true });
cpSync('index.html', 'dist/index.html');
cpSync('src/main.js', 'dist/src/main.js');
cpSync('src/styles.css', 'dist/src/styles.css');
cpSync('src/components/HeroCarousel.js', 'dist/src/components/HeroCarousel.js');
cpSync('src/lib/gsap.js', 'dist/src/lib/gsap.js');
console.log('Built static portfolio hero into dist/');
