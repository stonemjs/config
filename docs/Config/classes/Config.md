[**Config Documentation v0.0.34**](../../README.md)

***

[Config Documentation](../../modules.md) / [Config](../README.md) / Config

# Class: Config\<TObject\>

Defined in: [Config.ts:12](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L12)

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

Defined in: [Config.ts:40](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L40)

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

Defined in: [Config.ts:168](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L168)

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

Defined in: [Config.ts:196](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L196)

Get all of the configuration items as a literal object.

#### Returns

`TObject`

All configuration items.

***

### clear()

> **clear**(): `this`

Defined in: [Config.ts:214](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L214)

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

Defined in: [Config.ts:88](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L88)

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

Defined in: [Config.ts:97](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L97)

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

Defined in: [Config.ts:60](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L60)

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

Defined in: [Config.ts:69](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L69)

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

Defined in: [Config.ts:117](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L117)

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

Defined in: [Config.ts:129](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L129)

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

Defined in: [Config.ts:140](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L140)

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

### setIf()

> **setIf**\<`TValue`\>(`key`, `value`?): `this`

Defined in: [Config.ts:157](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L157)

Set a given configuration value if it does not exist.

#### Type Parameters

• **TValue**

#### Parameters

##### key

The key or keys to set in the configuration.

`PropertyKey` | `PropertyKey`[]

##### value?

`TValue`

The value to set.

#### Returns

`this`

The current Config instance.

***

### setItems()

> **setItems**(`items`): `this`

Defined in: [Config.ts:186](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L186)

Set all of the configuration items.

#### Parameters

##### items

`TObject`

The configuration items.

#### Returns

`this`

The current Config instance.

***

### toJson()

> **toJson**(): `string`

Defined in: [Config.ts:205](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L205)

Get all of the configuration items as a JSON string.

#### Returns

`string`

All configuration items as a JSON string.

***

### create()

> `static` **create**\<`TObject`\>(`items`?): [`Config`](Config.md)\<`TObject`\>

Defined in: [Config.ts:21](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L21)

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

***

### fromJson()

> `static` **fromJson**\<`TObject`\>(`items`): [`Config`](Config.md)\<`TObject`\>

Defined in: [Config.ts:31](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Config.ts#L31)

Create a Config from a JSON string.

#### Type Parameters

• **TObject** *extends* `object` = `Record`\<`PropertyKey`, `unknown`\>

#### Parameters

##### items

`string`

The JSON string to create the Config from.

#### Returns

[`Config`](Config.md)\<`TObject`\>

A new Config instance.
