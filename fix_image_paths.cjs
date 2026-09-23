const fs = require('fs');

['Home.tsx', 'About.tsx', 'Reports.tsx'].forEach(f => {
    let p = 'src/pages/' + f;
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/src="assets\//g, 'src="/assets/');
    fs.writeFileSync(p, c);
});
console.log('Fixed paths');
