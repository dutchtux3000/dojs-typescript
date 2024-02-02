import { API, FileInfo } from 'jscodeshift';
import { resolve, relative, dirname } from 'node:path';

export default (fileInfo: FileInfo, api: API, options: Record<string, string>) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  const filePath = fileInfo.path;
  const fileDirname = dirname(filePath)
  const rootPath = resolve(options.rootPath)

  return root
    .find(
      j.CallExpression,
      {
        callee: {
          name: 'require'
        }
      }
    )
    .replaceWith(nodePath => {
      // nodePath.value.arguments[0].value = 
      const value = nodePath.value.arguments[0].value;
      const resolvedValue = resolve(fileDirname, value);
      const relativePath = './' + relative(rootPath, resolvedValue)

      nodePath.value.arguments[0].value = relativePath;
      return j.callExpression(j.identifier('require'), nodePath.value.arguments)
    })
    .toSource();
}