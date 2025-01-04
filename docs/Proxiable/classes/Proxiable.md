[**Config Documentation v0.0.33**](../../README.md) • **Docs**

***

[Config Documentation v0.0.33](../../modules.md) / [Proxiable](../README.md) / Proxiable

# Class: `abstract` Proxiable

Class representing a Proxiable.

This class allows instances to be wrapped in a Proxy, enabling custom behaviors for property access, assignment, etc.

## Author

Mr. Stone <evensstone@gmail.com>

## Extended by

- [`Config`](../../Config/classes/Config.md)

## Constructors

### new Proxiable()

> **new Proxiable**(`handler`): [`Proxiable`](Proxiable.md)

Creates a Proxiable instance wrapped in a Proxy.

#### Parameters

• **handler**: `ProxyHandler`\<[`Proxiable`](Proxiable.md)\>

A trap object for the proxy, which defines custom behavior for fundamental operations (e.g., property lookup, assignment, etc.).

#### Returns

[`Proxiable`](Proxiable.md)

A new proxy object for this instance.

#### Defined in

[Proxiable.ts:16](https://github.com/stonemjs/config/blob/766b91d24a20493da66397081634b102901d3c54/src/Proxiable.ts#L16)
