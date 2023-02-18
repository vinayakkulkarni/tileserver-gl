import { NuxtConfig } from '@nuxt/schema';
import { head } from './head';

const app: NuxtConfig['app'] = {
  head,
};

const runtimeConfig: NuxtConfig['runtimeConfig'] = {
  public: {
    appVersion: process.env.npm_package_version,
  },
};

const css: NuxtConfig['css'] = [
  'maplibre-gl/dist/maplibre-gl.css',
  'maplibre-gl-inspect/dist/maplibre-gl-inspect.css',
  '~/assets/css/global.css',
  '~/assets/css/typography.css',
];

const plugins: NuxtConfig['plugins'] = [];

const typescript: NuxtConfig['typescript'] = {
  strict: true,
  shim: false,
};

export { modules } from './modules';
export { app, css, plugins, runtimeConfig, typescript };
