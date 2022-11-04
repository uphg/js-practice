function bind(atThis) {
  const fn = this
  return function (...args) {
    return fn?.call(atThis, ...args)
  }
}

Function.prototype.bind2 = bind

export default bind