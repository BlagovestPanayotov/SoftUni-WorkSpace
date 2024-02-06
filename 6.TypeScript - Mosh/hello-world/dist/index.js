"use strict";
var _a, _b;
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
let result = fetch("url");
(_a = result.data) === null || _a === void 0 ? void 0 : _a.username;
let result2 = fetch("url");
(_b = result2.data) === null || _b === void 0 ? void 0 : _b.title;
console.log(result);
//# sourceMappingURL=index.js.map