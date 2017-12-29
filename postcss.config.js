module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["ios >=8", "android >=4.0"]
    },
    "postcss-px2rem": {
      remUnit: 75,
      baseDpr: 2
    }
  }
}
