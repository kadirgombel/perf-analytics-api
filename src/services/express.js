const express = require('express');
const forceSSL = require('express-force-ssl');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const env = process.env.NODE_ENV;

module.exports = (apiRoot, routes) => {
  const app = express();

  /* istanbul ignore next */
  if (env === 'production') {
    app.set('forceSSLOptions', {
      enable301Redirects: false,
      trustXFPHeader: true,
    });
    app.use(forceSSL);
  }

  /* istanbul ignore next */
  if (env === 'development') {
    app.use(morgan('dev'));
  }

  // These middlewares doesn't work in test environment
  /* istanbul ignore next */
  if (env === 'production' || env === 'development') {
    app.use(cors());
    app.use(helmet());
    app.use(compression());
  }

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.text());
  app.use(apiRoot, routes);

  return app;
};
