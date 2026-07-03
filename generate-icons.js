// save as generate-icons.js
const fs = require('fs');
const path = require('path');

const rootDir = './svg';
const filledDir = './svg/filled';
const icons = [];

function readDir(dir, category) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        if (file.endsWith('.svg')) {
            icons.push({ name: file.replace('.svg', ''), category });
        }
    });
}

readDir(rootDir, 'root');
readDir(filledDir, 'filled');

fs.writeFileSync('icons.json', JSON.stringify(icons, null, 2));
console.log('✅ icons.json created with', icons.length, 'icons');