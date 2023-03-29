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
                "@typescript-eslint/consistent-type-imports": [
                    "error",
                    {
                        prefer: "type-imports",
                        disallowTypeAnnotations: true,
                        fixStyle: "separate-type-imports",
                    },
                ],
                "@typescript-eslint/consistent-type-exports": [
                    "error",
                    {fixMixedExportsWithInlineTypeSpecifier: false},
                ],
            },
        },
    ],
}
