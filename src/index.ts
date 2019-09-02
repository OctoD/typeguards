export type FunctionType = (...args: any[]) => any;
export type TypeGuard<TReturn> = (arg: unknown) => arg is TReturn;

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is any[]}
 */
export function isArray(arg: unknown): arg is any[] {
  return Array.isArray(arg);
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is bigint}
 */
export function isBigInt(arg: unknown): arg is bigint {
  return typeof arg === 'bigint';
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is boolean}
 */
export function isBoolean(arg: unknown): arg is boolean {
  return typeof arg === 'boolean';
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is Date}
 */
export function isDate(arg: unknown): arg is Date {
  return arg instanceof Date;
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is (... args: any[]) => any}
 */
export function isFunction(arg: unknown): arg is FunctionType {
  return typeof arg === 'function';
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is Iterable<any>}
 */
export function isIterable(arg: unknown): arg is Iterable<any> {
  return isObject(arg) && Symbol.iterator in arg;
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is IterableIterator<any>}
 */
export function isIterableIterator(arg: unknown): arg is IterableIterator<any> {
  return isIterable(arg) && 'next' in arg && 'return' in arg && 'throw' in arg;
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is number}
 */
export function isNumber(arg: unknown): arg is number {
  return typeof arg === 'number';
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is object}
 */
export function isPlainObject(arg: unknown): arg is object {
  return typeof arg === 'object' && !isArray(arg) && arg !== null;
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is object}
 */
export function isObject(arg: unknown): arg is object {
  return typeof arg === 'object';
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is null}
 */
export function isNull(arg: unknown): arg is null {
  return arg === null;
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is string}
 */
export function isString(arg: unknown): arg is string {
  return typeof arg === 'string';
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is symbol}
 */
export function isSymbol(arg: unknown): arg is symbol {
  return typeof arg === 'symbol';
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is undefined}
 */
export function isUndefined(arg: unknown): arg is undefined {
  return arg === undefined;
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @param {string} key
 * @returns {arg is Pick<any, typeof key>}
 */
export function hasKey(arg: unknown, key: string): arg is Pick<any, typeof key> {
  return isObject(arg) && key in arg;
}

/**
 *
 *
 * @export
 * @template T
 * @param {unknown} arg
 * @param {string} key
 * @param {TypeGuard<T>} typeguard
 * @returns {arg is Record<typeof key, T>}
 */
export function hasKeyOfType<T>(arg: unknown, key: string, typeguard: TypeGuard<T>): arg is Record<typeof key, T> {
  return hasKey(arg, key) && typeguard((arg as any)[key]);
}
