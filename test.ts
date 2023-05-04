import * as fs from 'fs';
import * as nearley from 'nearley';
import grammar from './grammar';
import { Interpreter } from './interpreter';

const sourceCode = fs.readFileSync('sample.ssc', 'utf-8');
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
parser.feed(sourceCode);
const ast = parser.results[0];
const interpreter = new Interpreter();
interpreter.run(ast);
