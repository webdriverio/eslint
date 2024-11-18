import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { configs as wdioPlugin } from 'eslint-plugin-wdio';
import type { TSESLint } from '@typescript-eslint/utils';

/**
 * ESLint configuration for OutSystem projects.
 */
const baseConfigs: tseslint.ConfigWithExtends[] = [
    /**
     * base recommend configs
     */
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    /**
     * common Eslint rules for WebdriverIO projects
     */
    {
        extends: [
            wdioPlugin['flat/recommended']
        ],
        plugins: {
            unicorn,
            'unused-imports': unusedImports,
        },

        languageOptions: {
            globals: {
                ...globals.node,
            },
        },

        rules: {
            quotes: ['error', 'single', {
                avoidEscape: true,
            }],

            camelcase: ['error', {
                properties: 'never',
            }],

            semi: ['error', 'never'],
            indent: [2, 4],
            eqeqeq: ['error', 'always'],
            'prefer-const': 'error',

            'no-multiple-empty-lines': [2, {
                max: 1,
                maxEOF: 1,
            }],

            'array-bracket-spacing': ['error', 'never'],

            'brace-style': ['error', '1tbs', {
                allowSingleLine: true,
            }],

            'comma-spacing': ['error', {
                before: false,
                after: true,
            }],

            'no-lonely-if': 'error',
            'dot-notation': 'error',
            'no-else-return': 'error',
            'no-tabs': 'error',

            'no-trailing-spaces': ['error', {
                skipBlankLines: false,
                ignoreComments: false,
            }],

            'no-var': 'error',
            'unicode-bom': ['error', 'never'],
            curly: ['error', 'all'],
            'object-curly-spacing': ['error', 'always'],
            'keyword-spacing': ['error'],
            'require-atomic-updates': 0,
            'linebreak-style': ['error', 'unix'],
            'unicorn/prefer-node-protocol': ['error'],
            'no-restricted-syntax': ['error', 'IfStatement > ExpressionStatement > AssignmentExpression'],
            'unicorn/prefer-ternary': 'error',
            'no-dupe-class-members': 'off',
        },
    },
    /**
     * Rules explicitly for TypeScript files
     */
    {
        files: ['**/*.ts'],

        rules: {
            'dot-notation': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-unsafe-function-type': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            'no-undef': 'off',
            'no-redeclare': 'off',
        },
    }
];

export const config = (...configs: tseslint.ConfigWithExtends[]) => tseslint.config(
    ...baseConfigs,
    ...configs
) as TSESLint.FlatConfig.ConfigArray;

/**
 * export a `config` function that merges the base configs with the provided ones.
 */
export default { config };
