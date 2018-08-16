module.exports = {
    env: {
        browser: true,
    },
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2017,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: "airbnb",
    plugins: [
        "react",
        "jsx-a11y",
        "import",
    ],
    rules: {
        'no-new': 0,
        "react/jsx-indent": ["error", 4],
        "indent": ["error", 4],
        "max-len": 0
    },
};
