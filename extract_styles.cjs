const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const filesToProcess = [
  'components/Header.jsx',
  'components/Footer.jsx',
  'components/ContactModal.jsx',
  'views/Home.jsx',
  'views/About.jsx',
  'views/Products.jsx',
  'views/Partners.jsx',
  'App.jsx'
];

let allCss = '';

filesToProcess.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match the entire <style>{` ... `}</style> block
    const styleRegex = /<style>\{`([\s\S]*?)`\}<\/style>/g;
    
    let match;
    let fileCss = '';
    while ((match = styleRegex.exec(content)) !== null) {
      fileCss += match[1] + '\n';
    }
    
    if (fileCss) {
      allCss += `/* --- ${path.basename(file)} --- */\n${fileCss}\n`;
      // Remove the style block from the file content
      content = content.replace(/<style>\{`[\s\S]*?`\}<\/style>/g, '');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Extracted styles from ${file} and removed from source.`);
    } else {
      console.log(`No styles found in ${file}.`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

const globalStylesContent = `import React from 'react';

export default function GlobalStyles() {
  return (
    <style>{\`
${allCss.replace(/\\/g, '\\\\').replace(/\`/g, '\\`')}
    \`}</style>
  );
}
`;

fs.writeFileSync(path.join(srcDir, 'components', 'GlobalStyles.jsx'), globalStylesContent, 'utf8');
console.log('GlobalStyles.jsx created successfully.');
