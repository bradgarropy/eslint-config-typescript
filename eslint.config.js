import globals from "globals"
import tseslint from "typescript-eslint"

const config = [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
                ...globals.es2021,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {},
                sourceType: "module",
                project: "./tsconfig.json",
            },
        },
    },
    ...tseslint.configs.recommended,
    {
        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
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
                {
                    fixMixedExportsWithInlineTypeSpecifier: false,
                },
            ],
        },
    },
]

export default config
