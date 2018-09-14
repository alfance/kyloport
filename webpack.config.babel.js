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
        loaders: ['style-loader', 'css-loader', 'sass-loader']
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
    },
    devServer: {
   historyApiFallback: true,
 },
 plugins: [
   new HtmlWebpackPlugin({
     template: 'app/index.html'
   })
 ]
    ]
  }
// localhost:8080
}
