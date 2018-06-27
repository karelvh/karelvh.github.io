module.exports = {
  plugins: [
    require(`stylelint`),
    require(`postcss-reporter`)({ clearReportedMessages: true }),
    require(`postcss-will-change`),
    require(`postcss-import`),
    require(`postcss-preset-env`)({features: {
                                              'nesting-rules': true
                                  }})
    // require(`postcss-cssnext`)
  ]
};
