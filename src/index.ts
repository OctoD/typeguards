export type FunctionType = (...args: any[]) => any;
export type TypeGuard<TReturn> = (arg: unknown) => arg is TReturn;

/**
 * Returns `true` if the passed argument is an array
 *
 * ```ts
 * isArray([]) // true
 * isArray(100) // false
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is any[]}
 */
export function isArray(arg: unknown): arg is any[] {
  return Array.isArray(arg);
}

/**
 * Returns `true` if the passed argument is a BigInt
 *
 * ```ts
 * isBigInt(100) // false
 * isBigInt(BigInt(100)) // false
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is bigint}
 */
export function isBigInt(arg: unknown): arg is bigint {
  return typeof arg === "bigint";
}

/**
 * Returns `true` if the passed argument is a boolean
 *
 * ```ts
 * isBoolean(false) // true
 * isBoolean(0) // false
 * isBoolean(!0) // true
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is boolean}
 */
export function isBoolean(arg: unknown): arg is boolean {
  return typeof arg === "boolean";
}

/**
 * Returns `true` if the passed argument is a Date
 *
 * ```ts
 * isDate(10) // false
 * isDate(new Date()) // true
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is Date}
 */
export function isDate(arg: unknown): arg is Date {
  return arg instanceof Date;
}

/**
 * Returns `true` if the passed argument is an Error
 *
 * ```ts
 * isError(10) // false
 * isError({}) // false
 * isError(new Error()) // true
 * isError({ name: 'FooError', message: 'Error of some type' }) // true
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is Error}
 */
export function isError(arg: unknown): arg is Error {
  return (
    typeof arg === "object" &&
    "name" in (arg as any) &&
    "message" in (arg as any)
  );
}

/**
 * Returns `true` if the passed argument is a Function
 *
 * ```ts
 * isFunction(Object) // true
 * isFunction(Object()) // false
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is (... args: any[]) => any}
 */
export function isFunction(arg: unknown): arg is FunctionType {
  return typeof arg === "function";
}

/**
 * Returns `true` if the passed argument is Iterable
 *
 * ```ts
 * isIterable(100) // false
 * isIterable([]) // true
 * isIterable(new Map()) // true
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is Iterable<any>}
 */
export function isIterable(arg: unknown): arg is Iterable<any> {
  return isObject(arg) && Symbol.iterator in arg;
}

/**
 * Returns `true` if the passed argument is a number
 *
 * ```ts
 * isNumber(10) // true
 * isNumber('10') // false
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is number}
 */
export function isNumber(arg: unknown): arg is number {
  return typeof arg === "number";
}

/**
 * Returns `true` if the passed argument is a plain object
 *
 * ```ts
 * isPlainObject([]) // false
 * isPlainObject({}) // true
 * isPlainObject(new class {}) // true
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is object}
 */
export function isPlainObject(arg: unknown): arg is object {
  return typeof arg === "object" && !isArray(arg) && arg !== null;
}

/**
 * Returns `true` if the passed argument is an object
 *
 * ```ts
 * isObject(10) // false
 * isObject([10]) // true
 * isObject({}) // true
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is object}
 */
export function isObject(arg: unknown): arg is object {
  return typeof arg === "object";
}

/**
 * Returns `true` if the passed argument is null
 *
 * ```ts
 * isNull(undefined) // false
 * isNull({}) // false
 * isNull(null) // true
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is null}
 */
export function isNull(arg: unknown): arg is null {
  return arg === null;
}

/**
 * Returns `true` if the passed argument is a RegExp
 *
 * ```ts
 * isRegExp(null) // false
 * isRegExp(/[a-z]{1,}/) // false
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is RegExp}
 */
export function isRegExp(arg: unknown): arg is RegExp {
  return arg instanceof RegExp;
}

/**
 * Returns `true` if the passed argument is a string
 *
 * ```ts
 * isString(100) // false
 * isString('100') // true
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is string}
 */
export function isString(arg: unknown): arg is string {
  return typeof arg === "string";
}

/**
 * Returns `true` if the passed argument is a symbol
 *
 * ```ts
 * isSymbol(100) // false
 * isSymbol(Symbol('foo')) // true
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is symbol}
 */
export function isSymbol(arg: unknown): arg is symbol {
  return typeof arg === "symbol";
}

/**
 * Returns `true` if the passed argument is undefined
 *
 * ```ts
 * isUndefined(undefined) // true
 * isUndefined(void 0) // true
 * isUndefined((() => {})()) // true
 * isUndefined(123) // false
 * ```
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is undefined}
 */
export function isUndefined(arg: unknown): arg is undefined {
  return arg === undefined;
}

/**
 * Returns `true` if the passed argument is an object and has a key
 *
 * ```ts
 * hasKey({}, 'foo') // false
 * hasKey({ foo: 100 }, 'foo') // true
 * ```
 *
 * @export
 * @param {unknown} arg
 * @param {string} key
 * @returns {arg is Pick<any, typeof key>}
 */
export function hasKey(
  arg: unknown,
  key: string
): arg is Pick<any, typeof key> {
  return isObject(arg) && key in arg;
}

/**
 * Returns `true` if the passed argument is an object and has a key of a type specified by a typeguard
 *
 * ```ts
 * hasKeyOfType({}, 'foo', isString) // false
 * hasKeyOfType({ foo: 100 }, 'foo', isString) // false
 * hasKeyOfType({ foo: 'hello world' }, 'foo', isString) // true
 * ```
 *
 * @export
 * @template T
 * @param {unknown} arg
 * @param {string} key
 * @param {TypeGuard<T>} typeguard
 * @returns {arg is Record<typeof key, T>}
 */
export function hasKeyOfType<T>(
  arg: unknown,
  key: string,
  typeguard: TypeGuard<T>
): arg is Record<typeof key, T> {
  return hasKey(arg, key) && typeguard((arg as any)[key]);
}
