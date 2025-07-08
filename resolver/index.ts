export interface XLibraryResolverOptions {
  /**
   * exclude components that do not require automatic import
   *
   * @default []
   */
  exclude?: string[];

  /**
   * rename package
   *
   * @default 'x-library'
   */
  packageName?: string;

  /**
   * customizable prefix for resolving components
   *
   * @default 'XL'
   */
  prefix?: string;
}

/**
 * set of components that are contained in the package
 */
const primitiveNames = new Set<string>(['Avatar']);

function isAntdXVueComponent(name: string) {
  return primitiveNames.has(name);
}

// currently unnecessary to add side effects
// function getSideEffects(
//  componentName: string,
//  options: XLibraryResolverOptions = {}
// ) {
//   const { importStyle = true, packageName = 'x-library' } = options

//   if (!importStyle) return

//   return
// }

export function XLibraryVueResolver(options: XLibraryResolverOptions = {}) {
  const { prefix = 'XL', packageName = 'x-library', exclude = [] } = options;

  const resolverInfo = {
    type: 'component',
    resolve: (name: string) => {
      if (!name.startsWith(prefix)) return;

      const componentName = name.slice(prefix.length);

      if (
        !isAntdXVueComponent(componentName) ||
        exclude.includes(componentName)
      )
        return;

      return {
        name: componentName,
        from: packageName,
        as: `${prefix}${componentName}`,
      };
    },
  };
  return resolverInfo.resolve;
}
