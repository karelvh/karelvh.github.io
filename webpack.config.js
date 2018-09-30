const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

const ImageminPlugin = require(`imagemin-webpack-plugin`).default;
const imageminJpegRecompress = require(`imagemin-jpeg-recompress`);

const merge = require(`webpack-merge`);
const parts = require(`./webpack.parts`);
const BrowserSyncPlugin = require(`browser-sync-webpack-plugin`);

const port = 3100;

const PATHS = {
  src: path.join(__dirname, `src`),
  dist: path.join(__dirname, `dist`)
};

const commonConfig = merge([
  {
    entry: [
      path.join(PATHS.src, `css/style.css`),
      path.join(PATHS.src, `js/script.js`)
    ],
    output: {
      path: PATHS.dist,
      filename: `js/script.[hash].js`
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: `html-loader`,
          options: {
            attrs: [`img:src`, `source:srcset`]
          }
        },
        {
          test: /\.(jpe?g|png|gif|webp|svg)$/,
          use: [
            {
              loader: `file-loader`,
              options: {
                limit: 1000,
                context: `./src`,
                name: `[path][name].[ext]`
              }
            },
            {
              loader: `image-webpack-loader`,
              options: {
                bypassOnDebug: true,
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: `65-90`,
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                }
              }
            }
          ]
        },
        {
          test: /\.(jsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: `babel-loader`
            },
            {
              loader: `eslint-loader`,
              options: {
                fix: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `./src/index.html`
      }),
      new HtmlWebpackPlugin({
        filename: `about.html`,
        template: `./src/about.html`
      }),
      new HtmlWebpackPlugin({
        filename: `vertigo.html`,
        template: `./src/vertigo.html`
      }),
      new HtmlWebpackPlugin({
        filename: `pmr.html`,
        template: `./src/pmr.html`
      }),
      new HtmlWebpackPlugin({
        filename: `fender.html`,
        template: `./src/fender.html`
      }),
      new HtmlWebpackPlugin({
        filename: `debate.html`,
        template: `./src/debate.html`
      }),
      new HtmlWebpackPlugin({
        filename: `babeleir.html`,
        template: `./src/babeleir.html`
      }),
      // TODO add htmlwebpackplugin for all pages
      new BrowserSyncPlugin(
        // BrowserSync options
        {
          // browse to http://localhost:3100/ during development
          host: `localhost`,
          port: 3000,
          // proxy the Webpack Dev Server endpoint
          // (which should be serving on http://localhost:3000/)
          // through BrowserSync
          proxy: `http://localhost:3100/`
        },
        // plugin options
        {
          // prevent BrowserSync from reloading the page
          // and let Webpack Dev Server take care of this
          reload: false
        }
      )
    ]
  }
]);

const productionConfig = merge([
  parts.extractCSS(),
  {
    plugins: [
      new ImageminPlugin({
        test: /\.(jpe?g)$/i,
        plugins: [imageminJpegRecompress({})]
      })
    ]
  }
]);

const developmentConfig = merge([
  {
    devServer: {
      overlay: true,
      contentBase: PATHS.src,
      port
    }
  },
  parts.loadCSS()
]);

module.exports = () => {
  if (process.env.NODE_ENV === `production`) {
    console.log(`building production`);
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
