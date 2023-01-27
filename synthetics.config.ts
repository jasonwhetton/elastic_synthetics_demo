import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'http://ellos.se',
    },
    playwrightOptions: {
      ignoreHTTPSErrors: false,
    },
    /**
     * Configure global monitor settings
     */
    monitor: {
      schedule: 10,
      locations: ['germany'],
      privateLocations: [],
    },
    /**
     * Project monitors settings
     */
    project: {
      id: 'ellos_test',
      url: 'https://3cc1aa9fb3bd45ba86fef563bb197b9f.eu-central-1.aws.cloud.es.io:443',
      space: 'default',
    },
  };
  if (env !== 'development') {
    /**
     * Override configuration specific to environment
     * Ex: config.params.url = ""
     */
  }
  return config;
};
