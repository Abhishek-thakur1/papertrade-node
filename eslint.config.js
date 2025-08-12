const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
    // 1. Config for JS files and other non-TS files (including your eslint config)
    {
        files: ['**/*.js', '**/*.cjs', '**/*.mjs', 'eslint.config.js'],
        ignores: ['dist/*', 'node_modules', 'src/plugins', 'assets/icons', 'scripts'],
        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            parserOptions: {
                sourceType: 'module',
            },
            globals: {},
        },
        plugins: {
            prettier: require('eslint-plugin-prettier'),
            'unused-imports': require('eslint-plugin-unused-imports'),
            import: require('eslint-plugin-import'),
        },
        rules: {
            // 'prettier/prettier': 'warn',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'import/no-unresolved': 'warn',
            'import/named': 'warn',
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json',
                },
            },
        },
    },

    // 2. Config for TS source files only, with project info
    {
        files: ['**/*.ts', '**/*.tsx'],
        ignores: ['dist/*', 'node_modules', 'src/plugins', 'assets/icons', 'scripts'],
        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
            },
            globals: {},
        },
        plugins: {
            prettier: require('eslint-plugin-prettier'),
            'unused-imports': require('eslint-plugin-unused-imports'),
            import: require('eslint-plugin-import'),
        },
        rules: {
            // 'prettier/prettier': 'warn',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'import/no-unresolved': 'warn',
            'import/named': 'warn',
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json',
                },
            },
        },
    },
]);
