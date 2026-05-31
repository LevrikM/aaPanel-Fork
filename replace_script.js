const fs = require('fs');
const path1 = 'c:\\Users\\misha\\Desktop\\aaPanel-Fork\\BTPanel\\static\\vite\\js\\index-B03PWrJZ.js';
const path2 = 'c:\\Users\\misha\\Desktop\\aaPanel-Fork\\BTPanel\\static\\vite\\js\\index-BqlykzYF.js';

let content1 = fs.readFileSync(path1, 'utf8');

// 1. Remove AD Apps
content1 = content1.replace(
    'n=j(()=>c.value.length>=ee?[]:p.value.list.slice(0,ee-c.value.length))',
    'n=j(()=>[])'
);

// 2. Remove Gt (auth component)
const gtRegex = /Gt=D\(\{__name:"auth",setup\(m\)\{.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\}\}\}\)/g;
content1 = content1.replace(gtRegex, 'Gt=D({__name:"auth",setup(m){return(v,_)=>{return F("",!0)}}})');

// 3. Remove ns (PRO Recommend component)
const nsRegex = /ns=D\(\{__name:"index",setup\(m\)\{.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\}\}\}\)/g;
content1 = content1.replace(nsRegex, 'ns=D({__name:"index",setup(m){return(_,$)=>{return F("",!0)}}})');

// 4. Remove user account from header
const userRegex = /r\(b,\{"icon-name":"user","icon-size":"18"\},\{default:i\(\(\)=>\[a\(f\)\.status\?\(w\(\),N\("span",Qt,s\(a\(l\)\),1\)\):\(w\(\),T\(d,\{key:1,onClick:t\[0\]\|\|\(t\[0\]=re=>a\(Ge\)\(\)\)\},\{default:i\(\(\)=>\[S\(s\(o\.\$t\("Home\.index_2"\)\),1\)\]\),_:1\}\)\)\]\),_:1\}\),r\(Lt\),/;
content1 = content1.replace(userRegex, '');

fs.writeFileSync(path1, content1);

let content2 = fs.readFileSync(path2, 'utf8');

// 5. Remove ge (auth/PRO in sub-header)
const geRegex = /ge=O\(\{__name:"index",setup\(B\)\{.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\n?.*?\}\}\}\)/g;
content2 = content2.replace(geRegex, 'ge=O({__name:"index",setup(B){return(l,S)=>{return u("",!0)}}})');

fs.writeFileSync(path2, content2);

console.log('Replacements completed.');
