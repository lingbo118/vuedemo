module.exports = {
  lintOnSave: false,
  postcss: {
    autoprefixer: {},
    plugins: [
      require('postcss-px2rem')({
        remUnit: '37.5',
        propList: ['*']
      })
    ]
  }
}