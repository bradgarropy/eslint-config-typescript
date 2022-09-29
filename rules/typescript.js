module.exports = {
    rules: {},
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: ["plugin:@typescript-eslint/recommended"],
            rules: {
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        ignoreRestSiblings: true,
                    },
                ],
            },
        },
    ],
}
