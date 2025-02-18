[**Config Documentation v0.0.34**](../../README.md)

***

[Config Documentation](../../modules.md) / [Proxiable](../README.md) / Proxiable

# Class: `abstract` Proxiable

Defined in: [Proxiable.ts:9](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Proxiable.ts#L9)

Class representing a Proxiable.

This class allows instances to be wrapped in a Proxy, enabling custom behaviors for property access, assignment, etc.

## Author

Mr. Stone <evensstone@gmail.com>

## Extended by

- [`Config`](../../Config/classes/Config.md)

## Constructors

### new Proxiable()

> **new Proxiable**(`handler`): [`Proxiable`](Proxiable.md)

Defined in: [Proxiable.ts:16](https://github.com/stonemjs/config/blob/6c0474b2734e55bcca0b952857de65f462ba7125/src/Proxiable.ts#L16)

Creates a Proxiable instance wrapped in a Proxy.

#### Parameters

##### handler

`ProxyHandler`\<[`Proxiable`](Proxiable.md)\>

A trap object for the proxy, which defines custom behavior for fundamental operations (e.g., property lookup, assignment, etc.).

#### Returns

[`Proxiable`](Proxiable.md)

A new proxy object for this instance.
