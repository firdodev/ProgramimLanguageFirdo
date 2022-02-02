const nearley = require("nearley");
const grammar = require("./mypl.js")

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

try{
    parser.feed("a := 12.50");

    console.log("Parse succeeded.",parser.results);
} catch (e) {
    console.log(`Parse failed: ${e.message}`);
}
