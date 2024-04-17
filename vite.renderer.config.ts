import type { ConfigEnv, UserConfig } from 'vite';
import { defineConfig } from 'vite';
import { pluginExposeRenderer } from './vite.base.config';
const path = require("path");

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<'renderer'>;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  return {
    root,
    mode,
    base: './',
    esbuild: {
      loader: "tsx",
      include: [
        './src/renderer.tsx',
        './frontend/**/*',
      ]
    },
    build: {
      outDir: `.vite/renderer/${name}`,
    },
    plugins: [pluginExposeRenderer(name)],
    resolve: {
      alias: {
        'frontend': __dirname + '/frontend/'
      }
    },
    clearScreen: false,
  } as UserConfig;
});