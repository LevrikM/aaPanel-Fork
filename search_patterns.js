const fs = require('fs');
const c = fs.readFileSync('BTPanel/static/vite/js/index-CmkLJhc0.js', 'utf8');

// G9 = Je(K9...) at ~321027. Find K9 definition
const k9Search = c.substring(200000, 321027);
const k9Idx = k9Search.lastIndexOf('K9=');
if (k9Idx > -1) {
    const absPos = 200000 + k9Idx;
    console.log('K9= found at absolute pos:', absPos);
    console.log('=== K9 component (first 6000 chars) ===');
    console.log(c.substring(absPos, absPos + 6000));
}
