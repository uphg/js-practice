function bind(atThis, ...bindArgs) {
  const fn = this
  return function (...args) {
    return fn?.call(atThis, ...bindArgs, ...args)
  }
}

Function.prototype.bind2 = bind

export default bind