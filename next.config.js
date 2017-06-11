const DotEnv = require('dotenv-webpack')
const { EnvironmentPlugin } = require('webpack')

module.exports = {
  webpack: (config, {dev}) => {
    // plugins
    // const plugins = []
    // const env = dev
    //   ? new DotEnv({safe: true})
    //   : new EnvironmentPlugin({
    //     'process.env.GA_TRACKING_ID': JSON.stringify(process.env.GA_TRACKING_ID),
    //     'process.env.BUTTER_API_TOKEN': JSON.stringify(process.env.BUTTER_API_TOKEN)
    //   })
    //
    // plugins.push(env)
    //
    // config.plugins = config.plugins || []
    // config.plugins.push(...plugins)

    return config
  }
}
