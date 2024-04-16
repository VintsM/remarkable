module.exports = {
    env: {
        es2024: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['dist', 'package.json', 'package-lock.json'],
    rules: {},
    overrides: [
        {
            // Файлы в папке src
            files: ['src/**/*.{ts,tsx}'],
            env: {
                browser: true,
            },
            extends: ['plugin:react/recommended', 'prettier'],
            plugins: ['react'],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                sourceType: 'module',
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
            rules: {
                'react/jsx-uses-react': 'off',
                'react/react-in-jsx-scope': 'off',
            },
        },
        {
            // Файлы в корне проекта
            files: ['./*.{js,ts}'],
            env: {
                node: true,
            },
            extends: ['prettier'],
            rules: {
                '@typescript-eslint/no-var-requires': 0,
            },
        },
    ],
};
