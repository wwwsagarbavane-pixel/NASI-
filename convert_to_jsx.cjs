const fs = require('fs');

function convertToJsx(html) {
    let jsx = html;
    
    // class -> className
    jsx = jsx.replace(/class=/g, 'className=');
    
    // for -> htmlFor
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    
    // <!-- --> -> {/* */}
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

    // Self closing tags
    jsx = jsx.replace(/<(img|hr|br|input|link|meta)([^>]*?)(?<!\/)>/g, '<$1$2 />');

    // Simple style="" to style={{}}
    // Note: this is a very naive implementation and might need manual fixes for complex CSS rules
    jsx = jsx.replace(/style="([^"]+)"/g, (match, styleString) => {
        const styles = {};
        styleString.split(';').forEach(rule => {
            const parts = rule.split(':');
            if (parts.length === 2) {
                let key = parts[0].trim();
                let value = parts[1].trim();
                
                // Convert kebab-case to camelCase
                key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                
                // Keep values as strings
                styles[key] = value;
            }
        });
        return `style={${JSON.stringify(styles)}}`;
    });

    return jsx;
}

const files = ['index.html', 'about.html', 'reports.html'];

files.forEach(file => {
    const html = fs.readFileSync(`../${file}`, 'utf8');
    const start = html.indexOf('<main');
    const end = html.indexOf('</main>') + 7;
    if (start === -1 || end === 6) return;
    
    const mainContent = html.substring(start, end);
    const jsxContent = convertToJsx(mainContent);
    
    const componentName = file === 'index.html' ? 'Home' : file.replace('.html', '').charAt(0).toUpperCase() + file.replace('.html', '').slice(1);
    
    const componentCode = `import React from 'react';
import { ChevronRight, FileText, Download } from 'lucide-react'; // adjust imports as needed

const ${componentName} = () => {
    return (
        ${jsxContent}
    );
};

export default ${componentName};`;

    fs.writeFileSync(`src/pages/${componentName}.tsx`, componentCode);
    console.log(`Converted ${file} to ${componentName}.tsx`);
});
