const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  webpack: (config, {dev}) => {
    // remove UglifyJsPlugin because breaking on ES6 code
    const plugins = config.plugins.filter(plugin => (
      plugin.constructor.name !== 'UglifyJsPlugin'
    ))

    // add UglifyES Plugin
    plugins.push(
      new UglifyJSPlugin({
        sourceMap: dev
      })
    )

    config.plugins = plugins

    return config
  }
}
