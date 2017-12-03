const devServerConfig = {
  contentBase: __dirname,
  stats: 'minimal',
  host: '0.0.0.0',
  port: 9002,
  proxy: {
    '/': {
      target: {
        protocol: 'http:',
        host: 'localhost',
        port: 9100
      },
      bypass: function (req) {
        if (req.url.indexOf('html') !== -1) {
          const sliced = req.url.split('/');
          return sliced.pop();
        }
      }
    }
  }
};

module.exports = {
  entry: ['./index.js'],
  resolve: {
    extensions: ['.js', '.html', '.css']
  },
  devServer: devServerConfig
};