import * as Babel from "@babel/standalone";
import BabelPluginUnpkg from "babel-plugin-unpkg";

/**
 * Babelify the JavaScript code and apply the unpkg plugin to transform modules.
 * @param code JavaScript code
 */
function transformJs(code: string) {
  return Babel.transform(code, {
    plugins: [BabelPluginUnpkg],
  }).code;
}

export default transformJs;
