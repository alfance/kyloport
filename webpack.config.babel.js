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
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  }
// localhost:8080
}
