const fs = require('fs');

function fixData(filePath) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let count = 0;
        
        // Find lines with the dummy brochure and clear the fileUrl
        content = content.replace(/"fileUrl":\s*"https:\/\/nsai\.co\.in\/storage\/app\/media\/NSAI%20Brochure%20%282019%29\.pdf"/g, function() {
            count++;
            return '"fileUrl": ""';
        });
        
        fs.writeFileSync(filePath, content);
        console.log('Fixed ' + count + ' dummy PDFs in ' + filePath);
    }
}

fixData('src/data/nsai/advocacy.ts');
fixData('src/data/nsai/policy.ts');
