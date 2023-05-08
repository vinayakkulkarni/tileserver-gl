import { NuxtConfig } from '@nuxt/schema';
// import { useNitroConfig } from './nitro';
import { head } from './head';

const app: NuxtConfig['app'] = {
  head,
};

const css: NuxtConfig['css'] = [
  'maplibre-gl/dist/maplibre-gl.css',
  'maplibre-gl-inspect/dist/maplibre-gl-inspect.css',
  '~/assets/css/global.css',
  '~/assets/css/typography.css',
];

const components: NuxtConfig['components'] = false;

const plugins: NuxtConfig['plugins'] = [];

const runtimeConfig: NuxtConfig['runtimeConfig'] = {
  public: {
    appVersion: process.env.npm_package_version,
  },
};

const ssr: NuxtConfig['ssr'] = false;

const typescript: NuxtConfig['typescript'] = {
  strict: true,
  shim: false,
};

const hooks: NuxtConfig['hooks'] = {
  // async 'nitro:config'(nitroConfig) {
  //   if (nitroConfig.dev) {
  //     return;
  //   }
  //   const routes = await useNitroConfig();
  //   nitroConfig.prerender?.routes?.push(...routes);
  // },
};

export { modules } from './modules';
export { app, css, components, hooks, plugins, runtimeConfig, ssr, typescript };
