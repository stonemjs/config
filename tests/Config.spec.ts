import { Config } from '../src/Config'

describe('Config', () => {
  let config: Config<any>

  beforeEach(() => {
    config = Config.create({
      setting1: 'value1',
      setting2: 'value2',
      nested: {
        key: 'nestedValue'
      }
    })
  })

  it('should create a Config instance with initial values', () => {
    expect((config as any).setting1).toBe('value1')
    expect(config.get('setting2')).toBe('value2')
    expect(config.get('nested.key')).toBe('nestedValue')
  })

  it('should get a configuration value with a fallback', () => {
    expect(config.get('nonExistentKey', 'defaultValue')).toBe('defaultValue')
    expect(config.getMany({ key: 'defaultValue' })).toEqual({ key: 'defaultValue' })
    expect(config.firstMatch(['nonExistent', 'nonExistent2'], 'default')).toBe('default')
  })

  it('should get the first match value', () => {
    expect(config.firstMatch(['nonExistent', 'setting2'], 'default')).toBe('value2')
  })

  it('should get multiple configuration values', () => {
    const result = config.getMany(['setting1', 'nested.key'])
    expect(result).toEqual({
      setting1: 'value1',
      'nested.key': 'nestedValue'
    })
  })

  it('should determine if a configuration value exists', () => {
    expect(config.has('setting1')).toBe(true)
    expect(config.has('nonExistent')).toBe(false)
  })

  it('should set a new configuration value', () => {
    config.set('setting3', 'value3')
    expect(config.get('setting3')).toBe('value3')
  })

  it('should set multiple configuration values', () => {
    config.set({ setting4: 'value4', setting5: 'value5' })
    expect(config.get('setting4')).toBe('value4')
    expect(config.get('setting5')).toBe('value5')
  })

  it('should merge object value when exists', () => {
    config.add('nested', { key2: ['default6'] })
    config.add('nested.key2', 'default7')
    expect(config.get('nested')).toEqual({ key: 'nestedValue', key2: ['default6', 'default7'] })
    config.add('setting1', 'newDefault')
    expect(config.get('setting1')).toBe('newDefault')
  })

  it('should return all configuration items', () => {
    expect(config.all()).toEqual({
      setting1: 'value1',
      setting2: 'value2',
      nested: {
        key: 'nestedValue'
      }
    })
  })

  it('should clear all configuration items', () => {
    config.clear()
    expect(config.all()).toEqual({})
  })
})
