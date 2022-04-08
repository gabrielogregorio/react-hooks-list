<div align="center">

# React Hooks List

![NPM package](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

  
<a href="https://www.npmjs.com/package/react-hooks-list" target="blank">React Hooks List - NPM</a>
</div>

## Introduction
This project is a collection of react hooks, for now, my study project.

## Badges

![GitHub stars](https://img.shields.io/github/stars/gabrielogregorio/react-hooks-list)
![GitHub last commit](https://img.shields.io/github/last-commit/gabrielogregorio/react-hooks-list?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/gabrielogregorio/react-hooks-list)
![GitHub language count](https://img.shields.io/github/languages/count/gabrielogregorio/react-hooks-list)
![GitHub repo size](https://img.shields.io/github/repo-size/gabrielogregorio/react-hooks-list) ![statements](./coverage/badge-statements.svg) ![branchs](./coverage/badge-branches.svg) ![functions](./coverage/badge-functions.svg) ![lines](./coverage/badge-lines.svg)

## How use package
### Use steps
Used to count steps

```typescript
const { step, nextStep, prevStep, reset } = useSteps();
```
## Contributing with project

Read [Contributing.md](CONTRIBUTING.md)

## Available scripts
```bash
# Install packages
npm install

# build package
npm run build

# test jest
npm run jest

# Test jest watchAll
npm run jest:watchAll

# Test jest coverage
npm run jest:coverage
```

```bash
# Test package in local
## ~/react-hooks-list
npm link

## ~/react-hooks-list
npm link ../my-test-project/node_modules/react

## ~/my-test-project
npm link "react-hooks-list"
```
### Tests
```bash
# Tests with react testing library and cypress(e2e)
yarn test
yarn cypress

# Tests in watch mode and coverage
yarn test:watch-all
yarn test:watch-all:coverage

```
## Vscode extensions for this project

| Extension | Description | Author |
|-----------|--------|---------|
| Eslint  | For linting code | Microsoft |
| Prettier - Code formatter | For beautifully formate code | Prettier |
| Prettier Eslint  | Integration prettier and eslint | Rebecca Vest |
| Gitignore  | For use .gitignore | CodeZombie |
