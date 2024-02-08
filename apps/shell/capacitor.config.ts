import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'myapp',
  appName: 'shell',
  webDir: 'dist/apps/shell',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
}

export default config;
