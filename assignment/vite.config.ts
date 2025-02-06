import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true, // Allow external access
    port: 5173, // Ensure this matches your ngrok setup
    strictPort: true,
    cors: true, // Allow cross-origin requests
    allowedHosts: ["b2dc-2405-201-5c1a-200b-ff08-b87e-5ac-bf8d.ngrok-free.app"], // Add your ngrok domain here
    hmr: {
      protocol: "wss",
      host: "b2dc-2405-201-5c1a-200b-ff08-b87e-5ac-bf8d.ngrok-free.app", // Your ngrok URL
      clientPort: 443, // Force HMR over HTTPS
    },
  },
});
