// module.exports = {
//   plugins: {
//     "autoprefixer": {
//       "overrideBrowserslist": [
//         "ie >= 8",
//         "Firefox >= 3.5",
//         "chrome  >= 35",
//         "opera >= 11.5"
//       ]
//     }
//   }
// };
module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        // 其他选项
      },
    ],
  ],
};