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
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['Actions', './src/actions/'],
                    ['Components', './src/components/'],
                    ['Constants', './src/constants/'],
                    ['Helpers', './src/helpers/'],
                ],
            }
        }
    },
    rules: {
        'no-new': 0,
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "max-len": 0,
        "no-console": 1,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": [2, 4],
        // temporary disable
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/label-has-associated-control": 0,
    },
};
