import * as Babel from "@babel/standalone";
import BabelPluginUnpkg from "babel-plugin-unpkg";

function transformJs(code: string) {
  return Babel.transform(code, {
    plugins: [BabelPluginUnpkg],
  }).code;
}

export default transformJs;
