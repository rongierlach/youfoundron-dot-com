const DotEnv = require('dotenv-webpack')

module.exports = {
  webpack: (config, {dev}) => {
    // plugins
    const plugins = []
    const dotEnv = new DotEnv({safe: true})

    plugins.push(dotEnv)

    config.plugins = config.plugins || []
    config.plugins.push(...plugins)

    return config
  }
}
