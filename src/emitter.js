export class Emitter {
  #events = {}
  on(eventName, callback) {
    const current = this.#events[eventName]
    current && current.forEach(args => callback(...args))
  }
  emit(eventName, ...args) {
    const events = this.#events
    events[eventName]?.length ? events[eventName].push(args) : (events[eventName] = [args])
  }
  clear(eventName) {
    eventName ? this.#events[eventName] = [] : this.events = {}
  }
}

export const useEmitter = () => new Emitter()
