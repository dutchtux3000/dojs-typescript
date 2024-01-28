import { API, FileInfo } from 'jscodeshift';

export default (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const objectExports = root
    .find(
      j.CallExpression,
      {
        callee: {
          type: 'MemberExpression',
          object: { type: 'Identifier', name: 'Object' },
          property: { type: 'Identifier', name: 'defineProperty' },
          // arguments: [
          //   { name: "exports" },
          //   { value: "__esModule" },
          //   {
          //     properties: [
          //       {
          //         key: { name: "value" },
          //         value: { value: true },
          //       }
          //     ],
          //   }
          // ]
        }
      }
    ).filter((item) => {
      if (item.node.arguments.length === 3) {
        // if (item.node.arguments[0] === 'exports')
        const arg1: string = (item.node.arguments[0] as any).name
        const arg2: string = (item.node.arguments[1] as any).value
        return (arg1 === 'exports' && arg2 === '__esModule')
      }
      return false;
    });

  objectExports.remove();

  return root.toSource();
}