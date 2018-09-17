import path from 'path'
export default {
  // the fiel will be started from. the app.js
  entry: ['./js/app.js'
  ],
// exported file, bundle.js
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:8080/'
  },
// pre-process files. all ends with js.
// react-hot:update module without page reload.
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
          test: /\.scss$/,
              use: [
                  "style-loader", // creates style nodes from JS strings
                  "css-loader", // translates CSS into CommonJS
                  "sass-loader" // compiles Sass to CSS, using Node Sass by default
              ]
      },
      {
        test: /\.(png|jpg|gif|svg|mtl|obj|drc)$/,
        loader: 'file-loader?name=img/img-[hash:6].[ext]'
      },
      {
        test: /\.(json|conf)$/,
        loader: 'json-loader'
      },
      {
        test: /\.(woff|ttf)$/,
        loader: 'file-loader?'
    }
    ]
  }
// localhost:8080
}
