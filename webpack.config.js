// Path is in Node for free and will make simple resolving of directories no
// matter which part of your file system your library lives in
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const Package = require('./package.json');

// Webpack is just a bunch of keys on module.exports!
const config = {
  mode: 'development',
  // This is where our app starts. This is why we have done all this importing
  // and exporting, to get to here
  entry: './src/index.js',
  // module (I know it's a bit weird to have module.exports.module) is where we
  // define all the rules for how webpack will deal with thing.
  devtool: 'eval-source-map',
  module: {
    // rules takes an array, each item containing the respective rules
    rules: [
      {
        // First up, our JavaScript rules.
        // If you want to use the .jsx extension, you can change this line to
        // test: /\.jsx?$/,
        // The ? in the regex just means "optional"
        test: /\.(js|jsx)$/,
        // Don't bother spending time transpiling your installed packages
        // exclude: /node_modules/,
        // This is where we tell webpack to use babel to transpile our JS.
        // The configuration can go here, but in this case it's in ./babelrc.js
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // I haven't used SCSS in the base example, but it's here for you if you
        // want! If you want to use CSS, you can change this next like's regex to
        // /\.(css|scss)$/ or even just /\.css$/
        test: /\.(css|scss)$/,
        use: [
          // These three libraries are commonly used together to turn Sass into
          // CSS, then be able to load the CSS directly with imports. From there
          // It gets put in the DOM for you.
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        // Some image formats so you can import images
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader'],
      },
    ],
  },
  // Here we define explicitly the file types we intend to deal with
  resolve: {
    extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  // This is where we define how everything gets output.
  // dist is a common output folder, and it should be gitignored. The build can
  // be run after publishing so you don't wind up with it in source control
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    // You can do fun things here like use the [hash] keyword to generate unique
    // filenames, but for this purpose rinse.js is fine. This file and path will
    // be what you put in package.json's "main" field
    filename: 'main.js',
    // This field determines how things are importable when installed from other
    // sources. UMD may not be correct now and there is an open issue to fix this,
    // but until then, more reading can be found here:
    // https://webpack.js.org/configuration/output/#output-librarytarget
    libraryTarget: 'umd',
    sourceMapFilename: '[name].js.map',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/lib/components/index.js', to: 'index.js' },
        {
          from: 'src/lib/package.tmp',
          to: 'package.json',
          transform(content) {
            return content
              .toString()
              .replace('[VERSION]', Package.version)
              .replace(
                '[DEPENDENCIES]',
                JSON.stringify(Package.dependencies, null, 4),
              );
          },
        },
        { from: 'src/lib/README.md', to: 'README.md' },
        {
          context: 'src/lib/components/',
          from: '**/README.md',
          filter: async resourcePath => {
            if (
              new RegExp(
                ['InputText', 'Label', 'MainContainer', 'MainSection'].join(
                  '|',
                ),
              ).test(resourcePath)
            ) {
              return false;
            }
            return true;
          },
        },
      ],
    }),
    new Webpack.BannerPlugin({
      banner: `${Package.name} - ${Package.version}`,
      entryOnly: true,
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.mode = 'production';
    config.output.filename = '[name].js';
    config.entry = {
      'Inputs/index': './src/lib/components/Inputs/index.js',

      'Accordion/index': './src/lib/components/Accordion/index.js',
      'AmountInput/index': './src/lib/components/AmountInput/index.js',
      'Button/index': './src/lib/components/Button/index.js',
      'Checkbox/index': './src/lib/components/Checkbox/index.js',
      'CheckboxGroup/index': './src/lib/components/CheckboxGroup/index.js',
      'ChqMenu/index': './src/lib/components/ChqMenu/index.js',
      'CodeCombo/index': './src/lib/components/CodeCombo/index.js',
      'CodeTextLookup/index': './src/lib/components/CodeTextLookup/index.js',
      'DataGrid/index': './src/lib/components/DataGrid/index.js',
      'DataTable/index': './src/lib/components/DataTable/index.js',
      'Date/index': './src/lib/components/Date/index.js',
      'DateTimePicker/index': './src/lib/components/DateTimePicker/index.js',
      'DownLoadFile/index': './src/lib/components/DownLoadFile/index.js',
      'FileUpload/index': './src/lib/components/FileUpload/index.js',
      'Grid/index': './src/lib/components/Grid/index.js',
      'FocusManager/index': './src/lib/components/FocusManager/index.js',
      'Input/index': './src/lib/components/Input/index.js',
      'InputLabel/index': './src/lib/components/InputLabel/index.js',
      'Layout/index': './src/lib/components/Layout/index.js',
      'LoadingIndicator/index':
        './src/lib/components/LoadingIndicator/index.js',
      'Modal/index': './src/lib/components/Modal/index.js',
      'NumberInput/index': './src/lib/components/NumberInput/index.js',
      'PostfixContainer/index':
        './src/lib/components/PostfixContainer/index.js',
      'RDataGrid/index': './src/lib/components/RDataGrid/index.js',
      'Section/index': './src/lib/components/Section/index.js',
      'SimpleDataTable/index': './src/lib/components/SimpleDataTable/index.js',
      'Tab/index': './src/lib/components/Tab/index.js',
      'TejaratLoading/index': './src/lib/components/TejaratLoading/index.js',
      'ThemeProvider/index': './src/lib/components/ThemeProvider/index.js',
      'Tree/index': './src/lib/components/Tree/index.js',
    };
    config.externals = [
      'react',
      'react-dom',
      'react-file-reader-input',
      'react-intl',
      'react-router-dom',
      'react-number-format',
      '@date-io/jalaali',
      /^@material-ui\/.+$/,
      /^moment.*$/,
      'uuid',
      'styled-components',
      'numeral',
      'rc-easyui',
      'rsuite-table',
      'react-js-pagination',
      'lodash',
    ];
    return config;
  }

  return config;
};
