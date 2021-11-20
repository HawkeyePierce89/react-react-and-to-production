module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json'
    },
    extends: [
        "airbnb",
        'airbnb-typescript',
        "airbnb/hooks"
    ],
    env: {
        browser: true,
    },
    rules: {
        "@typescript-eslint/quotes": ["error", "double"],
        "react/function-component-definition": 0,
        "react/prop-types": 0,
    },
    "settings": {
        "import/resolver": "webpack"
    },
}
