# 🟦 eslint-config-typescript

### _This package is deprecated. Please use [@bradgarropy/eslint-config][eslint-config] instead._

---

<a href="https://www.npmjs.com/package/@bradgarropy/eslint-config-typescript">
    <img alt="npm" src="https://img.shields.io/npm/v/@bradgarropy/eslint-config-typescript.svg?color=FB3B49&style=flat-square">
</a>

<a href="https://www.npmjs.com/package/@bradgarropy/eslint-config-typescript">
    <img alt="npm" src="https://img.shields.io/npm/dt/@bradgarropy/eslint-config-typescript?style=flat-square">
</a>

_My personal [eslint][eslint] configuration for [typescript][typescript]._

## 📦 Installation

This package is hosted on [npm][npm].

Install the configuration as a development dependency.

```
npm install --dev @bradgarropy/eslint-config-typescript
```

## 🥑 Usage

Create an `eslint.config.js` file in the root of your project and tell it to extend the configuration.

```javascript
import bgConfigTypescript from "@bradgarropy/eslint-config-typescript"

const config = [...bgConfigTypescript]

export default config
```

> You can add more ESLint configuration options in this file if you want.

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

[eslint]: https://eslint.org
[typescript]: https://typescriptlang.org
[npm]: https://www.npmjs.com/package/@bradgarropy/eslint-config-typescript
[issues]: https://github.com/bradgarropy/eslint-config/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://github.com/bradgarropy/ama
[eslint-config]: https://npmjs.com/package/@bradgarropy/eslint-config
