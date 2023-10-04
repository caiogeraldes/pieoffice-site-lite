import pie from "./converters/pie.js";
import polygreek from "./converters/polytonicgreek.js";
declare const allConverters: {
    value: string;
    label: string;
    converter: (input: string) => string;
}[];
export { pie, polygreek, allConverters, };
