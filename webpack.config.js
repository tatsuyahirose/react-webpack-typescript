const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');

// [定数] webpack の出力オプションを指定
// 'production' か 'development' を指定
const MODE = process.env.NODE_ENV;

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

const jsEntryPoint = './src/component/index.tsx';

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: jsEntryPoint,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, './dist'),
    // 出力ファイル名
    filename: "bundle.js"
  },

  module: {
    rules: [
      // jsファイルの読み込み
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      },

      // CSSファイルの読み込み
      {
        // 対象となるファイルの拡張子
        test: /\.css/,
        use: [
          // CSSファイルを書き出すオプションを有効にする
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSを読み込む
          'css-loader',
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: enabledSourceMap,
              plugins: [
                // cssをminify
                cssnano({
                  preset: 'default',
                }),
                // Autoprefixerを有効化
                // ベンダープレフィックスを自動付与する
                autoprefixer({
                  grid: true,
                  // ☆IEは11以上、Androidは4.4以上
                  // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
                  overrideBrowserslist: [
                    "last 2 versions",
                    "ie >= 11",
                    "Android >= 4"
                  ]
                })
              ]
            }
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
};
