import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.nx.shell',
  appName: 'shell',
  webDir: '../../dist/apps/shell',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
}

export default config;
