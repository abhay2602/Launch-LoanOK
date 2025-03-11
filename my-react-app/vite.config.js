import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true,
    strictPort: true,
    cors: true,  // Enable CORS
    origin: "https://530a-59-96-33-119.ngrok-free.app ", // Allow Ngrok URL
  },
});
