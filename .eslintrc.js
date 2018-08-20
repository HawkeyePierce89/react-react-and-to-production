module.exports = {
    env: {
        browser: true,
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2018,
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
        "max-len": 0,
        "no-console": 1,
    },
};
