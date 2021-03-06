module.exports = {
  apps: [
    {
      name: 'perf-analytics',
      script: './index.js',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
