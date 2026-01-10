const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(process.cwd(), '.next/server/app');
const DEST_DIR = path.join(process.cwd(), '.open-next/assets');

function copyFiles(source, dest) {
    if (!fs.existsSync(source)) return;
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

    const entries = fs.readdirSync(source, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(source, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyFiles(srcPath, destPath);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            // Rename _not-found.html to 404.html for Cloudflare
            if (entry.name === '_not-found.html') {
                fs.copyFileSync(srcPath, path.join(dest, '404.html'));
                console.log(`Copied ${entry.name} -> 404.html`);
            } else {
                fs.copyFileSync(srcPath, destPath);
                console.log(`Copied ${entry.name}`);
            }
        }
    }
}

console.log('Copying static HTML assets...');
copyFiles(SOURCE_DIR, DEST_DIR);
console.log('Done.');
