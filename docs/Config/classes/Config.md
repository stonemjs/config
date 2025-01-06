[**Config Documentation v0.0.34**](../../README.md)

***

[Config Documentation](../../modules.md) / [Config](../README.md) / Config

# Class: Config\<TObject\>

Defined in: [Config.ts:12](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L12)

Class representing a Config.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`Proxiable`](../../Proxiable/classes/Proxiable.md)

## Type Parameters

• **TObject** *extends* `object` = `Record`\<`PropertyKey`, `unknown`\>

## Constructors

### new Config()

> `protected` **new Config**\<`TObject`\>(`items`?): [`Config`](Config.md)\<`TObject`\>

Defined in: [Config.ts:30](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L30)

Create a Config.

#### Parameters

##### items?

`any`

Initial configuration items.

#### Returns

[`Config`](Config.md)\<`TObject`\>

#### Overrides

[`Proxiable`](../../Proxiable/classes/Proxiable.md).[`constructor`](../../Proxiable/classes/Proxiable.md#constructors)

## Methods

### add()

> **add**\<`TValue`\>(`key`, `value`): `this`

Defined in: [Config.ts:147](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L147)

Allows providers to define the default config for a module.

#### Type Parameters

• **TValue**

#### Parameters

##### key

`PropertyKey`

The key or keys to set as defaults.

##### value

`TValue`

The value to set as default.

#### Returns

`this`

The current Config instance.

***

### all()

> **all**(): `TObject`

Defined in: [Config.ts:164](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L164)

Get all of the configuration items as a literal object.

#### Returns

`TObject`

All configuration items.

***

### clear()

> **clear**(): `this`

Defined in: [Config.ts:173](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L173)

Clear all of the configuration items.

#### Returns

`this`

The current Config instance.

***

### firstMatch()

Get the first match configuration value.

#### Param

An array of keys to check.

#### Param

The fallback value if no key matches.

#### Call Signature

> **firstMatch**\<`TReturn`\>(`keys`): `undefined` \| `TReturn`

Defined in: [Config.ts:78](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L78)

Get the first match configuration value.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### keys

`PropertyKey`[]

An array of keys to check.

##### Returns

`undefined` \| `TReturn`

The first matching configuration value.

The first matching configuration value.

##### Param

An array of keys to check.

##### Param

The fallback value if no key matches.

#### Call Signature

> **firstMatch**\<`TReturn`\>(`keys`, `fallback`): `TReturn`

Defined in: [Config.ts:87](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L87)

Get the first match configuration value.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### keys

`PropertyKey`[]

An array of keys to check.

###### fallback

`TReturn`

The fallback value if no key matches.

##### Returns

`TReturn`

The first matching configuration value.

The first matching configuration value.

##### Param

An array of keys to check.

##### Param

The fallback value if no key matches.

***

### get()

Get the specified configuration value.

#### Param

The key or keys to retrieve from the configuration.

#### Param

The fallback value if the key does not exist.

#### Call Signature

> **get**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: [Config.ts:50](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L50)

Get the specified configuration value.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`PropertyKey`

The key or keys to retrieve from the configuration.

##### Returns

`undefined` \| `TReturn`

The configuration value.

The configuration value.

##### Param

The key or keys to retrieve from the configuration.

##### Param

The fallback value if the key does not exist.

#### Call Signature

> **get**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: [Config.ts:59](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L59)

Get the specified configuration value.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`PropertyKey`

The key or keys to retrieve from the configuration.

###### fallback

`TReturn`

The fallback value if the key does not exist.

##### Returns

`TReturn`

The configuration value.

The configuration value.

##### Param

The key or keys to retrieve from the configuration.

##### Param

The fallback value if the key does not exist.

***

### getMany()

> **getMany**\<`TReturn`\>(`keys`): `TReturn`

Defined in: [Config.ts:107](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L107)

Get many configuration values.

#### Type Parameters

• **TReturn** = `Record`\<`PropertyKey`, `unknown`\>

#### Parameters

##### keys

The keys to retrieve from the configuration.

`Record`\<`PropertyKey`, `unknown`\> | `PropertyKey`[]

#### Returns

`TReturn`

An object containing the requested configuration values.

***

### has()

> **has**(`key`): `boolean`

Defined in: [Config.ts:119](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L119)

Determine if the given configuration value exists.

#### Parameters

##### key

The key or keys to check.

`PropertyKey` | `PropertyKey`[]

#### Returns

`boolean`

True if the key exists, false otherwise.

***

### set()

> **set**\<`TValue`\>(`key`, `value`?): `this`

Defined in: [Config.ts:130](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L130)

Set a given configuration value.

#### Type Parameters

• **TValue**

#### Parameters

##### key

The key or keys to set in the configuration.

`PropertyKey` | `PropertyKey`[] | `Record`\<`PropertyKey`, `TValue`\>

##### value?

`TValue`

The value to set.

#### Returns

`this`

The current Config instance.

***

### create()

> `static` **create**\<`TObject`\>(`items`?): [`Config`](Config.md)\<`TObject`\>

Defined in: [Config.ts:21](https://github.com/stonemjs/config/blob/ccbb9f9cdf92ce324f4e87410067b6f9e4a18f3f/src/Config.ts#L21)

Create a Config.

#### Type Parameters

• **TObject** *extends* `object` = `Record`\<`PropertyKey`, `unknown`\>

#### Parameters

##### items?

`TObject`

Initial configuration items.

#### Returns

[`Config`](Config.md)\<`TObject`\>

A new Config instance.
