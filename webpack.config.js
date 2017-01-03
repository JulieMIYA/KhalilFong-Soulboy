const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  assets: path.join(__dirname, 'app','/assets'),
  style: [
    path.join(__dirname, 'node_modules', 'purecss'),
    path.join(__dirname, 'app', 'main.sass')
  ],
  build: path.join(__dirname, 'build')
};

const common = merge(
    {
        entry: {
            style: PATHS.style,
            app: PATHS.app
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        resolve: {
            extensions: [ '.js', '.jsx']
        }
    },
    parts.indexTemplate({
        title: 'SoulBoy - Khalil Fong Portfolio',
        appMountId: 'app'
    }),
    parts.loadJSX(PATHS.app),
    parts.loadFile(PATHS.assets)
);

module.exports = function(env) {
  if (env === 'build') {
    return merge(
      common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          // This is used for code splitting. The setup
          // will work without but this is useful to set.
          chunkFilename: '[chunkhash].js',
          // Tweak this to match your GitHub project name
          publicPath: '/KhalilFong-Soulboy/'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
        parts.extractCSS(PATHS.style),
        parts.purifyCSS([PATHS.app]),
      parts.minify()
    );
  }

  return merge(
    common,
    {
      devtool: 'eval-source-map',
      // Disable performance hints during development
      performance: {
        hints: false
      }
    },
    parts.setupCSS(PATHS.style),
    parts.devServer({
      // Customize host/port here if needed
      host: process.env.HOST,
      port: process.env.PORT
    })
  );
};
