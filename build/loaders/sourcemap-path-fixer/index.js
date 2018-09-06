/**
 * Why we need the soucemap path fixer?
 *
 * 1) postcss-loader + css-loader suck!
 * https://github.com/postcss/postcss-loader/issues/390#issuecomment-417584816
 *
 * 2) Don't insert absolute paths into the module code as they break hashing when the root for the project is moved.
 * https://webpack.js.org/contribute/writing-a-loader/#absolute-paths
 */

import {getOptions} from 'loader-utils';
import validateOptions from 'schema-utils';

const schema = {
    type: 'object',
    properties: {
        sourceMap: {
            type: 'boolean',
        },
    },
};

const root = process.cwd().replace(/\\/g, '/');

/**
 * Fix the source map path
 *
 * @param {object} source
 * @return {string}
 */
export default function(source) {
    // eslint-disable-next-line no-invalid-this
    const options = getOptions(this);

    validateOptions(schema, options, 'SourceMap fixer');

    // check if source map enabled
    if (options.sourceMap) {
        source = fixer(source);
    }

    return source;
}

/**
 * Source Paths Fixer
 *
 * Find and replace the source path in the source data.
 * The sources could look like following strings:
 *
 * "sources":[]
 * "sources":["/path/to/source-1"]
 * "sources":["/path/to/source-1","/path/to/source-2"]
 * "sources":["/path/to/source-1",...,"/path/to/source-n"]
 *
 * @param {string} source - the raw data of source
 * @return {string}
 */
export function fixer(source) {
    return source.replace(/"sources":\[((".+?",?)*)]/g, replacer);
}

/**
 * Replace function
 *
 * To replace a path in the sources array to a webpack-internal path
 *
 * cwd = /path/to/project
 * "sources":["/path/to/project/src/source-1"]
 * => "sources":["webpack-internal:///./src/source-1"]
 *
 * cwd = C:/path/to/project
 * "sources":["C:/path/to/project/src/source-2"]
 * => "sources":["webpack-internal:///./src/source-2"]
 *
 * @param {string} $0 the capture 0 equals to whole capture
 * @param {string} $1 the capture 1 equals the content in the sources array
 * @return {string}
 */
export function replacer($0, $1) {
    if ($1) {
        let paths = $1.split(/,\s?/).map((originalPath) => {
            let path = originalPath.slice(1,
                originalPath.length - 1); // strip quotes
            let foundRoot = path.lastIndexOf(root);
            if (foundRoot > -1) {
                path = path.slice(foundRoot + root.length);
                return `"webpack-internal:///.${path}"`;
            } else {
                return originalPath;
            }
        }).join(',');

        return `"sources":[${paths}]`;
    }

    return $0;
}
