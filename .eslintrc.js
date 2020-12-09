module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: ["@bradgarropy/eslint-config"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: ["plugin:@typescript-eslint/recommended"],
        },
    ],
    parserOptions: {
        ecmaFeatures: {},
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    rules: {},
    settings: {},
}
