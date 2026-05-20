const fs = require('fs');
fs.rmSync('src/app/collections/[...slug]', { recursive: true, force: true });
