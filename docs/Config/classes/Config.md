[**Config Documentation v0.0.33**](../../README.md) • **Docs**

***

[Config Documentation v0.0.33](../../modules.md) / [Config](../README.md) / Config

# Class: Config\<TObject\>

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

Create a Config.

#### Parameters

• **items?**: `any`

Initial configuration items.

#### Returns

[`Config`](Config.md)\<`TObject`\>

#### Overrides

[`Proxiable`](../../Proxiable/classes/Proxiable.md).[`constructor`](../../Proxiable/classes/Proxiable.md#constructors)

#### Defined in

[Config.ts:30](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L30)

## Methods

### add()

> **add**\<`TValue`\>(`key`, `value`): `this`

Allows providers to define the default config for a module.

#### Type Parameters

• **TValue**

#### Parameters

• **key**: `PropertyKey`

The key or keys to set as defaults.

• **value**: `TValue`

The value to set as default.

#### Returns

`this`

The current Config instance.

#### Defined in

[Config.ts:147](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L147)

***

### all()

> **all**(): `TObject`

Get all of the configuration items as a literal object.

#### Returns

`TObject`

All configuration items.

#### Defined in

[Config.ts:164](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L164)

***

### clear()

> **clear**(): `this`

Clear all of the configuration items.

#### Returns

`this`

The current Config instance.

#### Defined in

[Config.ts:173](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L173)

***

### firstMatch()

Get the first match configuration value.

#### Param

An array of keys to check.

#### Param

The fallback value if no key matches.

#### firstMatch(keys)

> **firstMatch**\<`TReturn`\>(`keys`): `undefined` \| `TReturn`

Get the first match configuration value.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

• **keys**: `PropertyKey`[]

An array of keys to check.

##### Returns

`undefined` \| `TReturn`

The first matching configuration value.

The first matching configuration value.

##### Param

An array of keys to check.

##### Param

The fallback value if no key matches.

##### Defined in

[Config.ts:78](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L78)

#### firstMatch(keys, fallback)

> **firstMatch**\<`TReturn`\>(`keys`, `fallback`): `TReturn`

Get the first match configuration value.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

• **keys**: `PropertyKey`[]

An array of keys to check.

• **fallback**: `TReturn`

The fallback value if no key matches.

##### Returns

`TReturn`

The first matching configuration value.

The first matching configuration value.

##### Param

An array of keys to check.

##### Param

The fallback value if no key matches.

##### Defined in

[Config.ts:87](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L87)

***

### get()

Get the specified configuration value.

#### Param

The key or keys to retrieve from the configuration.

#### Param

The fallback value if the key does not exist.

#### get(key)

> **get**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Get the specified configuration value.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

• **key**: `PropertyKey`

The key or keys to retrieve from the configuration.

##### Returns

`undefined` \| `TReturn`

The configuration value.

The configuration value.

##### Param

The key or keys to retrieve from the configuration.

##### Param

The fallback value if the key does not exist.

##### Defined in

[Config.ts:50](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L50)

#### get(key, fallback)

> **get**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Get the specified configuration value.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

• **key**: `PropertyKey`

The key or keys to retrieve from the configuration.

• **fallback**: `TReturn`

The fallback value if the key does not exist.

##### Returns

`TReturn`

The configuration value.

The configuration value.

##### Param

The key or keys to retrieve from the configuration.

##### Param

The fallback value if the key does not exist.

##### Defined in

[Config.ts:59](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L59)

***

### getMany()

> **getMany**\<`TReturn`\>(`keys`): `TReturn`

Get many configuration values.

#### Type Parameters

• **TReturn** = `Record`\<`PropertyKey`, `unknown`\>

#### Parameters

• **keys**: `Record`\<`PropertyKey`, `unknown`\> \| `PropertyKey`[]

The keys to retrieve from the configuration.

#### Returns

`TReturn`

An object containing the requested configuration values.

#### Defined in

[Config.ts:107](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L107)

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

[Config.ts:119](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L119)

***

### set()

> **set**\<`TValue`\>(`key`, `value`?): `this`

Set a given configuration value.

#### Type Parameters

• **TValue**

#### Parameters

• **key**: `PropertyKey` \| `Record`\<`PropertyKey`, `unknown`\> \| `PropertyKey`[]

The key or keys to set in the configuration.

• **value?**: `TValue`

The value to set.

#### Returns

`this`

The current Config instance.

#### Defined in

[Config.ts:130](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L130)

***

### create()

> `static` **create**\<`TObject`\>(`items`?): [`Config`](Config.md)\<`TObject`\>

Create a Config.

#### Type Parameters

• **TObject** *extends* `object` = `Record`\<`PropertyKey`, `unknown`\>

#### Parameters

• **items?**: `TObject`

Initial configuration items.

#### Returns

[`Config`](Config.md)\<`TObject`\>

A new Config instance.

#### Defined in

[Config.ts:21](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Config.ts#L21)
