import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  publicDir: 'assets',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
      },
    },
    rollupOptions: {
      output: {
        // Minimize asset inline size threshold
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash][extname]';
          }
          if (assetInfo.name.match(/\.(png|jpe?g|gif|svg)$/)) {
            return 'images/[name]-[hash][extname]';
          }
          if (assetInfo.name.match(/\.(woff2?|ttf|otf|eot)$/)) {
            return 'fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
      },
    },
    // Reporting compressed size
    reportCompressedSize: true,
    // Chunk size warning limit in kbs
    chunkSizeWarningLimit: 500,
  },

  server: {
    port: 5173,
    open: true,
    cors: true,
    // Proxy configuration if needed
    proxy: {
      // '/api': {
      //   target: 'https://api.example.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
  },

  preview: {
    port: 4173,
    open: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    // Pre-bundle dependencies if ever added
    include: [],
  },

  // Common configuration
  define: {
    // Define environment variables
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
      '@js': resolve(__dirname, './js'),
      '@css': resolve(__dirname, './css'),
      '@assets': resolve(__dirname, './assets'),
    },
  },

  logLevel: 'info',
});
