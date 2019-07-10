// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  // required to lint *.vue files
  plugins: ["html", "vue"],
  // add your custom rules here
  rules: {
    "no-console": 0,
    "no-undef": 0,
    // allow async-await
    "space-before-function-paren": ["error", "never"],
    "prettier/prettier": "0",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
