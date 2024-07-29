// import { sentryVitePlugin } from "@sentry/vite-plugin";
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000',
//         secure: false
//       }
//     },
//   },

//   plugins: [react(), sentryVitePlugin({
//     org: "piyush-panchabhai",
//     project: "javascript-react"
//   })],

//   build: {
//     sourcemap: true
//   }
// })

import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
  },

  plugins: [react(), sentryVitePlugin({
    org: "piyush-panchabhai",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom','react-icons/fa','react-icons/md'],
    },
  }
});
