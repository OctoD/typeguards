import * as guards from "..";

function testfn(fn: guards.FunctionType, cb: guards.FunctionType) {
  test(fn.name, cb);
}

describe(`mylib`, () => {
  testfn(guards.hasKey, () => {
    expect(guards.hasKey({}, "foo")).toBeFalsy();
    expect(guards.hasKey({ foo: 1 }, "foo")).toBeTruthy();
  });

  testfn(guards.hasKeyOfType, () => {
    expect(guards.hasKeyOfType({}, "foo", guards.isNumber)).toBeFalsy();
    expect(
      guards.hasKeyOfType({ foo: "string" }, "foo", guards.isNumber)
    ).toBeFalsy();
    expect(
      guards.hasKeyOfType({ foo: 100 }, "foo", guards.isNumber)
    ).toBeTruthy();
  });

  testfn(guards.isArray, () => {
    expect(guards.isArray(123)).toBeFalsy();
    expect(guards.isArray([])).toBeTruthy();
  });

  testfn(guards.isBigInt, () => {
    expect(guards.isBigInt(10)).toBeFalsy();
    expect(guards.isBigInt(BigInt(10))).toBeTruthy();
  });

  testfn(guards.isBoolean, () => {
    expect(guards.isBoolean(123)).toBeFalsy();
    expect(guards.isBoolean(true)).toBeTruthy();
  });

  testfn(guards.isDate, () => {
    expect(guards.isDate(10)).toBeFalsy();
    expect(guards.isDate(new Date())).toBeTruthy();
  });

  testfn(guards.isError, () => {
    expect(guards.isError(10)).toBeFalsy();
    expect(guards.isError({})).toBeFalsy();
    expect(guards.isError(new Error())).toBeTruthy();
    expect(
      guards.isError({ name: "FooError", message: "Error of some type" })
    ).toBeTruthy();
  });

  testfn(guards.isFunction, () => {
    expect(guards.isFunction(1)).toBeFalsy();
    expect(guards.isFunction(jest.fn)).toBeTruthy();
  });

  testfn(guards.isIterable, () => {
    expect(guards.isIterable([])).toBeTruthy();
    expect(guards.isIterable(new Map().entries())).toBeTruthy();
    expect(guards.isIterable(new Map())).toBeTruthy();
    expect(guards.isIterable(1)).toBeFalsy();
  });

  testfn(guards.isNull, () => {
    expect(guards.isNull(10)).toBeFalsy();
    expect(guards.isNull(undefined)).toBeFalsy();
    expect(guards.isNull(null)).toBeTruthy();
  });

  testfn(guards.isNumber, () => {
    expect(guards.isNumber("")).toBeFalsy();
    expect(guards.isNumber("".length)).toBeTruthy();
  });

  testfn(guards.isObject, () => {
    expect(guards.isObject({})).toBeTruthy();
    expect(guards.isObject(new (class {})())).toBeTruthy();
    expect(guards.isObject("")).toBeFalsy();
    expect(guards.isObject([])).toBeTruthy();
  });

  testfn(guards.isPlainObject, () => {
    expect(guards.isPlainObject({})).toBeTruthy();
    expect(guards.isPlainObject(new (class {})())).toBeTruthy();
    expect(guards.isPlainObject("")).toBeFalsy();
    expect(guards.isPlainObject([])).toBeFalsy();
  });

  testfn(guards.isRegExp, () => {
    expect(guards.isRegExp(null)).toBeFalsy();
    expect(guards.isRegExp(/[a-z]{1,}/)).toBeTruthy();
    expect(guards.isRegExp(new RegExp("[a-z]{1,}"))).toBeTruthy();
  });

  testfn(guards.isString, () => {
    expect(guards.isString(1)).toBeFalsy();
    expect(guards.isString("1")).toBeTruthy();
  });

  testfn(guards.isSymbol, () => {
    expect(guards.isSymbol(Symbol("foo"))).toBeTruthy();
    expect(guards.isSymbol(123)).toBeFalsy();
  });

  testfn(guards.isUndefined, () => {
    expect(guards.isUndefined(undefined)).toBeTruthy();
    expect(guards.isUndefined(!undefined)).toBeFalsy();
  });
});
