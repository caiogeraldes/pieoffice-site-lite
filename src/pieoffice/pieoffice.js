"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allConverters = exports.polygreek = exports.pie = void 0;
const pie_js_1 = require("./converters/pie.js");
exports.pie = pie_js_1.default;
const polytonicgreek_js_1 = require("./converters/polytonicgreek.js");
exports.polygreek = polytonicgreek_js_1.default;
const allConverters = [
    {
        value: "pie",
        label: "Proto-Indo-European",
        converter: pie_js_1.default
    },
    {
        value: "polygreek",
        label: "Polytonic Greek",
        converter: polytonicgreek_js_1.default
    },
];
exports.allConverters = allConverters;
