# pnpm-typescript-template

A minimal template for starting modern TypeScript projects with fast, reliable tooling. This repo is designed to help you quickly set up a new project with best practices and easy maintainability.

It is configured with monorepos in mind but it's not a requirement.

## Key Tools

| Tool           | Purpose/Benefit                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **pnpm**       | Next-gen package manager. Faster, disk-efficient, isolated installs. ([pnpm docs](https://pnpm.io))                    |
| **TypeScript** | Strongly typed JavaScript. Prevents bugs, improves code reliability. ([TS docs](https://www.typescriptlang.org/docs/)) |
| **eslint**     | Automated code linting. Enforces standards, catches errors early. ([eslint docs](https://eslint.org/docs/latest/))     |
| **Vitest**     | Fast testing framework. Write and run tests easily. ([Vitest docs](https://vitest.dev/guide/))                         |

## How to Use

1. **Install dependencies:**
   `pnpm install`

2. **Run type checks:**
   `pnpm typecheck`

3. **Lint and fix/format:**
   `pnpm lint` and `pnpm lint:fix`

4. **Run tests:**
   `pnpm test`
