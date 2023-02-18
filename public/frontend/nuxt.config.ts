import { defineNuxtConfig } from 'nuxt/config';
import {
  app,
  css,
  modules,
  plugins,
  runtimeConfig,
  typescript,
} from './config';

export default defineNuxtConfig({
  app,
  ssr: false,
  components: false,
  css,
  plugins,
  modules,
  runtimeConfig,
  typescript,
});
