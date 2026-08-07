const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Fix AnimatePresence mode="wait" in workflow.tsx
  if (file === 'workflow.tsx') {
    content = content.replace(/<AnimatePresence mode="wait">/g, '<AnimatePresence>');
  }

  // Fix missing sizes in Image with fill
  // Regex to match <Image ... fill ... />
  // We can just do a simple replacement if we find `fill` and not `sizes=`
  const imageRegex = /<Image([^>]+)\/?>/gs;
  content = content.replace(imageRegex, (match, attrs) => {
    // if it's the logo, add style
    if (attrs.includes('src="/logo.png"')) {
       if (!attrs.includes('style={{')) {
          match = match.replace('src="/logo.png"', 'src="/logo.png"\n            style={{ width: "auto", height: "auto" }}');
       }
    }
    
    // if it has fill but no sizes
    if (/\bfill\b/.test(attrs) && !/\bsizes=/.test(attrs)) {
      // Add sizes right after fill
      match = match.replace(/\bfill\b/, 'fill\n            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"');
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
}
console.log("Fixed!");
