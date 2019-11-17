import * as Babel from "@babel/standalone";
import importVisitor from "babel-plugin-import-visitor";

function transformJs(code: string) {
  return Babel.transform(code, {
    plugins: [
      importVisitor(node => {
        console.log(node);
      }),
    ],
  }).code;
}

export default transformJs;
