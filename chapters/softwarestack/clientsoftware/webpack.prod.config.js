const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new WebpackPwaManifest({
      name: 'Sharing-Station',
      short_name: 'ShSt',
      description: 'Sharing-Station Dialogmuseum Frankfurt',
      background_color: "#fafafa",
      theme_color: "#d33139",
      display: 'fullscreen',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: path.resolve('src/assets/icons/logo-fb.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 60000000,
      runtimeCaching: [{
        urlPattern: new RegExp('.*\/api\/.*'),
        handler: 'NetworkFirst'
      }]
     }),
  ],
});
