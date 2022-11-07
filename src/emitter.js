export class Emitter {
  #events = {}
  on(eventName, callback) {
    const e = this.#events
    e[eventName] ? e[eventName].push(callback) : e[eventName] = [callback]
  }
  emit(eventName, ...args) {
    const current = this.#events[eventName]
    current && current.forEach((fn) => fn(...args))
  }
  clear(eventName) {
    eventName ? this.#events[eventName] = [] : this.events = {}
  }
}

export const useEmitter = () => new Emitter()
