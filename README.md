# Stone.js: Config

[![npm](https://img.shields.io/npm/l/@stone-js/config)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/@stone-js/config)](https://www.npmjs.com/package/@stone-js/config)
[![npm](https://img.shields.io/npm/dm/@stone-js/config)](https://www.npmjs.com/package/@stone-js/config)
![Maintenance](https://img.shields.io/maintenance/yes/2025)
[![Publish Package to npmjs](https://github.com/stonemjs/config/actions/workflows/release.yml/badge.svg)](https://github.com/stonemjs/config/actions/workflows/release.yml)
[![Dependabot Status](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg?logo=dependabot)](https://github.com/stonemjs/config/network/updates)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Fluent and type-safe configuration management with deep property access, merging, and dynamic proxy fallback.

---

## Overview

`@stone-js/config` provides a smart, fluent API to manage application settings in any JavaScript or TypeScript project.

- 🔍 Deep property access (`config.get('nested.key')`)
- 🧠 Automatic fallback via Proxy (`config.someKey`)
- 📦 Merge strategies for objects and arrays
- ⚙️ Default value support, `getMany()`, `firstMatch()`, etc.
- 🧪 Fully tested with 100% coverage

## Installation

Install using your preferred package manager:

```bash
npm i @stone-js/config
# or
yarn add @stone-js/config
# or
pnpm add @stone-js/config
````

> ℹ️ **Note:** This package is **pure ESM**. Use `import` syntax and ensure your environment supports ESM.
> See: [Pure ESM Guide](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

```ts
import { Config } from '@stone-js/config'
```

## Getting Started

### Create a Config instance

```ts
const config = Config.create({
  app: { name: 'MyApp', env: 'prod' },
  features: { darkMode: true }
})
```

Or from JSON:

```ts
const config = Config.fromJson('{ "enabled": true }')
```

## Core API

### 🔍 Access values

```ts
config.get('app.name') // 'MyApp'
config.get('missing.key') // undefined
config.get('missing.key', 'default') // 'default'
```

Proxy fallback also works:

```ts
config['app.env'] // 'prod'
```

### 🔐 Check existence

```ts
config.has('features.darkMode') // true
```

### 🧠 First match

```ts
config.firstMatch(['missing', 'features.darkMode']) // true
config.firstMatch(['none'], 'fallback') // 'fallback'
```

### 📦 Retrieve many keys

```ts
config.getMany(['app.name', 'features.darkMode'])
// { 'app.name': 'MyApp', 'features.darkMode': true }

config.getMany({ 'unknown': 'default' })
// { unknown: 'default' }
```

### ⚙️ Set values

```ts
config.set('app.name', 'NewApp')
config.set({ 'app.env': 'dev', 'features.debug': true })
```

### 🧬 Merge with `add()`

```ts
config.add('features', { beta: false })
// merges into existing `features` object

config.add('list', [1])
config.add('list', 2)
// appends to array if already exists
```

### 📌 Set only if not exists

```ts
config.setIf('features.darkMode', false) // won't overwrite
config.setIf('newKey', 123) // will set
```

### ✅ Check exact value

```ts
config.is('app.env', 'prod') // true or false
```

### 🔄 Replace or reset all

```ts
config.setItems({ reset: true })
config.clear() // clears everything
```

### 🧾 Export

```ts
config.all() // returns raw object
config.toJson() // returns stringified version
```

## Full Example

```ts
const config = Config.create({ count: 1, nested: { flag: true } })

config.set('nested.flag', false)
config.add('nested', { added: 42 })
config.setIf('newKey', 'set only once')

console.log(config.get('nested.flag')) // false
console.log(config.get('nested.added')) // 42
console.log(config.get('newKey')) // 'set only once'

console.log(config.toJson()) // '{"count":1,"nested":{"flag":false,"added":42},"newKey":"set only once"}'
```

## Why use `@stone-js/config`?

* ✅ Fully tested (100% test coverage)
* 💡 Deep access, merging, and proxy support
* 🧩 Can replace many ad-hoc config patterns
* 🧼 Clean design with extensibility in mind
* 🔒 TypeScript-first

## Contributing

See [CONTRIBUTING.md](https://github.com/stonemjs/config/blob/main/CONTRIBUTING.md)

## Credits

* [Lodash](https://github.com/lodash/lodash) for deep utilities
* Inspired by [Laravel Config](https://github.com/laravel/framework/blob/10.x/src/Illuminate/Config/Repository.php)
