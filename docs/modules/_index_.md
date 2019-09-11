**[typescript-node-lib](../README.md)**

[Globals](../README.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Type aliases

* [FunctionType](_index_.md#functiontype)
* [TypeGuard](_index_.md#typeguard)

### Functions

* [hasKey](_index_.md#haskey)
* [hasKeyOfType](_index_.md#haskeyoftype)
* [isArray](_index_.md#isarray)
* [isBigInt](_index_.md#isbigint)
* [isBoolean](_index_.md#isboolean)
* [isDate](_index_.md#isdate)
* [isFunction](_index_.md#isfunction)
* [isIterable](_index_.md#isiterable)
* [isNull](_index_.md#isnull)
* [isNumber](_index_.md#isnumber)
* [isObject](_index_.md#isobject)
* [isPlainObject](_index_.md#isplainobject)
* [isString](_index_.md#isstring)
* [isSymbol](_index_.md#issymbol)
* [isUndefined](_index_.md#isundefined)

## Type aliases

###  FunctionType

Ƭ **FunctionType**: *function*

*Defined in [index.ts:1](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L1)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  TypeGuard

Ƭ **TypeGuard**: *function*

*Defined in [index.ts:2](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L2)*

#### Type declaration:

▸ (`arg`: unknown): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

## Functions

###  hasKey

▸ **hasKey**(`arg`: unknown, `key`: string): *boolean*

*Defined in [index.ts:232](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L232)*

Returns `true` if the passed argument is an object and has a key

```ts
hasKey({}, 'foo') // false
hasKey({ foo: 100 }, 'foo') // true
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |
`key` | string |

**Returns:** *boolean*

___

###  hasKeyOfType

▸ **hasKeyOfType**<**T**>(`arg`: unknown, `key`: string, `typeguard`: [TypeGuard](_index_.md#typeguard)‹T›): *boolean*

*Defined in [index.ts:255](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L255)*

Returns `true` if the passed argument is an object and has a key of a type specified by a typeguard

```ts
hasKeyOfType({}, 'foo', isString) // false
hasKeyOfType({ foo: 100 }, 'foo', isString) // false
hasKeyOfType({ foo: 'hello world' }, 'foo', isString) // true
```

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |
`key` | string |
`typeguard` | [TypeGuard](_index_.md#typeguard)‹T› |

**Returns:** *boolean*

___

###  isArray

▸ **isArray**(`arg`: unknown): *boolean*

*Defined in [index.ts:16](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L16)*

Returns `true` if the passed argument is an array

```ts
isArray([]) // true
isArray(100) // false
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isBigInt

▸ **isBigInt**(`arg`: unknown): *boolean*

*Defined in [index.ts:32](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L32)*

Returns `true` if the passed argument is a BigInt

```ts
isBigInt(100) // false
isBigInt(BigInt(100)) // false
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isBoolean

▸ **isBoolean**(`arg`: unknown): *boolean*

*Defined in [index.ts:49](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L49)*

Returns `true` if the passed argument is a boolean

```ts
isBoolean(false) // true
isBoolean(0) // false
isBoolean(!0) // true
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isDate

▸ **isDate**(`arg`: unknown): *boolean*

*Defined in [index.ts:65](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L65)*

Returns `true` if the passed argument is a Date

```ts
isDate(10) // false
isDate(new Date()) // true
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isFunction

▸ **isFunction**(`arg`: unknown): *boolean*

*Defined in [index.ts:81](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L81)*

Returns `true` if the passed argument is a Function

```ts
isFunction(Object) // true
isFunction(Object()) // false
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isIterable

▸ **isIterable**(`arg`: unknown): *boolean*

*Defined in [index.ts:98](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L98)*

Returns `true` if the passed argument is Iterable

```ts
isIterable(100) // false
isIterable([]) // true
isIterable(new Map()) // true
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isNull

▸ **isNull**(`arg`: unknown): *boolean*

*Defined in [index.ts:165](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L165)*

Returns `true` if the passed argument is null

```ts
isNull(undefined) // false
isNull({}) // false
isNull(null) // true
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isNumber

▸ **isNumber**(`arg`: unknown): *boolean*

*Defined in [index.ts:114](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L114)*

Returns `true` if the passed argument is a number

```ts
isNumber(10) // true
isNumber('10') // false
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isObject

▸ **isObject**(`arg`: unknown): *boolean*

*Defined in [index.ts:148](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L148)*

Returns `true` if the passed argument is an object

```ts
isObject(10) // false
isObject([10]) // true
isObject({}) // true
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isPlainObject

▸ **isPlainObject**(`arg`: unknown): *boolean*

*Defined in [index.ts:131](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L131)*

Returns `true` if the passed argument is a plain object

```ts
isPlainObject([]) // false
isPlainObject({}) // true
isPlainObject(new class {}) // true
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isString

▸ **isString**(`arg`: unknown): *boolean*

*Defined in [index.ts:181](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L181)*

Returns `true` if the passed argument is a string

```ts
isString(100) // false
isString('100') // true
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isSymbol

▸ **isSymbol**(`arg`: unknown): *boolean*

*Defined in [index.ts:197](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L197)*

Returns `true` if the passed argument is a symbol

```ts
isSymbol(100) // false
isSymbol(Symbol('foo')) // true
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*

___

###  isUndefined

▸ **isUndefined**(`arg`: unknown): *boolean*

*Defined in [index.ts:215](https://github.com/OctoD/typeguards/blob/6b30a52/src/index.ts#L215)*

Returns `true` if the passed argument is undefined

```ts
isUndefined(undefined) // true
isUndefined(void 0) // true
isUndefined((() => {})()) // true
isUndefined(123) // false
```

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*