[**Config Documentation v0.0.31**](../../README.md) • **Docs**

***

[Config Documentation v0.0.31](../../modules.md) / [Config](../README.md) / Config

# Class: Config\<T\>

Class representing a Config.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`Proxiable`](../../Proxiable/classes/Proxiable.md)

## Type Parameters

• **T** = `any`

## Constructors

### new Config()

> `protected` **new Config**\<`T`\>(`items`): [`Config`](Config.md)\<`T`\>

Create a Config.

#### Parameters

• **items**: [`ConfigItems`](../type-aliases/ConfigItems.md)\<`T`\> = `{}`

Initial configuration items.

#### Returns

[`Config`](Config.md)\<`T`\>

#### Overrides

[`Proxiable`](../../Proxiable/classes/Proxiable.md).[`constructor`](../../Proxiable/classes/Proxiable.md#constructors)

#### Defined in

[Config.ts:34](https://github.com/stonemjs/config/blob/71aa8e7df3c3aad305e3c44d63b80a9db38e4e18/src/Config.ts#L34)

## Methods

### add()

> **add**\<`V`\>(`key`, `value`): `this`

Allows providers to define the default config for a module.

#### Type Parameters

• **V**

#### Parameters

• **key**: `PropertyKey`

The key or keys to set as defaults.

• **value**: `V`

The value to set as default.

#### Returns

`this`

The current Config instance.

#### Defined in

[Config.ts:116](https://github.com/stonemjs/config/blob/71aa8e7df3c3aad305e3c44d63b80a9db38e4e18/src/Config.ts#L116)

***

### all()

> **all**(): [`ConfigItems`](../type-aliases/ConfigItems.md)\<`T`\>

Get all of the configuration items as a literal object.

#### Returns

[`ConfigItems`](../type-aliases/ConfigItems.md)\<`T`\>

All configuration items.

#### Defined in

[Config.ts:129](https://github.com/stonemjs/config/blob/71aa8e7df3c3aad305e3c44d63b80a9db38e4e18/src/Config.ts#L129)

***

### clear()

> **clear**(): `this`

Clear all of the configuration items.

#### Returns

`this`

The current Config instance.

#### Defined in

[Config.ts:138](https://github.com/stonemjs/config/blob/71aa8e7df3c3aad305e3c44d63b80a9db38e4e18/src/Config.ts#L138)

***

### firstMatch()

> **firstMatch**\<`R`\>(`keys`, `fallback`?): `R`

Get the first match configuration value.

#### Type Parameters

• **R**

#### Parameters

• **keys**: `PropertyKey`[]

An array of keys to check.

• **fallback?**: `R`

The fallback value if no key matches.

#### Returns

`R`

The first matching configuration value.

#### Defined in

[Config.ts:66](https://github.com/stonemjs/config/blob/71aa8e7df3c3aad305e3c44d63b80a9db38e4e18/src/Config.ts#L66)

***

### get()

> **get**\<`R`\>(`key`, `fallback`?): `undefined` \| `R`

Get the specified configuration value.

#### Type Parameters

• **R**

#### Parameters

• **key**: `PropertyKey`

The key or keys to retrieve from the configuration.

• **fallback?**: `R`

The fallback value if the key does not exist.

#### Returns

`undefined` \| `R`

The configuration value.

#### Defined in

[Config.ts:55](https://github.com/stonemjs/config/blob/71aa8e7df3c3aad305e3c44d63b80a9db38e4e18/src/Config.ts#L55)

***

### getMany()

> **getMany**\<`R`\>(`keys`): `R`

Get many configuration values.

#### Type Parameters

• **R**

#### Parameters

• **keys**: `PropertyKey`[] \| `Record`\<`PropertyKey`, `T`\>

The keys to retrieve from the configuration.

#### Returns

`R`

An object containing the requested configuration values.

#### Defined in

[Config.ts:77](https://github.com/stonemjs/config/blob/71aa8e7df3c3aad305e3c44d63b80a9db38e4e18/src/Config.ts#L77)

***

### has()

> **has**(`key`): `boolean`

Determine if the given configuration value exists.

#### Parameters

• **key**: `PropertyKey` \| `PropertyKey`[]

The key or keys to check.

#### Returns

`boolean`

True if the key exists, false otherwise.

#### Defined in

[Config.ts:88](https://github.com/stonemjs/config/blob/71aa8e7df3c3aad305e3c44d63b80a9db38e4e18/src/Config.ts#L88)

***

### set()

> **set**\<`V`\>(`key`, `value`?): `this`

Set a given configuration value.

#### Type Parameters

• **V**

#### Parameters

• **key**: `PropertyKey` \| `PropertyKey`[] \| `Record`\<`PropertyKey`, `T`\>

The key or keys to set in the configuration.

• **value?**: `V`

The value to set.

#### Returns

`this`

The current Config instance.

#### Defined in

[Config.ts:99](https://github.com/stonemjs/config/blob/71aa8e7df3c3aad305e3c44d63b80a9db38e4e18/src/Config.ts#L99)

***

### create()

> `static` **create**\<`T`\>(`items`): [`Config`](Config.md)\<`T`\>

Create a Config.

#### Type Parameters

• **T**

#### Parameters

• **items**: [`ConfigItems`](../type-aliases/ConfigItems.md)\<`T`\> = `{}`

Initial configuration items.

#### Returns

[`Config`](Config.md)\<`T`\>

A new Config instance.

#### Defined in

[Config.ts:25](https://github.com/stonemjs/config/blob/71aa8e7df3c3aad305e3c44d63b80a9db38e4e18/src/Config.ts#L25)
