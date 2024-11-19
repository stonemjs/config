import { Proxiable } from './Proxiable'
import { get as lodashGet, set as lodashSet, has as lodashHas, mergeWith as lodashMergeWith, isObjectLike } from 'lodash-es'

/**
 * Represents a ConfigItems map where properties are strings mapped to values of type T.
 */
export type ConfigItems<T = any> = Record<PropertyKey, T>

/**
 * Class representing a Config.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 *
 * @template T
 */
export class Config<T = any> extends Proxiable {
  private items: ConfigItems<T>

  /**
   * Create a Config.
   *
   * @param items - Initial configuration items.
   * @returns A new Config instance.
   */
  static create<T>(items: ConfigItems<T> = {}): Config<T> {
    return new this(items)
  }

  /**
   * Create a Config.
   *
   * @param items - Initial configuration items.
   */
  protected constructor (items: ConfigItems<T> = {}) {
    super({
      get: (target: Config<T>, prop: PropertyKey, receiver: unknown) => {
        if (Reflect.has(target, prop)) {
          return Reflect.get(target, prop, receiver)
        } else {
          return target.get(prop as string)
        }
      }
    })

    this.items = { ...items }
  }

  /**
   * Get the specified configuration value.
   *
   * @param key - The key or keys to retrieve from the configuration.
   * @param fallback - The fallback value if the key does not exist.
   * @returns The configuration value.
   */
  public get<R>(key: PropertyKey, fallback?: R): R | undefined {
    return lodashGet(this.items, key, fallback) as R
  }

  /**
   * Get the first match configuration value.
   *
   * @param keys - An array of keys to check.
   * @param fallback - The fallback value if no key matches.
   * @returns The first matching configuration value.
   */
  public firstMatch<R>(keys: PropertyKey[], fallback?: R): R {
    const firstKey = keys.find((v) => this.has(v)) ?? []
    return lodashGet(this.items, firstKey, fallback)
  }

  /**
   * Get many configuration values.
   *
   * @param keys - The keys to retrieve from the configuration.
   * @returns An object containing the requested configuration values.
   */
  public getMany<R>(keys: PropertyKey[] | Record<PropertyKey, T>): R {
    const entries: Array<[PropertyKey, T | undefined]> = Array.isArray(keys) ? keys.map((v) => [v, undefined]) : Object.entries(keys)
    return entries.reduce<any>((results: R, [key, fallback]) => ({ ...results, [key]: lodashGet(this.items, key, fallback) }), {})
  }

  /**
   * Determine if the given configuration value exists.
   *
   * @param key - The key or keys to check.
   * @returns True if the key exists, false otherwise.
   */
  public has (key: PropertyKey | PropertyKey[]): boolean {
    return lodashHas(this.items, key)
  }

  /**
   * Set a given configuration value.
   *
   * @param key - The key or keys to set in the configuration.
   * @param value - The value to set.
   * @returns The current Config instance.
   */
  public set<V>(key: PropertyKey | PropertyKey[] | Record<PropertyKey, T>, value?: V): this {
    const entries: Array<[PropertyKey, any]> = typeof key === 'object' ? Object.entries(key) : [[key, value]]

    for (const [name, val] of entries) {
      lodashSet(this.items, name, val)
    }

    return this
  }

  /**
   * Allows providers to define the default config for a module.
   *
   * @param key - The key or keys to set as defaults.
   * @param value - The value to set as default.
   * @returns The current Config instance.
   */
  public add<V>(key: PropertyKey, value: V): this {
    if (this.has(key) && isObjectLike(this.get(key)) && isObjectLike(value)) {
      lodashMergeWith(value, this.get(key))
    }

    return this.set(key, value)
  }

  /**
   * Get all of the configuration items as a literal object.
   *
   * @returns All configuration items.
   */
  public all (): ConfigItems<T> {
    return this.items
  }

  /**
   * Clear all of the configuration items.
   *
   * @returns The current Config instance.
   */
  public clear (): this {
    this.items = Object.create(null)
    return this
  }
}
