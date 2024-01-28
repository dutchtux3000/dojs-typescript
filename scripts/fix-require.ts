import { API, FileInfo } from 'jscodeshift';

export default (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

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
      return j.callExpression(j.identifier('Require'), nodePath.value.arguments)
    })
    .toSource();
}