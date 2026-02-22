import type { App } from 'vue';
import * as components from './components';

export * from './_utils';
export * from './components';

export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    // @ts-ignore
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
  return app;
};

export default {
  install,
};
