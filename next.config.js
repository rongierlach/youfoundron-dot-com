const webpack = require('webpack')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv-safe').load()
}

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.GA_TRACKING_ID': JSON.stringify(process.env.GA_TRACKING_ID),
        'process.env.BUTTER_API_TOKEN': JSON.stringify(process.env.BUTTER_API_TOKEN),
        'process.env.RECAPTCHA_SITE_KEY': JSON.stringify(process.env.RECAPTCHA_SITE_KEY)
      })
    )

    return config
  }
}
