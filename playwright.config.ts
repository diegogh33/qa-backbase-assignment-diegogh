import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './features',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:8080',
    browserName: 'chromium',
    headless: false, // Modo visible
    launchOptions: {
      slowMo: 500, // Opcional: ralentiza las acciones 500ms para que las veas
    },
  },
  // Añadimos esta línea para forzar que Cucumber use Playwright como test runner
  fullyParallel: false,
  workers: 1, // Para que las pruebas vayan de una en una y sean más fáciles de seguir
};

export default config;