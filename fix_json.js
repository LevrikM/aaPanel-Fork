const fs = require('fs');
const path = require('path');

function updateMenu() {
    const menuPath = 'c:/Users/misha/Desktop/aaPanel-Fork/config/menu.json';
    try {
        let menu = JSON.parse(fs.readFileSync(menuPath, 'utf8'));
        menu = menu.filter(item => item.title !== 'Account');
        fs.writeFileSync(menuPath, JSON.stringify(menu, null, 4), 'utf8');
        console.log('Updated menu.json');
    } catch(e) {
        console.log('Error updating menu.json:', e);
    }
}

function updateLangFiles(dir) {
    let count = 0;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            count += updateLangFiles(fullPath);
        } else if (fullPath.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (/aaPanel/i.test(content)) {
                content = content.replace(/aaPanel/gi, 'HomeServer Panel');
                fs.writeFileSync(fullPath, content, 'utf8');
                count++;
            }
        }
    }
    return count;
}

updateMenu();
const count = updateLangFiles('c:/Users/misha/Desktop/aaPanel-Fork/BTPanel/static/vite/lang');
console.log('Updated ' + count + ' lang JSON files');
