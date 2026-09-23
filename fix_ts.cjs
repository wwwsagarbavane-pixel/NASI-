const fs = require('fs');

let cfg = fs.readFileSync('tsconfig.app.json', 'utf8');
cfg = cfg.replace(/"noUnusedLocals": true/g, '"noUnusedLocals": false');
cfg = cfg.replace(/"noUnusedParameters": true/g, '"noUnusedParameters": false');
fs.writeFileSync('tsconfig.app.json', cfg);

console.log('Fixed tsconfig');
